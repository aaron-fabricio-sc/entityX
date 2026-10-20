type PublicPlan = {
  name: string;
  description?: string;
  max_clients: number | null;
  price_monthly: string | number;
  price_yearly: string | number;
  currency: string;
};

const API_URL = 'https://api.entityx.tech/api';

const defaultPaidPlansEnglish: Record<string, { name: string; description: string; originalDescription: string }> = {
  'Plan Básico': {
    name: 'Basic Plan',
    originalDescription: 'Ideal para negocios independientes o emprendimientos que recién comienzan y necesitan organizar su información de manera digital y eficiente.',
    description: 'Ideal for independent businesses and new ventures that want to organize their information digitally and efficiently.',
  },
  'Plan Crecimiento': {
    name: 'Growth Plan',
    originalDescription: 'Perfecto para negocios en desarrollo que ya cuentan con una clientela estable y requieren herramientas ágiles para un mejor control diario.',
    description: 'For growing businesses with an established customer base that need practical tools for day-to-day management.',
  },
  'Plan Profesional': {
    name: 'Professional Plan',
    originalDescription: 'Diseñado para negocios consolidados que necesitan gestionar un volumen considerable de clientes y optimizar todos sus procesos administrativos.',
    description: 'For established businesses managing many customers and looking to streamline their administrative processes.',
  },
  'Plan Avanzado': {
    name: 'Advanced Plan',
    originalDescription: 'Para negocios con alta rotación de clientes que buscan el máximo rendimiento, control total sobre sus operaciones y atención fluida.',
    description: 'For businesses with high customer turnover seeking strong performance, operational control, and smooth service.',
  },
  'Plan Corporativo': {
    name: 'Corporate Plan',
    originalDescription: 'Solución integral de máxima capacidad. La mejor opción para negocios con alto flujo de atención o que manejan operaciones a mayor escala.',
    description: 'A high-capacity solution for businesses serving many customers or operating at a larger scale.',
  },
};

function whatsappLink(name: string, lang: string) {
  const message = lang === 'en'
    ? `Hello! I'm interested in ${name}.`
    : `Hola, estoy interesado en el ${name}.`;
  return `https://wa.me/59170668135?text=${encodeURIComponent(message)}`;
}

function setText(element: Element | null, value: string) {
  if (element) {
    element.textContent = value;
    element.classList.remove('skeleton-text');
  }
}

function renderPlans(data: PublicPlan[]) {
  const grid = document.querySelector<HTMLElement>('[data-paid-plans]');
  const trial = document.querySelector<HTMLElement>('[data-trial-offer]');
  if (!grid) return;

  const lang = grid.dataset.lang || 'es';
  const isFree = (plan: PublicPlan) => Number(plan.price_monthly) === 0 && Number(plan.price_yearly) === 0;
  const freePlan = data.find(isFree);
  const paidPlans = data.filter(plan => !isFree(plan));

  if (trial && freePlan) {
    const name = trial.querySelector<HTMLElement>('[data-trial-name]');
    const displayName = lang === 'en' && freePlan.name.trim() === 'Plan de prueba'
      ? name?.dataset.defaultNameEn || freePlan.name
      : freePlan.name;
    setText(name, displayName);
    const description = trial.querySelector<HTMLElement>('[data-trial-description]');
    const defaultSpanishDescription = 'Plan gratuito para probar la plataforma durante 30 días, con asesoría personalizada';
    setText(description, lang === 'en' && freePlan.description?.trim() === defaultSpanishDescription
      ? description?.dataset.defaultDescriptionEn || ''
      : freePlan.description || '');
    setText(
      trial.querySelector('[data-trial-capacity]'),
      freePlan.max_clients === null
        ? (lang === 'en' ? 'Unlimited clients' : 'Clientes ilimitados')
        : (lang === 'en' ? `Up to ${freePlan.max_clients} clients` : `Hasta ${freePlan.max_clients} clientes`),
    );
    const trialCta = trial.querySelector<HTMLAnchorElement>('[data-trial-cta]');
    if (trialCta) trialCta.href = whatsappLink(displayName, lang);
    trial.hidden = false;
  }

  const cards = Array.from(grid.querySelectorAll<HTMLElement>('[data-plan-index]'));
  const template = cards[0];
  while (template && cards.length < paidPlans.length) {
    const card = template.cloneNode(true) as HTMLElement;
    grid.appendChild(card);
    cards.push(card);
  }

  cards.forEach((container, index) => {
    const plan = paidPlans[index];
    if (!plan) {
      container.hidden = true;
      return;
    }
    container.hidden = false;
    container.dataset.planIndex = String(index);
    const translation = lang === 'en' ? defaultPaidPlansEnglish[plan.name] : undefined;
    const displayName = translation?.name || plan.name;
    const displayDescription = translation && plan.description?.trim() === translation.originalDescription
      ? translation.description
      : plan.description || '';
    setText(container.querySelector('.plan-name'), displayName);
    setText(container.querySelector('.plan-description'), displayDescription);
    setText(
      container.querySelector('.plan-max-clients-text'),
      plan.max_clients === null
        ? (lang === 'en' ? 'Unlimited clients' : 'Clientes ilimitados')
        : (lang === 'en' ? `Up to ${plan.max_clients} clients` : `Hasta ${plan.max_clients} clientes`),
    );
    setText(container.querySelector('.plan-clients'), plan.max_clients === null ? '∞' : String(plan.max_clients));
    const formatPrice = (amount: string | number) => `${Number(amount).toLocaleString(lang === 'en' ? 'en-US' : 'es-BO')} ${plan.currency}`;
    setText(container.querySelector('.plan-monthly'), formatPrice(plan.price_monthly));
    setText(container.querySelector('.plan-yearly'), formatPrice(plan.price_yearly));

    const featured = plan.max_clients === 250;
    const badge = container.querySelector<HTMLElement>('.plan-badge');
    if (badge) badge.hidden = !featured;
    container.querySelector('.plan-card')?.classList.toggle('border-primary', featured);
    const cta = container.querySelector<HTMLAnchorElement>('.plan-cta');
    if (cta) {
      cta.href = whatsappLink(displayName, lang);
      cta.classList.toggle('btn-primary', featured);
      cta.classList.toggle('btn-outline-primary', !featured);
    }
  });
}

async function fetchPlans() {
  document.querySelectorAll('.plan-name, .plan-description, .plan-max-clients-text, .plan-clients, .plan-monthly, .plan-yearly')
    .forEach(element => {
      if (element.textContent?.includes('...')) element.classList.add('skeleton-text');
    });

  try {
    const response = await fetch(`${API_URL}/plans/public?currency=BOB`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data: unknown = await response.json();
    if (Array.isArray(data)) renderPlans(data as PublicPlan[]);
  } catch (error) {
    console.error('Error fetching plans from API:', error);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', fetchPlans, { once: true });
} else {
  fetchPlans();
}
