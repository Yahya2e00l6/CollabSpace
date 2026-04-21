import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const teammates = [
  { initials: "SW", name: "Steve Wuckert", email: "Steve09@gmail.com", status: "Complete", bg: "#e8f5e9", color: "#2e7d32" },
  { initials: "CL", name: "Carlton Littel", email: "@Carlton_Littel", status: "In progress", bg: "#fff8e1", color: "#f57f17" },
  { initials: "RA", name: "Ricky Auer", email: "Ricky32@yahoo.com", status: "Pending", bg: "#fce4ec", color: "#c62828" },
  { initials: "TM", name: "Terrence Marvin", email: "Terrence4m@gmail.com", status: "Complete", bg: "#e8f5e9", color: "#2e7d32" },
  { initials: "KD", name: "Kenneth Donnelly", email: "KennethDonnelly52@yahoo.com", status: "In progress", bg: "#fff8e1", color: "#f57f17" },
];

const employees = [
  { id: "#001", name: "Alice Johnson", email: "alice@collabspace.io", department: "Engineering", status: "Active" },
  { id: "#002", name: "Mark Rivera", email: "mark@collabspace.io", department: "Design", status: "Active" },
  { id: "#003", name: "Sara Chen", email: "sara@collabspace.io", department: "Marketing", status: "Inactive" },
  { id: "#004", name: "David Park", email: "david@collabspace.io", department: "Finance", status: "Active" },
];

const badgeStyle = (status) => {
  if (status === "Complete") return { background: "#e8faf5", color: "#00b894" };
  if (status === "In progress") return { background: "#fff8e6", color: "#fdcb6e" };
  return { background: "#ffe8e8", color: "#e17055" };
};

// ── Icons ──
const IconDashboard = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <rect x="3" y="3" width="7" height="7" rx="1.5"/>
    <rect x="14" y="3" width="7" height="7" rx="1.5"/>
    <rect x="3" y="14" width="7" height="7" rx="1.5"/>
    <rect x="14" y="14" width="7" height="7" rx="1.5"/>
  </svg>
);

const IconTasks = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 11l3 3L22 4"/>
    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
  </svg>
);

const IconCalendar = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const IconAnalytics = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);

const IconTeam = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87"/>
    <path d="M16 3.13a4 4 0 010 7.75"/>
  </svg>
);

const IconSetting = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.07 4.93l-1.41 1.41M4.93 19.07l1.41-1.41M12 2v2M12 20v2M4.93 4.93l1.41 1.41M19.07 19.07l-1.41-1.41M2 12h2M20 12h2"/>
  </svg>
);

const IconHelp = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);

const IconAddMember = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
    <line x1="19" y1="8" x2="19" y2="14"/>
    <line x1="22" y1="11" x2="16" y2="11"/>
  </svg>
);

const IconLogout = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e17055" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>
);

const IconSearch = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

const IconBell = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
    <path d="M13.73 21a2 2 0 01-3.46 0"/>
  </svg>
);

const IconEmployees = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87"/>
    <path d="M16 3.13a4 4 0 010 7.75"/>
  </svg>
);

// Logo Task Z
const LogoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
    <polygon points="16,4 28,10 28,22 16,28 4,22 4,10" fill="white" opacity="0.3"/>
    <polygon points="16,4 28,10 16,16" fill="white" opacity="0.9"/>
    <polygon points="4,10 16,16 16,28" fill="white" opacity="0.6"/>
    <polygon points="16,16 28,10 28,22 16,28" fill="white" opacity="0.4"/>
  </svg>
);

const navItems = [
  { label: "Dashboard", icon: <IconDashboard />, active: true },
  { label: "Tasks", icon: <IconTasks /> },
  { label: "Calendar", icon: <IconCalendar /> },
  { label: "Analytics", icon: <IconAnalytics /> },
  { label: "Team", icon: <IconTeam /> },
];

