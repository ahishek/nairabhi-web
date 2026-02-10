import { useState, useEffect } from 'react';

type ViewMode = 'human' | 'machine';

type ViewModeStore = {
  getMode: () => ViewMode;
  setMode: (mode: ViewMode) => void;
  subscribe: (listener: (mode: ViewMode) => void) => () => void;
};

declare global {
  interface Window {
    __viewModeStore?: ViewModeStore;
  }
}

export default function ViewToggle() {
  const [mode, setMode] = useState<ViewMode>('human');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const store = window.__viewModeStore;
    if (!store) {
      setMounted(true);
      return;
    }

    setMode(store.getMode());
    const unsubscribe = store.subscribe((nextMode) => setMode(nextMode));
    setMounted(true);

    return unsubscribe;
  }, []);

  const toggle = (newMode: ViewMode) => {
    if (newMode === mode) return;
    window.__viewModeStore?.setMode(newMode);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      toggle('human');
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      toggle('machine');
    }
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
    <div style={pillStyle} onKeyDown={handleKeyDown}>
      <button
        onClick={() => toggle('human')}
        style={buttonStyle(mode === 'human')}
        aria-label="Switch to Human view"
        title="Human view"
        aria-pressed={mode === 'human'}
      >
        [ HUMAN ]
      </button>
      <button
        onClick={() => toggle('machine')}
        style={buttonStyle(mode === 'machine')}
        aria-label="Switch to Machine view"
        title="Machine view"
        aria-pressed={mode === 'machine'}
      >
        [ MACHINE ]
      </button>
    </div>
  );
}
