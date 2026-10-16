export const languages = {
  es: "Español",
  en: "English",
};

export const defaultLang = "es";

export const ui = {
  es: {
    "nav.home": "Inicio",
    "nav.features": "Módulos",
    "nav.mission": "Misión",
    "nav.vision": "Visión",
    "nav.pricing": "Precios",
    "nav.login": "Iniciar Sesión",
    "nav.terms_conditions": "Términos y Condiciones",
    "hero.title": "El ERP operativo para ordenar y hacer crecer tu empresa.",
    "hero.subtitle":
      "Centraliza clientes, ventas, cobros, productos, inventario por sucursal, personal y reportes. Gestiona la operación diaria con información clara y datos confiables.",
    "hero.cta": "Solicitar una demostración",
    "hero.whatsapp_message":
      "Hola Aaron, vengo de la web de EntityX. Me interesa probar el sistema para mi negocio. Mi nombre es...",
    "hero.cta_pricing": "Conocer los planes",

    // SEO
    "seo.home.title": "EntityX | Software de gestión empresarial en la nube",
    "seo.home.desc":
      "Software de gestión empresarial en la nube para pequeñas y medianas empresas de servicios. Centraliza clientes, cobros, ventas, personal, membresías y accesos.",
    "seo.home.keywords":
      "software de gestión empresarial, software de gestión en la nube, sistema administrativo en la nube, software para pequeñas y medianas empresas, gestión de clientes, control de cobros, registro de pagos, gestión de ventas, control de membresías, verificación de membresías, control de accesos, gestión de personal, asistencia de empleados, reportes de negocio, empresas con ingresos recurrentes, software para gimnasios, software para academias, software para clubes, SaaS de gestión empresarial",

    "seo.pricing.title": "Precios y Planes - EntityX",
    "seo.pricing.desc":
      "Planes accesibles para todo tamaño de negocio. Sin costos ocultos. Incluye Membresías, POS, RRHH y Portal del Cliente.",
    "seo.pricing.keywords":
      "precios erp gimnasio, planes entityx, costo software deportivo, precios gestion academias",

    "seo.partners.title": "Programa de Aliados - EntityX",
    "seo.partners.desc":
      "Genera ingresos recurrentes digitalizando negocios deportivos y educativos con EntityX.",
    "seo.partners.keywords":
      "programa aliados software, revendedor software, comisiones ventas software, aliados entityx",

    "feat.whatis.title": "Controla toda tu operación desde un solo lugar",
    "feat.whatis.desc":
      "EntityX reúne clientes, cobros, ventas, personal e información operativa para que tu empresa trabaje con orden, control y datos confiables.",
    "feat.whatis.p1":
      "Diseñado para pequeñas y medianas empresas de servicios con ingresos recurrentes.",
    "footer.description":
      "EntityX es un sistema de gestión en la nube para pequeñas y medianas empresas de servicios con ingresos recurrentes. Ordena la operación, verifica membresías y accesos, y convierte los datos en decisiones confiables.",
    
    // Problemas (Tarjeta Izquierda)
    "feat.prob.1.title": "Clientes vencidos que siguen ingresando",
    "feat.prob.1.desc": "Clientes con mensualidad vencida que siguen ingresando por falta de control en recepción.",
    "feat.prob.2.title": "Ventas sin registrar que generan pérdidas",
    "feat.prob.2.desc": "Ventas de productos (agua, snacks) que no se registran y generan pérdidas diarias.",
    "feat.prob.3.title": "Recepción pierde tiempo en consultas repetitivas",
    "feat.prob.3.desc": "Recepción perdiendo horas respondiendo por WhatsApp sobre horarios y vigencias.",
    "feat.prob.4.title": "Sin control de horarios ni pagos del personal",
    "feat.prob.4.desc": "No hay registro claro de horarios de entrada/salida ni del historial de pagos a tus empleados.",
    "feat.prob.5.title": "Datos dispersos, sin visión del negocio",
    "feat.prob.5.desc": "Datos desordenados que no te permiten ver la salud financiera real del negocio.",
    "feat.prob.6.title": "Cobros sin registrar que generan pérdidas",
    "feat.prob.6.desc": "¿Sufres pérdidas de dinero por cobros no registrados, anotaciones informales o ingresos que no quedan asentados?",
    "feat.prob.7.title": "Sin claridad sobre los resultados del negocio",
    "feat.prob.7.desc": "¿Tienes incertidumbre sobre el rendimiento real de tu negocio, las ganancias del mes o tus productos más vendidos?",
    "feat.prob.8.title": "Clientes vencidos ingresan sin ser detectados",
    "feat.prob.8.desc": "¿Ingresan a tus instalaciones clientes con membresías o cuotas vencidas sin que el personal se dé cuenta?",
    "feat.prob.9.title": "Planes y promociones difíciles de adaptar",
    "feat.prob.9.desc": "¿Se te complica diseñar planes de pago personalizados, paquetes por clases o promociones especiales?",
    "feat.prob.10.title": "Recepción responde las mismas consultas a diario",
    "feat.prob.10.desc": "¿Tu recepción pierde demasiado tiempo respondiendo consultas sobre fechas de vencimiento o saldos pendientes?",
    "feat.prob.11.title": "Sin control de puntualidad ni turnos del personal",
    "feat.prob.11.desc": "¿Tienes falta de control sobre la puntualidad, los horarios de llegada o el cumplimiento de turnos de tu personal?",
    "feat.prob.12.title": "Accesos internos sin orden ni permisos",
    "feat.prob.12.desc": "¿Necesitas que cada miembro de tu equipo tenga su propio acceso al sistema sin que interfiera en la configuración o información de otras áreas?",
    "feat.prob.13.title": "Pagos al personal sin historial claro",
    "feat.prob.13.desc": "¿Llegas a fin de mes con descontrol sobre los pagos, adelantos o sueldos entregados a tu personal?",
    "feat.prob.14.title": "Demasiadas consultas sobre horarios y clases",
    "feat.prob.14.desc": "¿Inviertes demasiado tiempo respondiendo mensajes sobre los horarios, costos o disponibilidad de tus clases?",
    "feat.prob.15.title": "Cuadernos y archivos físicos desordenan la gestión",
    "feat.prob.15.desc": "¿Dependes de cuadernos o archivos físicos propensos a perderse, deteriorarse o desordenar tu administración?",
    
    // Soluciones (Tarjeta Derecha)
    "feat.sol.1.title": "Controla quién puede ingresar",
    "feat.sol.1.desc": "El sistema sabe exactamente quién tiene acceso. Cero ingresos por cortesía no autorizada.",
    "feat.sol.2.title": "Registra ventas y mantén tu caja al día",
    "feat.sol.2.desc": "Módulo de ventas integrado que audita tu inventario y mantiene la caja siempre cuadrada.",
    "feat.sol.3.title": "Clientes consultan pagos y horarios en línea",
    "feat.sol.3.desc": "Tus clientes consultan su estado, pagos y horarios directamente desde su propio panel.",
    "feat.sol.4.title": "Controla asistencia, horarios y pagos del equipo",
    "feat.sol.4.desc": "Controla asistencia, horarios y el registro de pagos de todo tu equipo de trabajo.",
    "feat.sol.5.title": "Reportes centralizados con un clic",
    "feat.sol.5.desc": "Genera reportes centralizados de membresías, clientes, ventas y empleados con un solo clic.",
    "feat.sol.6.title": "Registra cada ingreso y venta al instante",
    "feat.sol.6.desc": "Registro de ingresos y ventas en tiempo real para asentar de forma exacta cada cobro de servicios, membresías o productos.",
    "feat.sol.7.title": "Indicadores para medir ingresos y crecimiento",
    "feat.sol.7.desc": "Reportes e indicadores al instante para analizar los ingresos, el crecimiento y la estabilidad financiera de tu negocio.",
    "feat.sol.8.title": "Verifica al instante vigencia y acceso",
    "feat.sol.8.desc": "Verificación automática de accesos para identificar de inmediato quién está al día y quién tiene un pago pendiente.",
    "feat.sol.9.title": "Configura membresías según tu negocio",
    "feat.sol.9.desc": "Membresías configurables que te permiten adaptar las condiciones de cobro según el modelo exacto de tu negocio.",
    "feat.sol.10.title": "Clientes consultan su información por cuenta propia",
    "feat.sol.10.desc": "Portal de autogestión para clientes donde cada usuario puede consultar su estado de cuenta, consumos y vencimientos.",
    "feat.sol.11.title": "Registra asistencia y controla horarios del equipo",
    "feat.sol.11.desc": "Registro de asistencia de empleados para supervisar los horarios y la jornada laboral de todo tu equipo.",
    "feat.sol.12.title": "Asigna roles y accesos para cada trabajador",
    "feat.sol.12.desc": "Accesos por roles para que cada trabajador ingrese con su propio usuario y acceda de forma ordenada únicamente a los módulos necesarios para su trabajo.",
    "feat.sol.13.title": "Lleva un historial ordenado de pagos al personal",
    "feat.sol.13.desc": "Registro centralizado de pago a empleados para llevar un historial transparente de los egresos por concepto de personal.",
    "feat.sol.14.title": "Publica horarios y detalles de clases en línea",
    "feat.sol.14.desc": "Cartelera digital de actividades donde los clientes consultan de forma autónoma los horarios, precios y detalles de cada clase.",
    "feat.sol.15.title": "Gestiona tu negocio desde la nube",
    "feat.sol.15.desc": "Sistema centralizado en la nube para gestionar la operación de tu negocio de forma segura y accesible desde cualquier dispositivo.",

    // Section 2
    "feat.membership.title": "BENEFICIOS CLAVE PARA TU NEGOCIO",
    "feat.membership.subtitle": "Una plataforma para tu operación",
    "feat.membership.desc":
      "EntityX reúne las herramientas esenciales para controlar ingresos, accesos, clientes, empleados y actividades desde un solo lugar.",
    "feat.membership.list1.title": "Cobros y membresías ordenadas",
    "feat.membership.list1.desc":
      "Crea planes, paquetes y promociones con condiciones claras para cobrar de acuerdo al modelo de tu negocio.",
    "feat.membership.list2.title": "Ventas con control de productos",
    "feat.membership.list2.desc":
      "Registra productos, servicios y actividades en una sola venta; las existencias se actualizan según la sucursal elegida.",
    "feat.membership.list3.title": "Equipo con accesos por rol",
    "feat.membership.list3.desc":
      "Cada trabajador ingresa con su propio usuario y ve solo los módulos que necesita para realizar su trabajo.",
    "feat.membership.list4.title": "Clientes mejor organizados",
    "feat.membership.list4.desc":
      "Mantén el historial de clientes, membresías, vencimientos, consumos y datos importantes en una base centralizada.",
    "feat.membership.list5.title": "Actividades visibles para todos",
    "feat.membership.list5.desc":
      "Publica horarios, precios y detalles de tus servicios o actividades para reducir consultas repetitivas en recepción o mensajes.",
    "feat.membership.list6.title": "Reportes para decidir mejor",
    "feat.membership.list6.desc":
      "Consulta ingresos, ganancias, ventas y crecimiento con indicadores claros para entender cómo va tu negocio.",
    "feat.membership.list7.title": "Asistencia del personal",
    "feat.membership.list7.desc":
      "Controla horarios de llegada, turnos y jornada laboral para supervisar mejor la puntualidad de tu equipo.",
    "feat.membership.list8.title": "Pagos a empleados controlados",
    "feat.membership.list8.desc":
      "Registra sueldos, adelantos y pagos al personal para tener un historial claro de tus egresos.",
    "feat.membership.list9.title": "Información segura en la nube",
    "feat.membership.list9.desc":
      "Gestiona tu operación desde cualquier dispositivo sin depender de cuadernos, archivos físicos o planillas dispersas.",

    "inventory.badge": "Ventas de productos",
    "inventory.title": "Registra tus ventas y mantén el control de tus productos",
    "inventory.desc": "EntityX reúne en una sola venta los productos, servicios y actividades de cada cliente. Para los productos, el sistema muestra la disponibilidad y actualiza las existencias de la sucursal.",
    "inventory.highlight": "Tu equipo vende con información clara: conoce qué productos están disponibles, aplica el precio de la sucursal y evita registrar más unidades de las que existen.",
    "inventory.benefit1.title": "Una venta, varios conceptos",
    "inventory.benefit1.desc": "Agrega los productos, servicios y actividades que el cliente adquiere en un mismo registro de venta.",
    "inventory.benefit2.title": "Disponibilidad por sucursal",
    "inventory.benefit2.desc": "Antes de vender, recepción consulta cuántas unidades están disponibles en la sucursal seleccionada.",
    "inventory.benefit3.title": "Precios según tu operación",
    "inventory.benefit3.desc": "Usa el precio de venta configurado para cada sucursal cuando tu negocio trabaja con valores distintos.",
    "inventory.benefit4.title": "Movimientos que respaldan la venta",
    "inventory.benefit4.desc": "Cada ingreso, salida, ajuste o transferencia queda registrado para entender por qué cambió la existencia.",

    "workflow.badge": "Cómo funciona",
    "workflow.title": "De la configuración al control diario",
    "workflow.desc": "EntityX se integra a la operación de tu empresa en pasos simples, sin depender de infraestructura costosa.",
    "workflow.step1.title": "Configura tu empresa",
    "workflow.step1.desc": "Define los datos de tu empresa, usuarios, permisos, planes y servicios según la forma en que trabajas.",
    "workflow.step2.title": "Registra la operación",
    "workflow.step2.desc": "El equipo registra clientes, cobros, ventas y actividades; cuando aplica, también consulta vigencias y accesos.",
    "workflow.step3.title": "Decide con datos",
    "workflow.step3.desc": "Quien dirige la empresa consulta reportes e indicadores para supervisar resultados y tomar mejores decisiones.",

    "faq.title": "Preguntas frecuentes",
    "faq.desc": "Respuestas claras antes de que incorpores EntityX a tu operación.",
    "faq.1.question": "¿EntityX es solo para gimnasios?",
    "faq.1.answer": "No. EntityX comienza en gimnasios, academias y clubes, pero está pensado para pequeñas y medianas empresas de servicios con clientes o ingresos recurrentes.",
    "faq.2.question": "¿Necesito molinetes o equipos especiales?",
    "faq.2.answer": "No. EntityX funciona desde la web y permite verificar membresías o accesos mediante las opciones habilitadas por la empresa, sin requerir infraestructura costosa.",
    "faq.3.question": "¿Puedo usar EntityX desde distintos dispositivos?",
    "faq.3.answer": "Sí. Al ser una plataforma en la nube, los usuarios autorizados pueden acceder desde los dispositivos que utilicen en su trabajo.",
    "faq.4.question": "¿Qué información puede ver cada trabajador?",
    "faq.4.answer": "Cada usuario tiene un rol. La empresa define qué información y acciones necesita cada persona para cumplir su responsabilidad.",
    "faq.5.question": "¿Y si mi empresa no trabaja con membresías?",
    "faq.5.answer": "EntityX está orientado a servicios con ingresos recurrentes. El núcleo de clientes, cobros, ventas, personal y reportes puede adaptarse a modelos compatibles; las membresías y accesos se habilitan cuando corresponden al flujo de la empresa.",
    "faq.6.question": "¿Puedo vender productos, servicios y actividades en una misma venta?",
    "faq.6.answer": "Sí. EntityX permite registrar varios productos, servicios y actividades en una sola venta. Al incluir productos, el sistema muestra la disponibilidad de la sucursal y actualiza las existencias al completar el registro.",

    "cta.final.title": "Ordena la operación de tu empresa con EntityX",
    "cta.final.desc": "Conoce cómo EntityX puede ayudarte a centralizar la información, controlar la operación diaria y crecer con datos confiables.",
    "cta.final.button": "Solicitar una demostración",

    "credential.badge": "Acceso ágil y seguro",
    "credential.title": "CREDENCIAL DIGITAL CON QR",
    "credential.desc": "Tus clientes muestran su credencial digital y recepción verifica el acceso al instante.",
    "credential.benefit1.title": "Ingreso más rápido",
    "credential.benefit1.desc": "Reduce filas y consultas al verificar la membresía en segundos.",
    "credential.benefit2.title": "Control desde recepción",
    "credential.benefit2.desc": "Verifica la membresía de cada cliente antes de su ingreso.",
    "credential.benefit3.title": "Acceso validado",
    "credential.benefit3.desc": "Cada lectura comprueba vigencia y las reglas configuradas de la membresía.",
    "credential.preview.eyebrow": "Credencial digital",
    "credential.preview.active": "Membresía activa",
    "credential.preview.client": "Cliente",
    "credential.preview.name": "Alex Romero",
    "credential.preview.plan": "Plan mensual",
    "credential.preview.qr_alt": "Código QR de ejemplo",
    "credential.preview.temporary": "QR temporal para validar el acceso",
    "credential.step1.title": "Abre su credencial",
    "credential.step1.desc": "El cliente la consulta desde su panel.",
    "credential.step2.title": "Recepción escanea",
    "credential.step2.desc": "Desde recepción se escanea el QR de la credencial.",
    "credential.step3.title": "EntityX valida",
    "credential.step3.desc": "Vigencia y reglas de acceso en un paso.",
    "credential.verification.title": "Dos formas de verificar la membresía",
    "credential.verification.desc": "Configura el método de verificación que mejor se adapte al funcionamiento de tu recepción.",
    "credential.verification.qr.title": "QR",
    "credential.verification.qr.desc": "Cada cliente tiene un QR en su credencial digital y recepción lo escanea para verificar su membresía.",
    "credential.verification.document.title": "Con número de documento",
    "credential.verification.document.desc": "Recepción busca al cliente por su documento para consultar su membresía.",

    // Section 3
    "feat.agnostic.title": "Un núcleo adaptable a distintos sectores",
    "feat.agnostic.desc":
      "EntityX comienza con empresas de servicios con membresías o ingresos recurrentes y adapta su núcleo de clientes, cobros, personal y reportes a cada operación.",
    "feat.agnostic.list1":
      "Centros de Salud Física: Gimnasios, CrossFit, Yoga, Pilates y Artes Marciales.",
    "feat.agnostic.list2":
      "Centros Formativos y Arte: Academias de danza, música e idiomas.",
    "feat.agnostic.list3":
      "Espacios Compartidos: Coworkings y Clubes recreativos/sociales.",

    // Section 4
    "feat.access.title": "PORTAL DE AUTOGESTIÓN DEL CLIENTE",
    "feat.access.desc":
      "Tu cliente recibe sus credenciales para acceder a un dashboard privado donde puede de forma autónoma:",
    "feat.access.list1":
      "Consultar la vigencia y detalles de su plan actual.",
    "feat.access.list2":
      "Ver la grilla de horarios de actividades, clases disponibles y anuncios importantes del negocio.",
    "feat.access.card_desc":
      "Tus clientes consultan vigencia, pagos, consumos, vencimientos, horarios y anuncios desde su propio panel.",

    // Section 5 (Portal - Merged to Access in text, keeping key for fallback)
    "feat.portal.title": "PANEL PERSONAL PARA EL CLIENTE",
    "feat.portal.desc":
      "Dale a tus clientes el poder de gestionar su propia información, reduciendo consultas administrativas.",

    // Section 6, 7, 8, 9 merged for brevity in UI but kept as blocks
    "feat.extras.title": "TODO RESPALDADO EN LA NUBE",
    "feat.products.title": "Inventario Seguro",
    "feat.products.desc":
      "Audita cada ítem vendido. Nunca más pierdas dinero por un mal conteo de stock físico.",
    "feat.security.title": "Multiplataforma",
    "feat.security.desc":
      "Accede desde cualquier dispositivo (PC, tablet o smartphone) con seguridad y rapidez garantizada.",
    "feat.staff.title": "Reportes Financieros",
    "feat.staff.desc":
      "Toma decisiones basadas en datos reales sobre tus ingresos por membresías y ventas.",
    "feat.partners.title": "Programa de Asociados",
    "feat.partners.desc":
      "Conviértete en un agente comercial de EntityX y genera ingresos recomendando el sistema.",

    // Partners Page
    "partners.hero.title":
      "Programa de Aliados: Conviértete en un Asesor Comercial",
    "partners.hero.desc":
      "Genera ingresos recurrentes ayudando a negocios a eliminar el caos de los cuadernos mediante nuestro sistema.",
    "partners.list1.title": "Capacitación Total del Sistema",
    "partners.list1.desc":
      "Domina los módulos (Membresías, Ventas, RRHH) para demostrar el valor a tus prospectos.",
    "partners.list2.title": "Dashboard Exclusivo",
    "partners.list2.desc":
      "Panel para gestionar tu actividad, registrar prospectos y hacerles seguimiento.",
    "partners.list3.title": "Comisiones Transparentes",
    "partners.list3.desc":
      "Visualiza tus ventas y ganancias recurrentes con total claridad y precisión.",
    "partners.list4.title": "Control de tu Cartera",
    "partners.list4.desc":
      "Asegura la fidelidad de tus clientes a largo plazo monitoreando su estado.",
    "partners.list5.title": "Impacto Real",
    "partners.list5.desc":
      "Vende una solución que realmente acaba con la cartera vencida de los negocios.",
    "partners.badge": "Aliados EntityX",
    "partners.cta.title": "¿Estás listo para rentabilizar tu red?",
    "partners.cta.button": "Unirme al Programa",
    "common.active": "Activo",
    "common.inactive": "Vencido",
    "common.contact": "Contacto",

    // Business Types
    "biz.gym": "Gimnasios y Crossfit",
    "biz.gym.flow": "Administra planes, renovaciones y vencimientos; recepción verifica el acceso y registra las ventas diarias en el mismo flujo.",
    "biz.yoga": "Yoga y Pilates",
    "biz.yoga.flow": "Configura paquetes o mensualidades, publica horarios de actividades y mantiene cobros y asistencia ordenados por estudio.",
    "biz.deportes": "Escuelas Deportivas",
    "biz.deportes.flow": "Centraliza inscripciones, cuotas y actividades deportivas, dando al equipo una vista clara de la asistencia y los pagos.",
    "biz.martial": "Artes Marciales",
    "biz.martial.flow": "Controla mensualidades y vigencias, valida el ingreso de cada cliente y conserva un historial ordenado de sus movimientos.",
    "biz.danza": "Danza y Música",
    "biz.danza.flow": "Reúne inscripciones, planes de pago, horarios y actividades para que la coordinación no dependa de mensajes o planillas separadas.",
    "biz.education": "Institutos Educativos",
    "biz.education.flow": "Ordena alumnos, cuotas, actividades formativas y asistencia, facilitando el seguimiento administrativo de cada periodo.",
    "biz.spa": "Spas y Estética",
    "biz.spa.flow": "Organiza clientes, paquetes de servicios y pagos recurrentes, con un registro claro de ventas y atención del equipo.",
    "biz.coworking": "Coworking y Clubes",
    "biz.coworking.flow": "Su núcleo de clientes, planes, cobros y roles aporta una base para adaptar la operación a espacios y beneficios compartidos.",

    // Pricing Page
    "pricing.title": "Inversión: Planes que Crecen Contigo",
    "pricing.desc":
      "No limitamos módulos. Obtienes el sistema completo (Membresías, Ventas, RRHH, Portal) en todos los planes. Pagas únicamente según la cantidad de clientes activos.",
    "pricing.note":
      "Nota Clave: El límite aplica solo a CLIENTES ACTIVOS. Tu base de datos histórica es ilimitada; cobramos por quienes tienen un plan vigente hoy.",
    "pricing.subtitle": "Nuestros Planes (BOB)",
    "pricing.table.plan": "Plan",
    "pricing.table.capacity": "Capacidad de Clientes Activos",
    "pricing.table.monthly": "Mensual",
    "pricing.table.yearly": "Anual (Ahorras 2 meses)",
    "pricing.p0.name": "Plan Gratuito",
    "pricing.p0.cap": "Hasta 15 clientes",
    "pricing.p1.name": "Plan Inicial",
    "pricing.p1.cap": "Hasta 50 clientes",
    "pricing.p2.name": "Plan Crecimiento",
    "pricing.p2.cap": "Hasta 125 clientes",
    "pricing.p3.name": "Plan Consolidado",
    "pricing.p3.cap": "Hasta 250 clientes",
    "pricing.p4.name": "Plan Corporativo",
    "pricing.p4.cap": "Hasta 500 clientes",
    "pricing.p5.name": "Plan Escala Industrial",
    "pricing.p5.cap": "Hasta 1000 clientes",
    "pricing.clients_up_to": "Hasta",
    "pricing.clients_label": "clientes",
    "pricing.badge.popular": "Popular",
    "pricing.cta.choose": "Adquirir Sistema",
    "pricing.includes.title": "Todos los planes incluyen:",
    "pricing.inc1.title": "Cobros, membresías y planes personalizados para tu negocio",
    "pricing.inc1.desc": "",
    "pricing.inc2.title": "Ingresos, ventas y pagos registrados en tiempo real",
    "pricing.inc2.desc": "",
    "pricing.inc3.title": "Portal para que tus clientes consulten vencimientos, consumos y estado de cuenta",
    "pricing.inc3.desc": "",
    "pricing.inc4.title": "Accesos por roles, asistencia y control de recursos humanos",
    "pricing.inc4.desc": "",
    "pricing.inc5.title": "Cartelera digital de actividades, horarios, precios y clases disponibles",
    "pricing.inc5.desc": "",
    "pricing.inc6.title": "Reportes e indicadores para conocer ingresos, crecimiento y estabilidad",
    "pricing.inc6.desc": "",
    "pricing.annual.title": "¿Por qué elegir el pago Anual?",
    "pricing.annual.desc":
      "Te regalamos 2 meses de servicio. Asegura el control operativo de tu negocio por todo un año al mejor costo.",
    "pricing.flex.title": "Flexibilidad de Escalado",
    "pricing.flex.desc":
      "A medida que tu comunidad de clientes crece, el sistema escala contigo. Puedes subir de nivel sin interrupciones.",
    "pricing.transparency.title": "Transparencia Total",
    "pricing.transparency.desc":
      "Audita cada pago realizado a la plataforma para garantizar la transparencia de nuestros servicios B2B.",

    "footer.copyright":
      "© 2026 EntityX - Aaron Fabricio Santa Cruz Valdez (AaronCode). Todos los derechos reservados.",
  },
  en: {
    "nav.home": "Home",
    "nav.features": "Modules",
    "nav.mission": "Mission",
    "nav.vision": "Vision",
    "nav.pricing": "Pricing",
    "nav.login": "Login",
    "nav.terms_conditions": "Terms and Conditions",
    "hero.title": "The operational ERP to organize and grow your business.",
    "hero.subtitle":
      "Centralize customers, sales, payments, products, branch inventory, staff, and reports. Manage daily operations with clear information and reliable data.",
    "hero.cta": "Request a demo",
    "hero.whatsapp_message":
      "Hello Aaron, I'm coming from the EntityX website. I'm interested in trying the system for my business. My name is...",
    "hero.cta_pricing": "Explore plans",

    // SEO
    "seo.home.title": "EntityX | Cloud business management software",
    "seo.home.desc":
      "Cloud business management software for small and medium-sized service companies. Centralize customers, payments, sales, staff, memberships, and access.",
    "seo.home.keywords":
      "business management software, cloud management software, cloud administrative system, software for small and medium-sized businesses, customer management, payment tracking, sales management, membership management, membership verification, access control, staff management, employee attendance, business reports, recurring revenue businesses, gym management software, academy management software, club management software, business management SaaS",

    "seo.pricing.title": "Pricing and Plans - EntityX",
    "seo.pricing.desc":
      "Accessible plans for sports centers, academies, and clubs. Includes memberships, sales, access, clients, HR, reports, and client portal.",
    "seo.pricing.keywords":
      "sports center software pricing, EntityX plans, sports management app cost, academy management pricing, lightweight ERP pricing, membership software pricing",

    "seo.partners.title": "Partner Program - EntityX",
    "seo.partners.desc":
      "Generate recurring revenue by digitizing sports and educational businesses with EntityX.",
    "seo.partners.keywords":
      "software partner program, software reseller, software sales commissions, EntityX partners",

    "feat.whatis.title": "Control your entire operation from one place",
    "feat.whatis.desc":
      "EntityX brings together customers, payments, sales, staff, and operational information so your company works with order, control, and reliable data.",
    "feat.whatis.p1":
      "Built for small and medium-sized service companies with recurring revenue.",
    "footer.description":
      "EntityX is a cloud management system for small and medium-sized service companies with recurring revenue. It organizes operations, verifies memberships and access, and turns data into reliable decisions.",
    // Problemas (Tarjeta Izquierda)
    "feat.prob.1.title": "Expired clients keep entering",
    "feat.prob.1.desc": "Clients with expired memberships who keep entering due to lack of control.",
    "feat.prob.2.title": "Unrecorded sales cause losses",
    "feat.prob.2.desc": "Product sales (water, snacks) that go unregistered causing daily losses.",
    "feat.prob.3.title": "The front desk repeats the same answers",
    "feat.prob.3.desc": "Reception losing hours answering WhatsApp messages about schedules.",
    "feat.prob.4.title": "No control of staff schedules or payments",
    "feat.prob.4.desc": "No clear record of entry/exit times or payment history for your employees.",
    "feat.prob.5.title": "Scattered data, no clear business view",
    "feat.prob.5.desc": "Disorganized data that prevents you from seeing the real financial health of the business.",
    "feat.prob.6.title": "Unrecorded payments cause losses",
    "feat.prob.6.desc": "Do you lose money because of unregistered charges, informal notes, or income that is never properly recorded?",
    "feat.prob.7.title": "Your business results are unclear",
    "feat.prob.7.desc": "Are you uncertain about your real business performance, monthly profit, or best-selling products?",
    "feat.prob.8.title": "Expired clients enter unnoticed",
    "feat.prob.8.desc": "Do clients with expired memberships or overdue fees enter your facilities without staff noticing?",
    "feat.prob.9.title": "Plans and promotions are hard to adapt",
    "feat.prob.9.desc": "Is it hard to design custom payment plans, class packages, or special promotions?",
    "feat.prob.10.title": "The front desk answers the same questions daily",
    "feat.prob.10.desc": "Does reception spend too much time answering questions about due dates or pending balances?",
    "feat.prob.11.title": "No control of staff punctuality or shifts",
    "feat.prob.11.desc": "Do you lack control over arrival times, punctuality, or shift compliance for your staff?",
    "feat.prob.12.title": "Internal access lacks order and permissions",
    "feat.prob.12.desc": "Do you need each team member to have their own system access without interfering with settings or information from other areas?",
    "feat.prob.13.title": "Staff payments lack a clear history",
    "feat.prob.13.desc": "Do you end the month without clear control over staff payments, advances, or salaries?",
    "feat.prob.14.title": "Too many questions about classes and schedules",
    "feat.prob.14.desc": "Do you spend too much time answering messages about schedules, prices, or class availability?",
    "feat.prob.15.title": "Notebooks and paper files disrupt management",
    "feat.prob.15.desc": "Do you depend on notebooks or physical files that can get lost, damaged, or disorganize your operations?",
    
    // Soluciones (Tarjeta Derecha)
    "feat.sol.1.title": "Control who can enter",
    "feat.sol.1.desc": "The system knows exactly who has access. Zero unauthorized courtesy entries.",
    "feat.sol.2.title": "Record sales and keep cash up to date",
    "feat.sol.2.desc": "Integrated sales module that audits your inventory and keeps cash squared.",
    "feat.sol.3.title": "Clients check payments and schedules online",
    "feat.sol.3.desc": "Your clients check their status, payments, and schedules directly from their own panel.",
    "feat.sol.4.title": "Control team attendance, schedules, and payments",
    "feat.sol.4.desc": "Control attendance, schedules, and payment records for your entire team.",
    "feat.sol.5.title": "Centralized reports in one click",
    "feat.sol.5.desc": "Generate centralized reports of memberships, clients, sales, and employees with one click.",
    "feat.sol.6.title": "Record every payment and sale instantly",
    "feat.sol.6.desc": "Record income and sales in real time so every service, membership, or product payment is accurately logged.",
    "feat.sol.7.title": "Measure revenue, growth, and results",
    "feat.sol.7.desc": "Instant reports and indicators to analyze your business revenue, growth, and financial stability.",
    "feat.sol.8.title": "Check membership status and access instantly",
    "feat.sol.8.desc": "Automatic access verification to immediately identify who is up to date and who has a pending payment.",
    "feat.sol.9.title": "Configure memberships for your business",
    "feat.sol.9.desc": "Configurable memberships that let you adapt payment conditions to your exact business model.",
    "feat.sol.10.title": "Clients check their information independently",
    "feat.sol.10.desc": "Client self-service portal where each user can check account status, usage, and due dates.",
    "feat.sol.11.title": "Track attendance and team schedules",
    "feat.sol.11.desc": "Employee attendance records to monitor schedules and workdays for your entire team.",
    "feat.sol.12.title": "Assign roles and access to each worker",
    "feat.sol.12.desc": "Role-based access so each worker logs in with their own user and only accesses the modules needed for their job.",
    "feat.sol.13.title": "Keep an organized history of staff payments",
    "feat.sol.13.desc": "Centralized employee payment records to keep a transparent history of personnel expenses.",
    "feat.sol.14.title": "Publish class schedules and details online",
    "feat.sol.14.desc": "Digital activity board where clients independently check schedules, prices, and class details.",
    "feat.sol.15.title": "Manage your business from the cloud",
    "feat.sol.15.desc": "Centralized cloud system to manage your business operations securely from any device.",

    "feat.membership.title": "KEY BENEFITS FOR YOUR BUSINESS",
    "feat.membership.subtitle": "One platform for your operations",
    "feat.membership.desc":
      "EntityX brings together the essential tools to control income, access, clients, employees, and activities from one place.",
    "feat.membership.list1.title": "Organized payments and memberships",
    "feat.membership.list1.desc":
      "Create plans, packages, and promotions with clear conditions to charge according to your business model.",
    "feat.membership.list2.title": "Sales with product control",
    "feat.membership.list2.desc":
      "Record products, services, and activities in one sale; stock is updated for the selected branch.",
    "feat.membership.list3.title": "Team access by role",
    "feat.membership.list3.desc":
      "Each worker logs in with their own user and sees only the modules they need to do their job.",
    "feat.membership.list4.title": "Better organized clients",
    "feat.membership.list4.desc":
      "Keep client history, memberships, due dates, usage, and important data in a centralized database.",
    "feat.membership.list5.title": "Activities visible to everyone",
    "feat.membership.list5.desc":
      "Publish schedules, prices, and details of your services or activities to reduce repeated questions at reception or by message.",
    "feat.membership.list6.title": "Reports to make better decisions",
    "feat.membership.list6.desc":
      "Check income, profits, sales, and growth with clear indicators to understand how your business is doing.",
    "feat.membership.list7.title": "Staff Attendance",
    "feat.membership.list7.desc":
      "Control arrival times, shifts, and workdays to better supervise your team's punctuality.",
    "feat.membership.list8.title": "Controlled employee payments",
    "feat.membership.list8.desc":
      "Centralize payments, advances, and salaries to keep a clear history of personnel expenses.",
    "feat.membership.list9.title": "Secure cloud information",
    "feat.membership.list9.desc":
      "Manage your operation from any device without depending on notebooks, physical files, or scattered spreadsheets.",

    "inventory.badge": "Product sales",
    "inventory.title": "Record sales and keep control of your products",
    "inventory.desc": "EntityX brings each customer's products, services, and activities together in one sale. For products, the system shows availability and updates the stock of the selected branch.",
    "inventory.highlight": "Your team sells with clear information: it knows which products are available, applies the branch price, and avoids recording more units than are in stock.",
    "inventory.benefit1.title": "One sale, multiple items",
    "inventory.benefit1.desc": "Add the products, services, and activities a customer buys in the same sales record.",
    "inventory.benefit2.title": "Availability by branch",
    "inventory.benefit2.desc": "Before selling, reception can check how many units are available at the selected branch.",
    "inventory.benefit3.title": "Prices for your operation",
    "inventory.benefit3.desc": "Use the selling price configured for each branch when your business works with different prices.",
    "inventory.benefit4.title": "Movements that support the sale",
    "inventory.benefit4.desc": "Every entry, exit, adjustment, or transfer is recorded so you understand why stock changed.",

    "workflow.badge": "How it works",
    "workflow.title": "From setup to daily control",
    "workflow.desc": "EntityX fits into your company's operations through simple steps, without relying on costly infrastructure.",
    "workflow.step1.title": "Set up your company",
    "workflow.step1.desc": "Define your company details, users, permissions, plans, and services according to the way you work.",
    "workflow.step2.title": "Record operations",
    "workflow.step2.desc": "Your team records customers, payments, sales, and activities; when applicable, it also checks validity and access.",
    "workflow.step3.title": "Decide with data",
    "workflow.step3.desc": "Company leaders review reports and indicators to supervise results and make better decisions.",

    "faq.title": "Frequently asked questions",
    "faq.desc": "Clear answers before you bring EntityX into your operations.",
    "faq.1.question": "Is EntityX only for gyms?",
    "faq.1.answer": "No. EntityX starts with gyms, academies, and clubs, but it is designed for small and medium-sized service companies with recurring customers or revenue.",
    "faq.2.question": "Do I need turnstiles or special equipment?",
    "faq.2.answer": "No. EntityX works on the web and can verify memberships or access through options enabled by the company, without requiring costly infrastructure.",
    "faq.3.question": "Can I use EntityX from different devices?",
    "faq.3.answer": "Yes. As a cloud platform, authorized users can access it from the devices they use in their work.",
    "faq.4.question": "What information can each worker see?",
    "faq.4.answer": "Each user has a role. The company defines the information and actions each person needs to carry out their responsibility.",
    "faq.5.question": "What if my company does not use memberships?",
    "faq.5.answer": "EntityX is aimed at services with recurring revenue. Its core of customers, payments, sales, staff, and reports can adapt to compatible models; memberships and access are enabled when they match the company's workflow.",
    "faq.6.question": "Can I sell products, services, and activities in one sale?",
    "faq.6.answer": "Yes. EntityX lets you record several products, services, and activities in one sale. When products are included, the system shows the selected branch's availability and updates stock when the sale is completed.",

    "cta.final.title": "Organize your company's operations with EntityX",
    "cta.final.desc": "Learn how EntityX can help you centralize information, control daily operations, and grow with reliable data.",
    "cta.final.button": "Request a demo",

    "credential.badge": "Fast and secure access",
    "credential.title": "DIGITAL CREDENTIAL WITH QR",
    "credential.desc": "Clients show their digital credential and reception verifies access instantly.",
    "credential.benefit1.title": "Faster entry",
    "credential.benefit1.desc": "Reduce queues and questions by verifying membership in seconds.",
    "credential.benefit2.title": "Reception control",
    "credential.benefit2.desc": "Verify each client's membership before entry.",
    "credential.benefit3.title": "Validated access",
    "credential.benefit3.desc": "Each scan checks membership validity and configured access rules.",
    "credential.preview.eyebrow": "Digital credential",
    "credential.preview.active": "Active membership",
    "credential.preview.client": "Client",
    "credential.preview.name": "Alex Romero",
    "credential.preview.plan": "Monthly plan",
    "credential.preview.qr_alt": "Sample QR code",
    "credential.preview.temporary": "Temporary QR for access validation",
    "credential.step1.title": "Open credential",
    "credential.step1.desc": "The client opens it from their dashboard.",
    "credential.step2.title": "Reception scans",
    "credential.step2.desc": "Reception scans the credential QR.",
    "credential.step3.title": "EntityX validates",
    "credential.step3.desc": "Validity and access rules in one step.",
    "credential.verification.title": "Two ways to verify membership",
    "credential.verification.desc": "Set the verification method that best fits your reception workflow.",
    "credential.verification.qr.title": "QR",
    "credential.verification.qr.desc": "Each client has a QR on their digital credential and reception scans it to verify membership.",
    "credential.verification.document.title": "With a document number",
    "credential.verification.document.desc": "Reception looks up the client by document number to check membership.",

    "feat.agnostic.title": "One core, adaptable to different sectors",
    "feat.agnostic.desc":
      "EntityX starts with service companies that have memberships or recurring revenue and adapts its core of customers, payments, staff, and reporting to each operation.",
    "feat.agnostic.list1":
      "Physical Health Centers: Gyms, CrossFit, Yoga, Pilates, and Martial Arts.",
    "feat.agnostic.list2":
      "Educational & Art Centers: Dance, Music, and Language Academies.",
    "feat.agnostic.list3":
      "Shared Spaces: Coworking and Recreational/Social Clubs.",

    "feat.access.title": "CLIENT SELF-MANAGEMENT PORTAL",
    "feat.access.desc":
      "Your client receives their credentials to access a private dashboard where they can autonomously:",
    "feat.access.list1":
      "Check the validity and details of their current plan.",
    "feat.access.list2":
      "View the activity schedule, available classes, and important business announcements.",
    "feat.access.card_desc":
      "Clients check status, payments, usage, due dates, schedules, and announcements from their own panel.",

    "feat.portal.title": "PERSONAL CLIENT PORTAL",
    "feat.portal.desc":
      "Empower your clients to manage their own information, reducing administrative inquiries.",

    "feat.extras.title": "EVERYTHING BACKED UP IN THE CLOUD",
    "feat.products.title": "Secure Inventory",
    "feat.products.desc":
      "Audit every item sold. Never lose money again due to poor physical stock counting.",
    "feat.security.title": "Cross-Platform",
    "feat.security.desc":
      "Access from any device (PC, tablet, or smartphone) with guaranteed speed and security.",
    "feat.staff.title": "Financial Reports",
    "feat.staff.desc":
      "Make decisions based on real data about your membership income and additional sales (POS).",
    "feat.partners.title": "Partner Program",
    "feat.partners.desc":
      "Become an EntityX commercial agent and generate income by recommending the system.",

    // Partners Page
    "partners.hero.title":
      "Partner Program: Become a Commercial Advisor",
    "partners.hero.desc":
      "Generate recurring revenue by helping businesses eliminate notebook chaos through our system.",
    "partners.list1.title": "Comprehensive System Training",
    "partners.list1.desc":
      "Master the modules (Memberships, POS, HR) to demonstrate value to your prospects.",
    "partners.list2.title": "Exclusive Dashboard",
    "partners.list2.desc":
      "Panel to manage your activity, register prospects, and track them.",
    "partners.list3.title": "Transparent Commissions",
    "partners.list3.desc":
      "View your sales and recurring earnings with total clarity and precision.",
    "partners.list4.title": "Portfolio Control",
    "partners.list4.desc":
      "Ensure long-term client loyalty by monitoring their status.",
    "partners.list5.title": "Real Impact",
    "partners.list5.desc":
      "Sell a solution that truly helps businesses reduce overdue payments and administrative disorder.",
    "partners.badge": "EntityX Partners",
    "partners.cta.title": "Ready to monetize your network?",
    "partners.cta.button": "Join the Program",
    "common.active": "Active",
    "common.inactive": "Expired",
    "common.contact": "Contact",

    // Business Types
    "biz.gym": "Gyms & Crossfit",
    "biz.gym.flow": "Manage plans, renewals, and due dates; reception verifies access and records daily sales in the same workflow.",
    "biz.yoga": "Yoga & Pilates",
    "biz.yoga.flow": "Set up packages or monthly plans, publish activity schedules, and keep payments and attendance organized by studio.",
    "biz.deportes": "Sports Schools",
    "biz.deportes.flow": "Centralize enrollments, fees, and sports activities, giving staff a clear view of attendance and payments.",
    "biz.martial": "Martial Arts",
    "biz.martial.flow": "Control monthly payments and validity, verify each customer's entry, and keep an organized activity history.",
    "biz.danza": "Dance & Music",
    "biz.danza.flow": "Bring together registrations, payment plans, schedules, and activities so coordination does not depend on scattered messages or spreadsheets.",
    "biz.education": "Educational Institutes",
    "biz.education.flow": "Organize students, fees, learning activities, and attendance, making administrative follow-up easier each term.",
    "biz.spa": "Spas & Aesthetics",
    "biz.spa.flow": "Organize customers, service packages, and recurring payments, with a clear record of sales and staff service.",
    "biz.coworking": "Coworking & Clubs",
    "biz.coworking.flow": "Its core of customers, plans, payments, and roles provides a base for adapting operations to shared spaces and benefits.",

    // Pricing Page
    "pricing.title": "Investment: Plans That Grow With You",
    "pricing.desc":
      "We don't limit modules. You get the full system (memberships, sales, HR, and client portal) on all plans. You only pay based on the number of active clients.",
    "pricing.note":
      "Key Note: The limit applies only to ACTIVE CLIENTS. Your historical database is unlimited; we charge for those with a valid plan today.",
    "pricing.subtitle": "Our Plans (BOB)",
    "pricing.table.plan": "Plan",
    "pricing.table.capacity": "Active Client Capacity",
    "pricing.table.monthly": "Monthly",
    "pricing.table.yearly": "Yearly (Save 2 months)",
    "pricing.p0.name": "Free Plan",
    "pricing.p0.cap": "Up to 15 clients",
    "pricing.p1.name": "Starter Plan",
    "pricing.p1.cap": "Up to 50 clients",
    "pricing.p2.name": "Growth Plan",
    "pricing.p2.cap": "Up to 125 clients",
    "pricing.p3.name": "Consolidated Plan",
    "pricing.p3.cap": "Up to 250 clients",
    "pricing.p4.name": "Corporate Plan",
    "pricing.p4.cap": "Up to 500 clients",
    "pricing.p5.name": "Industrial Scale Plan",
    "pricing.p5.cap": "Up to 1000 clients",
    "pricing.clients_up_to": "Up to",
    "pricing.clients_label": "clients",
    "pricing.badge.popular": "Popular",
    "pricing.cta.choose": "Get the System",
    "pricing.includes.title": "All plans include:",
    "pricing.inc1.title": "Payments, memberships, and custom plans for your business",
    "pricing.inc1.desc": "",
    "pricing.inc2.title": "Income, sales, and payments recorded in real time",
    "pricing.inc2.desc": "",
    "pricing.inc3.title": "Portal for clients to check due dates, usage, and account status",
    "pricing.inc3.desc": "",
    "pricing.inc4.title": "Role-based access, attendance, and human resources control",
    "pricing.inc4.desc": "",
    "pricing.inc5.title": "Digital activity board with schedules, prices, and available classes",
    "pricing.inc5.desc": "",
    "pricing.inc6.title": "Reports and indicators to understand income, growth, and stability",
    "pricing.inc6.desc": "",
    "pricing.annual.title": "Why choose Annual payment?",
    "pricing.annual.desc":
      "We gift you 2 months of service. Secure the operational control of your business for a whole year at the best cost.",
    "pricing.flex.title": "Scaling Flexibility",
    "pricing.flex.desc":
      "As your client community grows, the system scales with you. You can level up without interruptions.",
    "pricing.transparency.title": "Total Transparency",
    "pricing.transparency.desc":
      "Audit every payment made to the platform to guarantee the transparency of our B2B services.",

    "footer.copyright":
      "© 2026 EntityX - Aaron Fabricio Santa Cruz Valdez (AaronCode). All rights reserved.",
  },
} as const;
