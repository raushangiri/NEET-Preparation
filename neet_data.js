// ============================================================================
// NEET Preparation Portal - Data File
// Contains course material and question bank for Physics, Chemistry, Biology
// ============================================================================
const NEET_DATA = {
  version: "1.0.0",
  generated: "2026-10-27",
  subjects: {
    physics: { name: "Physics", icon: "⚛️", color: "#1a5f7a" },
    chemistry: { name: "Chemistry", icon: "🧪", color: "#7b2cbf" },
    biology: { name: "Biology", icon: "🧬", color: "#2e8b57" }
  },
  courseMaterial: {},
  questionBank: {}
};

// ============================================================================
// COURSE MATERIAL - PHYSICS
// ============================================================================
NEET_DATA.courseMaterial.physics = [
  {
    id: "p1",
    title: "Physical World and Measurement",
    description: "Scope of physics, fundamental forces, units and measurements, errors, dimensional analysis.",
    content: `
<h2>1. Physical World and Measurement</h2>
<p>Physics is the study of matter, energy, and their interactions. It seeks to understand the fundamental laws governing the universe.</p>

<h3>1.1 Scope and Excitement of Physics</h3>
<p>Physics deals with natural phenomena from subatomic particles to galaxies. Macroscopic domain includes laboratory, terrestrial, and astronomical phenomena. Microscopic domain includes atomic, molecular, and nuclear phenomena.</p>

<h3>1.2 Fundamental Forces in Nature</h3>
<ul>
<li><strong>Gravitational force:</strong> Weakest, always attractive, infinite range.</li>
<li><strong>Electromagnetic force:</strong> Can be attractive or repulsive, infinite range.</li>
<li><strong>Strong nuclear force:</strong> Strongest, very short range (~1 fm), binds nucleons.</li>
<li><strong>Weak nuclear force:</strong> Responsible for beta decay, short range.</li>
</ul>
<p>Relative strengths: Fg : Fe : Fs : Fw ≈ 1 : 10³⁹ : 10³⁸ : 10²⁵</p>

<h3>1.3 Units and Measurement</h3>
<p>A physical quantity is measured in terms of a unit. Fundamental quantities: length, mass, time, electric current, thermodynamic temperature, amount of substance, luminous intensity.</p>
<div class="formula-box">
SI Units: metre (m), kilogram (kg), second (s), ampere (A), kelvin (K), mole (mol), candela (cd)
</div>

<h3>1.4 Errors in Measurement</h3>
<ul>
<li><strong>Absolute error:</strong> Δa = |a_mean - a_observed|</li>
<li><strong>Relative error:</strong> Δa / a_mean</li>
<li><strong>Percentage error:</strong> (Δa / a_mean) × 100%</li>
</ul>
<div class="highlight-box">
For product/quotient: relative errors add. For power z = x^m y^n: Δz/z = m(Δx/x) + n(Δy/y).
</div>

<h3>1.5 Dimensional Analysis</h3>
<p>Dimensions of a physical quantity are powers to which fundamental units are raised. Used to check homogeneity of equations and derive relations.</p>
<p>Example: [Force] = [MLT⁻²], [Energy] = [ML²T⁻²], [Power] = [ML²T⁻³]</p>
<p>Limitations: Cannot determine dimensionless constants, cannot derive relations with trigonometric/exponential functions.</p>
`,
    topics: [
      { name: "Units and Dimensions", questions: 40 },
      { name: "Errors and Measurement", questions: 30 },
      { name: "Significant Figures", questions: 25 }
    ]
  },
  {
    id: "p2",
    title: "Kinematics",
    description: "Motion in a straight line, motion in a plane, projectile motion, relative velocity.",
    content: `
<h2>2. Kinematics</h2>
<p>Kinematics is the study of motion without considering the forces that cause it.</p>

<h3>2.1 Motion in a Straight Line</h3>
<ul>
<li><strong>Distance:</strong> Total path length (scalar).</li>
<li><strong>Displacement:</strong> Shortest distance between initial and final position (vector).</li>
<li><strong>Speed:</strong> Distance/time (scalar).</li>
<li><strong>Velocity:</strong> Displacement/time (vector).</li>
<li><strong>Acceleration:</strong> Rate of change of velocity.</li>
</ul>
<div class="formula-box">
Equations of motion (uniform acceleration):<br>
v = u + at<br>
s = ut + ½at²<br>
v² = u² + 2as<br>
s_nth = u + a(2n-1)/2
</div>

<h3>2.2 Motion in a Plane</h3>
<p>Position vector r = xi + yj. Velocity v = dr/dt. Acceleration a = dv/dt.</p>
<p>Projectile motion: A particle projected at angle θ with velocity u.</p>
<div class="formula-box">
Range R = u² sin(2θ) / g<br>
Maximum height H = u² sin²θ / 2g<br>
Time of flight T = 2u sinθ / g<br>
Equation of trajectory: y = x tanθ - gx²/(2u²cos²θ)
</div>

<h3>2.3 Relative Velocity</h3>
<p>Velocity of A with respect to B: V_AB = V_A - V_B</p>

<h3>2.4 Circular Motion</h3>
<p>Angular velocity ω = v/r. Centripetal acceleration a_c = v²/r = ω²r, directed towards center.</p>
`,
    topics: [
      { name: "Motion in Straight Line", questions: 50 },
      { name: "Motion in a Plane", questions: 45 },
      { name: "Projectile Motion", questions: 40 },
      { name: "Relative Velocity", questions: 30 },
      { name: "Circular Motion", questions: 35 }
    ]
  },
  {
    id: "p3",
    title: "Laws of Motion",
    description: "Newton's laws, friction, circular motion dynamics, pseudo forces.",
    content: `
<h2>3. Laws of Motion</h2>

<h3>3.1 Newton's Laws of Motion</h3>
<ul>
<li><strong>First law (Inertia):</strong> A body remains at rest or in uniform motion unless acted upon by an external force.</li>
<li><strong>Second law:</strong> F = ma (rate of change of momentum).</li>
<li><strong>Third law:</strong> For every action there is an equal and opposite reaction.</li>
</ul>

<h3>3.2 Momentum and Impulse</h3>
<p>Momentum p = mv. Impulse J = F·Δt = Δp (change in momentum).</p>
<div class="formula-box">
Impulse-Momentum Theorem: ∫F dt = p_final - p_initial
</div>

<h3>3.3 Friction</h3>
<ul>
<li><strong>Static friction:</strong> f_s ≤ μ_s N (self-adjusting, maximum at limiting)</li>
<li><strong>Kinetic friction:</strong> f_k = μ_k N</li>
<li><strong>Rolling friction:</strong> Much smaller than sliding friction</li>
</ul>
<div class="highlight-box">
Angle of repose: tan θ = μ_s. Angle of friction: tan λ = μ.
</div>

<h3>3.4 Circular Motion Dynamics</h3>
<p>Centripetal force F_c = mv²/r. For a car on banked road: tan θ = v²/rg (frictionless).</p>

<h3>3.5 Pseudo Force</h3>
<p>In non-inertial frames, pseudo force F_p = -ma_frame acts opposite to frame acceleration.</p>
`,
    topics: [
      { name: "Newton's Laws", questions: 45 },
      { name: "Friction", questions: 40 },
      { name: "Circular Motion Dynamics", questions: 35 },
      { name: "Pseudo Force", questions: 25 },
      { name: "Connected Bodies", questions: 35 }
    ]
  }
];

