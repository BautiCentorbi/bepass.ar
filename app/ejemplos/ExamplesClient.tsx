"use client";

import { useEffect, useRef } from "react";

// ============================================================
// Markup de los dos tableros de ejemplo (Marketing Digital y
// Control comercial). Se inyecta tal cual vía dangerouslySetInnerHTML
// para preservar 1:1 el mockup original (incluye SVGs inline de
// logos de plataformas), y la interactividad se re-conecta en el
// useEffect de más abajo una vez montado en el DOM.
// ============================================================
const MOCK_HTML = `
  <section class="mockup-section">
    <div class="mockup-label">
      <span class="tag">Mockup 1</span>
      <h2>Tablero de Marketing Digital</h2>
      <span class="note">Rendimiento consolidado de canales pagos y orgánicos, con análisis por campaña, funnel de conversión y contenidos top.</span>
    </div>

    <div class="mkt">
      <div class="mkt-head">
        <div>
          <h3>Rendimiento de Marketing · Agosto 2026 <span class="live-badge"><span class="live-dot"></span>En vivo</span></h3>
          <div class="sub">Consolidado multicanal · datos actualizados hace 2 h</div>
        </div>
        <div class="mkt-tools">
          <span class="mkt-chip">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            Agosto 2026
          </span>
          <span class="mkt-chip">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m8 11 4 4 4-4"/><path d="M8 21h8"/></svg>
            Exportar PDF
          </span>
          <span class="mkt-chip">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 2"/></svg>
            Actualizar
          </span>
        </div>
      </div>

      <div class="mkt-channels" id="mktChannels">
        <div class="ch-card" data-ch="meta">
          <div class="ch-logo">
            <svg viewBox="0 0 40 40" width="30" height="30"><defs><linearGradient id="meta1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#00B2FF"/><stop offset="60%" stop-color="#0064E1"/><stop offset="100%" stop-color="#0082FB"/></linearGradient></defs><path fill="url(#meta1)" d="M20 4c-6 0-11 4.2-13.6 10.2C4.8 18.6 4 22 4 24.6c0 4.5 2 7.4 5.2 7.4 2.7 0 4.5-1.4 7.5-6.5l2.7-4.6c.8-1.4 1.3-2.1 2-3.1.7 1 1.2 1.7 2 3.1L26 25.5c3 5.1 4.9 6.5 7.5 6.5 3.2 0 5.2-2.9 5.2-7.4 0-2.6-.8-6-1.6-10.4C34.6 8.2 29.6 4 23.5 4c-.5 0-1 0-1.5.1-.5 0-1-.1-2-.1zm-4 6c1.4 0 2.6.7 4 2.4-.3.3-.6.7-1 1.2l-3 4.6c-2 3.2-3 4.3-4 4.3-1.2 0-1.9-1-1.9-3.1 0-2.5.8-5.6 1.9-7.3.9-1.4 2-2.1 4-2.1zm10 0c2 0 3.1.7 4 2.1 1 1.7 1.9 4.8 1.9 7.3 0 2.1-.7 3.1-1.9 3.1-1 0-2-1.1-4-4.3l-3-4.6c-.4-.5-.7-.9-1-1.2 1.4-1.7 2.6-2.4 4-2.4z"/></svg>
          </div>
          <div class="ch-name">Meta Ads</div>
          <div class="ch-inv">$ 430 K · 2 campañas</div>
          <span class="ch-delta up">▲ 18% MoM</span>
        </div>
        <div class="ch-card" data-ch="ig">
          <div class="ch-logo">
            <svg viewBox="0 0 40 40" width="30" height="30"><defs><radialGradient id="ig1" cx="30%" cy="107%" r="150%"><stop offset="0%" stop-color="#FDF497"/><stop offset="5%" stop-color="#FDF497"/><stop offset="45%" stop-color="#FD5949"/><stop offset="60%" stop-color="#D6249F"/><stop offset="90%" stop-color="#285AEB"/></radialGradient></defs><rect x="4" y="4" width="32" height="32" rx="8" fill="url(#ig1)"/><rect x="10" y="10" width="20" height="20" rx="5" fill="none" stroke="#FFFFFF" stroke-width="2.2"/><circle cx="20" cy="20" r="4.5" fill="none" stroke="#FFFFFF" stroke-width="2.2"/><circle cx="27" cy="13" r="1.6" fill="#FFFFFF"/></svg>
          </div>
          <div class="ch-name">Instagram</div>
          <div class="ch-inv">$ 120 K · Ads + orgánico</div>
          <span class="ch-delta up">▲ 9% MoM</span>
        </div>
        <div class="ch-card" data-ch="google">
          <div class="ch-logo">
            <svg viewBox="0 0 40 40" width="30" height="30"><path fill="#FBBC04" d="M14.6 5.9L4.7 23.1c-1.3 2.3-.6 5.2 1.6 6.6 2.3 1.3 5.2.6 6.6-1.6L22.7 11c1.3-2.3.6-5.2-1.6-6.6-2.3-1.3-5.2-.5-6.5 1.5z"/><path fill="#4285F4" d="M35.4 30.7L25.5 13.5c-1.3-2.2-4.3-3-6.6-1.6-2.3 1.3-3 4.3-1.6 6.6l9.9 17.2c1.3 2.3 4.3 3 6.6 1.6 2.2-1.5 3-4.4 1.6-6.6z"/><circle cx="9.7" cy="31" r="4.7" fill="#34A853"/></svg>
          </div>
          <div class="ch-name">Google Ads</div>
          <div class="ch-inv">$ 245 K · Search + Display</div>
          <span class="ch-delta up">▲ 6% MoM</span>
        </div>
        <div class="ch-card" data-ch="linkedin">
          <div class="ch-logo">
            <svg viewBox="0 0 40 40" width="30" height="30"><rect width="40" height="40" rx="6" fill="#0A66C2"/><path fill="#FFFFFF" d="M13 15h-4v14h4V15zm-2-6.5c-1.4 0-2.5 1.1-2.5 2.5S9.6 13.5 11 13.5s2.5-1.1 2.5-2.5S12.4 8.5 11 8.5zM31 29h-4v-6.6c0-1.6 0-3.6-2.2-3.6-2.2 0-2.5 1.7-2.5 3.5V29h-4V15h3.8v1.9h.1c.5-1 1.8-2.1 3.8-2.1 4 0 4.8 2.7 4.8 6.1V29h.2z"/></svg>
          </div>
          <div class="ch-name">LinkedIn Ads</div>
          <div class="ch-inv">$ 95 K · Lead Gen</div>
          <span class="ch-delta down">▼ 4% MoM</span>
        </div>
        <div class="ch-card" data-ch="organic">
          <div class="ch-logo">
            <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="#A855F7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="20" cy="20" r="14"/><path d="M6 20h28"/><path d="M20 6c4 4 5 9 5 14s-1 10-5 14c-4-4-5-9-5-14s1-10 5-14z"/></svg>
          </div>
          <div class="ch-name">Orgánico + SEO</div>
          <div class="ch-inv">3.2 K visitas · sin inversión</div>
          <span class="ch-delta up">▲ 12% MoM</span>
        </div>
      </div>

      <div class="mkt-kpis">
        <div class="kpi">
          <div class="l">Inversión total</div>
          <div class="v">$ 890 K</div>
          <div class="s">en el mes · 8 campañas</div>
        </div>
        <div class="kpi">
          <div class="l">Alcance único</div>
          <div class="v">342 K</div>
          <div class="s up">▲ 24% vs julio</div>
        </div>
        <div class="kpi">
          <div class="l">Leads nuevos</div>
          <div class="v">58</div>
          <div class="s up">▲ 19 vs julio</div>
        </div>
        <div class="kpi">
          <div class="l">Costo por lead</div>
          <div class="v">$ 15,3 K</div>
          <div class="s up">▼ 8% · mejora mix</div>
        </div>
        <div class="kpi">
          <div class="l">ROAS blended</div>
          <div class="v">4,2×</div>
          <div class="s up">▲ 0,6 vs julio</div>
        </div>
      </div>

      <div class="mkt-grid">
        <div class="panel">
          <h4>Rendimiento por campaña</h4>
          <div class="panel-sub">Ordenado por leads generados · click para expandir cada canal</div>
          <table class="campaigns">
            <thead>
              <tr>
                <th class="l">Campaña</th>
                <th class="hide-sm">Inversión</th>
                <th class="hide-sm">Alcance</th>
                <th>CTR</th>
                <th>Leads</th>
                <th>$/Lead</th>
                <th>ROAS</th>
              </tr>
            </thead>
            <tbody id="mktCampaigns">
              <tr data-ch="meta">
                <td class="l">
                  <div class="camp">
                    <div class="camp-logo" style="background: linear-gradient(135deg,#0064E1,#00B2FF);">
                      <svg viewBox="0 0 40 40" width="14" height="14" fill="#FFFFFF"><path d="M20 4c-6 0-11 4.2-13.6 10.2C4.8 18.6 4 22 4 24.6c0 4.5 2 7.4 5.2 7.4 2.7 0 4.5-1.4 7.5-6.5l2.7-4.6c.8-1.4 1.3-2.1 2-3.1.7 1 1.2 1.7 2 3.1L26 25.5c3 5.1 4.9 6.5 7.5 6.5 3.2 0 5.2-2.9 5.2-7.4 0-2.6-.8-6-1.6-10.4C34.6 8.2 29.6 4 23.5 4c-.5 0-1 0-1.5.1-.5 0-1-.1-2-.1z"/></svg>
                    </div>
                    <div>
                      <div class="camp-name">Prospección segmento decisor</div>
                      <div class="camp-sub">Meta Ads · Awareness</div>
                    </div>
                  </div>
                </td>
                <td class="hide-sm">$ 250 K</td>
                <td class="hide-sm">128 K</td>
                <td>2,4%</td>
                <td>15</td>
                <td>$ 16,7 K</td>
                <td><span class="delta up">4,8×</span></td>
              </tr>
              <tr data-ch="google">
                <td class="l">
                  <div class="camp">
                    <div class="camp-logo" style="background: linear-gradient(135deg,#4285F4,#FBBC04);">
                      <svg viewBox="0 0 40 40" width="14" height="14"><path fill="#FBBC04" d="M14.6 5.9L4.7 23.1c-1.3 2.3-.6 5.2 1.6 6.6 2.3 1.3 5.2.6 6.6-1.6L22.7 11c1.3-2.3.6-5.2-1.6-6.6-2.3-1.3-5.2-.5-6.5 1.5z"/><path fill="#4285F4" d="M35.4 30.7L25.5 13.5c-1.3-2.2-4.3-3-6.6-1.6-2.3 1.3-3 4.3-1.6 6.6l9.9 17.2c1.3 2.3 4.3 3 6.6 1.6 2.2-1.5 3-4.4 1.6-6.6z"/><circle cx="9.7" cy="31" r="4.7" fill="#34A853"/></svg>
                    </div>
                    <div>
                      <div class="camp-name">Search de intención alta</div>
                      <div class="camp-sub">Google Ads · Performance</div>
                    </div>
                  </div>
                </td>
                <td class="hide-sm">$ 180 K</td>
                <td class="hide-sm">55 K</td>
                <td>5,1%</td>
                <td>18</td>
                <td>$ 10,0 K</td>
                <td><span class="delta up">6,2×</span></td>
              </tr>
              <tr data-ch="ig">
                <td class="l">
                  <div class="camp">
                    <div class="camp-logo" style="background: linear-gradient(135deg,#F58529,#DD2A7B 60%,#8134AF);">
                      <svg viewBox="0 0 40 40" width="14" height="14" fill="none" stroke="#FFFFFF" stroke-width="2.8"><rect x="8" y="8" width="24" height="24" rx="6"/><circle cx="20" cy="20" r="6"/></svg>
                    </div>
                    <div>
                      <div class="camp-name">Reels · casos de éxito</div>
                      <div class="camp-sub">Instagram Ads · Consideración</div>
                    </div>
                  </div>
                </td>
                <td class="hide-sm">$ 120 K</td>
                <td class="hide-sm">62 K</td>
                <td>3,2%</td>
                <td>9</td>
                <td>$ 13,3 K</td>
                <td><span class="delta up">3,4×</span></td>
              </tr>
              <tr data-ch="linkedin">
                <td class="l">
                  <div class="camp">
                    <div class="camp-logo" style="background:#0A66C2;">
                      <svg viewBox="0 0 40 40" width="14" height="14" fill="#FFFFFF"><path d="M13 15h-4v14h4V15zm-2-6.5c-1.4 0-2.5 1.1-2.5 2.5S9.6 13.5 11 13.5s2.5-1.1 2.5-2.5S12.4 8.5 11 8.5zM31 29h-4v-6.6c0-1.6 0-3.6-2.2-3.6-2.2 0-2.5 1.7-2.5 3.5V29h-4V15h3.8v1.9h.1c.5-1 1.8-2.1 3.8-2.1 4 0 4.8 2.7 4.8 6.1V29h.2z"/></svg>
                    </div>
                    <div>
                      <div class="camp-name">Segmento CFO industria</div>
                      <div class="camp-sub">LinkedIn Ads · Lead Gen Form</div>
                    </div>
                  </div>
                </td>
                <td class="hide-sm">$ 95 K</td>
                <td class="hide-sm">18 K</td>
                <td>5,8%</td>
                <td>7</td>
                <td>$ 13,6 K</td>
                <td><span class="delta down">2,1×</span></td>
              </tr>
              <tr data-ch="meta">
                <td class="l">
                  <div class="camp">
                    <div class="camp-logo" style="background: linear-gradient(135deg,#0064E1,#00B2FF);">
                      <svg viewBox="0 0 40 40" width="14" height="14" fill="#FFFFFF"><path d="M20 4c-6 0-11 4.2-13.6 10.2C4.8 18.6 4 22 4 24.6c0 4.5 2 7.4 5.2 7.4 2.7 0 4.5-1.4 7.5-6.5l2.7-4.6c.8-1.4 1.3-2.1 2-3.1.7 1 1.2 1.7 2 3.1L26 25.5c3 5.1 4.9 6.5 7.5 6.5 3.2 0 5.2-2.9 5.2-7.4 0-2.6-.8-6-1.6-10.4C34.6 8.2 29.6 4 23.5 4c-.5 0-1 0-1.5.1-.5 0-1-.1-2-.1z"/></svg>
                    </div>
                    <div>
                      <div class="camp-name">Retargeting visitantes web</div>
                      <div class="camp-sub">Meta Ads · Conversión</div>
                    </div>
                  </div>
                </td>
                <td class="hide-sm">$ 180 K</td>
                <td class="hide-sm">84 K</td>
                <td>4,1%</td>
                <td>9</td>
                <td>$ 20,0 K</td>
                <td><span class="delta up">3,9×</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="panel">
          <h4>Funnel de conversión</h4>
          <div class="panel-sub">De la impresión al cierre · agosto 2026</div>
          <div class="funnel">
            <div class="funnel-row">
              <div class="funnel-label">Impresiones</div>
              <div class="funnel-bar"><div class="funnel-fill" style="width:100%">1.240.000</div></div>
              <div class="funnel-conv">100%</div>
            </div>
            <div class="funnel-row">
              <div class="funnel-label">Alcance único</div>
              <div class="funnel-bar"><div class="funnel-fill" style="width:76%">342.000</div></div>
              <div class="funnel-conv">27,6%</div>
            </div>
            <div class="funnel-row">
              <div class="funnel-label">Clicks</div>
              <div class="funnel-bar"><div class="funnel-fill" style="width:42%">37.200</div></div>
              <div class="funnel-conv">3,0% CTR</div>
            </div>
            <div class="funnel-row">
              <div class="funnel-label">Leads</div>
              <div class="funnel-bar"><div class="funnel-fill" style="width:22%">58</div></div>
              <div class="funnel-conv">1,6% CVR</div>
            </div>
            <div class="funnel-row">
              <div class="funnel-label">Oportunidades</div>
              <div class="funnel-bar"><div class="funnel-fill" style="width:14%">31</div></div>
              <div class="funnel-conv">53% de leads</div>
            </div>
            <div class="funnel-row">
              <div class="funnel-label">Cerradas</div>
              <div class="funnel-bar"><div class="funnel-fill" style="width:8%">9</div></div>
              <div class="funnel-conv">15,5% de leads</div>
            </div>
          </div>

          <div style="margin-top: 1.25rem;">
            <h4 style="font-size: 0.78rem;">Sentimiento de comentarios</h4>
            <div class="panel-sub" style="margin-bottom: 0.5rem;">Análisis IA sobre 412 comentarios del mes</div>
            <div class="sentiment">
              <div class="sent-seg pos"><div class="p">68%</div><div class="l">Positivo</div></div>
              <div class="sent-seg neu"><div class="p">24%</div><div class="l">Neutro</div></div>
              <div class="sent-seg neg"><div class="p">8%</div><div class="l">Negativo</div></div>
            </div>
          </div>
        </div>
      </div>

      <div class="mkt-grid">
        <div class="panel">
          <h4>Evolución de leads · últimos 6 meses</h4>
          <div class="panel-sub">Comparación entre canales pagos y orgánicos</div>
          <div class="chart-wrap" id="chartWrap">
            <div class="chart-tooltip" id="chartTooltip"></div>
            <svg viewBox="0 0 700 180" preserveAspectRatio="none" style="width:100%; height:100%;">
              <line x1="30" y1="30" x2="700" y2="30" stroke="#2A2A30" stroke-width="1"/>
              <line x1="30" y1="70" x2="700" y2="70" stroke="#2A2A30" stroke-width="1"/>
              <line x1="30" y1="110" x2="700" y2="110" stroke="#2A2A30" stroke-width="1"/>
              <line x1="30" y1="150" x2="700" y2="150" stroke="#2A2A30" stroke-width="1"/>
              <text x="0" y="34" fill="#71717A" font-size="10">60</text>
              <text x="0" y="74" fill="#71717A" font-size="10">40</text>
              <text x="0" y="114" fill="#71717A" font-size="10">20</text>
              <text x="0" y="154" fill="#71717A" font-size="10">0</text>
              <text x="80" y="172" fill="#A1A1AA" font-size="10">Mar</text>
              <text x="190" y="172" fill="#A1A1AA" font-size="10">Abr</text>
              <text x="300" y="172" fill="#A1A1AA" font-size="10">May</text>
              <text x="410" y="172" fill="#A1A1AA" font-size="10">Jun</text>
              <text x="520" y="172" fill="#A1A1AA" font-size="10">Jul</text>
              <text x="625" y="172" fill="#A1A1AA" font-size="10">Ago</text>

              <path d="M 80 122 L 190 118 L 300 100 L 410 90 L 520 78 L 625 44 L 625 150 L 80 150 Z" fill="url(#areaBlue)"/>
              <path d="M 80 122 L 190 118 L 300 100 L 410 90 L 520 78 L 625 44" fill="none" stroke="#3B82F6" stroke-width="2.5"/>
              <path d="M 80 140 L 190 138 L 300 128 L 410 130 L 520 122 L 625 118" fill="none" stroke="#A1A1AA" stroke-width="2.5" stroke-dasharray="4 3"/>

              <circle class="pt" cx="80" cy="122" r="3" fill="#3B82F6" data-label="Marzo" data-value="28 leads pagos"/>
              <circle class="pt" cx="190" cy="118" r="3" fill="#3B82F6" data-label="Abril" data-value="30 leads pagos"/>
              <circle class="pt" cx="300" cy="100" r="3" fill="#3B82F6" data-label="Mayo" data-value="38 leads pagos"/>
              <circle class="pt" cx="410" cy="90" r="3" fill="#3B82F6" data-label="Junio" data-value="42 leads pagos"/>
              <circle class="pt" cx="520" cy="78" r="3" fill="#3B82F6" data-label="Julio" data-value="48 leads pagos"/>
              <circle class="pt" cx="625" cy="44" r="4" fill="#3B82F6" data-label="Agosto" data-value="58 leads pagos"/>

              <defs>
                <linearGradient id="areaBlue" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stop-color="#3B82F6" stop-opacity="0.35"/>
                  <stop offset="100%" stop-color="#3B82F6" stop-opacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="chart-legend">
            <span><span class="dot" style="background:#3B82F6;"></span>Leads pagos</span>
            <span><span class="dot" style="background:#A1A1AA;"></span>Leads orgánicos + SEO</span>
          </div>
        </div>

        <div class="panel">
          <h4>Top contenidos del mes</h4>
          <div class="panel-sub">Ordenado por engagement rate</div>
          <div class="top-content">
            <div class="content-item">
              <div class="content-thumb" style="background: linear-gradient(135deg,#F58529,#DD2A7B 60%,#8134AF);">R1</div>
              <div>
                <div class="content-title">Reel · Antes y después de un cliente</div>
                <div class="content-meta">Instagram · 22 ago · 00:47</div>
              </div>
              <div class="content-metric"><div class="v">12,4%</div><div class="u">engagement</div></div>
            </div>
            <div class="content-item">
              <div class="content-thumb" style="background: linear-gradient(135deg,#0064E1,#00B2FF);">P2</div>
              <div>
                <div class="content-title">Post · Testimonio en video del CFO</div>
                <div class="content-meta">Meta · 15 ago</div>
              </div>
              <div class="content-metric"><div class="v">8,9%</div><div class="u">engagement</div></div>
            </div>
            <div class="content-item">
              <div class="content-thumb" style="background:#0A66C2;">L3</div>
              <div>
                <div class="content-title">Artículo · 3 métricas que todo director debería ver</div>
                <div class="content-meta">LinkedIn · 09 ago</div>
              </div>
              <div class="content-metric"><div class="v">6,1%</div><div class="u">engagement</div></div>
            </div>
            <div class="content-item">
              <div class="content-thumb" style="background: linear-gradient(135deg,#F58529,#DD2A7B 60%,#8134AF);">R4</div>
              <div>
                <div class="content-title">Reel · Recorrido interno de planta</div>
                <div class="content-meta">Instagram · 03 ago · 00:32</div>
              </div>
              <div class="content-metric"><div class="v">5,7%</div><div class="u">engagement</div></div>
            </div>
            <div class="content-item">
              <div class="content-thumb" style="background: linear-gradient(135deg,#0064E1,#00B2FF);">P5</div>
              <div>
                <div class="content-title">Carousel · Comparativa de escenarios</div>
                <div class="content-meta">Meta · 27 jul</div>
              </div>
              <div class="content-metric"><div class="v">4,3%</div><div class="u">engagement</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mockup-section">
    <div class="mockup-label">
      <span class="tag">Mockup 2</span>
      <h2>Control comercial · Ranking de vendedores</h2>
      <span class="note">Rendimiento del equipo comercial en tiempo real: ranking, tickets, aging y alertas automáticas.</span>
    </div>

    <div class="sales">
      <div class="sales-head">
        <div>
          <h3>Equipo comercial · desempeño 2026 <span class="live-badge live-badge-light"><span class="live-dot dark"></span>En vivo</span></h3>
          <div class="sub">5 vendedores activos · datos consolidados desde ERP</div>
        </div>
        <div class="sales-tools" id="salesPeriods">
          <span class="sales-chip active" data-period="year">Acumulado año</span>
          <span class="sales-chip" data-period="quarter">Trimestre</span>
          <span class="sales-chip" data-period="month">Mes</span>
          <span class="sales-chip">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m8 11 4 4 4-4"/><path d="M8 21h8"/></svg>
            Exportar
          </span>
        </div>
      </div>

      <div class="sales-kpis" id="salesKpis">
        <div class="skpi">
          <div class="l">Facturación total</div>
          <div class="v" data-year="$ 6.782 M" data-quarter="$ 2.104 M" data-month="$ 812 M">$ 6.782 M</div>
          <div class="s up">▲ 14% vs 2025</div>
        </div>
        <div class="skpi">
          <div class="l">Operaciones</div>
          <div class="v" data-year="844" data-quarter="263" data-month="97">844</div>
          <div class="s">promedio 169/vendedor</div>
        </div>
        <div class="skpi">
          <div class="l">Ticket promedio</div>
          <div class="v" data-year="$ 8,03 M" data-quarter="$ 8,00 M" data-month="$ 8,37 M">$ 8,03 M</div>
          <div class="s up">▲ 9% vs 2025</div>
        </div>
        <div class="skpi">
          <div class="l">Clientes únicos</div>
          <div class="v" data-year="287" data-quarter="164" data-month="82">287</div>
          <div class="s">51% recurrentes</div>
        </div>
        <div class="skpi">
          <div class="l">Cobertura objetivo</div>
          <div class="v" data-year="78%" data-quarter="82%" data-month="91%">78%</div>
          <div class="s down">▼ 5 pp bajo meta</div>
        </div>
      </div>

      <div class="sales-grid">
        <div class="spanel">
          <h4>Ranking de vendedores</h4>
          <div class="panel-sub">Ordenado por facturación acumulada · click para ver detalle de cada uno</div>
          <div class="ranking">
            <div class="rank-row">
              <div class="rank-num top">1</div>
              <div class="rank-body">
                <div class="rank-name-line">
                  <div class="rank-avatar">MG</div>
                  <div>
                    <div class="rank-name">M. González</div>
                    <div class="rank-role">Ejecutivo Sr · cartera premium</div>
                  </div>
                </div>
                <div class="rank-bar"><div class="rank-fill" style="width:100%"></div></div>
              </div>
              <div class="rank-total"><div class="v">$ 2.847 M</div><div class="u">292 ops · 64 clientes</div></div>
            </div>
            <div class="rank-row">
              <div class="rank-num top">2</div>
              <div class="rank-body">
                <div class="rank-name-line">
                  <div class="rank-avatar">LF</div>
                  <div>
                    <div class="rank-name">L. Fernández</div>
                    <div class="rank-role">Ejecutivo Sr · zona norte</div>
                  </div>
                </div>
                <div class="rank-bar"><div class="rank-fill" style="width:64%"></div></div>
              </div>
              <div class="rank-total"><div class="v">$ 1.817 M</div><div class="u">330 ops · 165 clientes</div></div>
            </div>
            <div class="rank-row">
              <div class="rank-num">3</div>
              <div class="rank-body">
                <div class="rank-name-line">
                  <div class="rank-avatar">RH</div>
                  <div>
                    <div class="rank-name">R. Herrera</div>
                    <div class="rank-role">Ejecutivo Sr · industrial</div>
                  </div>
                </div>
                <div class="rank-bar"><div class="rank-fill" style="width:48%"></div></div>
              </div>
              <div class="rank-total"><div class="v">$ 1.364 M</div><div class="u">222 ops · 106 clientes</div></div>
            </div>
            <div class="rank-row">
              <div class="rank-num">4</div>
              <div class="rank-body">
                <div class="rank-name-line">
                  <div class="rank-avatar">SM</div>
                  <div>
                    <div class="rank-name">S. Martínez</div>
                    <div class="rank-role">Ejecutivo Jr · retail</div>
                  </div>
                </div>
                <div class="rank-bar"><div class="rank-fill" style="width:19%"></div></div>
              </div>
              <div class="rank-total"><div class="v">$ 524 M</div><div class="u">142 ops · 78 clientes</div></div>
            </div>
            <div class="rank-row">
              <div class="rank-num">5</div>
              <div class="rank-body">
                <div class="rank-name-line">
                  <div class="rank-avatar">PO</div>
                  <div>
                    <div class="rank-name">P. Ojeda</div>
                    <div class="rank-role">Ejecutivo Jr · zona sur</div>
                  </div>
                </div>
                <div class="rank-bar"><div class="rank-fill" style="width:8%"></div></div>
              </div>
              <div class="rank-total"><div class="v">$ 230 M</div><div class="u">58 ops · 34 clientes</div></div>
            </div>
          </div>

          <table class="sellers">
            <thead>
              <tr>
                <th class="l">Vendedor</th>
                <th class="hide-sm">Ticket prom.</th>
                <th class="hide-sm">Aging cartera</th>
                <th>Cobertura</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="l">M. González</td>
                <td class="hide-sm">$ 9,7 M</td>
                <td class="hide-sm">32 días</td>
                <td>112%</td>
                <td><span class="status-pill ok">Sobre meta</span></td>
              </tr>
              <tr>
                <td class="l">L. Fernández</td>
                <td class="hide-sm">$ 5,5 M</td>
                <td class="hide-sm">28 días</td>
                <td>96%</td>
                <td><span class="status-pill ok">En meta</span></td>
              </tr>
              <tr>
                <td class="l">R. Herrera</td>
                <td class="hide-sm">$ 6,1 M</td>
                <td class="hide-sm">41 días</td>
                <td>84%</td>
                <td><span class="status-pill risk">Riesgo aging</span></td>
              </tr>
              <tr>
                <td class="l">S. Martínez</td>
                <td class="hide-sm">$ 3,7 M</td>
                <td class="hide-sm">22 días</td>
                <td>58%</td>
                <td><span class="status-pill risk">Bajo cobertura</span></td>
              </tr>
              <tr>
                <td class="l">P. Ojeda</td>
                <td class="hide-sm">$ 4,0 M</td>
                <td class="hide-sm">18 días</td>
                <td>32%</td>
                <td><span class="status-pill alert">Requiere acción</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="spanel">
          <h4>Alertas automáticas</h4>
          <div class="panel-sub">Reglas de negocio configurables</div>
          <div class="alerts">
            <div class="alert risk">
              <div class="alert-ico">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg>
              </div>
              <div>
                <div class="alert-title">R. Herrera · aging por encima del umbral</div>
                <div class="alert-desc">41 días de aging vs 35 objetivo. Se recomienda revisar cobranza y priorizar cartera activa.</div>
              </div>
            </div>
            <div class="alert ok">
              <div class="alert-ico">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <div>
                <div class="alert-title">M. González superó meta anual</div>
                <div class="alert-desc">Al 78% del año facturó 112% de su meta. Evaluar reasignación de cuenta grande o incremento de objetivo.</div>
              </div>
            </div>
            <div class="alert info">
              <div class="alert-ico">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8v4"/><path d="M12 16h.01"/><circle cx="12" cy="12" r="9"/></svg>
              </div>
              <div>
                <div class="alert-title">Concentración de cartera en top 2</div>
                <div class="alert-desc">M. González y L. Fernández concentran el 68% de la facturación. Riesgo de dependencia.</div>
              </div>
            </div>
            <div class="alert risk">
              <div class="alert-ico">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg>
              </div>
              <div>
                <div class="alert-title">P. Ojeda · 5 clientes sin compra hace 90+ días</div>
                <div class="alert-desc">Cartera con signos de desactivación. Sugerido: campaña de reactivación + llamado directo.</div>
              </div>
            </div>
          </div>

          <div style="margin-top: 1.25rem;">
            <h4>Actividad reciente <span class="live-badge live-badge-light" style="font-size:0.58rem; padding:0.15rem 0.5rem;"><span class="live-dot dark"></span>En vivo</span></h4>
            <div class="panel-sub">Últimas operaciones registradas</div>
            <div class="activity" id="activityFeed">
              <div class="act-row">
                <span class="act-dot green"></span>
                <div class="act-text"><b>M. González</b> facturó $ 42,8 M a Cliente Premium 07</div>
                <div class="act-when">hace 12 min</div>
              </div>
              <div class="act-row">
                <span class="act-dot blue"></span>
                <div class="act-text"><b>L. Fernández</b> abrió oportunidad en Distribuidor Zona 4</div>
                <div class="act-when">hace 47 min</div>
              </div>
              <div class="act-row">
                <span class="act-dot green"></span>
                <div class="act-text"><b>R. Herrera</b> cerró venta por $ 18,3 M a Industria Metalúrgica 12</div>
                <div class="act-when">hace 1 h 20 min</div>
              </div>
              <div class="act-row">
                <span class="act-dot zinc"></span>
                <div class="act-text"><b>S. Martínez</b> registró visita comercial a Cliente Retail 22</div>
                <div class="act-when">hace 2 h</div>
              </div>
              <div class="act-row">
                <span class="act-dot blue"></span>
                <div class="act-text"><b>M. González</b> generó cotización por $ 88,1 M a Cliente Premium 03</div>
                <div class="act-when">hace 3 h</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

// Estilos del mockup, escopados bajo .ejemplos-mock para no filtrar
// resets globales (*, html, body) al resto del sitio (Header/Footer).
const MOCK_CSS = `
  .ejemplos-mock {
    --bg-page: #EBEBEB;
    --bg-dark: #171717;
    --bg-dark-2: #1F1F22;
    --bg-dark-3: #26262B;
    --bg-card: #FFFFFF;
    --bg-card-dark: #1F1F22;
    --fg: #171717;
    --fg-soft: #6B6B6E;
    --fg-invert: #FFFFFF;
    --fg-invert-soft: #A1A1AA;
    --title: #464646;
    --border: #E4E4E7;
    --border-dark: #2A2A30;
    --blue: #2563EB;
    --blue-soft: #3B82F6;
    --blue-deep: #1E40AF;
    --blue-bg: rgba(37,99,235,0.08);
    --green: #16A34A;
    --red: #DC2626;
    --amber: #D97706;
    --zinc-100: #F4F4F5;
    --zinc-200: #E4E4E7;
    --zinc-500: #71717A;
    --zinc-700: #3F3F46;
    --zinc-900: #18181B;
    --radius: 14px;
    --radius-sm: 8px;

    background: var(--bg-page);
    color: var(--fg);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    border-radius: 24px;
    overflow: hidden;
  }
  .ejemplos-mock, .ejemplos-mock * { box-sizing: border-box; }

  .ejemplos-mock .mockup-section { max-width: 1400px; margin: 0 auto; padding: 2rem; }
  .ejemplos-mock .mockup-section + .mockup-section { padding-top: 0; }

  .ejemplos-mock .mockup-label { display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 1rem; flex-wrap: wrap; }
  .ejemplos-mock .mockup-label .tag {
    display: inline-flex; align-items: center; gap: 0.35rem;
    background: var(--blue-bg); color: var(--blue);
    border: 1px solid rgba(37,99,235,0.2);
    padding: 0.25rem 0.7rem; border-radius: 999px;
    font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
  }
  .ejemplos-mock .mockup-label h2 { font-size: 1.35rem; font-weight: 700; color: var(--title); }
  .ejemplos-mock .mockup-label .note { font-size: 0.78rem; color: var(--fg-soft); font-style: italic; }

  /* MOCKUP 1 · MARKETING DIGITAL */
  .ejemplos-mock .mkt {
    background: var(--bg-dark); color: var(--fg-invert);
    border-radius: var(--radius); padding: 1.75rem;
    box-shadow: 0 20px 60px -20px rgba(0,0,0,0.35);
  }
  .ejemplos-mock .mkt-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; flex-wrap: wrap; margin-bottom: 1.5rem; }
  .ejemplos-mock .mkt-head h3 { font-size: 1.15rem; font-weight: 700; color: #FFFFFF; margin-bottom: 0.25rem; }
  .ejemplos-mock .mkt-head .sub { font-size: 0.82rem; color: var(--fg-invert-soft); }
  .ejemplos-mock .mkt-tools { display: flex; align-items: center; gap: 0.5rem; }
  .ejemplos-mock .mkt-chip {
    display: inline-flex; align-items: center; gap: 0.4rem;
    background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
    color: #E4E4E7; padding: 0.4rem 0.75rem; border-radius: 8px; font-size: 0.72rem; font-weight: 600;
  }
  .ejemplos-mock .mkt-chip svg { width: 13px; height: 13px; }

  .ejemplos-mock .mkt-channels { display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.75rem; margin-bottom: 1.5rem; }
  .ejemplos-mock .ch-card {
    background: var(--bg-dark-2); border: 1px solid var(--border-dark);
    border-radius: var(--radius-sm); padding: 1rem; cursor: pointer;
    transition: all 0.2s ease; position: relative;
  }
  .ejemplos-mock .ch-card:hover { transform: translateY(-2px); border-color: var(--blue-soft); }
  .ejemplos-mock .ch-card.active { border-color: var(--blue-soft); background: rgba(37,99,235,0.12); box-shadow: 0 0 0 2px rgba(59,130,246,0.4); }
  .ejemplos-mock .ch-card .ch-logo { width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; margin-bottom: 0.7rem; }
  .ejemplos-mock .ch-card .ch-name { font-size: 0.82rem; font-weight: 700; color: #FFFFFF; margin-bottom: 0.15rem; }
  .ejemplos-mock .ch-card .ch-inv { font-size: 0.7rem; color: var(--fg-invert-soft); }
  .ejemplos-mock .ch-card .ch-delta { display: inline-block; margin-top: 0.5rem; font-size: 0.68rem; font-weight: 700; }
  .ejemplos-mock .ch-delta.up { color: #22C55E; }
  .ejemplos-mock .ch-delta.down { color: #F87171; }

  .ejemplos-mock .mkt-kpis { display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.75rem; margin-bottom: 1.5rem; }
  .ejemplos-mock .kpi { background: var(--bg-dark-2); border: 1px solid var(--border-dark); border-radius: var(--radius-sm); padding: 1rem 1.1rem; transition: transform 0.2s ease, border-color 0.2s ease; }
  .ejemplos-mock .kpi:hover { transform: translateY(-2px); border-color: rgba(59,130,246,0.3); }
  .ejemplos-mock .kpi .l { font-size: 0.68rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--fg-invert-soft); margin-bottom: 0.35rem; }
  .ejemplos-mock .kpi .v { font-size: 1.4rem; font-weight: 800; color: #FFFFFF; letter-spacing: -0.01em; }
  .ejemplos-mock .kpi .s { font-size: 0.7rem; color: var(--fg-invert-soft); margin-top: 0.2rem; }
  .ejemplos-mock .kpi .s.up { color: #22C55E; font-weight: 600; }
  .ejemplos-mock .kpi .s.down { color: #F87171; font-weight: 600; }

  .ejemplos-mock .mkt-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 1rem; margin-bottom: 1rem; }
  .ejemplos-mock .panel { background: var(--bg-dark-2); border: 1px solid var(--border-dark); border-radius: var(--radius-sm); padding: 1.15rem; }
  .ejemplos-mock .panel h4 { font-size: 0.85rem; font-weight: 700; color: #FFFFFF; margin-bottom: 0.15rem; }
  .ejemplos-mock .panel .panel-sub { font-size: 0.72rem; color: var(--fg-invert-soft); margin-bottom: 1rem; }

  .ejemplos-mock .campaigns { width: 100%; border-collapse: collapse; font-size: 0.78rem; }
  .ejemplos-mock .campaigns thead th {
    text-align: right; color: var(--fg-invert-soft); font-size: 0.66rem; letter-spacing: 0.06em;
    text-transform: uppercase; font-weight: 600; padding: 0.5rem 0.4rem; border-bottom: 1px solid var(--border-dark);
  }
  .ejemplos-mock .campaigns thead th.l { text-align: left; }
  .ejemplos-mock .campaigns tbody td { padding: 0.7rem 0.4rem; border-bottom: 1px solid var(--border-dark); color: #E4E4E7; text-align: right; }
  .ejemplos-mock .campaigns tbody tr:last-child td { border-bottom: none; }
  .ejemplos-mock .campaigns tbody td.l { text-align: left; }
  .ejemplos-mock .campaigns .camp { display: flex; align-items: center; gap: 0.6rem; }
  .ejemplos-mock .campaigns tbody tr { transition: opacity 0.3s ease, background 0.2s ease; cursor: pointer; }
  .ejemplos-mock .campaigns tbody tr:hover { background: rgba(255,255,255,0.03); }
  .ejemplos-mock .campaigns tbody tr.dim { opacity: 0.25; }
  .ejemplos-mock .camp-logo { width: 22px; height: 22px; border-radius: 5px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .ejemplos-mock .camp-name { font-weight: 600; color: #FFFFFF; font-size: 0.78rem; }
  .ejemplos-mock .camp-sub { font-size: 0.66rem; color: var(--fg-invert-soft); }
  .ejemplos-mock .delta { font-size: 0.68rem; font-weight: 700; }
  .ejemplos-mock .delta.up { color: #22C55E; }
  .ejemplos-mock .delta.down { color: #F87171; }

  .ejemplos-mock .funnel { display: flex; flex-direction: column; gap: 0.5rem; margin-top: 0.5rem; }
  .ejemplos-mock .funnel-row { display: grid; grid-template-columns: 100px 1fr auto; align-items: center; gap: 0.75rem; }
  .ejemplos-mock .funnel-label { font-size: 0.72rem; color: var(--fg-invert-soft); }
  .ejemplos-mock .funnel-bar { background: rgba(255,255,255,0.06); height: 26px; border-radius: 4px; overflow: hidden; position: relative; }
  .ejemplos-mock .funnel-fill {
    height: 100%; background: linear-gradient(90deg, var(--blue) 0%, var(--blue-soft) 100%);
    display: flex; align-items: center; padding-left: 0.6rem; font-size: 0.72rem; font-weight: 700; color: #FFFFFF;
    transition: width 1.2s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .ejemplos-mock .funnel-conv { font-size: 0.68rem; color: var(--fg-invert-soft); min-width: 60px; text-align: right; }

  .ejemplos-mock .chart-wrap { position: relative; height: 180px; margin-top: 0.5rem; }
  .ejemplos-mock .chart-legend { display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 0.75rem; font-size: 0.7rem; color: var(--fg-invert-soft); }
  .ejemplos-mock .chart-legend .dot { width: 10px; height: 10px; border-radius: 2px; display: inline-block; margin-right: 0.3rem; vertical-align: middle; }
  .ejemplos-mock .chart-wrap svg circle { transition: r 0.15s ease; cursor: pointer; }
  .ejemplos-mock .chart-wrap svg circle:hover { r: 5; }

  .ejemplos-mock .top-content { display: flex; flex-direction: column; gap: 0.65rem; }
  .ejemplos-mock .content-item {
    display: grid; grid-template-columns: 40px 1fr auto; gap: 0.75rem; align-items: center;
    padding: 0.55rem 0.5rem; background: rgba(255,255,255,0.03); border-radius: 6px;
  }
  .ejemplos-mock .content-thumb { width: 40px; height: 40px; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: #FFFFFF; font-weight: 800; font-size: 0.75rem; }
  .ejemplos-mock .content-title { font-size: 0.76rem; color: #FFFFFF; font-weight: 600; }
  .ejemplos-mock .content-meta { font-size: 0.68rem; color: var(--fg-invert-soft); margin-top: 0.1rem; }
  .ejemplos-mock .content-metric { text-align: right; }
  .ejemplos-mock .content-metric .v { font-size: 0.82rem; font-weight: 700; color: #FFFFFF; }
  .ejemplos-mock .content-metric .u { font-size: 0.65rem; color: var(--fg-invert-soft); }

  .ejemplos-mock .sentiment { display: flex; gap: 0.4rem; margin-top: 0.5rem; }
  .ejemplos-mock .sent-seg { flex: 1; padding: 0.6rem 0.75rem; border-radius: 6px; text-align: center; }
  .ejemplos-mock .sent-seg .p { font-size: 1rem; font-weight: 800; color: #FFFFFF; }
  .ejemplos-mock .sent-seg .l { font-size: 0.65rem; color: var(--fg-invert-soft); margin-top: 0.1rem; }
  .ejemplos-mock .sent-seg.pos { background: rgba(34,197,94,0.15); border: 1px solid rgba(34,197,94,0.3); }
  .ejemplos-mock .sent-seg.neu { background: rgba(161,161,170,0.15); border: 1px solid rgba(161,161,170,0.3); }
  .ejemplos-mock .sent-seg.neg { background: rgba(248,113,113,0.15); border: 1px solid rgba(248,113,113,0.3); }

  /* MOCKUP 2 · CONTROL DE VENDEDORES */
  .ejemplos-mock .sales {
    background: var(--bg-card); color: var(--fg); border: 1px solid var(--border);
    border-radius: var(--radius); padding: 1.75rem; box-shadow: 0 20px 60px -20px rgba(0,0,0,0.12);
  }
  .ejemplos-mock .sales-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; flex-wrap: wrap; margin-bottom: 1.5rem; }
  .ejemplos-mock .sales-head h3 { font-size: 1.15rem; font-weight: 700; color: var(--title); margin-bottom: 0.25rem; }
  .ejemplos-mock .sales-head .sub { font-size: 0.82rem; color: var(--fg-soft); }
  .ejemplos-mock .sales-tools { display: flex; gap: 0.5rem; }
  .ejemplos-mock .sales-chip {
    display: inline-flex; align-items: center; gap: 0.4rem;
    background: var(--zinc-100); border: 1px solid var(--border);
    color: var(--zinc-700); padding: 0.4rem 0.75rem; border-radius: 8px; font-size: 0.72rem; font-weight: 600;
    cursor: pointer; transition: all 0.2s ease;
  }
  .ejemplos-mock .sales-chip svg { width: 13px; height: 13px; }
  .ejemplos-mock .sales-chip.active { background: var(--blue-bg); border-color: rgba(37,99,235,0.3); color: var(--blue); }
  .ejemplos-mock .sales-chip:hover:not(.active) { background: var(--zinc-200); }

  .ejemplos-mock .sales-kpis { display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.75rem; margin-bottom: 1.5rem; }
  .ejemplos-mock .skpi { background: var(--zinc-100); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 1rem 1.1rem; transition: transform 0.2s ease, border-color 0.2s ease; }
  .ejemplos-mock .skpi:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.3); }
  .ejemplos-mock .skpi .l { font-size: 0.68rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--fg-soft); margin-bottom: 0.35rem; font-weight: 600; }
  .ejemplos-mock .skpi .v { font-size: 1.4rem; font-weight: 800; color: var(--title); letter-spacing: -0.01em; }
  .ejemplos-mock .skpi .s { font-size: 0.7rem; color: var(--fg-soft); margin-top: 0.2rem; }
  .ejemplos-mock .skpi .s.up { color: var(--green); font-weight: 600; }
  .ejemplos-mock .skpi .s.down { color: var(--red); font-weight: 600; }

  .ejemplos-mock .sales-grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: 1rem; margin-bottom: 1rem; }
  .ejemplos-mock .spanel { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 1.15rem; }
  .ejemplos-mock .spanel h4 { font-size: 0.85rem; font-weight: 700; color: var(--title); margin-bottom: 0.15rem; }
  .ejemplos-mock .spanel .panel-sub { font-size: 0.72rem; color: var(--fg-soft); margin-bottom: 1rem; }

  .ejemplos-mock .ranking { display: flex; flex-direction: column; gap: 0.6rem; }
  .ejemplos-mock .rank-row { display: grid; grid-template-columns: 28px 1fr auto; gap: 0.85rem; align-items: center; }
  .ejemplos-mock .rank-num {
    background: var(--zinc-900); color: #FFFFFF; width: 26px; height: 26px; border-radius: 6px;
    display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 700;
  }
  .ejemplos-mock .rank-num.top { background: var(--blue); }
  .ejemplos-mock .rank-body { min-width: 0; }
  .ejemplos-mock .rank-name-line { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem; }
  .ejemplos-mock .rank-avatar {
    width: 22px; height: 22px; border-radius: 50%; background: var(--zinc-200); color: var(--zinc-700);
    display: flex; align-items: center; justify-content: center; font-size: 0.6rem; font-weight: 700;
  }
  .ejemplos-mock .rank-name { font-size: 0.82rem; font-weight: 700; color: var(--title); }
  .ejemplos-mock .rank-role { font-size: 0.68rem; color: var(--fg-soft); }
  .ejemplos-mock .rank-bar { background: var(--zinc-100); height: 8px; border-radius: 4px; overflow: hidden; }
  .ejemplos-mock .rank-fill { height: 100%; background: linear-gradient(90deg, var(--blue-deep) 0%, var(--blue-soft) 100%); transition: width 1.2s cubic-bezier(0.22, 1, 0.36, 1); }
  .ejemplos-mock .rank-total { text-align: right; min-width: 90px; }
  .ejemplos-mock .rank-total .v { font-size: 0.9rem; font-weight: 800; color: var(--title); }
  .ejemplos-mock .rank-total .u { font-size: 0.66rem; color: var(--fg-soft); }

  .ejemplos-mock .sellers { width: 100%; border-collapse: collapse; font-size: 0.78rem; margin-top: 0.4rem; }
  .ejemplos-mock .sellers thead th {
    text-align: right; color: var(--fg-soft); font-size: 0.66rem; letter-spacing: 0.06em; text-transform: uppercase;
    font-weight: 600; padding: 0.55rem 0.4rem; border-bottom: 1px solid var(--border);
  }
  .ejemplos-mock .sellers thead th.l { text-align: left; }
  .ejemplos-mock .sellers tbody td { padding: 0.7rem 0.4rem; border-bottom: 1px solid var(--border); color: var(--fg); text-align: right; }
  .ejemplos-mock .sellers tbody tr:last-child td { border-bottom: none; }
  .ejemplos-mock .sellers tbody td.l { text-align: left; color: var(--title); font-weight: 600; }

  .ejemplos-mock .status-pill { display: inline-block; padding: 0.15rem 0.55rem; border-radius: 999px; font-size: 0.66rem; font-weight: 700; }
  .ejemplos-mock .status-pill.ok { background: rgba(22,163,74,0.12); color: var(--green); }
  .ejemplos-mock .status-pill.risk { background: rgba(217,119,6,0.12); color: var(--amber); }
  .ejemplos-mock .status-pill.alert { background: rgba(220,38,38,0.12); color: var(--red); }

  .ejemplos-mock .alerts { display: flex; flex-direction: column; gap: 0.5rem; }
  .ejemplos-mock .alert { display: grid; grid-template-columns: 32px 1fr; gap: 0.7rem; padding: 0.7rem 0.8rem; border-radius: 8px; align-items: start; }
  .ejemplos-mock .alert.risk { background: rgba(217,119,6,0.08); border: 1px solid rgba(217,119,6,0.2); }
  .ejemplos-mock .alert.ok { background: rgba(22,163,74,0.08); border: 1px solid rgba(22,163,74,0.2); }
  .ejemplos-mock .alert.info { background: rgba(37,99,235,0.06); border: 1px solid rgba(37,99,235,0.18); }
  .ejemplos-mock .alert-ico { width: 28px; height: 28px; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: #FFFFFF; flex-shrink: 0; }
  .ejemplos-mock .alert.risk .alert-ico { background: var(--amber); }
  .ejemplos-mock .alert.ok .alert-ico { background: var(--green); }
  .ejemplos-mock .alert.info .alert-ico { background: var(--blue); }
  .ejemplos-mock .alert-title { font-size: 0.78rem; font-weight: 700; color: var(--title); margin-bottom: 0.1rem; }
  .ejemplos-mock .alert-desc { font-size: 0.7rem; color: var(--fg-soft); }

  .ejemplos-mock .activity { display: flex; flex-direction: column; gap: 0.55rem; }
  .ejemplos-mock .act-row {
    display: grid; grid-template-columns: 24px 1fr auto; gap: 0.65rem; align-items: center;
    padding: 0.5rem 0.55rem; border-radius: 6px; background: var(--zinc-100);
    animation: ej-slideInLeft 0.4s ease both;
  }
  .ejemplos-mock .act-row.flash { animation: ej-slideInLeft 0.4s ease both, ej-flashHighlight 2s ease 0.4s; }
  .ejemplos-mock .act-dot { width: 8px; height: 8px; border-radius: 50%; margin: 0 auto; }
  .ejemplos-mock .act-dot.blue { background: var(--blue); }
  .ejemplos-mock .act-dot.green { background: var(--green); }
  .ejemplos-mock .act-dot.zinc { background: var(--zinc-500); }
  .ejemplos-mock .act-text { font-size: 0.74rem; color: var(--fg); }
  .ejemplos-mock .act-text b { color: var(--title); font-weight: 700; }
  .ejemplos-mock .act-when { font-size: 0.66rem; color: var(--fg-soft); }

  .ejemplos-mock .live-badge {
    display: inline-flex; align-items: center; gap: 0.4rem;
    background: rgba(34,197,94,0.15); border: 1px solid rgba(34,197,94,0.3); color: #22C55E;
    padding: 0.25rem 0.6rem; border-radius: 999px; font-size: 0.66rem; font-weight: 700;
    letter-spacing: 0.06em; text-transform: uppercase; margin-left: 0.5rem;
  }
  .ejemplos-mock .live-badge-light { background: rgba(22,163,74,0.1); border: 1px solid rgba(22,163,74,0.25); color: var(--green); }
  .ejemplos-mock .live-dot { width: 6px; height: 6px; border-radius: 50%; background: #22C55E; animation: ej-pulseDot 1.5s ease-in-out infinite; }
  .ejemplos-mock .live-dot.dark { background: var(--green); }

  .ejemplos-mock .mkt, .ejemplos-mock .sales { animation: ej-fadeInUp 0.6s ease both; }

  .ejemplos-mock .chart-tooltip {
    position: absolute; background: #0F0F12; border: 1px solid var(--border-dark); color: #FFFFFF;
    padding: 0.5rem 0.7rem; border-radius: 6px; font-size: 0.72rem; pointer-events: none; opacity: 0;
    transition: opacity 0.15s ease; white-space: nowrap; z-index: 10;
  }
  .ejemplos-mock .chart-tooltip.show { opacity: 1; }
  .ejemplos-mock .chart-tooltip .tt-l { color: var(--fg-invert-soft); font-size: 0.66rem; }
  .ejemplos-mock .chart-tooltip .tt-v { font-weight: 700; }

  @keyframes ej-fadeInUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes ej-pulseDot { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.6); opacity: 0.5; } }
  @keyframes ej-slideInLeft { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
  @keyframes ej-flashHighlight { 0% { background: rgba(37,99,235,0.25); } 100% { background: var(--zinc-100); } }

  @media (max-width: 960px) {
    .ejemplos-mock .mkt-channels { grid-template-columns: repeat(2, 1fr); }
    .ejemplos-mock .mkt-kpis, .ejemplos-mock .sales-kpis { grid-template-columns: repeat(2, 1fr); }
    .ejemplos-mock .mkt-grid, .ejemplos-mock .sales-grid { grid-template-columns: 1fr; }
    .ejemplos-mock .campaigns thead th.hide-sm, .ejemplos-mock .campaigns tbody td.hide-sm,
    .ejemplos-mock .sellers thead th.hide-sm, .ejemplos-mock .sellers tbody td.hide-sm { display: none; }
  }

  @media (prefers-reduced-motion: reduce) {
    .ejemplos-mock *, .ejemplos-mock *::before, .ejemplos-mock *::after {
      animation-duration: 0.001ms !important;
      transition-duration: 0.001ms !important;
    }
  }
`;

// Anima un número dentro de un texto formateado (ej. "$ 890 K", "58", "4,2×", "78%", "1.240.000")
function animateNumberInText(el: HTMLElement, targetText: string, duration = 1400) {
  const match = targetText.match(/([^\d\-]*)([\d.,]+)(.*)$/);
  if (!match) {
    el.textContent = targetText;
    return;
  }
  const prefix = match[1];
  const raw = match[2];
  const suffix = match[3];
  const usesComma = raw.includes(",");
  let numeric: number;
  let decimals: number;
  if (usesComma) {
    numeric = parseFloat(raw.replace(/\./g, "").replace(",", "."));
    decimals = (raw.split(",")[1] || "").length;
  } else {
    numeric = parseFloat(raw.replace(/\./g, ""));
    decimals = 0;
  }
  const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
  const start = performance.now();
  function frame(now: number) {
    const t = Math.min(1, (now - start) / duration);
    const v = numeric * easeOut(t);
    let intPart: string;
    let decPart: string | null;
    if (decimals > 0) {
      const fixed = v.toFixed(decimals);
      intPart = fixed.split(".")[0];
      decPart = fixed.split(".")[1];
    } else {
      intPart = Math.round(v).toString();
      decPart = null;
    }
    intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    const str = decPart != null ? `${intPart},${decPart}` : intPart;
    el.textContent = prefix + str + suffix;
    if (t < 1) requestAnimationFrame(frame);
    else el.textContent = targetText;
  }
  requestAnimationFrame(frame);
}

function drawSpark(container: HTMLElement, points: number[], color: string) {
  const w = 100;
  const h = 20;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const step = w / (points.length - 1);
  const path = points
    .map((p, i) => {
      const x = i * step;
      const y = h - ((p - min) / range) * (h - 4) - 2;
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");
  const area = path + ` L ${w} ${h} L 0 ${h} Z`;
  container.innerHTML = `
    <svg class="skpi-spark" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" style="display:block;margin-top:0.35rem;height:20px;width:100%;">
      <path d="${area}" fill="${color}" opacity="0.15"/>
      <path d="${path}" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
}

export default function ExamplesClient() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let cancelled = false;
    const cleanups: Array<() => void> = [];

    // Countup de KPIs cuando entran en viewport
    const kpiSelectors = ".kpi .v, .skpi .v, .rank-total .v, .content-metric .v, .sent-seg .p";
    const kpiEls = Array.from(root.querySelectorAll<HTMLElement>(kpiSelectors));
    kpiEls.forEach((el) => {
      el.dataset.original = el.textContent?.trim() || "";
    });
    const kpiObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            animateNumberInText(target, target.dataset.original || "");
            kpiObserver.unobserve(target);
          }
        });
      },
      { threshold: 0.4 }
    );
    kpiEls.forEach((el) => kpiObserver.observe(el));
    cleanups.push(() => kpiObserver.disconnect());

    // Barras animadas (funnel + ranking)
    const bars = Array.from(root.querySelectorAll<HTMLElement>(".funnel-fill, .rank-fill"));
    bars.forEach((bar) => {
      const target = bar.style.width || "0%";
      bar.dataset.targetWidth = target;
      bar.style.width = "0%";
    });
    const barObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target as HTMLElement;
            const delay = bars.indexOf(bar) * 80;
            const timer = setTimeout(() => {
              bar.style.width = bar.dataset.targetWidth || "0%";
            }, delay);
            cleanups.push(() => clearTimeout(timer));
            barObserver.unobserve(bar);
          }
        });
      },
      { threshold: 0.2 }
    );
    bars.forEach((bar) => barObserver.observe(bar));
    cleanups.push(() => barObserver.disconnect());

    // Filtro de canales (Mockup 1)
    const chChannels = root.querySelector<HTMLElement>("#mktChannels");
    const chTbody = root.querySelector<HTMLElement>("#mktCampaigns");
    const onChannelsClick = (e: Event) => {
      const card = (e.target as HTMLElement).closest<HTMLElement>(".ch-card");
      if (!card || !chTbody) return;
      const ch = card.dataset.ch;
      const wasActive = card.classList.contains("active");
      chChannels?.querySelectorAll(".ch-card").forEach((c) => c.classList.remove("active"));
      if (wasActive) {
        chTbody.querySelectorAll("tr").forEach((tr) => tr.classList.remove("dim"));
      } else {
        card.classList.add("active");
        chTbody.querySelectorAll<HTMLElement>("tr").forEach((tr) => {
          tr.classList.toggle("dim", tr.dataset.ch !== ch);
        });
      }
    };
    if (chChannels && chTbody) {
      chChannels.addEventListener("click", onChannelsClick);
      cleanups.push(() => chChannels.removeEventListener("click", onChannelsClick));
    }

    // Toggle de período (Mockup 2)
    const salesPeriods = root.querySelector<HTMLElement>("#salesPeriods");
    const salesKpis = root.querySelector<HTMLElement>("#salesKpis");
    const onPeriodsClick = (e: Event) => {
      const chip = (e.target as HTMLElement).closest<HTMLElement>(".sales-chip[data-period]");
      if (!chip || !salesKpis) return;
      salesPeriods?.querySelectorAll(".sales-chip[data-period]").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      const period = chip.dataset.period as string;
      salesKpis.querySelectorAll<HTMLElement>(".v").forEach((v) => {
        const target = v.dataset[period];
        if (target) {
          v.dataset.original = target;
          animateNumberInText(v, target, 700);
        }
      });
    };
    if (salesPeriods && salesKpis) {
      salesPeriods.addEventListener("click", onPeriodsClick);
      cleanups.push(() => salesPeriods.removeEventListener("click", onPeriodsClick));
    }

    // Tooltip en el chart SVG
    const chartWrap = root.querySelector<HTMLElement>("#chartWrap");
    const tooltip = root.querySelector<HTMLElement>("#chartTooltip");
    if (chartWrap && tooltip) {
      const points = Array.from(chartWrap.querySelectorAll<SVGCircleElement>("circle.pt"));
      const svg = chartWrap.querySelector("svg");
      points.forEach((pt) => {
        const onEnter = () => {
          const rect = chartWrap.getBoundingClientRect();
          if (!svg) return;
          const svgRect = svg.getBoundingClientRect();
          const cx = parseFloat(pt.getAttribute("cx") || "0");
          const cy = parseFloat(pt.getAttribute("cy") || "0");
          const xRatio = svgRect.width / 700;
          const yRatio = svgRect.height / 180;
          const px = svgRect.left - rect.left + cx * xRatio;
          const py = svgRect.top - rect.top + cy * yRatio;
          tooltip.innerHTML = `<div class="tt-l">${pt.dataset.label}</div><div class="tt-v">${pt.dataset.value}</div>`;
          tooltip.style.left = px + 12 + "px";
          tooltip.style.top = py - 8 + "px";
          tooltip.classList.add("show");
        };
        const onLeave = () => tooltip.classList.remove("show");
        pt.addEventListener("mouseenter", onEnter);
        pt.addEventListener("mouseleave", onLeave);
        cleanups.push(() => {
          pt.removeEventListener("mouseenter", onEnter);
          pt.removeEventListener("mouseleave", onLeave);
        });
      });
    }

    // Actividad reciente en vivo (Mockup 2)
    const activityFeed = root.querySelector<HTMLElement>("#activityFeed");
    if (activityFeed) {
      const eventos = [
        { who: "M. González", text: "facturó $ 42,8 M a Cliente Premium 07", color: "green" },
        { who: "L. Fernández", text: "abrió oportunidad en Distribuidor Zona 4", color: "blue" },
        { who: "R. Herrera", text: "cerró venta por $ 18,3 M a Industria Metalúrgica 12", color: "green" },
        { who: "S. Martínez", text: "registró visita comercial a Cliente Retail 22", color: "zinc" },
        { who: "M. González", text: "generó cotización por $ 88,1 M a Cliente Premium 03", color: "blue" },
        { who: "P. Ojeda", text: "agendó llamado con Cliente Sur 08", color: "zinc" },
        { who: "L. Fernández", text: "confirmó pedido de $ 27,4 M a Distribuidor Norte 05", color: "green" },
        { who: "R. Herrera", text: "actualizó ficha de Industria Química 03", color: "zinc" },
        { who: "M. González", text: "facturó $ 55,2 M a Cliente Premium 14", color: "green" },
        { who: "S. Martínez", text: "ganó oportunidad con Cliente Retail 41", color: "blue" },
      ];
      let idx = 0;
      const tick = () => {
        const ev = eventos[idx % eventos.length];
        idx++;
        const row = document.createElement("div");
        row.className = "act-row flash";
        row.innerHTML = `
          <span class="act-dot ${ev.color}"></span>
          <div class="act-text"><b>${ev.who}</b> ${ev.text}</div>
          <div class="act-when">recién</div>
        `;
        activityFeed.insertBefore(row, activityFeed.firstChild);
        const olds = activityFeed.querySelectorAll(".act-when");
        const labels = ["recién", "hace 1 min", "hace 4 min", "hace 12 min", "hace 25 min", "hace 47 min", "hace 1 h", "hace 2 h"];
        olds.forEach((o, i) => {
          o.textContent = labels[i] || "hace 3 h";
        });
        while (activityFeed.children.length > 6) {
          activityFeed.removeChild(activityFeed.lastChild as ChildNode);
        }
      };
      const loop = () => {
        if (cancelled) return;
        tick();
        const t = setTimeout(loop, 6000 + Math.random() * 4000);
        cleanups.push(() => clearTimeout(t));
      };
      const firstTimer = setTimeout(loop, 4000);
      cleanups.push(() => clearTimeout(firstTimer));
    }

    // Sparklines mini en KPIs (Mockup 2)
    const salesKpiCards = Array.from(root.querySelectorAll<HTMLElement>("#salesKpis .skpi"));
    const sparkData = [
      [520, 540, 580, 610, 640, 660, 690, 720],
      [72, 78, 84, 88, 92, 95, 97, 97],
      [7.2, 7.4, 7.6, 7.8, 8.0, 8.1, 8.0, 8.03],
      [24, 28, 32, 36, 40, 44, 47, 51],
      [92, 88, 84, 82, 80, 79, 78, 78],
    ];
    salesKpiCards.forEach((card, i) => {
      const wrap = document.createElement("div");
      card.appendChild(wrap);
      drawSpark(wrap, sparkData[i] || [1, 2, 3, 4], "#2563EB");
    });

    return () => {
      cancelled = true;
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <div className="ejemplos-mock" ref={rootRef}>
      <style>{MOCK_CSS}</style>
      <div dangerouslySetInnerHTML={{ __html: MOCK_HTML }} />
    </div>
  );
}
