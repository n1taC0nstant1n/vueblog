import { Post } from "./../types/Post";
import { db } from "../db";
import { OkPacket, RowDataPacket } from "mysql2";
// Get all posts
export const findAll = (callback: Function) => {
  const queryString = `SELECT * FROM posts`;
  db.query(queryString, (err, result) => {
    if (err) {
      callback(err);
    }
    const rows = <RowDataPacket[]>result;
    const posts: Post[] = [];
    rows.forEach((row) => {
      const post: Post = {
        id: row.id,
        title: row.title,
        content: row.content,
        categoryId: row.categoryId,
        date: row.date,
        
      };
      posts.push(post);
    });
    callback(null, posts);
  });
};
// Get one user
export const findOne = (postId: number, callback: Function) => {
  const queryString = `SELECT * FROM posts WHERE id=?`;
  db.query(queryString, postId, (err, result) => {
    if (err) {
      callback(err);
    }

    const row = (<RowDataPacket>result)[0];
    const post: Post = {
      id: row.id,
      title: row.title,
        content: row.content,
        categoryId: row.categoryId,
        date: row.date,
     
    };
    callback(null, post);
  });
};

