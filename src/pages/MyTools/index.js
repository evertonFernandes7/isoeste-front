import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Modal from 'react-modal';

import { GrFormAdd, GrFormClose } from 'react-icons/gr';
import VuttrText from '../../components/VuttrText';
import { Container } from '../../styles/Global';
import axios from '../../services/axios';
import * as C from './styled';

Modal.setAppElement('#root');

export default function Tools() {
  // Modal
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  function handleModalAdd() {
    setModalAdd(true);
  }

  function handleCloseAdd() {
    setModalAdd(false);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: '3px solid #000000',
      width: '470px',
    },
  };

  // Searching in the API
  const [tools, setTools] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/tools');
      setTools(response.data);
    }

    getData();
  }, []);

  // Delete
  const handleDelete = async (e, id, index) => {
    e.persist();

    try {
      await axios.delete(`/tools/${id}`);
      const newTools = [...tools];
      newTools.splice(index, 1);
      setTools(newTools);
    } catch (error) {
      console.log(error);
    }
  };

  // Form
  const [nome, setNome] = useState('');
  const [link, setLink] = useState('');
  const [descricao, setDescricao] = useState('');
  const [tags, setTags] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 2 || nome.length > 255) {
      formErrors = true;
      toast.error('Name field cannot be empty');
    } else {
      handleCloseAdd();
      window.location.reload();
    }
    if (link.length < 1 || link.length > 255) {
      formErrors = true;
      toast.error('Link field cannot be empty');
    } else {
      handleCloseAdd();
      window.location.reload();
    }
    if (descricao.length < 1 || descricao.length > 255) {
      formErrors = true;
      toast.error('Description field cannot be empty');
    } else {
      handleCloseAdd();
      window.location.reload();
    }
    if (tags.length < 1 || tags.length > 255) {
      formErrors = true;
      toast.error('tags field cannot be empty');
    } else {
      handleCloseAdd();
      window.location.reload();
    }

    if (formErrors) return;
    try {
      const response = await axios.post('/tools', {
        nome,
        link,
        descricao,
        tags,
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // Search
  const [search, setSearch] = useState('');

  return (
    <Container>
      <VuttrText />

      <C.ToolsSearchAdd>
        <label htmlFor="search">
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        <label htmlFor="check" id="labelCheck">
          <input type="checkbox" id="check" />
          search in tags only
        </label>
        <div>
          <button type="button" onClick={handleModalAdd}>
            <GrFormAdd size={22} />
            Add
          </button>
        </div>
      </C.ToolsSearchAdd>
      <Modal
        isOpen={modalAdd}
        onRequestClose={handleCloseAdd}
        style={customStyles}
      >
        <C.RemoveModal>
          <C.TitleModal>
            <i>
              <GrFormAdd size={25} />
            </i>
            <h2>Add new tool</h2>
          </C.TitleModal>
          <C.AddTools>
            <form onSubmit={handleSubmit}>
              <label htmlFor="nome">
                Tool Name:
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="nome"
                />
              </label>
              <label htmlFor="link">
                Tool Link:
                <input
                  type="text"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  placeholder="link"
                />
              </label>
              <label htmlFor="descricao">
                Tool Description:
                <input
                  type="text"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  placeholder="description"
                />
              </label>
              <label htmlFor="tags">
                Tags:
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="tags"
                />
              </label>
              <C.RemoveModalButton>
                <button type="submit">
                  <p>Add tool</p>
                </button>
              </C.RemoveModalButton>
            </form>
          </C.AddTools>
        </C.RemoveModal>
      </Modal>

      <C.Tools>
        {tools
          .filter((tool) => {
            return search.toLowerCase() === ''
              ? tool
              : tool.tags.toLowerCase().includes(search);
          })
          .map((tool, index) => (
            <section key={String(tool.nome)}>
              <C.ToolsContent>
                <h6>{tool.nome}</h6>
                <C.OpenModal>
                  <p onClick={handleOpenModal}>
                    <i>
                      <GrFormClose size={27} />
                    </i>
                    remove
                  </p>
                </C.OpenModal>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={handleCloseModal}
                  style={customStyles}
                >
                  <C.RemoveModal>
                    <h2>
                      <span>x</span> Remove Tool
                    </h2>

                    <C.RemoveModalText>
                      <p>Are you sure you want to remove hotel?</p>
                    </C.RemoveModalText>

                    <C.RemoveModalButton>
                      <button type="button" onClick={handleCloseModal}>
                        cancel
                      </button>
                      <span onClick={handleCloseModal}>
                        <button
                          type="button"
                          onClick={(e) => handleDelete(e, tool.id, index)}
                        >
                          <p>Yes,remove</p>
                        </button>
                      </span>
                    </C.RemoveModalButton>
                  </C.RemoveModal>
                </Modal>
              </C.ToolsContent>

              <C.ToolsText>
                <p>{tool.descricao}</p>
                <span>{tool.tags}</span>
              </C.ToolsText>
            </section>
          ))}
      </C.Tools>
    </Container>
  );
}
