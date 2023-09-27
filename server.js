// import { createServer } from 'node:http';

// const server = createServer((request, response) =>{
//   response.write("Foi");
//   return response.end()
// })

// server.listen(3333)

import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()
const database = new DatabaseMemory

server.post('/videos', (request, reply) =>{
  const {title, description, duration} = request.body

  database.create({
    title,
    description,
    duration,
  })

  return reply.status(201).send()
})

server.get('/videos', () =>{
  const videos = database.list()

  return videos
})

server.put('/videos/:id', (request,reply) => {
  const videoID = request.params.id

  const {title, description, duration} = request.body

  database.update(videoID, {
    title,
    description,
    duration,
  });

  return reply.status(204).send()
})

server.listen({
  port: 3333,
})