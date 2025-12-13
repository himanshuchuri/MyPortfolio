// src/components/TableauEmbed.jsx
export default function TableauEmbed({ title, src }) {
  return (
    <div className="tableau-embed">
      <div className="tableau-frame-wrapper">
        <iframe
          title={title}
          src={src}
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
}
