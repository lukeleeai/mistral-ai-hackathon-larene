import './ListAttacks.css';

function ListAttacks() {
  return (
    <div className="ListAttacks">
      <p>Here are the possible attack scenarios :</p>
      <ul className="attacks">
        <li>User forces score manipulation: A malicious user forces your application to rate their essay higher than it should be.</li>
        <li>User forces essay deletion: A malicious user asks your application to delete other essays.</li>
        <li>External document forces essay deletion: A malicious external document asks your application to delete other essays.</li>
        <li>External document manipulates essay score: A malicious external document forces your application to rate their essay lower than it should be.</li>
      </ul>
    </div>
  );
}

export default ListAttacks;
