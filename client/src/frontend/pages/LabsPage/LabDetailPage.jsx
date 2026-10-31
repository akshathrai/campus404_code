import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpDown,
  BookMarked,
  Boxes,
  Bug,
  Calculator,
  Code2,
  Coffee,
  Cpu,
  FileText,
  FolderTree,
  GitBranch,
  Globe,
  Hash,
  Keyboard,
  Layers,
  Link2,
  List,
  MapPin,
  Network,
  Puzzle,
  RefreshCw,
  Rocket,
  Search,
  Shield,
  Swords,
  Terminal,
  TrendingUp,
  Type,
} from "lucide-react";
import { APP_ROUTES } from "../../../routes/paths.js";
import { getLab } from "./labsData.js";
import "./LabsPage.css";

const MODULE_ICONS = {
  ArrowUpDown,
  BookMarked,
  Boxes,
  Bug,
  Calculator,
  Code2,
  Coffee,
  Cpu,
  FileText,
  FolderTree,
  GitBranch,
  Globe,
  Hash,
  Keyboard,
  Layers,
  Link2,
  List,
  MapPin,
  Network,
  Puzzle,
  RefreshCw,
  Rocket,
  Search,
  Shield,
  Swords,
  Terminal,
  TrendingUp,
  Type,
};

export default function LabDetailPage() {
  const { labSlug } = useParams();
  const lab = getLab(labSlug);

  if (!lab) {
    return <Navigate to={APP_ROUTES.frontendLabs} replace />;
  }

  if (lab.externalPath) {
    return <Navigate to={lab.externalPath} replace />;
  }

  return (
    <section className="labDetail">
      <div className="labDetail__top">
        <Link to={APP_ROUTES.frontendLabs} className="labDetail__back">
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Campus
        </Link>
      </div>

      <header className="labDetail__header">
        <p className="labDetail__badge">{lab.badge}</p>
        <h1 className="labDetail__title">{lab.headline}</h1>
        <p className="labDetail__copy">{lab.description}</p>
      </header>

      <div className="labDetail__grid">
        {lab.modules.map((module) => {
          const Icon = MODULE_ICONS[module.icon] || Code2;
          return (
            <article key={module.id} className="labModuleCard">
              <div className="labModuleCard__top">
                <span className="labModuleCard__icon" aria-hidden="true">
                  <Icon size={20} />
                </span>
                <span className="labModuleCard__moduleBadge">Module {module.id}</span>
              </div>

              <h2 className="labModuleCard__title">{module.title}</h2>
              <p className="labModuleCard__description">{module.description}</p>

              <div className="labModuleCard__meta">
                <span>{module.lessons} lessons</span>
                <span>{module.difficulty}</span>
              </div>

              <Link
                to={APP_ROUTES.frontendLabModule(lab.slug, module.id)}
                className="labModuleCard__cta"
              >
                Start Module
              </Link>
            </article>
          );
        })}
      </div>

      {lab.trackSlug ? (
        <p className="labDetail__trackHint">
          Prefer the full track experience?{" "}
          <Link to={APP_ROUTES.frontendTrackOverview(lab.trackSlug)}>
            Open {lab.name} track
          </Link>
        </p>
      ) : null}
    </section>
  );
}
