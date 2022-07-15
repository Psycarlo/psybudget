import PocketBase from 'pocketbase'

const client = new PocketBase('http://localhost:8090')

async function createRecord() {
  console.log('lol')
  const result = await client.Records.create('demo', {
    title: 'Lorem ipsum'
  })
  return result
}

async function viewRecord(id: string) {
  const record = await client.Records.getOne('demo', id)
  return record
}

export default { createRecord, viewRecord }
