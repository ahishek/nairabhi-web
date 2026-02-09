import { useState, useEffect } from 'react';

type ViewMode = 'human' | 'agent';

export default function ViewToggle() {
  const [mode, setMode] = useState<ViewMode>('human');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('view-mode') as ViewMode | null;
    if (saved) {
      setMode(saved);
      dispatchModeChange(saved);
    }
  }, []);

  const dispatchModeChange = (newMode: ViewMode) => {
    document.dispatchEvent(
      new CustomEvent('view-mode-change', { detail: { mode: newMode } })
    );
  };

  const toggle = (newMode: ViewMode) => {
    setMode(newMode);
    localStorage.setItem('view-mode', newMode);
    dispatchModeChange(newMode);
  };

  const pillStyle: React.CSSProperties = {
    display: 'inline-flex',
    backgroundColor: '#0d1117',
    border: '2px solid #30363d',
    borderRadius: '24px',
    padding: '6px',
    gap: '4px',
    fontFamily: '"JetBrains Mono", monospace',
    fontSize: '0.85rem',
    fontWeight: 500,
    cursor: 'pointer',
  };

  const buttonStyle = (isActive: boolean): React.CSSProperties => ({
    padding: '8px 18px',
    border: 'none',
    borderRadius: '20px',
    backgroundColor: isActive ? (mode === 'human' ? '#00ff41' : '#ffb000') : 'transparent',
    color: isActive ? '#0d1117' : '#8b949e',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: '"JetBrains Mono", monospace',
    fontSize: '0.85rem',
    fontWeight: 600,
    letterSpacing: '0.5px',
  });

  if (!mounted) {
    return null;
  }

  return (
    <div style={pillStyle}>
      <button
        onClick={() => toggle('human')}
        style={buttonStyle(mode === 'human')}
        aria-label="Switch to Human view"
        title="Human view"
      >
        [ HUMAN ]
      </button>
      <button
        onClick={() => toggle('agent')}
        style={buttonStyle(mode === 'agent')}
        aria-label="Switch to Agent view"
        title="Agent view"
      >
        [ AGENT ]
      </button>
    </div>
  );
}
