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
  const body = request.body

  console.log(body)

  database.create({
    title: 'Video01',
    description: "Esse é o video 01",
    duration:100,
  })

  return reply.status(201).send()
})

server.listen({
  port: 3333,
})