// ============================================================================
// COURSE MATERIAL - CHEMISTRY
// ============================================================================
NEET_DATA.courseMaterial.chemistry = [
  {
    id: "c1",
    title: "Some Basic Concepts of Chemistry",
    description: "Matter, atomic and molecular masses, mole concept, stoichiometry, concentration terms.",
    content: `
<h2>1. Some Basic Concepts of Chemistry</h2>

<h3>1.1 Nature of Matter</h3>
<p>Matter is anything that has mass and occupies space. It exists in three states: solid, liquid, gas. Classification: pure substances (elements, compounds) and mixtures (homogeneous, heterogeneous).</p>

<h3>1.2 Atomic and Molecular Masses</h3>
<ul>
<li><strong>Atomic mass:</strong> Average mass of an atom relative to 1/12th mass of carbon-12 atom.</li>
<li><strong>Molecular mass:</strong> Sum of atomic masses in a molecule.</li>
<li><strong>Formula mass:</strong> For ionic compounds.</li>
</ul>

<h3>1.3 Mole Concept</h3>
<p>One mole contains Avogadro's number (6.022 × 10²³) of particles.</p>
<div class="formula-box">
Number of moles = Given mass / Molar mass<br>
Number of particles = Moles × 6.022 × 10²³<br>
Molar volume at STP = 22.4 L
</div>

<h3>1.4 Percentage Composition and Empirical Formula</h3>
<p>% of element = (mass of element / total mass) × 100</p>
<p>Empirical formula = simplest whole number ratio. Molecular formula = n × empirical formula.</p>
<div class="formula-box">
n = Molar mass / Empirical formula mass
</div>

<h3>1.5 Stoichiometry</h3>
<p>Study of quantitative relationships in chemical reactions. Limiting reagent determines amount of product formed.</p>

<h3>1.6 Concentration Terms</h3>
<ul>
<li>Mass % = (mass of solute / mass of solution) × 100</li>
<li>Molarity (M) = moles of solute / volume of solution (L)</li>
<li>Molality (m) = moles of solute / mass of solvent (kg)</li>
<li>Mole fraction x = moles of component / total moles</li>
<li>Normality (N) = Molarity × n-factor</li>
</ul>
`,
    topics: [
      { name: "Mole Concept", questions: 45 },
      { name: "Stoichiometry", questions: 40 },
      { name: "Concentration Terms", questions: 35 },
      { name: "Empirical & Molecular Formula", questions: 30 }
    ]
  },
  {
    id: "c2",
    title: "Structure of Atom",
    description: "Subatomic particles, atomic models, quantum numbers, electronic configuration.",
    content: `
<h2>2. Structure of Atom</h2>

<h3>2.1 Subatomic Particles</h3>
<ul>
<li>Electron: charge -1.602 × 10⁻¹⁹ C, mass 9.1 × 10⁻³¹ kg (discovered by J.J. Thomson)</li>
<li>Proton: charge +1.602 × 10⁻¹⁹ C, mass 1.672 × 10⁻²⁷ kg (discovered by Goldstein)</li>
<li>Neutron: neutral, mass 1.675 × 10⁻²⁷ kg (discovered by Chadwick)</li>
</ul>

<h3>2.2 Atomic Models</h3>
<ul>
<li><strong>Thomson's model:</strong> Plum pudding model.</li>
<li><strong>Rutherford's model:</strong> Nuclear model, alpha scattering experiment. Drawback: could not explain stability of atom or line spectra.</li>
<li><strong>Bohr's model:</strong> Electrons revolve in fixed orbits. Energy quantized. Angular momentum mvr = nh/2π.</li>
</ul>

<h3>2.3 Quantum Mechanical Model</h3>
<ul>
<li><strong>Principal quantum number (n):</strong> Shell, size and energy.</li>
<li><strong>Azimuthal quantum number (l):</strong> 0 to n-1, subshell shape (s=0, p=1, d=2, f=3).</li>
<li><strong>Magnetic quantum number (m_l):</strong> -l to +l, orientation of orbital.</li>
<li><strong>Spin quantum number (m_s):</strong> +1/2 or -1/2.</li>
</ul>

<h3>2.4 Electronic Configuration</h3>
<p>Aufbau principle, Pauli exclusion principle, Hund's rule of maximum multiplicity.</p>
<div class="formula-box">
(n+l) rule: Lower n+l fills first; if equal, lower n fills first.
</div>

<h3>2.5 Stability of Half-filled and Fully-filled Orbitals</h3>
<p>Examples: Cr = [Ar] 3d⁵4s¹, Cu = [Ar] 3d¹⁰4s¹ (exceptional configurations).</p>
`,
    topics: [
      { name: "Subatomic Particles", questions: 30 },
      { name: "Atomic Models", questions: 35 },
      { name: "Quantum Numbers", questions: 40 },
      { name: "Electronic Configuration", questions: 45 },
      { name: "Atomic Spectra", questions: 25 }
    ]
  },
  {
    id: "c3",
    title: "Chemical Bonding",
    description: "Ionic, covalent, metallic bonding, VSEPR, hybridization, molecular orbital theory.",
    content: `
<h2>3. Chemical Bonding and Molecular Structure</h2>

<h3>3.1 Types of Bonds</h3>
<ul>
<li><strong>Ionic bond:</strong> Electrostatic attraction between oppositely charged ions. Formed by electron transfer.</li>
<li><strong>Covalent bond:</strong> Sharing of electron pairs. Single, double, triple bonds.</li>
<li><strong>Coordinate (dative) bond:</strong> Both electrons donated by one atom.</li>
<li><strong>Metallic bond:</strong> Attraction between metal ions and sea of delocalized electrons.</li>
</ul>

<h3>3.2 Fajan's Rules</h3>
<p>Polarization of anion by cation. Higher charge and smaller size of cation increases covalent character.</p>

<h3>3.3 VSEPR Theory</h3>
<p>Valence Shell Electron Pair Repulsion theory predicts molecular geometry based on electron pairs around central atom.</p>
<table style="width:100%; border-collapse:collapse; margin:1rem 0;">
<tr style="border-bottom:1px solid var(--border);"><th style="text-align:left;padding:0.5rem;">Steric Number</th><th style="text-align:left;padding:0.5rem;">Geometry</th><th style="text-align:left;padding:0.5rem;">Example</th></tr>
<tr style="border-bottom:1px solid var(--border);"><td style="padding:0.5rem;">2</td><td style="padding:0.5rem;">Linear</td><td style="padding:0.5rem;">BeCl₂</td></tr>
<tr style="border-bottom:1px solid var(--border);"><td style="padding:0.5rem;">3</td><td style="padding:0.5rem;">Trigonal planar</td><td style="padding:0.5rem;">BF₃</td></tr>
<tr style="border-bottom:1px solid var(--border);"><td style="padding:0.5rem;">4</td><td style="padding:0.5rem;">Tetrahedral</td><td style="padding:0.5rem;">CH₄</td></tr>
<tr style="border-bottom:1px solid var(--border);"><td style="padding:0.5rem;">5</td><td style="padding:0.5rem;">Trigonal bipyramidal</td><td style="padding:0.5rem;">PCl₅</td></tr>
<tr style="border-bottom:1px solid var(--border);"><td style="padding:0.5rem;">6</td><td style="padding:0.5rem;">Octahedral</td><td style="padding:0.5rem;">SF₆</td></tr>
</table>

<h3>3.4 Hybridization</h3>
<div class="formula-box">
sp: linear, sp²: trigonal planar, sp³: tetrahedral, sp³d: trigonal bipyramidal, sp³d²: octahedral
</div>

<h3>3.5 Molecular Orbital Theory</h3>
<p>Bond order = (N_b - N_a) / 2. Higher bond order = greater stability, shorter bond length.</p>
<div class="highlight-box">
Paramagnetic: unpaired electrons present. Diamagnetic: all electrons paired.
</div>

<h3>3.6 Hydrogen Bonding</h3>
<p>Intermolecular (between molecules) and intramolecular (within molecule). Affects boiling point, solubility.</p>
`,
    topics: [
      { name: "Ionic & Covalent Bonding", questions: 40 },
      { name: "VSEPR Theory", questions: 35 },
      { name: "Hybridization", questions: 40 },
      { name: "Molecular Orbital Theory", questions: 35 },
      { name: "Hydrogen Bonding", questions: 25 }
    ]
  }
];

