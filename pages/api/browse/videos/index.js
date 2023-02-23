import { connect, model, models, Schema } from "mongoose"
const connectionString = 'mongodb+srv://user1:2bhEHe22GdtH1idX@cluster0.t27tcax.mongodb.net/sp2'


export default async function handler(req, res) {
    await connect(connectionString);
    console.log("req.method: ", req.method)

    if (req.method === 'GET') {
        const docs = await Video.find()
        res.status(200).json(docs)
    }  else {
        res.setHeader('Allow', ['GET'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}



const videoSchema = new Schema({
    title: String,
    link: String,
    desc: String,
    type: Boolean,
});

console.log("Mongoose Models", models)
const Video = models?.video || model('video', videoSchema);