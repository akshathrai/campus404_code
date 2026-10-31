import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Lock } from "lucide-react";
import { APP_ROUTES } from "../../../routes/paths.js";
import { getLab, getLabModule } from "./labsData.js";
import "./LabsPage.css";

export default function LabModulePage() {
  const navigate = useNavigate();
  const { labSlug, moduleId } = useParams();
  const lab = getLab(labSlug);
  const module = getLabModule(labSlug, moduleId);

  if (!lab || lab.externalPath) {
    return <Navigate to={APP_ROUTES.frontendLabs} replace />;
  }

  if (!module) {
    return <Navigate to={APP_ROUTES.frontendLab(lab.slug)} replace />;
  }

  const levels = lab.getLevels(module.id);

  const handleLevelClick = (level) => {
    if (level.status === "locked") return;

    if (lab.trackSlug) {
      navigate(APP_ROUTES.frontendTrackOverview(lab.trackSlug));
      return;
    }

    navigate(APP_ROUTES.frontendTracks);
  };

  return (
    <section className="labModule">
      <div className="labModule__top">
        <Link to={APP_ROUTES.frontendLab(lab.slug)} className="labDetail__back">
          <ArrowLeft size={16} aria-hidden="true" />
          Back to {lab.name}
        </Link>
      </div>

      <header className="labModule__header">
        <h1 className="labModule__title">Module {module.id} Levels</h1>
        <p className="labModule__subtitle">{module.title}</p>
        <p className="labModule__hint">Complete levels in sequence to unlock the next challenge.</p>
      </header>

      <div className="labPath">
        <svg
          className="labPath__svg"
          viewBox="0 0 1000 720"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="labPath__line labPath__line--done"
            d="M280 90 C 420 90, 580 210, 720 210"
            fill="none"
          />
          <path
            className="labPath__line labPath__line--locked"
            d="M720 210 C 580 210, 420 360, 280 360"
            fill="none"
          />
          <path
            className="labPath__line labPath__line--locked"
            d="M280 360 C 420 360, 580 520, 720 520"
            fill="none"
          />
        </svg>

        <ol className="labPath__nodes">
          {levels.map((level, index) => {
            const side = index % 2 === 0 ? "left" : "right";
            const isLocked = level.status === "locked";

            return (
              <li
                key={level.id}
                className={`labPath__node labPath__node--${side} labPath__node--${level.status}`}
                style={{ "--node-index": index }}
              >
                <button
                  type="button"
                  className="labPath__circle"
                  onClick={() => handleLevelClick(level)}
                  disabled={isLocked}
                  aria-label={
                    isLocked
                      ? `${level.title} locked`
                      : `Start ${level.title}`
                  }
                >
                  {level.id}
                </button>

                <div className="labPath__info">
                  <strong>{level.title}</strong>
                  <div className="labPath__badges">
                    <span className="labPath__xp">+{level.xp} XP</span>
                    {isLocked ? (
                      <span className="labPath__locked">
                        <Lock size={12} aria-hidden="true" />
                        Locked
                      </span>
                    ) : null}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
