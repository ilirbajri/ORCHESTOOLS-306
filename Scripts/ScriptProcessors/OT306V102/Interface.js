Content.makeFrontInterface(1054, 520);

// sample maps 1

const var Sampler1 = Synth.getChildSynth("Sampler1");
const var sampleMaps = Sampler.getSampleMapList();

const var LAYER1 = Content.getComponent("LAYER1INSTRUMENT");
LAYER1.set("items", sampleMaps.join("\n"));

inline function onLAYER1Control(component, value)
{
	Sampler1.asSampler().loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("LAYER1INSTRUMENT").setControlCallback(onLAYER1Control);

// sample maps 2

const var Sampler2 = Synth.getChildSynth("Sampler2");
const var sampleMaps2 = Sampler.getSampleMapList();

const var LAYER2 = Content.getComponent("LAYER2INSTRUMENT");
LAYER2.set("items", sampleMaps2.join("\n"));

inline function onLAYER2Control(component, value)
{
	Sampler2.asSampler().loadSampleMap(sampleMaps2[value-1]);
};

Content.getComponent("LAYER2INSTRUMENT").setControlCallback(onLAYER2Control);

// PWHEEL ratios

const var PWHEEL1MOD = Synth.getModulator("PWHEEL1MOD");

inline function onPITCHWHEEL1Control(component, value)
{
	PWHEEL1MOD.setIntensity(value/2);	
};

Content.getComponent("PITCHWHEEL1").setControlCallback(onPITCHWHEEL1Control);

const var PWHEEL2MOD = Synth.getModulator("PWHEEL2MOD");

inline function onPITCHWHEEL2Control(component, value)
{
	PWHEEL2MOD.setIntensity(value/2);	
};

Content.getComponent("PITCHWHEEL2").setControlCallback(onPITCHWHEEL2Control);

// LFO 1 frequency mode script

const var LFO1FREQ = Content.getComponent("LFO1Frequency");

// [JSON Knob]
Content.setPropertiesFromJSON("LFO1Frequency", {
  "mode": "Frequency",
  "stepSize": 0.01,
  "defaultValue": "1",
  "suffix": " Hz"
});

const var LFO1MOD = Synth.getModulator("LFO1");

const var LFO1Sync = Content.getComponent("LFO1Sync");

inline function onLFO1SyncControl(component, value)
{
	// Sync Mode LFO1
	LFO1MOD.setAttribute(LFO1MOD.TempoSync, value);
	
	if(value)
	{
		// Switch to tempo sync mode
		LFO1FREQ.set("mode", "TempoSync");
		LFO1FREQ.set("max", 18);
	}
	else
	{
		// Switch to frequency mode
		LFO1FREQ.set("mode", "Frequency");
		LFO1FREQ.set("min", 0.00);
		LFO1FREQ.set("max", 50);
		LFO1FREQ.set("middlePosition", 5);
	}
};

LFO1Sync.setControlCallback(onLFO1SyncControl);

// LFO 2 frequency mode script

const var LFO2FREQ = Content.getComponent("LFO2Frequency");

// [JSON Knob]
Content.setPropertiesFromJSON("LFO2Frequency", {
  "mode": "Frequency",
  "stepSize": 0.01,
  "defaultValue": "1",
  "suffix": " Hz"
});

const var LFO2MOD = Synth.getModulator("LFO2");

const var LFO2Sync = Content.getComponent("LFO2Sync");

inline function onLFO2SyncControl(component, value)
{
	// Sync Mode LFO2
	LFO2MOD.setAttribute(LFO2MOD.TempoSync, value);
	
	if(value)
	{
		// Switch to tempo sync mode
		LFO2FREQ.set("mode", "TempoSync");
		LFO2FREQ.set("max", 18);
	}
	else
	{
		// Switch to frequency mode
		LFO2FREQ.set("mode", "Frequency");
		LFO2FREQ.set("min", 0.00);
		LFO2FREQ.set("max", 50);
		LFO2FREQ.set("middlePosition", 5);
	}
};

LFO2Sync.setControlCallback(onLFO2SyncControl);

// LFO 3 frequency mode script

const var LFO3FREQ = Content.getComponent("LFO3Frequency");

// [JSON Knob]
Content.setPropertiesFromJSON("LFO3Frequency", {
  "mode": "Frequency",
  "stepSize": 0.01,
  "defaultValue": "1",
  "suffix": " Hz"
});

const var LFO3MOD = Synth.getModulator("LFO3");

const var LFO3Sync = Content.getComponent("LFO3Sync");

inline function onLFO3SyncControl(component, value)
{
	// Sync Mode LFO3
	LFO3MOD.setAttribute(LFO3MOD.TempoSync, value);
	
	if(value)
	{
		// Switch to tempo sync mode
		LFO3FREQ.set("mode", "TempoSync");
		LFO3FREQ.set("max", 18);
	}
	else
	{
		// Switch to frequency mode
		LFO3FREQ.set("mode", "Frequency");
		LFO3FREQ.set("min", 0.00);
		LFO3FREQ.set("max", 50);
		LFO3FREQ.set("middlePosition", 5);
	}
};

LFO3Sync.setControlCallback(onLFO3SyncControl);

// DELAY mode 

const var LeftDelayTimerSync = Content.getComponent("DELAYTIMELEFT");
const var RightDelayTimerSync = Content.getComponent("DELAYTIMERIGHT");
const var SyncFreeButton = Content.getComponent("DELAYSYNC");
const var Delay1 = Synth.getEffect("Delay1");



// [JSON Knob]

Content.setPropertiesFromJSON("LeftDelayTimerSync", {
  "mode": "TempoSync",
  "stepSize": 1,
});

Content.setPropertiesFromJSON("RightDelayTimerSync", {
  "mode": "TempoSync",
  "stepSize": 1,
});



inline function onSyncFreeButtonControl(component, value)
{
	 Delay1.setAttribute(Delay1.TempoSync, value);
	
	if(value)
	{
		// Switch the knob to tempo sync mode
		LeftDelayTimerSync.set("mode", "TempoSync");
		LeftDelayTimerSync.set("max", 18);
		LeftDelayTimerSync.set("min", 0);
		LeftDelayTimerSync.set("stepSize", 1);
		LeftDelayTimerSync.set("middlePosition", 9);
		
		RightDelayTimerSync.set("mode", "TempoSync");
		RightDelayTimerSync.set("max", 18);
		RightDelayTimerSync.set("min", 0);
		RightDelayTimerSync.set("stepSize", 1);
		RightDelayTimerSync.set("middlePosition", 9);
		
		
		
	}
	else
	{
		// Switch the knob to frequency mode
		LeftDelayTimerSync.set("mode", "Frequency");
		LeftDelayTimerSync.set("min", 0.5);
		LeftDelayTimerSync.set("max", 1400);
		LeftDelayTimerSync.set("middlePosition", 700);
		LeftDelayTimerSync.set("stepSize", 0.01);
		
		
		
		RightDelayTimerSync.set("mode", "Frequency");
		RightDelayTimerSync.set("min", 0.5);
		RightDelayTimerSync.set("max", 1400);
		RightDelayTimerSync.set("middlePosition", 700);
		RightDelayTimerSync.set("stepSize", 0.01);
		
		
		
		
	}
};

SyncFreeButton.setControlCallback(onSyncFreeButtonControl);

// Library

const var LibButton = Content.getComponent("LibButton");
const var LIBRARYBROWSER = Content.getComponent("LIBRARYBROWSER");

inline function onLibButtonControl(component, value)
{
	if (value)
    {
        LIBRARYBROWSER.showControl(true);
    }
    else
    {
        LIBRARYBROWSER.showControl(false);
    }
};

Content.getComponent("LibButton").setControlCallback(onLibButtonControl);

// CC MIDI Learn Panel ;

const var MIDILearnPanel = Content.getComponent("MIDILearnPanel");
const var MIDILPButton = Content.getComponent("MIDILPButton");
MIDILPButton.setControlCallback(MIDILPButtonCB);

inline function MIDILPButtonCB(control, value)
{
    MIDILearnPanel.showControl(value);
}

// SettingsPanel 

const var SettingsPanel = Content.getComponent("SettingsPanel");
const var SettingsButton = Content.getComponent("SettingsButton");
SettingsButton.setControlCallback(SettingsButtonCB);

inline function SettingsButtonCB(control, value)
{
    SettingsPanel.showControl(value);
}function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 