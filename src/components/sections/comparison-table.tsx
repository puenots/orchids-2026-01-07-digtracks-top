import React from 'react';
import Link from 'next/link';

const comparisonData = [
  {
    feature: 'Cost',
    digtracks: ['🏆 $10 intro price', '🏆 $34.99/month for full access'],
    bpmSupreme: ['🚫 No intro price', '🚫 $69/month for full access'],
    zipDj: ['🚫 $35 intro price', '🚫 $50/month for full access'],
  },
  {
    feature: 'Global Music Catalog',
    digtracks: ['🏆 Full access to global music'],
    bpmSupreme: ['🚫 Extra cost for full music access'],
    zipDj: ['🚫 Extra cost for full music access'],
  },
  {
    feature: 'DJ Curated Playlists',
    digtracks: ['🏆 Full access to all playlists'],
    bpmSupreme: ['Extra cost for full playlist access'],
    zipDj: ['Extra cost for full playlist access'],
  },
  {
    feature: 'Exclusive Remixes',
    digtracks: ['🏆 Remixes and edits available only on DIGTRACKS'],
    bpmSupreme: ['Extra cost for full remix access'],
    zipDj: ['🚫 Not available'],
  },
  {
    feature: 'Bulk Downloads - Desktop App',
    digtracks: ['🏆 Remote downloads using your phone or computer'],
    bpmSupreme: ['🚫 Not available'],
    zipDj: ['🚫 Not available'],
  },
  {
    feature: 'Bulk Downloads - In-Browser',
    digtracks: ['🏆 Instant access to native MP3 files with a single click'],
    bpmSupreme: ['Inconvenient ZIP files'],
    zipDj: ['Inconvenient ZIP files'],
  },
  {
    feature: 'Bulk Downloads - Mobile App',
    digtracks: ['🏆 Download songs on the go from phone to laptop'],
    bpmSupreme: ['🚫 Not available'],
    zipDj: ['🚫 Not available'],
  },
  {
    feature: 'Mobile App',
    digtracks: ['🏆 iOS and Android versions with full access and remote downloads'],
    bpmSupreme: ['No downloads'],
    zipDj: ['🚫 Not available'],
  },
  {
    feature: 'Genres',
    digtracks: ['🏆 250+ genres'],
    bpmSupreme: ['Less than 100 genres'],
    zipDj: ['60+ genres'],
  },
  {
    feature: 'Song Recommendations',
    digtracks: ['🏆 Find similar songs to expand music discovery'],
    bpmSupreme: ['Limited availability'],
    zipDj: ['🚫 Not available'],
  },
];

const ComparisonTable = () => {
  return (
    <section id="comparison-table" className="bg-background pb-16 md:pb-24 pt-0">
      <div className="container">
        <div className="overflow-x-auto">
          <table className="min-w-[1024px] w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="border-b border-muted">
                <th className="py-5 px-4 text-left font-semibold text-foreground uppercase tracking-wider">Comparison</th>
                <th className="py-5 px-4 text-left font-semibold text-foreground uppercase tracking-wider">DIGTRACKS</th>
                <th className="py-5 px-4 text-left font-semibold text-muted-foreground uppercase tracking-wider">vs. BPM Supreme</th>
                <th className="py-5 px-4 text-left font-semibold text-muted-foreground uppercase tracking-wider">vs. ZIP DJ</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row) => (
                <tr key={row.feature} className="border-b border-muted">
                  <td className="py-6 px-4 font-semibold text-foreground align-top">{row.feature}</td>
                  <td className="py-6 px-4 text-foreground align-top">
                    {row.digtracks.map((line, i) => (
                      <div key={i} className={i > 0 ? 'mt-1' : ''}>{line}</div>
                    ))}
                  </td>
                  <td className="py-6 px-4 text-muted-foreground align-top">
                    {row.bpmSupreme.map((line, i) => (
                      <div key={i} className={i > 0 ? 'mt-1' : ''}>{line}</div>
                    ))}
                  </td>
                  <td className="py-6 px-4 text-muted-foreground align-top">
                    {row.zipDj.map((line, i) => (
                      <div key={i} className={i > 0 ? 'mt-1' : ''}>{line}</div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;