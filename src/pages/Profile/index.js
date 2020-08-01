import React, { useState, useEffect } from 'react'
import { uniqueId } from 'lodash'
import filesize from 'filesize'
import api from 'api'
import Upload from 'components/Upload'
import FileList from 'components/FileList'
import Row from 'components/Row'
import Column from 'components/Column'
import Avatar from 'components/Avatar'
import Typography from 'components/Typography'
import { getCurrentUser } from 'helpers'
import { Container, Content } from './styles'

function Profile() {
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [currentUser, setCurrentUser] = useState({})

  const updateStates = async () => {
    setCurrentUser(getCurrentUser())
    const response = await api.get('/images')
    setUploadedFiles(
      response.data.map((file) => ({
        id: file._id,
        name: file.name,
        readableSize: filesize(file.size),
        preview: file.url,
        uploaded: true,
        url: file.url,
      }))
    )
  }

  const updateFile = (currentFile, data, currentFiles) => {
    const files = currentFiles?.map((file) => {
      return String(currentFile.name) === String(file.name)
        ? { ...file, ...data }
        : file
    })

    setUploadedFiles(files)
  }

  const processUpload = async (uploadedFile, currentFiles) => {
    try {
      const data = new FormData()

      data.append('file', uploadedFile.file, uploadedFile.name)

      const response = await api.post('/upload-image', data, {
        onUploadProgress: (e) => {
          const progress = parseInt(Math.round((e.loaded * 100) / e.total))
          updateFile(uploadedFile, { progress }, currentFiles)
        },
      })

      updateFile(uploadedFile.id, {
        uploaded: true,
        id: response.data._id,
        url: response.data.url,
      })
    } catch (error) {
      updateFile(uploadedFile.id, {
        error: true,
      })
    }
  }

  const handleUpload = (files) => {
    const currentFiles = files.map((file) => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }))

    const asd = uploadedFiles.concat(currentFiles)

    setUploadedFiles(asd)

    asd.forEach((e) => processUpload(e, asd))
  }

  const handleDelete = async (id) => {
    await api.delete(`/images/${id}`)
    setUploadedFiles(uploadedFiles.filter((file) => file.id !== id))
  }

  useEffect(() => {
    updateStates()

    return () => {
      uploadedFiles.forEach((file) => URL.revokeObjectURL(file.preview))
    }
  }, [])

  return (
    <Row>
      <Column
        margin="12px"
        size={12}
        justifyContent="center"
        background="#5A4E61"
        radius="5px"
      >
        <Column margin="90px" size={12} justifyContent="center">
          <Avatar size="120px" src={currentUser.avatar} border="green" />
        </Column>
        <Container>
          <Content>
            <Upload onUpload={handleUpload} />
            {!!uploadedFiles?.length && (
              <FileList files={uploadedFiles} onDelete={handleDelete} />
            )}
          </Content>
        </Container>
        <Column
          margin="10px"
          size={12}
          justifyContent="center"
          background="#302934"
          radius="5px"
        >
          <Typography>{`Nome: ${currentUser.name}`}</Typography>
          <Typography>{`Email: ${currentUser.email}`}</Typography>

          {currentUser.statusMessage && (
            <Typography>{`Status: ${currentUser.statusMessage}`}</Typography>
          )}
        </Column>
      </Column>
    </Row>
  )
}

export default Profile
