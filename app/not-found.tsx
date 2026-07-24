export default function NotFound() {
  return (
    <main className="notfound">
      <div className="wrap">
        <p className="eyebrow">404</p>
        <h1>Let&apos;s tell the truth: this page doesn&apos;t exist.</h1>
        <p>
          And knowing the truth, good or bad, is what drives the right decisions. Like heading
          back to the essays.
        </p>
        <p style={{ marginTop: 28 }}>
          <a className="btn" href="/">
            Back to the writing
          </a>
        </p>
      </div>
    </main>
  );
}