// ============================================================================
// COURSE MATERIAL - BIOLOGY
// ============================================================================
NEET_DATA.courseMaterial.biology = [
  {
    id: "b1",
    title: "Diversity in Living World",
    description: "Classification, taxonomic categories, five kingdom classification, binomial nomenclature.",
    content: `
<h2>1. Diversity in Living World</h2>

<h3>1.1 What is Living?</h3>
<p>Characteristics: growth, reproduction, metabolism, cellular organization, consciousness, ability to sense and respond.</p>

<h3>1.2 Taxonomy and Classification</h3>
<ul>
<li><strong>Taxonomy:</strong> Science of identification, nomenclature, and classification.</li>
<li><strong>Taxonomic categories:</strong> Kingdom, Phylum/Division, Class, Order, Family, Genus, Species.</li>
</ul>
<div class="formula-box>
Species is the basic unit of classification. A group of individuals with similar morphological characters that can interbreed and produce fertile offspring.
</div>

<h3>1.3 Binomial Nomenclature</h3>
<p>Given by Carolus Linnaeus. Two names: generic name + specific epithet. Example: Homo sapiens, Mangifera indica.</p>

<h3>1.4 Five Kingdom Classification</h3>
<p>Given by R.H. Whittaker (1969). Based on cell structure, body organization, mode of nutrition, reproduction, phylogenetic relationships.</p>
<table style="width:100%; border-collapse:collapse; margin:1rem 0;">
<tr style="border-bottom:1px solid var(--border);"><th style="text-align:left;padding:0.5rem;">Kingdom</th><th style="text-align:left;padding:0.5rem;">Cell Type</th><th style="text-align:left;padding:0.5rem;">Nutrition</th><th style="text-align:left;padding:0.5rem;">Examples</th></tr>
<tr style="border-bottom:1px solid var(--border);"><td style="padding:0.5rem;">Monera</td><td style="padding:0.5rem;">Prokaryotic</td><td style="padding:0.5rem;">Autotrophic/Heterotrophic</td><td style="padding:0.5rem;">Bacteria, Blue-green algae</td></tr>
<tr style="border-bottom:1px solid var(--border);"><td style="padding:0.5rem;">Protista</td><td style="padding:0.5rem;">Eukaryotic, unicellular</td><td style="padding:0.5rem;">Autotrophic/Heterotrophic</td><td style="padding:0.5rem;">Amoeba, Paramecium, Euglena</td></tr>
<tr style="border-bottom:1px solid var(--border);"><td style="padding:0.5rem;">Fungi</td><td style="padding:0.5rem;">Eukaryotic</td><td style="padding:0.5rem;">Heterotrophic (saprophytic)</td><td style="padding:0.5rem;">Mushroom, Rhizopus, Aspergillus</td></tr>
<tr style="border-bottom:1px solid var(--border);"><td style="padding:0.5rem;">Plantae</td><td style="padding:0.5rem;">Eukaryotic, multicellular</td><td style="padding:0.5rem;">Autotrophic (photosynthetic)</td><td style="padding:0.5rem;">Mosses, ferns, flowering plants</td></tr>
<tr style="border-bottom:1px solid var(--border);"><td style="padding:0.5rem;">Animalia</td><td style="padding:0.5rem;">Eukaryotic, multicellular</td><td style="padding:0.5rem;">Heterotrophic (ingestive)</td><td style="padding:0.5rem;">Sponges to mammals</td></tr>
</table>

<h3>1.5 Viruses, Viroids, Lichens</h3>
<p>Viruses: Acellular, genetic material (DNA/RNA) enclosed in protein coat. Viroids: free RNA without protein coat. Lichens: symbiotic association of algae and fungi.</p>
`,
    topics: [
      { name: "Taxonomic Categories", questions: 30 },
      { name: "Five Kingdom Classification", questions: 35 },
      { name: "Binomial Nomenclature", questions: 25 },
      { name: "Kingdom Monera & Protista", questions: 30 },
      { name: "Kingdom Fungi & Plantae", questions: 35 },
      { name: "Kingdom Animalia", questions: 40 }
    ]
  },
  {
    id: "b2",
    title: "Structural Organisation in Animals and Plants",
    description: "Tissues, morphology of flowering plants, anatomy, cockroach structure.",
    content: `
<h2>2. Structural Organisation in Animals and Plants</h2>

<h3>2.1 Plant Tissues</h3>
<ul>
<li><strong>Meristematic tissue:</strong> Actively dividing cells (apical, lateral, intercalary meristem).</li>
<li><strong>Permanent tissue:</strong> Simple (parenchyma, collenchyma, sclerenchyma) and complex (xylem, phloem).</li>
</ul>

<h3>2.2 Morphology of Flowering Plants</h3>
<ul>
<li><strong>Root:</strong> Tap root (dicots), fibrous root (monocots). Regions: root cap, meristematic, elongation, maturation.</li>
<li><strong>Stem:</strong> Nodes and internodes. Modifications: underground (potato, ginger), stem tendrils, thorns.</li>
<li><strong>Leaf:</strong> Leaf base, petiole, lamina. Venation: reticulate (dicots), parallel (monocots).</li>
<li><strong>Flower:</strong> Pedicellate/sessile. Parts: calyx, corolla, androecium, gynoecium.</li>
</ul>
<div class="formula-box>
Floral formula symbols: ⚥ bisexual, ♂ male, ♀ female, ⚲ actinomorphic, % zygomorphic, K calyx, C corolla, A androecium, G gynoecium.
</div>

<h3>2.3 Animal Tissues</h3>
<ul>
<li><strong>Epithelial tissue:</strong> Covering and lining. Simple squamous, cuboidal, columnar; compound epithelium.</li>
<li><strong>Connective tissue:</strong> Loose, dense, specialized (bone, cartilage, blood, adipose).</li>
<li><strong>Muscular tissue:</strong> Skeletal (striated), smooth (unstriated), cardiac.</li>
<li><strong>Neural tissue:</strong> Neurons and neuroglia.</li>
</ul>

<h3>2.4 Cockroach (Periplaneta americana)</h3>
<p>Body divided into head, thorax, abdomen. Exoskeleton made of chitin. Open circulatory system. Respiration through tracheae and spiracles. Nervous system: segmental ganglia.</p>
`,
    topics: [
      { name: "Plant Tissues", questions: 30 },
      { name: "Morphology of Plants", questions: 35 },
      { name: "Animal Tissues", questions: 30 },
      { name: "Anatomy of Flowering Plants", questions: 35 },
      { name: "Cockroach Morphology", questions: 30 },
      { name: "Cockroach Systems", questions: 30 }
    ]
  }
];

