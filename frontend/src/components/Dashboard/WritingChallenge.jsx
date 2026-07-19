import { Link } from "react-router-dom";
import { PenLine } from "lucide-react";

function WritingChallenge() {
  return (
    <div
      className="rounded-xl p-5 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a1208, #231804)",
        border: "1px solid #c4933a25",
      }}
    >
      <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
        <PenLine size={80} className="text-gold" />
      </div>

      <p className="font-mono text-xs uppercase tracking-widest text-gold mb-2">
        Weekly Challenge
      </p>

      <h3 className="font-serif text-lg font-bold text-ink mb-2">
        Write in the Dark
      </h3>

      <p className="text-sm text-ink-dim mb-4 leading-relaxed">
        Begin your story with the sentence:
        <br />
        "The last candle went out at midnight."
      </p>

      <div className="flex gap-3 text-xs text-ink-dim mb-4">
        <span>⏳ 3 days left</span>
        <span>✍️ 2,841 entries</span>
      </div>

      <Link
        to="/editor"
        className="btn-primary w-full justify-center"
        style={{
          fontSize: "13px",
          padding: "9px",
          textDecoration: "none",
        }}
      >
        Accept Challenge
      </Link>
    </div>
  );
}

export default WritingChallenge;
