const toolbarItems = ['Arrange', 'Sequence', 'Record', 'Mix', 'Review'];

export function MainToolbar() {
  return (
    <nav className="main-toolbar" aria-label="Primary learning tools">
      {toolbarItems.map((item) => (
        <button type="button" key={item}>
          {item}
        </button>
      ))}
    </nav>
  );
}
