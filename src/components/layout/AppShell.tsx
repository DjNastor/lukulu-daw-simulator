import { DashboardPage } from '../../app/routes/DashboardPage';
import { LessonsPage } from '../../app/routes/LessonsPage';
import { SimulatorPage } from '../../app/routes/SimulatorPage';
import { useHashRoute } from '../../app/routes/useHashRoute';
import { ProjectBrowser } from '../browser/ProjectBrowser';
import { ChannelRack } from '../channel-rack/ChannelRack';
import { MixerPanel } from '../mixer/MixerPanel';
import { PlaylistTimeline } from '../playlist/PlaylistTimeline';
import { TransportControls } from '../transport/TransportControls';
import { MainToolbar } from './MainToolbar';
import { StatusBar } from './StatusBar';
import { TopHeader } from './TopHeader';

export function AppShell() {
  const route = useHashRoute();

  return (
    <div className="app-shell" aria-label="Lukulu Academy DAW Learning Lab workspace">
      <TopHeader />
      <MainToolbar activeRoute={route} />
      {route === 'dashboard' && <DashboardPage />}
      {route === 'lessons' && <LessonsPage />}
      {route === 'simulator' && (
        <main className="workspace-grid">
          <aside className="panel browser-area" aria-label="Learning browser">
            <ProjectBrowser />
          </aside>
          <section
            className="center-stage"
            aria-label="Arrangement and sequencing workspace"
          >
            <TransportControls />
            <SimulatorPage />
            <div className="work-panels">
              <ChannelRack />
              <PlaylistTimeline />
            </div>
          </section>
          <aside className="panel mixer-area" aria-label="Mixing workspace">
            <MixerPanel />
          </aside>
        </main>
      )}
      <StatusBar />
    </div>
  );
}
