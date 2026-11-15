export interface Project {
  id: string;
  title: string;
  category: string;
  engine: string;
  description: string;
  tags: string[];
  capabilities: string[];
  image: string;
  video?: string;
  url: string;
}
export const projects: Project[] = [
  {
    id: "testing",
    title: "Automated Gameplay Testing",
    category: "GAMEPLAY × QUALITY ASSURANCE",
    engine: "Unreal Engine 5.8",
    description:
      "Automated validation of a Health Pickup mechanic using Unreal Engine’s Blueprint Functional Testing framework and the Gameplay Ability System.",
    tags: [
      "Blueprints",
      "Gameplay Ability System",
      "Functional Testing",
      "QA Automation",
    ],
    capabilities: [
      "Functional test setup and automated gameplay validation",
      "Player input simulation and Gameplay Effect verification",
      "Expected behavior validation, test execution and result reporting",
    ],
    image: "projects/testing.webp",
    video: "jmvRQEdrho4",
    url: "https://www.youtube.com/watch?v=jmvRQEdrho4",
  },
  {
    id: "gas",
    title: "Gameplay Ability System (GAS)",
    category: "GAMEPLAY PROGRAMMING",
    engine: "Unreal Engine 5.8",
    description:
      "A technical gameplay showcase combining C++ and Blueprints to implement gameplay systems, combat mechanics and animation integration.",
    tags: [
      "C++",
      "Blueprints",
      "Gameplay Ability System",
      "Gameplay Programming",
      "Animation",
    ],
    capabilities: [
      "Gameplay Abilities, Effects and Attributes",
      "Combat mechanics and animation integration",
      "Gameplay systems implemented with C++ and Blueprints",
    ],
    image: "projects/gas.webp",
    video: "wfe4FPduEwU",
    url: "https://www.youtube.com/watch?v=wfe4FPduEwU",
  },
  {
    id: "eos",
    title: "EOS Go Plugins",
    category: "MULTIPLAYER & DEVELOPER TOOLS",
    engine: "Unreal Engine Plugin Development",
    description:
      "Proprietary Unreal Engine plugins focused on Epic Online Services integration and simplifying online and multiplayer development workflows.",
    tags: [
      "Unreal Engine",
      "Epic Online Services",
      "Multiplayer",
      "Networking",
      "Plugin Development",
    ],
    capabilities: [
      "Reusable development tools and Unreal Engine plugin architecture",
      "Two versions with different feature sets and pricing",
      "Online and multiplayer development workflows",
    ],
    image: "projects/eos-go-community.webp",
    url: "https://www.fab.com/sellers/Fedahumada%20Studio",
  },
];
export const contributions = [
  {
    title: "Piñata Puppy World",
    studio: "Real Time Studio",
    details:
      "Unreal Engine rendering, lighting, performance optimization, Unreal Insights, and Blueprint-based technical solutions.",
    url: "https://store.steampowered.com/app/3363050/Pinata_Puppy_World/",
    label: "View Steam page",
  },
  {
    title: "OxySpace",
    studio: "FromDust Studio",
    details:
      "Unreal Engine UI, multiplayer session creation and joining, friend lists and friend joining, and networking systems with UI integration.",
    url: "https://play.google.com/store/apps/details?id=com.oxyspace",
    label: "View project listing",
  },
];
