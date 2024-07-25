import express from "express"
import {PrismaClient } from "@prisma/client";

const client = new PrismaClient();

const app = express()
app.use(express.json())

// https://hooks.zapier.com/hooks/catch/17043103/22b8496/

app.post("/hooks/catch/:userId/:zapId", async (req, res)=> {
    const zapId = req.params.zapId
    const userId = req.params.userId
    const body = req.body

await client.$transaction(async tsx => {
    const run = await tsx.zapRun.create({
        data: {
            zapId: zapId,
            metadata: body
        }
    })
    await tsx.zapRunOutbox.create({
        data: {
            zapRunId: run.id
        }
    })
})
    res.json({message: "recived"})


})

app.listen(3000)