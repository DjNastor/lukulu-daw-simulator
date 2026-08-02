import { ProjectBrowser } from '../browser/ProjectBrowser';
import { ChannelRack } from '../channel-rack/ChannelRack';
import { MixerPanel } from '../mixer/MixerPanel';
import { PlaylistTimeline } from '../playlist/PlaylistTimeline';
import { TransportControls } from '../transport/TransportControls';
import { MainToolbar } from './MainToolbar';
import { StatusBar } from './StatusBar';
import { TopHeader } from './TopHeader';

export function AppShell() {
  return (
    <div className="app-shell" aria-label="Lukulu Academy DAW Learning Lab workspace">
      <TopHeader />
      <MainToolbar />
      <main className="workspace-grid">
        <aside className="panel browser-area" aria-label="Learning browser">
          <ProjectBrowser />
        </aside>
        <section
          className="center-stage"
          aria-label="Arrangement and sequencing workspace"
        >
          <TransportControls />
          <div className="work-panels">
            <ChannelRack />
            <PlaylistTimeline />
          </div>
        </section>
        <aside className="panel mixer-area" aria-label="Mixing workspace">
          <MixerPanel />
        </aside>
      </main>
      <StatusBar />
    </div>
  );
}
