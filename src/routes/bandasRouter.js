const express = require('express')
const router = express.Router()
const bandasController = require('../controllers/bandsController')

/**
 * @swagger
 * components:
 *  schemas:
 *      Bandas:
 *          type: object
 *          required:
 *              nome
 *              genero
 *          properties:
 *              id:
 *                  type: integer
 *                  description: Auto incremented ascendent counter
 *              nome:
 *                  type: string
 *                  description: The band`s name
 *              genre: 
 *                  type: string
 *                  description: The band`s genre
 *          example:
 *              id: 1
 *              nome: metallica
 *              genre: metal
 */

/**
 * @swagger
 * tags:
 *  name: Bandas
 *  description: The Bands tours API
 */

/**
 * @swagger
 * /bandas:
 *      get:
 *          summary: Returns the list of all bands
 *          tags: [Bandas]
 *          responses:
 *              200:
 *                      description: The list of bands
 *                      content:
 *                          application/json:
 *                              schema:
 *                                      type: array
 *                                      items:
 *                                      $ref: '#/components/schemas/Bandas'
 */
router.get('/', bandasController.getBandas)

/**
 * @swagger
 * /bandas/{id}:
 * get:
 *  summary: Get the bands by id
 *  tags: [Bandas]
 *  parameters:
 *      - in: path
 *        name: id
 *        schema:
 *           type: string
 *        required: true
 *        description: The band id
 *  responses:
 *      200:
 *          description: The book description by id
 *          contens:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schema/Banda'
 *      404:
 *          description": The book was not found              
 */
router.get('/:id', bandasController.getBandaById)
router.post('/', bandasController.postBanda)
router.put('/:id', bandasController.putBanda)

module.exports = router