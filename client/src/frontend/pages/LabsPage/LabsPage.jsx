import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../../routes/paths.js";
import { ASSETS } from "../../../shared/assets.js";
import { getLab } from "./labsData.js";
import "./LabsPage.css";

/**
 * Positions match the isometric campus reference map.
 * Campus (college.png) is the background; lab cutouts sit on top.
 */
const CAMPUS_BUILDINGS = [
  {
    id: "dsa",
    image: ASSETS.campus.battle,
    label: "Battle Arena",
    subtitle: "Data Structure",
    style: { left: "5%", top: "3%", width: "25%" },
    zIndex: 3,
  },
  {
    id: "c",
    image: ASSETS.campus.c,
    label: "C Program Lab",
    subtitle: "C Programming",
    style: { left: "62%", top: "54%", width: "27%" },
    zIndex: 5,
  },
  {
    id: "java",
    image: ASSETS.campus.java,
    label: "Java Lab",
    subtitle: "Java",
    style: { left: "13%", top: "46%", width: "25%" },
    zIndex: 6,
  },
  {
    id: "scorecard",
    image: ASSETS.campus.scorecard,
    label: "Scorecard Tower",
    subtitle: "Scorecard",
    style: { left: "0.0%", top: "28%", width: "16%" },
    zIndex: 4,
  },
  {
    id: "python",
    image: ASSETS.campus.python,
    label: "Python Lab",
    subtitle: "Python",
    style: { left: "39%", top: "1%", width: "25%" },
    zIndex: 3,
  },
  {
    id: "codecore",
    image: ASSETS.campus.codecore,
    label: "Codecore Lab",
    subtitle: "Core Skills",
    style: { left: "65%", top: "10%", width: "28%" },
    zIndex: 5,
  },
];

export default function LabsPage() {
  const navigate = useNavigate();

  const handleBuildingClick = (buildingId) => {
    const lab = getLab(buildingId);
    if (!lab) return;

    if (lab.externalPath) {
      navigate(lab.externalPath);
      return;
    }

    navigate(APP_ROUTES.frontendLab(lab.slug));
  };

  return (
    <section className="labsPage labsPage--map">
      <div className="labsMapScene" aria-label="Campus404 labs map">
        <img
          src={ASSETS.campus.college}
          alt=""
          className="labsMapScene__bg"
          draggable={false}
          aria-hidden="true"
        />
        <div className="labsMapScene__veil" aria-hidden="true" />

        <svg
          className="labsMapScene__paths"
          viewBox="0 0 1200 780"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="labsNeon" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.75" />
            </linearGradient>
            <filter id="labsGlow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <circle
            cx="600"
            cy="390"
            r="48"
            fill="none"
            stroke="url(#labsNeon)"
            strokeWidth="3"
            filter="url(#labsGlow)"
            opacity="0.9"
          />
          <circle
            cx="600"
            cy="390"
            r="20"
            fill="#38bdf8"
            opacity="0.5"
            filter="url(#labsGlow)"
          />

          <path d="M575 365 C 480 280, 320 200, 200 140" className="labsMapScene__path" />
          <path d="M555 390 C 400 390, 260 400, 140 430" className="labsMapScene__path" />
          <path d="M575 420 C 470 510, 340 570, 260 640" className="labsMapScene__path" />
          <path d="M630 360 C 740 270, 840 200, 920 160" className="labsMapScene__path" />
          <path d="M645 400 C 800 410, 940 450, 1040 480" className="labsMapScene__path" />
          <path d="M620 430 C 680 530, 720 590, 760 650" className="labsMapScene__path" />
        </svg>

        <div className="labsMapScene__hub" aria-hidden="true">
          <span>Campus Hub</span>
        </div>

        {CAMPUS_BUILDINGS.map((building) => (
          <button
            key={building.id}
            type="button"
            className={`labsMapPin labsMapPin--${building.id} ${building.marker ? "labsMapPin--marker" : ""}`}
            style={{ ...building.style, zIndex: building.zIndex }}
            onClick={() => handleBuildingClick(building.id)}
            aria-label={`Enter ${building.label}`}
          >
            {building.image ? (
              <img
                src={building.image}
                alt=""
                className="labsMapPin__image"
                draggable={false}
              />
            ) : (
              <span className="labsMapPin__markerVisual" aria-hidden="true">
                <span className="labsMapPin__markerCore" />
                <span className="labsMapPin__markerRing" />
              </span>
            )}
            <span className={`labsMapPin__tag ${building.marker ? "is-visible" : ""}`}>
              <strong>{building.label}</strong>
              <small>{building.subtitle}</small>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