export default function AdminDashboard() {
  const barRef = useRef(null);
  const donutRef = useRef(null);
  const barChart = useRef(null);
  const donutChart = useRef(null);

  useEffect(() => {
    if (barRef.current) {
      if (barChart.current) barChart.current.destroy();
      barChart.current = new Chart(barRef.current, {
        type: "bar",
        data: {
          labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
          datasets: [{
            data: [65,45,70,55,80,60,75,40,65,50,58,72],
            backgroundColor: "#a29bfe",
            borderRadius: 4,
            borderSkipped: false,
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { display: false }, ticks: { font: { size: 10 }, color: "#888" } },
            y: { display: false, grid: { display: false } },
          },
        },
      });
    }

    if (donutRef.current) {
      if (donutChart.current) donutChart.current.destroy();
      donutChart.current = new Chart(donutRef.current, {
        type: "doughnut",
        data: {
          datasets: [{
            data: [30, 20, 50],
            backgroundColor: ["#6c5ce7", "#a29bfe", "#dfe6e9"],
            borderWidth: 0,
            hoverOffset: 4,
          }],
        },
        options: {
          responsive: false,
          cutout: "72%",
          plugins: { legend: { display: false } },
        },
        plugins: [{
          id: "centerText",
          beforeDraw(chart) {
            const { ctx, chartArea: { left, right, top, bottom } } = chart;
            const cx = (left + right) / 2, cy = (top + bottom) / 2;
            ctx.save();
            ctx.font = "500 22px sans-serif";
            ctx.fillStyle = "#2d3436";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("50%", cx, cy - 8);
            ctx.font = "400 11px sans-serif";
            ctx.fillStyle = "#888";
            ctx.fillText("Progress", cx, cy + 12);
            ctx.restore();
          },
        }],
      });
    }

    return () => {
      barChart.current?.destroy();
      donutChart.current?.destroy();
    };
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh", background: "#f5f5f7", fontFamily: "sans-serif" }}>

      {/* ── Sidebar ── */}
      <div style={{ width: 220, minWidth: 220, background: "#fff", borderRight: "0.5px solid #e0e0e0", display: "flex", flexDirection: "column", padding: "20px 0" }}>

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 20px 20px", borderBottom: "0.5px solid #e0e0e0" }}>
          <div style={{ width: 34, height: 34, background: "linear-gradient(135deg, #a29bfe, #6c5ce7)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(108,92,231,0.35)" }}>
            <LogoIcon />
          </div>
          <span style={{ fontSize: 17, fontWeight: 600, color: "#2d3436" }}>Task Z</span>
        </div>

        {/* Workspace */}
        <div style={{ margin: "14px 16px", background: "#f5f5f7", borderRadius: 10, padding: "10px 12px", display: "flex", alignItems: "center", gap: 8, cursor: "pointer", border: "0.5px solid #e8e8e8" }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: "linear-gradient(135deg, #00cec9, #00b894)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>🎯</div>
          <span style={{ fontSize: 13, fontWeight: 500, flex: 1, color: "#2d3436" }}>Opndoo Studio</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
        </div>

        {/* Main Menu */}
        <div style={{ padding: "12px 20px 6px", fontSize: 10, fontWeight: 600, color: "#b2bec3", letterSpacing: "0.08em", textTransform: "uppercase" }}>Main menu</div>

        {navItems.map(({ label, icon, active }) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 20px", fontSize: 13, color: active ? "#6c5ce7" : "#636e72", background: active ? "#f0eeff" : "transparent", fontWeight: active ? 600 : 400, cursor: "pointer", borderLeft: active ? "3px solid #6c5ce7" : "3px solid transparent", transition: "all 0.15s" }}>
            <span style={{ color: active ? "#6c5ce7" : "#b2bec3" }}>{icon}</span>
            {label}
          </div>
        ))}

        {/* General */}
        <div style={{ padding: "14px 20px 6px", fontSize: 10, fontWeight: 600, color: "#b2bec3", letterSpacing: "0.08em", textTransform: "uppercase" }}>General</div>

        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 20px", fontSize: 13, color: "#636e72", cursor: "pointer", borderLeft: "3px solid transparent" }}>
          <span style={{ color: "#b2bec3" }}><IconSetting /></span>
          Setting
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 20px", fontSize: 13, color: "#636e72", cursor: "pointer", borderLeft: "3px solid transparent" }}>
          <span style={{ color: "#b2bec3" }}><IconHelp /></span>
          Help
        </div>

        {/* Bottom */}
        <div style={{ marginTop: "auto", padding: "0 16px 4px" }}>
          <button style={{ width: "100%", background: "linear-gradient(135deg, #a29bfe, #6c5ce7)", color: "white", border: "none", borderRadius: 10, padding: "11px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer", marginBottom: 4, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, boxShadow: "0 2px 8px rgba(108,92,231,0.3)" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Add Project
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 6px", fontSize: 13, color: "#636e72", cursor: "pointer" }}>
            <span style={{ color: "#b2bec3" }}><IconAddMember /></span>
            Add Member
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px", background: "#fff5f5", borderRadius: 10, fontSize: 13, color: "#e17055", cursor: "pointer", marginTop: 4, border: "0.5px solid #ffd5cc" }}>
            <IconLogout />
            Log Out
          </div>
        </div>
      </div>

      {/* ── Main ── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>

        {/* Topbar */}
        <div style={{ background: "#fff", borderBottom: "0.5px solid #e0e0e0", padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <h1 style={{ fontSize: 20, fontWeight: 600, margin: 0, color: "#2d3436" }}>Dashboard</h1>
            <p style={{ fontSize: 12, color: "#b2bec3", margin: "2px 0 0" }}>Monitor all of your projects and tasks here</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#f5f5f7", border: "0.5px solid #e0e0e0", borderRadius: 8, padding: "7px 12px" }}>
              <IconSearch />
              <input type="text" placeholder="Search anything" style={{ border: "none", outline: "none", background: "transparent", fontSize: 13, color: "#333", width: 160 }} />
              <span style={{ fontSize: 10, background: "#fff", border: "0.5px solid #ddd", borderRadius: 4, padding: "1px 5px", color: "#aaa" }}>⌘ K</span>
            </div>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: "#f5f5f7", border: "0.5px solid #e0e0e0", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <IconBell />
            </div>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #a29bfe, #6c5ce7)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 13, fontWeight: 600 }}>TZ</div>
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "20px 24px" }}>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 16 }}>
            {[
              { label: "Total Project", value: 35, change: "▲ 5%", up: true },
              { label: "Completed Projects", value: 15, change: "▲ 8%", up: true },
              { label: "Running Project", value: 18, change: "▲ 10%", up: true },
              { label: "Pending projects", value: 2, change: "▼ 6%", up: false },
            ].map(({ label, value, change, up }) => (
              <div key={label} style={{ background: "#fff", border: "0.5px solid #e0e0e0", borderRadius: 12, padding: "16px 18px", position: "relative" }}>
                <div style={{ position: "absolute", top: 12, right: 12, color: "#ccc", cursor: "pointer", fontSize: 16 }}>···</div>
                <div style={{ fontSize: 12, color: "#888", marginBottom: 10 }}>{label}</div>
                <div style={{ fontSize: 28, fontWeight: 600, marginBottom: 8, color: "#2d3436" }}>{value}</div>
                <div style={{ fontSize: 11, color: up ? "#00b894" : "#e17055" }}>{change} from last month</div>
              </div>
            ))}
          </div>

          {/* Middle grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 16 }}>

            {/* Analytics */}
            <div style={{ background: "#fff", border: "0.5px solid #e0e0e0", borderRadius: 12, padding: 18 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                <span style={{ fontSize: 15, fontWeight: 600, color: "#2d3436" }}>Project Analytics</span>
                <span style={{ color: "#ccc", cursor: "pointer" }}>···</span>
              </div>
              <div style={{ position: "relative", height: 180 }}>
                <canvas ref={barRef} />
              </div>
            </div>

            {/* Right col */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

              {/* Team Collaboration */}
              <div style={{ background: "#fff", border: "0.5px solid #e0e0e0", borderRadius: 12, padding: 18 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                  <span style={{ fontSize: 15, fontWeight: 600, color: "#2d3436" }}>Team Collaboration</span>
                  <span style={{ cursor: "pointer", color: "#888", fontSize: 18 }}>+</span>
                </div>
                {teammates.map(({ initials, name, email, status, bg, color }) => (
                  <div key={name} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: "0.5px solid #f0f0f0" }}>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: bg, color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 600, flexShrink: 0 }}>{initials}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 500, color: "#2d3436" }}>{name}</div>
                      <div style={{ fontSize: 11, color: "#b2bec3" }}>{email}</div>
                    </div>
                    <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, fontWeight: 500, ...badgeStyle(status) }}>{status}</span>
                  </div>
                ))}
              </div>

              {/* Project Progress */}
              <div style={{ background: "#fff", border: "0.5px solid #e0e0e0", borderRadius: 12, padding: 18 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                  <span style={{ fontSize: 15, fontWeight: 600, color: "#2d3436" }}>Project Progress</span>
                  <span style={{ cursor: "pointer", color: "#888", fontSize: 18 }}>+</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <canvas ref={donutRef} width={160} height={160} />
                  <div style={{ display: "flex", gap: 16, marginTop: 12, flexWrap: "wrap", justifyContent: "center" }}>
                    {[["#6c5ce7", "Complete"], ["#a29bfe", "Project Progress"], ["#dfe6e9", "In complete"]].map(([bg, label]) => (
                      <div key={label} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "#888" }}>
                        <div style={{ width: 10, height: 10, borderRadius: "50%", background: bg }} />
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Employee Table */}
          <div style={{ background: "#fff", border: "0.5px solid #e0e0e0", borderRadius: 12, padding: "16px 18px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 600, color: "#2d3436" }}>
                <IconEmployees /> Total Employee: 1201
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {["↑ Export", "⊟ Filter", "↕ Sort"].map((btn) => (
                  <div key={btn} style={{ display: "flex", alignItems: "center", gap: 4, background: "#f5f5f7", border: "0.5px solid #e0e0e0", borderRadius: 8, padding: "5px 10px", fontSize: 12, color: "#666", cursor: "pointer" }}>{btn}</div>
                ))}
              </div>
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr>
                  {["", "ID ↕", "Name ↕", "Email ↕", "Department ↕", "Status ↕", "Action"].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "6px 8px", color: "#aaa", fontWeight: 500, borderBottom: "0.5px solid #e0e0e0" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {employees.map(({ id, name, email, department, status }) => (
                  <tr key={id}>
                    <td style={{ padding: "8px 8px", borderBottom: "0.5px solid #f0f0f0" }}><input type="checkbox" style={{ width: 13, height: 13 }} /></td>
                    <td style={{ padding: "8px 8px", color: "#888", borderBottom: "0.5px solid #f0f0f0" }}>{id}</td>
                    <td style={{ padding: "8px 8px", color: "#333", borderBottom: "0.5px solid #f0f0f0" }}>{name}</td>
                    <td style={{ padding: "8px 8px", color: "#888", borderBottom: "0.5px solid #f0f0f0" }}>{email}</td>
                    <td style={{ padding: "8px 8px", color: "#888", borderBottom: "0.5px solid #f0f0f0" }}>{department}</td>
                    <td style={{ padding: "8px 8px", borderBottom: "0.5px solid #f0f0f0", color: status === "Active" ? "#00b894" : "#aaa", fontWeight: 500 }}>{status}</td>
                    <td style={{ padding: "8px 8px", color: "#aaa", borderBottom: "0.5px solid #f0f0f0", cursor: "pointer" }}>···</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}