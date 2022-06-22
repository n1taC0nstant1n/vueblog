import express, {Request, Response} from "express";
import * as bodyParser from "body-parser";

import * as postModel from "../models/post";
import {Post} from "../types/Post";
const postRouter = express.Router();
var jsonParser = bodyParser.json();


postRouter.get("/", async (req: Request, res: Response) => {
  postModel.findAll((err: Error, posts: Post[]) => {
    if (err) {
      return res.status(500).json({"errorMessage": err.message});
    }

    res.status(200).json({"data": posts});
  });
});


postRouter.get("/:id", async (req: Request, res: Response) => {
  const postId: number = Number(req.params.id);
  postModel.findOne(postId, (err: Error, user: Post) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }
    res.status(200).json({"data": postId});
  })
});

export {postRouter};