// ============================================================================
// QUESTION BANK - PHYSICS
// Format: { id, subject, topic, question, options[4], correct (0-3), explanation, difficulty }
// ============================================================================
NEET_DATA.questionBank.physics = [
  {
    id: "pq1",
    subject: "physics",
    topic: "Units and Dimensions",
    question: "The dimensional formula of Planck's constant is:",
    options: ["[ML²T⁻¹]", "[MLT⁻¹]", "[ML²T⁻²]", "[MLT⁻²]"],
    correct: 0,
    explanation: "Planck's constant h = E/ν. Energy has dimensions [ML²T⁻²] and frequency has [T⁻¹], so h = [ML²T⁻²]/[T⁻¹] = [ML²T⁻¹].",
    difficulty: "easy"
  },
  {
    id: "pq2",
    subject: "physics",
    topic: "Units and Dimensions",
    question: "Which of the following is a dimensionless quantity?",
    options: ["Strain", "Stress", "Force", "Pressure"],
    correct: 0,
    explanation: "Strain = change in dimension / original dimension, ratio of two lengths, hence dimensionless.",
    difficulty: "easy"
  },
  {
    id: "pq3",
    subject: "physics",
    topic: "Units and Dimensions",
    question: "The dimensions of stress are same as those of:",
    options: ["Pressure", "Force", "Energy", "Power"],
    correct: 0,
    explanation: "Stress = Force/Area = [MLT⁻²]/[L²] = [ML⁻¹T⁻²]. Pressure also = Force/Area = [ML⁻¹T⁻²].",
    difficulty: "easy"
  },
  {
    id: "pq4",
    subject: "physics",
    topic: "Units and Dimensions",
    question: "In the equation X = 3YZ², X and Z have dimensions of capacitance and magnetic induction respectively. The dimensions of Y in MKS system are:",
    options: ["[M⁻³L⁻²T⁸A⁴]", "[M⁻³L⁻²T⁸A⁴]", "[M⁻³L⁻²T⁸A⁴]", "[M⁻³L⁻²T⁸A⁴]"],
    correct: 0,
    explanation: "This requires dimensional analysis. Y = X/Z². Capacitance [M⁻¹L⁻²T⁴A²], Magnetic induction B [MT⁻²A⁻¹]. Y = [M⁻¹L⁻²T⁴A²]/[M²T⁻⁴A⁻²] = [M⁻³L⁻²T⁸A⁴].",
    difficulty: "hard"
  },
  {
    id: "pq5",
    subject: "physics",
    topic: "Units and Dimensions",
    question: "The dimensions of (1/2)ε₀E² are same as:",
    options: ["Energy density", "Force", "Pressure", "Both A and C"],
    correct: 3,
    explanation: "(1/2)ε₀E² is energy density = energy/volume = [ML²T⁻²]/[L³] = [ML⁻¹T⁻²]. Pressure also has same dimensions.",
    difficulty: "medium"
  },
  {
    id: "pq6",
    subject: "physics",
    topic: "Errors and Measurement",
    question: "The least count of a stopwatch is 0.2 s. The time of 100 oscillations is measured as 90 s. The percentage error in time period is:",
    options: ["0.2%", "0.22%", "0.3%", "0.4%"],
    correct: 1,
    explanation: "Time period T = 90/100 = 0.9 s. Error in T = 0.2/100 = 0.002 s. Percentage error = (0.002/0.9) × 100 = 0.22%.",
    difficulty: "medium"
  },
  {
    id: "pq7",
    subject: "physics",
    topic: "Errors and Measurement",
    question: "If the percentage errors in measuring a and b are 2% and 3% respectively, then maximum percentage error in a²/b³ is:",
    options: ["11%", "13%", "10%", "12%"],
    correct: 1,
    explanation: "For a²/b³: % error = 2(2%) + 3(3%) = 4% + 9% = 13%.",
    difficulty: "medium"
  },
  {
    id: "pq8",
    subject: "physics",
    topic: "Errors and Measurement",
    question: "The length and breadth of a rectangle are measured as (4.5 ± 0.1) cm and (3.0 ± 0.1) cm. The percentage error in area is:",
    options: ["5.56%", "5.0%", "4.4%", "3.3%"],
    correct: 0,
    explanation: "Relative error in area = Δl/l + Δb/b = 0.1/4.5 + 0.1/3.0 = 0.0556 = 5.56%.",
    difficulty: "medium"
  },
  {
    id: "pq9",
    subject: "physics",
    topic: "Motion in Straight Line",
    question: "A car travels at 40 km/h for 2 hours and then at 60 km/h for 3 hours. The average speed is:",
    options: ["48 km/h", "52 km/h", "50 km/h", "45 km/h"],
    correct: 2,
    explanation: "Total distance = 40×2 + 60×3 = 80 + 180 = 260 km. Total time = 5 h. Average speed = 260/5 = 52 km/h.",
    difficulty: "easy"
  },
  {
    id: "pq10",
    subject: "physics",
    topic: "Motion in Straight Line",
    question: "The displacement-time graph of a particle is a straight line inclined to time axis. The particle moves with:",
    options: ["Uniform velocity", "Uniform acceleration", "Variable velocity", "Zero velocity"],
    correct: 0,
    explanation: "In x-t graph, slope = velocity. Straight line = constant slope = uniform velocity.",
    difficulty: "easy"
  },
  {
    id: "pq11",
    subject: "physics",
    topic: "Motion in Straight Line",
    question: "A body starts from rest and moves with uniform acceleration. The ratio of distances covered in 1st, 2nd, and 3rd seconds is:",
    options: ["1:2:3", "1:3:5", "1:4:9", "1:5:9"],
    correct: 1,
    explanation: "Distance in nth second = u + a(2n-1)/2. With u=0: ratio = 1:3:5.",
    difficulty: "medium"
  },
  {
    id: "pq12",
    subject: "physics",
    topic: "Motion in Straight Line",
    question: "Two trains A and B, each of length 100 m, are moving in opposite directions at 54 km/h and 36 km/h. Time taken to cross each other:",
    options: ["8 s", "10 s", "12 s", "15 s"],
    correct: 0,
    explanation: "Relative speed = 54+36 = 90 km/h = 25 m/s. Total distance = 100+100 = 200 m. Time = 200/25 = 8 s.",
    difficulty: "medium"
  },
  {
    id: "pq13",
    subject: "physics",
    topic: "Projectile Motion",
    question: "For maximum horizontal range, the projectile should be launched at an angle of:",
    options: ["30°", "45°", "60°", "90°"],
    correct: 1,
    explanation: "R = u²sin(2θ)/g. Maximum when sin(2θ) = 1, i.e., 2θ = 90°, θ = 45°.",
    difficulty: "easy"
  },
  {
    id: "pq14",
    subject: "physics",
    topic: "Projectile Motion",
    question: "A projectile is fired at angle θ. At the highest point of its trajectory, its velocity is:",
    options: ["Zero", "u cos θ", "u sin θ", "u"],
    correct: 1,
    explanation: "At highest point, vertical component is zero, only horizontal component u cos θ remains.",
    difficulty: "easy"
  },
  {
    id: "pq15",
    subject: "physics",
    topic: "Projectile Motion",
    question: "The horizontal range and maximum height of a projectile are equal when angle of projection is:",
    options: ["tan⁻¹(1/4)", "tan⁻¹(4)", "45°", "30°"],
    correct: 1,
    explanation: "R = u²sin2θ/g, H = u²sin²θ/2g. R = H → 2sinθcosθ = sin²θ/2 → tanθ = 4 → θ = tan⁻¹(4).",
    difficulty: "hard"
  },
  {
    id: "pq16",
    subject: "physics",
    topic: "Newton's Laws",
    question: "Which law gives the quantitative definition of force?",
    options: ["First law", "Second law", "Third law", "Law of gravitation"],
    correct: 1,
    explanation: "Newton's second law F = ma gives quantitative definition of force.",
    difficulty: "easy"
  },
  {
    id: "pq17",
    subject: "physics",
    topic: "Newton's Laws",
    question: "A block of mass 2 kg is placed on a rough horizontal surface. μ_s = 0.4, μ_k = 0.3. A horizontal force of 5 N is applied. The friction force is:",
    options: ["5 N", "6 N", "7.84 N", "5.88 N"],
    correct: 0,
    explanation: "Limiting friction = μ_s N = 0.4 × 2 × 9.8 = 7.84 N. Applied force 5 N < 7.84 N, so static friction equals applied force = 5 N.",
    difficulty: "medium"
  },
  {
    id: "pq18",
    subject: "physics",
    topic: "Newton's Laws",
    question: "A lift is moving down with acceleration a. A man inside drops a coin. The acceleration of coin as observed by man is:",
    options: ["g", "g-a", "g+a", "zero"],
    correct: 1,
    explanation: "Relative to lift (non-inertial frame moving down with a), effective acceleration = g - a.",
    difficulty: "medium"
  },
  {
    id: "pq19",
    subject: "physics",
    topic: "Circular Motion",
    question: "A car moves at 36 km/h on a circular road of radius 50 m. The centripetal acceleration is:",
    options: ["2 m/s²", "1 m/s²", "0.5 m/s²", "4 m/s²"],
    correct: 0,
    explanation: "v = 36 km/h = 10 m/s. a_c = v²/r = 100/50 = 2 m/s².",
    difficulty: "easy"
  },
  {
    id: "pq20",
    subject: "physics",
    topic: "Circular Motion",
    question: "For a car on a banked road without friction, the safe speed is:",
    options: ["√(rg tan θ)", "√(rg cot θ)", "√(rg sin θ)", "√(rg cos θ)"],
    correct: 0,
    explanation: "tan θ = v²/rg → v = √(rg tan θ).",
    difficulty: "medium"
  },
  {
    id: "pq21",
    subject: "physics",
    topic: "Work Energy Power",
    question: "A force F = (3i + 4j) N acts on a particle which moves from origin to point (3, 4) m. Work done is:",
    options: ["25 J", "7 J", "12 J", "5 J"],
    correct: 0,
    explanation: "W = F·s = (3i+4j)·(3i+4j) = 9 + 16 = 25 J.",
    difficulty: "medium"
  },
  {
    id: "pq22",
    subject: "physics",
    topic: "Work Energy Power",
    question: "Kinetic energy of a body of mass m moving with momentum p is:",
    options: ["p²/2m", "p²/m", "2p²/m", "mp²/2"],
    correct: 0,
    explanation: "KE = ½mv² = ½m(p/m)² = p²/2m.",
    difficulty: "easy"
  },
  {
    id: "pq23",
    subject: "physics",
    topic: "Work Energy Power",
    question: "A body is dropped from height h. Its kinetic energy just before hitting ground is:",
    options: ["mgh", "mgh/2", "2mgh", "zero"],
    correct: 0,
    explanation: "By conservation of energy, KE = initial PE = mgh.",
    difficulty: "easy"
  },
  {
    id: "pq24",
    subject: "physics",
    topic: "Gravitation",
    question: "The acceleration due to gravity at height h above Earth's surface (h << R) is approximately:",
    options: ["g(1 - 2h/R)", "g(1 + 2h/R)", "g(1 - h/R)", "g"],
    correct: 0,
    explanation: "g' = g(1 - 2h/R) for small h.",
    difficulty: "medium"
  },
  {
    id: "pq25",
    subject: "physics",
    topic: "Gravitation",
    question: "Escape velocity from Earth's surface is approximately:",
    options: ["11.2 km/s", "8.9 km/s", "7.9 km/s", "14.2 km/s"],
    correct: 0,
    explanation: "v_e = √(2gR) ≈ 11.2 km/s.",
    difficulty: "easy"
  },
  {
    id: "pq26",
    subject: "physics",
    topic: "Properties of Matter",
    question: "The terminal velocity of a spherical droplet falling through viscous medium is proportional to:",
    options: ["r²", "r", "r³", "1/r"],
    correct: 0,
    explanation: "Stokes' law: v_t = 2r²(ρ-σ)g/9η, so v_t ∝ r².",
    difficulty: "medium"
  },
  {
    id: "pq27",
    subject: "physics",
    topic: "Properties of Matter",
    question: "Which of the following has the highest surface tension?",
    options: ["Water", "Mercury", "Alcohol", "Acetone"],
    correct: 1,
    explanation: "Mercury has very high surface tension due to strong metallic bonding.",
    difficulty: "easy"
  },
  {
    id: "pq28",
    subject: "physics",
    topic: "Thermodynamics",
    question: "First law of thermodynamics is a consequence of conservation of:",
    options: ["Energy", "Mass", "Momentum", "Temperature"],
    correct: 0,
    explanation: "First law: ΔQ = ΔU + ΔW, conservation of energy.",
    difficulty: "easy"
  },
  {
    id: "pq29",
    subject: "physics",
    topic: "Thermodynamics",
    question: "In an isothermal process for an ideal gas:",
    options: ["Temperature constant", "Pressure constant", "Volume constant", "Heat exchanged = 0"],
    correct: 0,
    explanation: "Isothermal means constant temperature.",
    difficulty: "easy"
  },
  {
    id: "pq30",
    subject: "physics",
    topic: "Oscillations",
    question: "The time period of a simple pendulum depends on:",
    options: ["Length and g", "Mass and length", "Amplitude and mass", "Length and mass"],
    correct: 0,
    explanation: "T = 2π√(l/g), independent of mass and amplitude (small oscillations).",
    difficulty: "easy"
  },
  {
    id: "pq31",
    subject: "physics",
    topic: "Oscillations",
    question: "In SHM, the acceleration is proportional to:",
    options: ["Displacement", "Velocity", "Time", "Amplitude"],
    correct: 0,
    explanation: "a = -ω²x, acceleration proportional to displacement and directed towards mean position.",
    difficulty: "easy"
  },
  {
    id: "pq32",
    subject: "physics",
    topic: "Waves",
    question: "The speed of sound is maximum in:",
    options: ["Solids", "Liquids", "Gases", "Vacuum"],
    correct: 0,
    explanation: "Sound travels fastest in solids due to higher elasticity.",
    difficulty: "easy"
  },
  {
    id: "pq33",
    subject: "physics",
    topic: "Waves",
    question: "Doppler effect is observed when:",
    options: ["Source moves", "Observer moves", "Either source or observer moves", "Medium moves"],
    correct: 2,
    explanation: "Doppler effect occurs when there is relative motion between source and observer.",
    difficulty: "easy"
  },
  {
    id: "pq34",
    subject: "physics",
    topic: "Electrostatics",
    question: "Coulomb's law in vector form:",
    options: ["F = kq₁q₂/r²", "F = kq₁q₂/r² r̂", "F = kq₁q₂/r", "F = kq₁q₂/r³"],
    correct: 1,
    explanation: "F = (1/4πε₀)(q₁q₂/r²) r̂, along the line joining the charges.",
    difficulty: "easy"
  },
  {
    id: "pq35",
    subject: "physics",
    topic: "Electrostatics",
    question: "Electric field inside a charged conductor is:",
    options: ["Zero", "Maximum", "Uniform", "Non-uniform"],
    correct: 0,
    explanation: "Electrostatic shielding: E = 0 inside conductor in equilibrium.",
    difficulty: "easy"
  },
  {
    id: "pq36",
    subject: "physics",
    topic: "Current Electricity",
    question: "Ohm's law states:",
    options: ["V ∝ I", "V ∝ 1/I", "I ∝ 1/V", "V independent of I"],
    correct: 0,
    explanation: "V = IR, voltage proportional to current at constant temperature.",
    difficulty: "easy"
  },
  {
    id: "pq37",
    subject: "physics",
    topic: "Current Electricity",
    question: "Three resistors 2Ω, 3Ω, 6Ω are connected in parallel. Equivalent resistance is:",
    options: ["1Ω", "2Ω", "3Ω", "6Ω"],
    correct: 0,
    explanation: "1/R = 1/2 + 1/3 + 1/6 = 3/6 + 2/6 + 1/6 = 1. R = 1Ω.",
    difficulty: "medium"
  },
  {
    id: "pq38",
    subject: "physics",
    topic: "Magnetic Effects of Current",
    question: "Magnetic field at center of circular coil of radius R carrying current I:",
    options: ["μ₀I/2R", "μ₀I/R", "μ₀I/4R", "μ₀I/2πR"],
    correct: 0,
    explanation: "B = μ₀I/(2R) at center of circular loop.",
    difficulty: "medium"
  },
  {
    id: "pq39",
    subject: "physics",
    topic: "Electromagnetic Induction",
    question: "Lenz's law is a consequence of conservation of:",
    options: ["Energy", "Momentum", "Charge", "Mass"],
    correct: 0,
    explanation: "Lenz's law: induced current opposes the change causing it, consistent with energy conservation.",
    difficulty: "easy"
  },
  {
    id: "pq40",
    subject: "physics",
    topic: "Electromagnetic Waves",
    question: "Speed of electromagnetic waves in vacuum:",
    options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10¹⁰ m/s", "Depends on frequency"],
    correct: 0,
    explanation: "c = 1/√(μ₀ε₀) = 3 × 10⁸ m/s.",
    difficulty: "easy"
  },
  {
    id: "pq41",
    subject: "physics",
    topic: "Optics",
    question: "The focal length of a plane mirror is:",
    options: ["Zero", "Infinity", "Equal to object distance", "Negative"],
    correct: 1,
    explanation: "Plane mirror has infinite radius of curvature, hence f = R/2 = infinity.",
    difficulty: "easy"
  },
  {
    id: "pq42",
    subject: "physics",
    topic: "Optics",
    question: "A convex lens behaves as a diverging lens when:",
    options: ["Object is within focus", "Placed in medium denser than lens", "Placed in rarer medium", "Always converging"],
    correct: 1,
    explanation: "When surrounding medium is denser than lens material, convex lens diverges light.",
    difficulty: "medium"
  },
  {
    id: "pq43",
    subject: "physics",
    topic: "Modern Physics",
    question: "Photoelectric effect supports:",
    options: ["Particle nature of light", "Wave nature of light", "Dual nature", "Neither"],
    correct: 0,
    explanation: "Photoelectric effect explained by Einstein using photon (particle) concept of light.",
    difficulty: "easy"
  },
  {
    id: "pq44",
    subject: "physics",
    topic: "Modern Physics",
    question: "Bohr's quantization condition:",
    options: ["mvr = nh/2π", "mvr = nh", "mvr = h/2π", "mvr = nπ/h"],
    correct: 0,
    explanation: "Angular momentum L = mvr = nh/2π where n = 1, 2, 3....",
    difficulty: "easy"
  },
  {
    id: "pq45",
    subject: "physics",
    topic: "Semiconductors",
    question: "In n-type semiconductor, majority carriers are:",
    options: ["Electrons", "Holes", "Both equal", "Neutrons"],
    correct: 0,
    explanation: "n-type doped with pentavalent impurity, electrons are majority carriers.",
    difficulty: "easy"
  },
  {
    id: "pq46",
    subject: "physics",
    topic: "Kinematics",
    question: "A particle moves along x-axis. Its position is x = t² - 4t + 6. Velocity at t = 2 s is:",
    options: ["0 m/s", "2 m/s", "-2 m/s", "4 m/s"],
    correct: 0,
    explanation: "v = dx/dt = 2t - 4. At t=2: v = 4-4 = 0 m/s.",
    difficulty: "medium"
  },
  {
    id: "pq47",
    subject: "physics",
    topic: "Rotational Motion",
    question: "Moment of inertia of a solid sphere about diameter is:",
    options: ["2/5 MR²", "2/3 MR²", "1/2 MR²", "1/3 MR²"],
    correct: 0,
    explanation: "I = (2/5)MR² for solid sphere about diameter.",
    difficulty: "medium"
  },
  {
    id: "pq48",
    subject: "physics",
    topic: "Rotational Motion",
    question: "Torque is defined as:",
    options: ["r × F", "r · F", "F × r", "r/F"],
    correct: 0,
    explanation: "Torque τ = r × F (cross product).",
    difficulty: "easy"
  },
  {
    id: "pq49",
    subject: "physics",
    topic: "Thermodynamics",
    question: "Carnot engine efficiency depends on:",
    options: ["Source and sink temperatures", "Working substance", "Both", "None"],
    correct: 0,
    explanation: "η = 1 - T_sink/T_source.",
    difficulty: "medium"
  },
  {
    id: "pq50",
    subject: "physics",
    topic: "Kinetic Theory",
    question: "Average kinetic energy of gas molecules is proportional to:",
    options: ["Absolute temperature", "Celsius temperature", "Pressure", "Volume"],
    correct: 0,
    explanation: "KE_avg = 3/2 kT, proportional to absolute temperature.",
    difficulty: "easy"
  }
];
// ============================================================================
// QUESTION BANK - CHEMISTRY
// ============================================================================
NEET_DATA.questionBank.chemistry = [
  {
    id: "cq1",
    subject: "chemistry",
    topic: "Mole Concept",
    question: "The number of atoms in 12 g of carbon-12 is:",
    options: ["6.022 × 10²³", "6.022 × 10²²", "12 × 10²³", "1 g-atom"],
    correct: 0,
    explanation: "12 g of C-12 = 1 mole = Avogadro number of atoms = 6.022 × 10²³ atoms.",
    difficulty: "easy"
  },
  {
    id: "cq2",
    subject: "chemistry",
    topic: "Mole Concept",
    question: "Mass of 0.5 mole of water (H₂O) is:",
    options: ["9 g", "18 g", "36 g", "4.5 g"],
    correct: 0,
    explanation: "Molar mass of H₂O = 18 g/mol. Mass = 0.5 × 18 = 9 g.",
    difficulty: "easy"
  },
  {
    id: "cq3",
    subject: "chemistry",
    topic: "Mole Concept",
    question: "Number of moles in 4.4 g of CO₂ is:",
    options: ["0.1 mol", "0.5 mol", "1 mol", "0.2 mol"],
    correct: 0,
    explanation: "Molar mass CO₂ = 44 g/mol. Moles = 4.4/44 = 0.1 mol.",
    difficulty: "easy"
  },
  {
    id: "cq4",
    subject: "chemistry",
    topic: "Stoichiometry",
    question: "In reaction 2H₂ + O₂ → 2H₂O, 4 moles of H₂ react completely. Water formed is:",
    options: ["2 moles", "4 moles", "8 moles", "1 mole"],
    correct: 1,
    explanation: "Stoichiometric ratio H₂:H₂O = 2:2 = 1:1. So 4 mol H₂ gives 4 mol H₂O.",
    difficulty: "easy"
  },
  {
    id: "cq5",
    subject: "chemistry",
    topic: "Stoichiometry",
    question: "N₂ + 3H₂ → 2NH₃. If 6 moles of H₂ are used, NH₃ formed is:",
    options: ["2 moles", "4 moles", "6 moles", "8 moles"],
    correct: 1,
    explanation: "H₂:NH₃ = 3:2. 6 mol H₂ × (2/3) = 4 mol NH₃.",
    difficulty: "medium"
  },
  {
    id: "cq6",
    subject: "chemistry",
    topic: "Concentration Terms",
    question: "Molarity of solution containing 5 g NaOH in 500 mL solution is:",
    options: ["0.25 M", "0.5 M", "0.2 M", "0.1 M"],
    correct: 0,
    explanation: "Moles NaOH = 5/40 = 0.125 mol. Volume = 0.5 L. Molarity = 0.125/0.5 = 0.25 M.",
    difficulty: "medium"
  },
  {
    id: "cq7",
    subject: "chemistry",
    topic: "Concentration Terms",
    question: "Molality is defined as moles of solute per:",
    options: ["kg of solvent", "L of solution", "kg of solution", "L of solvent"],
    correct: 0,
    explanation: "Molality (m) = moles of solute / mass of solvent in kg.",
    difficulty: "easy"
  },
  {
    id: "cq8",
    subject: "chemistry",
    topic: "Atomic Structure",
    question: "Which quantum number determines the orientation of orbital?",
    options: ["Principal (n)", "Azimuthal (l)", "Magnetic (mₗ)", "Spin (mₛ)"],
    correct: 2,
    explanation: "Magnetic quantum number determines spatial orientation of orbital.",
    difficulty: "easy"
  },
  {
    id: "cq9",
    subject: "chemistry",
    topic: "Atomic Structure",
    question: "Electronic configuration of Cr (Z=24) is:",
    options: ["[Ar] 3d⁴4s²", "[Ar] 3d⁵4s¹", "[Ar] 3d⁶", "[Ar] 4s²3d⁴"],
    correct: 1,
    explanation: "Cr is exception: half-filled d subshell is stable, so [Ar] 3d⁵4s¹.",
    difficulty: "medium"
  },
  {
    id: "cq10",
    subject: "chemistry",
    topic: "Atomic Structure",
    question: "Which orbital is spherical in shape?",
    options: ["s", "p", "d", "f"],
    correct: 0,
    explanation: "s orbitals are spherical in shape.",
    difficulty: "easy"
  },
  {
    id: "cq11",
    subject: "chemistry",
    topic: "Chemical Bonding",
    question: "Which molecule has linear geometry?",
    options: ["H₂O", "BeCl₂", "NH₃", "CH₄"],
    correct: 1,
    explanation: "BeCl₂ has steric number 2, sp hybridization, linear geometry.",
    difficulty: "easy"
  },
  {
    id: "cq12",
    subject: "chemistry",
    topic: "Chemical Bonding",
    question: "Bond order of O₂ molecule is:",
    options: ["1", "2", "3", "1.5"],
    correct: 1,
    explanation: "O₂: bonding electrons 10, antibonding 6. Bond order = (10-6)/2 = 2.",
    difficulty: "medium"
  },
  {
    id: "cq13",
    subject: "chemistry",
    topic: "Chemical Bonding",
    question: "Hybridization of carbon in methane is:",
    options: ["sp", "sp²", "sp³", "sp³d"],
    correct: 2,
    explanation: "CH₄ carbon has steric number 4 → sp³ hybridization, tetrahedral.",
    difficulty: "easy"
  },
  {
    id: "cq14",
    subject: "chemistry",
    topic: "Thermodynamics",
    question: "First law of thermodynamics is:",
    options: ["ΔU = Q - W", "ΔU = Q + W", "ΔU = W - Q", "Q = W"],
    correct: 0,
    explanation: "ΔU = Q - W where Q is heat supplied to system, W is work done by system.",
    difficulty: "easy"
  },
  {
    id: "cq15",
    subject: "chemistry",
    topic: "Equilibrium",
    question: "For a reversible reaction at equilibrium:",
    options: ["Rate forward = Rate backward", "Concentrations constant", "Both", "None"],
    correct: 2,
    explanation: "At equilibrium, forward and backward rates are equal, concentrations constant.",
    difficulty: "easy"
  },
  {
    id: "cq16",
    subject: "chemistry",
    topic: "Redox",
    question: "Oxidation number of Mn in KMnO₄ is:",
    options: ["+4", "+6", "+7", "+2"],
    correct: 2,
    explanation: "K = +1, O = -2 × 4 = -8. Mn + 1 - 8 = 0 → Mn = +7.",
    difficulty: "easy"
  },
  {
    id: "cq17",
    subject: "chemistry",
    topic: "Hydrogen",
    question: "Which isotope of hydrogen is radioactive?",
    options: ["Protium", "Deuterium", "Tritium", "None"],
    correct: 2,
    explanation: "Tritium (³H) is radioactive with half-life ~12.3 years.",
    difficulty: "easy"
  },
  {
    id: "cq18",
    subject: "chemistry",
    topic: "s-Block",
    question: "Which alkali metal has lowest melting point?",
    options: ["Li", "Na", "K", "Cs"],
    correct: 3,
    explanation: "Melting point decreases down the group; Cs has lowest.",
    difficulty: "medium"
  },
  {
    id: "cq19",
    subject: "chemistry",
    topic: "p-Block",
    question: "Inert pair effect is maximum in:",
    options: ["Group 13", "Group 14", "Group 15", "Group 16"],
    correct: 3,
    explanation: "Inert pair effect increases down the group and is most pronounced in heavier p-block.",
    difficulty: "medium"
  },
  {
    id: "cq20",
    subject: "chemistry",
    topic: "Organic Chemistry",
    question: "IUPAC name of CH₃-CH₂-OH is:",
    options: ["Methanol", "Ethanol", "Propanol", "Butanol"],
    correct: 1,
    explanation: "2 carbon chain with -OH suffix → Ethanol.",
    difficulty: "easy"
  },
  {
    id: "cq21",
    subject: "chemistry",
    topic: "Organic Chemistry",
    question: "Which reaction is electrophilic substitution?",
    options: ["Halogenation of alkane", "Nitration of benzene", "Hydration of alkene", "Hydrogenation of alkene"],
    correct: 1,
    explanation: "Nitration of benzene is classic electrophilic aromatic substitution.",
    difficulty: "easy"
  },
  {
    id: "cq22",
    subject: "chemistry",
    topic: "Organic Chemistry",
    question: "Functional group of aldehyde is:",
    options: ["-CHO", "-COOH", "-OH", "-NH₂"],
    correct: 0,
    explanation: "Aldehyde group is -CHO (carbonyl with H).",
    difficulty: "easy"
  },
  {
    id: "cq23",
    subject: "chemistry",
    topic: "Hydrocarbons",
    question: "Benzene undergoes:",
    options: ["Addition reactions only", "Substitution reactions mainly", "Elimination only", "Polymerization only"],
    correct: 1,
    explanation: "Due to aromatic stability, benzene undergoes electrophilic substitution rather than addition.",
    difficulty: "medium"
  },
  {
    id: "cq24",
    subject: "chemistry",
    topic: "Environmental Chemistry",
    question: "Major cause of acid rain is:",
    options: ["CO₂", "SO₂ and NOₓ", "CO", "O₃"],
    correct: 1,
    explanation: "SO₂ and NOₓ form H₂SO₄ and HNO₃ in atmosphere causing acid rain.",
    difficulty: "easy"
  },
  {
    id: "cq25",
    subject: "chemistry",
    topic: "Chemical Kinetics",
    question: "Unit of rate constant for first order reaction is:",
    options: ["s⁻¹", "mol L⁻¹ s⁻¹", "L mol⁻¹ s⁻¹", "mol⁻¹ L s⁻¹"],
    correct: 0,
    explanation: "First order: rate = k[A], k has unit time⁻¹ = s⁻¹.",
    difficulty: "medium"
  },
  {
    id: "cq26",
    subject: "chemistry",
    topic: "Surface Chemistry",
    question: "Which is an example of chemisorption?",
    options: ["Adsorption of water on silica gel", "Adsorption of H₂ on Ni", "Adsorption of gas on activated charcoal", "None"],
    correct: 1,
    explanation: "H₂ on Ni involves chemical bond formation → chemisorption.",
    difficulty: "medium"
  },
  {
    id: "cq27",
    subject: "chemistry",
    topic: "General Principles",
    question: "Which ore is magnetic separation suitable for?",
    options: ["Haematite", "Magnetite", "Bauxite", "Copper pyrites"],
    correct: 1,
    explanation: "Magnetite (Fe₃O₄) is magnetic, separated by magnetic separation.",
    difficulty: "easy"
  },
  {
    id: "cq28",
    subject: "chemistry",
    topic: "Coordination Compounds",
    question: "Oxidation state of Co in [Co(NH₃)₆]Cl₃ is:",
    options: ["+2", "+3", "+4", "+1"],
    correct: 1,
    explanation: "NH₃ neutral, 3 Cl = -3. Co + 0 - 3 = 0 → Co = +3.",
    difficulty: "medium"
  },
  {
    id: "cq29",
    subject: "chemistry",
    topic: "Biomolecules",
    question: "Which is a reducing sugar?",
    options: ["Sucrose", "Glucose", "Starch", "Cellulose"],
    correct: 1,
    explanation: "Glucose has free aldehyde group → reducing sugar.",
    difficulty: "easy"
  },
  {
    id: "cq30",
    subject: "chemistry",
    topic: "Polymers",
    question: "Nylon-6,6 is made from:",
    options: ["Hexamethylenediamine + adipic acid", "Caprolactam", "Ethylene + vinyl chloride", "Phenol + formaldehyde"],
    correct: 0,
    explanation: "Nylon-6,6 from hexamethylenediamine and adipic acid.",
    difficulty: "medium"
  },
  {
    id: "cq31",
    subject: "chemistry",
    topic: "Chemistry in Everyday Life",
    question: "Which is an antacid?",
    options: ["Cimetidine", "Aspirin", "Paracetamol", "Penicillin"],
    correct: 0,
    explanation: "Cimetidine is antacid (histamine receptor blocker).",
    difficulty: "easy"
  },
  {
    id: "cq32",
    subject: "chemistry",
    topic: "Solid State",
    question: "In BCC unit cell, number of atoms per unit cell is:",
    options: ["2", "4", "1", "8"],
    correct: 0,
    explanation: "BCC: 8 corners × 1/8 + 1 body center = 2 atoms.",
    difficulty: "medium"
  },
  {
    id: "cq33",
    subject: "chemistry",
    topic: "Solutions",
    question: "Which colligative property is used to determine molar mass of macromolecules?",
    options: ["Osmotic pressure", "Elevation of boiling point", "Depression of freezing point", "Relative lowering of vapour pressure"],
    correct: 0,
    explanation: "Osmotic pressure is measured at room temperature and suitable for biomolecules.",
    difficulty: "medium"
  },
  {
    id: "cq34",
    subject: "chemistry",
    topic: "Electrochemistry",
    question: "Standard hydrogen electrode (SHE) potential is:",
    options: ["0 V", "1 V", "-1 V", "1.1 V"],
    correct: 0,
    explanation: "By convention, SHE potential = 0 V.",
    difficulty: "easy"
  },
  {
    id: "cq35",
    subject: "chemistry",
    topic: "Organic Chemistry",
    question: "Markovnikov's rule applies to:",
    options: ["Addition of HX to unsymmetrical alkene", "Substitution", "Elimination", "Oxidation"],
    correct: 0,
    explanation: "Markovnikov rule: negative part adds to carbon with fewer H atoms.",
    difficulty: "medium"
  },
  {
    id: "cq36",
    subject: "chemistry",
    topic: "Aldehydes Ketones",
    question: "Tollen's reagent gives silver mirror with:",
    options: ["Aldehydes", "Ketones", "Alcohols", "Ethers"],
    correct: 0,
    explanation: "Aldehydes reduce Tollen's reagent (ammoniacal AgNO₃) to metallic silver.",
    difficulty: "easy"
  },
  {
    id: "cq37",
    subject: "chemistry",
    topic: "Carboxylic Acids",
    question: "Which is strongest acid?",
    options: ["Formic acid", "Acetic acid", "Propionic acid", "Butyric acid"],
    correct: 0,
    explanation: "Formic acid (HCOOH) strongest among these due to least +I effect.",
    difficulty: "medium"
  },
  {
    id: "cq38",
    subject: "chemistry",
    topic: "Amines",
    question: "Basic strength order in gas phase:",
    options: ["3° > 2° > 1° > NH₃", "NH₃ > 1° > 2° > 3°", "1° > 2° > 3° > NH₃", "All equal"],
    correct: 0,
    explanation: "Gas phase: basicity increases with alkyl substitution due to +I effect.",
    difficulty: "medium"
  },
  {
    id: "cq39",
    subject: "chemistry",
    topic: "D Block",
    question: "Which is not a transition metal?",
    options: ["Zn", "Fe", "Cu", "Ni"],
    correct: 0,
    explanation: "Zn has completely filled d-orbital (3d¹⁰), not considered typical transition metal.",
    difficulty: "medium"
  },
  {
    id: "cq40",
    subject: "chemistry",
    topic: "P Block",
    question: "Which gas is used in manufacture of H₂SO₄ by contact process?",
    options: ["SO₂", "SO₃", "H₂S", "CO₂"],
    correct: 0,
    explanation: "Contact process: SO₂ oxidized to SO₃ then absorbed in H₂SO₄.",
    difficulty: "medium"
  }
];
// ============================================================================
// QUESTION BANK - BIOLOGY
// ============================================================================
NEET_DATA.questionBank.biology = [
  {
    id: "bq1",
    subject: "biology",
    topic: "Diversity in Living World",
    question: "The basic unit of classification is:",
    options: ["Kingdom", "Genus", "Species", "Family"],
    correct: 2,
    explanation: "Species is the basic/lowest taxonomic category.",
    difficulty: "easy"
  },
  {
    id: "bq2",
    subject: "biology",
    topic: "Diversity in Living World",
    question: "Five kingdom classification was proposed by:",
    options: ["Linnaeus", "Whittaker", "Haeckel", "Copeland"],
    correct: 1,
    explanation: "R.H. Whittaker proposed five kingdom classification in 1969.",
    difficulty: "easy"
  },
  {
    id: "bq3",
    subject: "biology",
    topic: "Diversity in Living World",
    question: "Binomial nomenclature was given by:",
    options: ["Whittaker", "Linnaeus", "Darwin", "Mendel"],
    correct: 1,
    explanation: "Carolus Linnaeus introduced binomial nomenclature.",
    difficulty: "easy"
  },
  {
    id: "bq4",
    subject: "biology",
    topic: "Diversity in Living World",
    question: "Which kingdom includes unicellular eukaryotes?",
    options: ["Monera", "Protista", "Fungi", "Plantae"],
    correct: 1,
    explanation: "Protista includes unicellular eukaryotic organisms.",
    difficulty: "easy"
  },
  {
    id: "bq5",
    subject: "biology",
    topic: "Diversity in Living World",
    question: "Cell wall of fungi is made of:",
    options: ["Cellulose", "Chitin", "Peptidoglycan", "Pectin"],
    correct: 1,
    explanation: "Fungal cell wall contains chitin.",
    difficulty: "easy"
  },
  {
    id: "bq6",
    subject: "biology",
    topic: "Structural Organisation",
    question: "Meristematic tissue is found at:",
    options: ["Root tip only", "Shoot tip only", "Root and shoot apices", "Mature regions"],
    correct: 2,
    explanation: "Apical meristem occurs at root and shoot apices.",
    difficulty: "easy"
  },
  {
    id: "bq7",
    subject: "biology",
    topic: "Structural Organisation",
    question: "Xylem transports:",
    options: ["Food", "Water and minerals", "Hormones", "Oxygen"],
    correct: 1,
    explanation: "Xylem conducts water and dissolved minerals from roots to leaves.",
    difficulty: "easy"
  },
  {
    id: "bq8",
    subject: "biology",
    topic: "Structural Organisation",
    question: "Phloem transports:",
    options: ["Water", "Food (photosynthates)", "Minerals", "Oxygen"],
    correct: 1,
    explanation: "Phloem translocates organic food from leaves to other parts.",
    difficulty: "easy"
  },
  {
    id: "bq9",
    subject: "biology",
    topic: "Structural Organisation",
    question: "Which tissue provides mechanical support to plants?",
    options: ["Parenchyma", "Collenchyma", "Sclerenchyma", "Xylem"],
    correct: 2,
    explanation: "Sclerenchyma provides mechanical strength due to lignified walls.",
    difficulty: "easy"
  },
  {
    id: "bq10",
    subject: "biology",
    topic: "Structural Organisation",
    question: "Cardiac muscle is found in:",
    options: ["Heart", "Stomach", "Limbs", "Skin"],
    correct: 0,
    explanation: "Cardiac muscles are present only in the heart.",
    difficulty: "easy"
  },
  {
    id: "bq11",
    subject: "biology",
    topic: "Cell Biology",
    question: "Powerhouse of cell is:",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Lysosome"],
    correct: 1,
    explanation: "Mitochondria produce ATP, called powerhouse of cell.",
    difficulty: "easy"
  },
  {
    id: "bq12",
    subject: "biology",
    topic: "Cell Biology",
    question: "Cell theory was proposed by:",
    options: ["Schleiden and Schwann", "Mendel", "Darwin", "Linnaeus"],
    correct: 0,
    explanation: "Schleiden (1838) and Schwann (1839) proposed cell theory.",
    difficulty: "easy"
  },
  {
    id: "bq13",
    subject: "biology",
    topic: "Cell Biology",
    question: "Ribosomes are composed of:",
    options: ["DNA only", "RNA and protein", "Protein only", "Lipid and protein"],
    correct: 1,
    explanation: "Ribosomes are made of rRNA and proteins.",
    difficulty: "easy"
  },
  {
    id: "bq14",
    subject: "biology",
    topic: "Cell Biology",
    question: "Osmosis is movement of:",
    options: ["Solute across membrane", "Solvent across semipermeable membrane", "Solute only", "Water against gradient"],
    correct: 1,
    explanation: "Osmosis = diffusion of solvent (water) through semipermeable membrane.",
    difficulty: "easy"
  },
  {
    id: "bq15",
    subject: "biology",
    topic: "Cell Biology",
    question: "Lysosomes are called:",
    options: ["Powerhouse", "Suicide bags", "Kitchen", "Control centre"],
    correct: 1,
    explanation: "Lysosomes contain digestive enzymes and can digest the cell itself.",
    difficulty: "easy"
  },
  {
    id: "bq16",
    subject: "biology",
    topic: "Cell Cycle",
    question: "DNA replication occurs during:",
    options: ["G1 phase", "S phase", "G2 phase", "M phase"],
    correct: 1,
    explanation: "S (synthesis) phase: DNA replication occurs.",
    difficulty: "easy"
  },
  {
    id: "bq17",
    subject: "biology",
    topic: "Cell Cycle",
    question: "Mitosis results in:",
    options: ["2 haploid cells", "2 diploid cells", "4 haploid cells", "4 diploid cells"],
    correct: 1,
    explanation: "Mitosis produces two genetically identical diploid daughter cells.",
    difficulty: "easy"
  },
  {
    id: "bq18",
    subject: "biology",
    topic: "Cell Cycle",
    question: "Meiosis results in:",
    options: ["2 diploid cells", "4 haploid cells", "2 haploid cells", "4 diploid cells"],
    correct: 1,
    explanation: "Meiosis produces four haploid daughter cells.",
    difficulty: "easy"
  },
  {
    id: "bq19",
    subject: "biology",
    topic: "Plant Physiology",
    question: "Photosynthesis occurs in:",
    options: ["Mitochondria", "Chloroplasts", "Ribosomes", "Nucleus"],
    correct: 1,
    explanation: "Chloroplasts contain chlorophyll for photosynthesis.",
    difficulty: "easy"
  },
  {
    id: "bq20",
    subject: "biology",
    topic: "Plant Physiology",
    question: "Dark reaction of photosynthesis is also called:",
    options: ["Calvin cycle", "Krebs cycle", "Glycolysis", "EMP pathway"],
    correct: 0,
    explanation: "Light-independent reactions = Calvin cycle (C3 cycle).",
    difficulty: "medium"
  },
  {
    id: "bq21",
    subject: "biology",
    topic: "Plant Physiology",
    question: "Transpiration pull is responsible for:",
    options: ["Food transport", "Ascent of sap", "Gas exchange", "Germination"],
    correct: 1,
    explanation: "Transpiration pull drives ascent of sap through xylem.",
    difficulty: "medium"
  },
  {
    id: "bq22",
    subject: "biology",
    topic: "Plant Physiology",
    question: "Photoperiodism is response to:",
    options: ["Light duration", "Temperature", "Water", "Gravity"],
    correct: 0,
    explanation: "Response of plants to relative length of day and night.",
    difficulty: "medium"
  },
  {
    id: "bq23",
    subject: "biology",
    topic: "Human Physiology",
    question: "Pacemaker of heart is:",
    options: ["AV node", "SA node", "Bundle of His", "Purkinje fibres"],
    correct: 1,
    explanation: "SA node (sinoatrial node) initiates heartbeat.",
    difficulty: "easy"
  },
  {
    id: "bq24",
    subject: "biology",
    topic: "Human Physiology",
    question: "Normal blood pressure is approximately:",
    options: ["120/80 mmHg", "140/90 mmHg", "100/60 mmHg", "160/100 mmHg"],
    correct: 0,
    explanation: "Normal BP ≈ 120/80 mmHg.",
    difficulty: "easy"
  },
  {
    id: "bq25",
    subject: "biology",
    topic: "Human Physiology",
    question: "Oxygen is transported in blood by:",
    options: ["WBC", "Platelets", "Haemoglobin in RBC", "Plasma"],
    correct: 2,
    explanation: "Haemoglobin in RBC binds O₂.",
    difficulty: "easy"
  },
  {
    id: "bq26",
    subject: "biology",
    topic: "Human Physiology",
    question: "Digestive juice without enzymes is:",
    options: ["Gastric juice", "Pancreatic juice", "Bile", "Intestinal juice"],
    correct: 2,
    explanation: "Bile contains no enzymes; helps in emulsification of fats.",
    difficulty: "easy"
  },
  {
    id: "bq27",
    subject: "biology",
    topic: "Human Physiology",
    question: "Nephron is functional unit of:",
    options: ["Liver", "Kidney", "Lung", "Heart"],
    correct: 1,
    explanation: "Nephron is structural and functional unit of kidney.",
    difficulty: "easy"
  },
  {
    id: "bq28",
    subject: "biology",
    topic: "Human Physiology",
    question: "Insulin is secreted by:",
    options: ["Alpha cells", "Beta cells", "Delta cells", "Liver"],
    correct: 1,
    explanation: "Beta cells of Islets of Langerhans secrete insulin.",
    difficulty: "easy"
  },
  {
    id: "bq29",
    subject: "biology",
    topic: "Reproduction",
    question: "Binary fission is common in:",
    options: ["Amoeba", "Hydra", "Yeast", "Planaria"],
    correct: 0,
    explanation: "Amoeba reproduces by binary fission.",
    difficulty: "easy"
  },
  {
    id: "bq30",
    subject: "biology",
    topic: "Reproduction",
    question: "Menstrual cycle is regulated by:",
    options: ["FSH and LH", "Insulin", "Thyroxine", "Adrenaline"],
    correct: 0,
    explanation: "FSH and LH from pituitary regulate ovarian cycle.",
    difficulty: "medium"
  },
  {
    id: "bq31",
    subject: "biology",
    topic: "Genetics",
    question: "Father of Genetics is:",
    options: ["Darwin", "Mendel", "Morgan", "Watson"],
    correct: 1,
    explanation: "Gregor Johann Mendel is father of genetics.",
    difficulty: "easy"
  },
  {
    id: "bq32",
    subject: "biology",
    topic: "Genetics",
    question: "In a monohybrid cross F₂ ratio is:",
    options: ["3:1", "9:3:3:1", "1:2:1", "1:1"],
    correct: 0,
    explanation: "Mendel's monohybrid F₂ phenotypic ratio = 3:1.",
    difficulty: "easy"
  },
  {
    id: "bq33",
    subject: "biology",
    topic: "Genetics",
    question: "DNA structure was discovered by:",
    options: ["Mendel", "Watson and Crick", "Morgan", "Griffith"],
    correct: 1,
    explanation: "Watson and Crick proposed double helix model of DNA (1953).",
    difficulty: "easy"
  },
  {
    id: "bq34",
    subject: "biology",
    topic: "Ecology",
    question: "Producers occupy:",
    options: ["First trophic level", "Second trophic level", "Third trophic level", "Fourth trophic level"],
    correct: 0,
    explanation: "Producers are at first trophic level.",
    difficulty: "easy"
  },
  {
    id: "bq35",
    subject: "biology",
    topic: "Ecology",
    question: "10% energy law was proposed by:",
    options: ["Lindeman", "Darwin", "Mendel", "Odum"],
    correct: 0,
    explanation: "Lindeman (1942) proposed 10% energy transfer law.",
    difficulty: "medium"
  },
  {
    id: "bq36",
    subject: "biology",
    topic: "Biotechnology",
    question: "PCR is used for:",
    options: ["Amplification of DNA", "Cutting DNA", "Separating DNA", "Sequencing DNA"],
    correct: 0,
    explanation: "Polymerase Chain Reaction amplifies DNA.",
    difficulty: "easy"
  },
  {
    id: "bq37",
    subject: "biology",
    topic: "Human Health",
    question: "Vaccine provides:",
    options: ["Passive immunity", "Active immunity", "Innate immunity", "Autoimmunity"],
    correct: 1,
    explanation: "Vaccines stimulate active immunity by introducing antigen.",
    difficulty: "easy"
  },
  {
    id: "bq38",
    subject: "biology",
    topic: "Human Health",
    question: "Causative agent of malaria is:",
    options: ["Plasmodium", "Virus", "Bacteria", "Helminth"],
    correct: 0,
    explanation: "Malaria caused by Plasmodium protozoan.",
    difficulty: "easy"
  },
  {
    id: "bq39",
    subject: "biology",
    topic: "Strategies for Enhancement",
    question: "Green Revolution is associated with:",
    options: ["M.S. Swaminathan", "Norman Borlaug", "Both", "None"],
    correct: 2,
    explanation: "Green Revolution associated with both M.S. Swaminathan (India) and Norman Borlaug.",
    difficulty: "medium"
  },
  {
    id: "bq40",
    subject: "biology",
    topic: "Organisms and Environment",
    question: "Biosphere includes:",
    options: ["Lithosphere", "Hydrosphere", "Atmosphere", "All of these"],
    correct: 3,
    explanation: "Biosphere = lithosphere + hydrosphere + atmosphere where life exists.",
    difficulty: "easy"
  }
];
console.log("NEET biology questions loaded:", NEET_DATA.questionBank.biology.length);

// Total question count
let totalQ = 0;
for (const subj in NEET_DATA.questionBank) {
  totalQ += NEET_DATA.questionBank[subj].length;
}
console.log("Total NEET questions loaded:", totalQ);