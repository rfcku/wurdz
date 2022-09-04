export const DebugTag = ({ title, value }) => {
  return (
    <div>
      <code style={{ fontSize: 10 }}>
        {title}: {value || "no val"}
      </code>
    </div>
  );
};
