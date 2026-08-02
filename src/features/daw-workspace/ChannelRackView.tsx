import { channelTracks } from './workspaceData';

export function ChannelRackView() {
  return (
    <section
      className="daw-panel channel-rack-view"
      aria-label="Channel rack step sequencer"
    >
      <div className="panel-titlebar">
        <div>
          <h2>Channel Rack</h2>
          <span>Sampler</span>
        </div>
        <div className="mini-controls">
          <span>Swing</span>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="32"
            aria-label="Swing amount"
          />
          <span>Velocity</span>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="58"
            aria-label="Velocity amount"
          />
        </div>
      </div>
      <div className="channel-rack-table">
        {channelTracks.map((track) => (
          <div className="daw-channel-row" key={track.id}>
            <div className="channel-name">
              <span>{track.icon}</span>
              <strong>{track.name}</strong>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              defaultValue={track.volume}
              aria-label={`${track.name} volume`}
            />
            <div className="daw-steps" aria-label={`${track.name} pattern`}>
              {track.pattern.map((active, index) => (
                <button
                  type="button"
                  className={active ? 'active' : undefined}
                  style={active ? { backgroundColor: track.color } : undefined}
                  key={`${track.id}-${index}`}
                  aria-label={`${track.name} step ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
