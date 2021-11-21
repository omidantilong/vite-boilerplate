import { rest } from "msw"
import homepage from "./cms/homepage"

const backendUrl = "http://localhost:3030"

export const handlers = [
  rest.get(backendUrl + "/homepage", (req, res, ctx) => {
    // const { username } = req.body
    // return res(ctx.json(homepage))
  }),
]
