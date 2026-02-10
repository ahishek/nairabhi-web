import { useEffect, useState } from 'react';
import '../styles/view-toggle.css';

type ViewMode = 'human' | 'machine';

const STORAGE_KEY = 'view-mode';

const normalizeMode = (value: string | null): ViewMode => {
  if (value === 'machine' || value === 'agent') {
    return 'machine';
  }

  return 'human';
};

export default function ViewToggle() {
  const [mode, setMode] = useState<ViewMode>('human');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedMode = normalizeMode(localStorage.getItem(STORAGE_KEY));
    setMode(savedMode);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    localStorage.setItem(STORAGE_KEY, mode);
    document.body.classList.toggle('agent-mode', mode === 'machine');
  }, [mode, mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <fieldset className="view-toggle" aria-label="Content mode">
      <legend className="view-toggle__legend">Content mode</legend>

      <div className="view-toggle__option">
        <input
          type="radio"
          id="content-mode-human"
          name="content-mode"
          value="human"
          checked={mode === 'human'}
          onChange={() => setMode('human')}
        />
        <label htmlFor="content-mode-human">[ HUMAN ]</label>
      </div>

      <div className="view-toggle__option">
        <input
          type="radio"
          id="content-mode-machine"
          name="content-mode"
          value="machine"
          checked={mode === 'machine'}
          onChange={() => setMode('machine')}
        />
        <label htmlFor="content-mode-machine">[ MACHINE ]</label>
      </div>

      <p className="view-toggle__sr-status" aria-live="polite">
        Content mode set to {mode === 'machine' ? 'machine' : 'human'}.
      </p>
    </fieldset>
  );
}
