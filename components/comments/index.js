import { Comment } from "./comment";

export const Comments = ({ tid, comments }) => {
  if (!comments) return null;
  const { rows } = comments;
  if (!rows) return null;
  return (
    <div style={{ paddingLeft: 0, paddingRight: 0 }}>
      {rows.map((comment) => (
        <Comment key={comment._id} tid={tid} comment={comment} isComment />
      ))}
    </div>
  );
};
