import { ArrangementView } from './ArrangementView';
import { AssistantPanel } from './AssistantPanel';
import { BottomTransport } from './BottomTransport';
import { ChannelRackView } from './ChannelRackView';
import { DawBrowser } from './DawBrowser';
import { DawTopBar } from './DawTopBar';
import { MixerView } from './MixerView';
import { PianoRollView } from './PianoRollView';

export function DawWorkspace() {
  return (
    <div className="daw-workspace-shell">
      <DawTopBar />
      <div className="daw-main-grid">
        <DawBrowser />
        <main className="daw-center-stack" aria-label="Lukulu DAW simulator workspace">
          <ArrangementView />
          <div className="daw-middle-grid">
            <ChannelRackView />
            <MixerView />
          </div>
          <PianoRollView />
        </main>
        <AssistantPanel />
      </div>
      <BottomTransport />
      <button className="floating-create" type="button" aria-label="Create new item">
        +
      </button>
    </div>
  );
}
