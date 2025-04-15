'use strict'

const { PrismaClient } = require('@prisma/client'); // Used in order to have a schema in line with migrations for the data DTO. It will be used in the animal service module.
const prisma = new PrismaClient();
module.exports = prisma;