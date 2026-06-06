export interface BimmerXFunction {
  n: string;
  title: string;
  category: string;
  description: string;
  technical: string;
  useCase: string;
}

export const FUNCTIONS: BimmerXFunction[] = [
  {
    n: "01",
    title: "BDC1 / BDC2 / BDC3 New Parts Replacement",
    category: "Anti-Theft Module",
    description:
      "Programming and commissioning of a brand-new Body Domain Controller (BDC) unit into a vehicle. Supports all three BDC generations (BDC1, BDC2, BDC3) used across the BMW F-Series and G-Series ranges.",
    technical:
      "Performs full module initialization including VIN coding, CAFD/SWE assignment, key learning, and synchronization with the DME/DDE, EGS, and gateway modules. Equivalent to a factory commissioning procedure.",
    useCase:
      "Required after a stolen vehicle recovery, BDC failure, or full immobiliser replacement. Restores full vehicle functionality with a virgin module.",
  },
  {
    n: "02",
    title: "BDC1 / BDC2 Unlock",
    category: "Module Recovery",
    description:
      "Unlocks a locked Body Domain Controller, returning it to a writable state so it can be re-flashed, re-coded, or paired to another vehicle.",
    technical:
      "A locked BDC will refuse all programming attempts (UDS write services blocked). This function clears the protection layer and restores full diagnostic write access to the module.",
    useCase:
      "Essential for re-using second-hand BDC units, recovering modules after a failed programming session, or preparing BDCs for the used-parts market.",
  },
  {
    n: "03",
    title: "BDC2 + Key — Full ISN & EWS6 Extraction",
    category: "Immobiliser",
    description:
      "Extracts the complete Individual Serial Number (ISN) and the EWS6 immobiliser data set from a BDC2 module using a valid working key.",
    technical:
      "EWS6 is the immobiliser protocol used on BDC2-equipped vehicles. The full ISN is the secret code that synchronises the engine ECU (DME/DDE) with the immobiliser, and is mandatory for key cutting and DME pairing.",
    useCase:
      "Enables all-key-lost recovery, additional key programming, and DME/DDE replacement on F-Series and early G-Series vehicles.",
  },
  {
    n: "04",
    title: "EGS 5 / 6 / 7 Refresh & Synchronization",
    category: "Transmission",
    description:
      "Virginises and resynchronises automatic transmission control units of generations EGS5, EGS6, and EGS7.",
    technical:
      "A used EGS retains its original VIN and adaptation data. The refresh function returns the TCU to its factory state, after which it can be paired to a new chassis and synchronised with the DME via CAN.",
    useCase:
      "Critical for the used-parts market, gearbox swaps, and post-repair commissioning. Eliminates the need to purchase a brand-new EGS unit.",
  },
  {
    n: "05",
    title: "BDC1 ELV Cancel",
    category: "Steering Lock",
    description:
      "Software-side cancellation of the Electronic Steering Lock (ELV) on BDC1-equipped vehicles.",
    technical:
      "Deactivates the ELV function at the BDC level, preventing the system from sending lock/unlock commands. The mechanical steering lock is bypassed without physical removal.",
    useCase:
      "ELV failure is one of the most common BMW faults — the column locks and prevents starting. This function avoids costly steering-column replacement and re-coding procedures.",
  },
  {
    n: "06",
    title: "DME / DDE — All Special Functions & Write Refresh",
    category: "Engine ECU",
    description:
      "Full virginisation and special-function support for petrol (DME) and diesel (DDE) engine control units across all BMW generations.",
    technical:
      "Resets the ECU's internal VIN, ISN, EWS signature, and adaptation memory to a virgin state. Supports advanced write operations not available in standard diagnostic tools.",
    useCase:
      "Essential for engine swaps, ECU replacement, and used-ECU commissioning. Allows a DME/DDE to be married to a new chassis without dealer intervention.",
  },
  {
    n: "07",
    title: "IMMO-OFF — B48 / B58 / 8X0 Family",
    category: "Immobiliser Removal",
    description:
      "Software-side immobiliser deactivation for the modern B48 (4-cyl petrol), B58 (6-cyl petrol), and 8X0-series Bosch DMEs.",
    technical:
      "Disables the immobiliser routine inside the engine ECU firmware. The ECU will start and run without authentication from the BDC or any immobiliser module.",
    useCase:
      "Used for permanent BDC failures, engine test benches, race / off-road builds, and emergency recovery situations where the immobiliser module is unavailable.",
  },
  {
    n: "08",
    title: "B48 / B58 / 8X0 — P-FLASH Read & Write",
    category: "ECU Programming",
    description:
      "Full Program Flash (P-FLASH) read and write access on the latest generation Bosch DMEs (MEVD17.2.8, MG1, MD1 platforms).",
    technical:
      "These ECUs are protected by TPROT and bootloader-level security. The software bypasses these protections to allow firmware reading, modification, and writing — the foundation for Stage 1 tuning, ECU repair, and virginisation.",
    useCase:
      "Required for performance tuning, ECU repair, firmware backup, and cloning operations on modern BMW petrol engines.",
  },
  {
    n: "09",
    title: "B48 / B58 / 8X0 — Read ISN by OBD",
    category: "Immobiliser",
    description:
      "Direct reading of the Individual Serial Number (ISN) from B48 and B58 engine ECUs through the OBD-II port — no bench, no BDM, no ECU removal.",
    technical:
      "On most generations, ISN extraction from these protected ECUs requires opening the unit and using BDM or bench-mode tooling. BimmerX performs this operation entirely through the diagnostic port.",
    useCase:
      "Dramatically reduces labour time for key programming, DME pairing, and all-key-lost situations on modern BMWs. One of the flagship features of BimmerX.",
  },
  {
    n: "10",
    title: "EDME I3 — ISN Reading (All Versions)",
    category: "Electric Vehicle",
    description:
      "ISN extraction support for the BMW i3 electric vehicle across all EDME (Electric Drive Motor Electronics) revisions.",
    technical:
      "The EDME on the i3 acts as the propulsion controller and stores the ISN required for high-voltage system authorisation. Very few aftermarket tools support this module.",
    useCase:
      "A premium niche service — i3 key programming, EDME replacement, and high-voltage controller repair.",
  },
  {
    n: "11",
    title: "Mercedes-Benz Infineon TC1797 / TC1793 — OTP Calculation",
    category: "Cross-Brand (Mercedes)",
    description:
      "OTP (One-Time Programmable) protection calculation and bypass for Mercedes-Benz ECUs based on the Infineon Tricore TC1797 and TC1793 platforms. Enables full ECU cloning.",
    technical:
      "Mercedes uses Tricore-based ECUs with One-Time-Programmable security regions that normally prevent any modification. BimmerX computes the correct OTP values to allow arbitrary cloning of these units.",
    useCase:
      "Extends the workshop's capability into the Mercedes ECU repair, replacement, and cloning market — a strong cross-brand revenue stream.",
  },
  {
    n: "12",
    title: "BMW Internal Parts Number Query (ETK)",
    category: "Database",
    description:
      "Built-in BMW parts catalogue (ETK) lookup. Identify any BMW component by its internal part number directly inside the software.",
    technical:
      "Returns the part description and metadata associated with a BMW reference number. Note: this is a parts catalogue lookup only — it does not return vehicle / model compatibility data.",
    useCase:
      "Streamlines workshop workflow when sourcing modules, ordering parts, or verifying component identity before programming.",
  },
  {
    n: "13",
    title: "BMW Module Initialisation BIN Files",
    category: "Module Recovery",
    description:
      "Complete library of factory-state initialisation BIN files for all BMW modules. Restores any module to a clean virgin state.",
    technical:
      "Re-injecting a clean initialisation BIN resolves the 'Time Part Protection' error — a synchronisation lock that occurs when modules detect mismatched time-domain signatures between each other.",
    useCase:
      "Recovery tool for bricked or mis-programmed modules. Essential for the used-parts market where modules must be cleanly virginised before resale.",
  },
  {
    n: "14",
    title: "Siemens MSV / MSD — ISN Conversion",
    category: "Engine ECU",
    description:
      "ISN calculation and conversion for the Siemens MSV (MSV70, MSV80) and MSD (MSD80, MSD81, MSD85, MSD87) engine ECUs found on E-Series and early F-Series BMWs.",
    technical:
      "These ECUs store the ISN in a proprietary encoded format. BimmerX decodes the stored value and converts it for use in CAS pairing, key programming, and DME replacement procedures.",
    useCase:
      "Daily workshop service for E60, E90, E70, E71, E82 and similar generations — still a very large pool of vehicles on the road.",
  },
  {
    n: "15",
    title: "DME / DDE Files — ISN / EWS / EGS / EME Double-Stealth Code Viewer",
    category: "File Analysis",
    description:
      "Reveals all hidden security codes inside any BMW DME/DDE firmware file: ISN, EWS signature, EGS signature, and EME (Electric Machine) code, including the Double Stealth Code protection used on recent ECUs.",
    technical:
      "The Double Stealth Code is an additional encryption layer applied to the ISN/EWS data in modern firmware. The software decodes both protection layers and displays the underlying secret values.",
    useCase:
      "Critical for ECU file repair, cloning, virginisation, and chip-tuning workflows on modern BMW platforms.",
  },
  {
    n: "16",
    title: "Instrument Cluster — NCD Coding Function",
    category: "Instrument Cluster",
    description:
      "Manages the NCD (Newer Coding Data) file structure for the BMW Instrument Cluster (IC), enabling full coding control over the meter unit.",
    technical:
      "NCD files are the modern coding format used by E-Sys on F-Series and G-Series vehicles. The software allows reading, modifying, and writing the IC's NCD directly.",
    useCase:
      "Used for instrument cluster replacement, language and unit changes, feature retrofitting, and post-repair recalibration after legitimate mileage corrections.",
  },
  {
    n: "17",
    title: "FEME Refresh (Beta — Multiple BAF Modes)",
    category: "Electric / Hybrid",
    description:
      "Refresh and virginisation of the Front Electric Machine Electronics (FEME) controller on hybrid and electric BMW vehicles. Multiple BAF write modes available for compatibility.",
    technical:
      "Currently in beta — success rate is not guaranteed at 100%. Several BAF (algorithm) modes are provided to maximise compatibility across FEME revisions.",
    useCase:
      "Niche premium service for BMW hybrid and EV platforms. Always perform a full backup before attempting on customer vehicles.",
  },
  {
    n: "18",
    title: "DKG02 (Beta)",
    category: "Transmission",
    description:
      "Refresh and programming of the DKG02 dual-clutch transmission found on BMW M-Sport models (M2 / M3 / M4 and related).",
    technical:
      "Beta-stage support — does not guarantee 100% success rate. Targets the M-DCT generation 02 transmission control unit.",
    useCase:
      "High-value niche service. Required for DKG replacement, used-gearbox commissioning, and BMW M Series repair workflows.",
  },
  {
    n: "19",
    title: "Gateway (GW) — Write Configuration & Basic Level Functions",
    category: "Gateway / Network",
    description:
      "Read and write access to the BMW central gateway (ZGW) configuration, including a broad set of low-level write functions.",
    technical:
      "The gateway routes traffic across all vehicle networks (CAN, FlexRay, Ethernet). Incorrect configuration will prevent the vehicle from operating. BimmerX exposes a wide range of GW operations — far more than mainstream tools.",
    useCase:
      "Required for full vehicle reprogramming, network repair, gateway replacement, and advanced retrofitting procedures.",
  },
  {
    n: "20",
    title: "Engineering Modes — Anti-Theft & Version Tree Programming",
    category: "Engineering",
    description:
      "Access to BMW factory-level engineering modes for selective programming of anti-theft modules, with management of separate firmware version trees.",
    technical:
      "Engineering mode unlocks operations normally blocked in standard diagnostics. The separate version-tree handling allows the technician to operate across multiple I-Level branches for the same chassis.",
    useCase:
      "Used by advanced technicians for complex programming scenarios, custom retrofits, and vehicles that have been partially updated across multiple firmware branches.",
  },
  {
    n: "21",
    title: "G-Series EME — ISN Certification & Cross-Vehicle Exchange",
    category: "Electric / Hybrid (G-Series)",
    description:
      "ISN-certified exchange of EME (Electric Machine Electronics) modules between G-Series vehicles, with a built-in test refresh mode to validate the operation before final commitment.",
    technical:
      "Allows a used EME module from one G-Series vehicle to be paired into another via certified ISN exchange. The test-refresh mode lets the technician verify the procedure before committing the changes permanently.",
    useCase:
      "High-value service for the modern BMW used-parts market — specifically G-Series hybrid and electric platforms (post-2018), where few aftermarket tools currently operate.",
  },
];
