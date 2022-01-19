export default {
    "param": {
	"dh": "dominant handshape",
	"dl": "dominant location",
	"do": "dominant orientation",
	"dm": "dominant movement"
    },
    "menuText": {
	"dl": {
	    "Q": "Neutral (Q)",
	    "rest": "Rest",
	    "h": "Face or whole head (h)",
	    "u": "Upper face, forehead (u)",
	    "m": "Mid-face, eye, nose (m)",
	    "l": "Lower face, chin (l)",
	    "c": "Cheek, temple, ear (c)",
	    "k": "Neck (k)",
	    "[": "Torso ([)",
	    "i": "Nondominant upper arm (i)",
	    "j": "Nondominant lower arm (j)",
	    "as": "Nondominant wrist (a/s)"
	}
    },
    "rotation": {
	"right": {
	    "shoulder": {
		"rest": {
		    "vector": [1, 0, 0],
		    "scalar": 0,
		},
		"Q": {
		    "vector": [-0.887, -0.426, -.176],
		    "scalar": 0.874,
		},
		"u": {
		    "vector": [-0.975, 0.1553, -0.155],
		    "scalar": 1.8
		},
		"m": {
		    "copy": "u"
		},
		"l": {
		    "copy": "u"
		},
		"c": {
		    "vector": [-0.975, 0.1553, -0.155],
		    "scalar": 1.4
		},
		"k": {
		    "copy": "c"
		},
		"[": {
		    "vector": [-0.887, -0.426, -.176],
		    "scalar": 0.4
		},
		"h": {
		    "copy": "c"
		},
		"j": {
		    "vector": [-0.6, 1, -0.3],
		    "scalar": 1
		},
		"as": {
		    "vector": [-0.8, 1, -0.3],
		    "scalar": 1
		},
		"below": {
		    "vector": [0.3, 0.6, -0.3],
		    "scalar": 2
		},
		"side": {
		    "copy": "below"
		}
	    }
	}
    }
};
