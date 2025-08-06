var GoogleAuth;
var zE;
window.sectorSystem = {
  settings: {
    lineWidth: 0.15,
    lineColor: 16711680,
    lineAlpha: 0.3,
    backgroundColor: 0,
    backgroundAlpha: 0.6,
    sectorTextStyle: {
      fontFamily: "Arial",
      fontSize: 14,
      fill: 16777215
    },
    quarterTextStyle: {
      fontFamily: "Arial",
      fontSize: 20,
      fill: 16777215
    },
    showLines: true
  },
  state: {
    container: null,
    graphics: null,
    isActive: false,
    currentMode: null,
    texts: [],
    initialized: false,
    renderContainer: null,
    restored: false
  },
  findRenderContainer: function () {
    if (this.state.renderContainer) {
      return this.state.renderContainer;
    }
    if (window.laserGraphics?.parent) {
      this.state.renderContainer = window.laserGraphics.parent;
      return this.state.renderContainer;
    }
    if (window.ooo?.Mh?.Lh?.Wf) {
      this.state.renderContainer = window.ooo.Mh.Lh.Wf;
      return this.state.renderContainer;
    }
    const _0x48e983 = (_0xb7dae2, _0xed10d9 = new Set(), _0x28c2c0 = 0) => {
      if (!_0xb7dae2 || typeof _0xb7dae2 !== "object" || _0x28c2c0 > 3 || _0xed10d9.has(_0xb7dae2)) {
        return null;
      }
      _0xed10d9.add(_0xb7dae2);
      if (_0xb7dae2.Wf instanceof PIXI.Container) {
        this.state.renderContainer = _0xb7dae2.Wf;
        return _0xb7dae2.Wf;
      }
      for (let _0x107756 in _0xb7dae2) {
        if (_0x107756 !== "parent" && _0x107756 !== "children" && _0xb7dae2[_0x107756] && typeof _0xb7dae2[_0x107756] === "object") {
          const _0x5ea33b = _0x48e983(_0xb7dae2[_0x107756], _0xed10d9, _0x28c2c0 + 1);
          if (_0x5ea33b) {
            return _0x5ea33b;
          }
        }
      }
      return null;
    };
    return _0x48e983(window.ooo);
  },
  cachedRadius: 0,
  lastRadiusTime: 0,
  getRadius: function () {
    const _0x2987ab = Date.now();
    if (_0x2987ab - this.lastRadiusTime > 1000) {
      this.cachedRadius = window.ooo?.Mh?.Qh?.gh || window.ooo?.Mh?.Lh?.Qh?.gh || 500;
      this.lastRadiusTime = _0x2987ab;
    }
    return this.cachedRadius;
  },
  clearTexts: function () {
    this.state.texts.forEach(_0x4aaf1f => {
      if (_0x4aaf1f && _0x4aaf1f.parent) {
        _0x4aaf1f.parent.removeChild(_0x4aaf1f);
      }
    });
    this.state.texts = [];
  },
  initDrawing: function (_0x59aba5) {
    this.clearTexts();
    this.state.graphics.clear();
    this.state.graphics.lineStyle(this.settings.lineWidth, this.settings.lineColor, this.settings.lineAlpha);
    this.state.graphics.beginFill(this.settings.backgroundColor, this.settings.backgroundAlpha);
    this.state.graphics.drawCircle(0, 0, _0x59aba5);
    this.state.graphics.endFill();
    return _0x59aba5;
  },
  drawSectors: function () {
    const _0x418c4f = this.initDrawing(this.getRadius());
    const _0x519f0b = _0x418c4f / 3;
    if (this.settings.showLines) {
      for (let _0x4374c3 = 1; _0x4374c3 < 3; _0x4374c3++) {
        this.state.graphics.drawCircle(0, 0, _0x418c4f - _0x4374c3 * _0x519f0b);
      }
      for (let _0x5d965e = 0; _0x5d965e < 4; _0x5d965e++) {
        const _0x40297c = _0x5d965e * Math.PI / 2;
        this.state.graphics.moveTo(0, 0);
        this.state.graphics.lineTo(Math.cos(_0x40297c) * _0x418c4f, Math.sin(_0x40297c) * _0x418c4f);
      }
    }
    for (let _0x1f8459 = 0; _0x1f8459 < 4; _0x1f8459++) {
      const _0x46e70a = _0x1f8459 * Math.PI / 2;
      for (let _0x9cdc16 = 0; _0x9cdc16 < 3; _0x9cdc16++) {
        const _0x346a7b = _0x418c4f - (_0x9cdc16 * _0x519f0b + _0x519f0b / 2);
        const _0x7e7e0a = _0x46e70a + Math.PI / 4;
        const _0x3b4d91 = ["S", "D", "F"][_0x9cdc16] + (_0x1f8459 + 1);
        const _0x2c80e9 = new PIXI.Text(_0x3b4d91, this.settings.sectorTextStyle);
        _0x2c80e9.anchor.set(0.5);
        _0x2c80e9.position.set(Math.cos(_0x7e7e0a) * _0x346a7b, Math.sin(_0x7e7e0a) * _0x346a7b);
        this.state.container.addChild(_0x2c80e9);
        this.state.texts.push(_0x2c80e9);
      }
    }
  },
  drawQuarters: function () {
    const _0x33db5e = this.initDrawing(this.getRadius());
    if (this.settings.showLines) {
      this.state.graphics.moveTo(-_0x33db5e, 0);
      this.state.graphics.lineTo(_0x33db5e, 0);
      this.state.graphics.moveTo(0, -_0x33db5e);
      this.state.graphics.lineTo(0, _0x33db5e);
    }
    [{
      n: "UP 1",
      x: 1,
      y: -1
    }, {
      n: "UP 2",
      x: -1,
      y: -1
    }, {
      n: "UP 3",
      x: -1,
      y: 1
    }, {
      n: "UP 4",
      x: 1,
      y: 1
    }].forEach(_0x1b0477 => {
      const _0x3ad78f = new PIXI.Text(_0x1b0477.n, this.settings.quarterTextStyle);
      _0x3ad78f.anchor.set(0.5);
      _0x3ad78f.position.set(_0x1b0477.x * _0x33db5e / 3, _0x1b0477.y * _0x33db5e / 3);
      this.state.container.addChild(_0x3ad78f);
      this.state.texts.push(_0x3ad78f);
    });
  },
  initGraphics: function () {
    if (this.state.initialized) {
      return true;
    }
    const _0x5dc4f5 = this.findRenderContainer();
    if (!_0x5dc4f5) {
      return false;
    }
    this.state.container = new PIXI.Container();
    this.state.graphics = new PIXI.Graphics();
    this.state.container.addChild(this.state.graphics);
    _0x5dc4f5.addChild(this.state.container);
    this.state.container.zIndex = 10;
    this.state.container.visible = false;
    this.state.initialized = true;
    return true;
  },
  toggleMode: function (_0x4e6601) {
    if (!this.initGraphics()) {
      return;
    }
    if (this.state.isActive && this.state.currentMode === _0x4e6601) {
      this.state.container.visible = false;
      this.state.isActive = false;
      this.state.currentMode = null;
      if (document.getElementById("sector_system_toggle")) {
        document.getElementById("sector_system_toggle").checked = false;
      }
      this.saveSettings();
      return;
    }
    this.state.isActive = true;
    this.state.currentMode = _0x4e6601;
    this.state.container.visible = true;
    if (document.getElementById("sector_system_toggle")) {
      document.getElementById("sector_system_toggle").checked = true;
    }
    if (_0x4e6601 === "sectors") {
      this.drawSectors();
    } else {
      this.drawQuarters();
    }
    this.saveSettings();
  },
  setupKeyboardEvents: function () {
    const _0x1287f3 = {
      83: () => this.toggleMode("sectors"),
      187: () => this.toggleMode("sectors"),
      61: () => this.toggleMode("sectors"),
      88: () => this.toggleMode("quarters")
    };
    document.addEventListener("keydown", _0x3aaf00 => {
      const _0x1605ec = _0x3aaf00.keyCode || _0x3aaf00.which;
      if (_0x1287f3[_0x1605ec]) {
        _0x1287f3[_0x1605ec]();
        if (typeof this.initUserInterface === "function") {
          this.initUserInterface();
        }
      }
    });
  },
  saveSettings: function () {
    try {
      localStorage.setItem("sectorSystemSettings", JSON.stringify(this.settings));
      localStorage.setItem("sectorSystemActive", this.state.isActive ? "1" : "0");
      if (this.state.currentMode) {
        localStorage.setItem("sectorSystemMode", this.state.currentMode);
      }
    } catch (_0x399346) {
      console.error("Error saving sector system settings:", _0x399346);
    }
  },
  loadSettings: function () {
    try {
      const _0x5d62ce = JSON.parse(localStorage.getItem("sectorSystemSettings"));
      if (_0x5d62ce) {
        this.settings = {
          ...this.settings,
          ..._0x5d62ce
        };
      }
      const _0x43fec3 = localStorage.getItem("sectorSystemActive") === "1";
      let _0x3926cf = localStorage.getItem("sectorSystemMode");
      if (!_0x3926cf) {
        _0x3926cf = "sectors";
      }
      this.savedState = {
        isActive: _0x43fec3,
        currentMode: _0x3926cf
      };
    } catch (_0x29ded9) {
      console.error("Error loading sector system settings:", _0x29ded9);
    }
  },
  applySettings: function () {
    if (this.state.isActive && this.state.currentMode) {
      if (this.state.currentMode === "sectors") {
        this.drawSectors();
      } else {
        this.drawQuarters();
      }
    }
  },
  init: function () {
    if (typeof PIXI === "undefined") {
      setTimeout(() => this.init(), 1000);
      return;
    }
    this.loadSettings();
    const _0x22e2e2 = this.initGraphics();
    this.setupKeyboardEvents();
    if (!_0x22e2e2) {
      setTimeout(() => this.init(), 1000);
      return;
    }
    setTimeout(() => {
      if (this.savedState && this.savedState.isActive) {
        this.state.isActive = true;
        this.state.currentMode = this.savedState.currentMode;
        this.state.container.visible = true;
        if (this.state.currentMode === "sectors") {
          this.drawSectors();
        } else {
          this.drawQuarters();
        }
        if (document.getElementById("sector_system_toggle")) {
          document.getElementById("sector_system_toggle").checked = true;
        }
        this.state.restored = true;
        if ($("#sector_system_toggle").length > 0) {
          this.initUserInterface();
        }
      }
    }, 1000);
  },
  initUserInterface: function () {
    function _0x4842f6(_0x4a837e) {
      return "#" + _0x4a837e.toString(16).padStart(6, "0");
    }
    function _0x1db763(_0x183c72) {
      return parseInt(_0x183c72.replace("#", ""), 16);
    }
    if (!this.state.restored && this.savedState && this.savedState.isActive) {
      console.log("Restoring state from UI initialization");
      this.toggleMode(this.savedState.currentMode || "sectors");
      this.state.restored = true;
    }
    const _0x5a843f = () => {
      $("#sector_system_toggle").prop("checked", this.state.isActive);
      $("#sector_display_mode").val(this.state.currentMode || "sectors");
      $("#sector_bg_color").val(_0x4842f6(this.settings.backgroundColor));
      $("#sector_line_color").val(_0x4842f6(this.settings.lineColor));
      $("#sector_bg_opacity").val(this.settings.backgroundAlpha * 100);
      $("#sector_bg_opacity_value").text(Math.round(this.settings.backgroundAlpha * 100) + "%");
      $("#sector_line_opacity").val(this.settings.lineAlpha * 100);
      $("#sector_line_opacity_value").text(Math.round(this.settings.lineAlpha * 100) + "%");
      $("#sector_show_lines").prop("checked", this.settings.showLines);
      if (!this.settings.showLines) {
        $("#sector_lines_options").slideUp(200);
      } else {
        $("#sector_lines_options").slideDown(200);
      }
      if (this.state.isActive) {
        $("#sector_settings_panel").slideDown(300);
      } else {
        $("#sector_settings_panel").slideUp(200);
      }
    };
    $("#sector_system_toggle").off("change").on("change", function () {
      const _0xcbb29f = $(this).prop("checked");
      if (_0xcbb29f) {
        const _0x23dfab = $("#sector_display_mode").val() || "sectors";
        window.sectorSystem.toggleMode(_0x23dfab);
      } else if (window.sectorSystem.state.isActive) {
        window.sectorSystem.toggleMode(window.sectorSystem.state.currentMode);
      }
      _0x5a843f();
    });
    $("#sector_display_mode").off("change").on("change", function () {
      const _0x46591a = $(this).val();
      if (window.sectorSystem.state.isActive) {
        window.sectorSystem.toggleMode(window.sectorSystem.state.currentMode);
        window.sectorSystem.toggleMode(_0x46591a);
        _0x5a843f();
      }
    });
    $("#sector_bg_color").off("change").on("change", function () {
      window.sectorSystem.settings.backgroundColor = _0x1db763($(this).val());
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    $("#sector_line_color").off("change").on("change", function () {
      window.sectorSystem.settings.lineColor = _0x1db763($(this).val());
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    $("#sector_bg_opacity").off("input").on("input", function () {
      const _0x697813 = parseInt($(this).val()) / 100;
      window.sectorSystem.settings.backgroundAlpha = _0x697813;
      $("#sector_bg_opacity_value").text(Math.round(_0x697813 * 100) + "%");
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    $("#sector_line_opacity").off("input").on("input", function () {
      const _0x183030 = parseInt($(this).val()) / 100;
      window.sectorSystem.settings.lineAlpha = _0x183030;
      $("#sector_line_opacity_value").text(Math.round(_0x183030 * 100) + "%");
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    $("#sector_show_lines").off("change").on("change", function () {
      window.sectorSystem.settings.showLines = $(this).prop("checked");
      if (!window.sectorSystem.settings.showLines) {
        $("#sector_lines_options").slideUp(200);
      } else {
        $("#sector_lines_options").slideDown(200);
      }
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    _0x5a843f();
  }
};
var StoreSkinID;
$(document).ready(function () {
  if ($(".store-view-cont").length) {
    $(".store-view-cont").append("<div id=\"idReplaceSkin\"></div>");
    StoreSkinID = $("#idReplaceSkin");
  }
});
var myGameSettings = {
  unlimitedRespawn: false,
  respawnDelay: 50
};
window.laserOptions = {
  enabled: false,
  color: 16766720,
  opacity: 0.5,
  thickness: 0.1
};
window.laserGraphics = null;
const ctx = {
  fontStyle: {
    blanco: new PIXI.TextStyle({
      align: "center",
      fill: "#FF0000",
      fontSize: 14,
      fontWeight: "bold",
      lineJoin: "round",
      stroke: "#FFFFFF",
      strokeThickness: 1.5,
      whiteSpace: "normal",
      wordWrap: true
    })
  }
};
ctx.pointsContainer = new PIXI.Container();
let lastKnownCoords = {
  x: null,
  y: null
};
let blinkTimerId = null;
let removeMarkTimerId = null;
const createCircle = function () {
  if (!window.coords || typeof window.coords.playerX === "undefined" || typeof window.coords.playerY === "undefined") {
    return;
  }
  let _0x1c4870 = "m_2";
  if (lastKnownCoords.x !== null) {
    const _0x1bd08f = Math.sqrt(Math.pow(window.coords.playerX - lastKnownCoords.x, 2) + Math.pow(window.coords.playerY - lastKnownCoords.y, 2));
    if (_0x1bd08f > 100) {
      if (ctx[_0x1c4870]) {
        if (ctx.pointsContainer && ctx.pointsContainer.children.includes(ctx[_0x1c4870])) {
          ctx.pointsContainer.removeChild(ctx[_0x1c4870]);
        }
        ctx[_0x1c4870] = null;
      }
      if (blinkTimerId) {
        clearInterval(blinkTimerId);
        blinkTimerId = null;
      }
      if (removeMarkTimerId) {
        clearTimeout(removeMarkTimerId);
        removeMarkTimerId = null;
      }
    }
  }
  lastKnownCoords.x = window.coords.playerX;
  lastKnownCoords.y = window.coords.playerY;
  if (!ctx[_0x1c4870]) {
    ctx[_0x1c4870] = new PIXI.Text("X", ctx.fontStyle.blanco);
    ctx[_0x1c4870].zIndex = 2;
    ctx[_0x1c4870].alpha = 0.9;
    ctx[_0x1c4870].anchor.set(0.5, 0.5);
    if (ctx.pointsContainer) {
      ctx.pointsContainer.sortableChildren = true;
      ctx.pointsContainer.zIndex = 2;
    }
    if (!blinkTimerId) {
      let _0xa314a7 = true;
      blinkTimerId = setInterval(() => {
        if (ctx[_0x1c4870]) {
          _0xa314a7 = !_0xa314a7;
          ctx[_0x1c4870].visible = _0xa314a7;
        } else {
          clearInterval(blinkTimerId);
          blinkTimerId = null;
        }
      }, 500);
    }
    if (!removeMarkTimerId) {
      removeMarkTimerId = setTimeout(() => {
        if (ctx[_0x1c4870]) {
          if (ctx.pointsContainer && ctx.pointsContainer.children.includes(ctx[_0x1c4870])) {
            ctx.pointsContainer.removeChild(ctx[_0x1c4870]);
          }
          ctx[_0x1c4870] = null;
        }
        if (blinkTimerId) {
          clearInterval(blinkTimerId);
          blinkTimerId = null;
        }
        removeMarkTimerId = null;
      }, 20000);
    }
  }
  if (ctx[_0x1c4870]) {
    ctx[_0x1c4870].x = window.coords.playerX;
    ctx[_0x1c4870].y = window.coords.playerY;
    if (ctx.pointsContainer && !ctx.pointsContainer.children.includes(ctx[_0x1c4870])) {
      ctx.pointsContainer.addChild(ctx[_0x1c4870]);
    }
  }
  if (window.ooo && ooo.Xg && ooo.Xg.Kf && ooo.Xg.Kf.Wg && ooo.Xg.Kf.Wg.Ah && ooo.Xg.Kf.Wg.Ah.Sh) {
    ooo.Xg.Kf.Wg.Ah.Sh.zIndex = 9999;
    if (ooo.Xg.Kf.Wg.Ah.sortableChildren !== true) {
      ooo.Xg.Kf.Wg.Ah.sortableChildren = true;
    }
    if (ooo.Xg.Kf.Wg.sortableChildren !== true) {
      ooo.Xg.Kf.Wg.sortableChildren = true;
    }
  }
};
function _typeof(_0x221171) {
  return (_typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (_0x173e5e) {
    return typeof _0x173e5e;
  } : function (_0xaa4d25) {
    if (_0xaa4d25 && typeof Symbol == "function" && _0xaa4d25.constructor === Symbol && _0xaa4d25 !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof _0xaa4d25;
    }
  })(_0x221171);
}
(function () {
  var _0x3b6284 = {};
  var _0x54e48e = {};
  var _0x29c320 = {};
  var _0x55777a = {};
  _0x29c320.a = function (_0x5f3d83) {
    var _0x3996bf = new String();
    var _0x149f70 = parseInt(_0x5f3d83.substring(0, 2), 16);
    for (var _0x738e87 = 2; _0x738e87 < _0x5f3d83.length; _0x738e87 += 2) {
      var _0x401a0f = parseInt(_0x5f3d83.substring(_0x738e87, _0x738e87 + 2), 16);
      _0x3996bf += String.fromCharCode(_0x401a0f ^ (_0x149f70 = 3793 + _0x149f70 * 4513 & 255));
    }
    ;
    return _0x3996bf;
  };
  _0x29c320.b = function (_0x1d255a) {
    return Function(`return ${_0x1d255a}; `)();
  };
  _0x3b6284.c = _0x29c320.b("window");
  _0x3b6284.d = _0x3b6284.c.document;
  _0x29c320.e = function () {
    return _0x3b6284.c.devicePixelRatio || 1;
  };
  _0x3b6284.c.addEventListener("load", function () {
    let _0x17d5a6 = {
      eie: null,
      joystick: {
        positionMode: "L",
        checked: true,
        size: 90,
        mode: "dynamic",
        position: {
          left: "110px",
          bottom: "110px"
        },
        color: "red",
        pxy: 110
      },
      on: false,
      vj: null,
      uj: null,
      m: null,
      n: null
    };
    var _0x30976b;
    let _0x152ccb = {
      s_l: "https://wormup.in",
      fullscreen: null,
      headshot: 0,
      s_headshot: 0,
      mobile: false,
      mo: 1,
      mo1: {
        x: -1,
        y: -1
      },
      mo2: {
        x: -1,
        y: -1
      },
      s_kill: 0,
      kill: 0,
      died: 0,
      saveGame: false,
      forceUseLocalImages: false,
      localStorageEnabled: true,
      pm: {},
      joystick: _0x17d5a6.joystick,
      j: null,
      pk: 0,
      pk0: "",
      pk1: "",
      pk2: "",
      pk3: "",
      pk4: "",
      pk5: "",
      pk6: "",
      z: 1,
      c_v: 222,
      c_1: "UP",
      c_2: "TeamUP",
      c_3: "wormup",
      c_4: "wormate.io",
      c_5: "please don't copy my code",
      d_1: "VlZBPQ==",
      d_2: "VkdWaGJWVlE=",
      d_3: "ZDI5eWJYVnc=",
      d_4: "VjI5eWJXRjBaUzVwYnc9PQ==",
      d_5: "VUd4bFlYTmxJR1J2YmlkMElHTnZjSGtnYlhrZ1kyOWtaUT09",
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: "",
      g: 36,
      s_w: false,
      s_n: "",
      v_z: 0,
      h: false,
      sn: true,
      s: false,
      hz: false,
      fz: true,
      tt: false,
      vh: false,
      vp: false,
      iq: false,
      ctrl: false,
      r1: true,
      sc: 0,
      wi: 0,
      to: 10,
      sm: 20,
      pi: "",
      pn: "",
      se: {
        a: [],
        b: [],
        c: [],
        d: [],
        e: [],
        f: [],
        g: [],
        h: [],
        i: [],
        j: [],
        k: []
      },
      st: false,
      hh: 0,
      sh: [],
      ws: [],
      we: [],
      wm: [],
      wg: [],
      wh: [],
      sg: [],
      gg: null,
      ig: -1,
      so: 1,
      re: false,
      dg: null
    };
    let _0x52f289 = localStorage.getItem("SaveGameup");
    if (_0x52f289 && _0x52f289 !== "null") {
      let _0x49b274 = JSON.parse(_0x52f289);
      for (let _0x17797c in _0x49b274) {
        _0x152ccb[_0x17797c] = _0x49b274[_0x17797c];
      }
    }
    ;
    if (!_0x152ccb.favoriteSkins) {
      _0x152ccb.favoriteSkins = [];
      localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
    }
    if (_0x152ccb.currentFavSkinIndex === undefined) {
      _0x152ccb.currentFavSkinIndex = 0;
      localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
    }
    if (!_0x152ccb.selectedHats) {
      _0x152ccb.selectedHats = [];
      localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
    }
    if (_0x152ccb.currentHatIndex === undefined) {
      _0x152ccb.currentHatIndex = 0;
      localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
    }
    if (!window.globalHatTextureCache) {
      window.globalHatTextureCache = {};
    }
    try {
      if (localStorage.SaveGameXT) {
        const _0x57ff2a = JSON.parse(localStorage.SaveGameXT);
        for (const _0x48f638 in _0x57ff2a) {
          if (wormupObjects.hasOwnProperty(_0x48f638)) {
            wormupObjects[_0x48f638] = _0x57ff2a[_0x48f638];
          }
        }
      }
    } catch (_0x38269d) {
      console.error("Error loading settings:", _0x38269d);
    }
    ;
    function _0x4bcdb5() {
      try {
        if (typeof localStorage === "undefined") {
          console.error("Ø§Ù„ØªØ®Ø²ÙŠÙ† Ø§Ù„Ù…Ø­Ù„ÙŠ ØºÙŠØ± Ù…ØªØ§Ø­");
          return false;
        }
        var _0x5e9d84 = localStorage.getItem("wupi");
        var _0x11e118 = localStorage.getItem("wupit");
        if (_0x5e9d84 && _0x11e118) {
          if (typeof _0x152ccb !== "undefined") {
            _0x152ccb.v_z = _0x11e118;
            _0x152ccb.forceUseLocalImages = true;
            localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
          }
          return true;
        } else {
          console.log("Ù„Ø§ ØªÙˆØ¬Ø¯ ØµÙˆØ± Ù…Ø­Ù„ÙŠØ©");
          return false;
        }
      } catch (_0x2f5c94) {
        console.error("Ø®Ø·Ø£ ÙÙŠ Ø§Ù„ØªØ®Ø²ÙŠÙ† Ø§Ù„Ù…Ø­Ù„ÙŠ:", _0x2f5c94);
        return false;
      }
    }
    _0x4bcdb5();
    let _0x19d5a8 = function () {
      let _0x452352 = false;
      _0x152ccb.mobile = false;
      var _0x5aa641 = navigator.userAgent || navigator.vendor || window.opera;
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(_0x5aa641) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(_0x5aa641.substr(0, 4))) {
        _0x452352 = true;
        _0x152ccb.mobile = true;
      }
      return _0x452352;
    };
    let _0x4ac689 = _0x152ccb.z || 1;
    let _0x35e908 = _0x152ccb.z;
    Object.defineProperty(_0x152ccb, "z", {
      get: function () {
        return _0x35e908;
      },
      set: function (_0x1c37fd) {
        if (Math.abs(_0x1c37fd - _0x35e908) > 0.1) {
          console.log("Zoom changing from", _0x35e908, "to", _0x1c37fd);
          console.trace();
        }
        _0x35e908 = _0x1c37fd;
      }
    });
    let _0x2eacdc = function (_0x64d056) {
      _0x152ccb.joystick ||= _0x17d5a6.joystick;
      _0x152ccb.joystick.checked = _0x64d056.checked;
      localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
    };
    let _0x15388f = function (_0x284b27) {
      _0x152ccb.joystick ||= _0x17d5a6.joystick;
      _0x152ccb.joystick.color = _0x284b27.value;
      localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
    };
    let _0x2f6549 = function (_0x5f45fc) {
      _0x152ccb.joystick ||= _0x17d5a6.joystick;
      _0x152ccb.joystick.mode = _0x5f45fc.value;
      localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
    };
    let _0x2fac3b = function (_0x2eaf08) {
      _0x152ccb.joystick ||= _0x17d5a6.joystick;
      _0x152ccb.joystick.position = {
        left: "75px",
        bottom: "75px"
      };
      if (_0x2eaf08.value === "R") {
        _0x152ccb.joystick.position = {
          right: "75px",
          bottom: "75px"
        };
      }
      _0x152ccb.joystick.positionMode = _0x2eaf08.value;
      localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
    };
    let _0x55e6fd = function (_0xaca631) {
      _0x152ccb.joystick ||= _0x17d5a6.joystick;
      _0x152ccb.joystick.position = {
        left: (parseInt(_0xaca631.value) + 10).toString() + "px",
        bottom: _0xaca631.value + "px"
      };
      if (_0x152ccb.joystick.positionMode === "R") {
        _0x152ccb.joystick.position = {
          right: (parseInt(_0xaca631.value) + 10).toString() + "px",
          bottom: _0xaca631.value + "px"
        };
      }
      _0x152ccb.joystick.pxy = _0xaca631.value;
      localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
    };
    let _0x3d7857 = function (_0x4a6f1f) {
      _0x152ccb.joystick ||= _0x17d5a6.joystick;
      _0x152ccb.joystick.size = _0x4a6f1f.value;
      localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
    };
    let _0x33000c = function (_0x2320a2, _0x297be7, _0x312b0b, _0x5c08eb, _0x533e66, _0x2064f7) {
      let _0x5c0d0f = {
        a: "",
        b: 0,
        c: ""
      };
      if (_0x2320a2 > _0x152ccb.g * 100 + 100 || _0x2320a2 < _0x152ccb.g * 10 || _0x2320a2 === undefined) {
        _0x152ccb.a = _0x2320a2;
        if (_0x2320a2 === undefined) {
          _0x152ccb.a = Math.floor(Math.random() * (_0x152ccb.g / 9) + (_0x152ccb.g - _0x152ccb.g / 9));
        }
        _0x5c0d0f.a = "00";
      } else {
        _0x152ccb.a = _0x2320a2 - _0x152ccb.g * 10;
        _0x5c0d0f.b = _0x152ccb.a;
        _0x152ccb.a = _0x152ccb.a % (_0x152ccb.g / 9);
        _0x5c0d0f.b = (_0x5c0d0f.b - _0x152ccb.a) / (_0x152ccb.g / 9) + 1;
        _0x152ccb.a = _0x152ccb.a + (_0x152ccb.g - _0x152ccb.g / 9);
        _0x5c0d0f.a = _0x5c0d0f.b.toString(_0x152ccb.g).padStart(2, 0);
      }
      if (_0x297be7 > _0x152ccb.g * 20 || _0x297be7 < _0x152ccb.g / 9 * 100 || _0x297be7 === undefined) {
        if (_0x297be7 > _0x152ccb.g * 20 && _0x297be7 < _0x152ccb.g * 30) {
          _0x152ccb.b = _0x297be7 - _0x152ccb.g * 20;
          _0x5c0d0f.a = _0x5c0d0f.a + _0x152ccb.b.toString(_0x152ccb.g);
          _0x152ccb.b = 0;
          _0x5c0d0f.c = _0x5c0d0f.c + "1";
        } else {
          _0x152ccb.b = _0x297be7;
          if (_0x297be7 === undefined) {
            _0x152ccb.b = 0;
          }
          _0x5c0d0f.a = _0x5c0d0f.a + "0";
          _0x5c0d0f.c = _0x5c0d0f.c + "0";
        }
      } else {
        _0x152ccb.b = _0x297be7 - _0x152ccb.g / 9 * 100 + _0x152ccb.g / _0x152ccb.g;
        _0x5c0d0f.a = _0x5c0d0f.a + _0x152ccb.b.toString(_0x152ccb.g);
        _0x152ccb.b = 0;
        _0x5c0d0f.c = _0x5c0d0f.c + "0";
      }
      if (_0x312b0b > _0x152ccb.g * 20 || _0x312b0b < _0x152ccb.g / 9 * 100 || _0x312b0b === undefined) {
        if (_0x312b0b > _0x152ccb.g * 20 && _0x312b0b < _0x152ccb.g * 30) {
          _0x152ccb.c = _0x312b0b - _0x152ccb.g * 20;
          _0x5c0d0f.a = _0x5c0d0f.a + _0x152ccb.c.toString(_0x152ccb.g);
          _0x152ccb.c = 0;
          _0x5c0d0f.c = _0x5c0d0f.c + "1";
        } else {
          _0x152ccb.c = _0x312b0b;
          if (_0x312b0b === undefined) {
            _0x152ccb.c = 0;
          }
          _0x5c0d0f.a = _0x5c0d0f.a + "0";
          _0x5c0d0f.c = _0x5c0d0f.c + "0";
        }
      } else {
        _0x152ccb.c = _0x312b0b - _0x152ccb.g / 9 * 100 + _0x152ccb.g / _0x152ccb.g;
        _0x5c0d0f.a = _0x5c0d0f.a + _0x152ccb.c.toString(_0x152ccb.g);
        _0x152ccb.c = 0;
        _0x5c0d0f.c = _0x5c0d0f.c + "0";
      }
      if (_0x5c08eb > _0x152ccb.g * 20 || _0x5c08eb < _0x152ccb.g / 9 * 100 || _0x5c08eb === undefined) {
        if (_0x5c08eb > _0x152ccb.g * 20 && _0x5c08eb < _0x152ccb.g * 30) {
          _0x152ccb.d = _0x5c08eb - _0x152ccb.g * 20;
          if (_0x152ccb.d.toString(_0x152ccb.g) === "N") {
            _0x5c0d0f.a = _0x5c0d0f.a + "0";
          } else {
            _0x5c0d0f.a = _0x5c0d0f.a + _0x152ccb.d.toString(_0x152ccb.g);
          }
          _0x152ccb.d = 0;
          _0x5c0d0f.c = _0x5c0d0f.c + "1";
        } else {
          _0x152ccb.d = _0x5c08eb;
          if (_0x5c08eb === undefined) {
            _0x152ccb.d = 0;
          }
          _0x5c0d0f.a = _0x5c0d0f.a + "0";
          _0x5c0d0f.c = _0x5c0d0f.c + "0";
        }
      } else {
        _0x152ccb.d = _0x5c08eb - _0x152ccb.g / 9 * 100 + _0x152ccb.g / _0x152ccb.g;
        if (_0x152ccb.d.toString(_0x152ccb.g) === "N") {
          _0x5c0d0f.a = _0x5c0d0f.a + "0";
        } else {
          _0x5c0d0f.a = _0x5c0d0f.a + _0x152ccb.d.toString(_0x152ccb.g);
        }
        _0x152ccb.d = 0;
        _0x5c0d0f.c = _0x5c0d0f.c + "0";
      }
      if (_0x533e66 > _0x152ccb.g * 20 || _0x533e66 < _0x152ccb.g / 9 * 100 || _0x533e66 === undefined) {
        if (_0x533e66 > _0x152ccb.g * 20 && _0x533e66 < _0x152ccb.g * 30) {
          _0x5c0d0f.b = _0x152ccb.g / _0x152ccb.g;
          if (_0x533e66 <= _0x152ccb.g * 20 + (_0x152ccb.g - 1)) {
            _0x152ccb.e = _0x533e66 - _0x152ccb.g * 20;
          } else if (_0x533e66 <= _0x152ccb.g * 20 + (_0x152ccb.g - 1) * 2) {
            _0x5c0d0f.b = _0x5c0d0f.b * 2;
            _0x152ccb.e = _0x533e66 - _0x152ccb.g * 20 - (_0x152ccb.g - 1);
          } else if (_0x533e66 <= _0x152ccb.g * 20 + (_0x152ccb.g - 1) * 3) {
            _0x152ccb.e = _0x533e66 - _0x152ccb.g * 20 - (_0x152ccb.g - 1) * 2;
          } else if (_0x533e66 <= _0x152ccb.g * 20 + (_0x152ccb.g - 1) * 4) {
            _0x5c0d0f.b = _0x5c0d0f.b * 2;
            _0x152ccb.e = _0x533e66 - _0x152ccb.g * 20 - (_0x152ccb.g - 1) * 3;
          } else {
            _0x152ccb.e = 0;
          }
          if (_0x152ccb.e >= _0x152ccb.g) {
            _0x5c0d0f.b = 2;
            _0x152ccb.e = _0x152ccb.e - (_0x152ccb.g - 1);
          }
          _0x5c0d0f.a = _0x5c0d0f.a + _0x152ccb.e.toString(_0x152ccb.g);
          _0x152ccb.e = 0;
          _0x5c0d0f.c = _0x5c0d0f.c + "1";
        } else {
          _0x152ccb.e = _0x533e66;
          if (_0x533e66 === undefined) {
            _0x152ccb.e = 0;
          }
          _0x5c0d0f.a = _0x5c0d0f.a + "0";
          _0x5c0d0f.c = _0x5c0d0f.c + "0";
          _0x5c0d0f.b = 0;
        }
      } else {
        _0x5c0d0f.b = _0x152ccb.g / _0x152ccb.g;
        if (_0x533e66 - _0x152ccb.g / 9 * 100 + 1 >= _0x152ccb.g) {
          _0x152ccb.e = _0x533e66 - (_0x152ccb.g / 9 * 100 + (_0x152ccb.g - 1));
          _0x5c0d0f.b = _0x5c0d0f.b * 2;
        } else {
          _0x152ccb.e = _0x533e66 - _0x152ccb.g / 9 * 100 + _0x5c0d0f.b;
        }
        _0x5c0d0f.a = _0x5c0d0f.a + _0x152ccb.e.toString(_0x152ccb.g);
        _0x152ccb.e = 0;
        _0x5c0d0f.c = _0x5c0d0f.c + "0";
      }
      if (_0x5c0d0f.a == "000000") {
        _0x152ccb.f = _0x2064f7.substr(0, 22).padEnd(22);
      } else {
        let _0x24dbd2 = parseInt(_0x5c0d0f.c, 2);
        if (_0x533e66 > 790 && _0x533e66 <= 860) {
          _0x24dbd2 += 16;
        }
        if (_0x5c0d0f.b <= 1) {
          _0x5c0d0f.a = _0x5c0d0f.a.substr(0, 5) + "." + _0x5c0d0f.a.substr(5, 1);
        } else {
          _0x5c0d0f.a = _0x5c0d0f.a.substr(0, 4) + "." + _0x5c0d0f.a.substr(4, 2);
        }
        if (_0x2064f7 == "") {
          _0x2064f7 = ".                       .";
        }
        if (_0x5c0d0f.c == "0000") {
          if (_0x2064f7.substr(23, 1) == ".") {
            _0x2064f7 = _0x2064f7.substr(0, 23).padEnd(23) + " " + _0x2064f7.substr(24, 1).padEnd(1);
          }
          _0x152ccb.f = (_0x2064f7.length >= 32 ? _0x2064f7.substr(0, 25) : _0x2064f7.substr(0, 25).padEnd(25)) + _0x5c0d0f.a;
        } else {
          _0x152ccb.f = (_0x2064f7.length >= 32 ? _0x2064f7.substr(0, 23) : _0x2064f7.substr(0, 23).padEnd(23)) + "." + _0x24dbd2.toString(_0x152ccb.g) + _0x5c0d0f.a;
        }
        _0x152ccb.f = _0x152ccb.f.replaceAll(" ", "_");
      }
    };
    let _0x4c2f41 = function (_0x3a9eb4) {
      let _0x2ca96b;
      try {
        _0x152ccb.joystick ||= _0x17d5a6.joystick;
        if (_0x19d5a8() && _0x3a9eb4 && _0x152ccb.joystick.checked) {
          (_0x2ca96b = nipplejs.create(_0x152ccb.joystick)).on("move", function (_0x30442a, _0x30331d) {
            _0x17d5a6.eie.fo = _0x30331d.angle.radian <= Math.PI ? _0x30331d.angle.radian * -1 : Math.PI - (_0x30331d.angle.radian - Math.PI);
          });
        }
        return _0x2ca96b;
      } catch (_0x561ec5) {
        console.error(_0x561ec5);
      }
    };
    let _0x196ffa = function (_0x2b4f82) {
      let _0xf17e87 = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: "",
        g: 0,
        h: "",
        i: ""
      };
      let _0x25665b = 0;
      _0xf17e87.h = _0x2b4f82.substr(-9);
      if (_0xf17e87.h.substr(0, 1) != ".") {
        _0xf17e87.i = "0000";
      } else if ((_0x25665b = parseInt(_0xf17e87.h.substr(1, 1), _0x152ccb.g)) > 15) {
        _0x25665b -= 16;
        _0xf17e87.i = _0x25665b.toString(2).padStart(4, 0);
      } else {
        _0xf17e87.i = _0x25665b.toString(2).padStart(4, 0);
        _0x25665b = 0;
      }
      _0xf17e87.f = _0x2b4f82.substr(-7);
      if (_0xf17e87.f.substr(0, 2) != "00") {
        _0xf17e87.a = parseInt(_0xf17e87.f.substr(0, 2), _0x152ccb.g);
        _0xf17e87.a = (_0xf17e87.a - 1) * (_0x152ccb.g / 9) + _0x152ccb.g * 10 - (_0x152ccb.g - 4);
      }
      if (_0xf17e87.f.substr(5, 1) == ".") {
        if (_0xf17e87.f.substr(6, 1) != "0") {
          _0xf17e87.e = parseInt(_0xf17e87.f.substr(6, 1), _0x152ccb.g);
          if (_0xf17e87.i.substr(3, 1) != "0") {
            if (_0x25665b > 0) {
              _0xf17e87.e = _0xf17e87.e + _0x152ccb.g * 20 + (_0x152ccb.g - 1) * 2;
            } else {
              _0xf17e87.e = _0xf17e87.e + _0x152ccb.g * 20;
            }
          } else {
            _0xf17e87.e = _0xf17e87.e - 1 + _0x152ccb.g / 9 * 100;
          }
        }
      } else {
        _0xf17e87.e = parseInt(_0xf17e87.f.substr(6, 1), _0x152ccb.g);
        if (_0xf17e87.i.substr(3, 1) != "0") {
          if (_0x25665b > 0) {
            _0xf17e87.e = _0xf17e87.e + _0x152ccb.g * 20 + (_0x152ccb.g - 1) * 3;
          } else {
            _0xf17e87.e = _0xf17e87.e + _0x152ccb.g * 20 + (_0x152ccb.g - 1);
          }
        } else {
          _0xf17e87.e = _0xf17e87.e + (_0x152ccb.g / 9 * 100 + (_0x152ccb.g - 1));
        }
      }
      _0xf17e87.f = _0xf17e87.f.replace(".", "");
      if (_0xf17e87.f.substr(2, 1) != "0") {
        _0xf17e87.b = parseInt(_0xf17e87.f.substr(2, 1), _0x152ccb.g);
        if (_0xf17e87.i.substr(0, 1) != "0") {
          _0xf17e87.b = _0xf17e87.b + _0x152ccb.g * 20;
        } else {
          _0xf17e87.b = _0xf17e87.b - 1 + _0x152ccb.g / 9 * 100;
        }
      }
      if (_0xf17e87.f.substr(3, 1) != "0") {
        _0xf17e87.c = parseInt(_0xf17e87.f.substr(3, 1), _0x152ccb.g);
        if (_0xf17e87.i.substr(1, 1) != "0") {
          _0xf17e87.c = _0xf17e87.c + _0x152ccb.g * 20;
        } else {
          _0xf17e87.c = _0xf17e87.c - 1 + _0x152ccb.g / 9 * 100;
        }
      }
      if (_0xf17e87.f.substr(4, 1) != "0") {
        _0xf17e87.d = parseInt(_0xf17e87.f.substr(4, 1), _0x152ccb.g);
        if (_0xf17e87.i.substr(2, 1) != "0") {
          _0xf17e87.d = _0xf17e87.d + _0x152ccb.g * 20;
        } else {
          _0xf17e87.d = _0xf17e87.d - 1 + _0x152ccb.g / 9 * 100;
        }
      }
      return _0xf17e87;
    };
    let _0x4b569b = function (_0xf3cfd6) {
      return !(_0xf3cfd6 > _0x152ccb.g * 30) && !(_0xf3cfd6 < _0x152ccb.g / 9 * 100) || _0xf3cfd6 == 0;
    };
    let _0x2f72b0 = function (_0x594dae) {
      return /^(.{25})(\w{5}\.\w{1})$/.test(_0x594dae) || /^(.{25})(\w{4}\.\w{2})$/.test(_0x594dae);
    };
    let _0x26bcbf = function (_0x39183b) {
      _0x39183b = _0x39183b.replaceAll("_", " ");
      if (/^(.{25})(\w{7})$/.test(_0x39183b)) {
        for (_0x39183b = _0x39183b.substr(0, 15).trim(); _0x39183b.substr(_0x39183b.length - 1, 1) == ".";) {
          _0x39183b = _0x39183b.substr(0, _0x39183b.length - 1);
        }
        ;
        return _0x39183b;
      }
      ;
      if (/^(.{25})(\w{5}\.\w{1})$/.test(_0x39183b) || /^(.{25})(\w{4}\.\w{2})$/.test(_0x39183b)) {
        if (_0x39183b.substr(-9).substr(0, 1) != ".") {
          return _0x39183b.substr(0, 25).trim();
        } else {
          return _0x39183b.substr(0, 23).trim();
        }
      } else {
        return _0x39183b;
      }
    };
    _0x152ccb.loading = true;
    var _0x350f63 = localStorage.getItem("oco");
    localStorage.setItem("ccg_0", "Kill and Headshot stats will be removed?");
    localStorage.setItem("ccg_1", "There was a problem connecting!");
    localStorage.setItem("ccg_2", "Your account has been locked.");
    var _0x15a4c7 = localStorage.getItem("wupsw");
    var _0x2f0906 = localStorage.getItem("wupi") != null ? localStorage.getItem("wupi").split(",") : localStorage.getItem("wupi");
    var _0x25bb3b = localStorage.getItem("wupit");
    var _0x3261d8 = localStorage.getItem("custom_wear");
    var _0x2f0d22 = localStorage.getItem("custom_skin");
    $("<input type=\"hidden\" id=\"port_id\" value=\"\">").insertAfter(".description-text");
    $("<input type=\"hidden\" id=\"port_id_s\" value=\"\">").insertAfter(".description-text");
    $("<input type=\"hidden\" id=\"port_name\" value=\"\">").insertAfter(".description-text");
    $("<input type=\"hidden\" id=\"port_name_s\" value=\"\">").insertAfter(".description-text");
    $("#mm-action-buttons").hover(function () {
      $("#port_id").val("");
      $("#port_name").val("");
    });
    $("#final-share-fb").css("display", "none");
    $("#unl6wj4czdl84o9b").css("display", "none");
    $("#mm-action-guest").css("display", "none");
    $("#mm-menu-cont").css("display", "block");
    $("#mm-bottom-buttons").css("display", "block");
    $("#mm-player-info").css("display", "block");
    var _0xa6a184 = $("<img>", {
      id: "orange-frame",
      src: _0x152ccb.s_l + "/images/cors-proxy.php?img=img/orange-frame.png",
      alt: "orange-frame"
    });
    $("#mm-player-avatar").after(_0xa6a184);
    $("#orange-frame").addClass("position-left");
    $("#mm-player-info").css("display", "block");
    $("#relojHelp").css("position", "absolute");
    $("#relojHelp").css("top", "12px");
    $("#relojHelp").css("left", "5px");
    $("#delete-account-view").css("display", "none");
    var _0x1b257c = null;
    var _0x1b6902 = null;
    var _0x322580 = false;
    var _0x2a33be = 55;
    var _0x2ce316 = 1;
    var _0x2b9cbf = true;
    if (_0x2f0906 && _0x25bb3b && _0x25bb3b == _0x152ccb.v_z) ;else {
      fetch(_0x152ccb.s_l + "/store/indexx.php", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          img: "i2"
        })
      }).then(async function (_0x44e54b) {
        _0x2f0906 = (_0x44e54b = await _0x44e54b.json()).i.split(".");
        localStorage.setItem("wupi", _0x2f0906);
        localStorage.setItem("wupit", _0x44e54b.vs);
        _0x152ccb.v_z = _0x44e54b.vs;
        localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
        window.location.reload();
      }).catch(function (_0x2caaa1) {});
    }
    ;
    var _0x5c6eb6 = PIXI.Texture.from(_0x152ccb.s_l + "/get_store.php?item=close_q.png");
    var _0x331041 = PIXI.Texture.from(_0x152ccb.s_l + "/get_store.php?item=open_q.png");
    var _0x3f2ad0 = PIXI.Texture.from(_0x152ccb.s_l + "/get_store.php?item=close_w.png");
    var _0xf7489c = PIXI.Texture.from(_0x152ccb.s_l + "/get_store.php?item=open_w.png");
    var _0x1c9717 = PIXI.Texture.from(_0x152ccb.s_l + "/get_store.php?item=close_z.png");
    var _0x4fedc5 = PIXI.Texture.from(_0x152ccb.s_l + "/get_store.php?item=open_z.png");
    var _0x898b02 = PIXI.Texture.from(_0x152ccb.s_l + "/get_store.php?item=z_i.png");
    var _0xcaa7e2 = PIXI.Texture.from(_0x152ccb.s_l + "/get_store.php?item=z_o.png");
    var _0x5d383d = new PIXI.Sprite(_0x5c6eb6);
    _0x5d383d.buttonMode = true;
    _0x5d383d.anchor.set(0.5);
    _0x5d383d.x = -65;
    _0x5d383d.y = 25;
    _0x5d383d.interactive = true;
    _0x5d383d.buttonMode = true;
    var _0x27b449 = new PIXI.Sprite(_0x3f2ad0);
    _0x27b449.buttonMode = true;
    _0x27b449.anchor.set(0.5);
    _0x27b449.x = -33;
    _0x27b449.y = 25;
    _0x27b449.interactive = true;
    _0x27b449.buttonMode = true;
    var _0x376b81 = new PIXI.Sprite(_0x1c9717);
    _0x376b81.buttonMode = true;
    _0x376b81.anchor.set(0.5);
    _0x376b81.x = -1;
    _0x376b81.y = 25;
    _0x376b81.interactive = true;
    _0x376b81.buttonMode = true;
    var _0x37680f = new PIXI.Sprite(_0xcaa7e2);
    _0x37680f.buttonMode = true;
    _0x37680f.anchor.set(0.5);
    _0x37680f.x = -1;
    _0x37680f.y = 25;
    _0x37680f.interactive = true;
    _0x37680f.buttonMode = true;
    var _0x3d1573 = new PIXI.Sprite(_0x898b02);
    _0x3d1573.buttonMode = true;
    _0x3d1573.anchor.set(0.5);
    _0x3d1573.x = -33;
    _0x3d1573.y = 25;
    _0x3d1573.interactive = true;
    _0x3d1573.buttonMode = true;
    _0x27b449.alpha = 0.25;
    _0x5d383d.alpha = 0.25;
    _0x376b81.alpha = 0.25;
    _0x3d1573.alpha = 0.25;
    _0x37680f.alpha = 0.25;
    var _0x24939d = new PIXI.Text("SRV UP", {
      fontFamily: "PTSans",
      fill: "#fff009",
      fontSize: 12
    });
    _0x24939d.anchor.x = 0.5;
    _0x24939d.position.x = 110;
    var _0x5adfc2 = document.getElementById("game-cont");
    var _0x52777b = document.getElementById("game-view");
    var _0x1ee876 = $("#mm-params-game-mode");
    _0x3b6284.d.getElementById("game-wrap").style.display = "block";
    (function (_0x3d080b, _0x105f68, _0x3ac05a) {
      function _0x343f1e(_0x2dd2e7, _0x5ad458) {
        return _typeof(_0x2dd2e7) === _0x5ad458;
      }
      function _0x8f78cf() {
        if (_typeof(_0x105f68.createElement) != "function") {
          return _0x105f68.createElement(arguments[0]);
        } else if (_0xfe4be3) {
          return _0x105f68.createElementNS.call(_0x105f68, "http://www.w3.org/2000/svg", arguments[0]);
        } else {
          return _0x105f68.createElement.apply(_0x105f68, arguments);
        }
      }
      var _0x1f467a = [];
      var _0xc2943a = [];
      var _0x31f14a = {
        _version: "3.3.1",
        _config: {
          classPrefix: "",
          enableClasses: true,
          enableJSClass: true,
          usePrefixes: true
        },
        _q: [],
        on: function (_0x571480, _0x11359d) {
          var _0x3dd719 = this;
          setTimeout(function () {
            _0x11359d(_0x3dd719[_0x571480]);
          }, 0);
        },
        addTest: function (_0xdf6314, _0x31c164, _0x4c4106) {
          _0xc2943a.push({
            name: _0xdf6314,
            fn: _0x31c164,
            options: _0x4c4106
          });
        },
        addAsyncTest: function (_0x20fab3) {
          _0xc2943a.push({
            name: null,
            fn: _0x20fab3
          });
        }
      };
      function _0x5d5ceb() {}
      _0x5d5ceb.prototype = _0x31f14a;
      _0x5d5ceb = new _0x5d5ceb();
      var _0x482b55 = false;
      try {
        _0x482b55 = "WebSocket" in _0x3d080b && _0x3d080b.WebSocket.CLOSING === 2;
      } catch (_0x2b9071) {}
      ;
      _0x5d5ceb.addTest("websockets", _0x482b55);
      var _0x4ea66c = _0x105f68.documentElement;
      var _0xfe4be3 = _0x4ea66c.nodeName.toLowerCase() === "svg";
      _0x5d5ceb.addTest("canvas", function () {
        var _0x1ede0b = _0x8f78cf("canvas");
        return !!_0x1ede0b.getContext && !!_0x1ede0b.getContext("2d");
      });
      _0x5d5ceb.addTest("canvastext", function () {
        return _0x5d5ceb.canvas !== false && _typeof(_0x8f78cf("canvas").getContext("2d").fillText) == "function";
      });
      (function () {
        var _0x2ab38b;
        var _0x5def83;
        var _0x5b2cb6;
        var _0x44fa05;
        var _0x5cb513;
        var _0x2d3578;
        var _0xc9fe6f;
        for (var _0x5a5e5f in _0xc2943a) {
          if (_0xc2943a.hasOwnProperty(_0x5a5e5f)) {
            _0x2ab38b = [];
            if ((_0x5def83 = _0xc2943a[_0x5a5e5f]).name && (_0x2ab38b.push(_0x5def83.name.toLowerCase()), _0x5def83.options && _0x5def83.options.aliases && _0x5def83.options.aliases.length)) {
              for (_0x5b2cb6 = 0; _0x5b2cb6 < _0x5def83.options.aliases.length; _0x5b2cb6++) {
                _0x2ab38b.push(_0x5def83.options.aliases[_0x5b2cb6].toLowerCase());
              }
            }
            ;
            _0x44fa05 = _0x343f1e(_0x5def83.fn, "function") ? _0x5def83.fn() : _0x5def83.fn;
            _0x5cb513 = 0;
            for (; _0x5cb513 < _0x2ab38b.length; _0x5cb513++) {
              if ((_0xc9fe6f = (_0x2d3578 = _0x2ab38b[_0x5cb513]).split(".")).length === 1) {
                _0x5d5ceb[_0xc9fe6f[0]] = _0x44fa05;
              } else {
                if (!!_0x5d5ceb[_0xc9fe6f[0]] && !(_0x5d5ceb[_0xc9fe6f[0]] instanceof Boolean)) {
                  _0x5d5ceb[_0xc9fe6f[0]] = new Boolean(_0x5d5ceb[_0xc9fe6f[0]]);
                }
                _0x5d5ceb[_0xc9fe6f[0]][_0xc9fe6f[1]] = _0x44fa05;
              }
              _0x1f467a.push((_0x44fa05 ? "" : "no-") + _0xc9fe6f.join("-"));
            }
          }
        }
      })();
      (function (_0x592bbd) {
        var _0x58a7e8 = _0x4ea66c.className;
        var _0x7e7b1b = _0x5d5ceb._config.classPrefix || "";
        if (_0xfe4be3) {
          _0x58a7e8 = _0x58a7e8.baseVal;
        }
        if (_0x5d5ceb._config.enableJSClass) {
          var _0xa43515 = RegExp("(^|\\s)" + _0x7e7b1b + "no-js(\\s|$)");
          _0x58a7e8 = _0x58a7e8.replace(_0xa43515, "$1" + _0x7e7b1b + "js$2");
        }
        ;
        if (_0x5d5ceb._config.enableClasses) {
          _0x58a7e8 += " " + _0x7e7b1b + _0x592bbd.join(" " + _0x7e7b1b);
          if (_0xfe4be3) {
            _0x4ea66c.className.baseVal = _0x58a7e8;
          } else {
            _0x4ea66c.className = _0x58a7e8;
          }
        }
      })(_0x1f467a);
      delete _0x31f14a.addTest;
      delete _0x31f14a.addAsyncTest;
      for (var _0x173ea2 = 0; _0x173ea2 < _0x5d5ceb._q.length; _0x173ea2++) {
        _0x5d5ceb._q[_0x173ea2]();
      }
      ;
      _0x3d080b.Modernizr = _0x5d5ceb;
    })(window, document);
    if (!Modernizr.websockets || !Modernizr.canvas || !Modernizr.canvastext) {
      _0x3b6284.d.getElementById("error-view").style.display = "block";
      return;
    }
    ;
    _0x55777a.f = {
      g: function (_0x159d51, _0x335666, _0x45190e) {
        _0x159d51.stop();
        _0x159d51.fadeIn(_0x335666, _0x45190e);
      },
      h: function (_0x1a6d15, _0x230c3c, _0x154900) {
        _0x1a6d15.stop();
        _0x1a6d15.fadeOut(_0x230c3c, _0x154900);
      }
    };
    _0x55777a.i = _0x29c320.b("WebSocket");
    _0x55777a.j = _0x29c320.b("Float32Array");
    _0x1f9115 = (_0x3950de = _0x29c320.b("PIXI")).BLEND_MODES;
    _0x535226 = _0x3950de.WRAP_MODES;
    _0x55777a.k = {
      l: _0x3950de.Container,
      m: _0x3950de.BaseTexture,
      n: _0x3950de.Texture,
      o: _0x3950de.Renderer,
      p: _0x3950de.Graphics,
      q: _0x3950de.Shader,
      r: _0x3950de.Rectangle,
      s: _0x3950de.Sprite,
      t: _0x3950de.Text,
      u: _0x3950de.Geometry,
      v: _0x3950de.Mesh,
      w: {
        z: _0x1f9115.ADD,
        A: _0x1f9115.SCREEN,
        B: _0x1f9115.MULTIPLY
      },
      C: {
        D: _0x535226.REPEAT
      },
      F: {
        G: function (_0x5508db) {
          var _0x5e2502 = _0x5508db.parent;
          if (_0x5e2502 != null) {
            _0x5e2502.removeChild(_0x5508db);
          }
        }
      }
    };
    _0x54e48e.H = {
      I: _0x3b6284.c.runtimeHash,
      J: "https://gateway.wormate.io",
      K: "https://resources.wormate.io",
      L: "/images/linelogo-valday2024.png",
      M: "/images/guest-avatar-valday2024.png",
      N: "/images/confetti-valday2024.png",
      O: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
    };
    _0x54e48e.H.P = ((_0x1fae9e = _0x3b6284.c.I18N_LANG) || (_0x1fae9e = "en"), _0x1fae9e);
    _0x54e48e.H.Q = function () {
      var _0xd35bf;
      switch (_0x54e48e.H.P) {
        case "uk":
          _0xd35bf = "uk_UA";
          break;
        case "de":
          _0xd35bf = "de_DE";
          break;
        case "fr":
          _0xd35bf = "fr_FR";
          break;
        case "es":
          _0xd35bf = "es_ES";
          break;
        default:
          _0xd35bf = "en_US";
      }
      ;
      return _0xd35bf;
    }();
    moment.locale(_0x54e48e.H.Q);
    ooo = null;
    _0x54e48e.S = 6.283185307179586;
    _0x54e48e.T = 3.141592653589793;
    _0x13a40d = _0x3b6284.c.I18N_MESSAGES;
    _0x29c320.U = function (_0x466698) {
      return _0x13a40d[_0x466698];
    };
    _0x29c320.V = function (_0x52f86e) {
      if (_0x52f86e[_0x54e48e.H.P]) {
        return _0x52f86e[_0x54e48e.H.P];
      } else if (_0x52f86e.en) {
        return _0x52f86e.en;
      } else {
        return _0x52f86e.x;
      }
    };
    _0x29c320.W = function (_0x3f53a7) {
      return encodeURI(_0x3f53a7);
    };
    _0x29c320.X = function (_0x152912, _0x161e53) {
      return setInterval(_0x152912, _0x161e53);
    };
    _0x29c320.Y = function (_0x1e43b5, _0x349558) {
      return setTimeout(_0x1e43b5, _0x349558);
    };
    _0x29c320.Z = function (_0x30bef7) {
      clearTimeout(_0x30bef7);
    };
    _0x29c320.$ = function (_0x55e6e7) {
      var _0x5a431a = (_0x29c320._(_0x55e6e7) % 60).toString();
      var _0x9e6954 = (_0x29c320._(_0x55e6e7 / 60) % 60).toString();
      var _0x18b176 = (_0x29c320._(_0x55e6e7 / 3600) % 24).toString();
      var _0x96ebf4 = _0x29c320._(_0x55e6e7 / 86400).toString();
      var _0x4792b8 = _0x29c320.U("util.time.days");
      var _0x3e8fc3 = _0x29c320.U("util.time.hours");
      var _0x2f9b0d = _0x29c320.U("util.time.min");
      var _0x3c8a86 = _0x29c320.U("util.time.sec");
      if (_0x96ebf4 > 0) {
        return _0x96ebf4 + " " + _0x4792b8 + " " + _0x18b176 + " " + _0x3e8fc3 + " " + _0x9e6954 + " " + _0x2f9b0d + " " + _0x5a431a + " " + _0x3c8a86;
      } else if (_0x18b176 > 0) {
        return _0x18b176 + " " + _0x3e8fc3 + " " + _0x9e6954 + " " + _0x2f9b0d + " " + _0x5a431a + " " + _0x3c8a86;
      } else if (_0x9e6954 > 0) {
        return _0x9e6954 + " " + _0x2f9b0d + " " + _0x5a431a + " " + _0x3c8a86;
      } else {
        return _0x5a431a + " " + _0x3c8a86;
      }
    };
    _0x29c320.aa = function (_0x2a1200) {
      if (_0x2a1200.includes("href")) {
        return _0x2a1200.replaceAll("href", "target=\"_black\" href");
      } else {
        return _0x2a1200;
      }
    };
    _0x29c320.ba = function (_0x339190, _0x58cda1, _0x4bcf4a) {
      var _0x4d0940 = _0x3b6284.d.createElement("script");
      var _0x117666 = true;
      if (_typeof(_0x58cda1) !== "undefined" && _0x58cda1 !== null) {
        if (_typeof(_0x58cda1.id) !== "undefined") {
          _0x4d0940.id = _0x58cda1.id;
        }
        if (_typeof(_0x58cda1.async) !== "undefined" && _0x58cda1.async) {
          _0x4d0940.async = "async";
        }
        if (_typeof(_0x58cda1.defer) !== "undefined" && _0x58cda1.defer) {
          _0x4d0940.defer = "defer";
        }
        if (_typeof(_0x58cda1.crossorigin) !== "undefined") {
          _0x4d0940.crossorigin = _0x58cda1.crossorigin;
        }
      }
      _0x4d0940.type = "text/javascript";
      _0x4d0940.src = _0x339190;
      if (_0x4bcf4a) {
        _0x4d0940.onload = _0x4d0940.onreadystatechange = function () {
          _0x117666 = false;
          try {
            _0x4bcf4a();
          } catch (_0x56b65a) {}
          ;
          _0x4d0940.onload = _0x4d0940.onreadystatechange = null;
        };
      }
      (_0x3b6284.d.head || _0x3b6284.d.getElementsByTagName("head")[0]).appendChild(_0x4d0940);
    };
    _0x29c320.ca = function (_0xef5154, _0x432792) {
      var _0x21db0b = _0x432792;
      _0x21db0b.prototype = Object.create(_0xef5154.prototype);
      _0x21db0b.prototype.constructor = _0x21db0b;
      _0x21db0b.parent = _0xef5154;
      return _0x21db0b;
    };
    _0x29c320.da = function (_0x5693e9) {
      if ((_0x5693e9 %= _0x54e48e.S) < 0) {
        return _0x5693e9 + _0x54e48e.S;
      } else {
        return _0x5693e9;
      }
    };
    _0x29c320.ea = function (_0x25cf62, _0x4c6ca9, _0x4bc56e) {
      return _0x29c320.fa(_0x4bc56e, _0x25cf62, _0x4c6ca9);
    };
    _0x29c320.fa = function (_0x209f79, _0x5ee087, _0x55ac6d) {
      if (_0x209f79 > _0x55ac6d) {
        return _0x55ac6d;
      } else if (_0x209f79 < _0x5ee087) {
        return _0x5ee087;
      } else if (Number.isFinite(_0x209f79)) {
        return _0x209f79;
      } else {
        return (_0x5ee087 + _0x55ac6d) * 0.5;
      }
    };
    _0x29c320.ga = function (_0x16d28a, _0x5d1ef2, _0x261d30, _0x138605) {
      if (_0x5d1ef2 > _0x16d28a) {
        return _0x29c320.ha(_0x5d1ef2, _0x16d28a + _0x261d30 * _0x138605);
      } else {
        return _0x29c320.ia(_0x5d1ef2, _0x16d28a - _0x261d30 * _0x138605);
      }
    };
    _0x29c320.ja = function (_0x197220, _0xaa1445, _0x26f106, _0x495d22, _0x57f250) {
      return _0xaa1445 + (_0x197220 - _0xaa1445) * Math.pow(1 - _0x495d22, _0x26f106 / _0x57f250);
    };
    _0x29c320.ka = function (_0x2e7ded, _0x12c26e, _0x1b2c60) {
      return _0x2e7ded - (_0x2e7ded - _0x12c26e) * _0x1b2c60;
    };
    _0x29c320.la = function (_0x4aeca3, _0x2b87dd) {
      return Math.sqrt(_0x4aeca3 * _0x4aeca3 + _0x2b87dd * _0x2b87dd);
    };
    _0x29c320.ma = function () {
      return Math.random();
    };
    _0x29c320._ = function (_0x4bf471) {
      return Math.floor(_0x4bf471);
    };
    _0x29c320.na = function (_0x5091fa) {
      return Math.abs(_0x5091fa);
    };
    _0x29c320.ha = function (_0x21dcd1, _0x1e497c) {
      return Math.min(_0x21dcd1, _0x1e497c);
    };
    _0x29c320.ia = function (_0x48b44a, _0x1c2319) {
      return Math.max(_0x48b44a, _0x1c2319);
    };
    _0x29c320.oa = function (_0x440d24) {
      return Math.sin(_0x440d24);
    };
    _0x29c320.pa = function (_0x239095) {
      return Math.cos(_0x239095);
    };
    _0x29c320.qa = function (_0x4683ef) {
      return Math.sqrt(_0x4683ef);
    };
    _0x29c320.ra = function (_0x59d40b, _0x1f37de) {
      return Math.pow(_0x59d40b, _0x1f37de);
    };
    _0x29c320.sa = function (_0x2af98a) {
      return Math.atan(_0x2af98a);
    };
    _0x29c320.ta = function (_0xcca338, _0xbae1fe) {
      return Math.atan2(_0xcca338, _0xbae1fe);
    };
    _0x29c320.ua = function (_0x3ff8de, _0x3d1581, _0x8c8e28, _0x41f46b) {
      var _0x17ffd9 = _0x3d1581 + _0x41f46b;
      if (_0x3ff8de == null) {
        throw TypeError();
      }
      ;
      var _0x17d68d = _0x3ff8de.length >>> 0;
      var _0x478866 = _0x8c8e28 >> 0;
      var _0x415120 = _0x478866 < 0 ? Math.max(_0x17d68d + _0x478866, 0) : Math.min(_0x478866, _0x17d68d);
      var _0x13c504 = _0x3d1581 >> 0;
      var _0x3b4238 = _0x13c504 < 0 ? Math.max(_0x17d68d + _0x13c504, 0) : Math.min(_0x13c504, _0x17d68d);
      var _0x4240e = _0x17ffd9 === undefined ? _0x17d68d : _0x17ffd9 >> 0;
      var _0x3483a5 = Math.min((_0x4240e < 0 ? Math.max(_0x17d68d + _0x4240e, 0) : Math.min(_0x4240e, _0x17d68d)) - _0x3b4238, _0x17d68d - _0x415120);
      var _0x2ce5f0 = 1;
      for (_0x3b4238 < _0x415120 && _0x415120 < _0x3b4238 + _0x3483a5 && (_0x2ce5f0 = -1, _0x3b4238 += _0x3483a5 - 1, _0x415120 += _0x3483a5 - 1); _0x3483a5 > 0;) {
        if (_0x3b4238 in _0x3ff8de) {
          _0x3ff8de[_0x415120] = _0x3ff8de[_0x3b4238];
        } else {
          delete _0x3ff8de[_0x415120];
        }
        _0x3b4238 += _0x2ce5f0;
        _0x415120 += _0x2ce5f0;
        _0x3483a5--;
      }
      ;
      return _0x3ff8de;
    };
    _0x29c320.va = function (_0x4f4513, _0x3c2196) {
      return _0x4f4513 + (_0x3c2196 - _0x4f4513) * _0x29c320.ma();
    };
    _0x29c320.wa = function (_0x3d635d) {
      return _0x3d635d[parseInt(_0x29c320.ma() * _0x3d635d.length)];
    };
    _0xae7afc = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"].map(function (_0x3e96d7) {
      return _0x3e96d7.charCodeAt(0);
    });
    _0x29c320.xa = function (_0x48fea6) {
      if (_typeof(_0x48fea6) == "undefined") {
        _0x48fea6 = 16;
      }
      var _0x412659 = "";
      for (var _0x3cb382 = 0; _0x3cb382 < _0x48fea6; _0x3cb382++) {
        _0x412659 += String.fromCharCode(_0xae7afc[_0x29c320._(_0x29c320.ma() * _0xae7afc.length)]);
      }
      ;
      return _0x412659;
    };
    _0x29c320.ya = function (_0x5aecb0, _0x2e542a, _0x113e35) {
      var _0x1d785e = _0x113e35 * (1 - _0x2e542a * 0.5);
      var _0x451313 = Math.min(_0x1d785e, 1 - _0x1d785e);
      return _0x29c320.za(_0x5aecb0, _0x451313 ? (_0x113e35 - _0x1d785e) / _0x451313 : 0, _0x1d785e);
    };
    _0x29c320.za = function (_0x27bb0f, _0x46c40a, _0x5ba473) {
      var _0x401b56 = (1 - _0x29c320.na(_0x5ba473 * 2 - 1)) * _0x46c40a;
      var _0x400c4b = _0x401b56 * (1 - _0x29c320.na(_0x27bb0f / 60 % 2 - 1));
      var _0x25e98c = _0x5ba473 - _0x401b56 / 2;
      if (_0x27bb0f >= 0 && _0x27bb0f < 60) {
        return [_0x25e98c + _0x401b56, _0x25e98c + _0x400c4b, _0x25e98c];
      } else if (_0x27bb0f >= 60 && _0x27bb0f < 120) {
        return [_0x25e98c + _0x400c4b, _0x25e98c + _0x401b56, _0x25e98c];
      } else if (_0x27bb0f >= 120 && _0x27bb0f < 180) {
        return [_0x25e98c, _0x25e98c + _0x401b56, _0x25e98c + _0x400c4b];
      } else if (_0x27bb0f >= 180 && _0x27bb0f < 240) {
        return [_0x25e98c, _0x25e98c + _0x400c4b, _0x25e98c + _0x401b56];
      } else if (_0x27bb0f >= 240 && _0x27bb0f < 300) {
        return [_0x25e98c + _0x400c4b, _0x25e98c, _0x25e98c + _0x401b56];
      } else {
        return [_0x25e98c + _0x401b56, _0x25e98c, _0x25e98c + _0x400c4b];
      }
    };
    _0x29c320.Aa = function (_0x2bf175, _0x14da1f, _0x56b139) {
      $.get(_0x2bf175).fail(_0x14da1f).done(_0x56b139);
    };
    _0x29c320.Ba = function (_0x20baa4, _0x24fbc2, _0x1efefc, _0x222e2c) {
      var _0x1a0107 = {
        type: "GET",
        url: _0x20baa4
      };
      var _0x1ea095 = {
        responseType: "arraybuffer"
      };
      _0x1ea095.onprogress = function (_0x46e34e) {
        if (_0x46e34e.lengthComputable) {
          _0x222e2c(_0x46e34e.loaded / _0x46e34e.total * 100);
        }
      };
      _0x1a0107.xhrFields = _0x1ea095;
      $.ajax(_0x1a0107).fail(_0x24fbc2).done(_0x1efefc);
    };
    _0x29c320.Ca = function () {
      return Date.now();
    };
    _0x29c320.Da = function (_0x30de00, _0x793d97) {
      for (var _0x296087 in _0x30de00) {
        if (_0x30de00.hasOwnProperty(_0x296087)) {
          _0x793d97(_0x296087, _0x30de00[_0x296087]);
        }
      }
    };
    _0x29c320.Ea = function (_0x24e55a) {
      for (var _0x57175e = _0x24e55a.length - 1; _0x57175e > 0; _0x57175e--) {
        var _0x58aca5 = _0x29c320._(_0x29c320.ma() * (_0x57175e + 1));
        var _0x81f493 = _0x24e55a[_0x57175e];
        _0x24e55a[_0x57175e] = _0x24e55a[_0x58aca5];
        _0x24e55a[_0x58aca5] = _0x81f493;
      }
      ;
      return _0x24e55a;
    };
    _0x3b6284.Fa = _0x29c320.b("ArrayBuffer");
    _0x3b6284.Ga = _0x29c320.b("DataView");
    _0x3b6284.Ha = function () {
      function _0x2dc735(_0x5293f8) {
        this.Ia = _0x5293f8;
        this.Ja = 0;
      }
      var _0x221253 = "getInt8";
      _0x2dc735.prototype.Ka = function () {
        var _0x4b886f = this.Ia[_0x221253](this.Ja);
        this.Ja += 1;
        return _0x4b886f;
      };
      var _0x1ef287 = "getInt16";
      _0x2dc735.prototype.La = function () {
        var _0x313b0d = this.Ia[_0x1ef287](this.Ja);
        this.Ja += 2;
        return _0x313b0d;
      };
      var _0xc2d6ec = "getInt32";
      _0x2dc735.prototype.Ma = function () {
        var _0x4940e3 = this.Ia[_0xc2d6ec](this.Ja);
        this.Ja += 4;
        return _0x4940e3;
      };
      var _0x5bafa8 = "getFloat32";
      _0x2dc735.prototype.Na = function () {
        var _0x537e95 = this.Ia[_0x5bafa8](this.Ja);
        this.Ja += 4;
        return _0x537e95;
      };
      return _0x2dc735;
    }();
    _0x3b6284.Oa = function () {
      function _0x30abde(_0x47bfbe) {
        this.Ia = _0x47bfbe;
        this.Ja = 0;
      }
      var _0x5db1e5 = "setInt8";
      _0x30abde.prototype.Pa = function (_0x14d929) {
        this.Ia[_0x5db1e5](this.Ja, _0x14d929);
        this.Ja += 1;
      };
      var _0x3208ad = "setInt16";
      _0x30abde.prototype.Qa = function (_0x3b35d5) {
        this.Ia[_0x3208ad](this.Ja, _0x3b35d5);
        this.Ja += 2;
      };
      return _0x30abde;
    }();
    _0x29c320.Ra = function () {
      var _0x4dc027 = false;
      function _0x3e74c2() {}
      var _0x3c397b = {};
      var _0x57af66 = "1eaom01c3pxu9wd3";
      var _0x408046 = $("#" + _0x57af66);
      var _0x224991 = "JDHnkHtYwyXyVgG9";
      var _0x2be479 = $("#" + _0x224991);
      $("#adbl-continue").click(function () {
        _0x2be479.fadeOut(500);
        _0x3e74c2(false);
      });
      _0x3c397b.Sa = function (_0x191b32) {
        _0x3e74c2 = _0x191b32;
        if (!_0x4dc027) {
          try {
            aiptag.cmd.player.push(function () {
              var _0x43d3ac = {
                AD_WIDTH: 960,
                AD_HEIGHT: 540,
                AD_FULLSCREEN: true,
                AD_CENTERPLAYER: false
              };
              _0x43d3ac.LOADING_TEXT = "loading advertisement";
              _0x43d3ac.PREROLL_ELEM = function () {
                return _0x3b6284.d.getElementById(_0x57af66);
              };
              _0x43d3ac.AIP_COMPLETE = function (_0x469c7b) {
                _0x3e74c2(true);
                _0x55777a.f.h(_0x408046, 1);
                _0x55777a.f.h(_0x2be479, 1);
                try {
                  ga("send", "event", "preroll", _0x54e48e.H.I + "_complete");
                } catch (_0x3908e3) {}
              };
              _0x43d3ac.AIP_REMOVE = function () {};
              aiptag.adplayer = new aipPlayer(_0x43d3ac);
            });
            _0x4dc027 = true;
          } catch (_0x33a791) {}
        }
      };
      _0x3c397b.Ta = function () {
        if (_typeof(aiptag.adplayer) !== "undefined") {
          try {
            ga("send", "event", "preroll", _0x54e48e.H.I + "_request");
          } catch (_0x30ca7f) {}
          ;
          _0x55777a.f.g(_0x408046, 1);
          if (!_0x17d5a6.on) {
            aiptag.cmd.player.push(function () {
              aiptag.adplayer.startPreRoll();
            });
          }
        } else {
          try {
            ga("send", "event", "antiadblocker", _0x54e48e.H.I + "_start");
          } catch (_0x2a67b6) {}
          ;
          (function _0x11c4f3() {
            $("#adbl-1").text(_0x29c320.U("index.game.antiadblocker.msg1"));
            $("#adbl-2").text(_0x29c320.U("index.game.antiadblocker.msg2"));
            $("#adbl-3").text(_0x29c320.U("index.game.antiadblocker.msg3"));
            $("#adbl-4").text(_0x29c320.U("index.game.antiadblocker.msg4").replace("{0}", 10));
            $("#adbl-continue span").text(_0x29c320.U("index.game.antiadblocker.continue"));
            _0x55777a.f.h($("#adbl-continue"), 1);
            _0x55777a.f.g(_0x2be479, 500);
            var _0xa78419 = 10;
            for (var _0x4693bc = 0; _0x4693bc < 10; _0x4693bc++) {
              _0x29c320.Y(function () {
                _0xa78419--;
                $("#adbl-4").text(_0x29c320.U("index.game.antiadblocker.msg4").replace("{0}", _0xa78419));
                if (_0xa78419 === 0) {
                  try {
                    ga("send", "event", "antiadblocker", _0x54e48e.H.I + "_complete");
                  } catch (_0x52af27) {}
                  ;
                  _0x55777a.f.g($("#adbl-continue"), 200);
                }
              }, (_0x4693bc + 1) * 1000);
            }
          })();
        }
      };
      return _0x3c397b;
    };
    _0x29c320.Ua = function (_0x4ce4ba, _0x101f7d) {
      var _0x4bc8ec = $("#" + _0x4ce4ba);
      var _0x4ca8e8 = _0x101f7d;
      var _0xc03e1 = {};
      var _0x5ade43 = false;
      _0xc03e1.Sa = function () {
        if (!_0x5ade43) {
          _0x4bc8ec.empty();
          _0x4bc8ec.append("<div id='" + _0x4ca8e8 + "'></div>");
          try {
            try {
              ga("send", "event", "banner", _0x54e48e.H.I + "_display");
            } catch (_0x279f37) {}
            ;
            if (!_0x17d5a6.on) {
              aiptag.cmd.display.push(function () {
                aipDisplayTag.display(_0x4ca8e8);
              });
            }
            _0x5ade43 = true;
          } catch (_0x337a23) {}
        }
      };
      _0xc03e1.Va = function () {
        try {
          try {
            ga("send", "event", "banner", _0x54e48e.H.I + "_refresh");
          } catch (_0x32ca21) {}
          ;
          if (!_0x17d5a6.on) {
            aiptag.cmd.display.push(function () {
              aipDisplayTag.display(_0x4ca8e8);
            });
          }
        } catch (_0x598894) {}
      };
      return _0xc03e1;
    };
    _0x3b6284.Wa = function () {
      function _0x134737(_0x427fc0, _0x33eea0, _0x130888, _0x6abee3, _0x1f341d, _0x14bd61, _0x30270b, _0x4dd322, _0x49813b, _0x546981) {
        this.Xa = _0x427fc0;
        this.Ya = _0x33eea0;
        this.Za = null;
        this.$a = false;
        this._a = _0x130888;
        this.ab = _0x6abee3;
        this.bb = _0x1f341d;
        this.cb = _0x14bd61;
        this.db = _0x30270b || (_0x49813b || _0x1f341d) / 2;
        this.eb = _0x4dd322 || (_0x546981 || _0x14bd61) / 2;
        this.fb = _0x49813b || _0x1f341d;
        this.gb = _0x546981 || _0x14bd61;
        this.hb = 0.5 - (this.db - this.fb * 0.5) / this.bb;
        this.ib = 0.5 - (this.eb - this.gb * 0.5) / this.cb;
        this.jb = this.bb / this.fb;
        this.kb = this.cb / this.gb;
      }
      _0x134737.lb = function () {
        return new _0x134737("", null, 0, 0, 0, 0, 0, 0, 0, 0);
      };
      _0x134737.mb = function (_0x40a46d, _0x1642f2, _0x33833c) {
        return new _0x134737(_0x40a46d, _0x1642f2, _0x33833c.x, _0x33833c.y, _0x33833c.w, _0x33833c.h, _0x33833c.px, _0x33833c.py, _0x33833c.pw, _0x33833c.ph);
      };
      _0x134737.prototype.nb = function () {
        if (!this.$a) {
          if (this.Ya != null) {
            this.Za = new _0x55777a.k.n(this.Ya, new _0x55777a.k.r(this._a, this.ab, this.bb, this.cb));
          }
          this.$a = true;
        }
        return this.Za;
      };
      _0x134737.prototype.ob = function () {
        if (this.Za != null) {
          this.Za.destroy();
        }
      };
      return _0x134737;
    }();
    _0x3b6284.pb = function () {
      function _0x127fbe(_0xd426df, _0x5b0638, _0x493a77, _0x4a685b, _0x164eb8, _0x4230e7, _0x1e44cd, _0x1f6426, _0x1ebc0b, _0x3b1d3a, _0xa73f49, _0xe03f0b, _0x4cb934, _0x2177d7, _0x25a677, _0x20e9f6, _0xec9e36, _0x30d0a0) {
        this.qb = _0xd426df;
        this.rb = _0x5b0638;
        this.sb = _0x493a77;
        this.tb = _0x4a685b;
        this.ub = _0x164eb8;
        this.vb = _0x4230e7;
        this.wb = _0x1e44cd;
        this.xb = _0x1f6426;
        this.yb = _0x1ebc0b;
        this.zb = _0x3b1d3a;
        this.Ab = _0xa73f49;
        this.Bb = _0xe03f0b;
        this.Cb = _0x4cb934;
        this.Db = _0x2177d7;
        this.Eb = _0x25a677;
        this.Fb = _0x20e9f6;
        this.Gb = _0xec9e36;
        this.Hb = _0x30d0a0;
      }
      _0x127fbe.prototype.ob = function () {
        for (var _0x103126 = 0; _0x103126 < this.qb.length; _0x103126++) {
          this.qb[_0x103126].dispose();
          this.qb[_0x103126].destroy();
        }
        ;
        this.qb = [];
        for (var _0x53df4b = 0; _0x53df4b < this.rb.length; _0x53df4b++) {
          this.rb[_0x53df4b].ob();
        }
        ;
        this.rb = [];
      };
      _0x127fbe.lb = function () {
        var _0xf28d84 = new _0x127fbe.Ib(_0x3b6284.Kb.Jb, _0x3b6284.Kb.Jb);
        var _0x283115 = new _0x127fbe.Lb("#ffffff", [_0x3b6284.Kb.Jb], [_0x3b6284.Kb.Jb]);
        return new _0x127fbe([], [], {}, _0xf28d84, {}, new _0x127fbe.Mb(_0x3b6284.Kb.Jb), {}, _0x283115, {}, new _0x127fbe.Nb("", _0x283115, _0xf28d84), {}, new _0x127fbe.Ob([_0x3b6284.Kb.Jb]), {}, new _0x127fbe.Ob([_0x3b6284.Kb.Jb]), {}, new _0x127fbe.Ob([_0x3b6284.Kb.Jb]), {}, new _0x127fbe.Ob([_0x3b6284.Kb.Jb]));
      };
      _0x127fbe.Pb = function (_0x37ed8b, _0x14de02, _0x4996af, _0x40b32f) {
        var _0x3afe0b = new _0x127fbe.Ib(_0x3b6284.Kb.Jb, _0x3b6284.Kb.Jb);
        var _0x5ad2e5 = new _0x127fbe.Lb("#ffffff", [_0x37ed8b], [_0x14de02]);
        return new _0x127fbe([], [], {}, _0x3afe0b, {}, new _0x127fbe.Mb(_0x3b6284.Kb.Jb), {}, _0x5ad2e5, {}, new _0x127fbe.Nb("", _0x5ad2e5, _0x3afe0b), {}, new _0x127fbe.Ob([_0x4996af]), {}, new _0x127fbe.Ob([_0x40b32f]), {}, new _0x127fbe.Ob([_0x3b6284.Kb.Jb]), {}, new _0x127fbe.Ob([_0x3b6284.Kb.Jb]));
      };
      _0x127fbe.Qb = function (_0x56529a, _0x1db9d4, _0x16debb, _0xba7f88) {
        var _0x4074ba = {};
        _0x29c320.Da(_0x56529a.colorDict, function (_0x4b9e9a, _0x5e796b) {
          _0x4074ba[_0x4b9e9a] = "#" + _0x5e796b;
        });
        var _0x58ad0e = {};
        for (var _0x8b1f18 = 0; _0x8b1f18 < _0x56529a.skinArrayDict.length; _0x8b1f18++) {
          var _0x3b0606 = _0x56529a.skinArrayDict[_0x8b1f18];
          _0x58ad0e[_0x3b0606.id] = new _0x127fbe.Lb(_0x4074ba[_0x3b0606.prime], _0x3b0606.base.map(function (_0x5a8728) {
            return _0x1db9d4[_0x5a8728];
          }), _0x3b0606.glow.map(function (_0x44fd5d) {
            return _0x1db9d4[_0x44fd5d];
          }));
        }
        ;
        var _0x45f21d;
        var _0x497331 = _0x56529a.skinUnknown;
        _0x45f21d = new _0x127fbe.Lb(_0x4074ba[_0x497331.prime], _0x497331.base.map(function (_0x2dca8e) {
          return _0x1db9d4[_0x2dca8e];
        }), _0x497331.glow.map(function (_0x328989) {
          return _0x1db9d4[_0x328989];
        }));
        var _0x38b534 = {};
        _0x29c320.Da(_0x56529a.eyesDict, function (_0x44a885, _0x5d11a4) {
          _0x38b534[parseInt(_0x44a885)] = new _0x127fbe.Ob(_0x5d11a4.base.map(function (_0x33c8a3) {
            return _0x1db9d4[_0x33c8a3.region];
          }));
        });
        var _0x57b1f8 = new _0x127fbe.Ob(_0x56529a.eyesUnknown.base.map(function (_0x457549) {
          return _0x1db9d4[_0x457549.region];
        }));
        var _0x3d0e10 = {};
        _0x29c320.Da(_0x56529a.mouthDict, function (_0x31f05f, _0x1f1769) {
          _0x3d0e10[parseInt(_0x31f05f)] = new _0x127fbe.Ob(_0x1f1769.base.map(function (_0x333b06) {
            return _0x1db9d4[_0x333b06.region];
          }));
        });
        var _0x55b43a = new _0x127fbe.Ob(_0x56529a.mouthUnknown.base.map(function (_0x40f0bb) {
          return _0x1db9d4[_0x40f0bb.region];
        }));
        var _0x2e328d = {};
        _0x29c320.Da(_0x56529a.hatDict, function (_0x17162f, _0x285581) {
          _0x2e328d[parseInt(_0x17162f)] = new _0x127fbe.Ob(_0x285581.base.map(function (_0xcedcab) {
            return _0x1db9d4[_0xcedcab.region];
          }));
        });
        var _0x4b950c = new _0x127fbe.Ob(_0x56529a.hatUnknown.base.map(function (_0x4116cb) {
          return _0x1db9d4[_0x4116cb.region];
        }));
        var _0x28e50d = {};
        _0x29c320.Da(_0x56529a.glassesDict, function (_0x312189, _0x5a0cb7) {
          _0x28e50d[parseInt(_0x312189)] = new _0x127fbe.Ob(_0x5a0cb7.base.map(function (_0x4ecb59) {
            return _0x1db9d4[_0x4ecb59.region];
          }));
        });
        var _0x4db5e2 = new _0x127fbe.Ob(_0x56529a.glassesUnknown.base.map(function (_0xd22ef5) {
          return _0x1db9d4[_0xd22ef5.region];
        }));
        var _0x4d5dbc = {};
        _0x29c320.Da(_0x56529a.portionDict, function (_0x1c7a58, _0x42945e) {
          _0x4d5dbc[_0x1c7a58 = parseInt(_0x1c7a58)] = new _0x127fbe.Ib(_0x1db9d4[_0x42945e.base], _0x1db9d4[_0x42945e.glow]);
        });
        var _0x49f477;
        var _0x2eb8df = _0x56529a.portionUnknown;
        _0x49f477 = new _0x127fbe.Ib(_0x1db9d4[_0x2eb8df.base], _0x1db9d4[_0x2eb8df.glow]);
        var _0x10e83c = {};
        _0x29c320.Da(_0x56529a.abilityDict, function (_0x5666e5, _0xc3d683) {
          _0x10e83c[_0x5666e5 = parseInt(_0x5666e5)] = new _0x127fbe.Mb(_0x1db9d4[_0xc3d683.base]);
        });
        var _0x56cc2f;
        var _0x3781f4 = _0x56529a.abilityUnknown;
        _0x56cc2f = new _0x127fbe.Mb(_0x1db9d4[_0x3781f4.base]);
        var _0x5403e6 = {};
        _0x29c320.Da(_0x56529a.teamDict, function (_0x2d0ae1, _0x59803c) {
          _0x5403e6[_0x2d0ae1 = parseInt(_0x2d0ae1)] = new _0x127fbe.Nb(_0x59803c.title, new _0x127fbe.Lb(_0x4074ba[_0x59803c.skin.prime], null, _0x59803c.skin.glow.map(function (_0x2be426) {
            return _0x1db9d4[_0x2be426];
          })), new _0x127fbe.Ib(null, _0x1db9d4[_0x59803c.portion.glow]));
        });
        var _0x44d08a = new _0x127fbe.Nb({}, _0x45f21d, _0x49f477);
        return new _0x127fbe(_0x16debb, _0xba7f88, _0x4d5dbc, _0x49f477, _0x10e83c, _0x56cc2f, _0x58ad0e, _0x45f21d, _0x5403e6, _0x44d08a, _0x38b534, _0x57b1f8, _0x3d0e10, _0x55b43a, _0x2e328d, _0x4b950c, _0x28e50d, _0x4db5e2);
      };
      _0x127fbe.prototype.Rb = function (_0x36eedd) {
        var _0x7efd92 = _0x29c320.Ea(Object.keys(this.wb)).slice(0, _0x36eedd);
        var _0x547bda = _0x29c320.Ea(Object.keys(this.Ab)).slice(0, _0x36eedd);
        var _0xe26d15 = _0x29c320.Ea(Object.keys(this.Cb)).slice(0, _0x36eedd);
        var _0x910584 = _0x29c320.Ea(Object.keys(this.Eb)).slice(0, _0x36eedd);
        var _0x5acbae = _0x29c320.Ea(Object.keys(this.Gb)).slice(0, _0x36eedd);
        var _0x110f82 = [];
        for (var _0xda37bc = 0; _0xda37bc < _0x36eedd; _0xda37bc++) {
          var _0x4768c3 = _0x7efd92.length > 0 ? _0x7efd92[_0xda37bc % _0x7efd92.length] : 0;
          var _0x31386d = _0x547bda.length > 0 ? _0x547bda[_0xda37bc % _0x547bda.length] : 0;
          var _0x586a31 = _0xe26d15.length > 0 ? _0xe26d15[_0xda37bc % _0xe26d15.length] : 0;
          var _0x3f416a = _0x910584.length > 0 ? _0x910584[_0xda37bc % _0x910584.length] : 0;
          var _0x2646a2 = _0x5acbae.length > 0 ? _0x5acbae[_0xda37bc % _0x5acbae.length] : 0;
          _0x110f82.push(new _0x3b6284.Sb(_0x4768c3, _0x31386d, _0x586a31, _0x3f416a, _0x2646a2));
        }
        ;
        return _0x110f82;
      };
      _0x127fbe.prototype.Tb = function (_0x5207bd) {
        if (this.wb.hasOwnProperty(_0x5207bd)) {
          return this.wb[_0x5207bd];
        } else {
          return this.xb;
        }
      };
      _0x127fbe.prototype.Ub = function (_0x2a14eb) {
        if (this.yb.hasOwnProperty(_0x2a14eb)) {
          return this.yb[_0x2a14eb];
        } else {
          return this.zb;
        }
      };
      _0x127fbe.prototype.Vb = function (_0xcbff3f) {
        if (this.Ab.hasOwnProperty(_0xcbff3f)) {
          return this.Ab[_0xcbff3f];
        } else {
          return this.Bb;
        }
      };
      _0x127fbe.prototype.Wb = function (_0x26cb11) {
        if (this.Cb.hasOwnProperty(_0x26cb11)) {
          return this.Cb[_0x26cb11];
        } else {
          return this.Db;
        }
      };
      _0x127fbe.prototype.Xb = function (_0x96dcf0) {
        if (this.Gb.hasOwnProperty(_0x96dcf0)) {
          return this.Gb[_0x96dcf0];
        } else {
          return this.Hb;
        }
      };
      _0x127fbe.prototype.Yb = function (_0x33e9ff) {
        if (this.Eb.hasOwnProperty(_0x33e9ff)) {
          return this.Eb[_0x33e9ff];
        } else {
          return this.Fb;
        }
      };
      _0x127fbe.prototype.Zb = function (_0xd50a0) {
        if (this.sb.hasOwnProperty(_0xd50a0)) {
          return this.sb[_0xd50a0];
        } else {
          return this.tb;
        }
      };
      _0x127fbe.prototype.$b = function (_0x2811c9) {
        if (this.ub.hasOwnProperty(_0x2811c9)) {
          return this.ub[_0x2811c9];
        } else {
          return this.vb;
        }
      };
      _0x127fbe.Nb = function _0x3b361a(_0x271ecb, _0x3b286b, _0xa7d637) {
        this._b = _0x271ecb;
        this.ac = _0x3b286b;
        this.bc = _0xa7d637;
      };
      _0x127fbe.Lb = function _0x21fdd3(_0x5b4437, _0x584890, _0x298647) {
        this.cc = _0x5b4437;
        this.dc = _0x584890;
        this.ec = _0x298647;
      };
      _0x127fbe.Ob = function _0x4bf5aa(_0x50f76f) {
        this.dc = _0x50f76f;
      };
      _0x127fbe.Ib = function _0x554cbe(_0x14b698, _0xb9e66c) {
        this.dc = _0x14b698;
        this.ec = _0xb9e66c;
      };
      _0x127fbe.Mb = function _0x16aa32(_0x1a57af) {
        this.dc = _0x1a57af;
      };
      return _0x127fbe;
    }();
    _0x3b6284.Kb = function () {
      function _0xf61cdf() {
        var _0x5adf85 = _0x55777a.k.m.from("/images/wear-ability.png");
        this.fc = new _0x3b6284.Wa("magnet_ability", _0x5adf85, 158, 86, 67, 124, 148, 63.5, 128, 128);
        this.gc = new _0x3b6284.Wa("velocity_ability", _0x5adf85, 158, 4, 87, 74, 203, 63.5, 128, 128);
        this.hc = new _0x3b6284.Wa("flex_ability", _0x5adf85, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
        var _0xccfec0 = _0x55777a.k.m.from("https://i.imgur.com/LFiCido.png");
        this.pwrFlex = new _0x3b6284.Wa("flex_ability", _0xccfec0, 156, 140, 87, 60, 170, 128.5, 128, 128);
        var _0x54a548;
        var _0x2b126c = _0x55777a.k.m.from("/images/def-look.png");
        var _0x12bb22 = new _0x3b6284.Wa("def_eyes", _0x2b126c, 0, 0, 42, 80, 75, 64, 128, 128);
        var _0xbe2d92 = new _0x3b6284.Wa("def_mouth", _0x2b126c, 46, 0, 20, 48, 109, 63, 128, 128);
        var _0x5c2abc = new _0x3b6284.Wa("def_skin_glow", _0x2b126c, 70, 0, 32, 32, 0, 0, 0, 0);
        var _0x498a6f = new _0x3b6284.Wa("def_skin_base", _0x2b126c, 46, 52, 64, 64, 0, 0, 0, 0);
        var _0x5753fa = _0x3b6284.pb.Pb(_0x498a6f, _0x5c2abc, _0x12bb22, _0xbe2d92);
        this.ic = new _0x3b6284.jc({}, _0x5753fa);
        this.kc = -10000;
        this.lc = -10000;
        this.mc = ((_0x54a548 = _0x3b6284.c.document.createElement("canvas")).width = 80, _0x54a548.height = 80, {
          nc: _0x54a548,
          oc: _0x54a548.getContext("2d"),
          Za: new _0x55777a.k.n(_0x55777a.k.m.from(_0x54a548))
        });
        this.pc = null;
        this.qc = [];
      }
      _0xf61cdf.Jb = _0x3b6284.Wa.lb();
      _0xf61cdf.prototype.Sa = function () {};
      _0xf61cdf.prototype.rc = function (_0x4220ec, _0x50c6e2, _0x445b1b) {
        var _0x50ef79 = this;
        var _0x12107d = this.ic.sc();
        if (_0x12107d > 0 && _0x29c320.Ca() - this.kc < 1200000) {
          if (_0x4220ec != null) {
            _0x4220ec();
          }
          return;
        }
        ;
        if (this.pc != null && !this.pc.tc()) {
          if (_0x29c320.Ca() - this.kc < 300000) {
            if (_0x4220ec != null) {
              _0x4220ec();
            }
            return;
          }
          ;
          this.pc.uc();
          this.pc = null;
        }
        ;
        var _0x30fb53 = new _0x3b6284.vc(_0x12107d);
        _0x30fb53.wc(function (_0x153ec0, _0x4e2637) {
          if (_0x30fb53 === _0x50ef79.pc && _0x445b1b != null) {
            _0x445b1b(_0x153ec0, _0x4e2637);
          }
        });
        _0x30fb53.xc(function (_0x3417bd) {
          if (_0x30fb53 === _0x50ef79.pc && _0x50c6e2 != null) {
            _0x50c6e2(_0x3417bd);
          }
        });
        _0x30fb53.yc(function () {
          if (_0x30fb53 === _0x50ef79.pc && _0x50c6e2 != null) {
            _0x50c6e2(Error());
          }
        });
        _0x30fb53.zc(function () {
          if (_0x30fb53 === _0x50ef79.pc && _0x4220ec != null) {
            _0x4220ec();
          }
        });
        _0x30fb53.Ac(function (_0x2cd419) {
          if (_0x30fb53 === _0x50ef79.pc) {
            _0x50ef79.lc = _0x29c320.Ca();
            _0x50ef79.pc = null;
            _0x50ef79.Bc();
            _0x50ef79.ic.Cc().ob();
            _0x50ef79.ic = _0x2cd419;
            if (_0x4220ec != null) {
              _0x4220ec();
            }
            _0x50ef79.Dc();
            return;
          }
          ;
          try {
            _0x2cd419.Cc().ob();
          } catch (_0x37e1ab) {}
        });
        _0x30fb53.Ec();
        this.kc = _0x29c320.Ca();
        this.pc = _0x30fb53;
      };
      _0xf61cdf.prototype.Bc = function () {};
      _0xf61cdf.prototype.Fc = function () {
        return this.ic.sc() > 0;
      };
      _0xf61cdf.prototype.Gc = function () {
        return this.ic.Hc();
      };
      _0xf61cdf.prototype.Ic = function () {
        return this.mc;
      };
      _0xf61cdf.prototype.Jc = function (_0x28e9cd) {
        this.qc.push(_0x28e9cd);
      };
      _0xf61cdf.prototype.Dc = function () {
        for (var _0x5516fc = 0; _0x5516fc < this.qc.length; _0x5516fc++) {
          this.qc[_0x5516fc]();
        }
      };
      _0xf61cdf.prototype.Cc = function () {
        return this.ic.Cc();
      };
      return _0xf61cdf;
    }();
    _0x3b6284.Kc = function () {
      function _0x1a9032(_0x5f4b4c) {
        this.Lc = _0x5f4b4c;
      }
      _0x1a9032.prototype.Mc = function (_0xef43a9) {
        return this.Lc[_0xef43a9];
      };
      _0x1a9032.Nc = function () {
        function _0x231a00() {
          this.Oc = [];
        }
        _0x231a00.prototype.Pc = function (_0x52afb4, _0x5b56e9) {
          for (var _0x51bb84 = 0; _0x51bb84 < this.Oc.length; _0x51bb84++) {
            if (this.Oc[_0x51bb84].Qc === _0x52afb4) {
              throw Error();
            }
          }
          ;
          this.Oc.push(new _0x1a9032.Rc(_0x52afb4, _0x5b56e9));
          return this;
        };
        _0x231a00.prototype.Sc = function () {
          var _0x3188b4 = 0;
          for (var _0x4a8c80 = 0; _0x4a8c80 < this.Oc.length; _0x4a8c80++) {
            _0x3188b4 += this.Oc[_0x4a8c80].Tc;
          }
          ;
          var _0x4a8065 = {};
          var _0x3444c8 = 0;
          for (var _0xd36766 = 0; _0xd36766 < this.Oc.length; _0xd36766++) {
            var _0x168636 = this.Oc[_0xd36766];
            _0x168636.Tc = _0x168636.Tc / _0x3188b4;
            _0x168636.Uc = _0x3444c8;
            _0x168636.Vc = _0x3444c8 + _0x168636.Tc;
            _0x3444c8 = _0x168636.Vc;
            _0x4a8065[_0x168636.Qc] = _0x168636;
          }
          ;
          return new _0x1a9032(_0x4a8065);
        };
        return _0x231a00;
      }();
      _0x1a9032.Rc = function () {
        function _0x1ec36f(_0x1b5fae, _0x2bb1da) {
          this.Qc = _0x1b5fae;
          this.Tc = _0x2bb1da;
          this.Uc = 0;
          this.Vc = 0;
        }
        _0x1ec36f.prototype.Wc = function (_0x1394a8) {
          return this.Uc + (this.Vc - this.Uc) * _0x1394a8;
        };
        return _0x1ec36f;
      }();
      return _0x1a9032;
    }();
    _0x3b6284.Xc = function () {
      function _0x26fd0a() {
        this.Yc = new _0x55777a.k.l();
        this.Yc.sortableChildren = true;
        this.Zc = new _0xd64b46();
        this.Zc.zIndex = _0x426cad * ((_0x5e184a + 1) * 2 + 1 + 3);
        this.$c = 0;
        this._c = Array(_0x5e184a);
        this._c[0] = this.ad(0, new _0x3b6284.bd(), new _0x3b6284.bd());
        for (var _0x11f419 = 1; _0x11f419 < _0x5e184a; _0x11f419++) {
          this._c[_0x11f419] = this.ad(_0x11f419, new _0x3b6284.bd(), new _0x3b6284.bd());
        }
        ;
        this.cd = 0;
        this.dd = 0;
        this.ed = 0;
      }
      var _0x4ed8ed;
      var _0x426cad = 0.001;
      var _0x5e184a = 797;
      var _0x585293 = _0x54e48e.T * 0.1;
      _0x26fd0a.fd = _0x5e184a;
      _0x26fd0a.prototype.ad = function (_0x4ac5f9, _0x333126, _0x61bd45) {
        var _0x8ee6f9 = new _0x3ebf6e(_0x333126, _0x61bd45);
        _0x333126.gd.zIndex = _0x426cad * ((_0x5e184a - _0x4ac5f9) * 2 + 1 + 3);
        _0x61bd45.gd.zIndex = _0x426cad * ((_0x5e184a - _0x4ac5f9) * 2 - 2 + 3);
        return _0x8ee6f9;
      };
      _0x26fd0a.prototype.hd = function (_0x4bef37, _0x465ac7, _0x355219, _0x1968bc, _0x125d0b, _0x36cc95, _0x31f4c9, _0xdd2ce0) {
        var _0x2cfa03 = _0x355219.dc;
        var _0x198eb8 = _0x4bef37 === _0x3b6284.jd.id ? _0x465ac7.ac.ec : _0x355219.ec;
        if (_0x2cfa03.length > 0 && _0x198eb8.length > 0) {
          for (var _0x5102fe = 0; _0x5102fe < this._c.length; _0x5102fe++) {
            this._c[_0x5102fe].ld.kd(_0x2cfa03[_0x5102fe % _0x2cfa03.length]);
            this._c[_0x5102fe].md.kd(_0x198eb8[_0x5102fe % _0x198eb8.length]);
            this._c[_0x5102fe].ld.nd(_0xdd2ce0);
            this._c[_0x5102fe].md.nd(_0xdd2ce0);
          }
        }
        ;
        this.Zc.hd(_0x1968bc, _0x125d0b, _0x36cc95, _0x31f4c9);
      };
      (_0x4ed8ed = _0x29c320.ca(_0x55777a.k.l, function () {
        _0x55777a.k.l.call(this);
        this.sortableChildren = true;
        this.od = [];
        this.pd = [];
        this.qd = [];
        this.rd = [];
        this.sd = new _0x55777a.k.l();
        this.td = [];
        for (var _0x5dbef3 = 0; _0x5dbef3 < 4; _0x5dbef3++) {
          var _0x5d3c2e = new _0x3b6284.bd();
          _0x5d3c2e.kd(ooo.ud.fc);
          this.sd.addChild(_0x5d3c2e.gd);
          this.td.push(_0x5d3c2e);
        }
        ;
        this.sd.zIndex = 0.0011;
        this.addChild(this.sd);
        this.vd();
        this.wd = new _0x3b6284.bd();
        this.wd.kd(ooo.ud.gc);
        this.wd.gd.zIndex = 0.001;
        this.addChild(this.wd.gd);
        this.xd();
        this.pwr_flex = new _0x3b6284.bd();
        this.pwr_flex.kd(ooo.ud.pwrFlex);
        this.pwr_flex.gd.zIndex = 0.001;
        this.addChild(this.pwr_flex.gd);
        this.disableFlex();
      })).prototype.hd = function (_0x15df8a, _0x1b91d7, _0x43cac7, _0x202c4e) {
        this.yd(0.002, this.od, _0x15df8a.dc);
        this.yd(0.003, this.pd, _0x1b91d7.dc);
        this.yd(0.004, this.rd, _0x202c4e.dc);
        this.yd(0.005, this.qd, _0x43cac7.dc);
      };
      _0x4ed8ed.prototype.yd = function (_0x486e5b, _0x104884, _0x45f392) {
        while (_0x45f392.length > _0x104884.length) {
          var _0x3c08e7 = new _0x3b6284.bd();
          _0x104884.push(_0x3c08e7);
          this.addChild(_0x3c08e7.zd());
        }
        ;
        while (_0x45f392.length < _0x104884.length) {
          _0x104884.pop().G();
        }
        ;
        var _0x2b3378 = _0x486e5b;
        for (var _0xb498f7 = 0; _0xb498f7 < _0x45f392.length; _0xb498f7++) {
          _0x2b3378 += 0.0001;
          var _0x43f2e3 = _0x104884[_0xb498f7];
          _0x43f2e3.kd(_0x45f392[_0xb498f7]);
          _0x43f2e3.gd.zIndex = _0x2b3378;
        }
      };
      _0x4ed8ed.prototype.Ad = function (_0x274c3f, _0xfb8ef7, _0x4be5e5, _0x5dd277) {
        this.visible = true;
        this.position.set(_0x274c3f, _0xfb8ef7);
        this.rotation = _0x5dd277;
        for (var _0x14f11c = 0; _0x14f11c < this.od.length; _0x14f11c++) {
          this.od[_0x14f11c].Bd(_0x4be5e5);
        }
        ;
        for (var _0x59d1b6 = 0; _0x59d1b6 < this.pd.length; _0x59d1b6++) {
          this.pd[_0x59d1b6].Bd(_0x4be5e5);
        }
        ;
        for (var _0x2c8fed = 0; _0x2c8fed < this.qd.length; _0x2c8fed++) {
          this.qd[_0x2c8fed].Bd(_0x4be5e5);
        }
        ;
        for (var _0x48146e = 0; _0x48146e < this.rd.length; _0x48146e++) {
          this.rd[_0x48146e].Bd(_0x4be5e5);
        }
      };
      _0x4ed8ed.prototype.Cd = function () {
        this.visible = false;
      };
      _0x4ed8ed.prototype.Dd = function (_0x69daa7, _0xd8b8ec, _0x20a80e, _0x50e1dd) {
        this.sd.visible = true;
        var _0x33224c = _0x20a80e / 1000;
        var _0x3232e3 = 1 / this.td.length;
        for (var _0x2cf5f4 = 0; _0x2cf5f4 < this.td.length; _0x2cf5f4++) {
          var _0x525949 = 1 - (_0x33224c + _0x3232e3 * _0x2cf5f4) % 1;
          this.td[_0x2cf5f4].gd.alpha = 1 - _0x525949;
          this.td[_0x2cf5f4].Bd(_0xd8b8ec * (0.5 + _0x525949 * 4.5));
        }
      };
      _0x4ed8ed.prototype.vd = function () {
        this.sd.visible = false;
      };
      _0x4ed8ed.prototype.Ed = function (_0x277ba7, _0x420c6e, _0x548f5d, _0x573b70) {
        this.wd.gd.visible = _0x152ccb.vp;
        this.wd.gd.alpha = _0x29c320.ga(this.wd.gd.alpha, _0x277ba7.Fd ? 0.9 : 0.2, _0x573b70, 0.0025);
        this.wd.Bd(_0x420c6e);
      };
      _0x4ed8ed.prototype.xd = function () {
        this.wd.gd.visible = false;
      };
      _0x4ed8ed.prototype.activeFlex = function (_0x252da7, _0x5ecc72, _0x1170ca, _0x334781) {
        this.pwr_flex.gd.visible = _0x152ccb.flx;
        this.pwr_flex.gd.alpha = _0x29c320.ga(this.wd.gd.alpha, _0x252da7.Fd ? 0.9 : 0.2, _0x334781, 0.0025);
        this.pwr_flex.Bd(_0x5ecc72);
      };
      _0x4ed8ed.prototype.disableFlex = function () {
        this.pwr_flex.gd.visible = false;
      };
      var _0xd64b46 = _0x4ed8ed;
      _0x26fd0a.prototype.Gd = function (_0x41d130) {
        return this.dd + this.ed * _0x29c320.oa(_0x41d130 * _0x585293 - this.cd);
      };
      _0x26fd0a.prototype.Hd = function (_0x30d722, _0x474c79, _0x5c8344, _0xfc86b8) {
        var _0x4c9e92;
        var _0x23076b;
        var _0x2588bb;
        var _0x3bb848;
        var _0x36ce30;
        var _0x27bd0b;
        var _0x371136;
        var _0x312ec3;
        var _0x35f095 = _0x30d722.Id * 2;
        var _0x1a429b = _0x30d722.Jd;
        var _0x561f95 = _0x30d722.Kd;
        var _0x2617bf = _0x561f95 * 4 - 3;
        var _0x4f073a = _0x2617bf;
        this.cd = _0x474c79 / 400 * _0x54e48e.T;
        this.dd = _0x35f095 * 1.5;
        this.ed = _0x35f095 * 0.15 * _0x30d722.Ld;
        if (_0xfc86b8(_0x23076b = _0x1a429b[0], _0x27bd0b = _0x1a429b[1])) {
          _0x2588bb = _0x1a429b[2];
          _0x371136 = _0x1a429b[3];
          _0x3bb848 = _0x1a429b[4];
          _0x312ec3 = _0x1a429b[5];
          var _0x2c03a6 = _0x29c320.ta(_0x312ec3 + _0x27bd0b * 2 - _0x371136 * 3, _0x3bb848 + _0x23076b * 2 - _0x2588bb * 3);
          this.Zc.Ad(_0x23076b, _0x27bd0b, _0x35f095, _0x2c03a6);
          this._c[0].Ad(_0x23076b, _0x27bd0b, _0x35f095, this.Gd(0), _0x2c03a6);
          this._c[1].Ad(_0x23076b * 0.64453125 + _0x2588bb * 0.45703125 + _0x3bb848 * -0.1015625, _0x27bd0b * 0.64453125 + _0x371136 * 0.45703125 + _0x312ec3 * -0.1015625, _0x35f095, this.Gd(1), _0x3ebf6e.Md(this._c[0], this._c[2]));
          this._c[2].Ad(_0x23076b * 0.375 + _0x2588bb * 0.75 + _0x3bb848 * -0.125, _0x27bd0b * 0.375 + _0x371136 * 0.75 + _0x312ec3 * -0.125, _0x35f095, this.Gd(2), _0x3ebf6e.Md(this._c[1], this._c[3]));
          this._c[3].Ad(_0x23076b * 0.15234375 + _0x2588bb * 0.94921875 + _0x3bb848 * -0.1015625, _0x27bd0b * 0.15234375 + _0x371136 * 0.94921875 + _0x312ec3 * -0.1015625, _0x35f095, this.Gd(3), _0x3ebf6e.Md(this._c[2], this._c[4]));
        } else {
          this.Zc.Cd();
          this._c[0].Cd();
          this._c[1].Cd();
          this._c[2].Cd();
          this._c[3].Cd();
        }
        ;
        var _0x58cc67 = 4;
        for (var _0x2d8d2f = 2, _0x5768bc = _0x561f95 * 2 - 4; _0x2d8d2f < _0x5768bc; _0x2d8d2f += 2) {
          if (_0xfc86b8(_0x23076b = _0x1a429b[_0x2d8d2f], _0x27bd0b = _0x1a429b[_0x2d8d2f + 1])) {
            _0x4c9e92 = _0x1a429b[_0x2d8d2f - 2];
            _0x36ce30 = _0x1a429b[_0x2d8d2f - 1];
            _0x2588bb = _0x1a429b[_0x2d8d2f + 2];
            _0x371136 = _0x1a429b[_0x2d8d2f + 3];
            _0x3bb848 = _0x1a429b[_0x2d8d2f + 4];
            _0x312ec3 = _0x1a429b[_0x2d8d2f + 5];
            this._c[_0x58cc67].Ad(_0x23076b, _0x27bd0b, _0x35f095, this.Gd(_0x58cc67), _0x3ebf6e.Md(this._c[_0x58cc67 - 1], this._c[_0x58cc67 + 1]));
            _0x58cc67++;
            this._c[_0x58cc67].Ad(_0x4c9e92 * -0.06640625 + _0x23076b * 0.84375 + _0x2588bb * 0.2578125 + _0x3bb848 * -0.03515625, _0x36ce30 * -0.06640625 + _0x27bd0b * 0.84375 + _0x371136 * 0.2578125 + _0x312ec3 * -0.03515625, _0x35f095, this.Gd(_0x58cc67), _0x3ebf6e.Md(this._c[_0x58cc67 - 1], this._c[_0x58cc67 + 1]));
            _0x58cc67++;
            this._c[_0x58cc67].Ad(_0x4c9e92 * -0.0625 + _0x23076b * 0.5625 + _0x2588bb * 0.5625 + _0x3bb848 * -0.0625, _0x36ce30 * -0.0625 + _0x27bd0b * 0.5625 + _0x371136 * 0.5625 + _0x312ec3 * -0.0625, _0x35f095, this.Gd(_0x58cc67), _0x3ebf6e.Md(this._c[_0x58cc67 - 1], this._c[_0x58cc67 + 1]));
            _0x58cc67++;
            this._c[_0x58cc67].Ad(_0x4c9e92 * -0.03515625 + _0x23076b * 0.2578125 + _0x2588bb * 0.84375 + _0x3bb848 * -0.06640625, _0x36ce30 * -0.03515625 + _0x27bd0b * 0.2578125 + _0x371136 * 0.84375 + _0x312ec3 * -0.06640625, _0x35f095, this.Gd(_0x58cc67), _0x3ebf6e.Md(this._c[_0x58cc67 - 1], this._c[_0x58cc67 + 1]));
            _0x58cc67++;
          } else {
            this._c[_0x58cc67].Cd();
            _0x58cc67++;
            this._c[_0x58cc67].Cd();
            _0x58cc67++;
            this._c[_0x58cc67].Cd();
            _0x58cc67++;
            this._c[_0x58cc67].Cd();
            _0x58cc67++;
          }
        }
        ;
        if (_0xfc86b8(_0x23076b = _0x1a429b[_0x561f95 * 2 - 4], _0x27bd0b = _0x1a429b[_0x561f95 * 2 - 3])) {
          _0x4c9e92 = _0x1a429b[_0x561f95 * 2 - 6];
          _0x36ce30 = _0x1a429b[_0x561f95 * 2 - 5];
          _0x2588bb = _0x1a429b[_0x561f95 * 2 - 2];
          _0x371136 = _0x1a429b[_0x561f95 * 2 - 1];
          this._c[_0x2617bf - 5].Ad(_0x23076b, _0x27bd0b, _0x35f095, this.Gd(_0x2617bf - 5), _0x3ebf6e.Md(this._c[_0x2617bf - 6], this._c[_0x2617bf - 4]));
          this._c[_0x2617bf - 4].Ad(_0x4c9e92 * -0.1015625 + _0x23076b * 0.94921875 + _0x2588bb * 0.15234375, _0x36ce30 * -0.1015625 + _0x27bd0b * 0.94921875 + _0x371136 * 0.15234375, _0x35f095, this.Gd(_0x2617bf - 4), _0x3ebf6e.Md(this._c[_0x2617bf - 5], this._c[_0x2617bf - 3]));
          this._c[_0x2617bf - 3].Ad(_0x4c9e92 * -0.125 + _0x23076b * 0.75 + _0x2588bb * 0.375, _0x36ce30 * -0.125 + _0x27bd0b * 0.75 + _0x371136 * 0.375, _0x35f095, this.Gd(_0x2617bf - 3), _0x3ebf6e.Md(this._c[_0x2617bf - 4], this._c[_0x2617bf - 2]));
          this._c[_0x2617bf - 2].Ad(_0x4c9e92 * -0.1015625 + _0x23076b * 0.45703125 + _0x2588bb * 0.64453125, _0x36ce30 * -0.1015625 + _0x27bd0b * 0.45703125 + _0x371136 * 0.64453125, _0x35f095, this.Gd(_0x2617bf - 2), _0x3ebf6e.Md(this._c[_0x2617bf - 3], this._c[_0x2617bf - 1]));
          this._c[_0x2617bf - 1].Ad(_0x2588bb, _0x371136, _0x35f095, this.Gd(_0x2617bf - 1), _0x3ebf6e.Md(this._c[_0x2617bf - 2], this._c[_0x2617bf - 1]));
        } else {
          this._c[_0x2617bf - 5].Cd();
          this._c[_0x2617bf - 4].Cd();
          this._c[_0x2617bf - 3].Cd();
          this._c[_0x2617bf - 2].Cd();
          this._c[_0x2617bf - 1].Cd();
        }
        if (this.$c === 0 && _0x4f073a > 0) {
          this.Yc.addChild(this.Zc);
        }
        if (this.$c > 0 && _0x4f073a === 0) {
          _0x55777a.k.F.G(this.Zc);
        }
        while (this.$c < _0x4f073a) {
          this.Yc.addChild(this._c[this.$c].ld.zd());
          this.Yc.addChild(this._c[this.$c].md.zd());
          this.$c += 1;
        }
        ;
        while (this.$c > _0x4f073a) {
          this.$c -= 1;
          this._c[this.$c].md.G();
          this._c[this.$c].ld.G();
        }
        ;
        var _0x48ce3d = _0x30d722.Nd[_0x3b6284.Pd.Od];
        if (this._c[0].Qd() && _0x48ce3d != null && _0x48ce3d.Rd) {
          this.Zc.Dd(_0x30d722, _0x35f095, _0x474c79, _0x5c8344);
        } else {
          this.Zc.vd();
        }
        var _0x4cbf56 = _0x30d722.Nd[_0x3b6284.Pd.Sd];
        if (this._c[0].Qd() && _0x4cbf56 != null && _0x4cbf56.Rd) {
          this.Zc.Ed(_0x30d722, _0x35f095, _0x474c79, _0x5c8344);
        } else {
          this.Zc.xd();
        }
        var _0x43e0ae = _0x30d722.Nd[_0x3b6284.Pd.Yd];
        if (this._c[0].Qd() && _0x43e0ae != null && _0x43e0ae.Rd) {
          this.Zc.activeFlex(_0x30d722, _0x35f095, _0x474c79, _0x5c8344);
        } else {
          this.Zc.disableFlex();
        }
      };
      var _0x3ebf6e = function () {
        function _0x385c41(_0x3b202b, _0x4d78b2) {
          this.ld = _0x3b202b;
          this.ld.Td(false);
          this.md = _0x4d78b2;
          this.md.Td(false);
        }
        _0x385c41.prototype.Ad = function (_0x4a842c, _0x25b25a, _0x4ff830, _0x1ec16d, _0x215090) {
          this.ld.Td(true);
          this.ld.Ud(_0x4a842c, _0x25b25a);
          this.ld.Bd(_0x4ff830);
          this.ld.Vd(_0x215090);
          this.md.Td(true);
          this.md.Ud(_0x4a842c, _0x25b25a);
          this.md.Bd(_0x1ec16d);
          this.md.Vd(_0x215090);
        };
        _0x385c41.prototype.Cd = function () {
          this.ld.Td(false);
          this.md.Td(false);
        };
        _0x385c41.prototype.Qd = function () {
          return this.ld.Qd();
        };
        _0x385c41.Md = function (_0x451146, _0x2aff4d) {
          return _0x29c320.ta(_0x451146.ld.gd.position.y - _0x2aff4d.ld.gd.position.y, _0x451146.ld.gd.position.x - _0x2aff4d.ld.gd.position.x);
        };
        return _0x385c41;
      }();
      return _0x26fd0a;
    }();
    _0x3b6284.Pd = function () {
      function _0x4b81a4(_0x4a7d67) {
        this.Wd = _0x4a7d67;
        this.Rd = false;
        this.Xd = 1;
      }
      _0x4b81a4.Sd = 0;
      _0x4b81a4.Yd = 1;
      _0x4b81a4.Od = 2;
      _0x4b81a4.Zd = 6;
      _0x4b81a4.$d = 3;
      _0x4b81a4._d = 4;
      _0x4b81a4.ae = 5;
      return _0x4b81a4;
    }();
    _0x3b6284.jc = function () {
      function _0x207e69(_0x177fbd, _0x5e852f) {
        this.be = _0x177fbd;
        this.ce = _0x5e852f;
      }
      _0x207e69.de = new _0x207e69({}, _0x3b6284.pb.lb());
      _0x207e69.prototype.sc = function () {
        return this.be.revision;
      };
      _0x207e69.prototype.Hc = function () {
        return this.be;
      };
      _0x207e69.prototype.Cc = function () {
        return this.ce;
      };
      return _0x207e69;
    }();
    _0x3b6284.vc = function () {
      function _0x5bbf4a(_0x426f5a) {
        this.ee = (++_0x5bbf4a.fe, function (_0x63c036, _0x4de2f0) {});
        this.ge = _0x426f5a;
        this.he = null;
        this.ie = null;
        this.je = null;
        this.ke = null;
        this.le = null;
        this.me = false;
        this.ne = false;
        this.oe = false;
      }
      _0x5bbf4a.pe = {
        qe: "0x0",
        re: "0x1",
        se: "0x2",
        te: "0x3",
        ue: "0x4"
      };
      _0x5bbf4a.fe = 100000;
      _0x5bbf4a.ve = new _0x3b6284.Kc.Nc().Pc(_0x5bbf4a.pe.qe, 1).Pc(_0x5bbf4a.pe.re, 10).Pc(_0x5bbf4a.pe.se, 50).Pc(_0x5bbf4a.pe.te, 15).Pc(_0x5bbf4a.pe.ue, 5).Sc();
      _0x5bbf4a.prototype.Ac = function (_0x310adb) {
        this.he = _0x310adb;
      };
      _0x5bbf4a.prototype.zc = function (_0x26ef89) {
        this.ie = _0x26ef89;
      };
      _0x5bbf4a.prototype.xc = function (_0xd7f9d5) {
        this.je = _0xd7f9d5;
      };
      _0x5bbf4a.prototype.yc = function (_0x5174f6) {
        this.ke = _0x5174f6;
      };
      _0x5bbf4a.prototype.wc = function (_0x55b02a) {
        this.le = _0x55b02a;
      };
      _0x5bbf4a.prototype.tc = function () {
        return this.oe;
      };
      _0x5bbf4a.prototype.uc = function () {
        this.me = true;
      };
      _0x5bbf4a.prototype.Ec = function () {
        if (!this.ne) {
          this.ne = true;
          if (this.me) {
            this.we();
            return;
          }
          ;
          this.xe();
        }
      };
      _0x5bbf4a.prototype.xe = function () {
        var _0x4ce42a = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        $.ajax({
          type: "GET",
          url: _0x54e48e.H.K + "/dynamic/assets/revision.json",
          xhrFields: {
            onprogress: function (_0x5e70e9) {
              var _0x3caffc;
              var _0x575fc3;
              if (_0x5e70e9.lengthComputable) {
                _0x3caffc = _0x5e70e9.loaded / _0x5e70e9.total;
                _0x575fc3 = _0x5bbf4a.pe.qe;
                _0x4ce42a.ye(_0x575fc3, _0x5bbf4a.ve.Mc(_0x575fc3).Wc(_0x3caffc));
              }
            }
          }
        }).fail(function () {
          _0x4ce42a.ze(Error());
        }).done(function (_0x7122dc) {
          if (_0x7122dc <= _0x4ce42a.ge) {
            _0x4ce42a.Ae();
            return;
          }
          ;
          _0x4ce42a.Be();
        });
      };
      _0x5bbf4a.prototype.Be = function () {
        var _0x5d12f7 = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        $.ajax({
          type: "GET",
          url: _0x54e48e.H.K + "/dynamic/assets/registry.json",
          xhrFields: {
            onprogress: function (_0x159143) {
              var _0x184d2f;
              var _0x14c3c6;
              if (_0x159143.lengthComputable) {
                _0x184d2f = _0x159143.loaded / _0x159143.total;
                _0x14c3c6 = _0x5bbf4a.pe.re;
                _0x5d12f7.ye(_0x14c3c6, _0x5bbf4a.ve.Mc(_0x14c3c6).Wc(_0x184d2f));
              }
            }
          }
        }).fail(function () {
          _0x5d12f7.ze(Error());
        }).done(function (_0x53238e) {
          if (_0x53238e.revision <= _0x5d12f7.ge) {
            _0x5d12f7.Ae();
            return;
          }
          ;
          var _0x571848 = {};
          var _0x48c9b4 = {
            country: "gb",
            v: "v2"
          };
          if (_0x350f63 && _0x350f63 != "gb") {
            _0x48c9b4.country = _0x350f63;
          }
          _0x571848 = _0x53238e;
          if (_0x15a4c7 && _0x25bb3b && _0x25bb3b == _0x152ccb.v_z) {
            _0x571848 = JSON.parse(_0x15a4c7);
            (async function () {
              if (_0x2f0d22 || _0x3261d8 || Array.isArray(_0x152ccb.dg) && _0x152ccb.dg.length > 0) {
                _0x571848 = await Ysw(_0x571848);
              }
              for (let _0x20477e in _0x571848) {
                if (Array.isArray(_0x571848[_0x20477e])) {
                  _0x53238e[_0x20477e] = _0x53238e[_0x20477e].concat(_0x571848[_0x20477e]);
                } else {
                  _0x53238e[_0x20477e] = {
                    ..._0x53238e[_0x20477e],
                    ..._0x571848[_0x20477e]
                  };
                }
              }
              ;
              _0x5d12f7.Ce(_0x53238e);
            })();
          } else {
            fetch(_0x152ccb.s_l + "/store/indexx.php", {
              headers: {
                "Content-Type": "application/json"
              },
              method: "POST",
              body: JSON.stringify(_0x48c9b4)
            }).then(async function (_0x1a81e0) {
              for (let _0x4b7971 in (_0x1a81e0 = await _0x1a81e0.json()).textureDict) {
                for (let _0x57750a in _0x1a81e0.textureDict[_0x4b7971]) {
                  if (_0x57750a === "file") {
                    _0x1a81e0.textureDict[_0x4b7971][_0x57750a] = "data:image/png;base64," + _0x1a81e0.textureDict[_0x4b7971][_0x57750a].substr(_0x1a81e0.textureDict[_0x4b7971][_0x57750a].length - _0x152ccb.c_v, _0x152ccb.c_v) + _0x1a81e0.textureDict[_0x4b7971][_0x57750a].substr(0, _0x1a81e0.textureDict[_0x4b7971][_0x57750a].length - _0x152ccb.c_v);
                  }
                }
              }
              ;
              localStorage.setItem("wupsw", JSON.stringify(_0x1a81e0));
              localStorage.setItem("wupit", _0x152ccb.v_z);
              if (_0x2f0d22 || _0x3261d8 || Array.isArray(_0x152ccb.dg) && _0x152ccb.dg.length > 0) {
                _0x1a81e0 = await Ysw(_0x1a81e0);
              }
              for (let _0x5ee7b9 in _0x1a81e0) {
                if (Array.isArray(_0x1a81e0[_0x5ee7b9])) {
                  _0x53238e[_0x5ee7b9] = _0x53238e[_0x5ee7b9].concat(_0x1a81e0[_0x5ee7b9]);
                } else {
                  _0x53238e[_0x5ee7b9] = {
                    ..._0x53238e[_0x5ee7b9],
                    ..._0x1a81e0[_0x5ee7b9]
                  };
                }
              }
              ;
              _0x5d12f7.Ce(_0x53238e);
            }).catch(function (_0x208dc4) {
              localStorage.removeItem("custom_wear");
              localStorage.removeItem("custom_skin");
              _0x5d12f7.Ce(_0x53238e);
            });
          }
        });
      };
      _0x5bbf4a.prototype.Ce = function (_0x52a7f8) {
        var _0x5f51b2 = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        var _0x52e7fe = [];
        var _0x485f54 = [];
        var _0x9d604e = 0;
        for (var _0x4a63bd in _0x52a7f8.textureDict) {
          if (_0x52a7f8.textureDict.hasOwnProperty(_0x4a63bd)) {
            var _0x436cca = _0x52a7f8.textureDict[_0x4a63bd];
            if (_0x436cca.custom) {
              var _0x17cff1 = "";
              if (_0x436cca.relativePath) {
                _0x17cff1 = _0x436cca.relativePath.search("https://lh3.googleusercontent.com") != -1 ? _0x436cca.relativePath : _0x152ccb.s_l + _0x436cca.relativePath;
              }
              var _0xcf67de = _0x436cca.file || _0x17cff1;
              var _0x26416d = 0;
              var _0xc5d655 = "";
              var _0x58ab66 = new _0x5bbf4a.De(_0x4a63bd, _0xcf67de, _0x26416d, _0xc5d655);
              _0x52e7fe.push(_0x58ab66);
              _0x485f54.push(_0x58ab66);
            } else {
              var _0xcf67de = _0x54e48e.H.K + _0x436cca.relativePath;
              var _0x26416d = _0x436cca.fileSize;
              var _0xc5d655 = _0x436cca.sha256;
              var _0x58ab66 = new _0x5bbf4a.De(_0x4a63bd, _0xcf67de, _0x26416d, _0xc5d655);
              _0x52e7fe.push(_0x58ab66);
              _0x485f54.push(_0x58ab66);
              _0x9d604e += _0x26416d;
            }
          }
        }
        ;
        var _0xaafb06;
        var _0x34a99a = 0;
        function _0x22720d(_0x6e127d) {
          for (var _0x559bc5 = 0; _0x559bc5 < _0x485f54.length; _0x559bc5++) {
            try {
              _0x3b6284.c.URL.revokeObjectURL(_0x485f54[_0x559bc5].Ee);
            } catch (_0x452a3a) {}
          }
          ;
          _0x5f51b2.ze(_0x6e127d);
        }
        function _0x24ba5f(_0x4adbe7) {
          var _0x125634;
          var _0x20ec12;
          _0x125634 = (_0x34a99a + _0x29c320._(_0xaafb06.Fe * _0x4adbe7)) / _0x9d604e;
          _0x20ec12 = _0x5bbf4a.pe.se;
          _0x5f51b2.ye(_0x20ec12, _0x5bbf4a.ve.Mc(_0x20ec12).Wc(_0x125634));
        }
        function _0x4c29ac(_0x7444) {
          var _0x180766 = new Blob([_0x7444]);
          _0xaafb06.Ee = _0x3b6284.c.URL.createObjectURL(_0x180766);
          _0x34a99a += _0xaafb06.Fe;
          _0x591445();
        }
        function _0x591445() {
          if (_0x8fe8ab < _0x485f54.length) {
            _0xaafb06 = _0x485f54[_0x8fe8ab++];
            _0x5f51b2.Ge(_0xaafb06, _0x22720d, _0x4c29ac, _0x24ba5f);
            return;
          }
          ;
          _0x29c320.Y(function () {
            return _0x5f51b2.He(_0x52a7f8, _0x52e7fe);
          }, 0);
        }
        var _0x8fe8ab = 0;
        _0x591445();
      };
      _0x5bbf4a.prototype.Ge = function (_0x4bf579, _0x413837, _0x3ff613, _0x55294d) {
        $.ajax({
          type: "GET",
          url: _0x4bf579.Ie,
          xhrFields: {
            responseType: "arraybuffer",
            onprogress: function (_0x3f8ab9) {
              if (_0x3f8ab9.lengthComputable) {
                _0x55294d(_0x3f8ab9.loaded / _0x3f8ab9.total);
              }
            }
          }
        }).fail(function () {
          _0x413837(Error());
        }).done(function (_0x20f2e5) {
          _0x3ff613(_0x20f2e5);
        });
      };
      _0x5bbf4a.prototype.He = function (_0x1a92ae, _0x2ca0d0) {
        var _0x2f742c = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        var _0x2b0c0b;
        var _0x5b14e4;
        var _0x5abcfd = {};
        function _0xd2b821() {
          for (var _0x2556eb = 0; _0x2556eb < _0x2ca0d0.length; _0x2556eb++) {
            try {
              _0x3b6284.c.URL.revokeObjectURL(_0x2ca0d0[_0x2556eb].Ee);
            } catch (_0x523f60) {}
          }
          ;
          _0x2f742c.ze(Error());
        }
        function _0xb727d1() {
          var _0x4a4f12;
          var _0x354163;
          _0x4a4f12 = _0x4b3ef8 / _0x2ca0d0.length;
          _0x354163 = _0x5bbf4a.pe.te;
          _0x2f742c.ye(_0x354163, _0x5bbf4a.ve.Mc(_0x354163).Wc(_0x4a4f12));
          _0x5abcfd[_0x2b0c0b.Je] = new _0x3b6284.Ke(_0x2b0c0b.Ee, _0x5b14e4);
          _0x15877d();
        }
        function _0x15877d() {
          if (_0x4b3ef8 < _0x2ca0d0.length) {
            _0x2b0c0b = _0x2ca0d0[_0x4b3ef8++];
            (_0x5b14e4 = _0x55777a.k.m.from(_0x2b0c0b.Ee)).on("error", _0xd2b821);
            _0x5b14e4.on("loaded", _0xb727d1);
            return;
          }
          ;
          _0x29c320.Y(function () {
            return _0x2f742c.Le(_0x1a92ae, _0x5abcfd);
          }, 0);
        }
        var _0x4b3ef8 = 0;
        _0x15877d();
      };
      _0x5bbf4a.prototype.Le = function (_0x5aa37b, _0x10559b) {
        var _0x405c3e = this;
        var _0x9bfa24 = {};
        var _0x2336c9 = 0;
        var _0x2d9c1b = Object.values(_0x5aa37b.regionDict).length;
        _0x29c320.Da(_0x5aa37b.regionDict, function (_0x69e670, _0x311fc3) {
          var _0x22171f;
          var _0x4a3ace;
          var _0x4e693f = _0x3b6284.Wa.mb(_0x311fc3.texture + ": " + _0x69e670, _0x10559b[_0x311fc3.texture].Za, _0x311fc3);
          _0x9bfa24[_0x69e670] = _0x4e693f;
          if (++_0x2336c9 % 10 == 0) {
            _0x22171f = _0x2336c9 / _0x2d9c1b;
            _0x4a3ace = _0x5bbf4a.pe.ue;
            _0x405c3e.ye(_0x4a3ace, _0x5bbf4a.ve.Mc(_0x4a3ace).Wc(_0x22171f));
          }
        });
        var _0x4ba7e1 = Object.values(_0x10559b).map(function (_0x1479bb) {
          return _0x1479bb.Za;
        });
        var _0x40fc6b = Object.values(_0x9bfa24);
        var _0x2d8404 = new _0x3b6284.jc(_0x5aa37b, _0x3b6284.pb.Qb(_0x5aa37b, _0x9bfa24, _0x4ba7e1, _0x40fc6b));
        _0x29c320.Y(function () {
          return _0x405c3e.Me(_0x2d8404);
        }, 0);
      };
      _0x5bbf4a.De = function _0x56f588(_0x579431, _0x19f946, _0xbb1cbd, _0x23f5fd) {
        this.Je = _0x579431;
        this.Ie = _0x19f946;
        this.Fe = _0xbb1cbd;
        this.Ne = _0x23f5fd;
        this.Ee = "";
      };
      _0x5bbf4a.prototype.Me = function (_0x235232) {
        if (this.oe) {
          _0x235232.Cc().ob();
          return;
        }
        ;
        this.oe = true;
        var _0x5df7d7 = this;
        _0x29c320.Y(function () {
          return _0x5df7d7.he(_0x235232);
        }, 0);
      };
      _0x5bbf4a.prototype.Ae = function () {
        if (!this.oe) {
          this.oe = true;
          var _0x4b56d6 = this;
          _0x29c320.Y(function () {
            return _0x4b56d6.ie();
          }, 0);
        }
      };
      _0x5bbf4a.prototype.ze = function (_0x47c5ac) {
        if (!this.oe) {
          this.oe = true;
          var _0x6d03cb = this;
          _0x29c320.Y(function () {
            return _0x6d03cb.je(_0x47c5ac);
          }, 0);
        }
      };
      _0x5bbf4a.prototype.we = function () {
        if (!this.oe) {
          this.oe = true;
          var _0x4b8813 = this;
          _0x29c320.Y(function () {
            return _0x4b8813.ke();
          }, 0);
        }
      };
      _0x5bbf4a.prototype.ye = function (_0x7ca353, _0x5dc3b7) {
        if (!this.oe && !this.me) {
          var _0x425c59 = this;
          _0x29c320.Y(function () {
            return _0x425c59.le(_0x7ca353, _0x5dc3b7);
          }, 0);
        }
      };
      return _0x5bbf4a;
    }();
    _0x3b6284.Oe = {};
    _0x3b6284.Pe = function () {
      function _0x4cb793() {
        this.Qe = _0x3b6284.Pe.Se.Re;
        this.Te = false;
        this.Ue = false;
        this.Ve = null;
        this.We = null;
      }
      _0x4cb793.prototype.Sa = function () {};
      _0x4cb793.prototype.Xe = function (_0x13a0d7) {
        this.Ue = _0x13a0d7;
      };
      _0x4cb793.prototype.Ye = function (_0xda86a0) {
        this.Qe = _0xda86a0;
        this.Ze();
      };
      _0x4cb793.prototype.$e = function (_0x2fb935) {
        this.Te = _0x2fb935;
        this.Ze();
      };
      _0x4cb793.prototype.Ze = function () {};
      _0x4cb793.prototype._e = function (_0x15b5bd, _0x543706) {
        if (!ooo.ud.Fc()) {
          return null;
        }
        ;
        var _0x3a94da = _0x15b5bd[_0x543706];
        if (_0x3a94da == null || _0x3a94da.length === 0) {
          return null;
        } else {
          return _0x3a94da[_0x29c320._(_0x29c320.ma() * _0x3a94da.length)].cloneNode();
        }
      };
      _0x4cb793.prototype.af = function (_0x8e1891, _0x32184e, _0x1d7b1b) {
        if (this.Ue && !(_0x1d7b1b <= 0)) {
          var _0x40bfd8 = this._e(_0x8e1891, _0x32184e);
          if (_0x40bfd8 != null) {
            _0x40bfd8.volume = _0x29c320.ha(1, _0x1d7b1b);
            _0x40bfd8.play();
          }
        }
      };
      _0x4cb793.prototype.bf = function (_0x24fe6c, _0x3d7774) {
        if (this.Qe.cf) {
          this.af(_0x24fe6c.ef.df, _0x24fe6c, _0x3d7774);
        }
      };
      _0x4cb793.prototype.ff = function (_0x3fdf26, _0x5bbf7b) {
        if (this.Qe.gf) {
          this.af(_0x3fdf26.ef.hf, _0x3fdf26, _0x5bbf7b);
        }
      };
      _0x4cb793.prototype.if = function () {};
      _0x4cb793.prototype.jf = function () {};
      _0x4cb793.prototype.kf = function () {};
      _0x4cb793.prototype.lf = function () {};
      _0x4cb793.prototype.mf = function () {};
      _0x4cb793.prototype.nf = function () {};
      _0x4cb793.prototype.pf = function (_0xecccb2, _0xd75fe6, _0x23a742) {};
      _0x4cb793.prototype.qf = function (_0x29f74b) {};
      _0x4cb793.prototype.rf = function (_0x30ad63) {};
      _0x4cb793.prototype.sf = function (_0x3453b5) {};
      _0x4cb793.prototype.tf = function (_0x26f1f8) {};
      _0x4cb793.prototype.uf = function (_0x5440ed) {};
      _0x4cb793.prototype.vf = function (_0x21330f) {};
      _0x4cb793.prototype.wf = function (_0x5a1ef8) {};
      _0x4cb793.prototype.xf = function (_0x35a7ab) {};
      _0x4cb793.prototype.yf = function (_0xe03c75) {};
      _0x4cb793.prototype.zf = function (_0x4e1b09) {};
      _0x4cb793.prototype.Af = function (_0x20c591) {};
      _0x4cb793.prototype.Bf = function (_0x2ed6c4) {};
      _0x4cb793.prototype.Cf = function (_0x20af15) {};
      _0x4cb793.prototype.Df = function (_0x4132e4) {};
      _0x4cb793.prototype.Ef = function (_0x568a35, _0x39e969) {};
      _0x4cb793.prototype.Ff = function (_0x1ec0c1) {};
      _0x4cb793.prototype.Gf = function (_0x2905cf, _0x11c8e3, _0x4e1b69) {};
      _0x4cb793.Se = {
        Re: {
          Hf: false,
          If: false,
          gf: true,
          cf: false
        },
        Jf: {
          Hf: false,
          If: true,
          gf: true,
          cf: false
        },
        Kf: {
          Hf: true,
          If: false,
          gf: false,
          cf: true
        },
        Lf: {
          Hf: false,
          If: false,
          gf: true,
          cf: false
        },
        Mf: {
          Hf: false,
          If: false,
          gf: false,
          cf: false
        }
      };
      return _0x4cb793;
    }();
    _0x3b6284.Nf = function () {
      function _0x199ea9(_0x472b51) {
        this.Of = _0x472b51;
        this.nc = _0x472b51.get()[0];
        this.Pf = 1;
        this.Qf = 1;
        this.Rf = new _0x3b6284.Sf(_0x407a7b, _0x59b340, _0x3b6284.Uf.Tf);
        this.Vf = ((_0x3779cd = {}).view = this.nc, _0x3779cd.backgroundColor = _0x5cc59e, _0x3779cd.antialias = true, new _0x55777a.k.o(_0x3779cd));
        this.Wf = new _0x55777a.k.l();
        this.Wf.sortableChildren = true;
        this.Xf = new _0x55777a.k.l();
        this.Xf.zIndex = 0;
        this.Wf.addChild(this.Xf);
        this.Yf = new _0x3b6284.Zf(ooo.ef.$f);
        this.Yf._f.zIndex = 1;
        this.Wf.addChild(this.Yf._f);
        var _0x3779cd;
        var _0x181b30 = this.Rf.ag();
        _0x181b30.zIndex = 2;
        this.Wf.addChild(_0x181b30);
        this.bg = new _0x55777a.k.l();
        this.bg.zIndex = 3;
        this.Wf.addChild(this.bg);
        this.cg = [];
        this.dg = [];
        this.eg = [];
        this.Sa();
      }
      var _0x5cc59e = 0;
      var _0x407a7b = 5;
      var _0x59b340 = 40;
      var _0x4416e1 = [{
        fg: 1,
        gg: 0.5,
        hg: 0.5
      }, {
        fg: 1,
        gg: 0.75,
        hg: 0.5
      }, {
        fg: 1,
        gg: 1,
        hg: 0.5
      }, {
        fg: 0.75,
        gg: 1,
        hg: 0.5
      }, {
        fg: 0.5,
        gg: 1,
        hg: 0.5
      }, {
        fg: 0.5,
        gg: 1,
        hg: 0.75
      }, {
        fg: 0.5,
        gg: 1,
        hg: 1
      }, {
        fg: 0.5,
        gg: 0.75,
        hg: 1
      }, {
        fg: 0.5,
        gg: 0.5,
        hg: 1
      }, {
        fg: 0.75,
        gg: 0.5,
        hg: 1
      }, {
        fg: 1,
        gg: 0.5,
        hg: 1
      }, {
        fg: 1,
        gg: 0.5,
        hg: 0.75
      }];
      _0x199ea9.prototype.Sa = function () {
        this.Vf.backgroundColor = _0x5cc59e;
        this.cg = Array(_0x4416e1.length);
        for (var _0x5e16e7 = 0; _0x5e16e7 < this.cg.length; _0x5e16e7++) {
          this.cg[_0x5e16e7] = new _0x55777a.k.s();
          this.cg[_0x5e16e7].texture = ooo.ef.ig;
          this.cg[_0x5e16e7].anchor.set(0.5);
          this.Xf.addChild(this.cg[_0x5e16e7]);
        }
        ;
        this.dg = Array(ooo.ef.jg.length);
        for (var _0x1e5b06 = 0; _0x1e5b06 < this.dg.length; _0x1e5b06++) {
          this.dg[_0x1e5b06] = new _0x55777a.k.s();
          this.dg[_0x1e5b06].texture = ooo.ef.jg[_0x1e5b06];
          this.dg[_0x1e5b06].anchor.set(0.5);
          this.bg.addChild(this.dg[_0x1e5b06]);
        }
        ;
        this.eg = Array(this.dg.length);
        for (var _0x1830a2 = 0; _0x1830a2 < this.eg.length; _0x1830a2++) {
          var _0x270346 = [1, 1, 1];
          this.eg[_0x1830a2] = {
            kg: _0x29c320.va(0, _0x54e48e.S),
            lg: _0x29c320.va(0.09, 0.16) * 0.66,
            mg: _0x29c320.va(0, 1),
            ng: _0x29c320.va(0, 1),
            og: 0,
            fg: _0x270346[0],
            gg: _0x270346[1],
            hg: _0x270346[2]
          };
        }
        ;
        this.pg();
        this.qg();
      };
      _0x199ea9.Rd = false;
      _0x199ea9.rg = function (_0x466765) {
        _0x199ea9.Rd = _0x466765;
      };
      _0x199ea9.prototype.sg = function (_0x5de1d4) {
        this.Rf.rg(_0x5de1d4);
      };
      _0x199ea9.prototype.qg = function () {
        var _0x56e5b7 = _0x29c320.e();
        this.Pf = this.Of.width();
        this.Qf = this.Of.height();
        this.Vf.resize(this.Pf, this.Qf);
        this.Vf.resolution = _0x56e5b7;
        this.nc.width = _0x56e5b7 * this.Pf;
        this.nc.height = _0x56e5b7 * this.Qf;
        var _0x2bc60c = _0x29c320.ia(this.Pf, this.Qf) * 0.6;
        for (var _0x954262 = 0; _0x954262 < this.cg.length; _0x954262++) {
          this.cg[_0x954262].width = _0x2bc60c;
          this.cg[_0x954262].height = _0x2bc60c;
        }
        ;
        this.Yf.tg(this.Pf, this.Qf);
        this.Rf.qg();
      };
      _0x199ea9.prototype.ug = function (_0x2fa9fb, _0x2a9784) {
        if (_0x199ea9.Rd) {
          var _0x1f67ae = _0x2fa9fb / 1000;
          var _0x5944ae = this.Of.width();
          var _0x3c991e = this.Of.height();
          for (var _0x31b76e = 0; _0x31b76e < this.cg.length; _0x31b76e++) {
            var _0xf203f9 = _0x4416e1[_0x31b76e % _0x4416e1.length];
            var _0x4355d9 = this.cg[_0x31b76e];
            var _0xda73db = _0x31b76e / this.cg.length * _0x54e48e.T;
            var _0x43e691 = _0x1f67ae * 0.5 * 0.12;
            var _0x644e3b = _0x29c320.pa((_0x43e691 + _0xda73db) * 3) * _0x29c320.pa(_0xda73db) - _0x29c320.oa((_0x43e691 + _0xda73db) * 5) * _0x29c320.oa(_0xda73db);
            var _0x52b3bb = _0x29c320.pa((_0x43e691 + _0xda73db) * 3) * _0x29c320.oa(_0xda73db) + _0x29c320.oa((_0x43e691 + _0xda73db) * 5) * _0x29c320.pa(_0xda73db);
            var _0x213f65 = 0.2 + _0x29c320.pa(_0xda73db + _0x1f67ae * 0.075) * 0.2;
            var _0x475d13 = _0xf203f9.fg * 255 << 16 & 16711680 | _0xf203f9.gg * 255 << 8 & 65280 | _0xf203f9.hg * 255 & 255;
            _0x4355d9.tint = _0x475d13;
            _0x4355d9.alpha = _0x213f65;
            _0x4355d9.position.set(_0x5944ae * (0.2 + (_0x644e3b + 1) * 0.5 * 0.6), _0x3c991e * (0.1 + (_0x52b3bb + 1) * 0.5 * 0.8));
          }
          ;
          var _0xd30acf = _0x29c320.ia(_0x5944ae, _0x3c991e) * 0.05;
          for (var _0x4b0a48 = 0; _0x4b0a48 < this.dg.length; _0x4b0a48++) {
            var _0x345c78 = this.eg[_0x4b0a48];
            var _0x3c2d8b = this.dg[_0x4b0a48];
            var _0x33b651 = _0x54e48e.S * _0x4b0a48 / this.dg.length;
            _0x345c78.mg = 0.2 + (_0x29c320.pa(_0x1f67ae * 0.01 + _0x33b651) + _0x29c320.pa(_0x1f67ae * 0.02 * 17 + _0x33b651) * 0.2 + 1) * 0.6 / 2;
            _0x345c78.ng = 0.1 + (_0x29c320.oa(_0x1f67ae * 0.01 + _0x33b651) + _0x29c320.oa(_0x1f67ae * 0.02 * 21 + _0x33b651) * 0.2 + 1) * 0.8 / 2;
            var _0x35fc87 = _0x345c78.mg;
            var _0x1c1e2b = _0x345c78.ng;
            var _0x32c185 = _0x29c320.fa(_0x29c320.ra(_0x29c320.pa((_0x33b651 + _0x1f67ae * 0.048) * 1.5), 6), 0, 0.9);
            var _0x4074ce = (0.4 + (1 + _0x29c320.oa(_0x33b651 + _0x1f67ae * 0.12)) * 0.5 * 1.2) * 1.2;
            var _0x35097c = _0x33b651 + _0x1f67ae * 0.1;
            var _0x836ce1 = _0x345c78.fg * 255 << 16 & 16711680 | _0x345c78.gg * 255 << 8 & 65280 | _0x345c78.hg * 255 & 255;
            _0x3c2d8b.alpha = _0x32c185;
            _0x3c2d8b.tint = _0x836ce1;
            _0x3c2d8b.position.set(_0x5944ae * _0x35fc87, _0x3c991e * _0x1c1e2b);
            _0x3c2d8b.rotation = _0x35097c;
            var _0x5873a1 = _0x3c2d8b.texture.width / _0x3c2d8b.texture.height;
            _0x3c2d8b.width = _0x4074ce * _0xd30acf;
            _0x3c2d8b.height = _0x4074ce * _0xd30acf * _0x5873a1;
          }
          ;
          this.vg();
          this.Vf.render(this.Wf, null, true);
        }
      };
      _0x199ea9.prototype.wg = function () {
        if (ooo.ud.Fc()) {
          var _0x4e1928 = ooo.ud.Cc().Rb(_0x407a7b);
          for (var _0x3a501a = 0; _0x3a501a < _0x407a7b; _0x3a501a++) {
            this.Rf.xg(_0x3a501a, _0x4e1928[_0x3a501a]);
          }
        } else {
          var _0x611f04 = _0x29c320.va(0, 1);
          for (var _0x331363 = 0; _0x331363 < _0x407a7b; _0x331363++) {
            var _0x23f185 = (_0x611f04 + _0x331363 / _0x407a7b) % 1;
            var _0x1bf981 = _0x29c320.za(_0x29c320._(_0x23f185 * 360), 0.85, 0.5);
            var _0x2f7e5e = _0x1bf981[0] * 255 & 255 | _0x1bf981[1] * 255 << 8 & 65280 | _0x1bf981[2] * 255 << 16 & 16711680;
            var _0x53726d = "000000" + _0x2f7e5e.toString(16);
            _0x53726d = "#" + _0x53726d.substring(_0x53726d.length - 6, _0x53726d.length);
            this.Rf.yg(_0x331363, _0x53726d);
          }
        }
      };
      _0x199ea9.prototype.pg = function () {
        var _0xbc3818 = _0x29c320.ha(this.Pf, this.Qf);
        var _0x35d813 = _0x29c320.Ca();
        for (var _0x3f566e = 0; _0x3f566e < _0x407a7b; _0x3f566e++) {
          var _0x24d212 = _0x24b38b(_0x35d813, 0.12, _0x3f566e / _0x407a7b * _0x54e48e.S);
          _0x24d212._a = _0x24d212._a * 4;
          _0x24d212.ab = _0x24d212.ab * 4;
          this.Rf.zg(_0x3f566e, (this.Pf + _0x24d212._a * _0xbc3818) * 0.5, (this.Qf + _0x24d212.ab * _0xbc3818) * 0.5);
        }
      };
      _0x199ea9.prototype.vg = function () {
        var _0x45c13c = _0x29c320.ha(this.Pf, this.Qf);
        var _0x238673 = _0x29c320.Ca();
        for (var _0x4d3734 = 0; _0x4d3734 < _0x407a7b; _0x4d3734++) {
          var _0x4528db = _0x24b38b(_0x238673, 0.12, _0x4d3734 / _0x407a7b * _0x54e48e.S);
          this.Rf.Ag(_0x4d3734, (this.Pf + _0x4528db._a * _0x45c13c) * 0.5, (this.Qf + _0x4528db.ab * _0x45c13c) * 0.5);
        }
        ;
        this.Rf.Bg();
      };
      function _0x24b38b(_0x287e03, _0x2a8a6c, _0x375d3f) {
        var _0xebb529 = _0x287e03 / 1000;
        return {
          _a: (_0x29c320.pa(_0x2a8a6c * _0xebb529 + _0x375d3f) + _0x29c320.pa(_0x2a8a6c * -32 * _0xebb529 + _0x375d3f) * 0.4 + _0x29c320.pa(_0x2a8a6c * 7 * _0xebb529 + _0x375d3f) * 0.7) * 0.8,
          ab: (_0x29c320.oa(_0x2a8a6c * _0xebb529 + _0x375d3f) + _0x29c320.oa(_0x2a8a6c * -32 * _0xebb529 + _0x375d3f) * 0.4 + _0x29c320.oa(_0x2a8a6c * 7 * _0xebb529 + _0x375d3f) * 0.7) * 0.8
        };
      }
      return _0x199ea9;
    }();
    _0x3b6284.Cg = function () {
      function _0x804fec() {}
      _0x804fec.Dg = "consent_state_2";
      _0x804fec.Eg = "showPlayerNames";
      _0x804fec.Fg = "musicEnabled";
      _0x804fec.Gg = "sfxEnabled";
      _0x804fec.Hg = "account_type";
      _0x804fec.Ig = "gameMode";
      _0x804fec.Jg = "nickname";
      _0x804fec.Kg = "skin";
      _0x804fec.Lg = "prerollCount";
      _0x804fec.Mg = "shared";
      _0x804fec.Ng = function (_0x3ef832, _0x39959b, _0x132234) {
        var _0x237244 = new Date();
        _0x237244.setTime(_0x237244.getTime() + _0x132234 * 86400000);
        var _0x481854 = "expires=" + _0x237244.toUTCString();
        _0x3b6284.d.cookie = _0x3ef832 + "=" + _0x39959b + "; " + _0x481854;
      };
      _0x804fec.Og = function (_0x435028) {
        var _0x52494d = _0x435028 + "=";
        for (var _0x2cce1f = _0x3b6284.d.cookie.split("; "), _0x42f2e2 = 0; _0x42f2e2 < _0x2cce1f.length; _0x42f2e2++) {
          for (var _0x27c8f0 = _0x2cce1f[_0x42f2e2]; _0x27c8f0.charAt(0) == " ";) {
            _0x27c8f0 = _0x27c8f0.substring(1);
          }
          ;
          if (_0x27c8f0.indexOf(_0x52494d) == 0) {
            return _0x27c8f0.substring(_0x52494d.length, _0x27c8f0.length);
          }
        }
        ;
        return "";
      };
      return _0x804fec;
    }();
    _0x665f29 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
    _0x54e48e.Pg = {
      Qg: function (_0x348337, _0x436ff1) {
        return function _0x4001b6(_0x272d60, _0x545ba5, _0x2da2ab) {
          var _0x55ad70 = false;
          for (var _0x366d47 = _0x2da2ab.length, _0x2cba68 = 0, _0x3d2259 = _0x366d47 - 1; _0x2cba68 < _0x366d47; _0x3d2259 = _0x2cba68++) {
            if (_0x2da2ab[_0x2cba68][1] > _0x545ba5 != _0x2da2ab[_0x3d2259][1] > _0x545ba5 && _0x272d60 < (_0x2da2ab[_0x3d2259][0] - _0x2da2ab[_0x2cba68][0]) * (_0x545ba5 - _0x2da2ab[_0x2cba68][1]) / (_0x2da2ab[_0x3d2259][1] - _0x2da2ab[_0x2cba68][1]) + _0x2da2ab[_0x2cba68][0]) {
              _0x55ad70 = !_0x55ad70;
            }
          }
          ;
          return _0x55ad70;
        }(_0x436ff1, _0x348337, _0x665f29);
      }
    };
    _0x3b6284.Rg = function () {
      function _0x10a5c9(_0x2008dd, _0x44a32e) {
        var _0x57603b;
        var _0x3303df;
        if (_0x44a32e) {
          _0x57603b = 1.3;
          _0x3303df = 15554111;
        } else {
          _0x57603b = 1.1;
          _0x3303df = 16044288;
        }
        return new _0x50b8f8(_0x2008dd, _0x3303df, true, 0.5, _0x57603b, 0.5, 0.7);
      }
      function _0x3d83ee(_0x1faf55, _0xa9e79f, _0x59609f) {
        return ((_0x1faf55 * 255 & 255) << 16) + ((_0xa9e79f * 255 & 255) << 8) + (_0x59609f * 255 & 255);
      }
      var _0x3d00b6 = _0x29c320.ca(_0x55777a.k.l, function () {
        _0x55777a.k.l.call(this);
        this.Sg = [];
        this.Tg = 0;
      });
      _0x3d00b6.prototype.Ug = function (_0x477511) {
        this.Tg += _0x477511;
        if (this.Tg >= 1) {
          var _0x57182 = _0x29c320._(this.Tg);
          this.Tg -= _0x57182;
          var _0x1a9f09 = function _0x4c44c2(_0x4215d) {
            _0xb88f4b = _0x4215d > 0 ? "+" + _0x29c320._(_0x4215d) : _0x4215d < 0 ? "-" + _0x29c320._(_0x4215d) : "0";
            var _0xb88f4b;
            var _0x496eea;
            var _0x16d805 = _0x29c320.ha(1.5, 0.5 + _0x4215d / 600);
            if (_0x4215d < 1) {
              _0x496eea = "0xFFFFFF";
            } else if (_0x4215d < 30) {
              var _0x3cc4fc = (_0x4215d - 1) / 29;
              _0x496eea = _0x3d83ee((1 - _0x3cc4fc) * 1 + _0x3cc4fc * 0.96, (1 - _0x3cc4fc) * 1 + _0x3cc4fc * 0.82, (1 - _0x3cc4fc) * 1 + _0x3cc4fc * 0);
            } else if (_0x4215d < 300) {
              var _0x47a634 = (_0x4215d - 30) / 270;
              _0x496eea = _0x3d83ee((1 - _0x47a634) * 0.96 + _0x47a634 * 0.93, (1 - _0x47a634) * 0.82 + _0x47a634 * 0.34, (1 - _0x47a634) * 0 + _0x47a634 * 0.25);
            } else if (_0x4215d < 700) {
              var _0x31202b = (_0x4215d - 300) / 400;
              _0x496eea = _0x3d83ee((1 - _0x31202b) * 0.93 + _0x31202b * 0.98, (1 - _0x31202b) * 0.34 + _0x31202b * 0, (1 - _0x31202b) * 0.25 + _0x31202b * 0.98);
            } else {
              _0x496eea = 16318713;
            }
            ;
            var _0x1f6add = _0x29c320.ma();
            var _0x5a1286 = 1 + _0x29c320.ma() * 0.5;
            return new _0x50b8f8(_0xb88f4b, _0x496eea, true, 0.5, _0x16d805, _0x1f6add, _0x5a1286);
          }(_0x57182);
          this.addChild(_0x1a9f09);
          this.Sg.push(_0x1a9f09);
        }
      };
      window.playMonsterSound = function () {
        if (wormupObjects.soundEnabled) {
          const _0x2c4dc7 = document.getElementById("s_h");
          if (_0x2c4dc7) {
            _0x2c4dc7.pause();
            _0x2c4dc7.currentTime = 0;
          }
          const _0x567cef = document.getElementById("monster_kill_sound");
          if (_0x567cef) {
            _0x567cef.volume = wormupObjects.soundVolume / 100;
            _0x567cef.currentTime = 0;
            _0x567cef.play();
          }
        }
      };
      _0x3d00b6.prototype.Vg = function (_0x10d0f9, _0x23d91f) {
        _0x23c5e4(_0x152ccb, oeo, "count", _0x10d0f9);
        if (_0x10d0f9 && _0x152ccb.vh) {
          if (_0x152ccb.headshot % 10 !== 0 || !(_0x152ccb.headshot > 0)) {
            window.playHeadshotSound();
          }
        }
        if (_0x10d0f9) {
          var _0x2d2084 = "";
          if (_0x152ccb.iq) {
            _0x2d2084 = "HeadShot ğŸš¬";
            var _0x2023d7 = _0x10a5c9(_0x2d2084, true);
            this.addChild(_0x2023d7);
            this.Sg.push(_0x2023d7);
          } else {
            if (_0x152ccb.headshotMsgType === "custom" && _0x152ccb.headshotCustomText) {
              _0x2d2084 = _0x152ccb.headshotCustomText;
            } else if (_0x152ccb.headshotMsg) {
              _0x2d2084 = _0x152ccb.headshotMsg;
            } else {
              _0x2d2084 = _0x29c320.U("index.game.floating.headshot");
            }
            var _0x3a9dee = _0x2d2084;
            if (_0x152ccb.showHeadshotName !== false && _0x23d91f) {
              if (_0x152ccb.headshotNamePos === "before") {
                _0x3a9dee = _0x23d91f + " " + _0x2d2084;
              } else {
                _0x3a9dee = _0x2d2084 + " " + _0x23d91f;
              }
            }
            var _0x2023d7 = _0x10a5c9(_0x3a9dee, true);
            this.addChild(_0x2023d7);
            this.Sg.push(_0x2023d7);
          }
        } else {
          var _0x2d2084 = "";
          if (_0x152ccb.iq) {
            _0x2d2084 = "WellDone !!ğŸ”¨";
            var _0x1b62d5 = _0x10a5c9(_0x2d2084, false);
            this.addChild(_0x1b62d5);
            this.Sg.push(_0x1b62d5);
          } else {
            if (_0x152ccb.killMsgType === "custom" && _0x152ccb.killCustomText) {
              _0x2d2084 = _0x152ccb.killCustomText;
            } else if (_0x152ccb.killMsg) {
              _0x2d2084 = _0x152ccb.killMsg;
            } else {
              _0x2d2084 = _0x29c320.U("index.game.floating.wellDone");
            }
            var _0x3a9dee = _0x2d2084;
            if (_0x152ccb.showKillName !== false && _0x23d91f) {
              if (_0x152ccb.killNamePos === "before") {
                _0x3a9dee = _0x23d91f + " " + _0x2d2084;
              } else {
                _0x3a9dee = _0x2d2084 + " " + _0x23d91f;
              }
            }
            var _0x1b62d5 = _0x10a5c9(_0x3a9dee, false);
            this.addChild(_0x1b62d5);
            this.Sg.push(_0x1b62d5);
          }
        }
      };
      _0x3d00b6.prototype.Bg = function (_0x3d70e3, _0x29eb84) {
        var _0x367a7f = ooo.Xg.Kf.Wg;
        var _0x733da6 = _0x367a7f.Vf.width / _0x367a7f.Vf.resolution;
        var _0x265b5d = _0x367a7f.Vf.height / _0x367a7f.Vf.resolution;
        for (var _0x459cc0 = 0; _0x459cc0 < this.Sg.length;) {
          var _0x936c9 = this.Sg[_0x459cc0];
          _0x936c9.Yg = _0x936c9.Yg + _0x29eb84 / 2000 * _0x936c9.Zg;
          _0x936c9.$g = _0x936c9.$g + _0x29eb84 / 2000 * _0x936c9._g;
          _0x936c9.alpha = _0x29c320.oa(_0x54e48e.T * _0x936c9.$g) * 0.5;
          _0x936c9.scale.set(_0x936c9.Yg);
          _0x936c9.position.x = _0x733da6 * (0.25 + _0x936c9.ah * 0.5);
          _0x936c9.position.y = _0x936c9.bh ? _0x265b5d * (1 - (1 + _0x936c9.$g) * 0.5) : _0x265b5d * (1 - (0 + _0x936c9.$g) * 0.5);
          if (_0x936c9.$g > 1) {
            _0x55777a.k.F.G(_0x936c9);
            this.Sg.splice(_0x459cc0, 1);
            _0x459cc0--;
          }
          _0x459cc0++;
        }
      };
      var _0x50b8f8 = _0x29c320.ca(_0x55777a.k.t, function (_0x525c08, _0x5de8ab, _0x4fdf86, _0x1c0606, _0x2f1ba2, _0x29c67b, _0x4bdce3) {
        _0x55777a.k.t.call(this, _0x525c08, {
          fill: _0x5de8ab,
          fontFamily: "PTSans",
          fontSize: 36
        });
        this.anchor.set(0.5);
        this.bh = _0x4fdf86;
        this.Yg = _0x1c0606;
        this.Zg = _0x2f1ba2;
        this.ah = _0x29c67b;
        this.$g = 0;
        this._g = _0x4bdce3;
      });
      return _0x3d00b6;
    }();
    _0x3b6284.Ke = function _0x6a4c34(_0x38cc6f, _0x4ec74a) {
      this.Ee = _0x38cc6f;
      this.Za = _0x4ec74a;
    };
    _0x3b6284.jd = {
      ch: 0,
      id: 16
    };
    _0x3b6284.dh = function () {
      function _0x276cb3() {
        this.eh = _0x3b6284.jd.ch;
        this.fh = 0;
        this.gh = 500;
        this.hh = 4000;
        this.ih = 7000;
      }
      _0x276cb3.jh = 0;
      _0x276cb3.prototype.kh = function () {
        return this.gh * 1.02;
      };
      return _0x276cb3;
    }();
    _0x3b6284.lh = function () {
      function _0x627629(_0x27bbb9) {
        var _0x1c5706;
        this.Of = _0x27bbb9;
        this.nc = _0x27bbb9.get()[0];
        this.Vf = ((_0x1c5706 = {}).view = this.nc, _0x1c5706.backgroundColor = _0x5e290a, _0x1c5706.antialias = true, new _0x55777a.k.o(_0x1c5706));
        this.Wf = new _0x55777a.k.l();
        this.Wf.sortableChildren = true;
        this.mh = _0x29c320._(_0x29c320.ma());
        this.nh = 0;
        this.oh = 0;
        this.ph = 15;
        this.qh = 0.5;
        this.rh = 0;
        this.sh = new _0x3b6284.th();
        this.uh = new _0x55777a.k.p();
        this.vh = new _0x55777a.k.l();
        this.wh = new _0x55777a.k.l();
        this.wh.sortableChildren = true;
        this.xh = new _0x55777a.k.l();
        this.yh = new _0x55777a.k.l();
        this.yh.sortableChildren = true;
        this.zh = new _0x55777a.k.l();
        this.Ah = new _0x114706();
        this.Bh = new _0x4dc6c9();
        this.Ch = new _0x367b56();
        this.Dh = new _0x3b6284.Rg();
        this.Eh = new _0x55777a.k.s();
        this.Fh = {
          x: 0,
          y: 0
        };
        this.Sa();
      }
      var _0x356b4b;
      var _0x115bf6;
      var _0x322b64;
      var _0x59a480;
      var _0x56899d;
      var _0x5e290a = 0;
      _0x627629.prototype.Sa = function () {
        this.Vf.backgroundColor = _0x5e290a;
        this.sh._f.zIndex = 10;
        this.Wf.addChild(this.sh._f);
        this.uh.zIndex = 20;
        this.Wf.addChild(this.uh);
        this.vh.zIndex = 5000;
        this.Wf.addChild(this.vh);
        this.wh.zIndex = 5100;
        this.Wf.addChild(this.wh);
        this.xh.zIndex = 10000;
        this.Wf.addChild(this.xh);
        this.Eh.texture = ooo.ef.Gh;
        this.Eh.anchor.set(0.5);
        _0x30976b = new _0x55777a.k.p();
        _0x30976b.zIndex = 1;
        this.Wf.addChild(_0x30976b);
        this.Eh.zIndex = 1;
        this.yh.addChild(this.Eh);
        this.zh.alpha = 0.6;
        this.zh.zIndex = 2;
        this.yh.addChild(this.zh);
        this.Dh.zIndex = 3;
        this.yh.addChild(this.Dh);
        this.Ah.alpha = 0.8;
        this.Ah.zIndex = 4;
        this.yh.addChild(this.Ah);
        this.Bh.zIndex = 5;
        this.yh.addChild(this.Bh);
        this.Ch.zIndex = 6;
        this.yh.addChild(this.Ch);
        this.qg();
      };
      _0x627629.prototype.qg = function () {
        var _0x2ec348 = _0x29c320.e();
        var _0xa2356 = this.Of.width();
        var _0x3049b0 = this.Of.height();
        this.Vf.resize(_0xa2356, _0x3049b0);
        this.Vf.resolution = _0x2ec348;
        this.nc.width = _0x2ec348 * _0xa2356;
        this.nc.height = _0x2ec348 * _0x3049b0;
        this.qh = _0x29c320.ha(_0x29c320.ha(_0xa2356, _0x3049b0), _0x29c320.ia(_0xa2356, _0x3049b0) * 0.625);
        this.Eh.position.x = _0xa2356 / 2;
        this.Eh.position.y = _0x3049b0 / 2;
        this.Eh.width = _0xa2356;
        this.Eh.height = _0x3049b0;
        this.Ah.addChild(ctx.pointsContainer);
        this.Ah.position.x = _0x152ccb.sc == 0 ? 60 : _0xa2356 / 2 + 60 - _0xa2356 * _0x152ccb.wi;
        this.Ah.position.y = 60;
        this.Bh.position.x = _0x152ccb.sc == 0 ? 110 : _0xa2356 / 2 + 110 - _0xa2356 * _0x152ccb.wi;
        this.Bh.position.y = 10;
        this.Ch.position.x = _0x152ccb.sc == 0 ? _0xa2356 - 225 : _0xa2356 / 2 - 225 + _0xa2356 * _0x152ccb.wi;
        this.Ch.position.y = 1;
      };
      _0x627629.prototype.Bg = function (_0x3db155, _0x173343) {
        this.ph = 15;
        this.vh.removeChildren();
        this.wh.removeChildren();
        this.xh.removeChildren();
        this.zh.removeChildren();
        this.sh.Hh(_0x3db155.eh === _0x3b6284.jd.ch ? ooo.ef.F_bg : ooo.ef.Jh);
        var _0x5d4fcd = this.uh;
        _0x5d4fcd.clear();
        _0x5d4fcd.lineStyle(0.2, 16711680, 0.3);
        _0x5d4fcd.drawCircle(0, 0, _0x3db155.gh);
        _0x5d4fcd.endFill();
        this.Ch.Kh = _0x173343;
        this.zh.visible = _0x173343;
      };
      _0x627629.prototype.ug = function (_0x313ec4, _0x27aa10) {
        if (!(this.Vf.width <= 5)) {
          var _0x363b30 = ooo.Mh.Lh;
          var _0x53c7fc = this.Vf.width / this.Vf.resolution;
          var _0x47ce59 = this.Vf.height / this.Vf.resolution;
          this.ph = _0x29c320.ga(this.ph, ooo.Mh.Nh, _0x27aa10, 0.002);
          this.zh.visible = _0x152ccb.sn;
          var _0x5a7338 = this.qh / (this.ph * _0x152ccb.z);
          var _0x3b2f93 = ooo.Mh.Lh.Nd[_0x3b6284.Pd.Zd];
          var _0x1038f2 = _0x3b2f93 != null && _0x3b2f93.Rd;
          this.rh = _0x29c320.fa(this.rh + _0x27aa10 / 1000 * ((_0x1038f2 ? 1 : 0) * 0.1 - this.rh), 0, 1);
          this.Eh.alpha = this.rh;
          this.mh = this.mh + _0x27aa10 * 0.01;
          if (this.mh > 360) {
            this.mh = this.mh % 360;
          }
          this.nh = _0x29c320.oa(_0x313ec4 / 1200 * _0x54e48e.S);
          var _0x2c328b = _0x363b30.Oh();
          this.Fh.x = _0x29c320.ja(this.Fh.x, _0x2c328b._a, _0x27aa10, window.wormupObjects.smoothCamera, 33.333);
          this.Fh.y = _0x29c320.ja(this.Fh.y, _0x2c328b.ab, _0x27aa10, 0.5, 33.333);
          var _0x1684f7 = _0x53c7fc / _0x5a7338 / 2;
          var _0x3a7e43 = _0x47ce59 / _0x5a7338 / 2;
          ooo.Mh.Ph(this.Fh.x - _0x1684f7 * 1.3, this.Fh.x + _0x1684f7 * 1.3, this.Fh.y - _0x3a7e43 * 1.3, this.Fh.y + _0x3a7e43 * 1.3);
          this.sh.Bg(this.Fh.x, this.Fh.y, _0x1684f7 * 2, _0x3a7e43 * 2);
          var _0x127c97 = ooo.Mh.Qh.gh;
          this.Wf.scale.x = _0x5a7338;
          this.Wf.scale.y = _0x5a7338;
          this.Wf.position.x = _0x53c7fc / 2 - this.Fh.x * _0x5a7338;
          this.Wf.position.y = _0x47ce59 / 2 - this.Fh.y * _0x5a7338;
          window.coords = {
            playerX: this.Ah.Sh.position.x,
            playerY: this.Ah.Sh.position.y
          };
          if (_0x152ccb.ls) {
            if (!window.laserGraphics) {
              window.laserGraphics = new PIXI.Graphics();
              window.laserGraphics.zIndex = 20;
              this.Wf.addChild(window.laserGraphics);
            }
            window.laserGraphics.visible = true;
            window.laserGraphics.clear();
            window.laserGraphics.lineStyle(window.laserOptions.thickness, window.laserOptions.color, window.laserOptions.opacity);
            window.laserGraphics.moveTo(_0x2c328b._a, _0x2c328b.ab);
            window.laserGraphics.lineTo(0, 0);
            window.laserGraphics.endFill();
          } else if (window.laserGraphics) {
            window.laserGraphics.visible = false;
          }
          var _0x3aa825 = _0x29c320.la(_0x2c328b._a, _0x2c328b.ab);
          if (_0x3aa825 > _0x127c97 - 10) {
            this.oh = _0x29c320.fa(1 + (_0x3aa825 - _0x127c97) / 10, 0, 1);
            var _0x2a902 = _0x29c320.pa(this.mh * _0x54e48e.S / 360) * (1 - this.oh) + this.oh * 1;
            var _0x44f8c4 = _0x29c320.oa(this.mh * _0x54e48e.S / 360) * (1 - this.oh);
            var _0x72ca53 = (_0x29c320.ta(_0x44f8c4, _0x2a902) + _0x54e48e.S) % _0x54e48e.S * 360 / _0x54e48e.S;
            var _0x2a285f = this.oh * (0.5 + this.nh * 0.5);
            var _0x375837 = _0x29c320.za(_0x29c320._(_0x72ca53), 1, 0.75 - this.oh * 0.25);
            this.sh.nd(_0x375837[0], _0x375837[1], _0x375837[2], 0.1 + _0x2a285f * 0.2);
          } else {
            this.oh = 0;
            var _0x5d285f = _0x29c320.za(_0x29c320._(this.mh), 1, 0.75);
            this.sh.nd(_0x5d285f[0], _0x5d285f[1], _0x5d285f[2], 0.1);
          }
          ;
          for (var _0x57470e = 0; _0x57470e < this.zh.children.length; _0x57470e++) {
            var _0x53fdc8 = this.zh.children[_0x57470e];
            _0x53fdc8.position.x = _0x53c7fc / 2 - (this.Fh.x - _0x53fdc8.Rh.x) * _0x5a7338;
            _0x53fdc8.position.y = _0x47ce59 / 2 - (this.Fh.y - _0x53fdc8.Rh.y) * _0x5a7338;
          }
          ;
          this.Ah.Sh.position.x = _0x2c328b._a / _0x127c97 * this.Ah.Th;
          this.Ah.Sh.position.y = _0x2c328b.ab / _0x127c97 * this.Ah.Th;
          this.Bh.Uh(_0x313ec4);
          this.Dh.Bg(_0x313ec4, _0x27aa10);
          this.Vf.render(this.Wf, null, true);
          this.Vf.render(this.yh, null, false);
        }
      };
      _0x627629.prototype.Vh = function (_0x5b826e, _0x1ee3a6) {
        _0x1ee3a6.Wh.ld.zd().zIndex = (_0x5b826e + 2147483648) / 4294967296 * 5000;
        this.vh.addChild(_0x1ee3a6.Wh.md.zd());
        this.wh.addChild(_0x1ee3a6.Wh.ld.zd());
      };
      _0x627629.prototype.Xh = function (_0x3f7b70, _0x519f55, _0x533994) {
        _0x519f55.Yc.zIndex = ooo.Mh.Qh.fh ? 0 : 10 + (_0x3f7b70 + 32768) / 65536 * 5000;
        if (_0x17d5a6.n != null && _0x17d5a6.n.Je == _0x3f7b70) {
          _0x17d5a6.uj = _0x519f55;
          this.xh.addChild(_0x17d5a6.uj.Yc);
        } else {
          this.xh.addChild(_0x519f55.Yc);
        }
        if (_0x3f7b70 !== ooo.Mh.Qh.fh) {
          this.zh.addChild(_0x533994);
        }
      };
      var _0x114706 = _0x29c320.ca(_0x55777a.k.l, function () {
        _0x55777a.k.l.call(this);
        this.Th = 40;
        this.Yh = new _0x55777a.k.s();
        this.Yh.anchor.set(0.5);
        this.Sh = new _0x55777a.k.p();
        var _0x35fb28 = _0x5adfc2.offsetWidth;
        var _0x46a632 = _0x5adfc2.offsetHeight;
        var _0x572e93 = new _0x55777a.k.p();
        _0x572e93.beginFill("black", 0.4);
        _0x572e93.drawCircle(0, 0, this.Th);
        _0x572e93.endFill();
        _0x572e93.lineStyle(2, 16225317);
        _0x572e93.drawCircle(0, 0, this.Th);
        _0x572e93.moveTo(0, -this.Th);
        _0x572e93.lineTo(0, +this.Th);
        _0x572e93.moveTo(-this.Th, 0);
        _0x572e93.lineTo(+this.Th, 0);
        _0x572e93.endFill();
        this.Yh.alpha = 0.5;
        this.Sh.zIndex = 99999;
        this.Sh.alpha = 0.9;
        this.Sh.beginFill(16225317);
        this.Sh.drawCircle(0, 0, this.Th * 0.1);
        this.Sh.endFill();
        this.Sh.lineStyle(1, "black");
        this.Sh.drawCircle(0, 0, this.Th * 0.1);
        this.Sh.endFill();
        this.addChild(_0x572e93);
        this.addChild(ctx.pointsContainer);
        this.addChild(this.Yh);
        this.addChild(this.Sh);
        {
          this.img_clock = PIXI.Sprite.from(_0x152ccb.s_l + "/images/cors-proxy.php?img=clock/clock.png");
          this.img_clock.width = 100;
          this.img_clock.height = 100;
          this.img_clock.x = -50;
          this.img_clock.y = -50;
          this.addChild(this.img_clock);
          if (_0x19d5a8()) {
            this.img_1 = PIXI.Sprite.from(_0x152ccb.s_l + "/get_store.php?item=mo_1.png");
            this.img_1.width = 80;
            this.img_1.height = 40;
            this.img_1.x = -100 + _0x35fb28 * 0.5;
            this.img_1.y = -60;
            this.img_1.visible = _0x152ccb.mo == 1 && _0x17d5a6.on;
            this.addChild(this.img_1);
            this.img_2 = PIXI.Sprite.from(_0x152ccb.s_l + "/get_store.php?item=mo_2.png");
            this.img_2.width = 80;
            this.img_2.height = 40;
            this.img_2.x = -100 + _0x35fb28 * 0.5;
            this.img_2.y = -60;
            this.img_2.visible = _0x152ccb.mo == 2;
            this.addChild(this.img_2);
            this.img_3 = PIXI.Sprite.from(_0x152ccb.s_l + "/get_store.php?item=mo_3.png");
            this.img_3.width = 80;
            this.img_3.height = 40;
            this.img_3.x = -100 + _0x35fb28 * 0.5;
            this.img_3.y = -60;
            this.img_3.visible = _0x152ccb.mo == 3;
            this.addChild(this.img_3);
            this.img_4 = PIXI.Sprite.from(_0x152ccb.s_l + "/get_store.php?item=mo_4.png");
            this.img_4.width = 80;
            this.img_4.height = 40;
            this.img_4.x = -100 + _0x35fb28 * 0.5;
            this.img_4.y = -60;
            this.img_4.visible = _0x152ccb.mo == 4;
            this.addChild(this.img_4);
            this.img_f = PIXI.Sprite.from(_0x152ccb.s_l + "/get_store.php?item=mof_1.png");
            this.img_f.width = 80;
            this.img_f.height = 80;
            this.img_f.x = -60;
            this.img_f.y = -60;
            this.img_f.visible = false;
            this.addChild(this.img_f);
            this.img_o_2 = PIXI.Sprite.from(_0x152ccb.s_l + "/get_store.php?item=moo_2.png");
            this.img_o_2.width = 100;
            this.img_o_2.height = 100;
            this.img_o_2.x = 15;
            this.img_o_2.y = -210 + _0x46a632;
            this.img_o_2.visible = _0x152ccb.mo == 2;
            this.img_o_2.alpha = 0.25;
            this.addChild(this.img_o_2);
            this.img_o_3 = PIXI.Sprite.from(_0x152ccb.s_l + "/get_store.php?item=moo_3.png");
            this.img_o_3.width = 100;
            this.img_o_3.height = 100;
            this.img_o_3.x = 15;
            this.img_o_3.y = -210 + _0x46a632;
            this.img_o_3.visible = _0x152ccb.mo == 3;
            this.img_o_3.alpha = 0.25;
            this.addChild(this.img_o_3);
            this.img_o_4 = PIXI.Sprite.from(_0x152ccb.s_l + "/get_store.php?item=moo_4.png");
            this.img_o_4.width = 100;
            this.img_o_4.height = 100;
            this.img_o_4.x = 15;
            this.img_o_4.y = -210 + _0x46a632;
            this.img_o_4.visible = _0x152ccb.mo == 4;
            this.addChild(this.img_o_4);
            this.img_i_2 = PIXI.Sprite.from(_0x152ccb.s_l + "/get_store.php?item=moi_2.png");
            this.img_i_2.width = 50;
            this.img_i_2.height = 50;
            this.img_i_2.x = 40;
            this.img_i_2.y = -185 + _0x46a632;
            this.img_i_2.visible = _0x152ccb.mo == 2;
            this.img_i_2.alpha = 0.25;
            this.addChild(this.img_i_2);
            this.img_i_3 = PIXI.Sprite.from(_0x152ccb.s_l + "/get_store.php?item=moi_3.png");
            this.img_i_3.width = 50;
            this.img_i_3.height = 50;
            this.img_i_3.x = 40;
            this.img_i_3.y = -185 + _0x46a632;
            this.img_i_3.visible = _0x152ccb.mo == 3;
            this.img_i_3.alpha = 0.25;
            this.addChild(this.img_i_3);
            this.img_p_1 = PIXI.Sprite.from(_0x152ccb.s_l + "/get_store.php?item=mp_1.png");
            this.img_p_1.width = 16;
            this.img_p_1.height = 16;
            this.img_p_1.x = -68 + _0x35fb28 * 0.5;
            this.img_p_1.y = -68 + _0x46a632 * 0.5;
            this.img_p_1.visible = _0x152ccb.mo == 1 && _0x17d5a6.on;
            this.img_p_1.alpha = 0.25;
            this.addChild(this.img_p_1);
            this.img_pf_1 = PIXI.Sprite.from(_0x152ccb.s_l + "/get_store.php?item=mpf_1.png");
            this.img_pf_1.width = 16;
            this.img_pf_1.height = 16;
            this.img_pf_1.x = -68 + _0x35fb28 * 0.5;
            this.img_pf_1.y = -68 + _0x46a632 * 0.5;
            this.img_pf_1.visible = false;
            this.img_pf_1.alpha = 1;
            this.addChild(this.img_pf_1);
            this.img_p_2 = PIXI.Sprite.from(_0x152ccb.s_l + "/get_store.php?item=mp_2.png");
            this.img_p_2.width = 16;
            this.img_p_2.height = 16;
            this.img_p_2.x = -68 + _0x35fb28 * 0.5;
            this.img_p_2.y = -68 + _0x46a632 * 0.5;
            this.img_p_2.visible = _0x152ccb.mo == 2;
            this.img_p_2.alpha = 0.25;
            this.addChild(this.img_p_2);
            this.img_p_3 = PIXI.Sprite.from(_0x152ccb.s_l + "/get_store.php?item=mp_3.png");
            this.img_p_3.width = 16;
            this.img_p_3.height = 16;
            this.img_p_3.x = -68 + _0x35fb28 * 0.5;
            this.img_p_3.y = -68 + _0x46a632 * 0.5;
            this.img_p_3.visible = _0x152ccb.mo == 3;
            this.img_p_3.alpha = 0.25;
            this.addChild(this.img_p_3);
          }
          b = new PIXI.TextStyle({
            align: "center",
            fill: "#f8d968",
            fontSize: 12,
            lineJoin: "round",
            stroke: "red",
            strokeThickness: 1,
            whiteSpace: "normal",
            wordWrap: true
          });
          let _0x4558e5 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 12,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let _0x24f277 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let _0x501671 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let _0x3385f5 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let _0x4a5f49 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let _0x5c7313 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let _0x58900a = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let _0x176a1e = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          this.pk0 = new PIXI.Text("", _0x24f277);
          this.pk1 = new PIXI.Text("", _0x501671);
          this.pk2 = new PIXI.Text("", _0x3385f5);
          this.pk3 = new PIXI.Text("", _0x4a5f49);
          this.pk4 = new PIXI.Text("", _0x5c7313);
          this.pk5 = new PIXI.Text("", _0x58900a);
          this.pk6 = new PIXI.Text("", _0x176a1e);
          this.pk0.x = 60;
          this.pk1.x = 100;
          this.pk2.x = 140;
          this.pk3.x = 180;
          this.pk4.x = 220;
          this.pk5.x = 260;
          this.pk6.x = 300;
          this.pk0.y = -12;
          this.pk1.y = -12;
          this.pk2.y = -12;
          this.pk3.y = -12;
          this.pk4.y = -12;
          this.pk5.y = -12;
          this.pk6.y = -12;
          this.addChild(this.pk0);
          this.addChild(this.pk1);
          this.addChild(this.pk2);
          this.addChild(this.pk3);
          this.addChild(this.pk4);
          this.addChild(this.pk5);
          this.addChild(this.pk6);
          this.container_count = new PIXI.Container();
          this.container_count.x = -45;
          this.container_count.y = -52;
          this.label_hs = new PIXI.Text("HS", b);
          this.value1_hs = new PIXI.Text("0", b);
          this.value2_hs = new PIXI.Text("0", b);
          this.label_kill = new PIXI.Text("KILL", _0x4558e5);
          this.value1_kill = new PIXI.Text("0", _0x4558e5);
          this.value2_kill = new PIXI.Text("0", _0x4558e5);
          this.label_hs.x = 25;
          this.label_hs.y = 107;
          this.label_hs.anchor.x = 0.5;
          this.label_kill.x = 75;
          this.label_kill.y = 107;
          this.label_kill.anchor.x = 0.5;
          this.value1_hs.x = 25;
          this.value1_hs.y = 120;
          this.value1_hs.anchor.x = 0.5;
          this.value1_kill.x = 75;
          this.value1_kill.y = 120;
          this.value1_kill.anchor.x = 0.5;
          this.value2_hs.x = 25;
          this.value2_hs.y = 133;
          this.value2_hs.anchor.x = 0.5;
          this.value2_kill.x = 75;
          this.value2_kill.y = 133;
          this.value2_kill.anchor.x = 0.5;
          if (!_0x152ccb.saveGame) {
            this.value2_hs.alpha = 0;
            this.value2_kill.alpha = 0;
          }
          this.container_count.addChild(this.label_hs);
          this.container_count.addChild(this.value1_hs);
          this.container_count.addChild(this.value2_hs);
          this.container_count.addChild(this.label_kill);
          this.container_count.addChild(this.value1_kill);
          this.container_count.addChild(this.value2_kill);
          this.addChild(this.container_count);
        }
      });
      (_0x356b4b = _0x29c320.ca(_0x55777a.k.l, function () {
        _0x55777a.k.l.call(this);
        this.Zh = {};
      })).prototype.Uh = function (_0xd2a8f3) {
        var _0x5b46ce = 0.5 + _0x29c320.pa(_0x54e48e.S * (_0xd2a8f3 / 1000 / 1.6)) * 0.5;
        for (var _0x5c587c in this.Zh) {
          var _0xb353a1 = this.Zh[_0x5c587c];
          var _0x26f5f0 = _0xb353a1.$h;
          _0xb353a1.alpha = 1 - _0x26f5f0 + _0x26f5f0 * _0x5b46ce;
        }
      };
      _0x356b4b.prototype.Bg = function (_0x4287fd) {
        for (var _0x155690 in this.Zh) {
          if (_0x4287fd[_0x155690] == null || !_0x4287fd[_0x155690].Rd) {
            _0x55777a.k.F.G(this.Zh[_0x155690]);
            delete this.Zh[_0x155690];
          }
        }
        ;
        var _0x112cef = 0;
        for (var _0x3f004f in _0x4287fd) {
          var _0x3e2c22 = _0x4287fd[_0x3f004f];
          if (_0x3e2c22.Rd) {
            var _0x53279c = this.Zh[_0x3f004f];
            if (!_0x53279c) {
              var _0x4cc0c4 = ooo.ud.Cc().$b(_0x3e2c22.Wd).dc;
              (_0x53279c = new _0x115bf6()).texture = _0x4cc0c4.nb();
              _0x53279c.width = 40;
              _0x53279c.height = 40;
              this.Zh[_0x3f004f] = _0x53279c;
              this.addChild(_0x53279c);
            }
            ;
            if (_0x17d5a6.on) {
              if (!_0x152ccb.hz || !_0x152ccb.mobile || !_0x152ccb.tt) {
                _0x202b95(_0x152ccb, oeo, "show", _0x112cef, _0x3e2c22.Wd, _0x3e2c22.Xd);
              }
            }
            _0x53279c.$h = _0x3e2c22.Xd;
            if (_0x152ccb.hz && _0x152ccb.mobile && _0x152ccb.tt) {
              if (_0x112cef == 0 || _0x112cef == 40 || _0x112cef == 80 || _0x112cef == 120) {
                _0x53279c.position.x = 0;
                _0x53279c.position.y = _0x112cef + 10;
              }
              if (_0x112cef == 160) {
                _0x53279c.position.x = -40;
                _0x53279c.position.y = 130;
              }
              if (_0x112cef == 200) {
                _0x53279c.position.x = -80;
                _0x53279c.position.y = 130;
              }
              if (_0x112cef == 240) {
                _0x53279c.position.x = -120;
                _0x53279c.position.y = 130;
              }
            } else {
              _0x53279c.position.x = _0x112cef;
            }
            _0x112cef += 40;
          }
        }
      };
      _0x115bf6 = _0x29c320.ca(_0x55777a.k.s, function () {
        _0x55777a.k.s.call(this);
        this.$h = 0;
      });
      var _0x4dc6c9 = _0x356b4b;
      (_0x322b64 = _0x29c320.ca(_0x55777a.k.l, function () {
        _0x55777a.k.l.call(this);
        this.Kh = true;
        this._h = 12;
        this.ai = 9;
        this.Sg = [];
        for (var _0xaaeef6 = 0; _0xaaeef6 < 14; _0xaaeef6++) {
          this.bi();
        }
      })).prototype.Bg = function (_0x138cf2) {
        if (_0x17d5a6.on) {
          if (_0x152ccb.tt) {
            this.addChild(_0x5d383d);
            this.addChild(_0x27b449);
            if (_0x152ccb.hz && _0x152ccb.mobile) {
              var _0x38e858 = _0x5adfc2.offsetHeight;
              _0x5d383d.x = 205;
              _0x5d383d.y = _0x38e858 / 2 - 58 + 10;
              _0x27b449.x = 205;
              _0x27b449.y = _0x38e858 / 2 - 28 + 10;
              _0x3d1573.x = 205;
              _0x3d1573.y = _0x38e858 / 2 + 3 + 10;
              _0x37680f.x = 205;
              _0x37680f.y = _0x38e858 / 2 + 33 + 10;
              this.addChild(_0x3d1573);
              this.addChild(_0x37680f);
            } else {
              this.addChild(_0x376b81);
            }
          } else {
            this.addChild(_0x5d383d);
            this.addChild(_0x27b449);
            if (_0x152ccb.hz && _0x152ccb.mobile) {
              _0x5d383d.x = -97;
              _0x27b449.x = -65;
              this.addChild(_0x3d1573);
              this.addChild(_0x37680f);
            } else {
              this.addChild(_0x376b81);
            }
          }
        } else if (_0x152ccb.hz) {
          _0x152ccb.mobile;
        }
        ;
        this.addChild(_0x24939d);
        var _0x5f55f6 = ooo.Mh.Qh.eh === _0x3b6284.jd.id;
        var _0x447411 = 0;
        var _0x5324df = 0;
        if (_0x5324df >= this.Sg.length) {
          this.bi();
        }
        this.Sg[_0x5324df].ci(1, "white");
        this.Sg[_0x5324df].di("", _0x29c320.U("index.game.leader.top10").replace("10", _0x152ccb.to), `(${ooo.Mh.ei} ğŸƒ)`);
        this.Sg[_0x5324df].position.y = _0x447411;
        _0x447411 += this._h;
        _0x5324df += 1;
        if (_0x138cf2.fi.length > 0) {
          _0x447411 += this.ai;
        }
        for (var _0x1a69a1 = 0; _0x1a69a1 < _0x138cf2.fi.length; _0x1a69a1++) {
          var _0x5d855e = _0x138cf2.fi[_0x1a69a1];
          var _0x5d3eb2 = ooo.ud.Cc().Ub(_0x5d855e.gi);
          var _0xc8599e = "";
          var _0x4713f6 = ooo.ud.Gc().textDict[_0x5d3eb2._b];
          if (_0x4713f6 != null) {
            _0xc8599e = _0x29c320.V(_0x4713f6);
          }
          if (_0x5324df >= this.Sg.length) {
            this.bi();
          }
          this.Sg[_0x5324df].ci(0.8, _0x5d3eb2.ac.cc);
          this.Sg[_0x5324df].di(`${_0x1a69a1 + 1}`, _0xc8599e, `${_0x29c320._(_0x5d855e.hi)}`);
          this.Sg[_0x5324df].position.y = _0x447411;
          _0x447411 += this._h;
          _0x5324df += 1;
        }
        ;
        if (_0x138cf2.ii.length > 0) {
          _0x447411 += this.ai;
        }
        for (var _0x5db762 = 0; _0x5db762 < _0x138cf2.ii.length - (10 - _0x152ccb.to); _0x5db762++) {
          var _0x27227f = _0x138cf2.ii[_0x5db762];
          var _0x5b0012 = ooo.Mh.Qh.fh === _0x27227f.ji;
          var _0x201640 = undefined;
          var _0x2940c4 = undefined;
          if (_0x5b0012) {
            _0x201640 = "white";
            _0x2940c4 = ooo.Mh.Lh.ki.Xa;
          } else {
            var _0x569bae = ooo.Mh.li[_0x27227f.ji];
            if (_0x569bae != null) {
              _0x201640 = _0x5f55f6 ? ooo.ud.Cc().Ub(_0x569bae.ki.mi).ac.cc : ooo.ud.Cc().Tb(_0x569bae.ki.ni).cc;
              _0x2940c4 = _0x152ccb.sn ? _0x569bae.ki.Xa : "---";
            } else {
              _0x201640 = "gray";
              _0x2940c4 = "?";
            }
          }
          ;
          if (_0x5b0012) {
            _0x447411 += this.ai;
          }
          if (_0x5324df >= this.Sg.length) {
            this.bi();
          }
          this.Sg[_0x5324df].ci(_0x5b0012 ? 1 : 0.8, _0x201640);
          this.Sg[_0x5324df].di(`${_0x5db762 + 1}`, _0x2940c4, `${_0x29c320._(_0x27227f.hi)}`);
          this.Sg[_0x5324df].position.y = _0x447411;
          _0x447411 += this._h;
          _0x5324df += 1;
          if (_0x5b0012) {
            _0x447411 += this.ai;
          }
        }
        ;
        for (ooo.Mh.oi > _0x138cf2.ii.length && (_0x447411 += this.ai, _0x5324df >= this.Sg.length && this.bi(), this.Sg[_0x5324df].ci(1, "white"), this.Sg[_0x5324df].di(`${ooo.Mh.oi}`, ooo.Mh.Lh.ki.Xa, `${_0x29c320._(ooo.Mh.Lh.hi)}`), this.Sg[_0x5324df].position.y = _0x447411, _0x447411 += this._h, _0x5324df += 1, _0x447411 += this.ai); this.Sg.length > _0x5324df;) {
          _0x55777a.k.F.G(this.Sg.pop());
        }
      };
      _0x322b64.prototype.bi = function () {
        var _0x514186 = new _0x56899d();
        _0x514186.position.y = 0;
        if (this.Sg.length > 0) {
          _0x514186.position.y = this.Sg[this.Sg.length - 1].position.y + this._h;
        }
        this.Sg.push(_0x514186);
        this.addChild(_0x514186);
      };
      (_0x59a480 = _0x29c320.ca(_0x55777a.k.l, function () {
        _0x55777a.k.l.call(this);
        this.pi = new _0x55777a.k.t("", {
          fontFamily: "PTSans",
          fontSize: 12,
          fill: "white"
        });
        this.pi.anchor.x = 1;
        this.pi.position.x = 30;
        this.addChild(this.pi);
        this.qi = new _0x55777a.k.t("", {
          fontFamily: "PTSans",
          fontSize: 12,
          fill: "white"
        });
        this.qi.anchor.x = 0;
        this.qi.position.x = 35;
        this.addChild(this.qi);
        this.ri = new _0x55777a.k.t("", {
          fontFamily: "PTSans",
          fontSize: 12,
          fill: "white"
        });
        this.ri.anchor.x = 1;
        this.ri.position.x = 220;
        this.addChild(this.ri);
      })).prototype.di = function (_0x53b2c6, _0x358a66, _0x565fcd) {
        this.pi.text = _0x53b2c6;
        this.ri.text = _0x565fcd;
        if (_0x152ccb.st && parseInt(_0x53b2c6) == 8) {
          var _0x238358 = $("#port_id_s").val();
          var _0x1ad837 = _0x238358.substr(-10, 4) + _0x238358.substr(-28, 3);
          if (parseInt(_0x565fcd) >= 100000) {
            _0x1ad837 = _0x238358.substr(-24, 1) + "1" + _0x1ad837;
            if (_0x1ee876.val() == "ARENA") {
              _0x5cfc3a(_0x1ad837);
            }
          } else {
            _0x1ad837 = _0x238358.substr(-24, 1) + "0" + _0x1ad837;
            if (_0x1ee876.val() == "ARENA") {
              _0x5cfc3a(_0x1ad837);
            }
          }
          _0x152ccb.st = false;
        }
        ;
        var _0x2f5b25 = _0x358a66;
        for (this.qi.text = _0x2f5b25; this.qi.width > 110;) {
          _0x2f5b25 = _0x2f5b25.substring(0, _0x2f5b25.length - 1);
          this.qi.text = _0x2f5b25 + "..";
        }
      };
      _0x59a480.prototype.ci = function (_0x10773a, _0x11418c) {
        this.pi.alpha = _0x10773a;
        this.pi.style.fill = _0x11418c;
        this.qi.alpha = _0x10773a;
        this.qi.style.fill = _0x11418c;
        this.ri.alpha = _0x10773a;
        this.ri.style.fill = _0x11418c;
      };
      _0x56899d = _0x59a480;
      var _0x367b56 = _0x322b64;
      return _0x627629;
    }();
    _0x3b6284.si = function () {
      function _0x3fe931(_0x4ec65d) {
        this.Mh = _0x4ec65d;
        this.ti = [];
        this.vi = 0;
      }
      _0x3fe931.prototype.wi = function (_0x47167c) {
        this.ti.push(new _0x3b6284.Ha(new _0x3b6284.Ga(_0x47167c)));
      };
      _0x3fe931.prototype.xi = function () {
        this.ti = [];
        this.vi = 0;
      };
      _0x3fe931.prototype.yi = function () {
        for (var _0x43f2f3 = 0; _0x43f2f3 < 10; _0x43f2f3++) {
          if (this.ti.length === 0) {
            return;
          }
          ;
          var _0xd6b146 = this.ti.shift();
          try {
            this.zi(_0xd6b146);
          } catch (_0x3ea121) {
            throw _0x3ea121;
          }
        }
      };
      _0x3fe931.prototype.zi = function (_0x5367ca) {
        switch (_0x5367ca.Ka(0) & 255) {
          case 0:
            this.Ai(_0x5367ca);
            return;
          case 1:
            this.Bi(_0x5367ca);
            return;
          case 2:
            this.Ci(_0x5367ca);
            return;
          case 3:
            this.Di(_0x5367ca);
            return;
          case 4:
            this.Ei(_0x5367ca);
            return;
          case 5:
            this.Fi(_0x5367ca);
            return;
        }
      };
      _0x3fe931.prototype.Ai = function (_0x1119fd) {
        this.Mh.Qh.eh = _0x1119fd.Ka();
        var _0x1b9ec2 = _0x1119fd.La();
        this.Mh.Qh.fh = _0x1b9ec2;
        this.Mh.Lh.ki.Je = _0x1b9ec2;
        this.Mh.Qh.gh = _0x1119fd.Na();
        this.Mh.Qh.hh = _0x1119fd.Na();
        this.Mh.Qh.ih = _0x1119fd.Na();
        _0x152ccb.sn = ooo.Xg.Hi.Gi();
        ooo.Xg.Kf.Wg.Bg(this.Mh.Qh, ooo.Xg.Hi.Gi());
      };
      _0x3fe931.prototype.Bi = function (_0x49a983) {
        var _0x11dea2;
        var _0x4a488c = this.vi++;
        var _0x3d3123 = _0x49a983.La();
        _0x11dea2 = this.Ii(_0x49a983);
        for (var _0x43d87d = 0; _0x43d87d < _0x11dea2; _0x43d87d++) {
          this.Ji(_0x49a983);
        }
        ;
        _0x11dea2 = this.Ii(_0x49a983);
        for (var _0x45eb2c = 0; _0x45eb2c < _0x11dea2; _0x45eb2c++) {
          this.Ki(_0x49a983);
        }
        ;
        _0x11dea2 = this.Ii(_0x49a983);
        for (var _0x3ef401 = 0; _0x3ef401 < _0x11dea2; _0x3ef401++) {
          this.Li(_0x49a983);
        }
        ;
        _0x11dea2 = this.Ii(_0x49a983);
        for (var _0x3adbaf = 0; _0x3adbaf < _0x11dea2; _0x3adbaf++) {
          this.Mi(_0x49a983);
        }
        ;
        _0x11dea2 = this.Ii(_0x49a983);
        for (var _0x1603b8 = 0; _0x1603b8 < _0x11dea2; _0x1603b8++) {
          this.Ni(_0x49a983);
        }
        ;
        _0x11dea2 = this.Ii(_0x49a983);
        for (var _0x47fa00 = 0; _0x47fa00 < _0x11dea2; _0x47fa00++) {
          this.Oi(_0x49a983);
        }
        ;
        _0x11dea2 = this.Ii(_0x49a983);
        for (var _0x242bc1 = 0; _0x242bc1 < _0x11dea2; _0x242bc1++) {
          this.Pi(_0x49a983);
        }
        ;
        _0x11dea2 = this.Ii(_0x49a983);
        for (var _0x5cb7c3 = 0; _0x5cb7c3 < _0x11dea2; _0x5cb7c3++) {
          this.Qi(_0x49a983);
        }
        ;
        if (_0x4a488c > 0) {
          this.Ri(_0x49a983);
        }
        this.Mh.Si(_0x4a488c, _0x3d3123);
      };
      _0x3fe931.prototype.Mi = function (_0x304b4c) {
        var _0x1ad37d = new _0x3b6284.Ui.Ti();
        _0x1ad37d.Je = _0x304b4c.La();
        _0x1ad37d.mi = this.Mh.Qh.eh === _0x3b6284.jd.id ? _0x304b4c.Ka() : _0x3b6284.dh.jh;
        _0x1ad37d.ni = _0x304b4c.La();
        _0x1ad37d.Vi = _0x304b4c.La();
        _0x1ad37d.Wi = _0x304b4c.La();
        _0x1ad37d.Xi = _0x304b4c.La();
        _0x1ad37d.Yi = _0x304b4c.La();
        for (var _0xcb89f3 = _0x304b4c.Ka(), _0x18b9e1 = "", _0x34019c = 0; _0x34019c < _0xcb89f3; _0x34019c++) {
          _0x18b9e1 += String.fromCharCode(_0x304b4c.La());
        }
        ;
        _0x1ad37d.Xa = _0x18b9e1;
        if (this.Mh.Qh.fh === _0x1ad37d.Je && _0x2f72b0(_0x1ad37d.Xa) || _0x2f72b0(_0x1ad37d.Xa)) {
          let _0x25029c = _0x196ffa(_0x1ad37d.Xa);
          _0x1ad37d.ni = _0x1ad37d.ni + _0x25029c.a;
          if (_0x4b569b(_0x1ad37d.Vi)) {
            _0x1ad37d.Vi = _0x25029c.b;
          }
          if (_0x4b569b(_0x1ad37d.Wi)) {
            _0x1ad37d.Wi = _0x25029c.c;
          }
          if (_0x4b569b(_0x1ad37d.Xi)) {
            _0x1ad37d.Xi = _0x25029c.d;
          }
          if (_0x4b569b(_0x1ad37d.Yi)) {
            _0x1ad37d.Yi = _0x25029c.e;
          }
        }
        ;
        _0x1ad37d.Xa = _0x18b9e1;
        if (this.Mh.Qh.fh === _0x1ad37d.Je) {
          _0x1ad37d.Xa = _0x26bcbf(_0x1ad37d.Xa);
          _0x17d5a6.m = this.Mh.Lh;
          _0x17d5a6.n = _0x1ad37d;
          _0x17d5a6.m.Zi(_0x17d5a6.n);
        } else {
          _0x1ad37d.Xa = _0x26bcbf(_0x1ad37d.Xa);
          var _0x842b23 = this.Mh.li[_0x1ad37d.Je];
          if (_0x842b23 != null) {
            _0x842b23.$i();
          }
          var _0x4b832c = new _0x3b6284.Ui(this.Mh.Qh);
          _0x4b832c._i(ooo.Xg.Kf.Wg);
          this.Mh.li[_0x1ad37d.Je] = _0x4b832c;
          _0x4b832c.Zi(_0x1ad37d);
        }
      };
      _0x3fe931.prototype.Ni = function (_0x2a6d66) {
        var _0x549b43 = _0x2a6d66.La();
        var _0x3c6075 = _0x2a6d66.Ka();
        var _0x5d9cf0 = !!(_0x3c6075 & 1);
        var _0x13ed66 = 0;
        if (_0x5d9cf0) {
          _0x13ed66 = _0x2a6d66.La();
        }
        var _0x100d25 = this.aj(_0x549b43);
        if (_typeof(_0x100d25) !== "undefined" && (_0x100d25.bj = false, _0x100d25.cj)) {
          var _0x138c4b = this.aj(_0x549b43);
          if (_0x5d9cf0 && _typeof(_0x138c4b) !== "undefined" && _0x138c4b.cj) {
            if (_0x13ed66 === this.Mh.Qh.fh) {
              var _0x587e72 = this.Mh.Lh.Oh();
              var _0x1b7e94 = _0x100d25.dj(_0x587e72._a, _0x587e72.ab);
              _0x29c320.ia(0, 1 - _0x1b7e94.ej / (this.Mh.Nh * 0.5));
              if (_0x1b7e94.ej < this.Mh.Nh * 0.5) {
                var _0x553984 = _0x100d25.ki && _0x100d25.ki.Xa ? _0x100d25.ki.Xa : "";
                ooo.Xg.Kf.Wg.Dh.Vg(!!(_0x3c6075 & 2), _0x553984);
              }
            } else if (_0x549b43 === this.Mh.Qh.fh) ;else {
              var _0x25e7fb = this.Mh.Lh.Oh();
              var _0x113385 = _0x100d25.dj(_0x25e7fb._a, _0x25e7fb.ab);
              _0x29c320.ia(0, 1 - _0x113385.ej / (this.Mh.Nh * 0.5));
            }
          } else if (_0x549b43 === this.Mh.Qh.fh) ;else {
            var _0x3483f0 = this.Mh.Lh.Oh();
            var _0x43b9a0 = _0x100d25.dj(_0x3483f0._a, _0x3483f0.ab);
            _0x29c320.ia(0, 1 - _0x43b9a0.ej / (this.Mh.Nh * 0.5));
          }
        }
      };
      _0x3fe931.prototype.Qi = function (_0x5ccee3) {
        var _0x213649 = _0x5ccee3.La();
        var _0x255a92 = _0x213649 === this.Mh.Qh.fh ? null : this.Mh.li[_0x213649];
        var _0x508be9 = _0x5ccee3.Ka();
        var _0x2915e9 = !!(_0x508be9 & 1);
        if (_0x508be9 & 2) {
          var _0x336fcf = _0x5ccee3.Na();
          if (_0x255a92) {
            _0x255a92.fj(_0x336fcf);
          }
        }
        ;
        var _0x1d6f55 = this.gj(_0x5ccee3.Ka(), _0x5ccee3.Ka(), _0x5ccee3.Ka());
        var _0x55e94d = this.gj(_0x5ccee3.Ka(), _0x5ccee3.Ka(), _0x5ccee3.Ka());
        if (_0x255a92) {
          _0x255a92.hj(_0x1d6f55, _0x55e94d, _0x2915e9);
          var _0x3135e6 = this.Mh.Lh.Oh();
          var _0x5ea56c = _0x255a92.Oh();
          var _0x457fc5 = _0x29c320.ia(0, 1 - _0x29c320.la(_0x3135e6._a - _0x5ea56c._a, _0x3135e6.ab - _0x5ea56c.ab) / (this.Mh.Nh * 0.5));
          ooo.ij.Gf(_0x457fc5, _0x213649, _0x2915e9);
        }
        ;
        var _0x4176e2 = this.Ii(_0x5ccee3);
        if (_0x255a92) {
          for (var _0x1dc852 in _0x255a92.Nd) {
            var _0x79c25 = _0x255a92.Nd[_0x1dc852];
            if (_0x79c25) {
              _0x79c25.Rd = false;
            }
          }
        }
        ;
        for (var _0x22c502 = 0; _0x22c502 < _0x4176e2; _0x22c502++) {
          var _0x2e69c6 = _0x5ccee3.Ka();
          var _0x8cda69 = _0x5ccee3.Ka();
          if (_0x255a92) {
            var _0x334396 = _0x255a92.Nd[_0x2e69c6];
            _0x334396 ||= _0x255a92.Nd[_0x2e69c6] = new _0x3b6284.Pd(_0x2e69c6);
            _0x334396.Rd = true;
            _0x334396.Xd = _0x29c320.ha(1, _0x29c320.ia(0, _0x8cda69 / 100));
          }
        }
      };
      _0x3fe931.prototype.Ri = function (_0x2947e8) {
        var _0x5d10d4 = this.Mh.Lh;
        var _0x9c68b2 = _0x2947e8.Ka();
        var _0x55568f = !!(_0x9c68b2 & 1);
        if (_0x9c68b2 & 2) {
          var _0x184854 = _0x5d10d4.hi;
          _0x5d10d4.fj(_0x2947e8.Na());
          if ((_0x184854 = _0x5d10d4.hi - _0x184854) > 0) {
            ooo.Xg.Kf.Wg.Dh.Ug(_0x184854);
          }
        }
        ;
        if (_0x9c68b2 & 4) {
          this.Mh.jj = _0x2947e8.Na();
        }
        var _0x870c4f = this.gj(_0x2947e8.Ka(), _0x2947e8.Ka(), _0x2947e8.Ka());
        var _0x31f15c = this.gj(_0x2947e8.Ka(), _0x2947e8.Ka(), _0x2947e8.Ka());
        _0x5d10d4.hj(_0x870c4f, _0x31f15c, _0x55568f);
        ooo.ij.Gf(0.5, this.Mh.Qh.fh, _0x55568f);
        var _0x1aca8a = this.Ii(_0x2947e8);
        for (var _0x6c9f6f in _0x5d10d4.Nd) {
          var _0x38753a = _0x5d10d4.Nd[_0x6c9f6f];
          if (_0x38753a) {
            _0x38753a.Rd = false;
          }
        }
        ;
        for (var _0x598995 = 0; _0x598995 < _0x1aca8a; _0x598995++) {
          var _0x245f8e = _0x2947e8.Ka();
          var _0x242608 = _0x2947e8.Ka();
          var _0x5ee35f = _0x5d10d4.Nd[_0x245f8e];
          if (!_0x5ee35f) {
            _0x5ee35f = new _0x3b6284.Pd(_0x245f8e);
            _0x5d10d4.Nd[_0x245f8e] = _0x5ee35f;
          }
          _0x5ee35f.Rd = true;
          _0x5ee35f.Xd = _0x29c320.ha(1, _0x29c320.ia(0, _0x242608 / 100));
        }
        ;
        ooo.Xg.Kf.Wg.Bh.Bg(_0x5d10d4.Nd);
      };
      _0x3fe931.prototype.Oi = function (_0x516f00) {
        var _0x1c217a = this;
        var _0x274f91 = _0x516f00.La();
        var _0x6bc694 = this.aj(_0x274f91);
        var _0x2e0910 = _0x516f00.Na();
        var _0x1a5dcb = this.Ii(_0x516f00);
        if (_0x6bc694) {
          _0x6bc694.fj(_0x2e0910);
          _0x6bc694.kj(function () {
            return _0x1c217a.gj(_0x516f00.Ka(), _0x516f00.Ka(), _0x516f00.Ka());
          }, _0x1a5dcb);
          _0x6bc694.Td(true);
          var _0x31ba69 = this.Mh.Lh.Oh();
          var _0x340ae2 = _0x6bc694.Oh();
          var _0x126b51 = _0x29c320.ia(0, 1 - _0x29c320.la(_0x31ba69._a - _0x340ae2._a, _0x31ba69.ab - _0x340ae2.ab) / (this.Mh.Nh * 0.5));
          ooo.ij.Ef(_0x126b51, _0x274f91);
        } else {
          for (var _0x240abd = 0; _0x240abd < _0x1a5dcb * 6; _0x240abd++) {
            _0x516f00.Ka();
          }
        }
      };
      _0x3fe931.prototype.Pi = function (_0x5a3cfe) {
        var _0x48d7a1 = _0x5a3cfe.La();
        var _0x2bc0c1 = this.Mh.li[_0x48d7a1];
        if (_0x2bc0c1 && _0x2bc0c1.bj) {
          _0x2bc0c1.Td(false);
        }
        ooo.ij.Ff(_0x48d7a1);
      };
      _0x3fe931.prototype.Ji = function (_0x50498c) {
        var _0x2bf6d4 = new _0x3b6284.lj.Ti();
        _0x2bf6d4.Je = _0x50498c.Ma();
        _0x2bf6d4.mi = this.Mh.Qh.eh === _0x3b6284.jd.id ? _0x50498c.Ka() : _0x3b6284.dh.jh;
        _0x2bf6d4.mj = this.gj(_0x50498c.Ka(), _0x50498c.Ka(), _0x50498c.Ka());
        _0x2bf6d4.ni = _0x50498c.Ka();
        var _0x274d2e = this.Mh.nj[_0x2bf6d4.Je];
        if (_0x274d2e != null) {
          _0x274d2e.$i();
        }
        var _0x531860 = new _0x3b6284.lj(_0x2bf6d4, ooo.Xg.Kf.Wg);
        _0x531860.oj(this.pj(_0x2bf6d4.Je), this.qj(_0x2bf6d4.Je), true);
        this.Mh.nj[_0x2bf6d4.Je] = _0x531860;
      };
      _0x3fe931.prototype.Ki = function (_0x5e1a09) {
        var _0x501b65 = _0x5e1a09.Ma();
        var _0x1549fc = this.Mh.nj[_0x501b65];
        if (_0x1549fc) {
          _0x1549fc.rj = 0;
          _0x1549fc.sj = _0x1549fc.sj * 1.5;
          _0x1549fc.tj = true;
        }
      };
      _0x3fe931.prototype.Li = function (_0x5133cf) {
        var _0x1d338f = _0x5133cf.Ma();
        var _0x225e22 = _0x5133cf.La();
        var _0x55e61b = this.Mh.nj[_0x1d338f];
        if (_0x55e61b) {
          _0x55e61b.rj = 0;
          _0x55e61b.sj = _0x55e61b.sj * 0.1;
          _0x55e61b.tj = true;
          var _0x38f294 = this.aj(_0x225e22);
          if (_0x38f294 && _0x38f294.cj) {
            this.Mh.Qh.fh;
            var _0x3c6367 = _0x38f294.Oh();
            _0x55e61b.oj(_0x3c6367._a, _0x3c6367.ab, false);
          }
        }
      };
      var _0x19cf7c = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
      _0x3fe931.prototype.Ci = function (_0x1eae0a) {
        var _0x391a66 = ooo.ud.Ic().oc;
        var _0x55a9ef = _0x391a66.getImageData(0, 0, 80, 80);
        var _0x227145 = _0x19cf7c[0];
        var _0x16424 = 80 - _0x227145;
        var _0x44b687 = 0;
        for (var _0x2190e1 = 0; _0x2190e1 < 628; _0x2190e1++) {
          var _0x3c5841 = _0x1eae0a.Ka();
          for (var _0x4a254c = 0; _0x4a254c < 8; _0x4a254c++) {
            var _0x3d7b0f = (_0x227145 + _0x44b687 * 80) * 4;
            if ((_0x3c5841 >> _0x4a254c & 1) != 0) {
              _0x55a9ef.data[_0x3d7b0f] = 255;
              _0x55a9ef.data[_0x3d7b0f + 1] = 255;
              _0x55a9ef.data[_0x3d7b0f + 2] = 255;
              _0x55a9ef.data[_0x3d7b0f + 3] = 255;
            } else {
              _0x55a9ef.data[_0x3d7b0f + 3] = 0;
            }
            if (++_0x227145 >= _0x16424 && ++_0x44b687 < 80) {
              _0x16424 = 80 - (_0x227145 = _0x19cf7c[_0x44b687]);
            }
          }
        }
        ;
        _0x391a66.putImageData(_0x55a9ef, 0, 0);
        var _0x18c789 = ooo.Xg.Kf.Wg.Ah.Yh;
        _0x18c789.texture = ooo.ud.Ic().Za;
        _0x18c789.texture.update();
      };
      _0x3fe931.prototype.Ei = function (_0x16acea) {
        _0x16acea.Ma();
      };
      _0x3fe931.prototype.Fi = function (_0x48cb09) {
        createCircle();
        this.Mh.uj();
      };
      _0x3fe931.prototype.Di = function (_0x340c0d) {
        this.Mh.ei = _0x340c0d.La();
        this.Mh.oi = _0x340c0d.La();
        var _0x13e902 = new _0x3b6284.vj();
        _0x13e902.ii = [];
        for (var _0x13e893 = _0x340c0d.Ka(), _0x525da2 = 0; _0x525da2 < _0x13e893; _0x525da2++) {
          var _0x34f347 = _0x340c0d.La();
          var _0x19a489 = _0x340c0d.Na();
          _0x13e902.ii.push(_0x3b6284.vj.wj(_0x34f347, _0x19a489));
        }
        ;
        _0x13e902.fi = [];
        if (this.Mh.Qh.eh === _0x3b6284.jd.id) {
          for (var _0x6d2931 = _0x340c0d.Ka(), _0x15678f = 0; _0x15678f < _0x6d2931; _0x15678f++) {
            var _0x36c0c6 = _0x340c0d.Ka();
            var _0x18507c = _0x340c0d.Na();
            _0x13e902.fi.push(_0x3b6284.vj.xj(_0x36c0c6, _0x18507c));
          }
        }
        ;
        ooo.Xg.Kf.Wg.Ch.Bg(_0x13e902);
      };
      _0x3fe931.prototype.aj = function (_0x2047c4) {
        if (_0x2047c4 === this.Mh.Qh.fh) {
          return this.Mh.Lh;
        } else {
          return this.Mh.li[_0x2047c4];
        }
      };
      _0x3fe931.prototype.gj = function (_0x2a08be, _0x5adc64, _0x10459a) {
        return (((_0x10459a & 255 | _0x5adc64 << 8 & 65280 | _0x2a08be << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
      };
      _0x3fe931.prototype.pj = function (_0x5895d0) {
        return ((_0x5895d0 & 65535) / 32768 - 1) * this.Mh.Qh.kh();
      };
      _0x3fe931.prototype.qj = function (_0x1763af) {
        return ((_0x1763af >> 16 & 65535) / 32768 - 1) * this.Mh.Qh.kh();
      };
      _0x3fe931.prototype.Ii = function (_0x2c5300) {
        var _0x32c05a = _0x2c5300.Ka();
        if ((_0x32c05a & 128) == 0) {
          return _0x32c05a;
        }
        ;
        var _0x1b1036 = _0x2c5300.Ka();
        if ((_0x1b1036 & 128) == 0) {
          return _0x1b1036 | _0x32c05a << 7 & 16256;
        }
        ;
        var _0x121438 = _0x2c5300.Ka();
        if ((_0x121438 & 128) == 0) {
          return _0x121438 | _0x1b1036 << 7 & 16256 | _0x32c05a << 14 & 2080768;
        }
        ;
        var _0x4eba8d = _0x2c5300.Ka();
        if ((_0x4eba8d & 128) == 0) {
          return _0x4eba8d | _0x121438 << 7 & 16256 | _0x1b1036 << 14 & 2080768 | _0x32c05a << 21 & 266338304;
        } else {
          return undefined;
        }
      };
      return _0x3fe931;
    }();
    _0x3b6284.yj = function () {
      function _0x30acf(_0x53cd84) {
        this.zj = _0x53cd84;
      }
      _0x30acf.Aj = function () {
        return new _0x3b6284.yj(null);
      };
      _0x30acf.Bj = function (_0x1dfd01) {
        return new _0x3b6284.yj(_0x1dfd01);
      };
      _0x30acf.prototype.Mc = function () {
        return this.zj;
      };
      _0x30acf.prototype.Cj = function () {
        return this.zj != null;
      };
      _0x30acf.prototype.Dj = function (_0x1168a4) {
        if (this.zj != null) {
          _0x1168a4(this.zj);
        }
      };
      return _0x30acf;
    }();
    _0x3b6284.lj = function () {
      function _0x2ad86f(_0x551965, _0x384171) {
        this.ki = _0x551965;
        this.Ej = _0x551965.ni >= 80;
        this.Fj = 0;
        this.Gj = 0;
        this.Hj = 0;
        this.Ij = 0;
        this.sj = this.Ej ? 1 : _0x551965.mj;
        this.rj = 1;
        this.tj = false;
        this.Jj = 0;
        this.Kj = 0;
        this.Lj = 1;
        this.Mj = _0x54e48e.S * _0x29c320.ma();
        this.Nj = new _0x3b6284.Oj();
        this.Nj.hd(ooo.Mh.Qh.eh, this.ki.mi === _0x3b6284.dh.jh ? null : ooo.ud.Cc().Ub(this.ki.mi), ooo.ud.Cc().Zb(this.ki.ni));
        _0x384171.Vh(_0x551965.Je, this.Nj);
      }
      _0x2ad86f.prototype.$i = function () {
        this.Nj.Wh.md.G();
        this.Nj.Wh.ld.G();
      };
      _0x2ad86f.prototype.oj = function (_0x4b17d8, _0x153694, _0x311082) {
        this.Fj = _0x4b17d8;
        this.Gj = _0x153694;
        if (_0x311082) {
          this.Hj = _0x4b17d8;
          this.Ij = _0x153694;
        }
      };
      _0x2ad86f.prototype.Pj = function (_0x176f55, _0x5cf04d) {
        var _0x457fcc = _0x29c320.ha(0.5, this.sj * 1);
        var _0x15f716 = _0x29c320.ha(2.5, this.sj * 1.5);
        this.Jj = _0x29c320.ga(this.Jj, _0x457fcc, _0x5cf04d, 0.0025);
        this.Kj = _0x29c320.ga(this.Kj, _0x15f716, _0x5cf04d, 0.0025);
        this.Lj = _0x29c320.ga(this.Lj, this.rj, _0x5cf04d, 0.0025);
      };
      _0x2ad86f.prototype.Qj = function (_0x3d061b, _0x29ffbc, _0x8c120b) {
        this.Hj = _0x29c320.ga(this.Hj, this.Fj, _0x29ffbc, window.wormupObjects.eat_animation);
        this.Ij = _0x29c320.ga(this.Ij, this.Gj, _0x29ffbc, 0.0025);
        this.Nj.Bg(this, _0x3d061b, _0x29ffbc, _0x8c120b);
      };
      _0x2ad86f.Ti = function _0x2c45a9() {
        this.Je = 0;
        this.mi = _0x3b6284.dh.jh;
        this.mj = 0;
        this.ni = 0;
      };
      return _0x2ad86f;
    }();
    _0x3b6284.Oj = function () {
      function _0x3db238() {
        this.Wh = new _0x2b9556(new _0x3b6284.bd(), new _0x3b6284.bd());
        this.Wh.md.gd.blendMode = _0x55777a.k.w.z;
        this.Wh.md.gd.zIndex = _0x220ccd;
        this.Wh.ld.gd.zIndex = _0x3a1b5a;
      }
      var _0x3a1b5a = 500;
      var _0x220ccd = 100;
      _0x3db238.prototype.hd = function (_0x5d5b29, _0x4b7fa2, _0x71d820) {
        var _0x533307 = _0x71d820.dc;
        if (_0x533307 != null) {
          this.Wh.ld.kd(_0x533307);
        }
        var _0x728e9c = _0x5d5b29 === _0x3b6284.jd.id && _0x4b7fa2 != null ? _0x4b7fa2.bc.ec : _0x71d820.ec;
        if (_0x728e9c != null) {
          this.Wh.md.kd(_0x728e9c);
        }
      };
      _0x3db238.prototype.Bg = function (_0x15d066, _0xf5184b, _0x4e2dd0, _0x56b15f) {
        if (!_0x56b15f(_0x15d066.Hj, _0x15d066.Ij)) {
          this.Wh.Cd();
          return;
        }
        var _0x22b651 = _0x15d066.Kj * (1 + _0x29c320.pa(_0x15d066.Mj + _0xf5184b / 200) * 0.3);
        if (_0x15d066.Ej) {
          this.Wh.Ad(_0x15d066.Hj, _0x15d066.Ij, window.wormupObjects.PortionSize * _0x15d066.Jj, _0x15d066.Lj * 1, window.wormupObjects.PortionAura * _0x22b651, window.wormupObjects.PortionTransparent * _0x15d066.Lj);
        } else {
          this.Wh.Ad(_0x15d066.Hj, _0x15d066.Ij, window.wormupObjects.FoodSize * _0x15d066.Jj, _0x15d066.Lj * 1, window.wormupObjects.FoodShadow * _0x22b651, window.wormupObjects.FoodTransparent * _0x15d066.Lj);
        }
      };
      var _0x2b9556 = function () {
        function _0x1a33f3(_0x30b3b7, _0x33b85e) {
          this.ld = _0x30b3b7;
          this.md = _0x33b85e;
        }
        _0x1a33f3.prototype.Ad = function (_0x3d359c, _0x7807b9, _0x4ccf1c, _0x2c0d7c, _0x38d7b4, _0x45f330) {
          this.ld.Td(true);
          this.ld.Ud(_0x3d359c, _0x7807b9);
          this.ld.Bd(_0x4ccf1c);
          this.ld.Rj(_0x2c0d7c);
          this.md.Td(true);
          this.md.Ud(_0x3d359c, _0x7807b9);
          this.md.Bd(_0x38d7b4);
          this.md.Rj(_0x45f330);
        };
        _0x1a33f3.prototype.Cd = function () {
          this.ld.Td(false);
          this.md.Td(false);
        };
        return _0x1a33f3;
      }();
      return _0x3db238;
    }();
    _0x3b6284.Sj = function () {
      function _0x18c8a4() {
        this.Tj = 0;
        this.Uj = 0;
        this.Vj = 0;
        this.Wj = 0;
        this.Xj = 0;
        this.Yj = [];
      }
      function _0x36e98f(_0x6a94a3, _0x122a69) {
        for (var _0x3a8cee = 0; _0x3a8cee < _0x6a94a3.length; _0x3a8cee++) {
          if (parseInt(_0x6a94a3[_0x3a8cee].id) === _0x122a69) {
            return _0x3a8cee;
          }
        }
        ;
        return -1;
      }
      _0x18c8a4.prototype.Sa = function () {};
      _0x18c8a4.prototype.Zj = function (_0x52f1c0) {
        if (!_0x152ccb.loading) {
          _0x152ccb.pm = {
            ...this
          };
          localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
        }
        switch (_0x52f1c0) {
          case _0x3b6284._j.$j:
            return this.Tj;
          case _0x3b6284._j.ak:
            return this.Uj;
          case _0x3b6284._j.bk:
            return this.Vj;
          case _0x3b6284._j.ck:
            return this.Wj;
          case _0x3b6284._j.dk:
            return this.Xj;
        }
        ;
        return 0;
      };
      _0x18c8a4.prototype.ek = function () {
        return new _0x3b6284.Sb(this.Tj, this.Uj, this.Vj, this.Wj, this.Xj);
      };
      _0x18c8a4.prototype.fk = function (_0xe10efb) {
        this.Yj.push(_0xe10efb);
        this.gk();
      };
      _0x18c8a4.prototype.hk = function () {
        if (!ooo.ud.Fc()) {
          return _0x29c320.wa([32, 33, 34, 35]);
        }
        ;
        var _0x3f7c21 = [];
        for (var _0xe7a469 = ooo.ud.Gc().skinArrayDict, _0x4f4794 = 0; _0x4f4794 < _0xe7a469.length; _0x4f4794++) {
          var _0x308198 = _0xe7a469[_0x4f4794];
          if (this.ik(_0x308198.id, _0x3b6284._j.$j)) {
            _0x3f7c21.push(_0x308198);
          }
        }
        ;
        if (_0x3f7c21.length === 0) {
          return 0;
        } else {
          return _0x3f7c21[parseInt(_0x3f7c21.length * _0x29c320.ma())].id;
        }
      };
      _0x18c8a4.prototype.jk = function () {
        if (ooo.ud.Fc()) {
          var _0x107ac0 = ooo.ud.Gc().skinArrayDict;
          var _0x265265 = _0x36e98f(_0x107ac0, this.Tj);
          if (!(_0x265265 < 0)) {
            for (var _0x1012ac = _0x265265 + 1; _0x1012ac < _0x107ac0.length; _0x1012ac++) {
              if (this.ik(_0x107ac0[_0x1012ac].id, _0x3b6284._j.$j) && _0x107ac0[_0x1012ac].g !== true) {
                this.Tj = _0x107ac0[_0x1012ac].id;
                this.gk();
                return;
              }
            }
            ;
            for (var _0x17d71c = 0; _0x17d71c < _0x265265; _0x17d71c++) {
              if (this.ik(_0x107ac0[_0x17d71c].id, _0x3b6284._j.$j) && _0x107ac0[_0x17d71c].g !== true) {
                this.Tj = _0x107ac0[_0x17d71c].id;
                this.gk();
                return;
              }
            }
          }
        }
      };
      _0x18c8a4.prototype.kk = function () {
        if (ooo.ud.Fc) {
          var _0x164c5c = ooo.ud.Gc().skinArrayDict;
          var _0x2011ba = _0x36e98f(_0x164c5c, this.Tj);
          if (!(_0x2011ba < 0)) {
            for (var _0x48cbc8 = _0x2011ba - 1; _0x48cbc8 >= 0; _0x48cbc8--) {
              if (this.ik(_0x164c5c[_0x48cbc8].id, _0x3b6284._j.$j) && _0x164c5c[_0x48cbc8].g !== true) {
                this.Tj = _0x164c5c[_0x48cbc8].id;
                this.gk();
                return;
              }
            }
            ;
            for (var _0x2950de = _0x164c5c.length - 1; _0x2950de > _0x2011ba; _0x2950de--) {
              if (this.ik(_0x164c5c[_0x2950de].id, _0x3b6284._j.$j) && _0x164c5c[_0x2950de].g !== true) {
                this.Tj = _0x164c5c[_0x2950de].id;
                this.gk();
                return;
              }
            }
          }
        }
      };
      _0x18c8a4.prototype.lk = function (_0x2dbfa4, _0x43ae84) {
        if (!ooo.ud.Fc() || this.ik(_0x2dbfa4, _0x43ae84)) {
          switch (_0x43ae84) {
            case _0x3b6284._j.$j:
              if (this.Tj !== _0x2dbfa4) {
                this.Tj = _0x2dbfa4;
                this.gk();
              }
              return;
            case _0x3b6284._j.ak:
              if (this.Uj !== _0x2dbfa4) {
                this.Uj = _0x2dbfa4;
                this.gk();
              }
              return;
            case _0x3b6284._j.bk:
              if (this.Vj !== _0x2dbfa4) {
                this.Vj = _0x2dbfa4;
                this.gk();
              }
              return;
            case _0x3b6284._j.ck:
              if (this.Wj !== _0x2dbfa4) {
                this.Wj = _0x2dbfa4;
                this.gk();
              }
              return;
            case _0x3b6284._j.dk:
              if (this.Xj !== _0x2dbfa4) {
                this.Xj = _0x2dbfa4;
                this.gk();
              }
              return;
          }
        }
      };
      _0x18c8a4.prototype.ik = function (_0x415237, _0x19c4c8) {
        var _0x35328a = this.mk(_0x415237, _0x19c4c8);
        return _0x35328a != null && (ooo.ok.nk() ? _0x35328a.pk() === 0 && !_0x35328a.qk() || ooo.ok.rk(_0x415237, _0x19c4c8) : _0x35328a.sk());
      };
      _0x18c8a4.prototype.mk = function (_0x39b0c5, _0x25e652) {
        if (!ooo.ud.Fc()) {
          return null;
        }
        ;
        var _0x171222 = ooo.ud.Gc();
        if (_0x25e652 === _0x3b6284._j.$j) {
          var _0x3a28dc = _0x36e98f(_0x171222.skinArrayDict, _0x39b0c5);
          if (_0x3a28dc < 0) {
            return null;
          } else {
            return _0x3b6284.uk.tk(_0x171222.skinArrayDict[_0x3a28dc]);
          }
        }
        ;
        var _0x47721a = null;
        switch (_0x25e652) {
          case _0x3b6284._j.ak:
            _0x47721a = _0x171222.eyesDict[_0x39b0c5];
            break;
          case _0x3b6284._j.bk:
            _0x47721a = _0x171222.mouthDict[_0x39b0c5];
            break;
          case _0x3b6284._j.ck:
            _0x47721a = _0x171222.hatDict[_0x39b0c5];
            break;
          case _0x3b6284._j.dk:
            _0x47721a = _0x171222.glassesDict[_0x39b0c5];
        }
        ;
        if (_0x47721a != null) {
          return _0x3b6284.uk.vk(_0x47721a);
        } else {
          return null;
        }
      };
      _0x18c8a4.prototype.gk = function () {
        for (var _0x5441ee = 0; _0x5441ee < this.Yj.length; _0x5441ee++) {
          this.Yj[_0x5441ee]();
        }
      };
      return _0x18c8a4;
    }();
    _0x3b6284._j = function () {
      function _0x3fe54e() {}
      _0x3fe54e.$j = "SKIN";
      _0x3fe54e.ak = "EYES";
      _0x3fe54e.bk = "MOUTH";
      _0x3fe54e.dk = "GLASSES";
      _0x3fe54e.ck = "HAT";
      return _0x3fe54e;
    }();
    _0x3b6284.wk = function () {
      function _0x270c10() {
        this.fn_o = _0x514a97;
        this.ig = new _0x55777a.k.n(_0x55777a.k.m.from("/images/bg-obstacle.png"));
        this.F_bg = new _0x55777a.k.n(_0x514a97());
        var _0x26e9e5;
        var _0x55ddfe;
        var _0x3c2ff9;
        var _0xc90c31;
        var _0x57dcc9 = _0x55777a.k.m.from("https://wormate.io/images/confetti-valday2025.png" || _0x54e48e.H.N);
        var _0x235443 = new _0x55777a.k.n(_0x57dcc9, new _0x55777a.k.r(0, 0, 256, 256));
        var _0x27c3b6 = new _0x55777a.k.n(_0x57dcc9, new _0x55777a.k.r(352, 96, 64, 64));
        this.jg = Array(16);
        for (var _0x2b965c = 0; _0x2b965c < this.jg.length; _0x2b965c++) {
          this.jg[_0x2b965c] = _0x2b965c % 2 == 0 ? _0x235443 : _0x27c3b6;
        }
        ;
        this.Ih = new _0x55777a.k.n(((_0x26e9e5 = _0x55777a.k.m.from("/images/bg-pattern-pow2-ARENA.png")).wrapMode = _0x55777a.k.C.D, _0x26e9e5));
        this.Jh = new _0x55777a.k.n(((_0x55ddfe = _0x55777a.k.m.from("/images/bg-pattern-pow2-TEAM2.png")).wrapMode = _0x55777a.k.C.D, _0x55ddfe));
        this.Gh = new _0x55777a.k.n(_0x55777a.k.m.from("/images/lens.png"));
        this.$f = new _0x55777a.k.n(((_0x3c2ff9 = _0x55777a.k.m.from(_0x54e48e.H.O)).wrapMode = _0x55777a.k.C.D, _0x3c2ff9));
        this.mc = ((_0xc90c31 = _0x3b6284.d.createElement("canvas")).width = 80, _0xc90c31.height = 80, {
          nc: _0xc90c31,
          oc: _0xc90c31.getContext("2d"),
          Za: new _0x55777a.k.n(_0x55777a.k.m.from(_0xc90c31))
        });
        this.hf = {};
        this.df = {};
        this.xk = [];
        this.yk = null;
      }
      function _0x514a97(_0x2a1e53) {
        (_0x2a1e53 = _0x55777a.k.m.from(_0x2a1e53 || _0x152ccb.background || "/images/bg-pattern-pow2-ARENA.png")).wrapMode = _0x55777a.k.C.D;
        return _0x2a1e53;
      }
      _0x270c10.prototype.Sa = function (_0x1d6fe3) {
        function _0x39760f() {
          if (--_0x1f4cf8 == 0) {
            _0x1d6fe3();
          }
        }
        var _0x1f4cf8 = 4;
        this.hf = {};
        _0x39760f();
        this.df = {};
        _0x39760f();
        this.xk = [];
        _0x39760f();
        this.yk = null;
        _0x39760f();
      };
      return _0x270c10;
    }();
    _0x3b6284.zk = function () {
      function _0x36bbb8() {
        this.Ak = null;
        this.Kf = new _0x3b6284.Bk();
        this.Jf = new _0x3b6284.Ck();
        this.Dk = new _0x3b6284.Ek();
        this.Fk = new _0x3b6284.Gk();
        this.Hk = new _0x3b6284.Ik();
        this.Jk = new _0x3b6284.Kk();
        this.Lk = new _0x3b6284.Mk();
        this.Nk = new _0x3b6284.Ok();
        this.Hi = new _0x3b6284.Pk();
        this.Qk = new _0x3b6284.Rk();
        this.Sk = new _0x3b6284.Tk();
        this.Uk = new _0x3b6284.Vk();
        this.Wk = new _0x3b6284.Xk();
        this.Yk = new _0x3b6284.Zk();
        this.Re = new _0x3b6284.$k();
        this._k = new _0x3b6284.al();
        this.bl = new _0x3b6284.cl();
        this.dl = new _0x3b6284.el();
        this.fl = [];
      }
      function _0x3b24cc(_0x3df3bf, _0x5bc4f2) {
        if (_0x5bc4f2 !== _0x3df3bf.length + 1) {
          var _0x20d36a = _0x3df3bf[_0x5bc4f2];
          _0x29c320.ua(_0x3df3bf, _0x5bc4f2 + 1, _0x5bc4f2, _0x3df3bf.length - _0x5bc4f2 - 1);
          _0x3df3bf[_0x3df3bf.length - 1] = _0x20d36a;
        }
      }
      _0x36bbb8.prototype.Sa = function () {
        this.Ak = new _0x3b6284.Nf(_0x3b6284.Uf.Tf);
        this.fl = [this.Kf, this.Jf, this.Dk, this.Fk, this.Hk, this.Jk, this.Lk, this.Nk, this.Hi, this.Qk, this.Sk, this.Uk, this.Wk, this.Yk, this.Re, this._k, this.bl, this.dl];
        for (var _0x2fcfda = 0; _0x2fcfda < this.fl.length; _0x2fcfda++) {
          this.fl[_0x2fcfda].Sa();
        }
      };
      _0x36bbb8.prototype.Uh = function (_0x27884a, _0x43d25e) {
        for (var _0x3f0db1 = this.fl.length - 1; _0x3f0db1 >= 0; _0x3f0db1--) {
          this.fl[_0x3f0db1].ug(_0x27884a, _0x43d25e);
        }
        ;
        if (this.fl[0] !== this.Kf && this.fl[0] !== this.dl && this.Ak != null) {
          this.Ak.ug(_0x27884a, _0x43d25e);
        }
      };
      _0x36bbb8.prototype.qg = function () {
        for (var _0x2fcd24 = this.fl.length - 1; _0x2fcd24 >= 0; _0x2fcd24--) {
          this.fl[_0x2fcd24].qg();
        }
        ;
        if (this.Ak != null) {
          this.Ak.qg();
        }
      };
      _0x36bbb8.prototype.gl = function (_0x2d6053) {
        var _0x429d45 = function _0x15d560(_0x4a524a, _0x1ec203) {
          for (var _0x24d324 = 0; _0x24d324 < _0x4a524a.length; _0x24d324++) {
            if (_0x4a524a[_0x24d324] === _0x1ec203) {
              return _0x24d324;
            }
          }
          ;
          return -1;
        }(this.fl, _0x2d6053);
        if (!(_0x429d45 < 0)) {
          this.fl[0].hl();
          (function _0x4610d0(_0x3591c5, _0x3083e5) {
            if (_0x3083e5 !== 0) {
              var _0x342a4c = _0x3591c5[_0x3083e5];
              _0x29c320.ua(_0x3591c5, 0, 1, _0x3083e5);
              _0x3591c5[0] = _0x342a4c;
            }
          })(this.fl, _0x429d45);
          this.il();
        }
      };
      _0x36bbb8.prototype.jl = function () {
        this.fl[0].hl();
        do {
          _0x3b24cc(this.fl, 0);
        } while (this.fl[0].Wd !== _0x3b6284.ll.kl);
        ;
        this.il();
      };
      _0x36bbb8.prototype.il = function () {
        var _0x5beb63 = this.fl[0];
        _0x5beb63.ml();
        _0x5beb63.nl();
        this.ol();
      };
      _0x36bbb8.prototype.pl = function () {
        return this.fl.length !== 0 && this.fl[0].Wd === _0x3b6284.ll.kl && this.Yk.ql();
      };
      _0x36bbb8.prototype.rl = function () {
        if (this.fl.length === 0) {
          return null;
        } else {
          return this.fl[0];
        }
      };
      _0x36bbb8.prototype.ol = function () {
        if (this.pl()) {
          this.gl(this.Yk);
        }
      };
      return _0x36bbb8;
    }();
    _0x3b6284.vj = function () {
      function _0x506aa7() {
        this.ii = [];
        this.fi = [];
      }
      _0x506aa7.wj = function (_0x4f24a0, _0x42b8b8) {
        return {
          ji: _0x4f24a0,
          hi: _0x42b8b8
        };
      };
      _0x506aa7.xj = function (_0x7dfd64, _0x31d466) {
        return {
          gi: _0x7dfd64,
          hi: _0x31d466
        };
      };
      return _0x506aa7;
    }();
    _0x3b6284.sl = function () {
      function _0x1efe12() {
        this.tl = [];
        this.ul = [];
        this.vl = false;
        this.wl = _0x18ed49;
        this.xl = {};
      }
      var _0x18ed49 = "guest";
      var _0x369c93 = "guest";
      var _0xa70894 = "fb";
      var _0x48a9d5 = "gg";
      _0x1efe12.yl = new (function () {
        function _0xa4f15e() {}
        _0xa4f15e.zl = function _0x51da72(_0x2ee19e) {
          this.Al = _0x2ee19e;
        };
        _0xa4f15e.prototype.Bl = function () {
          return (typeof FB == "undefined" ? "undefined" : _typeof(FB)) != "undefined";
        };
        _0xa4f15e.prototype.Cl = function (_0x22e4b9, _0xbf0c4f, _0x1615e3) {
          var _0x3bdc69 = "https://graph.facebook.com/me?access_token=" + _0x22e4b9;
          $.get(_0x3bdc69).fail(function () {
            _0xbf0c4f();
          }).done(function () {
            _0x1615e3();
          });
        };
        _0xa4f15e.prototype.Dl = function (_0x28f83d, _0x5261a3) {
          if (!this.Bl()) {
            _0x28f83d();
            return;
          }
          ;
          this.El(function () {
            FB.login(function (_0x3c1b11) {
              if (_0x3c1b11.status !== "connected") {
                _0x28f83d();
                return;
              }
              ;
              var _0x4a590e = _0x3c1b11.authResponse.accessToken;
              _0x5261a3(new _0xa4f15e.zl(_0x4a590e));
            });
          }, function (_0x2b3204) {
            _0x5261a3(_0x2b3204);
          });
        };
        _0xa4f15e.prototype.El = function (_0x40a46e, _0x5d5534) {
          var _0x586b5a = this;
          if (!this.Bl()) {
            _0x40a46e();
            return;
          }
          ;
          FB.getLoginStatus(function (_0x2e7ff3) {
            if (_0x2e7ff3.status !== "connected") {
              _0x40a46e();
              return;
            }
            ;
            var _0x1ecb12 = _0x2e7ff3.authResponse.accessToken;
            _0x586b5a.Cl(_0x1ecb12, function () {
              _0x40a46e();
            }, function () {
              _0x5d5534(new _0xa4f15e.zl(_0x1ecb12));
            });
          });
        };
        _0xa4f15e.prototype.Fl = function () {
          if (this.Bl()) {
            FB.logout();
          }
        };
        return _0xa4f15e;
      }())();
      _0x1efe12.Gl = new (function () {
        function _0x57aa01() {}
        _0x57aa01.Hl = function _0x49eb17(_0x1ad9ec, _0x424643) {
          this.Al = _0x1ad9ec;
          this.Il = _0x424643;
        };
        _0x57aa01.prototype.Bl = function () {
          return _typeof(GoogleAuth) != "undefined";
        };
        _0x57aa01.prototype.Dl = function (_0x4dbf0a, _0x4403f8) {
          if (_typeof(GoogleAuth) == "undefined") {
            _0x4dbf0a();
            return;
          }
          ;
          GoogleAuth.then(function () {
            if (GoogleAuth.isSignedIn.get()) {
              var _0x48a659 = GoogleAuth.currentUser.get();
              var _0x4fa4ca = _0x48a659.getAuthResponse().id_token;
              var _0x534035 = new Date().getTime() + _0x48a659.getAuthResponse().expires_in * 1000;
              if (new Date().getTime() < _0x534035) {
                _0x4403f8(new _0x57aa01.Hl(_0x4fa4ca, _0x534035));
                return;
              }
            }
            ;
            GoogleAuth.signIn().then(function (_0x5a2237) {
              if (_typeof(_0x5a2237.error) !== "undefined" || !_0x5a2237.isSignedIn()) {
                _0x4dbf0a();
                return;
              }
              ;
              var _0x5bcb4d = _0x5a2237.getAuthResponse().id_token;
              var _0x55b799 = new Date().getTime() + _0x5a2237.getAuthResponse().expires_in * 1000;
              _0x4403f8(new _0x57aa01.Hl(_0x5bcb4d, _0x55b799));
            });
          });
        };
        _0x57aa01.prototype.El = function (_0x4a914e, _0x4f7733) {
          if (_typeof(GoogleAuth) == "undefined") {
            _0x4a914e();
            return;
          }
          ;
          GoogleAuth.then(function () {
            if (GoogleAuth.isSignedIn.get()) {
              var _0x489754 = GoogleAuth.currentUser.get();
              var _0x37a6e4 = _0x489754.getAuthResponse().id_token;
              var _0x11d0d7 = new Date().getTime() + _0x489754.getAuthResponse().expires_in * 1000;
              if (new Date().getTime() < _0x11d0d7) {
                _0x4f7733(new _0x57aa01.Hl(_0x37a6e4, _0x11d0d7));
                return;
              }
            }
            ;
            _0x4a914e();
          });
        };
        _0x57aa01.prototype.Fl = function () {
          if (_typeof(GoogleAuth) != "undefined") {
            GoogleAuth.signOut();
          }
        };
        return _0x57aa01;
      }())();
      _0x1efe12.prototype.Sa = function () {
        this.Jl();
      };
      _0x1efe12.prototype.Kl = function () {
        if (this.vl) {
          return this.xl.userId;
        } else {
          return "";
        }
      };
      _0x1efe12.prototype.Ll = function () {
        if (this.vl) {
          return this.xl.username;
        } else {
          return "";
        }
      };
      _0x1efe12.prototype.Ml = function () {
        if (this.vl) {
          return this.xl.nickname;
        } else {
          return "";
        }
      };
      _0x1efe12.prototype.Nl = function () {
        if (this.vl) {
          return this.xl.avatarUrl;
        } else {
          return _0x54e48e.H.M;
        }
      };
      _0x1efe12.prototype.Ol = function () {
        return this.vl && this.xl.isBuyer;
      };
      _0x1efe12.prototype.Pl = function () {
        return this.vl && this.xl.isConsentGiven;
      };
      _0x1efe12.prototype.Ql = function () {
        if (this.vl) {
          return this.xl.coins;
        } else {
          return 0;
        }
      };
      _0x1efe12.prototype.Rl = function () {
        if (this.vl) {
          return this.xl.level;
        } else {
          return 1;
        }
      };
      _0x1efe12.prototype.Sl = function () {
        if (this.vl) {
          return this.xl.expOnLevel;
        } else {
          return 0;
        }
      };
      _0x1efe12.prototype.Tl = function () {
        if (this.vl) {
          return this.xl.expToNext;
        } else {
          return 50;
        }
      };
      _0x1efe12.prototype.Ul = function () {
        if (this.vl) {
          return this.xl.skinId;
        } else {
          return 0;
        }
      };
      _0x1efe12.prototype.Vl = function () {
        if (this.vl) {
          return this.xl.eyesId;
        } else {
          return 0;
        }
      };
      _0x1efe12.prototype.Wl = function () {
        if (this.vl) {
          return this.xl.mouthId;
        } else {
          return 0;
        }
      };
      _0x1efe12.prototype.Xl = function () {
        if (this.vl) {
          return this.xl.glassesId;
        } else {
          return 0;
        }
      };
      _0x1efe12.prototype.Yl = function () {
        if (this.vl) {
          return this.xl.hatId;
        } else {
          return 0;
        }
      };
      _0x1efe12.prototype.Zl = function () {
        if (this.vl) {
          return this.xl.highScore;
        } else {
          return 0;
        }
      };
      _0x1efe12.prototype.$l = function () {
        if (this.vl) {
          return this.xl.bestSurvivalTimeSec;
        } else {
          return 0;
        }
      };
      _0x1efe12.prototype._l = function () {
        if (this.vl) {
          return this.xl.kills;
        } else {
          return 0;
        }
      };
      _0x1efe12.prototype.am = function () {
        if (this.vl) {
          return this.xl.headShots;
        } else {
          return 0;
        }
      };
      _0x1efe12.prototype.bm = function () {
        if (this.vl) {
          return this.xl.sessionsPlayed;
        } else {
          return 0;
        }
      };
      _0x1efe12.prototype.cm = function () {
        if (this.vl) {
          return this.xl.totalPlayTimeSec;
        } else {
          return 0;
        }
      };
      _0x1efe12.prototype.dm = function () {
        if (this.vl) {
          return this.xl.regDate;
        } else {
          return {};
        }
      };
      _0x1efe12.prototype.em = function (_0x3cad1a) {
        this.tl.push(_0x3cad1a);
        _0x3cad1a();
      };
      _0x1efe12.prototype.fm = function (_0x56b28d) {
        this.ul.push(_0x56b28d);
        _0x56b28d();
      };
      _0x1efe12.prototype.rk = function (_0x22f05c, _0xebaddc) {
        var _0x5b0e72 = this.xl.propertyList.concat(_0x152ccb.pL || []);
        if (_0x5b0e72 == null) {
          return false;
        }
        ;
        for (_0x369c93 = 0; _0x369c93 < _0x5b0e72.length; _0x369c93++) {
          var _0x10197f = _0x5b0e72[_0x369c93];
          if (_0x10197f.id == _0x22f05c && _0x10197f.type === _0xebaddc) {
            return true;
          }
        }
        ;
        return false;
      };
      _0x1efe12.prototype.nk = function () {
        return this.vl;
      };
      _0x1efe12.prototype.gm = function () {
        return this.wl;
      };
      _0x1efe12.prototype.hm = function (_0x35623b) {
        var _0x52fc4e = this;
        var _0x433ef6 = this.Kl();
        var _0x1ee51a = this.Ql();
        var _0x4184c6 = this.Rl();
        this.im(function () {
          if (_0x35623b != null) {
            _0x35623b();
          }
        }, function (_0x2567c1) {
          _0x52fc4e.xl = _0x2567c1.user_data;
          _0x52fc4e.jm();
          var _0x1564d7 = _0x52fc4e.Kl();
          var _0x4c68e5 = _0x52fc4e.Ql();
          var _0x5628aa = _0x52fc4e.Rl();
          if (_0x433ef6 === _0x1564d7) {
            if (_0x5628aa > 1 && _0x5628aa !== _0x4184c6) {
              ooo.Xg.Yk.km(new _0x3b6284.lm(_0x5628aa));
            }
            var _0x1ec3db = _0x4c68e5 - _0x1ee51a;
            if (_0x1ec3db >= 20) {
              ooo.Xg.Yk.km(new _0x3b6284.mm(_0x1ec3db));
            }
          }
          ;
          if (_0x35623b != null) {
            _0x35623b();
          }
        });
      };
      _0x1efe12.prototype.im = function (_0x338126, _0x1868b1) {
        var _0x4b8e43 = _0x54e48e.H.J + "/pub/wuid/" + this.wl + "/getUserData";
        _0x29c320.Aa(_0x4b8e43, _0x338126, function (_0x3512aa) {
          if (_0x3512aa.code !== 1200) {
            _0x338126();
          } else {
            _0x1868b1(_0x3512aa);
          }
        });
      };
      _0x1efe12.prototype.nm = function (_0x379bf9, _0x247860, _0x3b11de, _0x376f38) {
        var _0x232a0a = _0x54e48e.H.J + "/pub/wuid/" + this.wl + "/buyProperty?id=" + _0x379bf9 + "&type=" + _0x247860;
        _0x29c320.Aa(_0x232a0a, function () {
          _0x3b11de();
        }, function (_0xf0fa44) {
          if (_0xf0fa44.code !== 1200) {
            _0x3b11de();
          } else {
            _0x376f38();
          }
        });
      };
      _0x1efe12.prototype.om = function (_0xd0f6cc, _0x425149) {
        var _0x23ab5c = _0x54e48e.H.J + "/pub/wuid/" + this.wl + "/deleteAccount";
        _0x29c320.Aa(_0x23ab5c, _0xd0f6cc, function (_0x2dfc24) {
          if (_0x2dfc24.code !== 1200) {
            _0xd0f6cc();
          } else {
            _0x425149();
          }
        });
      };
      _0x1efe12.prototype.pm = function (_0x295b3b) {
        var _0x3eaf21 = this;
        if (this.vl) {
          this.qm();
        }
        _0x1efe12.yl.Dl(function () {
          _0x295b3b();
        }, function (_0x5c6d27) {
          _0x3eaf21.rm(_0xa70894, _0x5c6d27.Al, _0x295b3b);
        });
      };
      _0x1efe12.prototype.sm = function (_0x5d3b6c) {
        var _0x3a4a57 = this;
        if (this.vl) {
          this.qm();
        }
        _0x1efe12.Gl.Dl(function () {
          _0x5d3b6c();
        }, function (_0x3da0aa) {
          _0x3a4a57.rm(_0x48a9d5, _0x3da0aa.Al, _0x5d3b6c);
        });
      };
      _0x1efe12.prototype.rm = function (_0x544d32, _0x3c8aa2, _0x9f2ed9) {
        var _0x2d3218 = this;
        var _0x53b2a5 = _0x544d32 + "_" + _0x3c8aa2;
        var _0x116e44 = _0x54e48e.H.J + "/pub/wuid/" + _0x53b2a5 + "/login";
        _0x29c320.Aa(_0x116e44, function () {
          _0x2d3218.tm();
        }, function (_0x9500a5) {
          if (_0x9500a5.code !== 1200) {
            _0x2d3218.tm();
          } else {
            _0x2d3218.um(_0x544d32, _0x3c8aa2, _0x9500a5.user_data);
            if (_0x9f2ed9 != null) {
              _0x9f2ed9();
            }
          }
        });
      };
      _0x1efe12.prototype.qm = function () {
        try {
          this.vm();
          this.wm();
        } catch (_0x574bd3) {}
        ;
        this.xm();
      };
      _0x1efe12.prototype.ym = function () {
        if (this.vl) {
          this.om(function () {}, function () {});
        }
      };
      _0x1efe12.prototype.tm = function () {
        ooo.Xg.gl(ooo.Xg._k);
      };
      _0x1efe12.prototype.um = function (_0x411b90, _0x1ff61f, _0x1eb7ac) {
        var _0x1e4af0 = this;
        _0x39fbec(_0x1eb7ac, function (_0x37e211) {
          var _0x230a51 = _0x1e4af0.vl ? _0x1e4af0.xl.userId : _0x37e211;
          _0x1e4af0.vl = true;
          _0x1e4af0.wl = _0x411b90 + "_" + _0x1ff61f;
          _0x1e4af0.xl = _0x37e211;
          _0x3b6284.Cg.Ng(_0x3b6284.Cg.Hg, _0x411b90, 60);
          if (_0x230a51 !== _0x1e4af0.xl.userId) {
            _0x1e4af0.zm();
          } else {
            _0x1e4af0.jm();
          }
          ooo.Xp(true, true);
          _0x152ccb.loading = false;
        });
      };
      _0x1efe12.prototype.xm = function () {
        var _0x32f571 = this.vl ? this.xl.userId : _0x369c93;
        this.vl = false;
        this.wl = _0x18ed49;
        this.xl = {};
        _0x3b6284.Cg.Ng(_0x3b6284.Cg.Hg, "", 60);
        if (_0x32f571 !== this.xl.userId) {
          this.zm();
        } else {
          this.jm();
        }
      };
      _0x1efe12.prototype.Jl = function () {
        var _0x5d8d04 = _0x3b6284.Cg.Og(_0x3b6284.Cg.Hg);
        var _0x5477a5 = this;
        if (_0xa70894 === _0x5d8d04) {
          var _0x557b19 = 1;
          (function _0x3eaf6d() {
            if (!_0x1efe12.yl.Bl() && _0x557b19++ < 5) {
              _0x29c320.Y(_0x3eaf6d, 1000);
              return;
            }
            ;
            _0x1efe12.yl.El(function () {}, function (_0xff0dac) {
              _0x5477a5.rm(_0xa70894, _0xff0dac.Al);
            });
          })();
        } else if (_0x48a9d5 === _0x5d8d04) {
          var _0x1b0320 = 1;
          (function _0x3da5f8() {
            if (!_0x1efe12.Gl.Bl() && _0x1b0320++ < 5) {
              _0x29c320.Y(_0x3da5f8, 1000);
              return;
            }
            ;
            _0x1efe12.Gl.El(function () {}, function (_0x53b7a8) {
              _0x5477a5.rm(_0x48a9d5, _0x53b7a8.Al);
            });
          })();
        }
      };
      _0x1efe12.prototype.zm = function () {
        for (var _0x4a1abd = 0; _0x4a1abd < this.tl.length; _0x4a1abd++) {
          this.tl[_0x4a1abd]();
        }
        ;
        this.jm();
      };
      _0x1efe12.prototype.jm = function () {
        for (var _0x48504f = 0; _0x48504f < this.ul.length; _0x48504f++) {
          this.ul[_0x48504f]();
        }
      };
      _0x1efe12.prototype.vm = function () {
        _0x1efe12.yl.Fl();
      };
      _0x1efe12.prototype.wm = function () {
        _0x1efe12.Gl.Fl();
      };
      return _0x1efe12;
    }();
    _0x3b6284.Sf = function () {
      function _0x2fcca0(_0x11d5a1, _0x4bd7c4, _0x5a449c) {
        this.Of = _0x5a449c;
        this.Rd = false;
        this.Yc = new _0x55777a.k.l();
        this.Yc.visible = false;
        this.Am = Array(_0x11d5a1);
        for (var _0x4c3a22 = 0; _0x4c3a22 < this.Am.length; _0x4c3a22++) {
          var _0x4bba2b = new _0x3b6284.Bm(new _0x55777a.j(_0x4bd7c4 * 3));
          _0x4bba2b.Cm(_0x4bd7c4);
          this.Am[_0x4c3a22] = _0x4bba2b;
          this.Yc.addChild(_0x4bba2b.ag());
        }
        ;
        this.Pf = 1;
        this.Qf = 1;
        this.qg();
      }
      _0x2fcca0.prototype.ag = function () {
        return this.Yc;
      };
      _0x2fcca0.prototype.rg = function (_0x43b60d) {
        this.Rd = _0x43b60d;
        this.Yc.visible = _0x43b60d;
      };
      _0x2fcca0.prototype.qg = function () {
        this.Pf = this.Of.width();
        this.Qf = this.Of.height();
        var _0x156fbd = this.Qf / 30;
        for (var _0x412f51 = 0; _0x412f51 < this.Am.length; _0x412f51++) {
          this.Am[_0x412f51].Dm(_0x156fbd);
        }
      };
      _0x2fcca0.prototype.Bg = function () {
        if (this.Rd) {
          for (var _0xc21136 = 0; _0xc21136 < this.Am.length; _0xc21136++) {
            this.Am[_0xc21136].Bg(this.Vf);
          }
        }
      };
      _0x2fcca0.prototype.Em = function () {
        return this.Pf;
      };
      _0x2fcca0.prototype.Fm = function () {
        return this.Qf;
      };
      _0x2fcca0.prototype.xg = function (_0xf59bca, _0xc1bc94) {
        this.Am[_0xf59bca].Gm(_0xc1bc94);
      };
      _0x2fcca0.prototype.yg = function (_0x322f1e, _0x17c03e) {
        this.Am[_0x322f1e].Hm(_0x17c03e);
      };
      _0x2fcca0.prototype.zg = function (_0x314a31, _0x30b204, _0x2d13a3) {
        var _0x48a0da = this.Am[_0x314a31];
        for (var _0x505f6e = _0x48a0da.Im(), _0x255f58 = _0x48a0da.Jm, _0x3862c = 0; _0x3862c < _0x505f6e; _0x3862c++) {
          _0x255f58[_0x3862c * 3] = _0x30b204;
          _0x255f58[_0x3862c * 3 + 1] = _0x2d13a3;
          _0x255f58[_0x3862c * 3 + 2] = 0;
        }
      };
      _0x2fcca0.prototype.Ag = function (_0x54cd1e, _0xe4a031, _0x185d4b) {
        var _0x459d68;
        var _0x464c14;
        var _0x4ad7e9 = this.Am[_0x54cd1e];
        var _0x4c9e08 = _0x4ad7e9.Im();
        var _0x341431 = _0x4ad7e9.Jm;
        var _0xb60aaa = _0x4ad7e9.Km();
        var _0x31c4de = _0x341431[0];
        var _0x417d71 = _0x341431[1];
        var _0x53b86e = _0xe4a031 - _0x31c4de;
        var _0x531657 = _0x185d4b - _0x417d71;
        var _0xcaf0d9 = _0x29c320.la(_0x53b86e, _0x531657);
        if (_0xcaf0d9 > 0) {
          _0x341431[0] = _0xe4a031;
          _0x341431[1] = _0x185d4b;
          _0x341431[2] = _0x29c320.ta(_0x531657, _0x53b86e);
          var _0x50ce50 = _0xb60aaa * 0.25 / (_0xb60aaa * 0.25 + _0xcaf0d9);
          var _0x25140c = 1 - _0x50ce50 * 2;
          for (var _0x1f1ebc = 1, _0x4dc4d1 = _0x4c9e08; _0x1f1ebc < _0x4dc4d1; _0x1f1ebc++) {
            _0x459d68 = _0x341431[_0x1f1ebc * 3];
            _0x341431[_0x1f1ebc * 3] = _0x341431[_0x1f1ebc * 3 - 3] * _0x25140c + (_0x459d68 + _0x31c4de) * _0x50ce50;
            _0x31c4de = _0x459d68;
            _0x464c14 = _0x341431[_0x1f1ebc * 3 + 1];
            _0x341431[_0x1f1ebc * 3 + 1] = _0x341431[_0x1f1ebc * 3 - 2] * _0x25140c + (_0x464c14 + _0x417d71) * _0x50ce50;
            _0x417d71 = _0x464c14;
            _0x341431[_0x1f1ebc * 3 + 2] = _0x29c320.ta(_0x341431[_0x1f1ebc * 3 - 2] - _0x341431[_0x1f1ebc * 3 + 1], _0x341431[_0x1f1ebc * 3 - 3] - _0x341431[_0x1f1ebc * 3]);
          }
        }
      };
      return _0x2fcca0;
    }();
    _0x3b6284.Lm = function () {
      function _0x4f7250(_0x8b9ee0) {
        var _0x495a90;
        var _0x1d66e3 = this;
        this.Of = _0x8b9ee0;
        this.nc = _0x8b9ee0.get()[0];
        this.Vf = ((_0x495a90 = {}).view = _0x1d66e3.nc, _0x495a90.transparent = true, new _0x55777a.k.o(_0x495a90));
        this.Rd = false;
        this.Mm = new _0x3b6284.Bm(new _0x55777a.j(_0x515e1c * 3));
        this.Pf = 1;
        this.Qf = 1;
        this.Nm = _0x39ddc3.Om;
        this.Pm = _0x39ddc3.Om;
        this.Qm = _0x39ddc3.Om;
        this.Rm = _0x39ddc3.Om;
        this.Sm = _0x39ddc3.Om;
        this.qg();
        ooo.ud.Jc(function () {
          _0x1d66e3.Mm.Tm();
        });
      }
      var _0x515e1c = _0x29c320.ha(100, _0x3b6284.Xc.fd);
      var _0x39ddc3 = {
        Om: "0lt0",
        Um: "0lt1",
        Vm: "0lt2"
      };
      _0x4f7250.prototype.rg = function (_0x3b877e) {
        this.Rd = _0x3b877e;
      };
      _0x4f7250.prototype.qg = function () {
        var _0x5531ad = _0x29c320.e();
        this.Pf = this.Of.width();
        this.Qf = this.Of.height();
        this.Vf.resize(this.Pf, this.Qf);
        this.Vf.resolution = _0x5531ad;
        this.nc.width = _0x5531ad * this.Pf;
        this.nc.height = _0x5531ad * this.Qf;
        var _0x2dbc05 = this.Qf / 4;
        this.Mm.Dm(_0x2dbc05);
        var _0x56a91d = _0x29c320.fa(_0x29c320._(this.Pf / _0x2dbc05) * 2 - 5, 1, _0x515e1c);
        this.Mm.Cm(_0x56a91d);
      };
      _0x4f7250.prototype.ug = function () {
        if (this.Rd) {
          var _0x46f833 = _0x29c320.Ca() / 200;
          var _0x5d2b0d = _0x29c320.oa(_0x46f833);
          this.Mm.Wm(this.Xm(this.Nm, _0x5d2b0d), this.Ym(this.Nm, _0x5d2b0d));
          this.Mm.Zm(this.$m(this.Pm, _0x5d2b0d), this.$m(this.Qm, _0x5d2b0d), this.$m(this.Rm, _0x5d2b0d), this.$m(this.Sm, _0x5d2b0d));
          var _0x106251 = this.Mm.Km();
          for (var _0x4d7c58 = this.Mm.Im(), _0x39be78 = this.Mm.Jm, _0x454145 = this.Pf - (this.Pf - _0x106251 * 0.5 * (_0x4d7c58 - 1)) * 0.5, _0x4b81f1 = this.Qf * 0.5, _0x56a35a = 0, _0x4a33d3 = 0, _0x40ca2f = -1; _0x40ca2f < _0x4d7c58; _0x40ca2f++) {
            var _0x364b4a = _0x40ca2f;
            var _0x271259 = _0x29c320.pa(_0x364b4a * 1 / 12 * _0x54e48e.T - _0x46f833) * (1 - _0x29c320.ra(16, _0x364b4a * -1 / 12));
            if (_0x40ca2f >= 0) {
              _0x39be78[_0x40ca2f * 3] = _0x454145 - _0x106251 * 0.5 * _0x364b4a;
              _0x39be78[_0x40ca2f * 3 + 1] = _0x4b81f1 + _0x106251 * 0.5 * _0x271259;
              _0x39be78[_0x40ca2f * 3 + 2] = _0x29c320.ta(_0x4a33d3 - _0x271259, _0x364b4a - _0x56a35a);
            }
            _0x56a35a = _0x364b4a;
            _0x4a33d3 = _0x271259;
          }
          ;
          this.Mm.Bg();
          this.Mm._m(this.Vf);
        }
      };
      _0x4f7250.prototype.Gm = function (_0x3b1f68) {
        this.Mm.Gm(_0x3b1f68);
      };
      _0x4f7250.prototype.an = function (_0x173c96) {
        this.Nm = _0x173c96 ? _0x39ddc3.Vm : _0x39ddc3.Um;
        this.Pm = _0x39ddc3.Om;
        this.Qm = _0x39ddc3.Om;
        this.Rm = _0x39ddc3.Om;
        this.Sm = _0x39ddc3.Om;
      };
      _0x4f7250.prototype.bn = function (_0xb9bc23) {
        this.Nm = _0x39ddc3.Om;
        this.Pm = _0xb9bc23 ? _0x39ddc3.Vm : _0x39ddc3.Um;
        this.Qm = _0x39ddc3.Om;
        this.Rm = _0x39ddc3.Om;
        this.Sm = _0x39ddc3.Om;
      };
      _0x4f7250.prototype.cn = function (_0x4105f4) {
        this.Nm = _0x39ddc3.Om;
        this.Pm = _0x39ddc3.Om;
        this.Qm = _0x4105f4 ? _0x39ddc3.Vm : _0x39ddc3.Um;
        this.Rm = _0x39ddc3.Om;
        this.Sm = _0x39ddc3.Om;
      };
      _0x4f7250.prototype.dn = function (_0x34ae59) {
        this.Nm = _0x39ddc3.Om;
        this.Pm = _0x39ddc3.Om;
        this.Qm = _0x39ddc3.Om;
        this.Rm = _0x34ae59 ? _0x39ddc3.Vm : _0x39ddc3.Um;
        this.Sm = _0x39ddc3.Om;
      };
      _0x4f7250.prototype.en = function (_0x41ace2) {
        this.Nm = _0x39ddc3.Om;
        this.Pm = _0x39ddc3.Om;
        this.Qm = _0x39ddc3.Om;
        this.Rm = _0x39ddc3.Om;
        this.Sm = _0x41ace2 ? _0x39ddc3.Vm : _0x39ddc3.Um;
      };
      _0x4f7250.prototype.Xm = function (_0x557b5f, _0x469b85) {
        switch (_0x557b5f) {
          case _0x39ddc3.Um:
            return 0.9 + _0x469b85 * 0.1;
          case _0x39ddc3.Vm:
            return 0.4 + _0x469b85 * 0.3;
        }
        ;
        return 1;
      };
      _0x4f7250.prototype.Ym = function (_0x33824c, _0x4fe40c) {
        switch (_0x33824c) {
          case _0x39ddc3.Um:
            return 0.6 + _0x4fe40c * 0.5;
          case _0x39ddc3.Vm:
            return 0.3 + _0x4fe40c * 0.3;
        }
        ;
        return 1;
      };
      _0x4f7250.prototype.$m = function (_0xf58211, _0x5c51d7) {
        switch (_0xf58211) {
          case _0x39ddc3.Um:
            return 0.9 + _0x5c51d7 * 0.1;
          case _0x39ddc3.Vm:
            return 0.6 + _0x5c51d7 * 0.4;
        }
        ;
        return 1;
      };
      return _0x4f7250;
    }();
    _0x3b6284.uk = function () {
      function _0x2093d9(_0xb60ce8, _0x453e5d, _0x4460c4, _0x3f0bcd, _0x402364) {
        this.gn = _0xb60ce8;
        this.hn = _0x453e5d;
        this.in = _0x4460c4;
        this.jn = _0x3f0bcd;
        this.kn = _0x402364;
      }
      _0x2093d9.tk = function (_0x571881) {
        return new _0x2093d9(_0x571881.price, _0x571881.guest, _0x571881.nonbuyable, _0x571881.nonbuyableCause, _0x571881.description);
      };
      _0x2093d9.vk = function (_0x5adabf) {
        return new _0x2093d9(_0x5adabf.price, _0x5adabf.guest, _0x5adabf.nonbuyable, _0x5adabf.nonbuyableCause, _0x5adabf.description);
      };
      _0x2093d9.prototype.pk = function () {
        return this.gn;
      };
      _0x2093d9.prototype.sk = function () {
        return this.hn;
      };
      _0x2093d9.prototype.qk = function () {
        return this.in;
      };
      _0x2093d9.prototype.ln = function () {
        return this.jn;
      };
      _0x2093d9.prototype.mn = function () {
        return this.kn;
      };
      return _0x2093d9;
    }();
    _0x3b6284.Zf = function () {
      function _0x1f73c3(_0x35db1d) {
        this.nn = {};
        function _0x402773() {
          var _0x316e1a = ["https://wormup.in/images/cors-proxy.php?img=Background/bg1.jpg", "https://wormup.in/images/cors-proxy.php?img=Background/bg2.jpg", "https://wormup.in/images/cors-proxy.php?img=Background/bg3.jpg"];
          var _0x5ab3b5 = localStorage.getItem("lastBackground");
          var _0x13ff0e = _0x316e1a.filter(_0x222591 => _0x222591 !== _0x5ab3b5);
          var _0x4fa955 = _0x13ff0e[Math.floor(Math.random() * _0x13ff0e.length)];
          localStorage.setItem("lastBackground", _0x4fa955);
          return _0x4fa955;
        }
        var _0x4b3fa1 = _0x55777a.k.m.from(_0x402773());
        this.nn[_0x1e97a2] = _0x4b3fa1;
        var _0x6f7005 = _0x55777a.k.q.from(_0x2606ec, _0x134aeb, this.nn);
        this._f = new _0x55777a.k.v(_0x5b9a7a, _0x6f7005);
        this._f.blendMode = _0x55777a.k.w.B;
        this._f.alpha = 0.6;
      }
      var _0x3b8186 = "a1_" + _0x29c320.xa();
      var _0x1d7b93 = "a2_" + _0x29c320.xa();
      var _0x48192d = "translationMatrix";
      var _0x3c5445 = "projectionMatrix";
      var _0x1e97a2 = "u3_" + _0x29c320.xa();
      var _0x55085d = "u4_" + _0x29c320.xa();
      var _0x5d7c9e = "v1_" + _0x29c320.xa();
      var _0x5b9a7a = new _0x55777a.k.u().addAttribute(_0x3b8186, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2).addAttribute(_0x1d7b93, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2);
      var _0x2606ec = "precision mediump float; attribute vec2 " + _0x3b8186 + "; attribute vec2 " + _0x1d7b93 + "; uniform mat3 " + _0x48192d + "; uniform mat3 " + _0x3c5445 + "; uniform vec4 " + _0x55085d + "; varying vec2 " + _0x5d7c9e + "; const float ROT_ANGLE_DEG = 7.5; const float ROT_COS = cos(ROT_ANGLE_DEG/180.0*3.14159265358979); const float ROT_SIN = sin(ROT_ANGLE_DEG/180.0*3.14159265358979); void main() { " + _0x5d7c9e + " = " + _0x1d7b93 + "; gl_Position = vec4((" + _0x3c5445 + " * " + _0x48192d + " * vec3(" + _0x3b8186 + ", 1.0)).xy, 0.0, 1.0); vec4 ScreenParams = " + _0x55085d + "; vec2 uv = " + _0x1d7b93 + "; vec2 mul = 0.5 * vec2(ScreenParams.x * (ScreenParams.w - 1.0) + 1.0, ScreenParams.y * (ScreenParams.z - 1.0) + 1.0); vec2 v2 = uv * vec2(1.0, 1.0); v2 = v2 * vec2(1.0, 1.0); " + _0x5d7c9e + " = v2; }";
      var _0x134aeb = "precision highp float; varying vec2 " + _0x5d7c9e + "; uniform sampler2D " + _0x1e97a2 + "; void main() { gl_FragColor = texture2D(" + _0x1e97a2 + ", " + _0x5d7c9e + "); }";
      _0x1f73c3.prototype.tg = function (_0x278e81, _0x5b5800) {
        this._f.scale.x = _0x278e81;
        this._f.scale.y = _0x5b5800;
        this.nn[_0x55085d] = [_0x278e81, _0x5b5800, 1 / _0x278e81 + 1, 1 / _0x5b5800 + 1];
      };
      return _0x1f73c3;
    }();
    _0x3b6284.th = function () {
      function _0x1e349f() {
        this.nn = {};
        this.nn[_0x1cfaae] = [1, 0.5, 0.25, 0.5];
        this.nn[_0x472024] = _0x55777a.k.n.WHITE;
        this.nn[_0x28cdda] = [0, 0];
        this.nn[_0xdbd5bc] = [0, 0];
        var _0x22c1a0 = _0x55777a.k.q.from(_0x3abb01, _0x31db67, this.nn);
        this._f = new _0x55777a.k.v(_0x1c529d, _0x22c1a0);
      }
      var _0x2e51fb = "a1_" + _0x29c320.xa();
      var _0x4847b6 = "a2_" + _0x29c320.xa();
      var _0x18676f = "translationMatrix";
      var _0x33355d = "projectionMatrix";
      var _0x1cfaae = "u3_" + _0x29c320.xa();
      var _0x472024 = "u4_" + _0x29c320.xa();
      var _0x28cdda = "u5_" + _0x29c320.xa();
      var _0xdbd5bc = "u6_" + _0x29c320.xa();
      var _0x500cf8 = "v1_" + _0x29c320.xa();
      var _0x1c529d = new _0x55777a.k.u().addAttribute(_0x2e51fb, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(_0x4847b6, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
      var _0x3abb01 = `precision mediump float; attribute vec2 ${_0x2e51fb}; attribute vec2 ${_0x4847b6}; uniform mat3 ${_0x18676f}; uniform mat3 ${_0x33355d}; varying vec2 ${_0x500cf8}; void main(){${_0x500cf8}=${_0x4847b6}; gl_Position=vec4((${_0x33355d}*${_0x18676f}*vec3(${_0x2e51fb}, 1.0)).xy, 0.0, 1.0); }`;
      var _0x31db67 = `precision highp float; varying vec2 ${_0x500cf8}; uniform vec4 ${_0x1cfaae}; uniform sampler2D ${_0x472024}; uniform vec2 ${_0x28cdda}; uniform vec2 ${_0xdbd5bc}; void main(){vec4 color=texture2D(${_0x472024}, ${_0x500cf8}*${_0x28cdda}+${_0xdbd5bc}); vec4 colorMix=${_0x1cfaae}; gl_FragColor=color*0.3+colorMix.a*vec4(colorMix.rgb, 0.0); }`;
      _0x1e349f.prototype.nd = function (_0x548f74, _0x4e3623, _0xe81a69, _0x553651) {
        var _0x5cd324 = this.nn[_0x1cfaae];
        _0x5cd324[0] = _0x548f74;
        _0x5cd324[1] = _0x4e3623;
        _0x5cd324[2] = _0xe81a69;
        _0x5cd324[3] = _0x553651;
      };
      _0x1e349f.prototype.Hh = function (_0x4693a1) {
        this.nn[_0x472024] = _0x4693a1;
      };
      _0x1e349f.prototype.Bg = function (_0xc014eb, _0x150f61, _0x28e14, _0x17e402) {
        this._f.position.x = _0xc014eb;
        this._f.position.y = _0x150f61;
        this._f.scale.x = _0x28e14;
        this._f.scale.y = _0x17e402;
        var _0x5aa781 = this.nn[_0x28cdda];
        _0x5aa781[0] = _0x28e14 * 0.2520615384615385;
        _0x5aa781[1] = _0x17e402 * 0.4357063736263738;
        var _0x33fe23 = this.nn[_0xdbd5bc];
        _0x33fe23[0] = _0xc014eb * 0.2520615384615385;
        _0x33fe23[1] = _0x150f61 * 0.4357063736263738;
      };
      return _0x1e349f;
    }();
    _0x3b6284.bd = function () {
      function _0x3432fa() {
        this.gd = new _0x55777a.k.s();
        this.pn = 0;
        this.qn = 0;
      }
      _0x3432fa.prototype.kd = function (_0x4cade9) {
        this.gd.texture = _0x4cade9.nb();
        this.gd.anchor.set(_0x4cade9.hb, _0x4cade9.ib);
        this.pn = _0x4cade9.jb;
        this.qn = _0x4cade9.kb;
      };
      _0x3432fa.prototype.nd = function (_0x400da9) {
        this.gd.tint = parseInt(_0x400da9.substring(1), 16);
      };
      _0x3432fa.prototype.Bd = function (_0x290310) {
        this.gd.width = _0x290310 * this.pn;
        this.gd.height = _0x290310 * this.qn;
      };
      _0x3432fa.prototype.Vd = function (_0x58dcb0) {
        this.gd.rotation = _0x58dcb0;
      };
      _0x3432fa.prototype.Ud = function (_0x19be30, _0x5b913e) {
        this.gd.position.set(_0x19be30, _0x5b913e);
      };
      _0x3432fa.prototype.Td = function (_0x47cbd1) {
        this.gd.visible = _0x47cbd1;
      };
      _0x3432fa.prototype.Qd = function () {
        return this.gd.visible;
      };
      _0x3432fa.prototype.Rj = function (_0x22a506) {
        this.gd.alpha = _0x22a506;
      };
      _0x3432fa.prototype.zd = function () {
        return this.gd;
      };
      _0x3432fa.prototype.G = function () {
        _0x55777a.k.F.G(this.gd);
      };
      return _0x3432fa;
    }();
    _0x3b6284.Ui = function () {
      function _0x51f2f1(_0x416e33) {
        this.Qh = _0x416e33;
        this.ki = new _0x3b6284.Ui.Ti();
        this.cj = false;
        this.bj = true;
        this.Fd = false;
        this.Id = 0;
        this.rn = 0;
        this.Lj = 1;
        this.Ld = 0;
        this.hi = 0;
        this.Nd = {};
        this.Kd = 0;
        this.sn = new _0x55777a.j(_0x162257 * 2);
        this.tn = new _0x55777a.j(_0x162257 * 2);
        this.Jd = new _0x55777a.j(_0x162257 * 2);
        this.un = null;
        this.vn = null;
        this.wn = null;
        this.xn();
      }
      var _0x162257 = 200;
      _0x51f2f1.prototype.$i = function () {
        if (this.vn != null) {
          _0x55777a.k.F.G(this.vn.Yc);
        }
        if (this.wn != null) {
          _0x55777a.k.F.G(this.wn);
        }
      };
      _0x51f2f1.prototype.xn = function () {
        this.fj(0.25);
        this.ki.Xa = "";
        this.bj = true;
        this.Nd = {};
        this.Td(false);
      };
      _0x51f2f1.prototype.Zi = function (_0x66bf67) {
        this.ki = _0x66bf67;
        this.yn(this.cj);
      };
      _0x51f2f1.prototype.Td = function (_0x2ed1c6) {
        var _0x432fa8 = this.cj;
        this.cj = _0x2ed1c6;
        this.yn(_0x432fa8);
      };
      _0x51f2f1.prototype.fj = function (_0x34c124) {
        this.hi = _0x34c124 * 50;
        var _0x440fd5 = _0x34c124;
        if (_0x34c124 > this.Qh.hh) {
          _0x440fd5 = _0x29c320.sa((_0x34c124 - this.Qh.hh) / this.Qh.ih) * this.Qh.ih + this.Qh.hh;
        }
        var _0x3fd931 = _0x29c320.qa(_0x29c320.ra(_0x440fd5 * 5, 0.707106781186548) * 4 + 25);
        var _0x204f3f = _0x29c320.ha(_0x162257, _0x29c320.ia(3, (_0x3fd931 - 5) * 5 + 1));
        var _0x520f7e = this.Kd;
        this.Id = (5 + _0x3fd931 * 0.9) * 0.025;
        this.Kd = _0x29c320._(_0x204f3f);
        this.rn = _0x204f3f - this.Kd;
        if (_0x520f7e > 0 && _0x520f7e < this.Kd) {
          var _0x4f46d6 = this.sn[_0x520f7e * 2 - 2];
          var _0x144073 = this.sn[_0x520f7e * 2 - 1];
          var _0x4f570a = this.tn[_0x520f7e * 2 - 2];
          var _0x3bf080 = this.tn[_0x520f7e * 2 - 1];
          var _0x4bbe3a = this.Jd[_0x520f7e * 2 - 2];
          var _0x399c9b = this.Jd[_0x520f7e * 2 - 1];
          for (var _0x5a5eb7 = _0x520f7e; _0x5a5eb7 < this.Kd; _0x5a5eb7++) {
            this.sn[_0x5a5eb7 * 2] = _0x4f46d6;
            this.sn[_0x5a5eb7 * 2 + 1] = _0x144073;
            this.tn[_0x5a5eb7 * 2] = _0x4f570a;
            this.tn[_0x5a5eb7 * 2 + 1] = _0x3bf080;
            this.Jd[_0x5a5eb7 * 2] = _0x4bbe3a;
            this.Jd[_0x5a5eb7 * 2 + 1] = _0x399c9b;
          }
        }
      };
      _0x51f2f1.prototype.kj = function (_0x4002a9, _0x39b119) {
        this.Kd = _0x39b119;
        for (var _0xf9a942 = 0; _0xf9a942 < this.Kd; _0xf9a942++) {
          this.sn[_0xf9a942 * 2] = this.tn[_0xf9a942 * 2] = this.Jd[_0xf9a942 * 2] = _0x4002a9();
          this.sn[_0xf9a942 * 2 + 1] = this.tn[_0xf9a942 * 2 + 1] = this.Jd[_0xf9a942 * 2 + 1] = _0x4002a9();
        }
      };
      _0x51f2f1.prototype.hj = function (_0x5ddbd9, _0x3d3b7b, _0x207e2c) {
        this.Fd = _0x207e2c;
        for (var _0x42de39 = 0; _0x42de39 < this.Kd; _0x42de39++) {
          this.sn[_0x42de39 * 2] = this.tn[_0x42de39 * 2];
          this.sn[_0x42de39 * 2 + 1] = this.tn[_0x42de39 * 2 + 1];
        }
        ;
        var _0x1da474 = _0x5ddbd9 - this.tn[0];
        var _0x19312b = _0x3d3b7b - this.tn[1];
        this.zn(_0x1da474, _0x19312b, this.Kd, this.tn);
      };
      _0x51f2f1.prototype.zn = function (_0x1cbcb6, _0x2193f1, _0x1e83fd, _0x5ac45e) {
        var _0x2f424d = _0x29c320.la(_0x1cbcb6, _0x2193f1);
        if (!(_0x2f424d <= 0)) {
          var _0xd98c8a;
          var _0x2aff9f = _0x5ac45e[0];
          _0x5ac45e[0] += _0x1cbcb6;
          var _0x4adb79;
          var _0x9dd25c = _0x5ac45e[1];
          _0x5ac45e[1] += _0x2193f1;
          var _0x29122a = this.Id / (this.Id + _0x2f424d);
          var _0x59f3d2 = 1 - _0x29122a * 2;
          for (var _0x58c3a7 = 1, _0x4feff3 = _0x1e83fd - 1; _0x58c3a7 < _0x4feff3; _0x58c3a7++) {
            _0xd98c8a = _0x5ac45e[_0x58c3a7 * 2];
            _0x5ac45e[_0x58c3a7 * 2] = _0x5ac45e[_0x58c3a7 * 2 - 2] * _0x59f3d2 + (_0xd98c8a + _0x2aff9f) * _0x29122a;
            _0x2aff9f = _0xd98c8a;
            _0x4adb79 = _0x5ac45e[_0x58c3a7 * 2 + 1];
            _0x5ac45e[_0x58c3a7 * 2 + 1] = _0x5ac45e[_0x58c3a7 * 2 - 1] * _0x59f3d2 + (_0x4adb79 + _0x9dd25c) * _0x29122a;
            _0x9dd25c = _0x4adb79;
          }
          ;
          _0x59f3d2 = 1 - (_0x29122a = this.rn * this.Id / (this.rn * this.Id + _0x2f424d)) * 2;
          _0x5ac45e[_0x1e83fd * 2 - 2] = _0x5ac45e[_0x1e83fd * 2 - 4] * _0x59f3d2 + (_0x5ac45e[_0x1e83fd * 2 - 2] + _0x2aff9f) * _0x29122a;
          _0x5ac45e[_0x1e83fd * 2 - 1] = _0x5ac45e[_0x1e83fd * 2 - 3] * _0x59f3d2 + (_0x5ac45e[_0x1e83fd * 2 - 1] + _0x9dd25c) * _0x29122a;
        }
      };
      _0x51f2f1.prototype.Oh = function () {
        return {
          _a: this.Jd[0],
          ab: this.Jd[1]
        };
      };
      _0x51f2f1.prototype.dj = function (_0x4b1990, _0x1ec0dc) {
        var _0x126bc5 = 1000000;
        var _0x4d099f = _0x4b1990;
        var _0x52405f = _0x1ec0dc;
        for (var _0x2645b7 = 0; _0x2645b7 < this.Kd; _0x2645b7++) {
          var _0x4a335c = this.Jd[_0x2645b7 * 2];
          var _0x2c51e3 = this.Jd[_0x2645b7 * 2 + 1];
          var _0x52dcb9 = _0x29c320.la(_0x4b1990 - _0x4a335c, _0x1ec0dc - _0x2c51e3);
          if (_0x52dcb9 < _0x126bc5) {
            _0x126bc5 = _0x52dcb9;
            _0x4d099f = _0x4a335c;
            _0x52405f = _0x2c51e3;
          }
        }
        ;
        return {
          _a: _0x4d099f,
          ab: _0x52405f,
          ej: _0x126bc5
        };
      };
      _0x51f2f1.prototype._i = function (_0x2bff24) {
        this.un = _0x2bff24;
      };
      _0x51f2f1.prototype.Pj = function (_0x2eed33, _0x48374b) {
        this.Lj = _0x29c320.ga(this.Lj, this.bj ? this.Fd ? 0.9 + _0x29c320.pa(_0x2eed33 / 400 * _0x54e48e.T) * 0.1 : 1 : 0, _0x48374b, 1 / 800);
        this.Ld = _0x29c320.ga(this.Ld, this.bj ? this.Fd ? 1 : 0 : 1, _0x48374b, 0.0025);
        if (this.vn != null) {
          this.vn.Yc.alpha = this.Lj;
        }
        if (this.wn != null) {
          this.wn.alpha = this.Lj;
        }
      };
      _0x51f2f1.prototype.Qj = function (_0x44b070, _0x3337ac, _0x5ab791, _0x12ff8a) {
        if (this.cj && this.bj) {
          var _0x140bce = _0x29c320.ra(0.11112, _0x3337ac / 95);
          for (var _0x37423a = 0; _0x37423a < this.Kd; _0x37423a++) {
            var _0x50c428 = _0x29c320.ka(this.sn[_0x37423a * 2], this.tn[_0x37423a * 2], _0x5ab791);
            var _0x48743b = _0x29c320.ka(this.sn[_0x37423a * 2 + 1], this.tn[_0x37423a * 2 + 1], _0x5ab791);
            this.Jd[_0x37423a * 2] = _0x29c320.ka(_0x50c428, this.Jd[_0x37423a * 2], _0x140bce);
            this.Jd[_0x37423a * 2 + 1] = _0x29c320.ka(_0x48743b, this.Jd[_0x37423a * 2 + 1], _0x140bce);
          }
        }
        ;
        if (this.vn != null && this.cj) {
          this.vn.Hd(this, _0x44b070, _0x3337ac, _0x12ff8a);
        }
        if (this.wn != null) {
          this.wn.Rh.x = this.Jd[0];
          this.wn.Rh.y = this.Jd[1] - this.Id * 3;
        }
      };
      _0x51f2f1.prototype.yn = function (_0x3a1a2a) {
        if (this.cj) {
          if (!_0x3a1a2a) {
            this.An();
          }
        } else {
          if (this.vn != null) {
            _0x55777a.k.F.G(this.vn.Yc);
          }
          if (this.wn != null) {
            _0x55777a.k.F.G(this.wn);
          }
        }
      };
      _0x51f2f1.prototype.An = function () {
        if (this.vn == null) {
          this.vn = new _0x3b6284.Xc();
        } else {
          _0x55777a.k.F.G(this.vn.Yc);
        }
        this.vn.hd(ooo.Mh.Qh.eh, ooo.ud.Cc().Ub(this.ki.mi), ooo.ud.Cc().Tb(this.ki.ni), ooo.ud.Cc().Vb(this.ki.Vi), ooo.ud.Cc().Wb(this.ki.Wi), ooo.ud.Cc().Xb(this.ki.Xi), ooo.ud.Cc().Yb(this.ki.Yi), "#ffffff");
        if (this.wn == null) {
          this.wn = new _0x3b6284.Bn("");
          this.wn.style.fontFamily = "PTSans";
          this.wn.anchor.set(0.5);
        } else {
          _0x55777a.k.F.G(this.wn);
        }
        this.wn.style.fontSize = 14;
        this.wn.style.fill = ooo.ud.Cc().Tb(this.ki.ni).cc;
        this.wn.text = this.ki.Xa;
        this.un.Xh(this.ki.Je, this.vn, this.wn);
        if (_0x17d5a6.n != null && _0x17d5a6.n.Je == this.ki.Je) {
          _0x17d5a6.vj = this.wn;
          let _0x56a890 = _0x152ccb.sg.indexOf(_0x17d5a6.n.ni);
          if (_0x56a890 == -1) {
            if (_0x152ccb.ig != -1) {
              _0x152ccb.ig = -1;
            }
          } else {
            _0x152ccb.ig = _0x152ccb.gg[_0x56a890].s;
            _0x152ccb.re = false;
            _0x4fc2f9();
          }
        }
      };
      _0x51f2f1.Ti = function _0x3c5bdc() {
        this.Je = 0;
        this.mi = _0x3b6284.dh.jh;
        this.ni = 0;
        this.Vi = 0;
        this.Wi = 0;
        this.Xi = 0;
        this.Yi = 0;
        this.Xa = "";
      };
      return _0x51f2f1;
    }();
    _0x3b6284.Bn = _0x29c320.ca(_0x55777a.k.t, function (_0x2f6b02, _0x30cffc, _0x35f546) {
      _0x55777a.k.t.call(this, _0x2f6b02, _0x30cffc, _0x35f546);
      this.Rh = {
        x: 0,
        y: 0
      };
    });
    _0x3b6284.Sb = function () {
      function _0x4bfdd2(_0x3dd422, _0x243bd9, _0x3dfea7, _0x59e4e8, _0x1f5e0f) {
        this.Tj = _0x3dd422;
        this.Uj = _0x243bd9;
        this.Vj = _0x3dfea7;
        this.Wj = _0x59e4e8;
        this.Xj = _0x1f5e0f;
      }
      _0x4bfdd2.prototype.Cn = function (_0x22272d) {
        return new _0x4bfdd2(_0x22272d, this.Uj, this.Vj, this.Wj, this.Xj);
      };
      _0x4bfdd2.prototype.Dn = function (_0xbb404a) {
        return new _0x4bfdd2(this.Tj, _0xbb404a, this.Vj, this.Wj, this.Xj);
      };
      _0x4bfdd2.prototype.En = function (_0x1a1bf0) {
        return new _0x4bfdd2(this.Tj, this.Uj, _0x1a1bf0, this.Wj, this.Xj);
      };
      _0x4bfdd2.prototype.Fn = function (_0x137eb3) {
        return new _0x4bfdd2(this.Tj, this.Uj, this.Vj, _0x137eb3, this.Xj);
      };
      _0x4bfdd2.prototype.Gn = function (_0x432509) {
        return new _0x4bfdd2(this.Tj, this.Uj, this.Vj, this.Wj, _0x432509);
      };
      return _0x4bfdd2;
    }();
    _0x3b6284.Bm = function () {
      function _0x5904f1(_0x6d33cf) {
        this.Hn = new _0x3b6284.Xc();
        this.Hn.Yc.addChild(this.Hn.Zc);
        this.In = null;
        this.Jn = null;
        this.Jm = _0x6d33cf;
        this.$c = 0;
        this.mj = 1;
        this.Kn = 1;
        this.Ln = 1;
        this.Mn = 1;
        this.Nn = 1;
        this.On = 1;
        this.Pn = 1;
        this.Hm("#ffffff");
      }
      var _0x4d79b9 = new _0x3b6284.Sb(0, 0, 0, 0, 0);
      _0x5904f1.prototype.ag = function () {
        return this.Hn.Yc;
      };
      _0x5904f1.prototype.Cm = function (_0x4262a3) {
        this.$c = _0x4262a3;
        if (this.Hn.$c !== _0x4262a3) {
          for (var _0xbdfaf9 = _0x4262a3; _0xbdfaf9 < this.Hn._c.length; _0xbdfaf9++) {
            this.Hn._c[_0xbdfaf9].Cd();
          }
          ;
          while (this.Hn.$c > _0x4262a3) {
            this.Hn.$c -= 1;
            var _0x397109 = this.Hn._c[this.Hn.$c];
            _0x397109.md.G();
            _0x397109.ld.G();
          }
          ;
          while (this.Hn.$c < _0x4262a3) {
            var _0x13b8da = this.Hn._c[this.Hn.$c];
            this.Hn.$c += 1;
            this.Hn.Yc.addChild(_0x13b8da.ld.zd());
            this.Hn.Yc.addChild(_0x13b8da.md.zd());
            _0x13b8da.ld.Rj(this.Kn);
            _0x13b8da.md.Rj(this.Ln);
          }
          ;
          for (var _0x589385 = 0; _0x589385 < this.Hn.Zc.od.length; _0x589385++) {
            this.Hn.Zc.od[_0x589385].Rj(this.Mn);
          }
          ;
          for (var _0x4221ff = 0; _0x4221ff < this.Hn.Zc.pd.length; _0x4221ff++) {
            this.Hn.Zc.pd[_0x4221ff].Rj(this.Nn);
          }
          ;
          for (var _0x3d6e8e = 0; _0x3d6e8e < this.Hn.Zc.rd.length; _0x3d6e8e++) {
            this.Hn.Zc.rd[_0x3d6e8e].Rj(this.On);
          }
          ;
          for (var _0x57e8a8 = 0; _0x57e8a8 < this.Hn.Zc.qd.length; _0x57e8a8++) {
            this.Hn.Zc.qd[_0x57e8a8].Rj(this.Pn);
          }
        }
      };
      _0x5904f1.prototype.Im = function () {
        return this.$c;
      };
      _0x5904f1.prototype.Gm = function (_0x225fb8) {
        this.In = _0x225fb8;
        this.Jn = "#ffffff";
        this.Tm();
      };
      _0x5904f1.prototype.Hm = function (_0x495b64) {
        this.In = _0x4d79b9;
        this.Jn = _0x495b64;
        this.Tm();
      };
      _0x5904f1.prototype.Tm = function () {
        this.Hn.hd(_0x3b6284.jd.ch, null, ooo.ud.Cc().Tb(this.In.Tj), ooo.ud.Cc().Vb(this.In.Uj), ooo.ud.Cc().Wb(this.In.Vj), ooo.ud.Cc().Xb(this.In.Xj), ooo.ud.Cc().Yb(this.In.Wj), this.Jn);
      };
      _0x5904f1.prototype.Dm = function (_0x38afe9) {
        this.mj = _0x38afe9;
      };
      _0x5904f1.prototype.Km = function () {
        return this.mj;
      };
      _0x5904f1.prototype.Wm = function (_0x2bbb23, _0x398e78) {
        this.Kn = _0x2bbb23;
        this.Ln = _0x398e78;
        for (var _0x22703b = 0; _0x22703b < this.$c; _0x22703b++) {
          var _0x8874b0 = this.Hn._c[_0x22703b];
          _0x8874b0.ld.Rj(this.Kn);
          _0x8874b0.md.Rj(this.Ln);
        }
      };
      _0x5904f1.prototype.Zm = function (_0x4d397f, _0x130863, _0x440174, _0x575a1f) {
        this.Mn = _0x4d397f;
        this.Nn = _0x130863;
        this.On = _0x440174;
        this.Pn = _0x575a1f;
        for (var _0x574791 = 0; _0x574791 < this.Hn.Zc.od.length; _0x574791++) {
          this.Hn.Zc.od[_0x574791].Rj(this.Mn);
        }
        ;
        for (var _0x483fb7 = 0; _0x483fb7 < this.Hn.Zc.pd.length; _0x483fb7++) {
          this.Hn.Zc.pd[_0x483fb7].Rj(this.Nn);
        }
        ;
        for (var _0x6167db = 0; _0x6167db < this.Hn.Zc.rd.length; _0x6167db++) {
          this.Hn.Zc.rd[_0x6167db].Rj(this.On);
        }
        ;
        for (var _0x567df3 = 0; _0x567df3 < this.Hn.Zc.qd.length; _0x567df3++) {
          this.Hn.Zc.qd[_0x567df3].Rj(this.Pn);
        }
      };
      _0x5904f1.prototype.Bg = function () {
        var _0x1d1713 = this.mj * 2;
        var _0xc4c36f = this.mj * 2 * 1.5;
        if (this.$c > 0) {
          var _0x19e4b1 = this.Jm[0];
          var _0x2ab036 = this.Jm[1];
          var _0x574aef = this.Jm[2];
          this.Hn._c[0].Ad(_0x19e4b1, _0x2ab036, _0x1d1713, _0xc4c36f, _0x574aef);
          this.Hn.Zc.Ad(_0x19e4b1, _0x2ab036, _0x1d1713, _0x574aef);
        }
        ;
        for (var _0x5a1d0b = 1; _0x5a1d0b < this.$c; _0x5a1d0b++) {
          var _0x12eca6 = this.Jm[_0x5a1d0b * 3];
          var _0x59510e = this.Jm[_0x5a1d0b * 3 + 1];
          var _0x20773d = this.Jm[_0x5a1d0b * 3 + 2];
          this.Hn._c[_0x5a1d0b].Ad(_0x12eca6, _0x59510e, _0x1d1713, _0xc4c36f, _0x20773d);
        }
      };
      _0x5904f1.prototype._m = function (_0x40f234) {
        _0x40f234.render(this.Hn.Yc);
      };
      return _0x5904f1;
    }();
    _0x3b6284.Uf = function () {
      function _0x3ec284(_0x5bc7dc) {
        this.Wd = _0x5bc7dc;
      }
      _0x3ec284.Tf = $("#background-canvas");
      _0x3ec284.Qn = $("#stretch-box");
      _0x3ec284.Rn = $("#social-buttons");
      _0x3ec284.Sn = $("#markup-wrap");
      _0x3ec284.Tn = $("#game-view");
      _0x3ec284.Un = $("#results-view");
      _0x3ec284.Vn = $("#main-menu-view");
      _0x3ec284.Wn = $("#popup-view");
      _0x3ec284.Xn = $("#toaster-view");
      _0x3ec284.Yn = $("#loading-view");
      _0x3ec284.Zn = $("#restricted-view");
      _0x3ec284.$n = $("#error-gateway-connection-view");
      _0x3ec284._n = $("#error-game-connection-view");
      _0x3ec284.prototype.Sa = function () {};
      _0x3ec284.prototype.ml = function () {};
      _0x3ec284.prototype.nl = function () {};
      _0x3ec284.prototype.hl = function () {};
      _0x3ec284.prototype.qg = function () {};
      _0x3ec284.prototype.ug = function (_0x5252f6, _0x525b87) {};
      return _0x3ec284;
    }();
    _0xaf50f4 = $("#final-caption");
    _0x355650 = $("#final-continue");
    _0x534a88 = $("#congrats-bg");
    _0x2267d8 = $("#unl6wj4czdl84o9b");
    _0x43633c = $("#final-share-fb");
    _0x246164 = $("#final-message");
    _0x25536e = $("#final-score");
    _0x5a11a1 = $("#final-place");
    _0x23f8af = $("#final-board");
    _0x3fbbd1 = $("#game-canvas");
    (_0x51ec80 = _0x29c320.ca(_0x3b6284.Uf, function () {
      _0x3b6284.Uf.call(this, _0x3b6284.ll.ao);
      var _0x14e309 = this;
      var _0x3e0db7 = _0x3fbbd1.get()[0];
      _0x43633c.toggle(_0x54e48e.co.bo);
      _0xaf50f4.text(_0x29c320.U("index.game.result.title"));
      _0x355650.text(_0x29c320.U("index.game.result.continue"));
      _0x355650.html("Continue (Home)");
      _0x355650.after("<div id='final-replay'>Replay</div>");
      _0x355650.click(function () {
        ooo.ij.if();
        _0x54e48e.co.do.Va();
        ooo.ij.Ye(_0x3b6284.Pe.Se.Jf);
        ooo.Xg.gl(ooo.Xg.Jf);
      });
      $("#final-replay").click(function () {
        ooo.ij.if();
        ooo.to();
      });
      var _0xfcf4fe = [{
        url: "bkgnd0.png"
      }, {
        url: "bg_sky__6.png"
      }, {
        url: "bg_sky_7.png"
      }, {
        url: "Galaxy-Star.png"
      }, {
        url: "bg_sky_10.png"
      }, {
        url: "bg_sky_9.png"
      }, {
        url: "bg_sky__2.png"
      }, {
        url: "bg_sky__1.png"
      }, {
        url: "bg_sky_8.png"
      }, {
        url: "bg_sky__5.png"
      }, {
        url: "bg_sky_11.png"
      }, {
        url: "bg_sky_12.png"
      }];
      var _0x2fbf96 = 0;
      function _0x47bd75() {
        _0x2fbf96 = (_0x2fbf96 + 1) % _0xfcf4fe.length;
        var _0x421e43 = _0xfcf4fe[_0x2fbf96].url;
        var _0x3dd393 = _0x152ccb.s_l + "/get_store.php?item=" + _0x421e43;
        _0x152ccb.background = _0x3dd393;
        localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
        try {
          if (PIXI.utils.TextureCache[_0x3dd393]) {
            PIXI.utils.TextureCache[_0x3dd393].destroy(true);
            delete PIXI.utils.TextureCache[_0x3dd393];
          }
          if (typeof ooo !== "undefined" && ooo.ef && ooo.ef.fn_o) {
            var _0x275846 = ooo.ef.fn_o(_0x3dd393);
            ooo.ef.F_bg = new PIXI.Texture(_0x275846);
          } else if (typeof PIXI !== "undefined") {
            ooo.ef.F_bg = PIXI.Texture.from(_0x3dd393);
          }
          if (ooo && ooo.Xg && ooo.Xg.Kf && ooo.Xg.Kf.Wg && ooo.Xg.Kf.Wg.sh) {
            ooo.Xg.Kf.Wg.sh.Hh(ooo.ef.F_bg);
          }
        } catch (_0x134167) {
          console.log("Background change error:", _0x134167);
        }
      }
      let _0x50ab5d = {
        left: false,
        right: false
      };
      function _0x110d92() {
        if (_0x152ccb.hz && !_0x152ccb.mobile) {
          if (_0x50ab5d.left && _0x152ccb.z >= 0.2) {
            _0x152ccb.z = _0x152ccb.z - 0.05;
          }
          if (_0x50ab5d.right && _0x152ccb.z <= 25) {
            _0x152ccb.z = _0x152ccb.z + 0.05;
          }
        }
        requestAnimationFrame(_0x110d92);
      }
      $("html").keydown(function (_0x5becdd) {
        if (_0x5becdd.keyCode !== 17 || !(_0x152ccb.ctrl = true)) {
          if (_0x5becdd.keyCode !== 17) {
            _0x152ccb.ctrl = false;
          }
        }
        if (_0x5becdd.keyCode === 53) {
          if (_0x152ccb.s || _0x17d5a6.on) {
            _0x47bd75();
          }
        }
        if (_0x5becdd.keyCode == 188 || _0x5becdd.keyCode == 37) {
          _0x50ab5d.left = true;
        }
        if (_0x5becdd.keyCode == 190 || _0x5becdd.keyCode == 39) {
          _0x50ab5d.right = true;
        }
        if (_0x5becdd.keyCode === 32) {
          _0x14e309.eo = true;
        }
        if (_0x5becdd.keyCode === 49) {
          _0x2e62ea();
        }
        if (_0x5becdd.keyCode === 50) {
          if (_0x17d5a6.on && _0x152ccb.s) {
            if (_0x152ccb.selectedHats && _0x152ccb.selectedHats.length > 0) {
              _0x152ccb.currentHatIndex = (_0x152ccb.currentHatIndex + 1) % _0x152ccb.selectedHats.length;
              let _0x72ac66 = _0x152ccb.selectedHats[_0x152ccb.currentHatIndex];
              _0x41887f(_0x72ac66);
              localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
            }
          }
        }
      }).keyup(function (_0x561520) {
        _0x152ccb.ctrl = false;
        if (_0x561520.keyCode == 188 || _0x561520.keyCode == 37) {
          _0x50ab5d.left = false;
        }
        if (_0x561520.keyCode == 190 || _0x561520.keyCode == 39) {
          _0x50ab5d.right = false;
        }
        if (_0x17d5a6.on && _0x152ccb.s) {
          if (_0x561520.keyCode == 81 || _0x561520.keyCode == 87) {
            if (_0x561520.keyCode == 81) {
              _0x5d383d.texture = _0x331041;
              _0x27b449.texture = _0x3f2ad0;
              _0x5d383d.alpha = 1;
              _0x27b449.alpha = 0.25;
              _0x37a166();
            }
            if (_0x561520.keyCode == 87) {
              _0x27b449.texture = _0xf7489c;
              _0x5d383d.texture = _0x5c6eb6;
              _0x5d383d.alpha = 0.25;
              _0x27b449.alpha = 1;
              _0x49995d();
            }
          } else {
            _0x27b449.texture = _0x3f2ad0;
            _0x5d383d.texture = _0x5c6eb6;
            _0x27b449.alpha = 0.25;
            _0x5d383d.alpha = 0.25;
            _0x322580 = false;
            _0x2a33be = 55;
            _0x2ce316 = 1;
            _0x2b9cbf = true;
            clearInterval(_0x1b257c);
            _0x1b257c = null;
          }
          if (_0x561520.keyCode == 90) {
            if (_0x152ccb.z == 1) {
              if (_0x152ccb.h) {
                _0x152ccb.z = 1.6;
              } else {
                _0x152ccb.z = 1.2;
              }
              _0x376b81.texture = _0x4fedc5;
              _0x376b81.alpha = 1;
            } else {
              _0x152ccb.z = 1;
              _0x376b81.texture = _0x1c9717;
              _0x376b81.alpha = 0.25;
            }
            localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
          }
        }
        if (_0x17d5a6.on && _0x561520.keyCode == 82) {
          if (!window.lastRespawnTime) {
            window.lastRespawnTime = 0;
          }
          const _0x4d8d03 = new Date().getTime();
          const _0x468fc3 = _0x4d8d03 - window.lastRespawnTime;
          if (_0x468fc3 < 1000) {
            return;
          }
          window.lastRespawnTime = _0x4d8d03;
          if (_0x152ccb.pi && _0x152ccb.pn) {
            $("#port_id_s").val(_0x152ccb.pi);
            $("#port_name_s").val(_0x152ccb.pn);
            $("#port_id").val($("#port_id_s").val());
            $("#port_name").val($("#port_name_s").val());
          }
          _0x152ccb.r1 = true;
          try {
            if (ooo.Mh && typeof ooo.Mh.uj === "function") {
              ooo.Mh.uj();
              setTimeout(function () {
                document.getElementById("mm-action-play").click();
              }, 300);
              return;
            }
          } catch (_0x3b37e0) {}
          try {
            if (ooo.Mh && typeof ooo.Mh.gr === "function") {
              ooo.Mh.gr();
            } else if (ooo.Mh && ooo.Mh.Rq) {
              try {
                ooo.Mh.go = 3;
              } catch (_0x2f7fc2) {}
              ooo.Mh.Rq.close();
            }
            setTimeout(function () {
              try {
                const _0x117c60 = document.querySelectorAll(".error, .alert, .modal, .popup, .notification");
                _0x117c60.forEach(_0x1b0ec3 => {
                  try {
                    _0x1b0ec3.style.display = "none";
                  } catch (_0x52ea69) {}
                });
              } catch (_0x5aa049) {}
              document.getElementById("mm-action-play").click();
            }, 350);
          } catch (_0x4973bd) {
            document.getElementById("mm-action-play").click();
          }
        }
        if (_0x17d5a6.on && _0x561520.keyCode == 56) {
          document.getElementById("settings-show-names-switch").click();
          if (_0x152ccb.sn) {
            _0x152ccb.sn = false;
          } else {
            _0x152ccb.sn = true;
          }
        }
        if (_0x561520.keyCode === 32) {
          _0x14e309.eo = false;
        }
      });
      _0x110d92();
      window.addEventListener("load", function () {
        if (_0x152ccb.background) {
          var _0x2036ac = _0x152ccb.background;
          for (var _0x528029 = 0; _0x528029 < _0xfcf4fe.length; _0x528029++) {
            if (_0xfcf4fe[_0x528029].url === _0x2036ac) {
              _0x2fbf96 = _0x528029;
              break;
            }
          }
        }
      });
      _0x3e0db7.addEventListener("touchmove", function (_0x2c5c9c) {
        if (_0x17d5a6.on && _0x152ccb.mobile && _0x152ccb.mo != 6 && _0x152ccb.s) {
          var _0x2e7240 = btoa(_0x152ccb.c_1);
          if (_0x152ccb.mo1.x != -1 && _0x152ccb.mo1.y == -1 && btoa(_0x2e7240) == _0x152ccb.d_1 || _0x152ccb.mo2.x == -1 && _0x152ccb.mo2.y != -1 && btoa(_0x2e7240) == _0x152ccb.d_1) {
            var _0x12dd5e = ooo.Xg.Kf.Wg.Ah;
            var _0xe5b1e0 = _0x3e0db7.offsetHeight;
            var _0x311023 = _0x3e0db7.offsetWidth;
            var _0x1cc9ed = _0xe5b1e0 * 0.5;
            var _0x5e8302 = _0x311023 * 0.5;
            var _0xe783e5 = btoa(_0x152ccb.c_2);
            for (let _0x5c8961 = 0; _0x5c8961 < _0x2c5c9c.changedTouches.length; _0x5c8961++) {
              var _0xd9ce0b = _0x2c5c9c.changedTouches[_0x5c8961].pageX;
              var _0x7b6f0f = _0x2c5c9c.changedTouches[_0x5c8961].pageY;
              var _0xc67ddb = _0x2c5c9c.changedTouches[_0x5c8961].identifier;
              if (_0x152ccb.mo == 1 && btoa(_0xe783e5) == _0x152ccb.d_2) {
                _0xe5b1e0 *= 0.5;
                _0x311023 *= 0.5;
              }
              if (_0x152ccb.mo == 2 && btoa(_0xe783e5) == _0x152ccb.d_2) {
                _0xe5b1e0 = _0x12dd5e.img_o_2.y + 110;
                _0x311023 = _0x12dd5e.img_o_2.x + 110;
              }
              if (_0x152ccb.mo == 3 && btoa(_0xe783e5) == _0x152ccb.d_2) {
                _0xe5b1e0 = _0x12dd5e.img_o_3.y + 110;
                _0x311023 = _0x12dd5e.img_o_3.x + 110;
              }
              if (_0x152ccb.mo == 4 && btoa(_0xe783e5) == _0x152ccb.d_2 || _0x152ccb.mo == 5 && btoa(_0xe783e5) == _0x152ccb.d_2) {
                _0xe5b1e0 = _0x12dd5e.img_o_4.y + 110;
                _0x311023 = _0x12dd5e.img_o_4.x + 110;
              }
              var _0x27b7df = btoa(_0x152ccb.c_5);
              var _0x35e1b2 = Math.atan2(_0x7b6f0f - _0xe5b1e0, _0xd9ce0b - _0x311023);
              var _0x196ec0 = Math.cos(_0x35e1b2);
              var _0x573f21 = Math.sin(_0x35e1b2);
              var _0x4f5239 = btoa(_0x152ccb.c_4);
              var _0x5868a3 = _0x152ccb.mo1.x == _0xc67ddb;
              btoa(_0x152ccb.c_3);
              if (_0x5868a3 && btoa(_0x4f5239) == _0x152ccb.d_4) {
                if (_0xd9ce0b <= 0 || _0x7b6f0f <= 0) {
                  _0x152ccb.mo1.x = -1;
                  if (_0x152ccb.mo == 1) {
                    _0x12dd5e.img_p_1.alpha = 0.25;
                  }
                  if (_0x152ccb.mo == 2) {
                    _0x12dd5e.img_o_2.alpha = 0.25;
                    _0x12dd5e.img_i_2.alpha = 0.25;
                    _0x12dd5e.img_p_2.alpha = 0.25;
                  }
                  if (_0x152ccb.mo == 3) {
                    _0x12dd5e.img_o_3.alpha = 0.25;
                    _0x12dd5e.img_i_3.alpha = 0.25;
                    _0x12dd5e.img_p_3.alpha = 0.25;
                  }
                  if (_0x152ccb.mo == 4 || _0x152ccb.mo == 5) {
                    _0x12dd5e.img_p_2.alpha = 0.25;
                  }
                } else {
                  _0x14e309.fo = _0x35e1b2;
                  var _0x4a13e4 = 50;
                  if (_0x152ccb.mo == 1 || _0x152ccb.mo == 4 || _0x152ccb.mo == 5) {
                    _0x4a13e4 = 110;
                  }
                  var _0x218dc9 = _0x311023 - _0xd9ce0b;
                  var _0x4ac9fb = _0xe5b1e0 - _0x7b6f0f;
                  var _0x50819c = Math.sqrt(_0x218dc9 * _0x218dc9 + _0x4ac9fb * _0x4ac9fb);
                  var _0xa75b59 = _0x5e8302 + _0x50819c * _0x196ec0 - 68;
                  var _0x4d7a1a = _0x1cc9ed + _0x50819c * _0x573f21 - 68;
                  var _0x495f53 = _0x5e8302 + _0x4a13e4 * _0x196ec0 - 68;
                  var _0x2f578d = _0x1cc9ed + _0x4a13e4 * _0x573f21 - 68;
                  var _0x2d1aeb = _0x5e8302 + _0x196ec0 * 75 - 68;
                  var _0x1e3c9f = _0x1cc9ed + _0x573f21 * 75 - 68;
                  var _0x41556b = _0xd9ce0b - 85;
                  var _0x13527c = _0x7b6f0f - 85;
                  var _0x35fa48 = _0x311023 + _0x4a13e4 * _0x196ec0 - 85;
                  var _0x28014c = _0xe5b1e0 + _0x4a13e4 * _0x573f21 - 85;
                  var _0x3b2a7d = _0x311023 + _0x196ec0 * 3 - 110;
                  var _0x31f439 = _0xe5b1e0 + _0x573f21 * 3 - 110;
                  if (_0x50819c < _0x4a13e4) {
                    if (_0x152ccb.mo2.x == -1 && _0x152ccb.mo2.y != -1) {
                      _0x12dd5e.img_pf_1.x = _0xa75b59;
                      _0x12dd5e.img_pf_1.y = _0x4d7a1a;
                    } else {
                      if (_0x152ccb.mo == 1) {
                        _0x12dd5e.img_p_1.x = _0xa75b59;
                        _0x12dd5e.img_p_1.y = _0x4d7a1a;
                      }
                      if (_0x152ccb.mo == 2 || _0x152ccb.mo == 4 || _0x152ccb.mo == 5) {
                        _0x12dd5e.img_p_2.x = _0xa75b59;
                        _0x12dd5e.img_p_2.y = _0x4d7a1a;
                      }
                      if (_0x152ccb.mo == 3) {
                        _0x12dd5e.img_p_3.x = _0xa75b59;
                        _0x12dd5e.img_p_3.y = _0x4d7a1a;
                      }
                    }
                    if (_0x152ccb.mo == 2) {
                      _0x12dd5e.img_i_2.y = _0x13527c;
                      _0x12dd5e.img_i_2.x = _0x41556b;
                    }
                    if (_0x152ccb.mo == 3) {
                      _0x12dd5e.img_i_3.y = _0x13527c;
                      _0x12dd5e.img_i_3.x = _0x41556b;
                    }
                  } else {
                    if (_0x152ccb.mo2.x == -1 && _0x152ccb.mo2.y != -1) {
                      _0x12dd5e.img_pf_1.x = _0x495f53;
                      _0x12dd5e.img_pf_1.y = _0x2f578d;
                      if (_0x152ccb.mo == 2 || _0x152ccb.mo == 3) {
                        if (_0x50819c < 75) {
                          _0x12dd5e.img_pf_1.x = _0xa75b59;
                          _0x12dd5e.img_pf_1.y = _0x4d7a1a;
                        } else {
                          _0x12dd5e.img_pf_1.x = _0x2d1aeb;
                          _0x12dd5e.img_pf_1.y = _0x1e3c9f;
                        }
                      }
                    } else {
                      if (_0x152ccb.mo == 1) {
                        _0x12dd5e.img_p_1.x = _0x495f53;
                        _0x12dd5e.img_p_1.y = _0x2f578d;
                      }
                      if (_0x152ccb.mo == 2 || _0x152ccb.mo == 4 || _0x152ccb.mo == 5) {
                        _0x12dd5e.img_p_2.x = _0x495f53;
                        _0x12dd5e.img_p_2.y = _0x2f578d;
                        if (_0x152ccb.mo == 2) {
                          if (_0x50819c < 75) {
                            _0x12dd5e.img_p_2.x = _0xa75b59;
                            _0x12dd5e.img_p_2.y = _0x4d7a1a;
                          } else {
                            _0x12dd5e.img_p_2.x = _0x2d1aeb;
                            _0x12dd5e.img_p_2.y = _0x1e3c9f;
                          }
                        }
                      }
                      if (_0x152ccb.mo == 3) {
                        if (_0x50819c < 75) {
                          _0x12dd5e.img_p_3.x = _0xa75b59;
                          _0x12dd5e.img_p_3.y = _0x4d7a1a;
                        } else {
                          _0x12dd5e.img_p_3.x = _0x2d1aeb;
                          _0x12dd5e.img_p_3.y = _0x1e3c9f;
                        }
                      }
                    }
                    if (_0x152ccb.mo == 2) {
                      _0x12dd5e.img_i_2.y = _0x28014c;
                      _0x12dd5e.img_i_2.x = _0x35fa48;
                    }
                    if (_0x152ccb.mo == 3) {
                      _0x12dd5e.img_i_3.y = _0x28014c;
                      _0x12dd5e.img_i_3.x = _0x35fa48;
                      _0x12dd5e.img_o_3.y = _0x31f439;
                      _0x12dd5e.img_o_3.x = _0x3b2a7d;
                    }
                  }
                }
              } else if ((_0x5868a3 = _0x152ccb.mo2.y == _0xc67ddb) && btoa(_0x27b7df) == _0x152ccb.d_5) {
                if (_0xd9ce0b <= 0 || _0x7b6f0f <= 0) {
                  _0x152ccb.mo2.y = -1;
                  _0x12dd5e.img_f.visible = false;
                  _0x12dd5e.img_pf_1.visible = false;
                  if (_0x152ccb.mo == 1) {
                    _0x12dd5e.img_p_1.visible = true;
                  }
                  if (_0x152ccb.mo == 2 || _0x152ccb.mo == 4 || _0x152ccb.mo == 5) {
                    _0x12dd5e.img_p_2.visible = true;
                  }
                  if (_0x152ccb.mo == 3) {
                    _0x12dd5e.img_p_3.visible = true;
                  }
                  if (_0x152ccb.mo == 4 || _0x152ccb.mo == 5) {
                    _0x12dd5e.img_f.visible = true;
                  }
                  _0x14e309.eo = false;
                } else if (_0x152ccb.mo == 3) {
                  _0x196ec0 = Math.cos(_0x35e1b2 = Math.atan2(_0x7b6f0f - (_0xe5b1e0 = _0x12dd5e.img_f.y + 100), _0xd9ce0b - (_0x311023 = _0x12dd5e.img_f.x + 100)));
                  _0x573f21 = Math.sin(_0x35e1b2);
                  var _0x41556b = _0x311023 + _0x196ec0 * 3 - 100;
                  var _0x13527c = _0xe5b1e0 + _0x573f21 * 3 - 100;
                  var _0x218dc9 = _0x311023 - _0xd9ce0b;
                  var _0x4ac9fb = _0xe5b1e0 - _0x7b6f0f;
                  var _0x50819c = Math.sqrt(_0x218dc9 * _0x218dc9 + _0x4ac9fb * _0x4ac9fb);
                  if (_0x50819c >= 40) {
                    _0x12dd5e.img_f.y = _0x41556b;
                    _0x12dd5e.img_f.x = _0x13527c;
                  }
                }
              }
            }
          }
        } else if (!_0x19d5a8() || !_0x152ccb.joystick.checked) {
          if (_0x2c5c9c = _0x2c5c9c || window.event) {
            if ((_0x2c5c9c = _0x2c5c9c.touches[0]).clientX !== undefined) {
              _0x14e309.fo = Math.atan2(_0x2c5c9c.clientY - _0x3e0db7.offsetHeight * 0.5, _0x2c5c9c.clientX - _0x3e0db7.offsetWidth * 0.5);
            } else {
              _0x14e309.fo = Math.atan2(_0x2c5c9c.pageY - _0x3e0db7.offsetHeight * 0.5, _0x2c5c9c.pageX - _0x3e0db7.offsetWidth * 0.5);
            }
          }
        }
      }, true);
      _0x3e0db7.addEventListener("touchstart", function (_0x52edc1) {
        if (_0x17d5a6.on && _0x152ccb.mobile && _0x152ccb.mo != 6 && _0x152ccb.s) {
          var _0x39beac = ooo.Xg.Kf.Wg.Ah;
          var _0x34c6a1 = btoa(_0x152ccb.c_4);
          var _0x42122a = _0x3e0db7.offsetHeight;
          var _0x27ba29 = btoa(_0x152ccb.c_3);
          var _0x57862b = _0x3e0db7.offsetWidth;
          var _0x4de429 = btoa(_0x152ccb.c_5);
          var _0x3c50f9 = (_0x52edc1 = _0x52edc1 || window.event).touches.item(0).pageX;
          var _0x4a45c7 = btoa(_0x152ccb.c_2);
          var _0x2c869a = _0x52edc1.touches.item(0).pageY;
          var _0x1a55bd = _0x52edc1.touches.length;
          var _0x7475fb = btoa(_0x152ccb.c_1);
          var _0x18ad22 = _0x52edc1.touches.item(0).identifier;
          for (let _0x4d3cd3 = 0; _0x4d3cd3 < _0x1a55bd; _0x4d3cd3++) {
            if (_0x152ccb.mo2.x == -1 && _0x152ccb.mo2.y != -1) {
              if (_0x52edc1.touches.item(_0x4d3cd3).identifier != _0x152ccb.mo2.y) {
                _0x3c50f9 = _0x52edc1.touches.item(_0x4d3cd3).pageX;
                _0x2c869a = _0x52edc1.touches.item(_0x4d3cd3).pageY;
                _0x18ad22 = _0x52edc1.touches.item(_0x4d3cd3).identifier;
              }
            } else {
              _0x3c50f9 = _0x52edc1.touches.item(_0x4d3cd3).pageX;
              _0x2c869a = _0x52edc1.touches.item(_0x4d3cd3).pageY;
              _0x18ad22 = _0x52edc1.touches.item(_0x4d3cd3).identifier;
            }
          }
          ;
          var _0x209772 = 0;
          if (_0x152ccb.mo == 4 && btoa(_0x4de429) == _0x152ccb.d_5 || _0x152ccb.mo == 5 && btoa(_0x34c6a1) == _0x152ccb.d_4) {
            _0x209772 = Math.sqrt((_0x3c50f9 - _0x39beac.img_f.x - 100) * (_0x3c50f9 - _0x39beac.img_f.x - 100) + (_0x2c869a - _0x39beac.img_f.y - 100) * (_0x2c869a - _0x39beac.img_f.y - 100));
          }
          if (_0x1a55bd == 1 && (_0x152ccb.mo == 4 && _0x209772 > 40 || _0x152ccb.mo != 4) && (_0x152ccb.mo == 5 && _0x209772 > 40 || _0x152ccb.mo != 5)) {
            _0x152ccb.mo2.y = -1;
            _0x39beac.img_f.visible = false;
            _0x39beac.img_pf_1.visible = false;
            if (_0x152ccb.mo == 1) {
              _0x39beac.img_p_1.alpha = 0.25;
              _0x39beac.img_p_1.visible = true;
            }
            if (_0x152ccb.mo == 2) {
              _0x39beac.img_o_2.alpha = 0.25;
              _0x39beac.img_i_2.alpha = 0.25;
              _0x39beac.img_p_2.alpha = 0.25;
              _0x39beac.img_p_2.visible = true;
            }
            if (_0x152ccb.mo == 3) {
              _0x39beac.img_o_3.alpha = 0.25;
              _0x39beac.img_i_3.alpha = 0.25;
              _0x39beac.img_p_3.alpha = 0.25;
              _0x39beac.img_p_3.visible = true;
            }
            if (_0x152ccb.mo == 4 || _0x152ccb.mo == 5) {
              _0x39beac.img_p_2.alpha = 0.25;
              _0x39beac.img_p_2.visible = true;
              _0x39beac.img_f.visible = true;
            }
            _0x14e309.eo = false;
          }
          if (_0x152ccb.mo1.x == -1 && _0x152ccb.mo1.y == -1 && btoa(_0x34c6a1) == _0x152ccb.d_4 && (_0x152ccb.mo == 4 && _0x209772 > 40 || _0x152ccb.mo != 4 && btoa(_0x27ba29) == _0x152ccb.d_3) && (_0x152ccb.mo == 5 && _0x209772 > 40 || _0x152ccb.mo != 5 && btoa(_0x4a45c7) == _0x152ccb.d_2)) {
            _0x152ccb.mo1.x = _0x18ad22;
            if (_0x152ccb.mo1.x == _0x152ccb.mo2.y && _0x152ccb.mo1.y == _0x152ccb.mo2.x) {
              _0x3c50f9 = _0x52edc1.touches.item(1).pageX;
              _0x2c869a = _0x52edc1.touches.item(1).pageY;
            }
            var _0x5c4b3d = _0x57862b * 0.5 - 68;
            var _0x16a894 = _0x42122a * 0.5 - 68;
            var _0x29380d = _0x3c50f9 - 110;
            var _0x3e506a = _0x2c869a - 110;
            var _0x535c9f = _0x3c50f9 - 85;
            var _0x2d36c4 = _0x2c869a - 85;
            if (_0x152ccb.mo == 1 && _0x152ccb.mo2.x == -1 && _0x152ccb.mo2.y == -1) {
              _0x39beac.img_p_1.alpha = 1;
              _0x39beac.img_p_1.x = _0x5c4b3d;
              _0x39beac.img_p_1.y = _0x16a894;
              _0x39beac.img_p_1.visible = true;
            }
            if (_0x152ccb.mo == 2) {
              _0x39beac.img_o_2.alpha = 1;
              _0x39beac.img_o_2.x = _0x29380d;
              _0x39beac.img_o_2.y = _0x3e506a;
              _0x39beac.img_i_2.alpha = 1;
              _0x39beac.img_i_2.x = _0x535c9f;
              _0x39beac.img_i_2.y = _0x2d36c4;
              if (_0x152ccb.mo2.x == -1 && _0x152ccb.mo2.y == -1) {
                _0x39beac.img_p_2.alpha = 1;
                _0x39beac.img_p_2.x = _0x5c4b3d;
                _0x39beac.img_p_2.y = _0x16a894;
                _0x39beac.img_p_2.visible = true;
              }
            }
            if (_0x152ccb.mo == 3 && btoa(_0x4de429) == _0x152ccb.d_5) {
              _0x39beac.img_o_3.alpha = 1;
              _0x39beac.img_o_3.x = _0x29380d;
              _0x39beac.img_o_3.y = _0x3e506a;
              _0x39beac.img_i_3.alpha = 1;
              _0x39beac.img_i_3.x = _0x535c9f;
              _0x39beac.img_i_3.y = _0x2d36c4;
              if (_0x152ccb.mo2.x == -1 && _0x152ccb.mo2.y == -1) {
                _0x39beac.img_p_3.alpha = 1;
                _0x39beac.img_p_3.x = _0x5c4b3d;
                _0x39beac.img_p_3.y = _0x16a894;
                _0x39beac.img_p_3.visible = true;
              }
            }
            if (_0x152ccb.mo == 4 && btoa(_0x4a45c7) == _0x152ccb.d_2 && _0x152ccb.mo2.x == -1 && _0x152ccb.mo2.y == -1) {
              _0x39beac.img_p_2.alpha = 1;
              _0x39beac.img_p_2.x = _0x5c4b3d;
              _0x39beac.img_p_2.y = _0x16a894;
              _0x39beac.img_p_2.visible = true;
            }
            if (_0x152ccb.mo == 5 && btoa(_0x27ba29) == _0x152ccb.d_3 && _0x152ccb.mo2.x == -1 && _0x152ccb.mo2.y == -1) {
              _0x39beac.img_p_2.alpha = 1;
              _0x39beac.img_p_2.x = _0x5c4b3d;
              _0x39beac.img_p_2.y = _0x16a894;
              _0x39beac.img_p_2.visible = true;
            }
          } else if (_0x1a55bd >= 2 && _0x152ccb.mo2.x == -1 && _0x152ccb.mo2.y == -1 && btoa(_0x27ba29) == _0x152ccb.d_3 || _0x1a55bd == 1 && _0x152ccb.mo == 4 && _0x209772 <= 40 && btoa(_0x7475fb) == _0x152ccb.d_1 || _0x1a55bd == 1 && _0x152ccb.mo == 5 && _0x209772 <= 40 && btoa(_0x4a45c7) == _0x152ccb.d_2) {
            _0x152ccb.mo2.y = _0x18ad22;
            _0x39beac.img_f.visible = true;
            _0x39beac.img_pf_1.visible = true;
            if (_0x152ccb.mo == 1) {
              _0x39beac.img_p_1.visible = false;
              _0x39beac.img_pf_1.x = _0x39beac.img_p_1.x;
              _0x39beac.img_pf_1.y = _0x39beac.img_p_1.y;
            }
            if (_0x152ccb.mo == 2 || _0x152ccb.mo == 4 || _0x152ccb.mo == 5) {
              _0x39beac.img_p_2.visible = false;
              _0x39beac.img_pf_1.x = _0x39beac.img_p_2.x;
              _0x39beac.img_pf_1.y = _0x39beac.img_p_2.y;
            }
            if (_0x152ccb.mo == 3 && btoa(_0x27ba29) == _0x152ccb.d_3) {
              _0x39beac.img_p_3.visible = false;
              _0x39beac.img_pf_1.x = _0x39beac.img_p_3.x;
              _0x39beac.img_pf_1.y = _0x39beac.img_p_3.y;
            }
            if (_0x152ccb.mo != 4 && _0x152ccb.mo != 5) {
              _0x39beac.img_f.x = _0x3c50f9 - 100;
              _0x39beac.img_f.y = _0x2c869a - 100;
            }
            _0x14e309.eo = true;
          }
          ;
          _0x52edc1.preventDefault();
        } else {
          if (_0x52edc1 = _0x52edc1 || window.event) {
            _0x14e309.eo = _0x52edc1.touches.length >= 2;
          }
          _0x52edc1.preventDefault();
        }
      }, true);
      _0x3e0db7.addEventListener("touchend", function (_0x5c15a2) {
        if (_0x17d5a6.on && _0x152ccb.mobile && _0x152ccb.mo != 6 && _0x152ccb.s) {
          var _0x4749a2 = ooo.Xg.Kf.Wg.Ah;
          var _0x7f7245 = btoa(_0x152ccb.c_1);
          if (_0x5c15a2 = _0x5c15a2 || window.event) {
            if ((_0x5c15a2 = _0x5c15a2.changedTouches[0]).clientX !== undefined) {
              _0x15f318(_0x5c15a2.clientX, _0x5c15a2.clientY);
            } else {
              _0x15f318(_0x5c15a2.pageX, _0x5c15a2.pageY);
            }
          }
          var _0x399778 = btoa(_0x152ccb.c_2);
          var _0x467617 = _0x5c15a2.identifier;
          if (_0x467617 == _0x152ccb.mo1.x && _0x152ccb.mo1.y == -1 && btoa(_0x399778) == _0x152ccb.d_2) {
            _0x152ccb.mo1.x = -1;
            if (_0x152ccb.mo == 1) {
              _0x4749a2.img_p_1.alpha = 0.25;
            }
            if (_0x152ccb.mo == 2) {
              _0x4749a2.img_o_2.alpha = 0.25;
              _0x4749a2.img_i_2.alpha = 0.25;
              _0x4749a2.img_p_2.alpha = 0.25;
            }
            if (_0x152ccb.mo == 3 && btoa(_0x7f7245) == _0x152ccb.d_1) {
              _0x4749a2.img_o_3.alpha = 0.25;
              _0x4749a2.img_i_3.alpha = 0.25;
              _0x4749a2.img_p_3.alpha = 0.25;
            }
            if (_0x152ccb.mo == 4) {
              _0x4749a2.img_p_2.alpha = 0.25;
            }
            if (_0x152ccb.mo == 5) {
              _0x4749a2.img_p_2.alpha = 0.25;
            }
          }
          var _0x11b8a8 = btoa(_0x152ccb.c_3);
          if (_0x152ccb.mo2.x == -1 && _0x467617 == _0x152ccb.mo2.y && btoa(_0x11b8a8) == _0x152ccb.d_3) {
            _0x152ccb.mo2.y = -1;
            _0x4749a2.img_f.visible = false;
            _0x4749a2.img_pf_1.visible = false;
            if (_0x152ccb.mo == 1) {
              _0x4749a2.img_p_1.visible = true;
            }
            if (_0x152ccb.mo == 2 || _0x152ccb.mo == 4 && btoa(_0x399778) == _0x152ccb.d_2 || _0x152ccb.mo == 5 && btoa(_0x11b8a8) == _0x152ccb.d_3) {
              _0x4749a2.img_p_2.visible = true;
            }
            if (_0x152ccb.mo == 3) {
              _0x4749a2.img_p_3.visible = true;
            }
            if (_0x152ccb.mo == 4 || _0x152ccb.mo == 5) {
              _0x4749a2.img_f.visible = true;
            }
            _0x14e309.eo = false;
          }
        } else {
          if (_0x5c15a2 = _0x5c15a2 || window.event) {
            _0x14e309.eo = _0x5c15a2.touches.length >= 2;
          }
          if (_0x152ccb.mobile && _0x152ccb.s && (_0x5c15a2 = _0x5c15a2 || window.event)) {
            if ((_0x5c15a2 = _0x5c15a2.changedTouches[0]).clientX !== undefined) {
              _0x15f318(_0x5c15a2.clientX, _0x5c15a2.clientY);
            } else {
              _0x15f318(_0x5c15a2.pageX, _0x5c15a2.pageY);
            }
          }
        }
      }, true);
      _0x3e0db7.addEventListener("mousemove", function (_0x37a6b6) {
        if (_0x37a6b6 = _0x37a6b6 || _0x3b6284.c.event && _typeof(_0x37a6b6.clientX) != "undefined") {
          _0x14e309.fo = _0x29c320.ta(_0x37a6b6.clientY - _0x3e0db7.offsetHeight * 0.5, _0x37a6b6.clientX - _0x3e0db7.offsetWidth * 0.5);
        }
      }, true);
      _0x3e0db7.addEventListener("mousedown", function (_0x7eecf9) {
        _0x14e309.eo = true;
      }, true);
      _0x3e0db7.addEventListener("mouseup", function (_0x3a907e) {
        _0x14e309.eo = false;
      }, true);
      this.Wg = new _0x3b6284.lh(_0x3fbbd1);
      this.go = _0x43975d.ho;
      this.fo = 0;
      this.eo = false;
      _0x17d5a6.eie = _0x14e309;
    })).prototype.Sa = function () {};
    _0x51ec80.prototype.ml = function () {
      _0x3b6284.Nf.rg(false);
      _0x55777a.f.h(_0x3b6284.Uf.Tf, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Qn, 1);
      _0x55777a.f.h(_0x3b6284.Uf.Rn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Sn, 50);
      _0x55777a.f.g(_0x3b6284.Uf.Tn, 500);
      if (this.go === _0x43975d.ho) {
        _0x55777a.f.h(_0x3b6284.Uf.Un, 1);
      } else {
        _0x55777a.f.g(_0x3b6284.Uf.Un, 500);
      }
      _0x55777a.f.h(_0x3b6284.Uf.Vn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Wn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Xn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Yn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Zn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.$n, 50);
      _0x55777a.f.h(_0x3b6284.Uf._n, 50);
    };
    _0x51ec80.prototype.ho = function () {
      this.go = _0x43975d.ho;
      return this;
    };
    _0x51ec80.prototype.io = function () {
      _0x55777a.f.h(_0x534a88, 1);
      _0x29c320.Y(function () {
        _0x55777a.f.g(_0x534a88, 500);
      }, 3000);
      _0x55777a.f.h(_0x2267d8, 1);
      _0x29c320.Y(function () {
        _0x55777a.f.g(_0x2267d8, 500);
      }, 500);
      this.go = _0x43975d.io;
      return this;
    };
    _0x51ec80.prototype.nl = function () {
      this.eo = false;
      this.Wg.qg();
      if (this.go === _0x43975d.io) {
        ooo.ij.mf();
      }
    };
    _0x51ec80.prototype.qg = function () {
      this.Wg.qg();
    };
    _0x51ec80.prototype.ug = function (_0x1e0078, _0x2e4a22) {
      this.Wg.ug(_0x1e0078, _0x2e4a22);
    };
    _0x51ec80.prototype.jo = function (_0x3586bb, _0x53ec08, _0x4f677f) {
      var _0x17489c;
      var _0x35068c;
      var _0x4f7403;
      if (_0x53ec08 >= 1 && _0x53ec08 <= 10) {
        _0x17489c = _0x29c320.U("index.game.result.place.i" + _0x53ec08);
        _0x35068c = _0x29c320.U("index.game.result.placeInBoard");
        _0x4f7403 = _0x29c320.U("index.game.social.shareResult.messGood").replace("{0}", _0x4f677f).replace("{1}", _0x3586bb).replace("{2}", _0x17489c);
      } else {
        _0x17489c = "";
        _0x35068c = _0x29c320.U("index.game.result.tryHit");
        _0x4f7403 = _0x29c320.U("index.game.social.shareResult.messNorm").replace("{0}", _0x4f677f).replace("{1}", _0x3586bb);
      }
      _0x246164.html(_0x29c320.U("index.game.result.your"));
      _0x25536e.html(_0x3586bb);
      _0x5a11a1.html(_0x17489c);
      _0x23f8af.html(_0x35068c);
      if (_0x54e48e.co.bo) {
        var _0x1acc3f;
        var _0x48e870;
        var _0x3bfb75;
        var _0x310cc6;
        var _0x5119e7;
        var _0x4326b0;
        var _0x262268;
        var _0x5c1ea5 = _0x29c320.U("index.game.result.share");
        _0x29c320.U("index.game.social.shareResult.caption");
        _0x43633c.empty().append((_0x1acc3f = _0x5c1ea5, _0x48e870 = "https://wormate.io", _0x3bfb75 = "wormate.io", _0x310cc6 = _0x4f7403, _0x5119e7 = _0x4f7403, _0x4326b0 = "https://wormate.io/images/og-share-img-new.jpg", (_0x262268 = $("<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml: space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#517AD1\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>" + _0x1acc3f + "</span></div>")).click(function () {
          if ((typeof FB == "undefined" ? "undefined" : _typeof(FB)) !== "undefined" && _typeof(FB.ui) != "undefined") {
            FB.ui({
              method: "feed",
              display: "popup",
              link: _0x48e870,
              name: _0x3bfb75,
              caption: _0x310cc6,
              description: _0x5119e7,
              picture: _0x4326b0
            }, function () {});
          }
        }), _0x262268));
      }
    };
    _0x51ec80.prototype.ko = function () {
      return this.fo;
    };
    _0x51ec80.prototype.lo = function () {
      return this.eo;
    };
    _0x43975d = {
      ho: 0,
      io: 1
    };
    _0x3b6284.Bk = _0x51ec80;
    _0x54518a = $("#loading-progress-cont");
    _0x10692c = $("#loading-progress-bar");
    _0x1ca84f = $("#loading-progress-text");
    (_0xf41109 = _0x29c320.ca(_0x3b6284.Uf, function () {
      _0x3b6284.Uf.call(this, _0x3b6284.ll.ao);
      this.mo = -1;
      this.no = "";
    })).prototype.Sa = function () {};
    _0xf41109.prototype.ml = function () {
      _0x3b6284.Nf.rg(true);
      _0x55777a.f.g(_0x3b6284.Uf.Tf, 500);
      _0x55777a.f.g(_0x3b6284.Uf.Qn, 1);
      _0x55777a.f.h(_0x3b6284.Uf.Rn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Sn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Tn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Un, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Vn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Wn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Xn, 50);
      _0x55777a.f.g(_0x3b6284.Uf.Yn, 500);
      _0x55777a.f.h(_0x3b6284.Uf.Zn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.$n, 50);
      _0x55777a.f.h(_0x3b6284.Uf._n, 50);
    };
    _0xf41109.prototype.nl = function () {
      ooo.ij.Ye(_0x3b6284.Pe.Se.Re);
      ooo.Xg.Ak.wg();
      ooo.Xg.Ak.sg(true);
    };
    _0xf41109.prototype.hl = function () {
      ooo.Xg.Ak.sg(false);
    };
    _0xf41109.prototype.oo = function () {
      this.po("", 0);
      _0x55777a.f.g(_0x54518a, 100);
    };
    _0xf41109.prototype.qo = function () {
      _0x55777a.f.h(_0x54518a, 100);
    };
    _0xf41109.prototype.po = function (_0x1fcb20, _0x4e52bf) {
      if (this.no !== _0x1fcb20) {
        this.no = _0x1fcb20;
      }
      var _0x5aa727 = _0x29c320.fa(_0x29c320._(_0x4e52bf * 100), 0, 100);
      if (this.mo !== _0x5aa727) {
        _0x10692c.css("width", _0x5aa727 + "%");
        _0x1ca84f.html(_0x5aa727 + " %");
      }
    };
    _0x3b6284.$k = _0xf41109;
    _0x253a8e = $("#mm-line-top");
    $("#mm-line-center");
    $("#mm-line-bottom");
    _0x29105b = $("#mm-bottom-buttons");
    _0x292c82 = $("#mm-menu-cont");
    _0x33da63 = $("#mm-loading");
    _0x17dc46 = $("#mm-loading-progress-bar");
    _0x9d9297 = $("#mm-loading-progress-text");
    $("#mm-event-text");
    _0x3ea5ec = $("#mm-skin-canv");
    _0x395fc7 = $("#mm-skin-prev");
    _0x7d95a7 = $("#mm-skin-next");
    _0x19fa78 = $("#mm-skin-over");
    _0x53df26 = $("#mm-skin-over-button-list");
    _0x4dcdcd = $("#mm-params-nickname");
    _0x3f6727 = $("#mm-params-game-mode");
    _0x2bf92b = $("#mm-action-play");
    _0x30743a = $("#mm-action-guest");
    _0x5bd593 = $("#mm-action-login");
    _0x55902a = $("#mm-player-info");
    _0x5749fc = $("#mm-store");
    _0xb969df = $("#mm-leaders");
    _0x2878ba = $("#mm-settings");
    _0x201e65 = $("#mm-coins-box");
    _0x3f639d = $("#mm-player-avatar");
    _0x27dc3c = $("#mm-player-username");
    _0x1816d5 = $("#mm-coins-val");
    _0x2779ce = $("#mm-player-exp-bar");
    _0x5f050d = $("#mm-player-exp-val");
    _0x54b6c0 = $("#mm-player-level");
    (_0x4c6c95 = _0x29c320.ca(_0x3b6284.Uf, function () {
      _0x3b6284.Uf.call(this, _0x3b6284.ll.kl);
      this.mo = -1;
      this.no = "";
      var _0x300bc6 = ["ÙƒÙ„Ø¨", "fuck", "fuak", "Ø¬Ø­Ø´", "Ø£Ù† Ø§Ù„Ù„Ù‡ ÙŠØ±Ø§Ùƒ", "Ø¹Ø±Ø¶Ùƒ", "Ù†Ø¸ÙŠÙ", "Ø·ÙŠØ¨Ø©", "Ø§Ø®ÙˆÙƒ", "Ø§Ø®ØªÙƒ", "Ø§Ù…Ùƒ", "Ø§Ø¨ÙˆÙƒ", "Ù‚ÙˆØ§Ø¯", "Ù…Ù„Ø¹ÙˆÙ†"];
      function _0x1da791(_0x455561) {
        if (!_0x455561) {
          return "";
        }
        return _0x455561.toLowerCase().replace(/[^a-zA-Z0-9\u0600-\u06FF*]/g, "").replace(/[Ù€]/g, "").replace(/[Ù‹ÙŒÙÙÙÙÙ‘Ù’]/g, "").replace(/[Ø£Ø¥Ø¢Ø§]/g, "Ø§").replace(/[Ù‰ÙŠ]/g, "ÙŠ").replace(/[Ø©]/g, "Ù‡");
      }
      function _0xb4c448(_0x422ebc, _0x59b1e6) {
        if (!_0x422ebc) {
          return false;
        }
        var _0x51df3c = _0x422ebc.replace(/\*$/, "");
        var _0x50a82f = _0x1da791(_0x51df3c);
        var _0x415b62 = Array.isArray(_0x59b1e6) ? _0x59b1e6 : Object.values(_0x59b1e6);
        return _0x415b62.some(function (_0x3a16e7) {
          var _0x2cbc9c = _0x1da791(_0x3a16e7);
          return _0x50a82f.includes(_0x2cbc9c);
        });
      }
      window.handleNicknameChange = function (_0x71d875) {
        if (!_0x71d875 || _0x71d875.trim() === "") {
          return "";
        }
        if (_0xb4c448(_0x71d875, _0x300bc6)) {
          return "Ø£Ù† Ø§Ù„Ù„Ù‡ ÙŠØ±Ø§Ùƒ*";
        }
        return _0x71d875;
      };
      fetch(_0x152ccb.s_l + "/api/words/get_banned_words.php").then(_0x499729 => _0x499729.json()).then(_0x32809b => {
        _0x300bc6 = Array.isArray(_0x32809b) ? _0x32809b : Object.values(_0x32809b);
      }).catch(_0x3031fb => {
        console.error("Error loading banned words:", _0x3031fb);
      });
      this.ro = new _0x3b6284.Lm(_0x3ea5ec);
      _0x3f6727.click(function () {
        ooo.ij.if();
      });
      _0x3ea5ec.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Qk);
        }
      });
      _0x395fc7.click(function () {
        ooo.ij.if();
        ooo.so.kk();
      });
      _0x7d95a7.click(function () {
        ooo.ij.if();
        ooo.so.jk();
      });
      _0x4dcdcd.keypress(function (_0x23677f) {
        _0x152ccb.r1 = false;
        if (_0x23677f.keyCode === 13) {
          ooo.to();
        }
      });
      _0x2bf92b.click(function () {
        var _0x15bc72 = _0x4dcdcd.val();
        if (_0x15bc72 && _0x15bc72.trim() !== "") {
          _0x4dcdcd.val(window.handleNicknameChange(_0x15bc72));
        }
        ooo.ij.if();
        ooo.to();
      });
      _0x30743a.click(function () {
        var _0x3fa62c = _0x4dcdcd.val();
        if (_0x3fa62c && _0x3fa62c.trim() !== "") {
          _0x4dcdcd.val(window.handleNicknameChange(_0x3fa62c));
        }
        ooo.ij.if();
        ooo.to();
      });
      _0x5bd593.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Nk);
      });
      _0x2878ba.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Hi);
      });
      _0x55902a.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Lk);
        }
      });
      _0xb969df.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Jk);
        }
      });
      _0x5749fc.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Sk);
        }
      });
      _0x201e65.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Hk);
        }
      });
      this.uo();
      this.vo();
      var _0x44ae75 = _0x3b6284.Cg.Og(_0x3b6284.Cg.Ig);
      if (_0x44ae75 !== "ARENA" && _0x44ae75 !== "TEAM2") {
        _0x44ae75 = "ARENA";
      }
      _0x3f6727.val(_0x44ae75);
    })).prototype.Sa = function () {
      var _0x53282e = this;
      function _0x19c5ca(_0x184aae, _0x32d7f8) {
        if (_0x184aae.pm) {
          _0x32d7f8.skinId = _0x184aae.pm.Tj;
          _0x32d7f8.eyesId = _0x184aae.pm.Uj;
          _0x32d7f8.mouthId = _0x184aae.pm.Vj;
          _0x32d7f8.hatId = _0x184aae.pm.Wj;
          _0x32d7f8.glassesId = _0x184aae.pm.Xj;
        }
      }
      ooo.ok.fm(function () {
        if (ooo.ok.nk()) {
          _0x19c5ca(_0x152ccb, ooo.ok.xl);
          ooo.so.lk(ooo.ok.Ul(), _0x3b6284._j.$j);
          ooo.so.lk(ooo.ok.Vl(), _0x3b6284._j.ak);
          ooo.so.lk(ooo.ok.Wl(), _0x3b6284._j.bk);
          ooo.so.lk(ooo.ok.Xl(), _0x3b6284._j.dk);
          ooo.so.lk(ooo.ok.Yl(), _0x3b6284._j.ck);
        } else {
          ooo.so.lk(ooo.wo(), _0x3b6284._j.$j);
          ooo.so.lk(0, _0x3b6284._j.ak);
          ooo.so.lk(0, _0x3b6284._j.bk);
          ooo.so.lk(0, _0x3b6284._j.dk);
          ooo.so.lk(0, _0x3b6284._j.ck);
        }
      });
      ooo.ok.fm(function () {
        _0x2bf92b.toggle(ooo.ok.nk());
        _0x5bd593.toggle(!ooo.ok.nk());
        _0x30743a.toggle(!ooo.ok.nk());
        _0xb969df.toggle(ooo.ok.nk());
        _0x5749fc.toggle(ooo.ok.nk());
        _0x201e65.toggle(ooo.ok.nk());
        _0x55902a.toggle(true);
        _0x2878ba.toggle(true);
        if (ooo.ok.nk()) {
          _0x19fa78.hide();
          _0x27dc3c.html(ooo.ok.Ll());
          _0x3f639d.attr("src", ooo.ok.Nl());
          _0x1816d5.html(ooo.ok.Ql());
          _0x2779ce.width(ooo.ok.Sl() * 100 / ooo.ok.Tl() + "%");
          _0x5f050d.html(ooo.ok.Sl() + " / " + ooo.ok.Tl());
          _0x54b6c0.html(ooo.ok.Rl());
          _0x4dcdcd.val(ooo.ok.Ml());
        } else {
          _0x19fa78.toggle(_0x54e48e.co.bo && !ooo.xo());
          _0x27dc3c.html(_0x27dc3c.data("guest"));
          _0x3f639d.attr("src", _0x54e48e.H.M);
          _0x1816d5.html("10");
          _0x2779ce.width("0");
          _0x5f050d.html("");
          _0x54b6c0.html(1);
          _0x4dcdcd.val(_0x3b6284.Cg.Og(_0x3b6284.Cg.Jg));
        }
      });
      ooo.so.fk(function () {
        _0x53282e.ro.Gm(ooo.so.ek());
      });
    };
    _0x4c6c95.prototype.ml = function () {
      _0x3b6284.Nf.rg(true);
      _0x55777a.f.g(_0x3b6284.Uf.Tf, 500);
      _0x55777a.f.g(_0x3b6284.Uf.Qn, 1);
      _0x55777a.f.g(_0x3b6284.Uf.Rn, 500);
      _0x55777a.f.g(_0x3b6284.Uf.Sn, 500);
      _0x55777a.f.h(_0x3b6284.Uf.Tn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Un, 50);
      _0x55777a.f.g(_0x3b6284.Uf.Vn, 500);
      _0x55777a.f.h(_0x3b6284.Uf.Wn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Xn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Yn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Zn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.$n, 50);
      _0x55777a.f.h(_0x3b6284.Uf._n, 50);
    };
    _0x4c6c95.prototype.yo = function () {
      _0x55777a.f.g(_0x253a8e, 500);
      _0x55777a.f.g(_0x29105b, 500);
      _0x55777a.f.g(_0x292c82, 500);
      _0x55777a.f.h(_0x33da63, 100);
    };
    _0x4c6c95.prototype.zo = function () {
      _0x55777a.f.h(_0x253a8e, 100);
      _0x55777a.f.h(_0x29105b, 100);
      _0x55777a.f.h(_0x292c82, 100);
      _0x55777a.f.g(_0x33da63, 500);
    };
    _0x4c6c95.prototype.po = function (_0x514d5f, _0x504ae9) {
      if (this.no !== _0x514d5f) {
        this.no = _0x514d5f;
      }
      var _0x3e7623 = _0x29c320.fa(_0x29c320._(_0x504ae9 * 100), 0, 100);
      if (this.mo !== _0x3e7623) {
        _0x17dc46.css("width", _0x3e7623 + "%");
        _0x9d9297.html(_0x3e7623 + " %");
      }
    };
    _0x4c6c95.prototype.nl = function () {
      ooo.ij.jf();
      this.ro.rg(true);
    };
    _0x4c6c95.prototype.hl = function () {
      this.ro.rg(false);
    };
    _0x4c6c95.prototype.qg = function () {
      this.ro.qg();
    };
    _0x4c6c95.prototype.ug = function (_0x3c1a0a, _0x1bf0ea) {
      this.ro.ug();
    };
    _0x4c6c95.prototype.Ml = function () {
      return _0x4dcdcd.val();
    };
    _0x4c6c95.prototype.Ao = function () {
      return _0x3f6727.val();
    };
    _0x4c6c95.prototype.uo = function () {
      var _0x2ed21c = $("#mm-advice-cont").children();
      var _0x44f376 = 0;
      _0x29c320.X(function () {
        _0x2ed21c.eq(_0x44f376).fadeOut(500, function () {
          if (++_0x44f376 >= _0x2ed21c.length) {
            _0x44f376 = 0;
          }
          _0x2ed21c.eq(_0x44f376).fadeIn(500).css("display", "inline-block");
        });
      }, 3000);
    };
    _0x4c6c95.prototype.vo = function () {
      if (_0x54e48e.co.bo && !ooo.xo()) {
        _0x19fa78.show();
        var _0x16b56f = _0x29c320.U("index.game.main.menu.unlockSkins.share");
        var _0x3c99b3 = encodeURIComponent(_0x29c320.U("index.game.main.menu.unlockSkins.comeAndPlay"));
        _0x53df26.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + _0x3c99b3 + "\"><img src=\"data: image/svg+xml; base64, PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"/><span>" + _0x16b56f + "</span></a>").click(function _0x109b9e() {
          ooo.Bo(true);
          _0x29c320.Y(function () {
            _0x19fa78.hide();
          }, 3000);
        }));
      }
    };
    _0x3b6284.Ck = _0x4c6c95;
    (_0x145c4a = _0x29c320.ca(_0x3b6284.Uf, function () {
      _0x3b6284.Uf.call(this, _0x3b6284.ll.ao);
    })).prototype.Sa = function () {};
    _0x145c4a.prototype.ml = function () {
      _0x3b6284.Nf.rg(true);
      _0x55777a.f.h(_0x3b6284.Uf.Tf, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Qn, 1);
      _0x55777a.f.h(_0x3b6284.Uf.Rn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Sn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Tn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Un, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Vn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Wn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Xn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Yn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Zn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.$n, 50);
      _0x55777a.f.h(_0x3b6284.Uf._n, 50);
    };
    _0x3b6284.el = _0x145c4a;
    (_0x3b63c3 = _0x29c320.ca(_0x3b6284.Uf, function () {
      _0x3b6284.Uf.call(this, _0x3b6284.ll.ao);
    })).prototype.Sa = function () {};
    _0x3b63c3.prototype.ml = function () {
      _0x3b6284.Nf.rg(true);
      _0x55777a.f.g(_0x3b6284.Uf.Tf, 500);
      _0x55777a.f.g(_0x3b6284.Uf.Qn, 1);
      _0x55777a.f.h(_0x3b6284.Uf.Rn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Sn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Tn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Un, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Vn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Wn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Xn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Yn, 50);
      _0x55777a.f.g(_0x3b6284.Uf.Zn, 500);
      _0x55777a.f.h(_0x3b6284.Uf.$n, 50);
      _0x55777a.f.h(_0x3b6284.Uf._n, 50);
    };
    _0x3b63c3.prototype.nl = function () {};
    _0x3b6284.Xk = _0x3b63c3;
    _0x2f245d = $("#toaster-stack");
    (_0x1560ce = _0x29c320.ca(_0x3b6284.Uf, function () {
      _0x3b6284.Uf.call(this, _0x3b6284.ll.ao);
      this.Co = [];
      this.Do = null;
    })).prototype.Sa = function () {};
    _0x1560ce.prototype.ml = function () {
      _0x3b6284.Nf.rg(true);
      _0x55777a.f.g(_0x3b6284.Uf.Tf, 500);
      _0x55777a.f.g(_0x3b6284.Uf.Qn, 1);
      _0x55777a.f.h(_0x3b6284.Uf.Rn, 50);
      _0x55777a.f.g(_0x3b6284.Uf.Sn, 500);
      _0x55777a.f.h(_0x3b6284.Uf.Tn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Un, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Vn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Wn, 50);
      _0x55777a.f.g(_0x3b6284.Uf.Xn, 500);
      _0x55777a.f.h(_0x3b6284.Uf.Yn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Zn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.$n, 50);
      _0x55777a.f.h(_0x3b6284.Uf._n, 50);
    };
    _0x1560ce.prototype.nl = function () {
      this.Eo();
    };
    _0x1560ce.prototype.ql = function () {
      return this.Do != null || this.Co.length > 0;
    };
    _0x1560ce.prototype.Fo = function (_0x319639) {
      this.Co.unshift(_0x319639);
      _0x29c320.Y(function () {
        ooo.Xg.ol();
      }, 0);
    };
    _0x1560ce.prototype.km = function (_0x1a5d80) {
      this.Co.push(_0x1a5d80);
      _0x29c320.Y(function () {
        ooo.Xg.ol();
      }, 0);
    };
    _0x1560ce.prototype.Eo = function () {
      var _0x294496 = this;
      if (this.Do == null) {
        if (this.Co.length === 0) {
          ooo.Xg.jl();
          return;
        }
        ;
        var _0x19f6cd = this.Co.shift();
        this.Do = _0x19f6cd;
        var _0xc564bd = _0x19f6cd.ag();
        _0x55777a.f.g(_0xc564bd, 300);
        _0x2f245d.append(_0xc564bd);
        _0x19f6cd.Go = function () {
          _0xc564bd.fadeOut(300);
          _0x29c320.Y(function () {
            _0xc564bd.remove();
          }, 300);
          if (_0x294496.Do === _0x19f6cd) {
            _0x294496.Do = null;
          }
          _0x294496.Eo();
        };
        _0x19f6cd.nl();
      }
    };
    _0x3b6284.Zk = _0x1560ce;
    _0x3b6284.ll = {
      ao: 0,
      kl: 1
    };
    _0x20abb0 = $("#popup-menu-label");
    _0x54931c = $("#popup-menu-coins-box");
    _0x11361f = $("#popup-menu-coins-val");
    $("#popup-menu-back").click(function () {
      ooo.ij.if();
      ooo.Xg.jl();
    });
    _0x54931c.click(function () {
      if (ooo.ok.nk()) {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Hk);
      }
    });
    (_0x19e3d7 = _0x29c320.ca(_0x3b6284.Uf, function (_0x4e1495, _0x5132a2) {
      _0x3b6284.Uf.call(this, _0x3b6284.ll.kl);
      this.Xa = _0x4e1495;
      this.Io = _0x5132a2;
      this.Jo = [];
    })).prototype.Sa = function () {
      _0x19e3d7.parent.prototype.Sa.call(this);
      if (!_0x19e3d7.Ko) {
        _0x19e3d7.Ko = true;
        ooo.ok.fm(function () {
          if (ooo.ok.nk()) {
            _0x11361f.html(ooo.ok.Ql());
          } else {
            _0x11361f.html("0");
          }
        });
      }
      _0x55777a.f.h(_0x3b6284.Ho.Lo, 100);
    };
    _0x19e3d7.Mo = $("#coins-view");
    _0x19e3d7.No = $("#leaders-view");
    _0x19e3d7.Oo = $("#profile-view");
    _0x19e3d7.Po = $("#login-view");
    _0x19e3d7.Qo = $("#settings-view");
    _0x19e3d7.Ro = $("#skins-view");
    _0x19e3d7.So = $("#store-view");
    _0x19e3d7.To = $("#wear-view");
    _0x19e3d7.Uo = $("#withdraw-consent-view");
    _0x19e3d7.Vo = $("#delete-account-view");
    _0x19e3d7.Lo = $("#please-wait-view");
    _0x19e3d7.prototype.ml = function () {
      _0x3b6284.Nf.rg(true);
      _0x55777a.f.g(_0x3b6284.Uf.Tf, 1);
      _0x55777a.f.g(_0x3b6284.Uf.Qn, 500);
      _0x55777a.f.g(_0x3b6284.Uf.Rn, 200);
      _0x55777a.f.g(_0x3b6284.Uf.Sn, 200);
      _0x55777a.f.h(_0x3b6284.Uf.Tn, 200);
      _0x55777a.f.h(_0x3b6284.Uf.Un, 200);
      _0x55777a.f.h(_0x3b6284.Uf.Vn, 200);
      _0x55777a.f.g(_0x3b6284.Uf.Wn, 200);
      _0x55777a.f.h(_0x3b6284.Uf.Xn, 200);
      _0x55777a.f.h(_0x3b6284.Uf.Yn, 200);
      _0x55777a.f.h(_0x3b6284.Uf.Zn, 200);
      _0x55777a.f.h(_0x3b6284.Uf.$n, 200);
      _0x55777a.f.h(_0x3b6284.Uf._n, 200);
      _0x20abb0.html(this.Xa);
      _0x54931c.toggle(this.Io);
      this.Wo();
    };
    _0x19e3d7.prototype.Wo = function () {};
    _0x19e3d7.prototype.Xo = function (_0x577682) {
      var _0x180b11 = this;
      var _0x54ae27 = _0x29c320.va(0, 2147483647) & 2147483647;
      this.Jo.push(_0x54ae27);
      _0x55777a.f.g(_0x3b6284.Ho.Lo, 100);
      _0x29c320.Y(function () {
        _0x180b11.Yo(_0x54ae27);
      }, _0x577682);
      return new _0x595e60(this, _0x54ae27);
    };
    _0x19e3d7.prototype.Yo = function (_0x45d887) {
      var _0x5e3088 = this.Jo.indexOf(_0x45d887);
      if (!(_0x5e3088 < 0)) {
        this.Jo.splice(_0x5e3088, 1);
        if (this.Jo.length === 0) {
          _0x55777a.f.h(_0x3b6284.Ho.Lo, 100);
        }
      }
    };
    _0x3b6284.Ho = _0x19e3d7;
    var _0x3950de;
    var _0x1f9115;
    var _0x535226;
    var _0x1fae9e;
    var _0x13a40d;
    var _0xae7afc;
    var _0x665f29;
    var _0xaf50f4;
    var _0x355650;
    var _0x534a88;
    var _0x2267d8;
    var _0x43633c;
    var _0x246164;
    var _0x25536e;
    var _0x5a11a1;
    var _0x23f8af;
    var _0x3fbbd1;
    var _0x51ec80;
    var _0x43975d;
    var _0x54518a;
    var _0x10692c;
    var _0x1ca84f;
    var _0xf41109;
    var _0x253a8e;
    var _0x29105b;
    var _0x292c82;
    var _0x33da63;
    var _0x17dc46;
    var _0x9d9297;
    var _0x3ea5ec;
    var _0x395fc7;
    var _0x7d95a7;
    var _0x19fa78;
    var _0x53df26;
    var _0x4dcdcd;
    var _0x3f6727;
    var _0x2bf92b;
    var _0x30743a;
    var _0x5bd593;
    var _0x55902a;
    var _0x5749fc;
    var _0xb969df;
    var _0x2878ba;
    var _0x201e65;
    var _0x3f639d;
    var _0x27dc3c;
    var _0x1816d5;
    var _0x2779ce;
    var _0x5f050d;
    var _0x54b6c0;
    var _0x4c6c95;
    var _0x145c4a;
    var _0x3b63c3;
    var _0x2f245d;
    var _0x1560ce;
    var _0x20abb0;
    var _0x54931c;
    var _0x11361f;
    var _0x19e3d7;
    var _0x70adb9;
    var _0x4f4ccc;
    var _0x21b803;
    var _0x207266;
    var _0x35de31;
    var _0x39b04a;
    var _0x14175c;
    var _0x2a48cf;
    var _0x26c565;
    var _0x5b15d1;
    var _0x3d8fef;
    var _0xee48e6;
    var _0x302b2f;
    var _0x3b1cae;
    var _0x70165b;
    var _0x20a584;
    var _0xaeac50;
    var _0x4a5035;
    var _0x3ba055;
    var _0x4e4c71;
    var _0x7ea448;
    var _0x10d82b;
    var _0xd08a8d;
    var _0x4fccb0;
    var _0x872cad;
    var _0x29d982;
    var _0x1f861e;
    var _0x9b25d2;
    var _0x101783;
    var _0x38f0eb;
    var _0x26e494;
    var _0x2a59c4;
    var _0x276fb8;
    var _0x242c9a;
    var _0x3a2a20;
    var _0x29a450;
    var _0x45a42b;
    var _0x5884b4;
    var _0x38bdfd;
    var _0x4b7e07;
    var _0x169d14;
    var _0x5836c5;
    var _0x4aa270;
    var _0x2c3e9e;
    var _0x411bf9;
    var _0x53450c;
    var _0x196ef3;
    var _0x142f35;
    var _0x333952;
    var _0x397799;
    var _0xc417b0;
    var _0x151a57;
    var _0x2bc8da;
    var _0x1aaa1a;
    var _0x20e9d5;
    var _0x3025e2;
    var _0xaa96a7;
    var _0x26bf87;
    var _0x469017;
    var _0x2787fb;
    var _0x44d2e2;
    var _0x42240d;
    var _0x1c10d1;
    var _0x467073;
    var _0x52bc4e;
    var _0x991e5c;
    var _0x4b4343;
    var _0x30449c;
    var _0x1894cf;
    var _0x4638b9;
    var _0x426640;
    var _0x21e360;
    var _0x2a040e;
    var _0x33aa31;
    var _0x58f8bd;
    var _0x5ee7e3;
    var _0x53dd47;
    var _0x46c80e;
    var _0x1aaa7a;
    var _0x22b2c1;
    var _0x566873;
    var _0x1b26bf;
    var _0x170960;
    var _0x4b62df;
    var _0x47c7f1;
    var _0x5588cc;
    var _0x1377fd;
    var _0x465b1d;
    var _0x591ab0;
    var _0x1d8f90;
    var _0x21d131;
    var _0x1b8087;
    var _0x595e60 = function () {
      function _0x350257(_0x1cde5d, _0x4f572c) {
        this.Zo = _0x1cde5d;
        this.$o = _0x4f572c;
      }
      _0x350257.prototype._o = function () {
        this.Zo.Yo(this.$o);
      };
      return _0x350257;
    }();
    _0x70adb9 = $("#store-buy-coins_125000");
    _0x4f4ccc = $("#store-buy-coins_50000");
    _0x21b803 = $("#store-buy-coins_16000");
    _0x207266 = $("#store-buy-coins_7000");
    _0x35de31 = $("#store-buy-coins_3250");
    _0x39b04a = $("#store-buy-coins_1250");
    (_0x14175c = _0x29c320.ca(_0x3b6284.Ho, function () {
      _0x3b6284.Ho.call(this, _0x29c320.U("index.game.popup.menu.coins.tab"), false);
      var _0x4437f1 = this;
      _0x70adb9.click(function () {
        ooo.ij.if();
        _0x4437f1.ap("coins_125000");
      });
      _0x4f4ccc.click(function () {
        ooo.ij.if();
        _0x4437f1.ap("coins_50000");
      });
      _0x21b803.click(function () {
        ooo.ij.if();
        _0x4437f1.ap("coins_16000");
      });
      _0x207266.click(function () {
        ooo.ij.if();
        _0x4437f1.ap("coins_7000");
      });
      _0x35de31.click(function () {
        ooo.ij.if();
        _0x4437f1.ap("coins_3250");
      });
      _0x39b04a.click(function () {
        ooo.ij.if();
        _0x4437f1.ap("coins_1250");
      });
    })).prototype.Sa = function () {
      _0x14175c.parent.prototype.Sa.call(this);
    };
    _0x14175c.prototype.Wo = function () {
      _0x55777a.f.g(_0x3b6284.Ho.Mo, 200);
      _0x55777a.f.h(_0x3b6284.Ho.No, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Oo, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Po, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Qo, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Ro, 50);
      _0x55777a.f.h(_0x3b6284.Ho.So, 50);
      _0x55777a.f.h(_0x3b6284.Ho.To, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Uo, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Vo, 50);
    };
    _0x14175c.prototype.nl = function () {
      ooo.ij.jf();
    };
    _0x14175c.prototype.ap = function (_0x4152dd) {};
    _0x3b6284.Ik = _0x14175c;
    _0x2a48cf = $("#highscore-table");
    _0x26c565 = $("#leaders-button-level");
    _0x5b15d1 = $("#leaders-button-highscore");
    _0x3d8fef = $("#leaders-button-kills");
    _0xee48e6 = "byLevel";
    _0x302b2f = "byHighScore";
    _0x3b1cae = "byKillsAndHeadShots";
    (_0x70165b = _0x29c320.ca(_0x3b6284.Ho, function () {
      _0x3b6284.Ho.call(this, _0x29c320.U("index.game.popup.menu.leaders.tab"), true);
      var _0x239d18 = this;
      this.bp = {};
      this.cp = {
        dp: {
          ep: _0x26c565,
          fp: _0xee48e6
        },
        gp: {
          ep: _0x5b15d1,
          fp: _0x302b2f
        },
        hp: {
          ep: _0x3d8fef,
          fp: _0x3b1cae
        }
      };
      _0x26c565.click(function () {
        ooo.ij.if();
        _0x239d18.ip(_0x239d18.cp.dp);
      });
      _0x5b15d1.click(function () {
        ooo.ij.if();
        _0x239d18.ip(_0x239d18.cp.gp);
      });
      _0x3d8fef.click(function () {
        ooo.ij.if();
        _0x239d18.ip(_0x239d18.cp.hp);
      });
    })).prototype.Sa = function () {
      _0x70165b.parent.prototype.Sa.call(this);
    };
    _0x70165b.prototype.Wo = function () {
      _0x55777a.f.h(_0x3b6284.Ho.Mo, 50);
      _0x55777a.f.g(_0x3b6284.Ho.No, 200);
      _0x55777a.f.h(_0x3b6284.Ho.Oo, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Po, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Qo, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Ro, 50);
      _0x55777a.f.h(_0x3b6284.Ho.So, 50);
      _0x55777a.f.h(_0x3b6284.Ho.To, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Uo, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Vo, 50);
    };
    _0x70165b.prototype.nl = function () {
      var _0xee4429 = this;
      ooo.ij.jf();
      var _0x5bf39f = this.Xo(5000);
      var _0x1b07ea = _0x54e48e.H.J + "/pub/leaders";
      _0x29c320.Aa(_0x1b07ea, function () {
        var _0xaccb97 = {
          [_0xee48e6]: [],
          [_0x302b2f]: [],
          [_0x3b1cae]: []
        };
        _0xee4429.bp = _0xaccb97;
        _0xee4429.ip(_0xee4429.jp ?? _0xee4429.cp.dp);
        _0x5bf39f._o();
      }, function (_0x5cfecf) {
        _0xee4429.bp = _0x5cfecf;
        _0xee4429.ip(_0xee4429.jp ?? _0xee4429.cp.dp);
        _0x5bf39f._o();
      });
    };
    _0x70165b.prototype.ip = function (_0x4b84e4) {
      this.jp = _0x4b84e4;
      for (var _0x575b1b in this.cp) {
        if (this.cp.hasOwnProperty(_0x575b1b)) {
          this.cp[_0x575b1b].ep.removeClass("pressed");
        }
      }
      ;
      this.jp.ep.addClass("pressed");
      for (var _0x22c758 = this.bp[this.jp.fp], _0x3aa268 = "", _0x100478 = 0; _0x100478 < _0x22c758.length; _0x100478++) {
        var _0x431b30 = _0x22c758[_0x100478];
        _0x3aa268 += `<div class="table-row"><span>${_0x100478 + 1}</span><span><img src="${_0x431b30.avatarUrl}"/></span><span>${_0x431b30.username}</span><span>${_0x431b30.level}</span><span>${_0x431b30.highScore}</span><span>${_0x431b30.headShots} / ${_0x431b30.kills}</span></div>`;
      }
      ;
      _0x2a48cf.empty();
      _0x2a48cf.append(_0x3aa268);
    };
    _0x3b6284.Kk = _0x70165b;
    _0x20a584 = $("#popup-login-gg");
    _0xaeac50 = $("#popup-login-fb");
    (_0x4a5035 = _0x29c320.ca(_0x3b6284.Ho, function () {
      var _0x5f0a96 = this;
      _0x3b6284.Ho.call(this, _0x29c320.U("index.game.popup.menu.login.tab"), false);
      _0x20a584.click(function () {
        ooo.ij.if();
        var _0x4f0c86 = _0x5f0a96.Xo(10000);
        _0x29c320.Y(function () {
          ooo.ok.sm(function () {
            if (ooo.ok.nk()) {
              ooo.ij.mf();
            }
            _0x4f0c86._o();
          });
        }, 500);
      });
      _0xaeac50.click(function () {
        ooo.ij.if();
        var _0x4d1615 = _0x5f0a96.Xo(10000);
        _0x29c320.Y(function () {
          ooo.ok.pm(function () {
            if (ooo.ok.nk()) {
              ooo.ij.mf();
            }
            _0x4d1615._o();
          });
        }, 500);
      });
    })).prototype.Sa = function () {
      _0x4a5035.parent.prototype.Sa.call(this);
    };
    _0x4a5035.prototype.Wo = function () {
      _0x55777a.f.h(_0x3b6284.Ho.Mo, 50);
      _0x55777a.f.h(_0x3b6284.Ho.No, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Oo, 50);
      _0x55777a.f.g(_0x3b6284.Ho.Po, 200);
      _0x55777a.f.h(_0x3b6284.Ho.Qo, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Ro, 50);
      _0x55777a.f.h(_0x3b6284.Ho.So, 50);
      _0x55777a.f.h(_0x3b6284.Ho.To, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Uo, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Vo, 50);
    };
    _0x4a5035.prototype.nl = function () {
      ooo.ij.jf();
    };
    _0x3b6284.Ok = _0x4a5035;
    _0x3ba055 = $("#profile-avatar");
    _0x4e4c71 = $("#profile-username");
    _0x7ea448 = $("#profile-experience-bar");
    _0x10d82b = $("#profile-experience-val");
    _0xd08a8d = $("#profile-level");
    _0x4fccb0 = $("#profile-stat-highScore");
    _0x872cad = $("#profile-stat-bestSurvivalTime");
    _0x29d982 = $("#profile-stat-kills");
    _0x1f861e = $("#profile-stat-headshots");
    _0x9b25d2 = $("#profile-stat-gamesPlayed");
    _0x101783 = $("#profile-stat-totalTimeSpent");
    _0x38f0eb = $("#profile-stat-registrationDate");
    (_0x26e494 = _0x29c320.ca(_0x3b6284.Ho, function () {
      _0x3b6284.Ho.call(this, _0x29c320.U("index.game.popup.menu.profile.tab"), true);
    })).prototype.Sa = function () {
      _0x26e494.parent.prototype.Sa.call(this);
    };
    _0x26e494.prototype.Wo = function () {
      _0x55777a.f.h(_0x3b6284.Ho.Mo, 50);
      _0x55777a.f.h(_0x3b6284.Ho.No, 50);
      _0x55777a.f.g(_0x3b6284.Ho.Oo, 200);
      _0x55777a.f.h(_0x3b6284.Ho.Po, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Qo, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Ro, 50);
      _0x55777a.f.h(_0x3b6284.Ho.So, 50);
      _0x55777a.f.h(_0x3b6284.Ho.To, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Uo, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Vo, 50);
    };
    _0x26e494.prototype.nl = function () {
      ooo.ij.jf();
      var _0x4466a4 = ooo.ok.dm();
      var _0x4dd745 = moment([_0x4466a4.year, _0x4466a4.month - 1, _0x4466a4.day]).format("LL");
      _0x4e4c71.html(ooo.ok.Ll());
      _0x3ba055.attr("src", ooo.ok.Nl());
      _0x7ea448.width(ooo.ok.Sl() * 100 / ooo.ok.Tl() + "%");
      _0x10d82b.html(ooo.ok.Sl() + " / " + ooo.ok.Tl());
      _0xd08a8d.html(ooo.ok.Rl());
      _0x4fccb0.html(ooo.ok.Zl());
      _0x872cad.html(_0x29c320.$(ooo.ok.$l()));
      _0x29d982.html(ooo.ok._l());
      _0x1f861e.html(ooo.ok.am());
      _0x9b25d2.html(ooo.ok.bm());
      _0x101783.html(_0x29c320.$(ooo.ok.cm()));
      _0x38f0eb.html(_0x4dd745);
    };
    _0x3b6284.Mk = _0x26e494;
    _0x2a59c4 = $("#settings-music-enabled-switch");
    _0x276fb8 = $("#settings-sfx-enabled-switch");
    _0x242c9a = $("#settings-show-names-switch");
    _0x3a2a20 = $("#popup-logout");
    _0x29a450 = $("#popup-logout-container");
    _0x45a42b = $("#popup-delete-account");
    _0x5884b4 = $("#popup-delete-account-container");
    _0x38bdfd = $("#popup-withdraw-consent");
    (_0x4b7e07 = _0x29c320.ca(_0x3b6284.Ho, function () {
      _0x3b6284.Ho.call(this, _0x29c320.U("index.game.popup.menu.settings.tab"), false);
      var _0x19093a = this;
      _0x2a59c4.click(function () {
        var _0x31851e = !!_0x2a59c4.prop("checked");
        _0x3b6284.Cg.Ng(_0x3b6284.Cg.Fg, _0x31851e, 30);
        ooo.ij.$e(_0x31851e);
        ooo.ij.if();
      });
      _0x276fb8.click(function () {
        var _0xaa61f = !!_0x276fb8.prop("checked");
        _0x3b6284.Cg.Ng(_0x3b6284.Cg.Gg, _0xaa61f, 30);
        ooo.ij.Xe(_0xaa61f);
        ooo.ij.if();
      });
      _0x242c9a.click(function () {
        ooo.ij.if();
      });
      _0x3a2a20.click(function () {
        ooo.ij.if();
        _0x19093a.Xo(500);
        ooo.ok.qm();
      });
      _0x45a42b.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Fk);
        } else {
          ooo.ij.nf();
        }
      });
      _0x38bdfd.click(function () {
        if (ooo.kp()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Dk);
        } else {
          ooo.ij.nf();
        }
      });
    })).prototype.Sa = function () {
      var _0x262ce8;
      var _0xfe05c2;
      var _0x3a8aa8;
      _0x4b7e07.parent.prototype.Sa.call(this);
      _0x262ce8 = _0x3b6284.Cg.Og(_0x3b6284.Cg.Fg) !== "false";
      _0x2a59c4.prop("checked", _0x262ce8);
      ooo.ij.$e(_0x262ce8);
      _0xfe05c2 = _0x3b6284.Cg.Og(_0x3b6284.Cg.Gg) !== "false";
      _0x276fb8.prop("checked", _0xfe05c2);
      ooo.ij.Xe(_0xfe05c2);
      _0x3a8aa8 = _0x3b6284.Cg.Og(_0x3b6284.Cg.Eg) !== "false";
      _0x242c9a.prop("checked", _0x3a8aa8);
      ooo.ok.em(function () {
        _0x29a450.toggle(ooo.ok.nk());
        _0x5884b4.toggle(ooo.ok.nk());
      });
    };
    _0x4b7e07.prototype.Wo = function () {
      _0x55777a.f.h(_0x3b6284.Ho.Mo, 50);
      _0x55777a.f.h(_0x3b6284.Ho.No, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Oo, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Po, 50);
      _0x55777a.f.g(_0x3b6284.Ho.Qo, 200);
      _0x55777a.f.h(_0x3b6284.Ho.Ro, 50);
      _0x55777a.f.h(_0x3b6284.Ho.So, 50);
      _0x55777a.f.h(_0x3b6284.Ho.To, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Uo, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Vo, 50);
    };
    _0x4b7e07.prototype.nl = function () {
      ooo.ij.jf();
      if (ooo.kp()) {
        _0x38bdfd.show();
      } else {
        _0x38bdfd.hide();
      }
    };
    _0x4b7e07.prototype.Gi = function () {
      return _0x242c9a.prop("checked");
    };
    _0x3b6284.Pk = _0x4b7e07;
    _0x169d14 = $("#store-view-canv");
    _0x5836c5 = $("#skin-description-text");
    _0x4aa270 = $("#skin-group-description-text");
    _0x2c3e9e = $("#store-locked-bar");
    _0x411bf9 = $("#store-locked-bar-text");
    _0x53450c = $("#store-buy-button");
    _0x196ef3 = $("#store-item-price");
    _0x142f35 = $("#store-groups");
    _0x333952 = $("#store-view-prev");
    _0x397799 = $("#store-view-next");
    (_0xc417b0 = _0x29c320.ca(_0x3b6284.Ho, function () {
      _0x3b6284.Ho.call(this, _0x29c320.U("index.game.popup.menu.skins.tab"), true);
      var _0x2f5df0 = this;
      this.lp = null;
      this.mp = [];
      this.np = {};
      this.op = new _0x3b6284.Lm(_0x169d14);
      _0x53450c.click(function () {
        ooo.ij.if();
        _0x2f5df0.pp();
      });
      _0x333952.click(function () {
        ooo.ij.if();
        _0x2f5df0.lp.qp();
      });
      _0x397799.click(function () {
        ooo.ij.if();
        _0x2f5df0.lp.rp();
      });
    })).prototype.Sa = function () {
      _0xc417b0.parent.prototype.Sa.call(this);
      var _0x2b9e8f = this;
      ooo.ud.Jc(function () {
        var _0x5b6d1e = ooo.ud.Gc();
        _0x2b9e8f.mp = [];
        for (var _0x3051e4 = 0; _0x3051e4 < _0x5b6d1e.skinGroupArrayDict.length; _0x3051e4++) {
          _0x2b9e8f.mp.push(new _0x151a57(_0x2b9e8f, _0x5b6d1e.skinGroupArrayDict[_0x3051e4]));
        }
        ;
        _0x2b9e8f.np = {};
        for (var _0x44aec9 = 0; _0x44aec9 < _0x5b6d1e.skinArrayDict.length; _0x44aec9++) {
          var _0x3bc81f = _0x5b6d1e.skinArrayDict[_0x44aec9];
          _0x2b9e8f.np[_0x3bc81f.id] = _0x3bc81f;
        }
        ;
        _0x2b9e8f.sp();
      });
      this.tp(false);
      ooo.so.fk(function () {
        _0x2b9e8f.tp(false);
      });
    };
    _0xc417b0.prototype.Wo = function () {
      _0x55777a.f.h(_0x3b6284.Ho.Mo, 50);
      _0x55777a.f.h(_0x3b6284.Ho.No, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Oo, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Po, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Qo, 50);
      _0x55777a.f.g(_0x3b6284.Ho.Ro, 200);
      _0x55777a.f.h(_0x3b6284.Ho.So, 50);
      _0x55777a.f.h(_0x3b6284.Ho.To, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Uo, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Vo, 50);
    };
    _0xc417b0.prototype.nl = function () {
      ooo.ij.Ye(_0x3b6284.Pe.Se.Jf);
      ooo.ij.jf();
      this.sp();
      this.op.rg(true);
    };
    _0xc417b0.prototype.hl = function () {
      this.op.rg(false);
    };
    _0xc417b0.prototype.qg = function () {
      this.op.qg();
    };
    _0xc417b0.prototype.ug = function (_0x1884d5, _0x36ee03) {
      this.op.ug();
    };
    _0xc417b0.prototype.sp = function () {
      var _0x43931f = this;
      var _0x3c6977 = this;
      _0x142f35.empty();
      for (var _0x5d3020 = 0; _0x5d3020 < this.mp.length; _0x5d3020++) {
        (function (_0x74c6b4) {
          var _0x59a94c = _0x43931f.mp[_0x74c6b4];
          var _0xa31b14 = _0x3b6284.d.createElement("li");
          _0x142f35.append(_0xa31b14);
          var _0x22f6f2 = $(_0xa31b14);
          if (_0x3c6977.xp && _0x3c6977.xp.isCustom) {
            _0x22f6f2.addClass("iscustom");
          }
          _0x22f6f2.html(_0x59a94c.up());
          _0x22f6f2.click(function () {
            ooo.ij.if();
            _0x3c6977.vp(_0x59a94c);
          });
          _0x59a94c.wp = _0x22f6f2;
        })(_0x5d3020);
      }
      ;
      if (this.mp.length > 0) {
        var _0x7d16b = ooo.so.Zj(_0x3b6284._j.$j);
        for (var _0xf53cde = 0; _0xf53cde < this.mp.length; _0xf53cde++) {
          var _0x57112b = this.mp[_0xf53cde];
          for (var _0x599e82 = _0x57112b.xp.list, _0x3a09a2 = 0; _0x3a09a2 < _0x599e82.length; _0x3a09a2++) {
            if (_0x599e82[_0x3a09a2] === _0x7d16b) {
              _0x57112b.yp = _0x3a09a2;
              this.vp(_0x57112b);
              return;
            }
          }
        }
        ;
        this.vp(this.mp[0]);
      }
    };
    _0xc417b0.prototype.vp = function (_0x31ff2c) {
      if (this.lp !== _0x31ff2c) {
        this.lp = _0x31ff2c;
        _0x142f35.children().removeClass("pressed");
        if (this.lp.wp) {
          this.lp.wp.addClass("pressed");
        }
        _0x4aa270.html("");
        if (_0x31ff2c.xp != null) {
          var _0x4d9818 = ooo.ud.Gc().textDict[_0x31ff2c.xp.description];
          if (_0x4d9818 != null) {
            _0x4aa270.html(_0x29c320.aa(_0x29c320.V(_0x4d9818)));
          }
        }
        ;
        this.tp(true);
      }
    };
    _0xc417b0.prototype.zp = function () {
      if (this.lp == null) {
        return _0x3b6284.yj.Aj();
      } else {
        return this.lp.Ap();
      }
    };
    _0xc417b0.prototype.pp = function () {
      var _0x52bd03 = this.zp();
      if (_0x52bd03.Cj()) {
        var _0x25be58 = _0x52bd03.Mc();
        this.Bp(_0x25be58);
      }
    };
    _0xc417b0.prototype.Bp = function (_0x2593ba) {
      var _0x4e3e27 = ooo.so.mk(_0x2593ba, _0x3b6284._j.$j);
      if (_0x4e3e27 != null) {
        var _0x42ab60 = _0x4e3e27.pk();
        if (!(ooo.ok.Ql() < _0x42ab60)) {
          var _0x40aa72 = ooo.so.Zj(_0x3b6284._j.$j);
          var _0x1ba626 = ooo.so.Zj(_0x3b6284._j.ak);
          var _0x4549d3 = ooo.so.Zj(_0x3b6284._j.bk);
          var _0x555e12 = ooo.so.Zj(_0x3b6284._j.dk);
          var _0x57ea06 = ooo.so.Zj(_0x3b6284._j.ck);
          var _0x33fa84 = this.Xo(5000);
          ooo.ok.nm(_0x2593ba, _0x3b6284._j.$j, function () {
            _0x33fa84._o();
            ooo.Xg.gl(ooo.Xg._k);
          }, function () {
            ooo.ok.hm(function () {
              ooo.so.lk(_0x40aa72, _0x3b6284._j.$j);
              ooo.so.lk(_0x1ba626, _0x3b6284._j.ak);
              ooo.so.lk(_0x4549d3, _0x3b6284._j.bk);
              ooo.so.lk(_0x555e12, _0x3b6284._j.dk);
              ooo.so.lk(_0x57ea06, _0x3b6284._j.ck);
              ooo.so.lk(_0x2593ba, _0x3b6284._j.$j);
              _0x33fa84._o();
            });
          });
        }
      }
    };
    _0xc417b0.prototype.tp = function (_0xbd596d) {
      var _0x28a9d2 = ooo.so.ek();
      var _0x3f1631 = this.zp();
      if (_0x3f1631.Cj()) {
        var _0x28ae14 = _0x3f1631.Mc();
        var _0x4797d6 = ooo.so.mk(_0x28ae14, _0x3b6284._j.$j);
        var _0x193f65 = false;
        $("#add-to-favorites-skin").remove();
        $("#manage-favorites-skin").remove();
        $("#skin-info-text").remove();
        $(".fav-buttons-container").remove();
        $(".favorites-popup").remove();
        if (ooo.so.ik(_0x28ae14, _0x3b6284._j.$j)) {
          _0x2c3e9e.hide();
          _0x53450c.hide();
          var _0x13499b = $("<div class='fav-buttons-container' style='margin:10px;display:flex;gap:5px;position:fixed;left:140px;top:80px;z-index:1000;'></div>");
          var _0x24af87 = $("<button id='add-to-favorites-skin' class='favorite-button' style='background:#4CAF50;color:white;border:none;padding:5px 10px;border-radius:3px;cursor:pointer;white-space:nowrap;box-shadow:0 2px 4px rgba(0,0,0,0.2);'><span style='font-size:14px;'>â˜…</span> Add</button>");
          var _0x28ec63 = $("<button id='manage-favorites-skin' class='favorite-button' style='background:#2196F3;color:white;border:none;padding:5px 10px;border-radius:3px;cursor:pointer;white-space:nowrap;box-shadow:0 2px 4px rgba(0,0,0,0.2);'><span style='font-size:14px;'>â˜°</span> Favorite</button>");
          _0x13499b.append(_0x24af87);
          _0x13499b.append(_0x28ec63);
          _0x142f35.append(_0x13499b);
          var _0x4fb263 = $("<div>").attr("id", "skin-info-text").css({
            position: "fixed",
            left: "150px",
            top: "130px",
            "font-size": "12px",
            color: "#fff",
            "z-index": "1000"
          }).text("Press '( 1 )' to toggle skins during gameplay").appendTo(_0x142f35);
          var _0x1f6428 = $("<div class='favorites-popup' style='display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1e1e2f;border:1px solid #333345;border-radius:8px;padding:0;width:450px;max-height:400px;overflow:hidden;z-index:1000;box-shadow:0 4px 8px rgba(0,0,0,0.5);color:white;'><div style='padding:15px 20px;background-color:#252538;border-bottom:1px solid #333345;position:relative;display:flex;justify-content:space-between;align-items:center;'><button class='close-favorites' style='position:absolute;top:8px;left:10px;font-size:22px;background:none;border:none;color:#aaa;cursor:pointer;padding:0 5px;line-height:1;font-weight:bold;'>&times;</button><h3 style='margin:0 0 0 5px;font-size:18px;color:white;padding-left:15px;'>Favorite</h3><button class='clear-all-favorites' style='padding:4px 8px;background-color:#f44336;color:white;border:none;border-radius:4px;cursor:pointer;font-size:12px;'>Clear All</button></div><div class='favorites-content' style='padding:15px 20px;overflow-y:auto;max-height:330px;'><div class='favorites-grid' style='display:grid;grid-template-columns:1fr 1fr;gap:15px;padding:0;margin:0;'></div></div></div>");
          $("body").append(_0x1f6428);
          $(".close-favorites").click(function () {
            $(".favorites-popup").hide();
          });
          $(document).mouseup(function (_0x15f871) {
            var _0x4f4778 = $(".favorites-popup");
            if (!_0x4f4778.is(_0x15f871.target) && _0x4f4778.has(_0x15f871.target).length === 0) {
              _0x4f4778.hide();
            }
          });
          $.each($("[id^='skin-info-text']"), function () {
            if ($(this).attr("id") !== "skin-info-text") {
              $(this).remove();
            }
          });
          $(".favorites-content").on("scroll", function () {
            $(this).css("pointer-events", "auto");
          });
          $(".favorites-popup").on("shown", function () {
            setTimeout(function () {
              $(".favorites-content").scrollTop(0);
            }, 100);
          });
          $(".clear-all-favorites").click(function () {
            if (confirm("Are you sure you want to remove all favorite skins?")) {
              _0x152ccb.favoriteSkins = [];
              localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
              _0x1db268();
              if (_0x24af87 && _0x24af87.is(":visible")) {
                _0x24af87.text("â˜… Add").css("background-color", "#4CAF50");
              }
            }
          });
          _0x24af87.click(function () {
            var _0x5b3022 = _0x28ae14;
            if (!_0x152ccb.favoriteSkins) {
              _0x152ccb.favoriteSkins = [];
            }
            var _0x5f1957 = false;
            try {
              for (var _0x186b77 = 0; _0x186b77 < _0x152ccb.favoriteSkins.length; _0x186b77++) {
                if (_0x152ccb.favoriteSkins[_0x186b77] === _0x5b3022) {
                  _0x5f1957 = true;
                  break;
                }
              }
            } catch (_0x11d369) {
              _0x152ccb.favoriteSkins = [];
            }
            if (!_0x5f1957) {
              _0x152ccb.favoriteSkins.push(_0x5b3022);
              localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
              $(this).text("X").css("background-color", "#f44336");
            } else {
              var _0x367dbb = _0x152ccb.favoriteSkins.indexOf(_0x5b3022);
              _0x152ccb.favoriteSkins.splice(_0x367dbb, 1);
              localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
              $(this).text("â˜… Add").css("background-color", "#4CAF50");
            }
          });
          _0x28ec63.click(function () {
            $.each($("[id^='skin-info-text']"), function (_0x3bc53a) {
              if (_0x3bc53a > 0) {
                $(this).remove();
              }
            });
            _0x1db268();
            $(".favorites-popup").show();
          });
        } else if (_0x4797d6 == null || _0x4797d6.qk()) {
          _0x193f65 = true;
          _0x2c3e9e.show();
          _0x53450c.hide();
          _0x411bf9.text(_0x29c320.U("index.game.popup.menu.store.locked"));
          if (_0x4797d6 != null && _0x4797d6.qk()) {
            var _0x1206db = ooo.ud.Gc().textDict[_0x4797d6.ln()];
            if (_0x1206db != null) {
              _0x411bf9.text(_0x29c320.V(_0x1206db));
            }
          }
        } else {
          _0x2c3e9e.hide();
          _0x53450c.show();
          _0x196ef3.html(_0x4797d6.pk());
        }
        _0x5836c5.html("");
        if (_0x4797d6 != null && _0x4797d6.mn() != null) {
          var _0x2877a1 = ooo.ud.Gc().textDict[_0x4797d6.mn()];
          if (_0x2877a1 != null) {
            _0x5836c5.html(_0x29c320.aa(_0x29c320.V(_0x2877a1)));
          }
        }
        if (StoreSkinID && _0x28ae14) {
          StoreSkinID.html(_0x28ae14);
        }
        this.op.Gm(_0x28a9d2.Cn(_0x28ae14));
        this.op.an(_0x193f65);
        if (_0xbd596d) {
          ooo.so.lk(_0x28ae14, _0x3b6284._j.$j);
        }
      }
    };
    function _0x2e62ea() {
      if (!_0x152ccb.favoriteSkins) {
        _0x152ccb.favoriteSkins = [];
        localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
      }
      if (_0x152ccb.favoriteSkins.length > 0) {
        if (_0x152ccb.currentFavSkinIndex === undefined) {
          _0x152ccb.currentFavSkinIndex = 0;
        } else {
          _0x152ccb.currentFavSkinIndex = (_0x152ccb.currentFavSkinIndex + 1) % _0x152ccb.favoriteSkins.length;
        }
        var _0x4add07 = _0x152ccb.favoriteSkins[_0x152ccb.currentFavSkinIndex];
        _0x3de644(_0x4add07);
        localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
      }
    }
    function _0x3de644(_0x322271) {
      ooo.so.lk(_0x322271, _0x3b6284._j.$j);
      if (_0x17d5a6 && _0x17d5a6.n && _0x17d5a6.n.Je) {
        var _0x55c2fb = ooo.ud.Cc().Tb(_0x322271);
        if (_0x17d5a6.uj && _0x55c2fb) {
          _0x17d5a6.uj.hd(ooo.Mh.Qh.eh, ooo.ud.Cc().Ub(_0x17d5a6.n.mi), _0x55c2fb, ooo.ud.Cc().Vb(_0x17d5a6.n.Vi), ooo.ud.Cc().Wb(_0x17d5a6.n.Wi), ooo.ud.Cc().Xb(_0x17d5a6.n.Xi), ooo.ud.Cc().Yb(_0x17d5a6.n.Yi), "#ffffff");
        }
      }
    }
    function _0x1f57e3(_0x14d9f3, _0x178678) {
      if (!_0x14d9f3) {
        return "";
      }
      if (_0x14d9f3.startsWith("data:")) {
        return _0x14d9f3;
      }
      if (_0x14d9f3.includes("get_skin.php")) {
        if (_0x14d9f3.startsWith("http")) {
          return _0x14d9f3.replace(/https?:\/\/[^\/]+/, _0x152ccb.s_l);
        } else {
          return _0x152ccb.s_l + _0x14d9f3;
        }
      }
      if (_0x14d9f3.includes("/images/skins/")) {
        return _0x152ccb.s_l + "/" + _0x14d9f3;
      }
      if (_0x14d9f3.includes("/static/assets/")) {
        return "https://resources.wormate.io" + _0x14d9f3;
      }
      if (_0x14d9f3.includes("/images/skins/")) {
        return _0x152ccb.s_l + _0x14d9f3;
      }
      if (!_0x14d9f3.startsWith("http")) {
        return "https://wormate.io" + _0x14d9f3;
      }
      return _0x14d9f3;
    }
    function _0x2bbdf5(_0x2fe2fe) {
      if (!_0x152ccb.favoriteSkins) {
        _0x152ccb.favoriteSkins = [];
      }
      var _0x2b3584 = false;
      for (var _0x1b44d2 = 0; _0x1b44d2 < _0x152ccb.favoriteSkins.length; _0x1b44d2++) {
        if (_0x152ccb.favoriteSkins[_0x1b44d2] === _0x2fe2fe) {
          _0x2b3584 = true;
          break;
        }
      }
      if (!_0x2b3584) {
        _0x152ccb.favoriteSkins.push(_0x2fe2fe);
        localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
      }
    }
    function _0x27a180() {
      if ($("#open-favorites-btn").length === 0) {
        var _0x16bd9e = $("<button id='open-favorites-btn' class='favorites-button'>Ø¹Ø±Ø¶ Ø§Ù„Ø³ÙƒÙ†Ø§Øª Ø§Ù„Ù…ÙØ¶Ù„Ø©</button>");
        $("<style>#open-favorites-btn { position: absolute; top: 10px; right: 10px; background: #4CAF50; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer; z-index: 1000; }#open-favorites-btn:hover { background: #45a049; }</style>").appendTo("head");
        _0x16bd9e.click(function () {
          _0x1db268();
          $(".favorites-popup").show();
        });
        if ($("#mm-skin-canv").length > 0) {
          $("#mm-skin-canv").parent().css("position", "relative");
          $("#mm-skin-canv").parent().append(_0x16bd9e);
        }
      }
    }
    function _0x401284(_0xd6eb7f) {
      if (_0x152ccb.favoriteSkins && _0xd6eb7f >= 0 && _0xd6eb7f < _0x152ccb.favoriteSkins.length) {
        _0x152ccb.favoriteSkins.splice(_0xd6eb7f, 1);
        localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
        _0x1db268();
      }
    }
    function _0x1db268() {
      var _0x2d39a6 = $(".favorites-grid");
      _0x2d39a6.empty();
      if (!_0x152ccb.favoriteSkins) {
        _0x152ccb.favoriteSkins = [];
        localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
      }
      try {
        if (_0x152ccb.favoriteSkins.length > 0) {
          for (var _0xfe5485 = 0; _0xfe5485 < _0x152ccb.favoriteSkins.length; _0xfe5485++) {
            var _0x3d1826 = _0x152ccb.favoriteSkins[_0xfe5485];
            var _0x570897 = $("<div>").attr("data-index", _0xfe5485).attr("data-skin-id", _0x3d1826).css({
              display: "flex",
              "flex-direction": "column",
              "align-items": "center",
              padding: "2px",
              background: "#252538",
              "border-radius": "6px",
              position: "relative",
              height: "50px",
              width: "100%"
            });
            var _0x5a771d = $("<div>").css({
              width: "100%",
              height: "46px",
              background: "transparent",
              "border-radius": "4px",
              overflow: "visible",
              position: "relative",
              display: "flex",
              "justify-content": "center",
              "align-items": "center"
            }).appendTo(_0x570897);
            var _0x24b15a = $("<button>").text("X").css({
              position: "absolute",
              top: "3px",
              right: "3px",
              background: "#f44336",
              color: "white",
              border: "none",
              padding: "1px 5px",
              "border-radius": "3px",
              cursor: "pointer",
              "font-size": "11px",
              "z-index": "20"
            }).appendTo(_0x570897);
            var _0x2f38b9 = _0xec6fa2(_0x3d1826);
            _0x5a771d.append(_0x2f38b9);
            _0x2d39a6.append(_0x570897);
            _0x24b15a.click(function () {
              var _0x12dbb7 = $(this).closest("[data-index]");
              var _0x3860fc = parseInt(_0x12dbb7.attr("data-index"));
              if (_0x152ccb.favoriteSkins && _0x3860fc >= 0 && _0x3860fc < _0x152ccb.favoriteSkins.length) {
                _0x152ccb.favoriteSkins.splice(_0x3860fc, 1);
                localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
                _0x12dbb7.fadeOut(300, function () {
                  $(this).remove();
                  _0x2d39a6.find("[data-index]").each(function (_0xf4ee98) {
                    $(this).attr("data-index", _0xf4ee98);
                  });
                  if (_0x152ccb.favoriteSkins.length === 0) {
                    _0x1a28f6(_0x2d39a6);
                  }
                });
              }
            });
          }
        } else {
          _0x1a28f6(_0x2d39a6);
        }
      } catch (_0x2e282d) {
        _0x2d39a6.append("<div style='text-align:center;padding:10px;color:#ff6b6b;grid-column:1/span 2;'>Error loading favorites</div>");
      }
    }
    function _0x1a28f6(_0x284382) {
      _0x284382.append("<div style='text-align:center;padding:10px;color:#aaa;margin:20px 0;grid-column:1/span 2;'>You don't have any favorite skins yet.</div>");
    }
    function _0xec6fa2(_0x157fd4) {
      if (!window.textureCache) {
        window.textureCache = {};
      }
      try {
        let _0x5830d3 = null;
        if (typeof ooo !== "undefined") {
          if (ooo.ud && ooo.ud.Gc) {
            _0x5830d3 = ooo.ud.Gc();
          } else if (ooo.ok && ooo.ok.xl && ooo.ok.xl.skinData) {
            _0x5830d3 = ooo.ok.xl.skinData;
          } else if (window.globalGameData) {
            _0x5830d3 = window.globalGameData;
          }
        }
        if (!_0x5830d3) {
          const _0x3d72a5 = localStorage.getItem("wupsw");
          if (_0x3d72a5) {
            try {
              _0x5830d3 = JSON.parse(_0x3d72a5);
            } catch (_0x5161d8) {}
          }
        }
        if (!_0x5830d3) {
          throw new Error("Game data not available");
        }
        let _0x1f2a0b = null;
        if (_0x5830d3.skinArrayDict && Array.isArray(_0x5830d3.skinArrayDict)) {
          _0x1f2a0b = _0x5830d3.skinArrayDict;
        } else if (_0x5830d3.skins && Array.isArray(_0x5830d3.skins)) {
          _0x1f2a0b = _0x5830d3.skins;
        } else {
          throw new Error("Skin list not found in game data");
        }
        let _0x4ec019 = null;
        for (let _0x25e22c = 0; _0x25e22c < _0x1f2a0b.length; _0x25e22c++) {
          if (_0x1f2a0b[_0x25e22c] && _0x1f2a0b[_0x25e22c].id === _0x157fd4) {
            _0x4ec019 = _0x1f2a0b[_0x25e22c];
            break;
          }
        }
        if (!_0x4ec019) {
          throw new Error("Skin not found");
        }
        const _0x2e2a46 = document.createElement("div");
        _0x2e2a46.style.cssText = "\n            width: 100%;\n            height: 100%;\n            position: relative;\n            overflow: visible;\n        ";
        const _0x2a400b = document.createElement("div");
        _0x2a400b.textContent = "#" + _0x157fd4;
        _0x2a400b.style.cssText = "\n            position: absolute;\n            top: 3px;\n            left: 2px;\n            background-color: rgba(0,0,0,0.6);\n            color: white;\n            font-size: 11px;\n            padding: 1px 4px;\n            border-radius: 3px;\n            z-index: 10;\n        ";
        _0x2e2a46.appendChild(_0x2a400b);
        const _0x1d119f = document.createElement("canvas");
        _0x1d119f.width = 600;
        _0x1d119f.height = 80;
        _0x1d119f.style.cssText = "\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            object-fit: contain;\n            padding: 5px;\n        ";
        _0x2e2a46.appendChild(_0x1d119f);
        const _0x5a88ec = _0x1d119f.getContext("2d");
        _0x5a88ec.clearRect(0, 0, _0x1d119f.width, _0x1d119f.height);
        if (_0x4ec019.base && Array.isArray(_0x4ec019.base) && _0x4ec019.base.length > 0) {
          let _0x4369ce = {};
          let _0x1ce5cd = [];
          _0x4ec019.base.forEach(_0x4e4a3d => {
            if (!_0x4e4a3d) {
              return;
            }
            if (_0x5830d3.regionDict && _0x5830d3.regionDict[_0x4e4a3d]) {
              const _0x1ffca6 = _0x5830d3.regionDict[_0x4e4a3d];
              if (_0x5830d3.textureDict && _0x1ffca6.texture && _0x5830d3.textureDict[_0x1ffca6.texture]) {
                const _0x45e303 = _0x5830d3.textureDict[_0x1ffca6.texture];
                if (_0x45e303 && (_0x45e303.file || _0x45e303.relativePath)) {
                  let _0x5c5459 = _0x1f57e3(_0x45e303.relativePath || _0x45e303.file, _0x1ffca6.texture);
                  if (!_0x4369ce[_0x5c5459]) {
                    _0x4369ce[_0x5c5459] = [];
                  }
                  _0x4369ce[_0x5c5459].push({
                    id: _0x4e4a3d,
                    region: _0x1ffca6
                  });
                  _0x1ce5cd.push({
                    id: _0x4e4a3d,
                    region: _0x1ffca6
                  });
                }
              }
            }
          });
          const _0x169981 = [..._0x1ce5cd].reverse();
          let _0x49fa1d = [..._0x169981];
          while (_0x49fa1d.length < 27) {
            const _0xd6075e = 27 - _0x49fa1d.length;
            const _0x4cd8b9 = _0x169981.slice(0, Math.min(_0xd6075e, _0x169981.length));
            _0x49fa1d = [..._0x49fa1d, ..._0x4cd8b9];
          }
          const _0x4a045d = 80;
          const _0x582270 = _0x4a045d / 2;
          const _0xf3082c = 0.2;
          const _0x5cf0a2 = _0x4a045d * _0xf3082c * _0x49fa1d.length + _0x4a045d * 0.75;
          _0x1d119f.width = Math.max(600, _0x5cf0a2);
          _0x5a88ec.clearRect(0, 0, _0x1d119f.width, _0x1d119f.height);
          let _0x3dbe51 = 0;
          const _0x45b6f0 = Object.keys(_0x4369ce).length;
          function _0x2c0ad5(_0x6ac6ad) {
            _0x271710(_0x6ac6ad);
          }
          function _0x271710(_0x207428) {
            const _0x54949e = _0x1d119f.height / 2;
            _0x49fa1d.forEach((_0x5283f4, _0xfdb446) => {
              if (!_0x5283f4) {
                return;
              }
              const _0x25ae06 = _0x5283f4.region;
              const _0x173669 = _0x582270 + _0xfdb446 * _0x582270 * 2 * _0xf3082c;
              _0x5a88ec.save();
              _0x5a88ec.beginPath();
              _0x5a88ec.arc(_0x173669, _0x54949e, _0x582270, 0, Math.PI * 2);
              _0x5a88ec.clip();
              const _0x4bb42a = Math.max(_0x25ae06.w, _0x25ae06.h);
              const _0x38d773 = _0x582270 * 2 / _0x4bb42a;
              const _0x1bb05d = _0x173669 - _0x25ae06.w * _0x38d773 / 2;
              const _0x36ecc5 = _0x54949e - _0x25ae06.h * _0x38d773 / 2;
              _0x5a88ec.drawImage(_0x207428, _0x25ae06.x, _0x25ae06.y, _0x25ae06.w, _0x25ae06.h, _0x1bb05d, _0x36ecc5, _0x25ae06.w * _0x38d773, _0x25ae06.h * _0x38d773);
              _0x5a88ec.restore();
            });
          }
          Object.keys(_0x4369ce).forEach(_0xdb4ce5 => {
            if (window.textureCache[_0xdb4ce5]) {
              _0x2c0ad5(window.textureCache[_0xdb4ce5]);
              return;
            }
            const _0x16c8c3 = new Image();
            _0x16c8c3.onload = () => {
              window.textureCache[_0xdb4ce5] = _0x16c8c3;
              _0x2c0ad5(_0x16c8c3);
              _0x3dbe51++;
            };
            _0x16c8c3.onerror = () => {
              _0x3dbe51++;
            };
            _0x16c8c3.src = _0xdb4ce5;
          });
          return _0x2e2a46;
        }
      } catch (_0x1eba85) {
        const _0x1b7bb5 = document.createElement("div");
        _0x1b7bb5.style.cssText = "\n            width: 100%;\n            height: 100%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            color: white;\n            background-color: #333;\n        ";
        _0x1b7bb5.textContent = "âš ï¸";
        return _0x1b7bb5;
      }
      const _0x56bfbf = document.createElement("div");
      _0x56bfbf.style.cssText = "\n        width: 100%;\n        height: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        color: white;\n        background-color: #333;\n    ";
      _0x56bfbf.textContent = "ğŸ®";
      return _0x56bfbf;
    }
    _0x151a57 = function () {
      function _0x13b812(_0x5518c9, _0x2c0563) {
        this.Cp = _0x5518c9;
        this.yp = 0;
        this.xp = _0x2c0563;
      }
      _0x13b812.prototype.qp = function () {
        if (--this.yp < 0) {
          this.yp = this.xp.list.length - 1;
        }
        this.Cp.tp(true);
      };
      _0x13b812.prototype.rp = function () {
        if (++this.yp >= this.xp.list.length) {
          this.yp = 0;
        }
        this.Cp.tp(true);
      };
      _0x13b812.prototype.up = function () {
        let _0x590da5 = _0x29c320.V(this.xp.name);
        if (this.xp.img) {
          if ((this.xp.img.search("data:image/png;base64,") == -1 || !(_0x590da5 = "<img src=\"" + this.xp.img + "\" height=\"40\" />")) && (this.xp.img.search("https://lh3.googleusercontent.com") == -1 || !(_0x590da5 = "<img src=\"" + this.xp.img + "\" height=\"40\" />"))) {
            _0x590da5 = "<img src=\"" + _0x152ccb.s_l + "/images/" + this.xp.img + "\" height=\"40\" />";
          }
        }
        return _0x590da5;
      };
      _0x13b812.prototype.Ap = function () {
        if (this.yp >= this.xp.list.length) {
          return _0x3b6284.yj.Aj();
        } else {
          return _0x3b6284.yj.Bj(this.xp.list[this.yp]);
        }
      };
      return _0x13b812;
    }();
    _0x3b6284.Rk = _0xc417b0;
    _0x2bc8da = $("#store-go-coins-button");
    _0x1aaa1a = $("#store-go-skins-button");
    _0x20e9d5 = $("#store-go-wear-button");
    (_0x3025e2 = _0x29c320.ca(_0x3b6284.Ho, function () {
      _0x3b6284.Ho.call(this, _0x29c320.U("index.game.popup.menu.store.tab"), true);
      _0x2bc8da.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Hk);
      });
      _0x1aaa1a.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Qk);
      });
      _0x20e9d5.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Uk);
      });
    })).prototype.Sa = function () {
      _0x3025e2.parent.prototype.Sa.call(this);
    };
    _0x3025e2.prototype.Wo = function () {
      _0x55777a.f.h(_0x3b6284.Ho.Mo, 50);
      _0x55777a.f.h(_0x3b6284.Ho.No, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Oo, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Po, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Qo, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Ro, 50);
      _0x55777a.f.g(_0x3b6284.Ho.So, 200);
      _0x55777a.f.h(_0x3b6284.Ho.To, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Uo, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Vo, 50);
    };
    _0x3025e2.prototype.nl = function () {
      ooo.ij.jf();
    };
    _0x3b6284.Tk = _0x3025e2;
    _0xaa96a7 = $("#wear-view-canv");
    _0x26bf87 = $("#wear-description-text");
    _0x469017 = $("#wear-locked-bar");
    _0x2787fb = $("#wear-locked-bar-text");
    _0x44d2e2 = $("#wear-buy-button");
    _0x42240d = $("#wear-item-price");
    _0x1c10d1 = $("#wear-eyes-button");
    _0x467073 = $("#wear-mouths-button");
    _0x52bc4e = $("#wear-glasses-button");
    _0x991e5c = $("#wear-hats-button");
    _0x4b4343 = $("#wear-tint-chooser");
    _0x30449c = $("#wear-view-prev");
    _0x1894cf = $("#wear-view-next");
    (_0x4638b9 = _0x29c320.ca(_0x3b6284.Ho, function () {
      var _0x5ee595 = this;
      _0x3b6284.Ho.call(this, _0x29c320.U("index.game.popup.menu.wear.tab"), true);
      var _0x4892f3 = this;
      this.Dp = [];
      this.ak = new _0x426640(this, _0x3b6284._j.ak, _0x1c10d1);
      this.bk = new _0x426640(this, _0x3b6284._j.bk, _0x467073);
      this.dk = new _0x426640(this, _0x3b6284._j.dk, _0x52bc4e);
      this.ck = new _0x426640(this, _0x3b6284._j.ck, _0x991e5c);
      this.Ep = null;
      this.Fp = null;
      this.Gp = null;
      this.Hp = null;
      this.Ip = null;
      this.Jp = null;
      this.op = new _0x3b6284.Lm(_0xaa96a7);
      _0x44d2e2.click(function () {
        ooo.ij.if();
        _0x4892f3.Kp();
      });
      _0x30449c.click(function () {
        ooo.ij.if();
        _0x4892f3.Ep.Lp();
      });
      _0x1894cf.click(function () {
        ooo.ij.if();
        _0x4892f3.Ep.Mp();
      });
      _0x1c10d1.click(function () {
        ooo.ij.if();
        _0x4892f3.Np(_0x5ee595.ak);
      });
      _0x467073.click(function () {
        ooo.ij.if();
        _0x4892f3.Np(_0x5ee595.bk);
      });
      _0x52bc4e.click(function () {
        ooo.ij.if();
        _0x4892f3.Np(_0x5ee595.dk);
      });
      _0x991e5c.click(function () {
        ooo.ij.if();
        _0x4892f3.Np(_0x5ee595.ck);
      });
      this.Dp.push(this.ak);
      this.Dp.push(this.bk);
      this.Dp.push(this.dk);
      this.Dp.push(this.ck);
    })).prototype.Sa = function () {
      _0x4638b9.parent.prototype.Sa.call(this);
      var _0xc5b173 = this;
      ooo.ud.Jc(function () {
        var _0x230e46 = ooo.ud.Gc();
        _0xc5b173.Fp = _0x230e46.eyesDict;
        _0xc5b173.Gp = _0x230e46.mouthDict;
        _0xc5b173.Hp = _0x230e46.glassesDict;
        _0xc5b173.Ip = _0x230e46.hatDict;
        _0xc5b173.Jp = _0x230e46.colorDict;
        _0xc5b173.ak.Op(_0x230e46.eyesVariantArray);
        _0xc5b173.ak.Pp(_0xc5b173.Fp);
        _0xc5b173.bk.Op(_0x230e46.mouthVariantArray);
        _0xc5b173.bk.Pp(_0xc5b173.Gp);
        _0xc5b173.dk.Op(_0x230e46.glassesVariantArray);
        _0xc5b173.dk.Pp(_0xc5b173.Hp);
        _0xc5b173.ck.Op(_0x230e46.hatVariantArray);
        _0xc5b173.ck.Pp(_0xc5b173.Ip);
      });
      this.tp(false);
      ooo.so.fk(function () {
        _0xc5b173.tp(false);
      });
    };
    _0x4638b9.prototype.Wo = function () {
      _0x55777a.f.h(_0x3b6284.Ho.Mo, 50);
      _0x55777a.f.h(_0x3b6284.Ho.No, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Oo, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Po, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Qo, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Ro, 50);
      _0x55777a.f.h(_0x3b6284.Ho.So, 50);
      _0x55777a.f.g(_0x3b6284.Ho.To, 200);
      _0x55777a.f.h(_0x3b6284.Ho.Uo, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Vo, 50);
    };
    _0x4638b9.prototype.nl = function () {
      ooo.ij.Ye(_0x3b6284.Pe.Se.Jf);
      ooo.ij.jf();
      this.Np(this.Ep ?? this.ak);
      this.op.rg(true);
    };
    _0x4638b9.prototype.hl = function () {
      this.op.rg(false);
    };
    _0x4638b9.prototype.qg = function () {
      this.op.qg();
    };
    _0x4638b9.prototype.ug = function (_0x32a4b3, _0x364a2a) {
      this.op.ug();
    };
    _0x4638b9.prototype.Np = function (_0x28f620) {
      this.Ep = _0x28f620;
      for (var _0x306ef5 = 0; _0x306ef5 < this.Dp.length; _0x306ef5++) {
        this.Dp[_0x306ef5].ep.removeClass("pressed");
      }
      ;
      this.Ep.ep.addClass("pressed");
      this.Ep.ml();
    };
    _0x4638b9.prototype.Qp = function () {
      if (this.Ep == null) {
        return _0x3b6284.yj.Aj();
      } else {
        return _0x3b6284.yj.Bj({
          Je: this.Ep.Ap(),
          Wd: this.Ep.Wd
        });
      }
    };
    _0x4638b9.prototype.Kp = function () {
      var _0x509d5c = this.Qp();
      if (_0x509d5c.Cj()) {
        var _0x359104 = _0x509d5c.Mc();
        this.Rp(_0x359104.Je, _0x359104.Wd);
      }
    };
    _0x4638b9.prototype.Rp = function (_0x1b5506, _0xebf214) {
      var _0xb432 = ooo.so.mk(_0x1b5506, _0xebf214);
      if (_0xb432 != null) {
        var _0x18640e = _0xb432.pk();
        if (!(ooo.ok.Ql() < _0x18640e)) {
          var _0x46d90b = ooo.so.Zj(_0x3b6284._j.$j);
          var _0x4f9512 = ooo.so.Zj(_0x3b6284._j.ak);
          var _0x39f63d = ooo.so.Zj(_0x3b6284._j.bk);
          var _0x33929c = ooo.so.Zj(_0x3b6284._j.dk);
          var _0x13c7cc = ooo.so.Zj(_0x3b6284._j.ck);
          var _0x16c9b8 = this.Xo(5000);
          ooo.ok.nm(_0x1b5506, _0xebf214, function () {
            _0x16c9b8._o();
            ooo.Xg.gl(ooo.Xg._k);
          }, function () {
            ooo.ok.hm(function () {
              ooo.so.lk(_0x46d90b, _0x3b6284._j.$j);
              ooo.so.lk(_0x4f9512, _0x3b6284._j.ak);
              ooo.so.lk(_0x39f63d, _0x3b6284._j.bk);
              ooo.so.lk(_0x33929c, _0x3b6284._j.dk);
              ooo.so.lk(_0x13c7cc, _0x3b6284._j.ck);
              ooo.so.lk(_0x1b5506, _0xebf214);
              _0x16c9b8._o();
            });
          });
        }
      }
    };
    window.globalHatTextureCache = window.globalHatTextureCache || {};
    _0x4638b9.prototype.tp = function (_0x520fb4) {
      var _0x554b3c = ooo.so.ek();
      var _0x26df4e = this.Qp();
      if (_0x26df4e.Cj()) {
        var _0x3efa6c = _0x26df4e.Mc();
        var _0x53c78e = ooo.so.mk(_0x3efa6c.Je, _0x3efa6c.Wd);
        var _0x3cc1f7 = false;
        if (!_0x3efa6c.selectedHats) {
          _0x3efa6c.selectedHats = [];
        }
        if (ooo.so.ik(_0x3efa6c.Je, _0x3efa6c.Wd)) {
          _0x469017.hide();
          _0x44d2e2.hide();
          if (_0x3efa6c.Wd === "HAT") {
            this.addSelectedHatButton(_0x3efa6c.Je);
          } else {
            this.removeHatButtons();
          }
        } else if (_0x53c78e == null || _0x53c78e.qk()) {
          _0x3cc1f7 = true;
          _0x469017.show();
          _0x44d2e2.hide();
          _0x2787fb.text(_0x29c320.U("index.game.popup.menu.store.locked"));
          if (_0x53c78e != null && _0x53c78e.qk()) {
            var _0x1c4405 = ooo.ud.Gc().textDict[_0x53c78e.ln()];
            if (_0x1c4405 != null) {
              _0x2787fb.text(_0x29c320.V(_0x1c4405));
            }
          }
          this.removeHatButtons();
        } else {
          _0x469017.hide();
          _0x44d2e2.show();
          _0x42240d.html(_0x53c78e.pk());
          this.removeHatButtons();
        }
        _0x26bf87.html("");
        if (_0x53c78e != null && _0x53c78e.mn() != null) {
          var _0x4acdd9 = ooo.ud.Gc().textDict[_0x53c78e.mn()];
          if (_0x4acdd9 != null) {
            _0x26bf87.html(_0x29c320.aa(_0x29c320.V(_0x4acdd9)));
          }
        }
        var _0x274d44 = this.op;
        switch (_0x3efa6c.Wd) {
          case "EYES":
            _0x274d44.Gm(_0x554b3c.Dn(_0x3efa6c.Je));
            _0x274d44.bn(_0x3cc1f7);
            break;
          case "MOUTH":
            _0x274d44.Gm(_0x554b3c.En(_0x3efa6c.Je));
            _0x274d44.cn(_0x3cc1f7);
            break;
          case "GLASSES":
            _0x274d44.Gm(_0x554b3c.Gn(_0x3efa6c.Je));
            _0x274d44.en(_0x3cc1f7);
            break;
          case "HAT":
            _0x274d44.Gm(_0x554b3c.Fn(_0x3efa6c.Je));
            _0x274d44.dn(_0x3cc1f7);
            break;
        }
        if (_0x520fb4) {
          ooo.so.lk(_0x3efa6c.Je, _0x3efa6c.Wd);
        }
      }
    };
    _0x4638b9.prototype.addSelectedHatButton = function (_0x14f7cf) {
      this.currentHatId = _0x14f7cf;
      if (!this.hatButtonContainer) {
        this.hatButtonContainer = $("<div>").attr("id", "hat-button-container").css({
          position: "absolute",
          bottom: "30px",
          left: "-10px",
          display: "flex",
          gap: "5px"
        }).appendTo("#wear-view");
        this.hatToggleButton = $("<button>").attr("id", "hat-toggle-button").css({
          padding: "5px 10px",
          "background-color": "#4CAF50",
          color: "white",
          border: "none",
          "border-radius": "4px",
          cursor: "pointer",
          "min-width": "32px"
        }).appendTo(this.hatButtonContainer);
        this.hatFavoritesButton = $("<button>").attr("id", "hat-favorites-button").css({
          padding: "5px 10px",
          "background-color": "#2196F3",
          color: "white",
          border: "none",
          "border-radius": "4px",
          cursor: "pointer"
        }).text("â˜° Favorites").appendTo(this.hatButtonContainer);
        this.hatInfoText = $("<div>").attr("id", "hat-info-text").css({
          position: "absolute",
          bottom: "10px",
          left: "-5px",
          "font-size": "12px",
          color: "#fff"
        }).text("Press '( 2 )' to toggle hats during gameplay").appendTo("#wear-view");
        var _0x23a1fc = this;
        this.hatFavoritesButton.on("click", function () {
          _0x23a1fc.showFavoritesDialog();
        });
      }
      let _0x5e1e82 = _0x152ccb.selectedHats.includes(_0x14f7cf);
      this.hatToggleButton.text(_0x5e1e82 ? "X" : "â˜… Add");
      this.hatToggleButton.css("background-color", _0x5e1e82 ? "#f44336" : "#4CAF50");
      this.hatToggleButton.off("click");
      var _0x23a1fc = this;
      this.hatToggleButton.on("click", function () {
        let _0x1acdb9 = _0x152ccb.selectedHats.indexOf(_0x14f7cf);
        if (_0x1acdb9 >= 0) {
          _0x152ccb.selectedHats.splice(_0x1acdb9, 1);
          $(this).text("Add").css("background-color", "#4CAF50");
        } else {
          _0x152ccb.selectedHats.push(_0x14f7cf);
          $(this).text("X").css("background-color", "#f44336");
        }
        localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
      });
      this.hatButtonContainer.show();
      this.hatInfoText.show();
    };
    _0x4638b9.prototype.removeHatButtons = function () {
      if (this.hatButtonContainer) {
        this.hatButtonContainer.hide();
      }
      if (this.hatInfoText) {
        this.hatInfoText.hide();
      }
    };
    function _0x2d8b77(_0x227fe3) {
      try {
        if (window.globalHatTextureCache[_0x227fe3] && window.globalHatTextureCache[_0x227fe3].valid) {
          return window.globalHatTextureCache[_0x227fe3];
        }
        const _0x2ce16d = ooo.ud.Cc().Yb(_0x227fe3);
        if (!_0x2ce16d || !_0x2ce16d.dc || !_0x2ce16d.dc.length) {
          return null;
        }
        const _0x22d8dd = _0x2ce16d.dc[0];
        let _0x150183 = null;
        if (_0x22d8dd._a !== undefined) {
          _0x150183 = {
            x: _0x22d8dd._a || 0,
            y: _0x22d8dd.ab || 0,
            width: _0x22d8dd.bb || 0,
            height: _0x22d8dd.cb || 0
          };
        } else if (_0x22d8dd._frame) {
          _0x150183 = {
            x: _0x22d8dd._frame.x || 0,
            y: _0x22d8dd._frame.y || 0,
            width: _0x22d8dd._frame.width || 0,
            height: _0x22d8dd._frame.height || 0
          };
        } else if (_0x22d8dd.orig) {
          _0x150183 = {
            x: _0x22d8dd.orig.x || 0,
            y: _0x22d8dd.orig.y || 0,
            width: _0x22d8dd.orig.width || 0,
            height: _0x22d8dd.orig.height || 0
          };
        } else if (_0x22d8dd.va && _0x22d8dd.va.length >= 4) {
          _0x150183 = {
            x: _0x22d8dd.va[0] || 0,
            y: _0x22d8dd.va[1] || 0,
            width: _0x22d8dd.va[2] || 0,
            height: _0x22d8dd.va[3] || 0
          };
        }
        let _0x3de546 = null;
        if (_0x22d8dd.Za && _0x22d8dd.Za.baseTexture && _0x22d8dd.Za.baseTexture.resource && _0x22d8dd.Za.baseTexture.resource.source) {
          _0x3de546 = _0x22d8dd.Za.baseTexture.resource.source;
        } else if (_0x22d8dd.baseTexture && _0x22d8dd.baseTexture.resource && _0x22d8dd.baseTexture.resource.source) {
          _0x3de546 = _0x22d8dd.baseTexture.resource.source;
        } else if (_0x22d8dd.baseTexture && _0x22d8dd.baseTexture.resource && _0x22d8dd.baseTexture.resource.data) {
          _0x3de546 = _0x22d8dd.baseTexture.resource.data;
        } else if (_0x22d8dd.baseTexture && _0x22d8dd.baseTexture.source) {
          _0x3de546 = _0x22d8dd.baseTexture.source;
        }
        const _0x58f8f3 = {
          hatId: _0x227fe3,
          image: _0x3de546 || null,
          coords: _0x150183 || null,
          textureData: _0x22d8dd,
          hatData: _0x2ce16d,
          valid: _0x3de546 && _0x150183 ? true : false
        };
        window.globalHatTextureCache[_0x227fe3] = _0x58f8f3;
        return _0x58f8f3;
      } catch (_0x3076f9) {
        return null;
      }
    }
    function _0xc3cd5(_0x55ad34) {
      try {
        const _0x5c5e18 = document.createElement("div");
        _0x5c5e18.style.cssText = "\n            width: 100%;\n            height: 100%;\n            position: relative;\n            overflow: visible;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        ";
        const _0x6ce2a4 = document.createElement("div");
        _0x6ce2a4.textContent = "#" + _0x55ad34;
        _0x6ce2a4.style.cssText = "\n            position: absolute;\n            top: 4px;\n            left: 4px;\n            background-color: rgba(0,0,0,0.6);\n            color: white;\n            font-size: 12px;\n            padding: 2px 5px;\n            border-radius: 3px;\n            z-index: 10;\n        ";
        _0x5c5e18.appendChild(_0x6ce2a4);
        const _0x8e01b7 = document.createElement("canvas");
        _0x8e01b7.width = 80;
        _0x8e01b7.height = 80;
        _0x8e01b7.style.cssText = "\n            display: block;\n            object-fit: contain;\n        ";
        _0x5c5e18.appendChild(_0x8e01b7);
        const _0x527331 = _0x8e01b7.getContext("2d", {
          willReadFrequently: true
        });
        _0x527331.clearRect(0, 0, _0x8e01b7.width, _0x8e01b7.height);
        const _0x1e1a74 = _0x2d8b77(_0x55ad34);
        if (!_0x1e1a74 || !_0x1e1a74.image || !_0x1e1a74.coords) {
          _0x527331.fillStyle = "#333";
          _0x527331.fillRect(0, 0, _0x8e01b7.width, _0x8e01b7.height);
          _0x527331.fillStyle = "white";
          _0x527331.font = "18px Arial";
          _0x527331.textAlign = "center";
          _0x527331.fillText("#" + _0x55ad34, _0x8e01b7.width / 2, _0x8e01b7.height / 2);
          return _0x5c5e18;
        }
        try {
          if (_0x1e1a74.coords) {
            _0x527331.save();
            const _0x2c87d6 = Math.min((_0x8e01b7.width - 10) / _0x1e1a74.coords.width, (_0x8e01b7.height - 10) / _0x1e1a74.coords.height) * 0.9;
            const _0x47df83 = _0x1e1a74.coords.width * _0x2c87d6;
            const _0x987ba4 = _0x1e1a74.coords.height * _0x2c87d6;
            const _0x57c97a = (_0x8e01b7.width - _0x47df83) / 2;
            const _0x4de3b8 = (_0x8e01b7.height - _0x987ba4) / 2;
            _0x527331.drawImage(_0x1e1a74.image, _0x1e1a74.coords.x, _0x1e1a74.coords.y, _0x1e1a74.coords.width, _0x1e1a74.coords.height, _0x57c97a, _0x4de3b8, _0x47df83, _0x987ba4);
            _0x527331.restore();
          } else {
            const _0x54c7f8 = Math.min((_0x8e01b7.width - 10) / _0x1e1a74.image.width, (_0x8e01b7.height - 10) / _0x1e1a74.image.height) * 0.8;
            const _0x3f78c7 = _0x1e1a74.image.width * _0x54c7f8;
            const _0xa2a137 = _0x1e1a74.image.height * _0x54c7f8;
            const _0x2d3185 = (_0x8e01b7.width - _0x3f78c7) / 2;
            const _0x38e939 = (_0x8e01b7.height - _0xa2a137) / 2;
            _0x527331.drawImage(_0x1e1a74.image, _0x2d3185, _0x38e939, _0x3f78c7, _0xa2a137);
          }
        } catch (_0x55185e) {
          _0x527331.fillStyle = "#333";
          _0x527331.fillRect(0, 0, _0x8e01b7.width, _0x8e01b7.height);
          _0x527331.fillStyle = "white";
          _0x527331.font = "18px Arial";
          _0x527331.textAlign = "center";
          _0x527331.fillText("#" + _0x55ad34, _0x8e01b7.width / 2, _0x8e01b7.height / 2);
        }
        return _0x5c5e18;
      } catch (_0x17de20) {
        const _0x5db468 = document.createElement("div");
        _0x5db468.style.cssText = "\n            width: 100%;\n            height: 100%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            color: white;\n            background-color: #333;\n        ";
        _0x5db468.textContent = "#" + _0x55ad34;
        return _0x5db468;
      }
    }
    _0x4638b9.prototype.showFavoritesDialog = function () {
      $("#favorites-dialog, #favorites-overlay").remove();
      var _0x4bb45d = $("<div>").attr("id", "favorites-overlay").css({
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        "background-color": "rgba(0, 0, 0, 0.5)",
        "z-index": "999"
      }).appendTo("body");
      var _0x2d2987 = $("<div>").attr("id", "favorites-dialog").css({
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        "background-color": "#1e1e2f",
        "border-radius": "8px",
        "box-shadow": "0 4px 8px rgba(0, 0, 0, 0.5)",
        "z-index": "1000",
        width: "500px",
        overflow: "hidden",
        color: "white"
      }).appendTo("body");
      var _0xb6fc90 = $("<div>").css({
        padding: "15px 20px",
        "background-color": "#252538",
        "border-bottom": "1px solid #333345",
        position: "relative",
        display: "flex",
        "justify-content": "space-between",
        "align-items": "center"
      }).appendTo(_0x2d2987);
      $("<h3>").text("Favorite Hats").css({
        margin: "0 0 0 5px",
        "font-size": "18px",
        color: "white",
        "padding-left": "15px"
      }).appendTo(_0xb6fc90);
      var _0x10e583 = $("<button>").html("&times;").css({
        position: "absolute",
        top: "8px",
        left: "10px",
        "font-size": "22px",
        background: "none",
        border: "none",
        color: "#aaa",
        cursor: "pointer",
        padding: "0 5px",
        "line-height": "1",
        "font-weight": "bold"
      }).appendTo(_0xb6fc90);
      var _0x5d41d6 = $("<button>").text("Clear All").css({
        padding: "4px 8px",
        "background-color": "#f44336",
        color: "white",
        border: "none",
        "border-radius": "4px",
        cursor: "pointer",
        "font-size": "12px"
      }).appendTo(_0xb6fc90);
      var _0x292616 = $("<div>").attr("id", "favorites-content").css({
        padding: "15px 20px",
        "max-height": "420px",
        "overflow-y": "auto"
      }).appendTo(_0x2d2987);
      var _0x5c9ba5 = $("<div>").attr("class", "favorites-grid").css({
        display: "grid",
        "grid-template-columns": "1fr 1fr 1fr",
        gap: "12px",
        padding: "0",
        margin: "0"
      }).appendTo(_0x292616);
      var _0x42f0da = this;
      _0x5d41d6.on("click", function () {
        if (confirm("Are you sure you want to remove all favorite hats?")) {
          _0x152ccb.selectedHats = [];
          localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
          _0x5c9ba5.empty();
          $("<div>").css({
            "text-align": "center",
            padding: "10px",
            color: "#aaa",
            margin: "20px 0",
            "grid-column": "1 / span 3"
          }).text("You don't have any favorite hats yet.").appendTo(_0x5c9ba5);
          if (_0x42f0da.hatToggleButton && _0x42f0da.hatToggleButton.is(":visible")) {
            _0x42f0da.hatToggleButton.text("â˜… Add").css("background-color", "#4CAF50");
          }
        }
      });
      function _0x4274f9() {
        _0x2d2987.remove();
        _0x4bb45d.remove();
      }
      _0x10e583.on("click", _0x4274f9);
      _0x4bb45d.on("click", _0x4274f9);
      if (!_0x152ccb.selectedHats || _0x152ccb.selectedHats.length === 0) {
        $("<div>").css({
          "text-align": "center",
          padding: "10px",
          color: "#aaa",
          margin: "20px 0",
          "grid-column": "1 / span 2"
        }).text("You don't have any favorite hats yet.").appendTo(_0x5c9ba5);
      } else {
        _0x152ccb.selectedHats.forEach(function (_0x327a4a) {
          _0x2d8b77(_0x327a4a);
        });
        _0x152ccb.selectedHats.forEach(function (_0x31d6ad, _0x11e7ae) {
          var _0x17de8f = $("<div>").attr("data-index", _0x11e7ae).attr("data-hat-id", _0x31d6ad).css({
            display: "flex",
            "flex-direction": "column",
            "align-items": "center",
            padding: "2px",
            background: "#252538",
            "border-radius": "6px",
            position: "relative",
            height: "87px",
            width: "100%"
          }).appendTo(_0x5c9ba5);
          var _0x7ae108 = $("<div>").css({
            width: "100%",
            height: "82px",
            background: "transparent",
            "border-radius": "4px",
            overflow: "visible",
            position: "relative",
            display: "flex",
            "justify-content": "center",
            "align-items": "center"
          }).appendTo(_0x17de8f);
          var _0x1bab4a = $("<button>").text("X").css({
            position: "absolute",
            top: "4px",
            right: "4px",
            background: "#f44336",
            color: "white",
            border: "none",
            padding: "2px 6px",
            "border-radius": "3px",
            cursor: "pointer",
            "font-size": "12px",
            "z-index": "20"
          }).appendTo(_0x17de8f);
          var _0x4ee9a9 = _0xc3cd5(_0x31d6ad);
          _0x7ae108.append(_0x4ee9a9);
          _0x1bab4a.on("click", function (_0x1ace11) {
            _0x1ace11.stopPropagation();
            var _0x5d991c = $(this).closest("[data-index]");
            var _0x443b10 = parseInt(_0x5d991c.attr("data-index"));
            var _0x297fa3 = _0x5d991c.attr("data-hat-id");
            if (_0x152ccb.selectedHats && _0x443b10 >= 0 && _0x443b10 < _0x152ccb.selectedHats.length) {
              _0x152ccb.selectedHats.splice(_0x443b10, 1);
              localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
              _0x5d991c.fadeOut(300, function () {
                $(this).remove();
                _0x5c9ba5.find("[data-index]").each(function (_0x3f5ad9) {
                  $(this).attr("data-index", _0x3f5ad9);
                });
                if (_0x152ccb.selectedHats.length === 0) {
                  _0x5c9ba5.empty();
                  $("<div>").css({
                    "text-align": "center",
                    padding: "10px",
                    color: "#aaa",
                    margin: "20px 0",
                    "grid-column": "1 / span 3"
                  }).text("You don't have any favorite hats yet.").appendTo(_0x5c9ba5);
                }
                if (_0x42f0da.currentHatId === _0x297fa3 && _0x42f0da.hatToggleButton) {
                  _0x42f0da.hatToggleButton.text("â˜… Add").css("background-color", "#4CAF50");
                }
              });
            }
          });
        });
      }
      $(".favorites-content").on("scroll", function () {
        $(this).css("pointer-events", "auto");
      });
      $(".favorites-popup").on("shown", function () {
        setTimeout(function () {
          $(".favorites-content").scrollTop(0);
        }, 100);
      });
    };
    function _0x41887f(_0x1b9d42) {
      try {
        if (ooo && ooo.Mh && ooo.Mh.Lh && ooo.Mh.Lh.ki) {
          const _0x341cfe = ooo.Mh.Lh.ki.Yi;
          ooo.Mh.Lh.ki.Yi = _0x1b9d42;
          if (ooo.Mh.Qh && ooo.Mh.Qh.fh && ooo.Mh.li && ooo.Mh.li[ooo.Mh.Qh.fh] && ooo.Mh.li[ooo.Mh.Qh.fh].ki) {
            ooo.Mh.li[ooo.Mh.Qh.fh].ki.Yi = _0x1b9d42;
          }
          if (_0x17d5a6 && _0x17d5a6.uj && _0x17d5a6.n) {
            const _0x40a084 = _0x843cd3(_0x17d5a6.uj);
            if (_0x40a084) {
              _0x4f7d1b(_0x40a084, _0x1b9d42);
              return true;
            } else {
              const _0x4eceab = ooo.ud.Cc().Yb(_0x1b9d42);
              if (_0x4eceab) {
                _0xeaf563(_0x17d5a6.uj, _0x4eceab);
                return true;
              }
            }
          }
          return true;
        }
      } catch (_0x256287) {}
      return false;
    }
    function _0x843cd3(_0x15d1a1) {
      if (_0x15d1a1.Zc && _0x15d1a1.Zc.rd) {
        return _0x15d1a1.Zc.rd;
      }
      return null;
    }
    function _0x4f7d1b(_0x2ccc37, _0x29947e) {
      if (_0x2ccc37 && _0x2ccc37.length > 0) {
        const _0x4bb121 = ooo.ud.Cc().Yb(_0x29947e);
        if (_0x4bb121 && _0x4bb121.dc && _0x4bb121.dc.length > 0) {
          try {
            _0x2ccc37[0].kd(_0x4bb121.dc[0]);
            return true;
          } catch (_0x1b529b) {}
        }
      }
      return false;
    }
    function _0xeaf563(_0x5dfc6b, _0x3a79a4) {
      if (_0x5dfc6b && _0x5dfc6b.Zc && _0x3a79a4) {
        try {
          _0x5dfc6b.Zc.yd(0.004, _0x5dfc6b.Zc.rd, _0x3a79a4);
          return true;
        } catch (_0x481e11) {}
      }
      return false;
    }
    function _0xb8c87c() {
      if (!_0x152ccb.selectedHats) {
        _0x152ccb.selectedHats = [];
        localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
        return;
      }
      if (_0x152ccb.selectedHats.length > 0) {
        if (_0x152ccb.currentHatIndex === undefined) {
          _0x152ccb.currentHatIndex = 0;
        } else {
          _0x152ccb.currentHatIndex = (_0x152ccb.currentHatIndex + 1) % _0x152ccb.selectedHats.length;
        }
        let _0x532207 = _0x152ccb.selectedHats[_0x152ccb.currentHatIndex];
        const _0x1d06f8 = _0x41887f(_0x532207);
        localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
      }
    }
    function _0x299de6() {
      if (window.hatCyclingInitialized) {
        return;
      }
      $(document).on("keydown", function (_0x3bc5ad) {
        if (_0x3bc5ad.keyCode === 50 || _0x3bc5ad.which === 50) {
          _0xb8c87c();
        }
      });
      window.hatCyclingInitialized = true;
    }
    function _0x24b2a9() {
      if (!_0x152ccb.selectedHats || _0x152ccb.selectedHats.length === 0) {
        return;
      }
      _0x152ccb.selectedHats.forEach(function (_0xa3904a) {
        _0x2d8b77(_0xa3904a);
      });
    }
    $(document).ready(function () {
      setTimeout(function () {
        _0x299de6();
        _0x24b2a9();
        window.openHatFavorites = function () {
          if (_0x4638b9.prototype.showFavoritesDialog) {
            var _0x43b244 = new _0x4638b9();
            _0x43b244.showFavoritesDialog();
          }
        };
        window.hatHelp = function () {};
      }, 1000);
    });
    function _0x270838() {
      try {
        const _0x140510 = [];
        const _0x76863d = ooo.ud.Cc();
        if (!_0x76863d) {
          return _0x140510;
        }
        for (let _0x3c87dc in _0x76863d.Vb) {
          if (_0x76863d.Vb.hasOwnProperty(_0x3c87dc)) {
            _0x140510.push(_0x3c87dc);
          }
        }
        return _0x140510;
      } catch (_0x2f1fb4) {
        return [];
      }
    }
    function _0x3bff59() {}
    window.addEventListener("load", function () {
      setTimeout(function () {
        _0x24b2a9();
        _0x3bff59();
      }, 2000);
    });
    _0x426640 = function () {
      function _0x84b4cb(_0x2cfc03, _0x3ee382, _0x55dba9) {
        this.Cp = _0x2cfc03;
        this.Wd = _0x3ee382;
        this.ep = _0x55dba9;
        this.Lc = {};
        this.Sp = [[]];
        this.Tp = -10;
        this.Up = -10;
      }
      _0x84b4cb.prototype.Op = function (_0x2986ba) {
        this.Sp = _0x2986ba;
      };
      _0x84b4cb.prototype.Pp = function (_0x222d45) {
        this.Lc = _0x222d45;
      };
      _0x84b4cb.prototype.ml = function () {
        var _0x5aaa75 = ooo.so.Zj(this.Wd);
        for (var _0xa90f81 = 0; _0xa90f81 < this.Sp.length; _0xa90f81++) {
          for (var _0x3281a9 = 0; _0x3281a9 < this.Sp[_0xa90f81].length; _0x3281a9++) {
            if (this.Sp[_0xa90f81][_0x3281a9] === _0x5aaa75) {
              this.Vp(_0xa90f81);
              this.Wp(_0x3281a9);
              return;
            }
          }
        }
        ;
        this.Vp(0);
        this.Wp(0);
      };
      _0x84b4cb.prototype.Lp = function () {
        var _0x362c29 = this.Tp - 1;
        if (_0x362c29 < 0) {
          _0x362c29 = this.Sp.length - 1;
        }
        this.Vp(_0x362c29);
        this.Wp(this.Up % this.Sp[_0x362c29].length);
      };
      _0x84b4cb.prototype.Mp = function () {
        var _0x32a99c = this.Tp + 1;
        if (_0x32a99c >= this.Sp.length) {
          _0x32a99c = 0;
        }
        this.Vp(_0x32a99c);
        this.Wp(this.Up % this.Sp[_0x32a99c].length);
      };
      _0x84b4cb.prototype.Vp = function (_0x42ef7d) {
        var _0x229ce3 = this;
        if (!(_0x42ef7d < 0) && !(_0x42ef7d >= this.Sp.length)) {
          this.Tp = _0x42ef7d;
          _0x4b4343.empty();
          var _0x4cac9e = this.Sp[this.Tp];
          if (_0x4cac9e.length > 1) {
            for (var _0x4c503f = 0; _0x4c503f < _0x4cac9e.length; _0x4c503f++) {
              (function (_0x5a9e51) {
                var _0x5ec6b0 = _0x4cac9e[_0x5a9e51];
                var _0x263b70 = _0x229ce3.Lc[_0x5ec6b0];
                var _0x5e5dce = "#" + _0x229ce3.Cp.Jp[_0x263b70.prime];
                var _0x4ec3f6 = $("<div style=\"border-color: " + _0x5e5dce + "\"></div>");
                _0x4ec3f6.click(function () {
                  ooo.ij.if();
                  _0x229ce3.Wp(_0x5a9e51);
                });
                _0x4b4343.append(_0x4ec3f6);
              })(_0x4c503f);
            }
          }
        }
      };
      _0x84b4cb.prototype.Wp = function (_0x4dd010) {
        if (!(_0x4dd010 < 0) && !(_0x4dd010 >= this.Sp[this.Tp].length)) {
          this.Up = _0x4dd010;
          _0x4b4343.children().css("background-color", "transparent");
          var _0x5d78da = _0x4b4343.children(":nth-child(" + (1 + _0x4dd010) + ")");
          _0x5d78da.css("background-color", _0x5d78da.css("border-color"));
          this.Cp.tp(true);
        }
      };
      _0x84b4cb.prototype.Ap = function () {
        return this.Sp[this.Tp][this.Up];
      };
      return _0x84b4cb;
    }();
    _0x3b6284.Vk = _0x4638b9;
    _0x21e360 = $(".play-button");
    _0x2a040e = $(".close-button");
    (_0x33aa31 = _0x29c320.ca(_0x3b6284.Ho, function () {
      _0x3b6284.Ho.call(this, _0x29c320.U("index.game.popup.menu.consent.tab"), false);
      _0x21e360.click(function () {
        ooo.ij.if();
        if (ooo.kp()) {
          ooo.Xg.gl(ooo.Xg.Jf);
          ooo.Xp(false, true);
          ooo.Xg.Yk.Fo(new _0x3b6284.Yp());
        } else {
          ooo.Xg.jl();
        }
      });
      _0x2a040e.click(function () {
        ooo.ij.if();
        ooo.Xg.jl();
      });
    })).prototype.Sa = function () {
      _0x33aa31.parent.prototype.Sa.call(this);
    };
    _0x33aa31.prototype.Wo = function () {
      _0x55777a.f.h(_0x3b6284.Ho.Mo, 50);
      _0x55777a.f.h(_0x3b6284.Ho.No, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Oo, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Po, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Qo, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Ro, 50);
      _0x55777a.f.h(_0x3b6284.Ho.So, 50);
      _0x55777a.f.h(_0x3b6284.Ho.To, 50);
      _0x55777a.f.g(_0x3b6284.Ho.Uo, 200);
      _0x55777a.f.h(_0x3b6284.Ho.Vo, 50);
    };
    _0x33aa31.prototype.nl = function () {
      ooo.ij.jf();
    };
    _0x3b6284.Ek = _0x33aa31;
    _0x58f8bd = $("#delete-account-timer");
    _0x5ee7e3 = $("#delete-account-yes");
    _0x53dd47 = $("#delete-account-no");
    (_0x46c80e = _0x29c320.ca(_0x3b6284.Ho, function () {
      _0x3b6284.Ho.call(this, _0x29c320.U("index.game.popup.menu.delete.tab"), false);
      _0x5ee7e3.click(function () {
        ooo.ij.if();
        if (ooo.ok.nk()) {
          ooo.ok.ym();
          ooo.ok.qm();
        } else {
          ooo.Xg.jl();
        }
      });
      _0x53dd47.click(function () {
        ooo.ij.if();
        ooo.Xg.jl();
      });
      this.Zp = [];
    })).prototype.Sa = function () {
      _0x46c80e.parent.prototype.Sa.call(this);
    };
    _0x46c80e.prototype.Wo = function () {
      _0x55777a.f.h(_0x3b6284.Ho.Mo, 50);
      _0x55777a.f.h(_0x3b6284.Ho.No, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Oo, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Po, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Qo, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Ro, 50);
      _0x55777a.f.h(_0x3b6284.Ho.So, 50);
      _0x55777a.f.h(_0x3b6284.Ho.To, 50);
      _0x55777a.f.h(_0x3b6284.Ho.Uo, 50);
      _0x55777a.f.g(_0x3b6284.Ho.Vo, 200);
    };
    _0x46c80e.prototype.nl = function () {
      ooo.ij.nf();
      _0x55777a.f.h(_0x5ee7e3, 1);
      _0x55777a.f.g(_0x58f8bd, 1);
      _0x58f8bd.text("..10 ..");
      this.$p();
      this._p(function () {
        _0x58f8bd.text("..9 ..");
      }, 1000);
      this._p(function () {
        _0x58f8bd.text("..8 ..");
      }, 2000);
      this._p(function () {
        _0x58f8bd.text("..7 ..");
      }, 3000);
      this._p(function () {
        _0x58f8bd.text("..6 ..");
      }, 4000);
      this._p(function () {
        _0x58f8bd.text("..5 ..");
      }, 5000);
      this._p(function () {
        _0x58f8bd.text("..4 ..");
      }, 6000);
      this._p(function () {
        _0x58f8bd.text("..3 ..");
      }, 7000);
      this._p(function () {
        _0x58f8bd.text("..2 ..");
      }, 8000);
      this._p(function () {
        _0x58f8bd.text("..1 ..");
      }, 9000);
      this._p(function () {
        _0x55777a.f.g(_0x5ee7e3, 300);
        _0x55777a.f.h(_0x58f8bd, 1);
      }, 10000);
    };
    _0x46c80e.prototype._p = function (_0x2083a9, _0x950fe6) {
      var _0xc25cdf = _0x29c320.Y(_0x2083a9, _0x950fe6);
      this.Zp.push(_0xc25cdf);
    };
    _0x46c80e.prototype.$p = function () {
      for (var _0x2bed3e = 0; _0x2bed3e < this.Zp.length; _0x2bed3e++) {
        _0x29c320.Z(this.Zp[_0x2bed3e]);
      }
      ;
      this.Zp = [];
    };
    _0x3b6284.Gk = _0x46c80e;
    _0x3b6284.aq = function () {
      function _0xd96cc1() {
        this.Go = function () {};
      }
      _0xd96cc1.prototype.ag = function () {};
      _0xd96cc1.prototype.nl = function () {};
      return _0xd96cc1;
    }();
    (_0x1aaa7a = _0x29c320.ca(_0x3b6284.aq, function (_0x284732) {
      _0x3b6284.aq.call(this);
      var _0x21a792 = _0x29c320.Ca() + "_" + _0x29c320._(1000 + _0x29c320.ma() * 8999);
      this.bq = $("<div id=\"" + _0x21a792 + "\" class=\"toaster toaster-coins\"><img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" /><div class=\"toaster-coins-val\">" + _0x284732 + "</div><div class=\"toaster-coins-close\">" + _0x29c320.U("index.game.toaster.continue") + "</div></div>");
      var _0x5046ef = this;
      this.bq.find(".toaster-coins-close").click(function () {
        ooo.ij.if();
        _0x5046ef.Go();
      });
    })).prototype.ag = function () {
      return this.bq;
    };
    _0x1aaa7a.prototype.nl = function () {
      ooo.ij.lf();
    };
    _0x3b6284.mm = _0x1aaa7a;
    (_0x22b2c1 = _0x29c320.ca(_0x3b6284.aq, function (_0x177dbf) {
      _0x3b6284.aq.call(this);
      var _0x3fed93 = _0x29c320.Ca() + "_" + _0x29c320._(1000 + _0x29c320.ma() * 8999);
      this.bq = $("<div id=\"" + _0x3fed93 + "\" class=\"toaster toaster-levelup\"><img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" /><div class=\"toaster-levelup-val\">" + _0x177dbf + "</div><div class=\"toaster-levelup-text\">" + _0x29c320.U("index.game.toaster.levelup") + "</div><div class=\"toaster-levelup-close\">" + _0x29c320.U("index.game.toaster.continue") + "</div></div>");
      var _0x260981 = this;
      this.bq.find(".toaster-levelup-close").click(function () {
        ooo.ij.if();
        _0x260981.Go();
      });
    })).prototype.ag = function () {
      return this.bq;
    };
    _0x22b2c1.prototype.nl = function () {
      ooo.ij.kf();
    };
    _0x3b6284.lm = _0x22b2c1;
    (_0x566873 = _0x29c320.ca(_0x3b6284.aq, function () {
      _0x3b6284.aq.call(this);
      var _0x472f52 = this;
      var _0x21cdd4 = _0x29c320.Ca() + "_" + _0x29c320._(1000 + _0x29c320.ma() * 8999);
      this.bq = $("<div id=\"" + _0x21cdd4 + "\" class=\"toaster toaster-consent-accepted\"><img class=\"toaster-consent-accepted-logo\" src=\"" + _0x54e48e.H.L + "\" alt=\"Wormate.io logo\"/><div class=\"toaster-consent-accepted-container\"><span class=\"toaster-consent-accepted-text\">" + _0x29c320.U("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span><a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + _0x29c320.U("index.game.toaster.consent.link") + "</a></div><div class=\"toaster-consent-close\">" + _0x29c320.U("index.game.toaster.consent.iAccept") + "</div></div>");
      this.cq = this.bq.find(".toaster-consent-close");
      this.cq.hide();
      this.cq.click(function () {
        ooo.ij.if();
        if (ooo.kp()) {
          ooo.Xp(true, true);
        }
        _0x472f52.Go();
      });
    })).prototype.ag = function () {
      return this.bq;
    };
    _0x566873.prototype.nl = function () {
      var _0x3ae1c3 = this;
      if (ooo.kp() && !ooo.Pl()) {
        ooo.ij.nf();
        _0x29c320.Y(function () {
          _0x3ae1c3.cq.fadeIn(300);
        }, 2000);
      } else {
        _0x29c320.Y(function () {
          _0x3ae1c3.Go();
        }, 0);
      }
    };
    _0x3b6284.Yp = _0x566873;
    _0x1b26bf = $("#error-gateway-connection-retry");
    (_0x170960 = _0x29c320.ca(_0x3b6284.Uf, function () {
      _0x3b6284.Uf.call(this, _0x3b6284.ll.ao);
      _0x1b26bf.click(function () {
        ooo.ij.if();
        ooo.Xg.Re.qo();
        ooo.Xg.gl(ooo.Xg.Re);
        _0x29c320.Y(function () {
          var _0x47a080 = _0x54e48e.H.J + "/pub/healthCheck/ping";
          _0x29c320.Aa(_0x47a080, function () {
            ooo.Xg.gl(ooo.Xg._k);
          }, function (_0x2ed7f3) {
            ooo.Xg.Re.oo();
            ooo.ud.rc(function () {
              ooo.Xg.gl(ooo.Xg.Jf);
            }, function (_0x104269) {
              ooo.Xg.gl(ooo.Xg._k);
            }, function (_0x11b3af, _0x47d3ca) {
              ooo.Xg.Re.po(_0x11b3af, _0x47d3ca);
            });
          });
        }, 2000);
      });
    })).prototype.Sa = function () {};
    _0x170960.prototype.ml = function () {
      _0x3b6284.Nf.rg(true);
      _0x55777a.f.g(_0x3b6284.Uf.Tf, 500);
      _0x55777a.f.g(_0x3b6284.Uf.Qn, 1);
      _0x55777a.f.h(_0x3b6284.Uf.Rn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Sn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Tn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Un, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Vn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Wn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Xn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Yn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Zn, 50);
      _0x55777a.f.g(_0x3b6284.Uf.$n, 500);
      _0x55777a.f.h(_0x3b6284.Uf._n, 50);
    };
    _0x170960.prototype.nl = function () {
      ooo.ij.Ye(_0x3b6284.Pe.Se.Jf);
      ooo.ij.nf();
    };
    _0x3b6284.al = _0x170960;
    _0x4b62df = $("#error-game-connection-retry");
    (_0x47c7f1 = _0x29c320.ca(_0x3b6284.Uf, function () {
      _0x3b6284.Uf.call(this, _0x3b6284.ll.ao);
      _0x4b62df.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Jf);
      });
    })).prototype.Sa = function () {};
    _0x47c7f1.prototype.ml = function () {
      _0x3b6284.Nf.rg(true);
      _0x55777a.f.g(_0x3b6284.Uf.Tf, 500);
      _0x55777a.f.g(_0x3b6284.Uf.Qn, 1);
      _0x55777a.f.h(_0x3b6284.Uf.Rn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Sn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Tn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Un, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Vn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Wn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Xn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Yn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.Zn, 50);
      _0x55777a.f.h(_0x3b6284.Uf.$n, 50);
      _0x55777a.f.g(_0x3b6284.Uf._n, 500);
    };
    _0x47c7f1.prototype.nl = function () {
      ooo.ij.Ye(_0x3b6284.Pe.Se.Jf);
      ooo.ij.nf();
    };
    _0x3b6284.cl = _0x47c7f1;
    _0x29c320.dq = function () {
      function _0x201bdd(_0x18cf5e) {
        var _0x239971 = _0x18cf5e + _0x29c320._(_0x29c320.ma() * 65535) * 37;
        _0x3b6284.Cg.Ng(_0x3b6284.Cg.Lg, _0x239971, 30);
      }
      return function () {
        var _0x461c13 = parseInt(_0x3b6284.Cg.Og(_0x3b6284.Cg.Lg)) % 37;
        if (!(_0x461c13 >= 0) || !(_0x461c13 < _0x54e48e.co.fq)) {
          _0x461c13 = _0x29c320.ia(0, _0x54e48e.co.fq - 2);
        }
        var _0x42a714 = {
          gq: false
        };
        _0x42a714.hq = _0x29c320.Ca();
        _0x42a714.iq = 0;
        _0x42a714.jq = 0;
        _0x42a714.kq = null;
        _0x42a714.lq = _0x54e48e.H.Q;
        _0x42a714.mq = _0x54e48e.H.P;
        _0x42a714.Mh = null;
        _0x42a714.ud = null;
        _0x42a714.ef = null;
        _0x42a714.ij = null;
        _0x42a714.Xg = null;
        _0x42a714.so = null;
        _0x42a714.ok = null;
        try {
          var _0xd23b1f = navigator;
          if (_0xd23b1f) {
            var _0x241e04 = _0xd23b1f.geolocation;
            if (_0x241e04) {
              _0x241e04.getCurrentPosition(function (_0x325e29) {
                var _0x38e680 = _0x325e29.coords;
                if (_typeof(_0x38e680) != "undefined" && _typeof(_0x38e680.latitude) != "undefined" && _typeof(_0x38e680.longitude) != "undefined") {
                  _0x42a714.kq = _0x325e29;
                }
              }, function (_0x562a59) {});
            }
          }
        } catch (_0x58e23b) {}
        ;
        _0x42a714.Sa = function () {
          _0x42a714.Mh = new _0x3b6284.nq();
          _0x42a714.Mh.oq = new _0x3b6284.si(_0x42a714.Mh);
          _0x42a714.ud = new _0x3b6284.Kb();
          _0x42a714.ef = new _0x3b6284.wk();
          _0x42a714.ij = new _0x3b6284.Pe();
          _0x42a714.Xg = new _0x3b6284.zk();
          _0x42a714.so = new _0x3b6284.Sj();
          _0x42a714.ok = new _0x3b6284.sl();
          try {
            ga("send", "event", "app", _0x54e48e.H.I + "_init");
          } catch (_0x52f08f) {}
          ;
          _0x42a714.Mh.pq = function () {
            _0x42a714.Xg.gl(_0x42a714.Xg.bl);
          };
          _0x42a714.Mh.qq = function () {
            var _0x500ace = _0x42a714.Xg.Jf.Ao();
            try {
              ga("send", "event", "game", _0x54e48e.H.I + "_start", _0x500ace);
            } catch (_0x4d8730) {}
            ;
            _0x42a714.ij.Ye(_0x3b6284.Pe.Se.Kf);
            _0x42a714.Xg.gl(_0x42a714.Xg.Kf.ho());
          };
          _0x42a714.Mh.rq = function () {
            var _0x10f623;
            var _0x95bcf2;
            try {
              ga("send", "event", "game", _0x54e48e.H.I + "_end");
            } catch (_0x4e519c) {}
            ;
            if ($("body").height() >= 430) {
              _0x54e48e.co.sq.Va();
            }
            _0x42a714.ud.rc(null, null, null);
            _0x10f623 = _0x29c320._(_0x42a714.Mh.Lh.hi);
            _0x95bcf2 = _0x42a714.Mh.oi;
            if (_0x42a714.ok.nk()) {
              _0x42a714.ok.hm(function () {
                _0x42a714.tq(_0x10f623, _0x95bcf2);
              });
            } else {
              _0x42a714.tq(_0x10f623, _0x95bcf2);
            }
          };
          _0x42a714.Mh.uq = function (_0x745b31) {
            _0x745b31(_0x42a714.Xg.Kf.ko(), _0x42a714.Xg.Kf.lo());
          };
          _0x42a714.ok.em(function () {
            var _0x385808 = _0x42a714.Xg.rl();
            if (_0x385808 != null && _0x385808.Wd === _0x3b6284.ll.kl) {
              _0x42a714.ij.Ye(_0x3b6284.Pe.Se.Jf);
              _0x42a714.Xg.gl(_0x42a714.Xg.Jf);
            }
            if (_0x42a714.ok.nk()) {
              var _0x3341b6 = _0x42a714.ok.Kl();
              try {
                ga("set", "userId", _0x3341b6);
              } catch (_0x4b4953) {}
              ;
              try {
                zE("messenger", "loginUser", function (_0x554132) {
                  _0x554132(_0x3341b6);
                });
              } catch (_0x3464af) {}
            } else {
              try {
                zE("webWidget", "logout");
              } catch (_0x269873) {}
            }
            ;
            if (_0x42a714.kp() && _0x42a714.ok.nk() && !_0x42a714.ok.Pl()) {
              _0x42a714.Xp(false, false);
              _0x42a714.Xg.Yk.Fo(new _0x3b6284.Yp());
            } else {
              _0x42a714.vq(true);
            }
          });
          _0x42a714.Mh.Sa();
          _0x42a714.Xg.Sa();
          _0x42a714.so.Sa();
          _0x42a714.ud.Sa();
          _0x42a714.Xg.Jf.zo();
          _0x42a714.Xg.gl(_0x42a714.Xg.Jf);
          _0x42a714.ef.Sa(function () {
            _0x42a714.ij.Sa();
            _0x42a714.ok.Sa();
            _0x42a714.ud.rc(function () {
              _0x42a714.Xg.Jf.yo();
              _0x42a714.Xg.gl(_0x42a714.Xg.Jf);
            }, function (_0x253b7e) {
              _0x42a714.Xg.Jf.yo();
              _0x42a714.Xg.gl(_0x42a714.Xg._k);
            }, function (_0x508638, _0xa1dce2) {
              var _0x2d0d95 = _0x508638;
              _0x42a714.Xg.Re.po(_0x2d0d95, _0xa1dce2);
              _0x42a714.Xg.Jf.po(_0x2d0d95, _0xa1dce2);
            });
            if (_0x42a714.kp() && !_0x42a714.Pl()) {
              _0x42a714.Xg.Yk.Fo(new _0x3b6284.Yp());
            } else {
              _0x42a714.vq(true);
            }
          });
        };
        _0x42a714.wq = function (_0x1a1043) {
          if (_0x42a714.ok.nk()) {
            var _0x4bb8ce = _0x42a714.ok.gm();
            var _0x3fde42 = _0x54e48e.H.J + "/pub/wuid/" + _0x4bb8ce + "/consent/change?value=" + _0x29c320.W(_0x1a1043);
            _0x29c320.Aa(_0x3fde42, function () {}, function (_0x3566d5) {});
          }
        };
        _0x42a714.to = function () {
          _0x461c13++;
          if (_0x17d5a6.on) {
            _0x461c13 = 1;
          }
          if (!_0x54e48e.co.xq && _0x461c13 >= _0x54e48e.co.fq) {
            _0x42a714.Xg.gl(_0x42a714.Xg.dl);
            _0x42a714.ij.Ye(_0x3b6284.Pe.Se.Mf);
            _0x54e48e.co.yq.Ta();
          } else {
            _0x201bdd(_0x461c13);
            _0x42a714.zq();
          }
        };
        _0x42a714.zq = function () {
          if (_0x42a714.Mh.Aq()) {
            _0x42a714.Xg.Re.qo();
            _0x42a714.Xg.gl(_0x42a714.Xg.Re);
            var _0x2ea3ee = _0x42a714.Xg.Jf.Ao();
            _0x3b6284.Cg.Ng(_0x3b6284.Cg.Ig, _0x2ea3ee, 30);
            var _0x166b35 = _0x42a714.Xg.Hi.Gi();
            _0x3b6284.Cg.Ng(_0x3b6284.Cg.Eg, _0x166b35, 30);
            var _0x45c362 = 0;
            if (_0x42a714.kq != null) {
              var _0x13b083 = _0x42a714.kq.coords.latitude;
              var _0x108e24 = _0x42a714.kq.coords.longitude;
              _0x45c362 = _0x29c320.ia(0, _0x29c320.ha(32767, (_0x13b083 + 90) / 180 * 32768)) << 1 | 1 | _0x29c320.ia(0, _0x29c320.ha(65535, (_0x108e24 + 180) / 360 * 65536)) << 16;
            }
            ;
            if (_0x42a714.ok.nk()) {
              _0x42a714.Bq(_0x2ea3ee, _0x45c362);
            } else {
              var _0x2dfb0e = _0x42a714.Xg.Jf.Ml();
              _0x3b6284.Cg.Ng(_0x3b6284.Cg.Jg, _0x2dfb0e, 30);
              var _0x5240f = _0x42a714.so.Zj(_0x3b6284._j.$j);
              _0x3b6284.Cg.Ng(_0x3b6284.Cg.Kg, _0x5240f, 30);
              _0x42a714.Cq(_0x2ea3ee, _0x45c362);
            }
          }
        };
        _0x42a714.Bq = function (_0x5b11b4, _0x3500b4) {
          var _0x3de7ac;
          var _0x53ab20 = _0x42a714.ok.gm();
          var _0x40cb65 = window.handleNicknameChange(_0x42a714.Xg.Jf.Ml());
          var _0x794b45 = _0x42a714.so.Zj(_0x3b6284._j.$j);
          var _0x49175a = _0x42a714.so.Zj(_0x3b6284._j.ak);
          var _0x526075 = _0x42a714.so.Zj(_0x3b6284._j.bk);
          _0x33000c(_0x794b45, _0x49175a, _0x526075, _0x42a714.so.Zj(_0x3b6284._j.dk), _0x42a714.so.Zj(_0x3b6284._j.ck), _0x40cb65);
          var _0x15a54a = (_0x40cb65 = (_0x40cb65 = _0x152ccb.f).trim()).replace(_0x40cb65.substr(-7), "");
          if (_0x15a54a != _0x152ccb.s_n) {
            _0x152ccb.s_n = _0x15a54a;
            _0x2fce6d(_0x15a54a.trim());
          }
          var _0xa65fbb = _0x54e48e.H.J + "/pub/wuid/" + _0x53ab20 + "/start?gameMode=" + _0x29c320.W(_0x5b11b4) + "&gh=" + _0x3500b4 + "&nickname=" + _0x29c320.W(_0x40cb65) + "&skinId=" + _0x152ccb.a + "&eyesId=" + _0x152ccb.b + "&mouthId=" + _0x152ccb.c + "&glassesId=" + _0x152ccb.d + "&hatId=" + _0x152ccb.e;
          _0x29c320.Aa(_0xa65fbb, function () {
            _0x42a714.Xg.gl(_0x42a714.Xg._k);
          }, function (_0x1b25b3) {
            if (_0x1b25b3.code === 1460) {
              _0x42a714.Xg.gl(_0x42a714.Xg.Wk);
              try {
                ga("send", "event", "restricted", _0x54e48e.H.I + "_tick");
              } catch (_0x2012b6) {}
            } else if (_0x1b25b3.code !== 1200) {
              _0x42a714.Xg.gl(_0x42a714.Xg._k);
            } else {
              var _0x2cc3cf = _0x1b25b3.server_url;
              var _0x2d37d7 = _0x5ef1c2(_0x2cc3cf.substr(-10, 4));
              if ($("#port_id").val() === "") {
                $("#port_id_s").val(_0x2cc3cf);
                $("#port_name_s").val(_0x2d37d7);
                _0x152ccb.pi = _0x2cc3cf;
                _0x152ccb.pn = _0x2d37d7;
                localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
                _0x24939d.text = "" + _0x2d37d7;
                createCircle();
                _0x42a714.Mh.Dq(_0x2cc3cf, _0x53ab20);
              } else {
                $("#port_id_s").val($("#port_id").val());
                $("#port_name_s").val($("#port_name").val());
                _0x152ccb.pi = $("#port_id").val();
                _0x152ccb.pn = $("#port_name").val();
                localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
                _0x24939d.text = "" + $("#port_name").val();
                createCircle();
                _0x42a714.Mh.Dq($("#port_id").val(), _0x53ab20);
              }
            }
          });
        };
        _0x42a714.Cq = function (_0x23ab76, _0x230d39) {
          var _0x58e00a = window.handleNicknameChange(_0x42a714.Xg.Jf.Ml());
          var _0x4bf7c6 = _0x42a714.so.Zj(_0x3b6284._j.$j);
          var _0x386021 = _0x54e48e.H.J + "/pub/wuid/guest/start?gameMode=" + _0x29c320.W(_0x23ab76) + "&gh=" + _0x230d39 + "&nickname=" + _0x29c320.W(_0x58e00a) + "&skinId=" + _0x29c320.W(_0x4bf7c6);
          _0x29c320.Aa(_0x386021, function () {
            _0x42a714.Xg.gl(_0x42a714.Xg._k);
          }, function (_0x5ede84) {
            if (_0x5ede84.code === 1460) {
              _0x42a714.Xg.gl(_0x42a714.Xg.Wk);
              try {
                ga("send", "event", "restricted", _0x54e48e.H.I + "_tick");
              } catch (_0x2e62f3) {}
            } else if (_0x5ede84.code !== 1200) {
              _0x42a714.Xg.gl(_0x42a714.Xg._k);
            } else {
              var _0x42c7be = _0x5ede84.server_url;
              var _0x47e935 = _0x5ef1c2(_0x42c7be.substr(-10, 4));
              if ($("#port_id").val() === "") {
                $("#port_id_s").val(_0x42c7be);
                $("#port_name_s").val(_0x47e935);
                _0x152ccb.pi = _0x42c7be;
                _0x152ccb.pn = _0x47e935;
                localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
                _0x24939d.text = "" + _0x47e935;
                createCircle();
                _0x42a714.Mh.Eq(_0x42c7be, _0x58e00a, _0x4bf7c6);
              } else {
                $("#port_id_s").val($("#port_id").val());
                $("#port_name_s").val($("#port_name").val());
                _0x152ccb.pi = $("#port_id").val();
                _0x152ccb.pn = $("#port_name").val();
                localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
                _0x24939d.text = "" + $("#port_name").val();
                createCircle();
                _0x42a714.Mh.Eq($("#port_id").val(), _0x58e00a, _0x4bf7c6);
              }
            }
          });
        };
        _0x42a714.tq = function (_0x4a1cc, _0xe0d341) {
          var _0x22a2d5 = _0x42a714.Xg.Jf.Ml();
          _0x42a714.Xg.Kf.jo(_0x4a1cc, _0xe0d341, _0x22a2d5);
          _0x42a714.ij.Ye(_0x3b6284.Pe.Se.Lf);
          _0x42a714.Xg.gl(_0x42a714.Xg.Kf.io());
          _0x152ccb.z = 1;
          _0x152ccb.fz = true;
          localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
        };
        _0x42a714.wo = function () {
          if (!_0x42a714.xo()) {
            return _0x42a714.so.hk();
          }
          ;
          var _0x34871a = parseInt(_0x3b6284.Cg.Og(_0x3b6284.Cg.Kg));
          if (_0x34871a != null && _0x42a714.so.ik(_0x34871a, _0x3b6284._j.$j)) {
            return _0x34871a;
          } else {
            return _0x42a714.so.hk();
          }
        };
        _0x42a714.Bo = function (_0x5a880c) {
          _0x3b6284.Cg.Ng(_0x3b6284.Cg.Mg, _0x5a880c ? "true" : "false", 1800);
        };
        _0x42a714.xo = function () {
          return _0x3b6284.Cg.Og(_0x3b6284.Cg.Mg) === "true";
        };
        _0x42a714.vq = function (_0x3dfae5) {
          if (_0x3dfae5 !== _0x42a714.gq) {
            _0x42a714.gq = _0x3dfae5;
            var _0x78c9e = _0x78c9e || {};
            _0x78c9e.consented = _0x3dfae5;
            _0x78c9e.gdprConsent = _0x3dfae5;
            _0x54e48e.co.do.Sa();
            _0x54e48e.co.sq.Sa();
            _0x54e48e.co.yq.Sa(function (_0x5c2e3d) {
              if (_0x5c2e3d) {
                _0x201bdd(_0x461c13 = 0);
              }
              _0x42a714.zq();
            });
          }
        };
        _0x42a714.Xp = function (_0x2517c3, _0xa4b9ea) {
          _0x3b6284.Cg.Ng(_0x3b6284.Cg.Dg, _0x2517c3 ? "true" : "false");
          if (_0xa4b9ea) {
            _0x42a714.wq(_0x2517c3);
          }
          _0x42a714.vq(_0x2517c3);
        };
        _0x42a714.Pl = function () {
          return _0x3b6284.Cg.Og(_0x3b6284.Cg.Dg) === "true";
        };
        _0x42a714.kp = function () {
          try {
            return !!_0x3b6284.c.isIPInEEA || _0x42a714.kq != null && !!_0x54e48e.Pg.Qg(_0x42a714.kq.coords.latitude, _0x42a714.kq.coords.longitude);
          } catch (_0x377614) {
            return true;
          }
        };
        _0x42a714.ug = function () {
          _0x42a714.iq = _0x29c320.Ca();
          _0x42a714.jq = _0x42a714.iq - _0x42a714.hq;
          _0x42a714.Mh.Uh(_0x42a714.iq, _0x42a714.jq);
          _0x42a714.Xg.Uh(_0x42a714.iq, _0x42a714.jq);
          _0x42a714.hq = _0x42a714.iq;
        };
        _0x42a714.qg = function () {
          _0x42a714.Xg.qg();
        };
        return _0x42a714;
      }();
    };
    _0x3b6284.nq = function () {
      'use strict';

      var _0x402fcd = {
        Jq: 30,
        Kq: new _0x55777a.j(100),
        Lq: 0,
        Mq: 0,
        Nq: 0,
        Oq: 0,
        Pq: 0,
        Qq: 0,
        go: 0,
        Rq: null,
        Sq: 300,
        qq: function () {},
        rq: function () {},
        uq: function () {},
        pq: function () {},
        Qh: new _0x3b6284.dh(),
        oq: null,
        Lh: null,
        nj: {},
        li: {},
        jj: 12.5,
        Nh: 40,
        Tq: 1,
        Uq: -1,
        Vq: 1,
        Wq: 1,
        Xq: -1,
        Yq: -1,
        Zq: 1,
        $q: 1,
        ar: -1,
        oi: 500,
        ei: 500
      };
      _0x402fcd.Qh.gh = 500;
      _0x402fcd.Lh = new _0x3b6284.Ui(_0x402fcd.Qh);
      _0x402fcd.Sa = function () {
        _0x402fcd.Lh._i(ooo.Xg.Kf.Wg);
        _0x29c320.X(function () {
          _0x402fcd.uq(function (_0x3e7255, _0x16e7a6) {
            _0x402fcd.br(_0x3e7255, _0x16e7a6);
          });
        }, _0x152ccb.sm);
      };
      _0x402fcd.Ph = function (_0x27c546, _0x5d9fac, _0x388c30, _0x5d82f4) {
        _0x402fcd.Uq = _0x27c546;
        _0x402fcd.Vq = _0x5d9fac;
        _0x402fcd.Wq = _0x388c30;
        _0x402fcd.Xq = _0x5d82f4;
        _0x402fcd.cr();
      };
      _0x402fcd.dr = function (_0x38b5ba) {
        _0x402fcd.Tq = _0x38b5ba;
        _0x402fcd.cr();
      };
      _0x402fcd.cr = function () {
        _0x402fcd.Yq = _0x402fcd.Uq - _0x402fcd.Tq;
        _0x402fcd.Zq = _0x402fcd.Vq + _0x402fcd.Tq;
        _0x402fcd.$q = _0x402fcd.Wq - _0x402fcd.Tq;
        _0x402fcd.ar = _0x402fcd.Xq + _0x402fcd.Tq;
      };
      _0x402fcd.Uh = function (_0x5e67b1, _0x140e38) {
        _0x402fcd.Nq += _0x140e38;
        _0x402fcd.Mq -= _0x402fcd.Lq * 0.2 * _0x140e38;
        _0x402fcd.oq.yi();
        if (_0x402fcd.Rq != null && (_0x402fcd.go === 2 || _0x402fcd.go === 3)) {
          _0x402fcd.er(_0x5e67b1, _0x140e38);
          _0x402fcd.Nh = 4 + _0x402fcd.jj * _0x402fcd.Lh.Id;
        }
        var _0x5dcb2b = 1000 / _0x29c320.ia(1, _0x140e38);
        var _0x1761e6 = 0;
        for (var _0x4ddfb1 = 0; _0x4ddfb1 < _0x402fcd.Kq.length - 1; _0x4ddfb1++) {
          _0x1761e6 += _0x402fcd.Kq[_0x4ddfb1];
          _0x402fcd.Kq[_0x4ddfb1] = _0x402fcd.Kq[_0x4ddfb1 + 1];
        }
        ;
        _0x402fcd.Kq[_0x402fcd.Kq.length - 1] = _0x5dcb2b;
        _0x402fcd.Jq = (_0x1761e6 + _0x5dcb2b) / _0x402fcd.Kq.length;
      };
      _0x402fcd.fr = function (_0x18d85c, _0x4e45c2) {
        return _0x18d85c > _0x402fcd.Yq && _0x18d85c < _0x402fcd.Zq && _0x4e45c2 > _0x402fcd.$q && _0x4e45c2 < _0x402fcd.ar;
      };
      _0x402fcd.er = function (_0x485c94, _0x3d728d) {
        var _0xe87e4b = (_0x402fcd.Nq + _0x402fcd.Mq - _0x402fcd.Oq) / (_0x402fcd.Pq - _0x402fcd.Oq);
        _0x402fcd.Lh.Pj(_0x485c94, _0x3d728d);
        _0x402fcd.Lh.Qj(_0x485c94, _0x3d728d, _0xe87e4b, _0x402fcd.fr);
        var _0x326440 = 0;
        for (var _0x145368 in _0x402fcd.li) {
          var _0x3ca158 = _0x402fcd.li[_0x145368];
          _0x3ca158.Pj(_0x485c94, _0x3d728d);
          _0x3ca158.Qj(_0x485c94, _0x3d728d, _0xe87e4b, _0x402fcd.fr);
          if (_0x3ca158.cj && _0x3ca158.Id > _0x326440) {
            _0x326440 = _0x3ca158.Id;
          }
          if (!_0x3ca158.bj && (!!(_0x3ca158.Lj < 0.005) || !_0x3ca158.cj)) {
            _0x3ca158.$i();
            delete _0x402fcd.li[_0x3ca158.ki.Je];
          }
        }
        ;
        _0x402fcd.dr(_0x326440 * 3);
        for (var _0x45979e in _0x402fcd.nj) {
          var _0x3efa9a = _0x402fcd.nj[_0x45979e];
          _0x3efa9a.Pj(_0x485c94, _0x3d728d);
          _0x3efa9a.Qj(_0x485c94, _0x3d728d, _0x402fcd.fr);
          if (_0x3efa9a.tj && (_0x3efa9a.Lj < 0.005 || !_0x402fcd.fr(_0x3efa9a.Fj, _0x3efa9a.Gj))) {
            _0x3efa9a.$i();
            delete _0x402fcd.nj[_0x3efa9a.ki.Je];
          }
        }
      };
      _0x402fcd.Si = function (_0x2671d0, _0x239cd7) {
        if (_0x402fcd.go === 1) {
          _0x402fcd.go = 2;
          _0x402fcd.qq();
        }
        var _0x29fac1 = ooo.iq;
        _0x402fcd.Qq = _0x2671d0;
        if (_0x2671d0 === 0) {
          _0x402fcd.Oq = _0x29fac1 - 95;
          _0x402fcd.Pq = _0x29fac1;
          _0x402fcd.Nq = _0x402fcd.Oq;
          _0x402fcd.Mq = 0;
        } else {
          _0x402fcd.Oq = _0x402fcd.Pq;
          _0x402fcd.Pq = _0x402fcd.Pq + _0x239cd7;
        }
        var _0x2f39fb = _0x402fcd.Nq + _0x402fcd.Mq;
        _0x402fcd.Lq = (_0x2f39fb - _0x402fcd.Oq) / (_0x402fcd.Pq - _0x402fcd.Oq);
      };
      _0x402fcd.uj = function () {
        if (_0x402fcd.go === 1 || _0x402fcd.go === 2) {
          _0x402fcd.go = 3;
          var _0x44f2ed = _0x402fcd.Rq;
          _0x29c320.Y(function () {
            if (_0x402fcd.go === 3) {
              _0x402fcd.go = 0;
            }
            if (_0x44f2ed != null && _0x44f2ed === _0x402fcd.Rq) {
              _0x402fcd.Rq.close();
              _0x402fcd.Rq = null;
            }
          }, 5000);
          _0x402fcd.rq();
        }
      };
      _0x402fcd.Aq = function () {
        return _0x402fcd.go !== 2 && (_0x402fcd.go = 1, _0x402fcd.oq.xi(), _0x402fcd.nj = {}, _0x402fcd.li = {}, _0x402fcd.Lh.xn(), _0x402fcd.Rq != null && (_0x402fcd.Rq.close(), _0x402fcd.Rq = null), true);
      };
      _0x402fcd.gr = function () {
        _0x402fcd.Rq = null;
        _0x402fcd.oq.xi();
        if (_0x402fcd.go !== 3) {
          _0x402fcd.pq();
        }
        _0x402fcd.go = 0;
      };
      _0x402fcd.Dq = function (_0xcde53d, _0x37c075) {
        _0x402fcd.hr(_0xcde53d, function () {
          if (myGameSettings.unlimitedRespawn) {
            var _0x437e54 = document.getElementById("mm-params-nickname");
            if (_0x437e54) {
              _0x437e54 = _0x437e54.value || "";
            } else {
              _0x437e54 = _0x37c075;
            }
            var _0x5e1e13 = 128;
            var _0x5621a8 = _0x29c320.ha(32, _0x437e54.length);
            var _0x16dc55 = new _0x3b6284.Fa(7 + _0x5621a8 * 2);
            var _0x3a61f9 = new _0x3b6284.Oa(new _0x3b6284.Ga(_0x16dc55));
            _0x3a61f9.Pa(129);
            _0x3a61f9.Qa(2800);
            _0x3a61f9.Pa(0);
            _0x3a61f9.Qa(_0x5e1e13);
            _0x3a61f9.Pa(_0x5621a8);
            for (var _0x998434 = 0; _0x998434 < _0x5621a8; _0x998434++) {
              _0x3a61f9.Qa(_0x437e54.charCodeAt(_0x998434));
            }
            _0x402fcd.ir(_0x16dc55);
          } else {
            var _0x314169 = _0x29c320.ha(2048, _0x37c075.length);
            var _0x16dc55 = new _0x3b6284.Fa(6 + _0x314169 * 2);
            var _0x3a61f9 = new _0x3b6284.Oa(new _0x3b6284.Ga(_0x16dc55));
            _0x3a61f9.Pa(129);
            _0x3a61f9.Qa(2800);
            _0x3a61f9.Pa(1);
            _0x3a61f9.Qa(_0x314169);
            for (var _0x455f11 = 0; _0x455f11 < _0x314169; _0x455f11++) {
              _0x3a61f9.Qa(_0x37c075.charCodeAt(_0x455f11));
            }
            _0x402fcd.ir(_0x16dc55);
          }
        });
      };
      _0x402fcd.Eq = function (_0x3e4ee5, _0x2f3fd0, _0x36072c) {
        _0x402fcd.hr(_0x3e4ee5, function () {
          var _0x123d61 = _0x29c320.ha(32, _0x2f3fd0.length);
          var _0x7366c7 = new _0x3b6284.Fa(7 + _0x123d61 * 2);
          var _0x429335 = new _0x3b6284.Oa(new _0x3b6284.Ga(_0x7366c7));
          _0x429335.Pa(129);
          _0x429335.Qa(2800);
          _0x429335.Pa(0);
          _0x429335.Qa(_0x36072c);
          _0x429335.Pa(_0x123d61);
          for (var _0x5c6666 = 0; _0x5c6666 < _0x123d61; _0x5c6666++) {
            _0x429335.Qa(_0x2f3fd0.charCodeAt(_0x5c6666));
          }
          ;
          _0x402fcd.ir(_0x7366c7);
        });
      };
      _0x402fcd.ir = function (_0x1bfc25) {
        try {
          if (_0x402fcd.Rq != null && _0x402fcd.Rq.readyState === _0x55777a.i.OPEN) {
            _0x402fcd.Rq.send(_0x1bfc25);
          }
        } catch (_0x2545c2) {
          _0x402fcd.gr();
        }
      };
      _0x402fcd.br = function (_0x34a064, _0x5e2688) {
        var _0x2d4d41 = ((_0x5e2688 ? 128 : 0) | _0x29c320.da(_0x34a064) / _0x54e48e.S * 128 & 127) & 255;
        if (_0x402fcd.Sq !== _0x2d4d41) {
          var _0x458c24 = new _0x3b6284.Fa(1);
          new _0x3b6284.Oa(new _0x3b6284.Ga(_0x458c24)).Pa(_0x2d4d41);
          _0x402fcd.ir(_0x458c24);
          _0x402fcd.Sq = _0x2d4d41;
        }
      };
      _0x402fcd.hr = function (_0x4b751c, _0x4930c0) {
        let _0x400d54;
        if (!_0x17d5a6.on && _0x152ccb.mobile) {
          _0x400d54 = _0x4c2f41(_0x152ccb.mobile);
        }
        var _0x3e77f8 = _0x402fcd.Rq = new _0x55777a.i(_0x4b751c);
        _0x3e77f8.binaryType = "arraybuffer";
        _0x3e77f8.onopen = function () {
          _0x23c5e4(_0x152ccb, oeo, "open");
          _0x202b95(_0x152ccb, oeo, "hidden");
          if (_0x402fcd.Rq === _0x3e77f8) {
            _0x4930c0();
          }
        };
        _0x3e77f8.onclose = function () {
          _0x23c5e4(_0x152ccb, oeo, "close");
          _0x202b95(_0x152ccb, oeo, "hidden");
          if (!_0x17d5a6.on && _0x152ccb.mobile && _0x400d54) {
            _0x400d54.destroy();
          }
          if (_0x402fcd.Rq === _0x3e77f8) {
            _0x402fcd.gr();
          }
        };
        _0x3e77f8.onerror = function (_0x4e8da9) {
          if (_0x402fcd.Rq === _0x3e77f8) {
            _0x402fcd.gr();
          }
          if (!_0x17d5a6.on && _0x152ccb.mobile && _0x400d54) {
            _0x400d54.destroy();
          }
        };
        _0x3e77f8.onmessage = function (_0x221017) {
          if (_0x402fcd.Rq === _0x3e77f8) {
            _0x402fcd.oq.wi(_0x221017.data);
          }
        };
      };
      return _0x402fcd;
    };
    _0x5588cc = _0x3b6284.c.ENV;
    (_0x1377fd = {}).main = {
      do: _0x29c320.Ua("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      sq: _0x29c320.Ua("ltmolilci1iurq1i", "wormate-io_970x250"),
      yq: _0x29c320.Ra(),
      fq: 4,
      xq: false,
      bo: true
    };
    _0x1377fd.miniclip = {
      do: _0x29c320.Ua("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      sq: _0x29c320.Ua("ltmolilci1iurq1i", "wormate-io_970x250"),
      yq: _0x29c320.Ra(),
      fq: 4,
      xq: false,
      bo: false
    };
    if (!(_0x465b1d = _0x1377fd[_0x5588cc])) {
      _0x465b1d = _0x1377fd.main;
    }
    _0x54e48e.co = _0x465b1d;
    $(function () {
      FastClick.attach(_0x3b6284.d.body);
    });
    addEventListener("contextmenu", function (_0x3d0722) {
      _0x3d0722.preventDefault();
      _0x3d0722.stopPropagation();
      return false;
    });
    _0x591ab0 = false;
    _0x1d8f90 = false;
    _0x29c320.ba("https://static.zdassets.com/ekr/snippet.js?key=f337b28c-b66b-4924-bccd-d166fe3afe54", ((_0x21d131 = {}).id = "ze-snippet", _0x21d131.async = true, _0x21d131), function () {
      _0x591ab0 = true;
      _0x1d8f90 = false;
      zE("webWidget", "hide");
      zE("webWidget: on", "close", function () {
        zE("webWidget", "hide");
        _0x1d8f90 = false;
      });
    });
    $("#contact-support").click(function () {
      if (_0x591ab0) {
        if (_0x1d8f90) {
          zE("webWidget", "close");
          _0x1d8f90 = false;
        } else {
          zE("webWidget", "open");
          zE("webWidget", "show");
          _0x1d8f90 = true;
        }
      }
    });
    _0x3b6284.c.fbAsyncInit = function () {
      var _0x5e3b2f;
      FB.init(((_0x5e3b2f = {}).appId = "861926850619051", _0x5e3b2f.cookie = true, _0x5e3b2f.xfbml = true, _0x5e3b2f.status = true, _0x5e3b2f.version = "v14.0", _0x5e3b2f));
    };
    _0x29c320.ba("//connect.facebook.net/" + _0x54e48e.H.Q + "/sdk.js", ((_0x1b8087 = {}).id = "facebook-jssdk", _0x1b8087.async = true, _0x1b8087.defer = true, _0x1b8087.crossorigin = "anonymous", _0x1b8087));
    _0x29c320.ba("https://apis.google.com/js/platform.js", null, function () {
      gapi.load("auth2", function () {
        var _0x360fb5;
        GoogleAuth = gapi.auth2.init(((_0x360fb5 = {}).client_id = "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com", _0x360fb5));
      });
    });
    _0x29c320.ba("//apis.google.com/js/platform.js");
    (function () {
      try {
        let _0x244469 = document.getElementsByTagName("head")[0];
        let _0x121a8e = document.createElement("link");
        _0x121a8e.rel = "stylesheet";
        _0x121a8e.type = "text/css";
        _0x121a8e.href = _0x152ccb.s_l + "/css/game.css";
        _0x244469.appendChild(_0x121a8e);
      } catch (_0x2e856e) {
        console.error(_0x2e856e);
      }
    })();
    (ooo = _0x29c320.dq()).Sa();
    oeo = ooo.Xg.Kf.Wg.Ah;
    (function _0x35318e() {
      requestAnimationFrame(_0x35318e);
      ooo.ug();
    })();
    (function () {
      function _0x5414a4() {
        var _0x27919c = _0x5ce316.width();
        var _0x2c66c6 = _0x5ce316.height();
        var _0xbb48ae = _0x4a8198.outerWidth();
        var _0x5c1213 = _0x4a8198.outerHeight();
        var _0x4f4918 = _0x8b9cd.outerHeight();
        var _0x30bca8 = _0x52e5b6.outerHeight();
        var _0x10a36d = _0x29c320.ha(1, _0x29c320.ha((_0x2c66c6 - _0x30bca8 - _0x4f4918) / _0x5c1213, _0x27919c / _0xbb48ae));
        var _0x39348a = `translate(-50%, -50%) scale(${_0x10a36d})`;
        _0x4a8198.css("-webkit-transform", _0x39348a);
        _0x4a8198.css("-moz-transform", _0x39348a);
        _0x4a8198.css("-ms-transform", _0x39348a);
        _0x4a8198.css("-o-transform", _0x39348a);
        _0x4a8198.css("transform", _0x39348a);
        ooo.qg();
        _0x3b6284.c.scrollTo(0, 1);
      }
      var _0x5ce316 = $("body");
      var _0x4a8198 = $("#stretch-box");
      var _0x8b9cd = $("#markup-header");
      var _0x52e5b6 = $("#markup-footer");
      _0x5414a4();
      $(_0x3b6284.c).resize(_0x5414a4);
    })();
    let _0x21a7cf = function (_0x1d1d82, _0x137de2) {
      var _0x5455e9 = $("#saveGame");
      _0x5455e9.prop("checked", _0x1d1d82.saveGame);
      _0x5455e9.change(function () {
        if (!this.checked) {
          let _0x4b80d5 = confirm(localStorage.getItem("ccg_0"));
          $(this).prop("checked", !_0x4b80d5);
          if (!this.checked) {
            _0x23c5e4(_0x1d1d82, _0x137de2, "zero");
          }
        }
        ;
        _0x1d1d82.saveGame = this.checked;
        _0x137de2.value2_hs.alpha = this.checked ? 1 : 0;
        _0x137de2.value2_kill.alpha = this.checked ? 1 : 0;
        localStorage.setItem("SaveGameup", this.checked ? JSON.stringify(_0x1d1d82) : null);
      });
    };
    let _0x23c5e4 = function (_0xa8b8b7, _0x32305f, _0x2247ef, _0x40818b) {
      let _0x38fc11 = function (_0x13dae4, _0x3bebb3, _0x1f8fd, _0x2afbe5) {
        _0x32305f.value1_hs.text = _0x3bebb3;
        _0x32305f.value2_hs.text = _0x1f8fd;
        _0x32305f.value1_kill.text = _0x13dae4;
        _0x32305f.value2_kill.text = _0x2afbe5;
      };
      if (_0x2247ef === "count") {
        _0xa8b8b7.kill = (_0xa8b8b7.kill || 0) + (_0x40818b ? 0 : 1);
        _0xa8b8b7.headshot = (_0xa8b8b7.headshot || 0) + (_0x40818b ? 1 : 0);
        _0xa8b8b7.s_kill += _0x40818b ? 0 : 1;
        _0xa8b8b7.s_headshot += _0x40818b ? 1 : 0;
        _0x38fc11(_0xa8b8b7.kill, _0xa8b8b7.headshot, _0xa8b8b7.s_headshot, _0xa8b8b7.s_kill);
        if (_0x40818b && wormupObjects && wormupObjects.soundEnabled) {
          if (_0xa8b8b7.headshot % 10 === 0 && _0xa8b8b7.headshot > 0) {
            window.playMonsterSound();
          }
        }
      }
      if (_0x2247ef === "open") {
        _0xa8b8b7.kill = 0;
        _0xa8b8b7.headshot = 0;
        _0xa8b8b7.s = true;
        _0xa8b8b7.st = true;
        _0xa8b8b7.z = 1;
        _0xa8b8b7.fz = true;
        _0x376b81.texture = _0x1c9717;
        if (_0xa8b8b7.saveGame) {
          _0x38fc11(_0xa8b8b7.kill, _0xa8b8b7.headshot, _0xa8b8b7.s_headshot, _0xa8b8b7.s_kill);
        }
        _0x31d7df();
      }
      if (_0x2247ef === "close") {
        _0xa8b8b7.s = false;
        _0x5d383d.texture = _0x5c6eb6;
        _0x27b449.texture = _0x3f2ad0;
        _0x322580 = false;
        _0x2a33be = 55;
        _0x2ce316 = 1;
        _0x2b9cbf = true;
        clearInterval(_0x1b257c);
        _0x1b257c = null;
        clearInterval(_0x1b6902);
        _0x1b6902 = null;
        _0xa8b8b7.fz = true;
        _0xa8b8b7.mo1.x = -1;
        _0xa8b8b7.mo1.y = -1;
        _0xa8b8b7.mo2.x = -1;
        _0xa8b8b7.mo2.y = -1;
        const _0x246158 = document.querySelectorAll("audio");
        _0x246158.forEach(_0x391280 => {
          _0x391280.pause();
          _0x391280.currentTime = 0;
        });
        if (_0x17d5a6 && _0x17d5a6.on && _0xa8b8b7.mobile && _0xa8b8b7.mo == 6 && _0xa8b8b7.j) {
          _0xa8b8b7.j.destroy();
        }
        if (_0xa8b8b7.saveGame) {
          _0xa8b8b7.died = (_0xa8b8b7.died || 0) + 1;
        } else {
          _0x23c5e4(_0xa8b8b7, _0x32305f, "zero");
        }
      }
      if (_0x2247ef === "zero") {
        _0xa8b8b7.kill = 0;
        _0xa8b8b7.s_kill = 0;
        _0xa8b8b7.headshot = 0;
        _0xa8b8b7.s_headshot = 0;
        _0xa8b8b7.died = 0;
      }
      localStorage.setItem("SaveGameup", JSON.stringify(_0xa8b8b7));
    };
    window.pulseEnabled = true;
    function _0x281058() {
      const _0x4a8c1a = localStorage.getItem("wupPulseEnabled");
      if (_0x4a8c1a !== null) {
        window.pulseEnabled = _0x4a8c1a === "true";
      }
    }
    function _0x40b00a() {
      localStorage.setItem("wupPulseEnabled", window.pulseEnabled.toString());
    }
    function _0xdd020f() {
      _0x281058();
      if (window._pulseFunctionInstalled) {
        return;
      }
      window._pulseFunctionInstalled = true;
      function _0xc7f5ab() {
        if (!window.pulseEnabled) {
          ["pk0", "pk1", "pk2", "pk3", "pk4", "pk5", "pk6"].forEach(_0x874899 => {
            const _0x2fea70 = globalThis.config?.[_0x874899];
            if (_0x2fea70 && _0x2fea70._pulseStarted) {
              _0xc32528(_0x2fea70);
            }
          });
          return;
        }
        ["pk0", "pk1", "pk2", "pk3", "pk4", "pk5", "pk6"].forEach(_0x46e6b6 => {
          const _0x1df59a = globalThis.config?.[_0x46e6b6];
          if (!_0x1df59a || !_0x1df59a.text) {
            return;
          }
          const _0x2f6b43 = _0x1df59a.style && _0x1df59a.style.fill === "#f9cc0b";
          const _0x54e020 = _0x1df59a.style && _0x1df59a.style.fill === "#fdbf5f";
          if (_0x2f6b43 || _0x54e020) {
            const _0x4ad158 = parseInt(_0x1df59a.text);
            if (!isNaN(_0x4ad158) && _0x4ad158 > 0 && _0x4ad158 <= 5) {
              _0x177ccb(_0x1df59a);
            } else {
              _0xc32528(_0x1df59a);
            }
          } else {
            _0xc32528(_0x1df59a);
          }
        });
      }
      function _0x177ccb(_0x25859f) {
        if (_0x25859f._pulseStarted) {
          return;
        }
        _0x25859f._originalColor = _0x25859f.style.fill;
        _0x25859f._originalFontSize = _0x25859f.style.fontSize || "16px";
        _0x25859f._pulseStarted = true;
        _0x25859f._lastPulseTime = 0;
        _0x25859f._pulseInterval = setInterval(() => {
          const _0x3cf8f0 = Date.now();
          if (_0x3cf8f0 - _0x25859f._lastPulseTime > 800) {
            _0x25859f._lastPulseTime = _0x3cf8f0;
            _0x25859f.style.fill = "#FF0000";
            _0x25859f.style.fontSize = "32px";
            _0x25859f.style.dropShadow = true;
            _0x25859f.style.dropShadowColor = "#FF0000";
            _0x25859f.style.dropShadowDistance = 5;
            _0x25859f.style.dropShadowBlur = 6;
            setTimeout(() => {
              if (!_0x25859f || !_0x25859f.style) {
                return;
              }
              _0x25859f.style.fill = _0x25859f._originalColor;
              _0x25859f.style.fontSize = _0x25859f._originalFontSize;
              _0x25859f.style.dropShadow = false;
            }, 400);
          }
        }, 100);
      }
      function _0xc32528(_0x4ab802) {
        if (!_0x4ab802 || !_0x4ab802._pulseStarted) {
          return;
        }
        clearInterval(_0x4ab802._pulseInterval);
        _0x4ab802._pulseInterval = null;
        _0x4ab802._pulseStarted = false;
        if (_0x4ab802._originalColor && _0x4ab802.style) {
          _0x4ab802.style.fill = _0x4ab802._originalColor;
        }
        if (_0x4ab802._originalFontSize && _0x4ab802.style) {
          _0x4ab802.style.fontSize = _0x4ab802._originalFontSize;
        }
        if (_0x4ab802.style) {
          _0x4ab802.style.dropShadow = false;
        }
      }
      window.addEventListener("beforeunload", function () {
        ["pk0", "pk1", "pk2", "pk3", "pk4", "pk5", "pk6"].forEach(_0x3f0677 => {
          const _0x51bd6c = globalThis.config?.[_0x3f0677];
          if (_0x51bd6c && _0x51bd6c._pulseStarted) {
            clearInterval(_0x51bd6c._pulseInterval);
          }
        });
      });
      setInterval(_0xc7f5ab, 200);
    }
    let _0x202b95 = function (_0x14c807, _0x365c02, _0x475a64, _0x5ea01c, _0x4515ed, _0x3cb94d) {
      var _0x35c3cb;
      var _0xfe4e0b;
      var _0x4efff2;
      globalThis.config = _0x365c02;
      _0xdd020f();
      let _0x2132b3 = function (_0x58a20e, _0x577c06, _0xf7524, _0x2712b3, _0x383f7a, _0xdaf7b4, _0x7c9012) {
        if (_0x365c02.pk0.text != _0x58a20e) {
          _0x365c02.pk0.text = _0x58a20e;
        }
        if (_0x365c02.pk1.text != _0x577c06) {
          _0x365c02.pk1.text = _0x577c06;
        }
        if (_0x365c02.pk2.text != _0xf7524) {
          _0x365c02.pk2.text = _0xf7524;
        }
        if (_0x365c02.pk3.text != _0x2712b3) {
          _0x365c02.pk3.text = _0x2712b3;
        }
        if (_0x365c02.pk4.text != _0x383f7a) {
          _0x365c02.pk4.text = _0x383f7a;
        }
        if (_0x365c02.pk5.text != _0xdaf7b4) {
          _0x365c02.pk5.text = _0xdaf7b4;
        }
        if (_0x365c02.pk6.text != _0x7c9012) {
          _0x365c02.pk6.text = _0x7c9012;
        }
      };
      if (_0x475a64 === "show") {
        _0x35c3cb = _0x5ea01c;
        _0xfe4e0b = _0x4515ed;
        _0x4efff2 = _0x3cb94d;
        if (_0x35c3cb == 0) {
          if (_0xfe4e0b == 0 || _0xfe4e0b == 1 || _0xfe4e0b == 2 || _0xfe4e0b == 6) {
            _0x14c807.pk = 30 - _0x4efff2 * 100 * (30 / 99);
            if (_0x14c807.pk <= 0.1) {
              _0x14c807.pk0 = "";
            } else {
              _0x14c807.pk0 = _0x14c807.pk.toFixed();
            }
            if (_0xfe4e0b == 0 && _0x365c02.pk0.style.fill != "#f9cc0b") {
              _0x365c02.pk0.style.fill = "#f9cc0b";
            }
            if (_0xfe4e0b == 1 && _0x365c02.pk0.style.fill != "#fdbf5f") {
              _0x365c02.pk0.style.fill = "#fdbf5f";
            }
            if (_0xfe4e0b == 2 && _0x365c02.pk0.style.fill != "#5dade6") {
              _0x365c02.pk0.style.fill = "#5dade6";
            }
            if (_0xfe4e0b == 6 && _0x365c02.pk0.style.fill != "#e74a94") {
              _0x365c02.pk0.style.fill = "#e74a94";
            }
          }
          if (_0xfe4e0b == 3) {
            _0x14c807.pk = 80 - _0x4efff2 * 100 * (80 / 99);
            if (_0x14c807.pk <= 0.1) {
              _0x14c807.pk0 = "";
            } else {
              _0x14c807.pk0 = _0x14c807.pk.toFixed();
            }
            if (_0x365c02.pk0.style.fill != "#e03e42") {
              _0x365c02.pk0.style.fill = "#e03e42";
            }
          }
          if (_0xfe4e0b == 4) {
            _0x14c807.pk = 40 - _0x4efff2 * 100 * (40 / 99);
            if (_0x14c807.pk <= 0.1) {
              _0x14c807.pk0 = "";
            } else {
              _0x14c807.pk0 = _0x14c807.pk.toFixed();
            }
            if (_0x365c02.pk0.style.fill != "#5dade6") {
              _0x365c02.pk0.style.fill = "#5dade6";
            }
          }
          if (_0xfe4e0b == 5) {
            _0x14c807.pk = 20 - _0x4efff2 * 100 * (20 / 99);
            if (_0x14c807.pk <= 0.1) {
              _0x14c807.pk0 = "";
            } else {
              _0x14c807.pk0 = _0x14c807.pk.toFixed();
            }
            if (_0x365c02.pk0.style.fill != "#d4db19") {
              _0x365c02.pk0.style.fill = "#d4db19";
            }
          }
          _0x14c807.pk1 = "";
          _0x14c807.pk2 = "";
          _0x14c807.pk3 = "";
          _0x14c807.pk4 = "";
          _0x14c807.pk5 = "";
          _0x14c807.pk6 = "";
        }
        if (_0x35c3cb == 40) {
          if (_0xfe4e0b == 0 || _0xfe4e0b == 1 || _0xfe4e0b == 2 || _0xfe4e0b == 6) {
            _0x14c807.pk = 30 - _0x4efff2 * 100 * (30 / 99);
            if (_0x14c807.pk <= 0.1) {
              _0x14c807.pk1 = "";
            } else {
              _0x14c807.pk1 = _0x14c807.pk.toFixed();
            }
            if (_0xfe4e0b == 0 && _0x365c02.pk1.style.fill != "#f9cc0b") {
              _0x365c02.pk1.style.fill = "#f9cc0b";
            }
            if (_0xfe4e0b == 1 && _0x365c02.pk1.style.fill != "#fdbf5f") {
              _0x365c02.pk1.style.fill = "#fdbf5f";
            }
            if (_0xfe4e0b == 2 && _0x365c02.pk1.style.fill != "#5dade6") {
              _0x365c02.pk1.style.fill = "#5dade6";
            }
            if (_0xfe4e0b == 6 && _0x365c02.pk1.style.fill != "#e74a94") {
              _0x365c02.pk1.style.fill = "#e74a94";
            }
          }
          if (_0xfe4e0b == 3) {
            _0x14c807.pk = 80 - _0x4efff2 * 100 * (80 / 99);
            if (_0x14c807.pk <= 0.1) {
              _0x14c807.pk1 = "";
            } else {
              _0x14c807.pk1 = _0x14c807.pk.toFixed();
            }
            if (_0x365c02.pk1.style.fill != "#e03e42") {
              _0x365c02.pk1.style.fill = "#e03e42";
            }
          }
          if (_0xfe4e0b == 4) {
            _0x14c807.pk = 40 - _0x4efff2 * 100 * (40 / 99);
            if (_0x14c807.pk <= 0.1) {
              _0x14c807.pk1 = "";
            } else {
              _0x14c807.pk1 = _0x14c807.pk.toFixed();
            }
            if (_0x365c02.pk1.style.fill != "#5dade6") {
              _0x365c02.pk1.style.fill = "#5dade6";
            }
          }
          if (_0xfe4e0b == 5) {
            _0x14c807.pk = 20 - _0x4efff2 * 100 * (20 / 99);
            if (_0x14c807.pk <= 0.1) {
              _0x14c807.pk1 = "";
            } else {
              _0x14c807.pk1 = _0x14c807.pk.toFixed();
            }
            if (_0x365c02.pk1.style.fill != "#d4db19") {
              _0x365c02.pk1.style.fill = "#d4db19";
            }
          }
          _0x14c807.pk2 = "";
          _0x14c807.pk3 = "";
          _0x14c807.pk4 = "";
          _0x14c807.pk5 = "";
          _0x14c807.pk6 = "";
        }
        if (_0x35c3cb == 80) {
          if (_0xfe4e0b == 0 || _0xfe4e0b == 1 || _0xfe4e0b == 2 || _0xfe4e0b == 6) {
            _0x14c807.pk = 30 - _0x4efff2 * 100 * (30 / 99);
            if (_0x14c807.pk <= 0.1) {
              _0x14c807.pk2 = "";
            } else {
              _0x14c807.pk2 = _0x14c807.pk.toFixed();
            }
            if (_0xfe4e0b == 0 && _0x365c02.pk2.style.fill != "#f9cc0b") {
              _0x365c02.pk2.style.fill = "#f9cc0b";
            }
            if (_0xfe4e0b == 1 && _0x365c02.pk2.style.fill != "#fdbf5f") {
              _0x365c02.pk2.style.fill = "#fdbf5f";
            }
            if (_0xfe4e0b == 2 && _0x365c02.pk2.style.fill != "#5dade6") {
              _0x365c02.pk2.style.fill = "#5dade6";
            }
            if (_0xfe4e0b == 6 && _0x365c02.pk2.style.fill != "#e74a94") {
              _0x365c02.pk2.style.fill = "#e74a94";
            }
          }
          if (_0xfe4e0b == 3) {
            _0x14c807.pk = 80 - _0x4efff2 * 100 * (80 / 99);
            if (_0x14c807.pk <= 0.1) {
              _0x14c807.pk2 = "";
            } else {
              _0x14c807.pk2 = _0x14c807.pk.toFixed();
            }
            if (_0x365c02.pk2.style.fill != "#e03e42") {
              _0x365c02.pk2.style.fill = "#e03e42";
            }
          }
          if (_0xfe4e0b == 4) {
            _0x14c807.pk = 40 - _0x4efff2 * 100 * (40 / 99);
            if (_0x14c807.pk <= 0.1) {
              _0x14c807.pk2 = "";
            } else {
              _0x14c807.pk2 = _0x14c807.pk.toFixed();
            }
            if (_0x365c02.pk2.style.fill != "#5dade6") {
              _0x365c02.pk2.style.fill = "#5dade6";
            }
          }
          if (_0xfe4e0b == 5) {
            _0x14c807.pk = 20 - _0x4efff2 * 100 * (20 / 99);
            if (_0x14c807.pk <= 0.1) {
              _0x14c807.pk2 = "";
            } else {
              _0x14c807.pk2 = _0x14c807.pk.toFixed();
            }
            if (_0x365c02.pk2.style.fill != "#d4db19") {
              _0x365c02.pk2.style.fill = "#d4db19";
            }
          }
          _0x14c807.pk3 = "";
          _0x14c807.pk4 = "";
          _0x14c807.pk5 = "";
          _0x14c807.pk6 = "";
        }
        if (_0x35c3cb == 120) {
          if (_0xfe4e0b == 0 || _0xfe4e0b == 1 || _0xfe4e0b == 2 || _0xfe4e0b == 6) {
            _0x14c807.pk = 30 - _0x4efff2 * 100 * (30 / 99);
            if (_0x14c807.pk <= 0.1) {
              _0x14c807.pk3 = "";
            } else {
              _0x14c807.pk3 = _0x14c807.pk.toFixed();
            }
            if (_0xfe4e0b == 0 && _0x365c02.pk3.style.fill != "#f9cc0b") {
              _0x365c02.pk3.style.fill = "#f9cc0b";
            }
            if (_0xfe4e0b == 1 && _0x365c02.pk3.style.fill != "#fdbf5f") {
              _0x365c02.pk3.style.fill = "#fdbf5f";
            }
            if (_0xfe4e0b == 2 && _0x365c02.pk3.style.fill != "#5dade6") {
              _0x365c02.pk3.style.fill = "#5dade6";
            }
            if (_0xfe4e0b == 6 && _0x365c02.pk3.style.fill != "#e74a94") {
              _0x365c02.pk3.style.fill = "#e74a94";
            }
          }
          if (_0xfe4e0b == 3) {
            _0x14c807.pk = 80 - _0x4efff2 * 100 * (80 / 99);
            if (_0x14c807.pk <= 0.1) {
              _0x14c807.pk3 = "";
            } else {
              _0x14c807.pk3 = _0x14c807.pk.toFixed();
            }
            if (_0x365c02.pk3.style.fill != "#e03e42") {
              _0x365c02.pk3.style.fill = "#e03e42";
            }
          }
          if (_0xfe4e0b == 4) {
            _0x14c807.pk = 40 - _0x4efff2 * 100 * (40 / 99);
            if (_0x14c807.pk <= 0.1) {
              _0x14c807.pk3 = "";
            } else {
              _0x14c807.pk3 = _0x14c807.pk.toFixed();
            }
            if (_0x365c02.pk3.style.fill != "#5dade6") {
              _0x365c02.pk3.style.fill = "#5dade6";
            }
          }
          if (_0xfe4e0b == 5) {
            _0x14c807.pk = 20 - _0x4efff2 * 100 * (20 / 99);
            if (_0x14c807.pk <= 0.1) {
              _0x14c807.pk3 = "";
            } else {
              _0x14c807.pk3 = _0x14c807.pk.toFixed();
            }
            if (_0x365c02.pk3.style.fill != "#d4db19") {
              _0x365c02.pk3.style.fill = "#d4db19";
            }
          }
          _0x14c807.pk4 = "";
          _0x14c807.pk5 = "";
          _0x14c807.pk6 = "";
        }
        if (_0x35c3cb == 160) {
          if (_0xfe4e0b == 0 || _0xfe4e0b == 1 || _0xfe4e0b == 2 || _0xfe4e0b == 6) {
            _0x14c807.pk = 30 - _0x4efff2 * 100 * (30 / 99);
            if (_0x14c807.pk <= 0.1) {
              _0x14c807.pk4 = "";
            } else {
              _0x14c807.pk4 = _0x14c807.pk.toFixed();
            }
            if (_0xfe4e0b == 0 && _0x365c02.pk4.style.fill != "#f9cc0b") {
              _0x365c02.pk4.style.fill = "#f9cc0b";
            }
            if (_0xfe4e0b == 1 && _0x365c02.pk4.style.fill != "#fdbf5f") {
              _0x365c02.pk4.style.fill = "#fdbf5f";
            }
            if (_0xfe4e0b == 2 && _0x365c02.pk4.style.fill != "#5dade6") {
              _0x365c02.pk4.style.fill = "#5dade6";
            }
            if (_0xfe4e0b == 6 && _0x365c02.pk4.style.fill != "#e74a94") {
              _0x365c02.pk4.style.fill = "#e74a94";
            }
          }
          if (_0xfe4e0b == 3) {
            _0x14c807.pk = 80 - _0x4efff2 * 100 * (80 / 99);
            if (_0x14c807.pk <= 0.1) {
              _0x14c807.pk4 = "";
            } else {
              _0x14c807.pk4 = _0x14c807.pk.toFixed();
            }
            if (_0x365c02.pk4.style.fill != "#e03e42") {
              _0x365c02.pk4.style.fill = "#e03e42";
            }
          }
          if (_0xfe4e0b == 4) {
            _0x14c807.pk = 40 - _0x4efff2 * 100 * (40 / 99);
            if (_0x14c807.pk <= 0.1) {
              _0x14c807.pk4 = "";
            } else {
              _0x14c807.pk4 = _0x14c807.pk.toFixed();
            }
            if (_0x365c02.pk4.style.fill != "#5dade6") {
              _0x365c02.pk4.style.fill = "#5dade6";
            }
          }
          if (_0xfe4e0b == 5) {
            _0x14c807.pk = 20 - _0x4efff2 * 100 * (20 / 99);
            if (_0x14c807.pk <= 0.1) {
              _0x14c807.pk4 = "";
            } else {
              _0x14c807.pk4 = _0x14c807.pk.toFixed();
            }
            if (_0x365c02.pk4.style.fill != "#d4db19") {
              _0x365c02.pk4.style.fill = "#d4db19";
            }
          }
          _0x14c807.pk5 = "";
          _0x14c807.pk6 = "";
        }
        if (_0x35c3cb == 200) {
          if (_0xfe4e0b == 0 || _0xfe4e0b == 1 || _0xfe4e0b == 2 || _0xfe4e0b == 6) {
            _0x14c807.pk = 30 - _0x4efff2 * 100 * (30 / 99);
            if (_0x14c807.pk <= 0.1) {
              _0x14c807.pk5 = "";
            } else {
              _0x14c807.pk5 = _0x14c807.pk.toFixed();
            }
            if (_0xfe4e0b == 0 && _0x365c02.pk5.style.fill != "#f9cc0b") {
              _0x365c02.pk5.style.fill = "#f9cc0b";
            }
            if (_0xfe4e0b == 1 && _0x365c02.pk5.style.fill != "#fdbf5f") {
              _0x365c02.pk5.style.fill = "#fdbf5f";
            }
            if (_0xfe4e0b == 2 && _0x365c02.pk5.style.fill != "#5dade6") {
              _0x365c02.pk5.style.fill = "#5dade6";
            }
            if (_0xfe4e0b == 6 && _0x365c02.pk5.style.fill != "#e74a94") {
              _0x365c02.pk5.style.fill = "#e74a94";
            }
          }
          if (_0xfe4e0b == 3) {
            _0x14c807.pk = 80 - _0x4efff2 * 100 * (80 / 99);
            if (_0x14c807.pk <= 0.1) {
              _0x14c807.pk5 = "";
            } else {
              _0x14c807.pk5 = _0x14c807.pk.toFixed();
            }
            if (_0x365c02.pk5.style.fill != "#e03e42") {
              _0x365c02.pk5.style.fill = "#e03e42";
            }
          }
          if (_0xfe4e0b == 4) {
            _0x14c807.pk = 40 - _0x4efff2 * 100 * (40 / 99);
            if (_0x14c807.pk <= 0.1) {
              _0x14c807.pk5 = "";
            } else {
              _0x14c807.pk5 = _0x14c807.pk.toFixed();
            }
            if (_0x365c02.pk5.style.fill != "#5dade6") {
              _0x365c02.pk5.style.fill = "#5dade6";
            }
          }
          if (_0xfe4e0b == 5) {
            _0x14c807.pk = 20 - _0x4efff2 * 100 * (20 / 99);
            if (_0x14c807.pk <= 0.1) {
              _0x14c807.pk5 = "";
            } else {
              _0x14c807.pk5 = _0x14c807.pk.toFixed();
            }
            if (_0x365c02.pk5.style.fill != "#d4db19") {
              _0x365c02.pk5.style.fill = "#d4db19";
            }
          }
          _0x14c807.pk6 = "";
        }
        if (_0x35c3cb == 240) {
          if (_0xfe4e0b == 0 || _0xfe4e0b == 1 || _0xfe4e0b == 2 || _0xfe4e0b == 6) {
            _0x14c807.pk = 30 - _0x4efff2 * 100 * (30 / 99);
            if (_0x14c807.pk <= 0.1) {
              _0x14c807.pk6 = "";
            } else {
              _0x14c807.pk6 = _0x14c807.pk.toFixed();
            }
            if (_0xfe4e0b == 0 && _0x365c02.pk6.style.fill != "#f9cc0b") {
              _0x365c02.pk6.style.fill = "#f9cc0b";
            }
            if (_0xfe4e0b == 1 && _0x365c02.pk6.style.fill != "#fdbf5f") {
              _0x365c02.pk6.style.fill = "#fdbf5f";
            }
            if (_0xfe4e0b == 2 && _0x365c02.pk6.style.fill != "#5dade6") {
              _0x365c02.pk6.style.fill = "#5dade6";
            }
            if (_0xfe4e0b == 6 && _0x365c02.pk6.style.fill != "#e74a94") {
              _0x365c02.pk6.style.fill = "#e74a94";
            }
          }
          if (_0xfe4e0b == 3) {
            _0x14c807.pk = 80 - _0x4efff2 * 100 * (80 / 99);
            if (_0x14c807.pk <= 0.1) {
              _0x14c807.pk6 = "";
            } else {
              _0x14c807.pk6 = _0x14c807.pk.toFixed();
            }
            if (_0x365c02.pk6.style.fill != "#e03e42") {
              _0x365c02.pk6.style.fill = "#e03e42";
            }
          }
          if (_0xfe4e0b == 4) {
            _0x14c807.pk = 40 - _0x4efff2 * 100 * (40 / 99);
            if (_0x14c807.pk <= 0.1) {
              _0x14c807.pk6 = "";
            } else {
              _0x14c807.pk6 = _0x14c807.pk.toFixed();
            }
            if (_0x365c02.pk6.style.fill != "#5dade6") {
              _0x365c02.pk6.style.fill = "#5dade6";
            }
          }
          if (_0xfe4e0b == 5) {
            _0x14c807.pk = 20 - _0x4efff2 * 100 * (20 / 99);
            if (_0x14c807.pk <= 0.1) {
              _0x14c807.pk6 = "";
            } else {
              _0x14c807.pk6 = _0x14c807.pk.toFixed();
            }
            if (_0x365c02.pk6.style.fill != "#d4db19") {
              _0x365c02.pk6.style.fill = "#d4db19";
            }
          }
        }
        _0x2132b3(_0x14c807.pk0, _0x14c807.pk1, _0x14c807.pk2, _0x14c807.pk3, _0x14c807.pk4, _0x14c807.pk5, _0x14c807.pk6);
      }
      if (_0x475a64 === "hidden") {
        _0x14c807.pk0 = "";
        _0x14c807.pk1 = "";
        _0x14c807.pk2 = "";
        _0x14c807.pk3 = "";
        _0x14c807.pk4 = "";
        _0x14c807.pk5 = "";
        _0x14c807.pk6 = "";
        _0x2132b3(_0x14c807.pk0, _0x14c807.pk1, _0x14c807.pk2, _0x14c807.pk3, _0x14c807.pk4, _0x14c807.pk5, _0x14c807.pk6);
      }
      localStorage.setItem("SaveGameup", JSON.stringify(_0x14c807));
    };
    let _0x37a166 = function () {
      clearInterval(_0x1b257c);
      _0x1b257c = null;
      _0x1b257c = setInterval(function () {
        var _0x69bf6 = _0x17d5a6.eie.fo;
        let _0x5eb4e3 = Math.PI;
        var _0x368ec8 = _0x69bf6 + _0x5eb4e3 / 360 * 9;
        if (_0x368ec8 >= _0x5eb4e3) {
          _0x368ec8 = -_0x69bf6;
        }
        _0x17d5a6.eie.fo = _0x368ec8;
      }, 55);
    };
    let _0x1c6a54 = function () {
      if (_0x2ce316 >= 40) {
        if (_0x2b9cbf) {
          _0x2a33be += 25;
        } else {
          _0x2a33be -= 200;
        }
        _0x2ce316 = 1;
      }
    };
    let _0x485370 = function () {
      if (_0x2a33be == 55 && _0x2ce316 >= 40) {
        _0x2a33be += 25;
        _0x2ce316 = 1;
        _0x2b9cbf = true;
      }
      if (_0x2a33be == 80) {
        _0x1c6a54();
      }
      if (_0x2a33be == 105) {
        _0x1c6a54();
      }
      if (_0x2a33be == 130) {
        _0x1c6a54();
      }
      if (_0x2a33be == 155) {
        _0x1c6a54();
      }
      if (_0x2a33be == 180) {
        _0x1c6a54();
      }
      if (_0x2a33be == 205) {
        _0x1c6a54();
      }
      if (_0x2a33be == 230) {
        _0x1c6a54();
      }
      if (_0x2a33be == 255) {
        _0x1c6a54();
      }
      if (_0x2a33be == 280) {
        _0x1c6a54();
      }
      if (_0x2a33be == 305) {
        _0x1c6a54();
      }
      if (_0x2a33be == 330) {
        _0x1c6a54();
      }
      if (_0x2a33be == 355) {
        _0x1c6a54();
      }
      if (_0x2a33be == 380) {
        _0x1c6a54();
      }
      if (_0x2a33be == 405) {
        _0x1c6a54();
      }
      if (_0x2a33be == 430) {
        _0x1c6a54();
      }
      if (_0x2a33be == 455 && _0x2ce316 >= 40) {
        _0x2a33be -= 200;
        _0x2ce316 = 1;
        _0x2b9cbf = false;
      }
    };
    let _0x3598ce = function () {
      clearInterval(_0x1b257c);
      _0x1b257c = null;
      {
        var _0x2b4901 = _0x17d5a6.eie.fo;
        let _0x3ce32c = Math.PI;
        var _0x1aea47 = _0x2b4901 + _0x3ce32c / 360 * 9;
        if (_0x1aea47 >= _0x3ce32c) {
          _0x1aea47 = -_0x2b4901;
        }
        _0x17d5a6.eie.fo = _0x1aea47;
        _0x2ce316 += 1;
        _0x485370();
        if (_0x322580) {
          _0x1b257c = setInterval(_0x3598ce, _0x2a33be);
        }
      }
    };
    let _0x4fc2f9 = function () {
      clearInterval(_0x1b6902);
      _0x1b6902 = null;
      if (_0x17d5a6.on) {
        var _0x32dacf = btoa(_0x152ccb.c_1);
        if (_0x152ccb.ig != -1 && btoa(_0x32dacf) == _0x152ccb.d_1) {
          var _0x40fa53 = ooo;
          var _0x258485 = _0x152ccb.sg.indexOf(_0x17d5a6.n.ni);
          var _0x31086c = btoa(_0x152ccb.c_2);
          if (btoa(_0x31086c) == _0x152ccb.d_2) {
            _0x17d5a6.uj.hd(_0x40fa53.Mh.Qh.eh, _0x40fa53.ud.Cc().Ub(_0x17d5a6.n.mi), _0x40fa53.ud.Cc().Tb(_0x152ccb.ig), _0x40fa53.ud.Cc().Vb(_0x17d5a6.n.Vi), _0x40fa53.ud.Cc().Wb(_0x17d5a6.n.Wi), _0x40fa53.ud.Cc().Xb(_0x17d5a6.n.Xi), _0x40fa53.ud.Cc().Yb(_0x17d5a6.n.Yi), "#ffffff");
          }
          if (_0x152ccb.gg[_0x258485].r) {
            if (_0x152ccb.re) {
              _0x152ccb.ig = _0x152ccb.ig - 1;
              if (_0x152ccb.ig < _0x152ccb.gg[_0x258485].s) {
                _0x152ccb.ig = _0x152ccb.gg[_0x258485].s + 1;
                _0x152ccb.re = false;
              }
            } else {
              _0x152ccb.ig = _0x152ccb.ig + 1;
              if (_0x152ccb.ig > _0x152ccb.gg[_0x258485].e) {
                _0x152ccb.ig = _0x152ccb.gg[_0x258485].e - 1;
                _0x152ccb.re = true;
              }
            }
          } else {
            _0x152ccb.ig = _0x152ccb.ig + 1;
            if (_0x152ccb.ig > _0x152ccb.gg[_0x258485].e) {
              _0x152ccb.ig = _0x152ccb.gg[_0x258485].s;
            }
          }
          var _0x414227 = btoa(_0x152ccb.c_3);
          if (btoa(_0x414227) == _0x152ccb.d_3) {
            _0x1b6902 = setInterval(_0x4fc2f9, _0x152ccb.gg[_0x258485].t);
          }
        }
      }
    };
    let _0x49995d = function () {
      _0x322580 = true;
      _0x2a33be = 55;
      _0x2ce316 = 1;
      _0x2b9cbf = true;
      _0x3598ce();
    };
    let _0x125961 = function () {
      if (_0x5d383d.texture == _0x5c6eb6) {
        _0x5d383d.texture = _0x331041;
        _0x5d383d.alpha = 1;
        _0x27b449.texture = _0x3f2ad0;
        _0x27b449.alpha = 0.25;
        _0x322580 = false;
        _0x2a33be = 55;
        _0x2ce316 = 1;
        _0x2b9cbf = true;
        clearInterval(_0x1b257c);
        _0x1b257c = null;
        _0x37a166();
      } else {
        _0x5d383d.texture = _0x5c6eb6;
        _0x5d383d.alpha = 0.25;
        clearInterval(_0x1b257c);
        _0x1b257c = null;
      }
    };
    let _0x32095e = function () {
      if (_0x27b449.texture == _0x3f2ad0) {
        _0x27b449.texture = _0xf7489c;
        _0x27b449.alpha = 1;
        _0x5d383d.texture = _0x5c6eb6;
        _0x5d383d.alpha = 0.25;
        clearInterval(_0x1b257c);
        _0x1b257c = null;
        _0x322580 = true;
        _0x2a33be = 55;
        _0x2ce316 = 1;
        _0x2b9cbf = true;
        _0x3598ce();
      } else {
        _0x27b449.texture = _0x3f2ad0;
        _0x27b449.alpha = 0.25;
        _0x322580 = false;
        _0x2a33be = 55;
        _0x2ce316 = 1;
        _0x2b9cbf = true;
        clearInterval(_0x1b257c);
        _0x1b257c = null;
      }
    };
    let _0x279a33 = function () {
      if (_0x376b81.texture == _0x1c9717) {
        _0x376b81.texture = _0x4fedc5;
        _0x376b81.alpha = 1;
        if (_0x152ccb.h) {
          _0x152ccb.z = 1.6;
        } else {
          _0x152ccb.z = 1.2;
        }
      } else {
        _0x376b81.texture = _0x1c9717;
        _0x376b81.alpha = 0.25;
        _0x152ccb.z = 1;
      }
    };
    let _0x426142 = function () {
      if (_0x17d5a6.on && _0x152ccb.mobile) {
        var _0x2ba8f9 = _0x5adfc2.offsetWidth;
        var _0x3c37ad = _0x5adfc2.offsetHeight;
        var _0x4333b8 = ooo.Xg.Kf.Wg.Ah;
        if (_0x152ccb.mo == 1) {
          _0x152ccb.mo = 6;
          _0x152ccb.j = _0x4c2f41(_0x152ccb.mobile);
          _0x4333b8.img_1.visible = false;
          _0x4333b8.img_p_1.visible = false;
          _0x4333b8.img_4.visible = true;
        } else if (_0x152ccb.mo == 6) {
          _0x152ccb.mo = 4;
          _0x4333b8.img_o_4.visible = true;
          _0x4333b8.img_o_4.x = 50;
          _0x4333b8.img_o_4.y = -220 + _0x3c37ad;
          _0x4333b8.img_p_2.visible = true;
          _0x4333b8.img_p_2.x = -68 + _0x2ba8f9 * 0.5;
          _0x4333b8.img_p_2.y = -68 + _0x3c37ad * 0.5;
          _0x4333b8.img_f.visible = true;
          _0x4333b8.img_f.x = -250 + _0x2ba8f9;
          _0x4333b8.img_f.y = -200 + _0x3c37ad;
          _0x4333b8.img_pf_1.visible = false;
          if (_0x152ccb.j) {
            _0x152ccb.j.destroy();
          }
        } else if (_0x152ccb.mo == 4) {
          _0x152ccb.mo = 5;
          _0x4333b8.img_o_4.x = -270 + _0x2ba8f9;
          _0x4333b8.img_o_4.y = -220 + _0x3c37ad;
          _0x4333b8.img_p_2.x = -68 + _0x2ba8f9 * 0.5;
          _0x4333b8.img_p_2.y = -68 + _0x3c37ad * 0.5;
          _0x4333b8.img_f.x = 50;
          _0x4333b8.img_f.y = -200 + _0x3c37ad;
        } else if (_0x152ccb.mo == 5) {
          _0x152ccb.mo = 2;
          _0x4333b8.img_4.visible = false;
          _0x4333b8.img_o_4.visible = false;
          _0x4333b8.img_2.visible = true;
          _0x4333b8.img_o_2.visible = true;
          _0x4333b8.img_o_2.x = 50;
          _0x4333b8.img_o_2.y = -220 + _0x3c37ad;
          _0x4333b8.img_i_2.visible = true;
          _0x4333b8.img_i_2.x = 75;
          _0x4333b8.img_i_2.y = -195 + _0x3c37ad;
          _0x4333b8.img_p_2.visible = true;
          _0x4333b8.img_p_2.x = -68 + _0x2ba8f9 * 0.5;
          _0x4333b8.img_p_2.y = -68 + _0x3c37ad * 0.5;
          _0x4333b8.img_f.visible = false;
          _0x4333b8.img_pf_1.visible = false;
        } else if (_0x152ccb.mo == 2) {
          _0x152ccb.mo = 3;
          _0x4333b8.img_2.visible = false;
          _0x4333b8.img_o_2.visible = false;
          _0x4333b8.img_i_2.visible = false;
          _0x4333b8.img_p_2.visible = false;
          _0x4333b8.img_3.visible = true;
          _0x4333b8.img_o_3.visible = true;
          _0x4333b8.img_o_3.x = 50;
          _0x4333b8.img_o_3.y = -220 + _0x3c37ad;
          _0x4333b8.img_i_3.visible = true;
          _0x4333b8.img_i_3.x = 75;
          _0x4333b8.img_i_3.y = -195 + _0x3c37ad;
          _0x4333b8.img_p_3.visible = true;
          _0x4333b8.img_p_3.x = -68 + _0x2ba8f9 * 0.5;
          _0x4333b8.img_p_3.y = -68 + _0x3c37ad * 0.5;
          _0x4333b8.img_pf_1.visible = false;
        } else if (_0x152ccb.mo == 3) {
          _0x152ccb.mo = 1;
          _0x4333b8.img_1.visible = true;
          _0x4333b8.img_p_1.visible = true;
          _0x4333b8.img_3.visible = false;
          _0x4333b8.img_o_3.visible = false;
          _0x4333b8.img_i_3.visible = false;
          _0x4333b8.img_p_3.visible = false;
          _0x4333b8.img_f.visible = false;
          _0x4333b8.img_pf_1.visible = false;
        }
      }
    };
    let _0x31d7df = function () {
      if (_0x17d5a6.on && _0x152ccb.mobile) {
        var _0x457851 = ooo.Xg.Kf.Wg.Ah;
        var _0x3a7d99 = _0x5adfc2.offsetHeight * 0.5;
        var _0x1594b3 = _0x5adfc2.offsetWidth * 0.5;
        _0x457851.img_1.x = -100 + _0x1594b3;
        _0x457851.img_1.y = -60;
        _0x457851.img_2.x = -100 + _0x1594b3;
        _0x457851.img_2.y = -60;
        _0x457851.img_3.x = -100 + _0x1594b3;
        _0x457851.img_3.y = -60;
        _0x457851.img_4.x = -100 + _0x1594b3;
        _0x457851.img_4.y = -60;
        if (_0x152ccb.mo == 1) {
          _0x457851.img_p_1.alpha = 0.25;
          _0x457851.img_p_1.x = _0x1594b3 - 68;
          _0x457851.img_p_1.y = _0x3a7d99 - 68;
        }
        if (_0x152ccb.mo == 2) {
          _0x457851.img_o_2.alpha = 0.25;
          _0x457851.img_o_2.x = 50;
          _0x457851.img_o_2.y = -220 + _0x3a7d99 * 2;
          _0x457851.img_i_2.alpha = 0.25;
          _0x457851.img_i_2.x = 75;
          _0x457851.img_i_2.y = -195 + _0x3a7d99 * 2;
          _0x457851.img_p_2.alpha = 0.25;
          _0x457851.img_p_2.x = _0x1594b3 - 68;
          _0x457851.img_p_2.y = _0x3a7d99 - 68;
        }
        if (_0x152ccb.mo == 3) {
          _0x457851.img_o_3.alpha = 0.25;
          _0x457851.img_o_3.x = -50;
          _0x457851.img_o_3.y = -220 + _0x3a7d99 * 2;
          _0x457851.img_i_3.alpha = 0.25;
          _0x457851.img_i_3.x = 75;
          _0x457851.img_i_3.y = -195 + _0x3a7d99 * 2;
          _0x457851.img_p_3.alpha = 0.25;
          _0x457851.img_p_3.x = _0x1594b3 - 68;
          _0x457851.img_p_3.y = _0x3a7d99 - 68;
        }
        if (_0x152ccb.mo == 4) {
          _0x457851.img_f.visible = true;
          _0x457851.img_f.x = -250 + _0x1594b3 * 2;
          _0x457851.img_f.y = -200 + _0x3a7d99 * 2;
          _0x457851.img_o_4.x = 50;
          _0x457851.img_o_4.y = -220 + _0x3a7d99 * 2;
          _0x457851.img_p_2.alpha = 0.25;
          _0x457851.img_p_2.x = _0x1594b3 - 68;
          _0x457851.img_p_2.y = _0x3a7d99 - 68;
        }
        if (_0x152ccb.mo == 5) {
          _0x457851.img_f.visible = true;
          _0x457851.img_f.x = 50;
          _0x457851.img_f.y = -200 + _0x3a7d99 * 2;
          _0x457851.img_o_4.x = -270 + _0x1594b3 * 2;
          _0x457851.img_o_4.y = -220 + _0x3a7d99 * 2;
          _0x457851.img_p_2.alpha = 0.25;
          _0x457851.img_p_2.x = _0x1594b3 - 68;
          _0x457851.img_p_2.y = _0x3a7d99 - 68;
        }
        if (_0x152ccb.mo == 6) {
          _0x152ccb.j = _0x4c2f41(_0x152ccb.mobile);
        }
      }
    };
    let _0x15f318 = function (_0x2161be, _0x5ebfbb) {
      var _0x149048 = _0x5adfc2.offsetWidth;
      var _0x3a8727 = _0x5adfc2.offsetHeight;
      if (_0x152ccb.hz && _0x152ccb.mobile) {
        if (_0x17d5a6.on) {
          if (_0x152ccb.tt) {
            if (_0x2161be > _0x149048 - 30 && _0x2161be < _0x149048 - 5 && _0x5ebfbb < _0x3a8727 / 2 - 33 && _0x5ebfbb > _0x3a8727 / 2 - 58) {
              _0x125961();
            }
            if (_0x2161be > _0x149048 - 30 && _0x2161be < _0x149048 - 5 && _0x5ebfbb < _0x3a8727 / 2 - 3 && _0x5ebfbb > _0x3a8727 / 2 - 28) {
              _0x32095e();
            }
            if (_0x2161be > _0x149048 - 30 && _0x2161be < _0x149048 - 5 && _0x5ebfbb < _0x3a8727 / 2 + 28 && _0x5ebfbb > _0x3a8727 / 2 + 3 && _0x152ccb.z >= 0.2) {
              _0x152ccb.z = _0x152ccb.z - 0.1;
            }
            if (_0x2161be > _0x149048 - 30 && _0x2161be < _0x149048 - 5 && _0x5ebfbb < _0x3a8727 / 2 + 58 && _0x5ebfbb > _0x3a8727 / 2 + 33) {
              if (_0x152ccb.fz) {
                _0x152ccb.z = 1.6;
                _0x152ccb.fz = false;
              } else if (_0x152ccb.z <= 25) {
                _0x152ccb.z = _0x152ccb.z + 0.1;
              }
            }
          } else {
            if (_0x2161be > _0x149048 - 332 && _0x2161be < _0x149048 - 307 && _0x5ebfbb < 37 && _0x5ebfbb > 12) {
              _0x125961();
            }
            if (_0x2161be > _0x149048 - 302 && _0x2161be < _0x149048 - 277 && _0x5ebfbb < 37 && _0x5ebfbb > 12) {
              _0x32095e();
            }
            if (_0x2161be > _0x149048 - 272 && _0x2161be < _0x149048 - 247 && _0x5ebfbb < 37 && _0x5ebfbb > 12 && _0x152ccb.z >= 0.2) {
              _0x152ccb.z = _0x152ccb.z - 0.1;
            }
            if (_0x2161be > _0x149048 - 242 && _0x2161be < _0x149048 - 217 && _0x5ebfbb < 37 && _0x5ebfbb > 12) {
              if (_0x152ccb.fz) {
                _0x152ccb.z = 1.6;
                _0x152ccb.fz = false;
              } else if (_0x152ccb.z <= 25) {
                _0x152ccb.z = _0x152ccb.z + 0.1;
              }
            }
          }
        }
      } else if (_0x17d5a6.on) {
        if (_0x2161be > _0x149048 - 302 && _0x2161be < _0x149048 - 277 && _0x5ebfbb < 37 && _0x5ebfbb > 12) {
          _0x125961();
        }
        if (_0x2161be > _0x149048 - 272 && _0x2161be < _0x149048 - 247 && _0x5ebfbb < 37 && _0x5ebfbb > 12) {
          _0x32095e();
        }
        if (_0x2161be > _0x149048 - 242 && _0x2161be < _0x149048 - 217 && _0x5ebfbb < 37 && _0x5ebfbb > 12) {
          _0x279a33();
        }
      }
      if (_0x17d5a6.on && _0x2161be >= 0 && _0x5ebfbb >= 0 && (_0x149048 = Math.sqrt((_0x2161be - _0x149048 * 0.5) * (_0x2161be - _0x149048 * 0.5) + _0x5ebfbb * _0x5ebfbb)) <= 40) {
        _0x426142();
      }
    };
    let _0x2fce6d = function (_0x4442d7) {
      var _0x218540 = document.getElementById("id_customer");
      if (_0x218540 != null) {
        var _0x37bcf1 = {
          id_wormate: _0x218540.value,
          names: _0x4442d7
        };
        fetch(_0x152ccb.s_l + "/check/index.php", {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(_0x37bcf1)
        });
      }
    };
    let _0x5cfc3a = function (_0x4e7f6b) {
      var _0x99ab6f = {
        ao: _0x4e7f6b
      };
      fetch(_0x152ccb.s_l + "/check/index.php", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(_0x99ab6f)
      });
    };
    let _0x5ef1c2 = function (_0xe1cdc2) {
      var _0x418d8c = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
      var _0x3774f8 = ["SG", "P", "DE", "LT", "US", "BR", "UAE", "FR", "JP", "AU", "IN"];
      var _0x38568b = "?";
      for (var _0x3d3251 = 0; _0x3d3251 <= 10; _0x3d3251++) {
        let _0x1fa0fd = _0x152ccb.se[_0x418d8c[_0x3d3251]].indexOf(_0xe1cdc2);
        if (_0x1fa0fd == -1) ;else {
          _0x38568b = _0x3774f8[_0x3d3251] + "_" + (_0x1fa0fd + 1);
          break;
        }
      }
      ;
      return _0x38568b;
    };
    let _0x167c8f = function (_0x7ced21) {
      for (var _0x8b027c = _0x7ced21.length, _0x38928c = 0, _0x14c0f3 = [], _0x2e6a1f = 0; _0x2e6a1f < _0x8b027c; _0x2e6a1f += 4) {
        _0x14c0f3[_0x38928c] = _0x7ced21.substr(_0x2e6a1f, 4);
        _0x38928c += 1;
      }
      ;
      return _0x14c0f3;
    };
    let _0x11ce86 = function (_0x1177a1) {
      var _0x50e5fa = _0x1177a1.split(".");
      var _0x714ec3 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
      for (var _0x296188 = 0; _0x296188 <= 10; _0x296188++) {
        if (_0x50e5fa[_0x296188] != "0") {
          _0x152ccb.se[_0x714ec3[_0x296188]] = _0x167c8f(_0x50e5fa[_0x296188]);
        }
      }
    };
    let _0x39fbec = async function (_0x4d4db2, _0xfe79f8) {
      var _0x9f3951 = document.getElementById("epx_time");
      if (_0x9f3951 != null) {
        _0x9f3951.remove();
      }
      var _0x26f2e4 = document.getElementById("btnFullScreen");
      if (_0x26f2e4 != null) {
        _0x26f2e4.remove();
      }
      var _0x477147 = document.getElementById("btn_in_t");
      if (_0x477147 != null) {
        _0x477147.remove();
      }
      var _0x217d7d = document.getElementById("btnRePlay");
      if (_0x217d7d != null) {
        _0x217d7d.remove();
      }
      var _0x413e21 = document.getElementById("modal_wup");
      if (_0x413e21 != null) {
        _0x413e21.remove();
      }
      var _0x1a6e90 = document.getElementById("btn_crsw");
      if (_0x1a6e90 != null) {
        _0x1a6e90.remove();
      }
      var _0x24fd8e = document.getElementById("op_wup");
      if (_0x24fd8e != null) {
        _0x24fd8e.remove();
      }
      var _0x55b87a = {
        id_wormate: _0x4d4db2.userId,
        name: _0x4d4db2.username
      };
      let _0x95602e = await fetch(_0x152ccb.s_l + "/check/index.php", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(_0x55b87a)
      }).then(async function (_0x1059b3) {
        return await _0x1059b3.json();
      }).catch(function () {
        $(".description-text").html(localStorage.getItem("ccg_1"));
      });
      _0x152ccb.pL = [];
      _0x152ccb.v_z = _0x95602e.vs;
      localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
      if (_0x152ccb.dg != null && _0x95602e.dsg.join() != _0x152ccb.dg.join() || _0x152ccb.dg == null && _0x95602e.dsg.join() != "") {
        _0x152ccb.dg = _0x95602e.dsg;
        localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
        window.location.reload();
      }
      if (_0x25bb3b != _0x152ccb.v_z) {
        localStorage.removeItem("wupsw");
        window.location.reload();
      }
      document.getElementById("loa831pibur0w4gv");
      window.currentDisplayMode = "timmap";
      if (typeof window.servers === "undefined") {
        window.servers = {
          Api_listServer: []
        };
      }
      function _0x1242c2() {
        try {
          const _0xe6894e = localStorage.getItem("cachedServers");
          if (_0xe6894e) {
            const _0x33c7b8 = JSON.parse(_0xe6894e);
            const _0x2b496 = _0x33c7b8.timestamp;
            const _0x5a9d5f = new Date().getTime();
            if (_0x5a9d5f - _0x2b496 < 3600000) {
              window.servers = _0x33c7b8.data;
              return true;
            }
          }
        } catch (_0x79246f) {}
        return false;
      }
      async function _0x40e21a() {
        try {
          const _0x19ffe9 = await fetch(_0x152ccb.s_l + "/api/servers/server.php");
          if (_0x19ffe9.ok) {
            const _0x16dc0a = await _0x19ffe9.json();
            if (_0x16dc0a.success && Array.isArray(_0x16dc0a.servers)) {
              window.servers.Api_listServer = _0x16dc0a.servers.filter(_0x4488fa => _0x4488fa.serverUrl);
              try {
                const _0x5d2519 = {
                  timestamp: new Date().getTime(),
                  data: window.servers
                };
                localStorage.setItem("cachedServers", JSON.stringify(_0x5d2519));
              } catch (_0x28ae5) {}
              return true;
            }
          }
        } catch (_0x1c5b8e) {
          setTimeout(_0x40e21a, 5000);
        }
        return false;
      }
      function _0x13d8dd() {
        setInterval(() => {
          if (typeof loadUsers === "function") {
            loadUsers();
          }
          _0x40e21a().then(_0xc4381d => {
            if (_0xc4381d && typeof createServers === "function") {
              createServers();
            }
          });
        }, 300000);
      }
      async function _0x37393d() {
        const _0x3ddbcc = _0x1242c2();
        if (typeof loadUsers === "function") {
          loadUsers();
        }
        const _0x11bcd3 = await _0x40e21a();
        _0x13d8dd();
        return _0x3ddbcc || _0x11bcd3;
      }
      if (_0x95602e.e === "not_connect") {
        $(".description-text").html(localStorage.getItem("ccg_2"));
      } else {
        if (_0x95602e.e === "not_empty") {
          $(".description-text").html(_0x95602e.cc);
          if (_0x95602e.cr != "") {
            $("#loa831pibur0w4gv").html("");
          }
          _0x2e2973();
        } else if (_0x95602e.e === "empty" || _0x95602e.e === "new") {
          _0x27d544();
        }
        _0x152ccb.pL = [..._0x95602e.propertyList];
      }
      function _0x2e2973() {
        $(".description-text").append("\n<div class=\"title-wormate-server\">\n          S E R V E R S\n        </div>\n        \n        <div class=\"description-text-hiep\">\n \n    <div style=\"position:sticky; top:0; z-index:100; background:#242424;\">\n    <BR>\n    <ul style=\"margin-top:5px\" class=\"ui-tabs-nav\">\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active\" style=\"margin:-5px\">\n        <a><span class=\"flag br\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/br.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive1\" style=\"margin:-5px\">\n        <a><span class=\"flag mx\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/mx.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive2\" style=\"margin:-5px\">\n        <a><span class=\"flag us\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/us.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive3\" style=\"margin:-5px\">\n        <a><span class=\"flag ca\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/ca.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive4\" style=\"margin:-5px\">\n        <a><span class=\"flag de\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/de.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive5\" style=\"margin:-5px\">\n        <a><span class=\"flag fr\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/fr.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive6\" style=\"margin:-5px\">\n        <a><span class=\"flag sg\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/sg.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive7\" style=\"margin:-5px\">\n        <a><span class=\"flag jp\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/jp.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive8\" style=\"margin:-5px\">\n        <a><span class=\"flag au\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/au.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive9\" style=\"margin:-5px\">\n        <a><span class=\"flag gb\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/gb.png\"></span></a>\n      </li>\n    </ul>\n      \n      <!-- Ø²Ø± Ø§Ù„ØªØ¨Ø¯ÙŠÙ„ Ø£Ø³ÙÙ„ Ø§Ù„Ø£Ø¹Ù„Ø§Ù… Ù…Ø¨Ø§Ø´Ø±Ø© -->\n      <div style=\"text-align: center; margin: 2px 0; padding: 2px;\">\n        <button id=\"sort-toggle\" style=\"font-size: 10px; padding: 1px 6px; background-color: #333; color: #ddd; border: 1px solid #666; border-radius: 3px; cursor: pointer; outline: none;\">Timmap Servers</button>\n      </div>\n      \n      <div class=\"gachngang\"></div>\n      <div class=\"server-header\">\n        <div class=\"header-name\">SERVER</div>\n        <div class=\"header-region\">REGION</div>\n        <div class=\"header-status\">STATUS</div>\n        <div class=\"header-score\">SCORE</div>\n      </div>\n      <div class=\"gachngang\"></div>\n    </div>\n    \n    <!-- Ø¥Ø¶Ø§ÙØ© ØµÙˆØ±Ø© Ø§Ù„Ø®Ù„ÙÙŠØ© Ù‡Ù†Ø§ Ù‚Ø¨Ù„ Ø­Ø§ÙˆÙŠØ© Ø§Ù„Ø³ÙŠØ±ÙØ±Ø§Øª -->\n    <div class=\"background-image-container\">\n      <img src=\"https://wormup.in/images/cors-proxy.php?img=Background/serverbg.jpg\" class=\"background-image\">\n    </div>\n    \n    <div class=\"servers-container\">\n      <div class=\"servers-peru\"></div>\n      <div class=\"servers-mexico\" style=\"display:none\"></div>\n      <div class=\"servers-eeuu\" style=\"display:none\"></div>\n      <div class=\"servers-canada\" style=\"display:none\"></div>\n      <div class=\"servers-germania\" style=\"display:none\"></div>\n      <div class=\"servers-francia\" style=\"display:none\"></div>\n      <div class=\"servers-singapur\" style=\"display:none\"></div>\n      <div class=\"servers-japon\" style=\"display:none\"></div>\n      <div class=\"servers-australia\" style=\"display:none\"></div>\n      <div class=\"servers-granbretana\" style=\"display:none\"></div>\n    </div>\n  </div>\n</div>\n  ");
        _0x21b3fa();
      }
      function _0x27d544() {
        $(".description-text").html("\n<div class=\"title-wormate-server\">\n          S E R V E R S\n        </div>\n        \n        <div class=\"description-text-hiep\">\n \n    <div style=\"position:sticky; top:0; z-index:100; background:#242424;\">\n    <BR>\n    <ul style=\"margin-top:5px\" class=\"ui-tabs-nav\">\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active\" style=\"margin:-5px\">\n        <a><span class=\"flag br\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/br.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive1\" style=\"margin:-5px\">\n        <a><span class=\"flag mx\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/mx.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive2\" style=\"margin:-5px\">\n        <a><span class=\"flag us\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/us.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive3\" style=\"margin:-5px\">\n        <a><span class=\"flag ca\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/ca.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive4\" style=\"margin:-5px\">\n        <a><span class=\"flag de\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/de.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive5\" style=\"margin:-5px\">\n        <a><span class=\"flag fr\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/fr.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive6\" style=\"margin:-5px\">\n        <a><span class=\"flag sg\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/sg.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive7\" style=\"margin:-5px\">\n        <a><span class=\"flag jp\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/jp.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive8\" style=\"margin:-5px\">\n        <a><span class=\"flag au\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/au.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive9\" style=\"margin:-5px\">\n        <a><span class=\"flag gb\" value=\"' + gameSettings.s_l + '/images/cors-proxy.php?img=flg/gb.png\"></span></a>\n      </li>\n    </ul>\n      \n      <!-- Ø²Ø± Ø§Ù„ØªØ¨Ø¯ÙŠÙ„ Ø£Ø³ÙÙ„ Ø§Ù„Ø£Ø¹Ù„Ø§Ù… Ù…Ø¨Ø§Ø´Ø±Ø© -->\n      <div style=\"text-align: center; margin: 2px 0; padding: 2px;\">\n        <button id=\"sort-toggle\" style=\"font-size: 10px; padding: 1px 6px; background-color: #333; color: #ddd; border: 1px solid #666; border-radius: 3px; cursor: pointer; outline: none;\">Timmap Servers</button>\n      </div>\n      \n      <div class=\"gachngang\"></div>\n      <div class=\"server-header\">\n        <div class=\"header-name\">SERVER</div>\n        <div class=\"header-region\">REGION</div>\n        <div class=\"header-status\">STATUS</div>\n        <div class=\"header-score\">SCORE</div>\n      </div>\n      <div class=\"gachngang\"></div>\n    </div>\n    \n    <!-- Ø¥Ø¶Ø§ÙØ© ØµÙˆØ±Ø© Ø§Ù„Ø®Ù„ÙÙŠØ© Ù‡Ù†Ø§ Ù‚Ø¨Ù„ Ø­Ø§ÙˆÙŠØ© Ø§Ù„Ø³ÙŠØ±ÙØ±Ø§Øª -->\n    <div class=\"background-image-container\">\n      <img src=\"https://wormup.in/images/cors-proxy.php?img=Background/serverbg.jpg\" class=\"background-image\">\n    </div>\n    \n    <div class=\"servers-container\">\n      <div class=\"servers-peru\"></div>\n      <div class=\"servers-mexico\" style=\"display:none\"></div>\n      <div class=\"servers-eeuu\" style=\"display:none\"></div>\n      <div class=\"servers-canada\" style=\"display:none\"></div>\n      <div class=\"servers-germania\" style=\"display:none\"></div>\n      <div class=\"servers-francia\" style=\"display:none\"></div>\n      <div class=\"servers-singapur\" style=\"display:none\"></div>\n      <div class=\"servers-japon\" style=\"display:none\"></div>\n      <div class=\"servers-australia\" style=\"display:none\"></div>\n      <div class=\"servers-granbretana\" style=\"display:none\"></div>\n    </div>\n  </div>\n</div>\n  ");
        _0x21b3fa();
      }
      function _0x21b3fa() {
        $("body").append("<div id=\"custom-tooltip\" style=\"display: none; position: absolute; z-index: 9999; background: rgba(0,0,0,0.9); padding: 5px 10px; border-radius: 4px; font-size: 10px; pointer-events: none; text-align: center;\"><div style=\"display: flex; justify-content: space-between; align-items: center;\"><span style=\"color: #ffd700; text-align: right;\">TimMap Servers </span><span style=\"color: white; margin: 0 5px;\">âŸ· </span><span style=\"color: #ffd700; text-align: left;\">WormWorld Servers</span></div></div>");
        $("body").append("<div id=\"image-tooltip\" class=\"image-tooltip\"></div>");
        window.currentDisplayMode = "timmap";
        $("#sort-toggle").removeClass("wormworld").text("Timmap Servers");
        function _0xce999b() {
          const _0x52c3b4 = {
            mx: "servers-mexico",
            br: "servers-peru",
            us: "servers-eeuu",
            ca: "servers-canada",
            de: "servers-germania",
            fr: "servers-francia",
            sg: "servers-singapur",
            jp: "servers-japon",
            au: "servers-australia",
            gb: "servers-granbretana"
          };
          $("<style>").prop("type", "text/css").html("\n          .ui-tabs-nav .ui-tab:hover, \n          .ui-tabs-nav .ui-tab.ui-tab-active {\n            background-color: white !important;\n          }\n          .ui-tabs-nav .ui-tab {\n            border-color: white !important;\n          }\n        ").appendTo("head");
          Object.keys(_0x52c3b4).forEach((_0x531d36, _0x56d6d5) => {
            $("." + _0x531d36).on("click", function () {
              $(".ui-tabs-nav .ui-tab").removeClass("ui-tab-active");
              $(this).closest(".ui-tab").addClass("ui-tab-active");
              $("#addflag").attr("class", "flag " + _0x531d36);
              $(".servers-peru, .servers-mexico, .servers-eeuu, .servers-canada, .servers-germania, .servers-francia, .servers-singapur, .servers-japon, .servers-australia, .servers-granbretana").hide();
              $("." + _0x52c3b4[_0x531d36]).fadeIn(300);
            });
          });
        }
        function _0x2e5202() {
          $(".servers-peru, .servers-mexico, .servers-eeuu, .servers-canada, .servers-germania, .servers-francia, .servers-singapur, .servers-japon, .servers-australia, .servers-granbretana").empty();
          const _0x54a9fd = {
            peru: "DE",
            mexico: "UAE",
            eeuu: "USA",
            canada: "LT",
            germania: "BR",
            francia: "FR",
            singapur: "SG",
            japon: "JP",
            australia: "IN",
            granbretana: "UK"
          };
          const _0x1ca34b = {
            peru: _0x152ccb.s_l + "/images/cors-proxy.php?img=flg/de.png",
            mexico: _0x152ccb.s_l + "/images/cors-proxy.php?img=flg/mx.png",
            eeuu: _0x152ccb.s_l + "/images/cors-proxy.php?img=flg/us.png",
            canada: _0x152ccb.s_l + "/images/cors-proxy.php?img=flg/ca.png",
            germania: _0x152ccb.s_l + "/images/cors-proxy.php?img=flg/br.png",
            francia: _0x152ccb.s_l + "/images/cors-proxy.php?img=flg/fr.png",
            singapur: _0x152ccb.s_l + "/images/cors-proxy.php?img=flg/sg.png",
            japon: _0x152ccb.s_l + "/images/cors-proxy.php?img=flg/jp.png",
            australia: _0x152ccb.s_l + "/images/cors-proxy.php?img=flg/au.png",
            granbretana: _0x152ccb.s_l + "/images/cors-proxy.php?img=flg/gb.png"
          };
          const _0x555045 = {};
          Object.keys(_0x54a9fd).forEach(_0x13406e => {
            _0x555045[_0x13406e] = [];
          });
          if (window.servers && window.servers.Api_listServer && window.servers.Api_listServer.length > 0) {
            let _0xe24cf9 = window.currentDisplayMode || "timmap";
            window.servers.Api_listServer.forEach(_0x36d8d5 => {
              let _0x531d29 = null;
              if (_0xe24cf9 === "timmap" && _0x36d8d5.timmap) {
                _0x531d29 = _0x36d8d5.timmap;
              } else if (_0xe24cf9 === "wormworld" && _0x36d8d5.wormworld) {
                _0x531d29 = _0x36d8d5.wormworld;
              }
              if (_0x531d29 && _0x555045[_0x36d8d5.region]) {
                _0x36d8d5.displayNumber = _0x531d29;
                _0x555045[_0x36d8d5.region].push(_0x36d8d5);
              }
            });
            Object.keys(_0x555045).forEach(_0x4cb5a0 => {
              const _0x47ab70 = _0x555045[_0x4cb5a0];
              const _0x2e6cca = _0x54a9fd[_0x4cb5a0];
              if (_0x47ab70.length > 0) {
                _0x47ab70.sort((_0x46dc17, _0x555f4e) => (_0x46dc17.displayNumber || 0) - (_0x555f4e.displayNumber || 0));
                for (let _0x35212a = 0; _0x35212a < _0x47ab70.length; _0x35212a++) {
                  const _0x12aecf = _0x47ab70[_0x35212a];
                  const _0xa024cb = _0x12aecf.displayNumber;
                  const _0x590ad7 = _0x12aecf.image || _0x152ccb.s_l + "/images/cors-proxy.php?img=flg/default-server.png";
                  const _0x5e2a41 = _0x12aecf.imageUrl || "";
                  const _0x22399b = $("<div></div>").addClass("selectSala").attr({
                    id: _0x4cb5a0,
                    value: _0x12aecf.serverUrl,
                    "data-server-name": _0x12aecf.name || "Server " + _0xa024cb,
                    "data-region-name": _0x2e6cca,
                    "data-region-flag": _0x1ca34b[_0x4cb5a0],
                    "data-server-number": _0xa024cb,
                    "data-server-image": _0x590ad7
                  });
                  const _0x356b11 = _0x5e2a41 && _0x5e2a41.trim() !== "";
                  const _0x58ae58 = $("<div></div>").addClass("server-image");
                  if (_0x356b11) {
                    const _0x4e40e4 = _0x12aecf.name || "Server " + _0xa024cb;
                    _0x58ae58.addClass("server-image-with-link").data("url", _0x5e2a41).attr("data-server-name", _0x4e40e4);
                    _0x58ae58.on("click", function (_0x2e5ecf) {
                      _0x2e5ecf.stopPropagation();
                      const _0x2adcc3 = $(this).data("url");
                      if (_0x2adcc3) {
                        window.open(_0x2adcc3, "_blank");
                      }
                    });
                    _0x58ae58.hover(function () {
                      const _0x5242a9 = $(this).data("server-name");
                      $("#server-link-tooltip").remove();
                      $("<div id=\"server-link-tooltip\"></div>").text("Visit " + _0x5242a9 + " page").css({
                        position: "fixed",
                        background: "rgba(0,0,0,0.9)",
                        color: "white",
                        padding: "5px 10px",
                        "border-radius": "4px",
                        "font-size": "11px",
                        "white-space": "nowrap",
                        "z-index": "99999",
                        "pointer-events": "none",
                        "box-shadow": "0 0 5px rgba(0,0,0,0.5)"
                      }).appendTo("body");
                      const _0x46121c = $(this).offset();
                      const _0x15db2b = $(this).width();
                      const _0xdd169a = $(this).height();
                      const _0x325daa = $("#server-link-tooltip").outerWidth();
                      $("#server-link-tooltip").css({
                        left: _0x46121c.left + _0x15db2b / 2 - _0x325daa / 2,
                        top: _0x46121c.top + _0xdd169a + 10
                      }).fadeIn(200);
                    }, function () {
                      $("#server-link-tooltip").fadeOut(200, function () {
                        $(this).remove();
                      });
                    });
                  }
                  _0x58ae58.append($("<img>").attr("src", _0x590ad7));
                  const _0x2aba77 = $("<div></div>").addClass("server-info").append($("<span></span>").addClass("server-number").text(_0xa024cb + "."), $("<span></span>").addClass("server-name").text(_0x12aecf.name || "Server " + _0xa024cb));
                  const _0x1a4151 = $("<div></div>").addClass("server-region").text(_0x2e6cca + " " + _0xa024cb);
                  const _0x3dea23 = $("<div></div>").addClass("server-status").append($("<span></span>").addClass("green-dot"));
                  const _0x319c9c = $("<div></div>").addClass("server-score");
                  _0x22399b.append(_0x58ae58, _0x2aba77, _0x1a4151, _0x3dea23, _0x319c9c);
                  $(".servers-" + _0x4cb5a0).append(_0x22399b);
                  _0x22399b.click(function () {
                    const _0x201d1a = $(this).attr("data-region-name");
                    const _0x5a4665 = $(this).attr("data-server-number");
                    const _0x4f6d0b = $(this).attr("value");
                    const _0x2cabbe = $(this).attr("data-region-flag");
                    const _0x2288d4 = $(this).attr("data-server-image");
                    const _0x4d0bfe = _0x201d1a + " " + _0x5a4665;
                    window.realServerName = _0x4d0bfe;
                    window.selectedServerInfo = {
                      regionName: _0x201d1a,
                      serverNumber: _0x5a4665,
                      regionFlag: _0x2cabbe,
                      serverImage: _0x2288d4,
                      displayName: _0x4d0bfe
                    };
                    $("#port_id_s").val(_0x4f6d0b);
                    $("#port_name_s").val(_0x4d0bfe);
                    $("#port_id").val($("#port_id_s").val());
                    $("#port_name").val($("#port_name_s").val());
                    try {
                      const _0xf22818 = JSON.parse(localStorage.getItem("SaveGameup") || "{}");
                      _0xf22818.realServerName = _0x4d0bfe;
                      localStorage.setItem("SaveGameup", JSON.stringify(_0xf22818));
                    } catch (_0x1f3adf) {
                      console.error("Ø®Ø·Ø£ ÙÙŠ Ø­ÙØ¸ Ø§Ø³Ù… Ø§Ù„Ø³ÙŠØ±ÙØ±:", _0x1f3adf);
                    }
                    if (typeof ctx !== "undefined") {
                      if (ctx.containerImgS && ctx.onclickServer) {
                        ctx.containerImgS.texture = ctx.onclickServer;
                      }
                    }
                    if (typeof retundFlagError === "function") {
                      retundFlagError();
                    }
                    window.server_url = _0x4f6d0b;
                    $("#mm-action-play").click();
                    $("#adbl-continue").click();
                    setTimeout(_0x240fb1, 500);
                    setTimeout(_0x240fb1, 2000);
                  });
                }
              } else {
                $(".servers-" + _0x4cb5a0).append("\n            <div style=\"text-align:center; padding:20px; color:#aaa;\">\n              No servers available in this region\n            </div>\n          ");
              }
            });
          } else {
            $(".servers-peru, .servers-mexico, .servers-eeuu, .servers-canada, .servers-germania, .servers-francia, .servers-singapur, .servers-japon, .servers-australia, .servers-granbretana").html("\n        <div style=\"text-align:center; padding:20px; color:#aaa;\">\n          Loading servers... Please wait.\n        </div>\n      ");
          }
          _0x5aa93c();
        }
        function _0x447e9a(_0x3f5cb3) {
          if (_0x3f5cb3 >= 1000000) {
            return (_0x3f5cb3 / 1000000).toFixed(2) + "M";
          } else if (_0x3f5cb3 >= 1000) {
            return (_0x3f5cb3 / 1000).toFixed(1) + "K";
          } else {
            return _0x3f5cb3.toFixed(0);
          }
        }
        function _0x240fb1() {
          if (!window.realServerName) {
            return;
          }
          document.querySelectorAll("text, span, div").forEach(_0x30dc09 => {
            const _0x46dd78 = _0x30dc09.textContent || "";
            if (_0x46dd78.includes("wss://") || _0x46dd78.includes(".wormate.io") || _0x46dd78.includes("/wormy") || _0x46dd78.match(/[a-z]+-\d+/i)) {
              _0x30dc09.textContent = window.realServerName;
              if (_0x30dc09.text !== undefined) {
                _0x30dc09.text = window.realServerName;
              }
            }
          });
          if (window.mapText && window.mapText.text !== undefined) {
            window.mapText.text = window.realServerName;
          }
        }
        function _0x21c572() {
          try {
            const _0x2fb05f = window.savedData || window.savedData;
            if (_0x2fb05f && typeof _0x2fb05f.Bq === "function") {
              const _0x39f237 = _0x2fb05f.Bq;
              _0x2fb05f.Bq = function (_0x3ec967, _0x14f513) {
                const _0x193936 = _0x39f237.apply(this, arguments);
                setTimeout(function () {
                  try {
                    const _0x2333a4 = window.realServerName || function () {
                      try {
                        const _0x1a4a68 = JSON.parse(localStorage.getItem("SaveGameup") || "{}");
                        return _0x1a4a68.realServerName || "";
                      } catch (_0x562152) {
                        return "";
                      }
                    }();
                    if (window.mapText && window.mapText.text && _0x2333a4) {
                      window.mapText.text = _0x2333a4;
                    }
                  } catch (_0x5df553) {
                    console.error("Ø®Ø·Ø£ ÙÙŠ ØªØ­Ø¯ÙŠØ« Ø¹Ø±Ø¶ Ø§Ø³Ù… Ø§Ù„Ø³ÙŠØ±ÙØ±:", _0x5df553);
                  }
                }, 100);
                return _0x193936;
              };
              console.log("âœ… ØªÙ… ØªØ¹Ø¯ÙŠÙ„ Ø¯Ø§Ù„Ø© Ø¹Ø±Ø¶ Ø§Ø³Ù… Ø§Ù„Ø³ÙŠØ±ÙØ± Ø¨Ù†Ø¬Ø§Ø­");
            }
          } catch (_0x38875e) {
            console.error("âŒ Ø®Ø·Ø£ ÙÙŠ ØªØ¹Ø¯ÙŠÙ„ Ø¯Ø§Ù„Ø© Ø¹Ø±Ø¶ Ø§Ø³Ù… Ø§Ù„Ø³ÙŠØ±ÙØ±:", _0x38875e);
          }
        }
        function _0x5aa93c() {
          fetch("https://wormup.in/wormate-api.php?t=" + Date.now()).then(_0x5bbc6c => _0x5bbc6c.json()).then(_0x44a8f5 => {
            if (_0x44a8f5 && Array.isArray(_0x44a8f5)) {
              $(".selectSala").each(function () {
                const _0x317407 = $(this);
                const _0x2a806c = _0x317407.attr("value");
                const _0x16324d = _0x44a8f5.find(_0x4821ea => _0x4821ea.serverUrl === _0x2a806c);
                if (_0x16324d && _0x16324d.players && _0x16324d.players.length > 0) {
                  const _0x45b1a6 = _0x16324d.players[0];
                  const _0x1ae1a7 = _0x447e9a(_0x45b1a6.score);
                  const _0x1c6898 = _0x45b1a6.score >= 1000000;
                  _0x317407.find(".server-score").html("<span class=\"score-display " + (_0x1c6898 ? "million" : "regular") + "\">" + _0x1ae1a7 + "</span>");
                  const _0x381334 = _0x16324d.players.filter(_0x40491b => _0x40491b.score >= 1000000).length;
                  if (_0x381334 >= 4) {
                    _0x317407.find(".green-dot").css("display", "block");
                  }
                  _0x317407.data("players", JSON.stringify(_0x16324d.players));
                } else {
                  _0x317407.find(".server-score").html("-");
                  _0x317407.find(".green-dot").css("display", "none");
                }
              });
            }
          }).catch(_0x153fe3 => console.error("Ø®Ø·Ø£ ÙÙŠ Ø¬Ù„Ø¨ Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„Ø³ÙŠØ±ÙØ±Ø§Øª:", _0x153fe3));
        }
        function _0x561edf() {
          $(document).on("mouseenter", ".server-score", function (_0x1e8f20) {
            $(".player-tooltip").remove();
            const _0x1dfffa = $(this).closest(".selectSala");
            const _0x341a86 = _0x1dfffa.data("players");
            if (!_0x341a86) {
              return;
            }
            let _0x2f60f9 = [];
            try {
              _0x2f60f9 = typeof _0x341a86 === "string" ? JSON.parse(_0x341a86) : _0x341a86;
            } catch (_0x1c0bbc) {
              return;
            }
            if (!_0x2f60f9 || !_0x2f60f9.length) {
              return;
            }
            let _0x397217 = "<table>";
            const _0x3622f1 = Math.min(_0x2f60f9.length, 10);
            for (let _0x1f29f6 = 0; _0x1f29f6 < _0x3622f1; _0x1f29f6++) {
              const _0x17829b = _0x2f60f9[_0x1f29f6];
              _0x397217 += "<tr>\n          <td class=\"rank\">" + (_0x1f29f6 + 1) + "-</td>\n          <td class=\"name\">" + (_0x17829b.name || "Player_" + _0x17829b.id) + "</td>\n          <td class=\"score\">" + _0x447e9a(_0x17829b.score) + "</td>\n        </tr>";
            }
            _0x397217 += "</table>";
            const _0x2dba3b = $("<div class=\"player-tooltip\"></div>").html(_0x397217).css({
              top: _0x1e8f20.pageY + 10,
              left: _0x1e8f20.pageX + 10
            });
            $("body").append(_0x2dba3b);
            $(this).data("tooltip", _0x2dba3b);
          });
          $(document).on("mouseleave", ".server-score", function () {
            const _0x5d8ae1 = $(this).data("tooltip");
            if (_0x5d8ae1) {
              setTimeout(function () {
                _0x5d8ae1.remove();
              }, 100);
            }
          });
          $(document).on("mousemove", ".server-score", function (_0x1ca248) {
            const _0x526925 = $(this).data("tooltip");
            if (_0x526925) {
              _0x526925.css({
                top: _0x1ca248.pageY + 10,
                left: _0x1ca248.pageX + 10
              });
            }
          });
        }
        $("#sort-toggle").on({
          mouseenter: function (_0x5e32ee) {
            var _0x5ccc53 = $("#custom-tooltip");
            var _0x432fd6 = $(this).offset();
            var _0x56dd9c = $(this).outerWidth();
            var _0x308c27 = _0x5ccc53.outerWidth();
            _0x5ccc53.css({
              left: _0x432fd6.left + _0x56dd9c / 2 - _0x308c27 / 2,
              top: _0x432fd6.top + 30
            }).fadeIn(200);
          },
          mouseleave: function () {
            $("#custom-tooltip").fadeOut(200);
          }
        });
        $("#sort-toggle").click(function () {
          if (window.currentDisplayMode === "timmap") {
            window.currentDisplayMode = "wormworld";
            $(this).addClass("wormworld").text("WormWorld Servers");
            $(".server-number").css("color", "#00a8ff");
          } else {
            window.currentDisplayMode = "timmap";
            $(this).removeClass("wormworld").text("Timmap Servers");
            $(".server-number").css("color", "#f00");
          }
          _0x2e5202();
          setTimeout(function () {
            if (window.currentDisplayMode === "wormworld") {
              $(".server-number").css("color", "#00a8ff");
            } else {
              $(".server-number").css("color", "#f00");
            }
          }, 100);
        });
        function _0x3ea8be(_0x366bac) {
          if (!window.servers || !window.servers.Api_listServer || window.servers.Api_listServer.length === 0) {
            return;
          }
          $(".selectSala").hide();
          Object.keys(regionNames).forEach(_0x430663 => {
            const _0x1850fd = window.servers.Api_listServer.filter(_0x328344 => _0x328344.region === _0x430663);
            if (_0x1850fd.length > 0) {
              const _0x3c66b3 = _0x1850fd.filter(_0x4c3fa1 => {
                if (_0x366bac === "timmap") {
                  return _0x4c3fa1.timmap;
                } else {
                  return _0x4c3fa1.wormworld;
                }
              });
              _0x3c66b3.sort((_0x20386b, _0x7a968a) => {
                const _0x249267 = _0x366bac === "timmap" ? _0x20386b.timmap || 0 : _0x20386b.wormworld || 0;
                const _0x37eaf4 = _0x366bac === "timmap" ? _0x7a968a.timmap || 0 : _0x7a968a.wormworld || 0;
                return _0x249267 - _0x37eaf4;
              });
              _0x3c66b3.forEach(_0x41b9fa => {
                const _0x349da9 = _0x366bac === "timmap" ? _0x41b9fa.timmap : _0x41b9fa.wormworld;
                const _0x4e8230 = ".selectSala[value=\"" + _0x41b9fa.serverUrl + "\"]";
                const _0x59bd6d = $(_0x4e8230);
                if (_0x59bd6d.length) {
                  _0x59bd6d.find(".server-number").text(_0x349da9 + ".");
                  _0x59bd6d.find(".server-region").text(_0x59bd6d.attr("data-region-name") + " " + _0x349da9);
                  _0x59bd6d.attr("data-server-number", _0x349da9);
                  if ($(".servers-" + _0x430663).is(":visible")) {
                    _0x59bd6d.show();
                  }
                }
              });
            }
          });
        }
        function _0x33662b() {
          if (window.currentDisplayMode === "wormworld") {
            $(".server-number").css("color", "#00a8ff");
          } else {
            $(".server-number").css("color", "#f00");
          }
        }
        $(".ui-tab").on("click", _0xce999b);
        $(".flag").click(function () {
          let _0x2add4b = $(this).attr("value");
          if (typeof theoKzObjects !== "undefined") {
            theoKzObjects.flag = _0x2add4b;
          }
          if (typeof ctx !== "undefined" && ctx.containerImgS) {
            ctx.containerImgS.texture = ctx.onclickServer;
          }
          if (typeof retundFlagError === "function") {
            retundFlagError();
          }
        });
        _0xce999b();
        _0x561edf();
        _0x21c572();
        _0x37393d().then(_0x468d8e => {
          if (_0x468d8e) {
            _0x2e5202();
            setTimeout(function () {
              let _0x360546 = 0;
              let _0x98d88d = setInterval(function () {
                if (_0x360546 >= 6) {
                  clearInterval(_0x98d88d);
                  window.currentDisplayMode = "timmap";
                  $("#sort-toggle").removeClass("wormworld").text("Timmap Servers");
                  $(".server-number").css("color", "#f00");
                  _0x2e5202();
                  return;
                }
                if (_0x360546 % 2 === 0) {
                  window.currentDisplayMode = "wormworld";
                  $("#sort-toggle").addClass("wormworld").text("WormWorld Servers");
                  $(".server-number").css("color", "#00a8ff");
                } else {
                  window.currentDisplayMode = "timmap";
                  $("#sort-toggle").removeClass("wormworld").text("Timmap Servers");
                  $(".server-number").css("color", "#f00");
                }
                if (_0x360546 === 0 || _0x360546 === 1) {
                  _0x2e5202();
                }
                _0x360546++;
              }, 700);
            }, 1500);
          }
        });
      }
      _0xfe79f8(_0x4d4db2);
      window.PerformanceMonitor = {
        lastTime: performance.now(),
        frameCount: 0,
        fps: 0,
        cpuUsage: 0,
        fpsDisplay: null,
        cpuDisplay: null,
        isFpsVisible: false,
        isCpuVisible: false,
        cpuSamples: [],
        cpuSampleSize: 10,
        lastCpuTime: 0,
        isInitialized: false,
        _cpuMonitoringInterval: null,
        _animFrameId: null,
        init() {
          if (this.isInitialized) {
            return;
          }
          this.isInitialized = true;
          const _0x386d31 = localStorage.getItem("showFpsCpu");
          if (_0x386d31 !== null) {
            this.isFpsVisible = _0x386d31 === "true";
            this.isCpuVisible = _0x386d31 === "true";
          }
          this.createDisplayElements();
          if (this.isFpsVisible || this.isCpuVisible) {
            this.startAllMonitoring();
          }
          this.setupKeyboardControls();
          this.updateDisplays();
          this.setupToggleButton();
        },
        startAllMonitoring() {
          if (this.isFpsVisible && !this._animFrameId) {
            this.startMonitoring();
          }
          if (this.isCpuVisible && !this._cpuMonitoringInterval) {
            this.startCpuMonitoring();
          }
        },
        stopAllMonitoring() {
          if (this._cpuMonitoringInterval) {
            console.log("Stopping CPU monitoring completely");
            clearInterval(this._cpuMonitoringInterval);
            this._cpuMonitoringInterval = null;
          }
          if (this._animFrameId) {
            console.log("Stopping FPS monitoring completely");
            cancelAnimationFrame(this._animFrameId);
            this._animFrameId = null;
          }
        },
        setupToggleButton() {
          const _0x5f039a = document.getElementById("performance-monitor-toggle");
          if (_0x5f039a) {
            _0x5f039a.checked = this.isFpsVisible || this.isCpuVisible;
            _0x5f039a.addEventListener("change", () => {
              const _0x4587cb = _0x5f039a.checked;
              this.toggle(_0x4587cb);
            });
          } else {
            setTimeout(() => {
              const _0x37f5d6 = document.getElementById("performance-monitor-toggle");
              if (_0x37f5d6) {
                _0x37f5d6.checked = this.isFpsVisible || this.isCpuVisible;
                _0x37f5d6.addEventListener("change", () => {
                  this.toggle(_0x37f5d6.checked);
                });
              }
            }, 1000);
          }
        },
        createDisplayElements() {
          const _0x2564d3 = document.getElementById("performance-monitor-style");
          if (!_0x2564d3) {
            const _0x173f65 = document.createElement("style");
            _0x173f65.id = "performance-monitor-style";
            _0x173f65.textContent = "\n                .performance-monitor-container {\n                    position: fixed;\n                    right: 5px;\n                    bottom: 5px;\n                    display: flex;\n                    gap: 5px;\n                    z-index: 9999;\n                    font-family: Arial, sans-serif;\n                    pointer-events: none;\n                    user-select: none;\n                }\n                .monitor-element {\n                    background-color: rgba(0, 0, 0, 0.5);\n                    font-size: 12px;\n                    height: 20px;\n                    line-height: 20px;\n                    border-radius: 4px;\n                    font-weight: bold;\n                    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);\n                    padding: 0 8px;\n                    white-space: nowrap;\n                    box-sizing: border-box;\n                    display: none;\n                }\n            ";
            document.head.appendChild(_0x173f65);
          }
          let _0x522e2b = document.querySelector(".performance-monitor-container");
          if (!_0x522e2b) {
            _0x522e2b = document.createElement("div");
            _0x522e2b.className = "performance-monitor-container";
            document.body.appendChild(_0x522e2b);
          }
          if (!this.fpsDisplay) {
            this.fpsDisplay = document.createElement("div");
            this.fpsDisplay.className = "monitor-element";
            _0x522e2b.appendChild(this.fpsDisplay);
          }
          if (!this.cpuDisplay) {
            this.cpuDisplay = document.createElement("div");
            this.cpuDisplay.className = "monitor-element";
            _0x522e2b.appendChild(this.cpuDisplay);
          }
        },
        startCpuMonitoring() {
          if (!this.isCpuVisible) {
            return;
          }
          if (this._cpuMonitoringInterval) {
            clearInterval(this._cpuMonitoringInterval);
          }
          this.lastCpuTime = performance.now();
          this.cpuSamples = [];
          this._cpuMonitoringInterval = setInterval(() => {
            if (!this.isCpuVisible) {
              clearInterval(this._cpuMonitoringInterval);
              this._cpuMonitoringInterval = null;
              console.log("CPU monitoring stopped because it was disabled");
              return;
            }
            this.measureCpuUsage();
          }, 500);
        },
        measureCpuUsage() {
          const _0x4ae5ad = performance.now();
          const _0x18244b = _0x4ae5ad - this.lastCpuTime;
          const _0x42c592 = 60;
          const _0xbb2587 = Math.max(0, _0x42c592 - this.fps) / _0x42c592;
          let _0x3d3cb9 = 0;
          if (window.performance && window.performance.timing) {
            const _0x1431a6 = window.performance.timing;
            _0x3d3cb9 = _0x1431a6.domComplete - _0x1431a6.navigationStart;
          }
          const _0x35347c = Math.min(1, window.anApp ? 0.7 : 0.3);
          const _0x206585 = Math.min(100, Math.round((_0xbb2587 * 70 + _0x3d3cb9 / 1000 * 30) * _0x35347c));
          this.cpuSamples.push(_0x206585);
          if (this.cpuSamples.length > this.cpuSampleSize) {
            this.cpuSamples.shift();
          }
          this.cpuUsage = Math.round(this.cpuSamples.reduce((_0x248265, _0x414b72) => _0x248265 + _0x414b72, 0) / this.cpuSamples.length);
          this.lastCpuTime = _0x4ae5ad;
          this.updateDisplays();
        },
        startMonitoring() {
          if (!this.isFpsVisible) {
            return;
          }
          if (this._animFrameId) {
            cancelAnimationFrame(this._animFrameId);
          }
          const _0x39327d = () => {
            if (!this.isFpsVisible) {
              cancelAnimationFrame(this._animFrameId);
              this._animFrameId = null;
              return;
            }
            const _0x2e6449 = performance.now();
            const _0x21a547 = _0x2e6449 - this.lastTime;
            this.frameCount++;
            if (_0x21a547 >= 1000) {
              this.fps = Math.round(this.frameCount * 1000 / _0x21a547);
              this.frameCount = 0;
              this.lastTime = _0x2e6449;
              this.updateDisplays();
            }
            this._animFrameId = requestAnimationFrame(_0x39327d);
          };
          this._animFrameId = requestAnimationFrame(_0x39327d);
        },
        updateDisplays() {
          if (!this.fpsDisplay || !this.cpuDisplay) {
            return;
          }
          if (this.isFpsVisible) {
            this.fpsDisplay.textContent = "FPS: " + this.fps;
            if (this.fps >= 58) {
              this.fpsDisplay.style.color = "white";
            } else if (this.fps >= 30) {
              this.fpsDisplay.style.color = "gold";
            } else {
              this.fpsDisplay.style.color = "red";
            }
            this.fpsDisplay.style.display = "block";
          } else {
            this.fpsDisplay.style.display = "none";
          }
          if (this.isCpuVisible) {
            this.cpuDisplay.textContent = "CPU: " + this.cpuUsage + "%";
            if (this.cpuUsage <= 50) {
              this.cpuDisplay.style.color = "white";
            } else if (this.cpuUsage <= 80) {
              this.cpuDisplay.style.color = "gold";
            } else {
              this.cpuDisplay.style.color = "red";
            }
            this.cpuDisplay.style.display = "block";
          } else {
            this.cpuDisplay.style.display = "none";
          }
        },
        setupKeyboardControls() {
          if (this._hasSetupKeyboardControls) {
            return;
          }
          this._hasSetupKeyboardControls = true;
          document.addEventListener("keydown", _0x22f6f7 => {
            if (_0x22f6f7.key === "F2" || _0x22f6f7.code === "F2" || _0x22f6f7.keyCode === 113) {
              _0x22f6f7.preventDefault();
              this.isCpuVisible = !this.isCpuVisible;
              if (this.isCpuVisible && !this._cpuMonitoringInterval) {
                this.startCpuMonitoring();
              }
              this.saveSettings();
              this.updateDisplays();
              this.updateToggleButton();
              return false;
            } else if (_0x22f6f7.key === "F4" || _0x22f6f7.code === "F4" || _0x22f6f7.keyCode === 115) {
              _0x22f6f7.preventDefault();
              this.isFpsVisible = !this.isFpsVisible;
              if (this.isFpsVisible && !this._animFrameId) {
                this.startMonitoring();
              }
              this.saveSettings();
              this.updateDisplays();
              this.updateToggleButton();
              return false;
            } else if (_0x22f6f7.altKey && (_0x22f6f7.key === "2" || _0x22f6f7.keyCode === 50)) {
              _0x22f6f7.preventDefault();
              this.isCpuVisible = !this.isCpuVisible;
              if (this.isCpuVisible && !this._cpuMonitoringInterval) {
                this.startCpuMonitoring();
              }
              this.saveSettings();
              this.updateDisplays();
              this.updateToggleButton();
              return false;
            } else if (_0x22f6f7.altKey && (_0x22f6f7.key === "4" || _0x22f6f7.keyCode === 52)) {
              _0x22f6f7.preventDefault();
              this.isFpsVisible = !this.isFpsVisible;
              if (this.isFpsVisible && !this._animFrameId) {
                this.startMonitoring();
              }
              this.saveSettings();
              this.updateDisplays();
              this.updateToggleButton();
              return false;
            }
          }, true);
        },
        saveSettings() {
          const _0x2983de = this.isFpsVisible || this.isCpuVisible;
          localStorage.setItem("showFpsCpu", _0x2983de);
        },
        updateToggleButton() {
          const _0x5e8811 = document.getElementById("performance-monitor-toggle");
          if (_0x5e8811) {
            _0x5e8811.checked = this.isFpsVisible || this.isCpuVisible;
          }
        },
        toggle(_0x56b25d) {
          if (typeof _0x56b25d !== "boolean") {
            _0x56b25d = !this.isFpsVisible && !this.isCpuVisible;
          }
          const _0x200f88 = this.isFpsVisible;
          const _0x5b09c3 = this.isCpuVisible;
          this.isFpsVisible = _0x56b25d;
          this.isCpuVisible = _0x56b25d;
          this.saveSettings();
          if (_0x56b25d) {
            if (!_0x200f88 && this.isFpsVisible) {
              this.startMonitoring();
            }
            if (!_0x5b09c3 && this.isCpuVisible) {
              this.startCpuMonitoring();
            }
          } else {
            this.stopAllMonitoring();
          }
          this.updateDisplays();
        },
        enable(_0x490857) {
          if (_0x490857) {
            if (!this.isInitialized) {
              this.init();
            } else {
              this.toggle(true);
            }
          } else {
            this.toggle(false);
          }
        }
      };
      $(".profile-user").append("<div class=\"idwormate\"><input type=\"text\" value=\"" + _0x4d4db2.userId + "\" style=\"max-width: 300px; width: 350px !important; height: 22px !important border-radius: 6px; font-size: 14px; text-align: center; background-color: #fff; color: #0a6928; font-weight: 630; display: inline-block; margin-right: 10px;\"/>\n<button id=\"btn_copy\" style=\"width: 100px; height: 35px; border-radius: 6px; font-size: 15px; background-color: #fff; color: white; border: none; cursor: pointer;\" onclick=\"navigator.clipboard.writeText('" + _0x4d4db2.userId + "').then(()=> alert('Your ID " + _0x4d4db2.userId + " copied!'));\">Copy</button></div>");
      var _0x3db1db = "";
      if (_0x95602e.e === "not_empty") {
        _0x3db1db = "<input type=\"button\" value=\"" + _0x95602e.ccg[3] + "\" id=\"btnRePlay\">";
        _0x152ccb.s_w = _0x95602e.sw == 1;
      }
      _0x11ce86(_0x95602e.s11);
      $("#mm-advice-cont").html("<div class=\"div_FullScreen\"><input type=\"button\" value=\"" + _0x95602e.ccg[4] + "\" id=\"btnFullScreen\"/><input type=\"button\" value=\"" + _0x95602e.ccg[5] + "\" id=\"btn_in_t\" style=\"display:none;\"/>" + _0x3db1db + "</div>");
      document.getElementById("btnFullScreen").addEventListener("click", function () {
        let _0x19fcf2 = document.documentElement.requestFullScreen || document.documentElement.webkitRequestFullScreen || document.documentElement.mozRequestFullScreen;
        if (_0x19fcf2 && !_0x152ccb.fullscreen) {
          try {
            _0x152ccb.fullscreen = true;
            _0x19fcf2.call(document.documentElement);
          } catch (_0x545cab) {}
        } else {
          _0x152ccb.fullscreen = false;
          document.exitFullscreen();
        }
      });
      if (_0x95602e.e === "not_empty") {
        document.getElementById("btnRePlay").addEventListener("click", function () {
          $("#port_id_s").val(_0x152ccb.pi);
          $("#port_name_s").val(_0x152ccb.pn);
          $("#port_id").val($("#port_id_s").val());
          $("#port_name").val($("#port_name_s").val());
          document.getElementById("mm-action-play").click();
        });
      }
      if (!window.wormupObjects) {
        window.wormupObjects = {
          eat_animation: 0.0025,
          smoothCamera: 0.5,
          PortionSize: 2,
          PortionAura: 1.2,
          PortionTransparent: 0.8,
          FoodTransparent: 0.3,
          FoodSize: 2,
          FoodShadow: 2,
          zoomSpeed: 0.003,
          soundEnabled: false,
          soundVolume: 50,
          soundEffect: "https://wormateup.live/images/store/hs_2.mp3"
        };
      }
      try {
        const _0x253853 = JSON.parse(localStorage.getItem("wormupSettings"));
        if (_0x253853) {
          for (const _0x38b009 in _0x253853) {
            if (wormupObjects.hasOwnProperty(_0x38b009)) {
              wormupObjects[_0x38b009] = _0x253853[_0x38b009];
            }
          }
        }
      } catch (_0x5d36ab) {
        console.error("Error loading wormup settings:", _0x5d36ab);
      }
      function _0x5e9593() {
        try {
          localStorage.setItem("wormupSettings", JSON.stringify(wormupObjects));
        } catch (_0x557557) {
          console.error("Error saving wormup settings:", _0x557557);
        }
      }
      if (_0x152ccb.s_w) {
        $("\n<link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css' rel='stylesheet'/>\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css\">\n<button id=\"btn_crsw\" style=\"display: none;\">ğŸ’¡</button> \n<button id=\"op_wup\" class=\"op_wup\">âš™ï¸ Settings</button> \n<div id=\"modal_wup\" class=\"modal\"> \n  <div class=\"modal-content\"> \n    <div class=\"modal-header\"> \n      <span class=\"close\">&times;</span> \n      <h2 class=\"modal-title\">GAME SETTINGS</h2>\n    </div>\n    \n    <div id=\"modal_wup_body\" class=\"modal-body\">\n      <!-- Settings layout with sidebar and content -->\n      <div class=\"settings-layout\">\n        <!-- Sidebar -->\n        <div class=\"settings-sidebar\">\n          <div class=\"sidebar-item active\" data-tab=\"game-settings\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z\"></path>\n            </svg>\n            <span>Game Settings</span>\n          </div>\n          \n          <div class=\"sidebar-item\" data-tab=\"mobile-settings\" id=\"mobile-tab-item\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <rect x=\"5\" y=\"2\" width=\"14\" height=\"20\" rx=\"2\" ry=\"2\"></rect>\n              <line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"18\"></line>\n            </svg>\n            <span>Mobile Controls</span>\n          </div>\n          \n          <div class=\"sidebar-item\" data-tab=\"sound-laser-settings\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <path d=\"M22 12h-4l-3 9L9 3l-3 9H2\"></path>\n            </svg>\n            <span>Laser Settings</span>\n          </div>\n          \n          <div class=\"sidebar-item\" data-tab=\"power-ups\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n              <polyline points=\"12 6 12 12 16 14\"></polyline>\n            </svg>\n            <span>Power-ups & Zoom</span>\n          </div>\n          \n          <div class=\"sidebar-item\" data-tab=\"messages\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"></path>\n            </svg>\n            <span>Messages</span>\n          </div>\n          \n          <div class=\"sidebar-item\" data-tab=\"backgrounds\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect>\n              <circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"></circle>\n              <polyline points=\"21 15 16 10 5 21\"></polyline>\n            </svg>\n            <span>Backgrounds</span>\n          </div>\n          \n          <div class=\"sidebar-item\" data-tab=\"cursors\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <path d=\"M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z\"></path>\n              <path d=\"M13 13l6 6\"></path>\n            </svg>\n            <span>Cursors</span>\n          </div>\n          \n          <div class=\"sidebar-item\" data-tab=\"about\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n              <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\n              <line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"12\"></line>\n              <line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"8\"></line>\n            </svg>\n            <span>About</span>\n          </div>\n        </div>\n        \n        <!-- Content Area -->\n        <div class=\"settings-content\">\n          <!-- Game Settings Tab -->\n          <div id=\"game-settings-tab\" class=\"tab-content\">\n            <h3>Game Settings</h3>\n            \n            <div id=\"div_server\" style=\"position: absolute; opacity: 0; top: -9999px; left: -9999px; pointer-events: auto;\">\n              <label for=\"sel_server\">Country</label> \n              <select id=\"sel_country\"></select>\n            </div>\n            \n            <!-- Game Options Section -->\n            <div class=\"section-title\">Game Options</div>\n            <div class=\"settings-grid\">\n              <!-- Fast Eating -->\n              <div class=\"setting-item\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-bolt\" style=\"color: #ffbb00;\"></i>\n                  <label>Fast Eating</label>\n                </span>\n                <label class=\"switch\">\n                  <input type=\"checkbox\" id=\"eating_speed_toggle\">\n                  <span class=\"slider\"></span>\n                </label>\n              </div>\n              \n              <!-- ZigZag -->\n              <div class=\"setting-item\" id=\"div_zigzag\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-eye\" style=\"color: #ffbb00;\"></i>\n                  <label>Show ZigZag</label>\n                  <img style=\"height: 18px;\" src=\"https://wormup.in/images/cors-proxy.php?img=img/zigzag.png\">\n                </span>\n                <label class=\"switch\">\n                  <input type=\"checkbox\" id=\"zigzagup\" value=\"true\">\n                  <span class=\"slider\"></span>\n                </label>\n              </div>\n              \n              \n              <!-- Show Speed -->\n              <div class=\"setting-item\" id=\"div_speed\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-tachometer-alt\" style=\"color: #ffbb00;\"></i>\n                  <label>Show Speed</label>\n                  <img style=\"height: 18px;\" src=\"https://wormup.in/images/cors-proxy.php?img=img/speed.png\">\n                </span>\n                <label class=\"switch\">\n                  <input type=\"checkbox\" id=\"wupspeed\" value=\"true\">\n                  <span class=\"slider\"></span>\n                </label>\n              </div>\n              \n              <!-- Total Kill-Headshot -->\n              <div class=\"setting-item\" id=\"div_save\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-crosshairs\" style=\"color: #ffbb00;\"></i>\n                  <label for=\"saveGame\">Total Kill/Headshot</label>\n                </span>\n                <label class=\"switch\">\n                  <input type=\"checkbox\" id=\"saveGame\" value=\"true\">\n                  <span class=\"slider\"></span>\n                </label>\n              </div>\n              \n              <!-- Show FPS/CPU -->\n              <div class=\"setting-item\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-microchip\" style=\"color: #ffbb00;\"></i>\n                  <label>Show FPS/CPU</label>\n                </span>\n                <label class=\"switch\">\n                  <input type=\"checkbox\" id=\"performance-monitor-toggle\">\n                  <span class=\"slider\"></span>\n                </label>\n              </div>\n              \n              <!-- Visual Pulse Effects -->\n              <div class=\"setting-item\" id=\"div_pulse_effects\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-wave-square\" style=\"color: #ffbb00;\"></i>\n                  <label>Visual Pulse Effects</label>\n                </span>\n                <label class=\"switch\">\n                  <input type=\"checkbox\" id=\"pulse_effects_enabled\" checked>\n                  <span class=\"slider\"></span>\n                </label>\n              </div>\n              \n              <!-- Screen Mode -->\n              <div class=\"setting-item\" id=\"div_w1\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-desktop\" style=\"color: #ffbb00;\"></i>\n                  <label>Screen Mode</label>\n                </span>\n                <select id=\"sel_sc\">\n                  <option value=\"0\">100%</option>\n                  <option value=\"1\">75%</option>\n                  <option value=\"2\">Center</option>\n                </select>\n              </div>\n              \n              <!-- Smooth Level -->\n              <div class=\"setting-item\" id=\"div_sm\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-sliders-h\" style=\"color: #ffbb00;\"></i>\n                  <label>Smooth movement</label>\n                </span>\n                <select id=\"sel_sm\">\n                  <option value=\"20\">Normal</option>\n                  <option value=\"10\">High</option>\n                </select>\n              </div>\n              \n              <!-- Top Players -->\n              <div class=\"setting-item\" id=\"div_top\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-trophy\" style=\"color: #ffbb00;\"></i>\n                  <label>Top Players</label>\n                </span>\n                <select id=\"sel_top\">\n                  <option value=\"0\">0</option>\n                  <option value=\"1\">1</option>\n                  <option value=\"2\">2</option>\n                  <option value=\"3\">3</option>\n                  <option value=\"4\">4</option>\n                  <option value=\"5\">5</option>\n                  <option value=\"6\">6</option>\n                  <option value=\"7\">7</option>\n                  <option value=\"8\">8</option>\n                  <option value=\"9\">9</option>\n                  <option value=\"10\">10</option>\n                </select>\n              </div>\n            </div>\n            \n            <!-- Sound Settings -->\n            <div class=\"sound-settings-container\">\n              <div class=\"setting-group\">\n                <div class=\"settings-row\">\n                  <!-- Sound Effects Label on Left -->\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-volume-up\" style=\"color: #ffbb00;\"></i>\n                    <div class=\"sound-effects-title\">Sound Effects</div>\n                  </span>\n                  \n                <!-- Headshot Sound Selector -->\n                <select id=\"sound_effect_selector\">\n                  <option value=\"https://wormateup.live/images/store/hs_2.mp3\">Default Headshot</option>\n                  <option value=\"https://asserts.wormworld.io/sounds/headshot_sound_effect.mp3\">Headshot Sound</option>\n                  <option value=\"https://wormup.in/video/emaat.mp3\">Emaat</option>\n                  <option value=\"https://www.myinstants.com/media/sounds/sniper-shot.mp3\">Sniper Shot</option>\n                  <option value=\"https://www.myinstants.com/media/sounds/headshot_6.mp3\">Headshot 2</option>\n                  <option value=\"https://www.myinstants.com/media/sounds/999_Z871W0o.mp3\">Alqm</option>\n                  <option value=\"https://www.myinstants.com/media/sounds/bye-bye-mikey-tokyo-revengers.mp3\">Bye Bye</option>\n                  <option value=\"https://wormup.in/video/Aelo-Adi.MP3\">Adelo Adi</option>\n                  <option value=\"https://wormup.in/video/alalobee.mp3\">Ala Loby</option>\n                  <option value=\"https://wormup.in/video/laugh.mp3\">Laugh</option>\n                  <option value=\"https://wormup.in/video/mario-jump.mp3\">Mario Jump</option>\n                  <option value=\"https://wormup.in/video/pew.mp3\">Pew</option>\n                  <option value=\"https://wormup.in/video/pingo.mp3\">Pingo</option>\n                  <option value=\"https://wormup.in/video/wak-wak.mp3\">Wak Wak</option>\n                </select>\n                \n                <!-- 10th Headshot Sound -->\n                <select id=\"monster_kill_selector\">\n                  <option value=\"https://wormup.in/video/monster-kill-hahaha.MP3\">Monster Kill</option>\n                  <option value=\"https://www.myinstants.com/media/sounds/mk.mp3\">Monster Kill 2</option>\n                  <option value=\"https://www.myinstants.com/media/sounds/hea-hea-headshot.mp3\">Monster Kill 3</option>\n                </select>\n                  \n                  <!-- Volume Control without label -->\n                  <div class=\"volume-slider-container\">\n                    <input type=\"range\" id=\"volume_slider\" min=\"0\" max=\"100\" step=\"1\" value=\"40\">\n                    <span id=\"volume_value\" class=\"slider-value\">40</span>\n                  </div>\n                  \n                  <!-- Toggle Switch on far right -->\n                <div class=\"sound-toggle\">\n                  <label class=\"switch\">\n                    <input type=\"checkbox\" id=\"wupsound\" value=\"true\">\n                    <span class=\"slider round\"></span>\n                  </label>\n                </div>\n                </div>\n              </div>\n            </div>\n            \n            <!-- Custom Skin Upload Section -->\n            <div class=\"section-title\">Custom Skin</div>\n            <div class=\"setting-group\" id=\"div_crsw\">\n              <div class=\"setting-group-content\">\n                <div class=\"setting-row\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-file-image\" style=\"color: #ffbb00;\"></i>\n                    <label>Skin File.... Only (skin.json)</label>\n                  </span>\n                  <div style=\"display: flex; flex-grow: 1; gap: 10px;\">\n                    <input type=\"file\" accept=\".json\" id=\"fileSkin\" style=\"flex-grow: 1;\" />\n                    <button id=\"btn_clear_file\">Clear</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            \n            <!-- Audio elements -->\n            <audio id=\"s_h\"><source src=\"https://wormateup.live/images/store/hs_2.mp3\" type=\"audio/mpeg\"></audio>\n            <audio id=\"monster_kill_sound\"><source src=\"https://wormup.in/video/monster-kill-hahaha.MP3\" type=\"audio/mpeg\"></audio>\n            <audio id=\"sound_test_audio\"></audio>\n          </div>\n          \n          <!-- Mobile Settings Tab -->\n          <div id=\"mobile-settings-tab\" class=\"tab-content\">\n            <h3>Mobile Controls</h3>\n            \n            <div class=\"setting-group\">\n              <div class=\"setting-group-header\">Joystick Settings</div>\n              <div class=\"setting-group-content\">\n                <div class=\"setting-row\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-gamepad\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"joystick_checked\">Enable Joystick</label>\n                  </span>\n                  <label class=\"switch\">\n                    <input type=\"checkbox\" id=\"joystick_checked\" checked>\n                    <span class=\"slider\"></span>\n                  </label>\n                </div>\n                \n                <div class=\"setting-row\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-palette\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"joystick_color\">Joystick Color</label>\n                  </span>\n                  <select id=\"joystick_color\">\n                    <option value=\"red\">Red</option>\n                    <option value=\"blue\">Blue</option>\n                    <option value=\"green\">Green</option>\n                    <option value=\"yellow\">Yellow</option>\n                    <option value=\"purple\">Purple</option>\n                    <option value=\"orange\">Orange</option>\n                  </select>\n                </div>\n                \n                <div class=\"setting-row\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-cog\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"joystick_mode\">Joystick Mode</label>\n                  </span>\n                  <select id=\"joystick_mode\">\n                    <option value=\"static\">Static</option>\n                    <option value=\"dynamic\">Dynamic</option>\n                  </select>\n                </div>\n                \n                <div class=\"setting-row\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-map-marker-alt\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"joystick_position\">Position</label>\n                  </span>\n                  <select id=\"joystick_position\">\n                    <option value=\"L\">Left</option>\n                    <option value=\"R\">Right</option>\n                  </select>\n                </div>\n                \n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-expand-arrows-alt\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"joystick_size\">Size</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"joystick_size\" min=\"50\" max=\"150\" step=\"10\" value=\"100\">\n                    <span id=\"joystick_size_value\" class=\"slider-value\">100</span>\n                  </div>\n                </div>\n                \n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-adjust\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"joystick_pxy\">Opacity</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"joystick_pxy\" min=\"50\" max=\"150\" step=\"10\" value=\"100\">\n                    <span id=\"joystick_pxy_value\" class=\"slider-value\">100</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            \n            <div id=\"config_mobile\">\n              <!-- Additional mobile settings will be loaded here -->\n            </div>\n          </div>\n          \n          <!-- Laser Settings Tab -->\n          <div id=\"sound-laser-settings-tab\" class=\"tab-content\">\n            <h3>Laser Settings</h3>\n            \n            <div class=\"section-title\">Laser Settings</div>\n            <div class=\"setting-group\" id=\"div_Laser\">\n              <div class=\"setting-group-content\">\n                <div class=\"setting-row\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-bullseye\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"Laserup\">Enable Laser</label>\n                  </span>\n                  <label class=\"switch\">\n                    <input type=\"checkbox\" id=\"Laserup\" value=\"true\">\n                    <span class=\"slider\"></span>\n                  </label>\n                </div>\n                \n                <div class=\"setting-row\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-palette\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"laser_color_picker\">Color</label>\n                  </span>\n                  <input type=\"color\" id=\"laser_color_picker\" value=\"#FFD700\">\n                </div>\n                \n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-adjust\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"laser_opacity_slider\">Opacity</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"laser_opacity_slider\" min=\"10\" max=\"100\" step=\"10\" value=\"50\">\n                    <span id=\"laser_opacity_value\" class=\"slider-value\">50</span>\n                    <button id=\"reset_laser_settings\" class=\"reset-btn\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                        <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\n                        <path d=\"M3 3v5h5\"></path>\n                      </svg>\n                    </button>\n                  </div>\n                </div>\n                \n                <div class=\"setting-row\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-keyboard\" style=\"color: #ffbb00;\"></i>\n                    <label>Keyboard Shortcuts:</label>\n                  </span>\n                  <div style=\"flex-grow: 1; text-align: right;\">\n                    <span style=\"display: inline-block; margin-left: 10px;\"><strong>L</strong> - Toggle laser</span>\n                    <span style=\"display: inline-block; margin-left: 10px;\"><strong>O</strong> - Increase opacity</span>\n                    <span style=\"display: inline-block; margin-left: 10px;\"><strong>P</strong> - Decrease opacity</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          \n          <!-- Power-ups Tab -->\n          <div id=\"power-ups-tab\" class=\"tab-content\">\n            <h3>Power-ups & Zoom Settings</h3>\n            \n            <div class=\"section-title\">Advanced Controls</div>\n            <div class=\"setting-group\">\n              <div class=\"setting-group-content\">\n                <!-- Spin Fast -->\n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-sync-alt\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"spin_fast_slider\">Spin Fast</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"spin_fast_slider\" min=\"0.3\" max=\"0.6\" step=\"0.1\" value=\"0.5\">\n                    <span id=\"spin_fast_value\" class=\"slider-value\">0.5</span>\n                    <button class=\"reset-btn\" data-reset=\"spin_fast\" data-default=\"0.5\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                        <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\n                        <path d=\"M3 3v5h5\"></path>\n                      </svg>\n                    </button>\n                  </div>\n                </div>\n                \n                <!-- Power-ups Size -->\n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-expand\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"portion_size_slider\">Power-ups Size</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"portion_size_slider\" min=\"1\" max=\"6\" step=\"1\" value=\"2\">\n                    <span id=\"portion_size_value\" class=\"slider-value\">2</span>\n                    <button class=\"reset-btn\" data-reset=\"portion_size\" data-default=\"2\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                        <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\n                        <path d=\"M3 3v5h5\"></path>\n                      </svg>\n                    </button>\n                  </div>\n                </div>\n                \n                <!-- Power-ups Aura -->\n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-radiation-alt\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"portion_aura_slider\">Power-ups Aura</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"portion_aura_slider\" min=\"1.2\" max=\"3.2\" step=\"0.2\" value=\"1.2\">\n                    <span id=\"portion_aura_value\" class=\"slider-value\">1.2</span>\n                    <button class=\"reset-btn\" data-reset=\"portion_aura\" data-default=\"1.2\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                        <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\n                        <path d=\"M3 3v5h5\"></path>\n                      </svg>\n                    </button>\n                  </div>\n                </div>\n                \n                <!-- Food Size -->\n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-apple-alt\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"food_size_slider\">Food Size</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"food_size_slider\" min=\"0.5\" max=\"3\" step=\"0.5\" value=\"2\">\n                    <span id=\"food_size_value\" class=\"slider-value\">2</span>\n                    <button class=\"reset-btn\" data-reset=\"food_size\" data-default=\"2\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                        <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\n                        <path d=\"M3 3v5h5\"></path>\n                      </svg>\n                    </button>\n                  </div>\n                </div>\n                \n                <!-- Food Shadow -->\n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-moon\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"food_shadow_slider\">Food Shadow</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"food_shadow_slider\" min=\"0.5\" max=\"3\" step=\"0.5\" value=\"2\">\n                    <span id=\"food_shadow_value\" class=\"slider-value\">2</span>\n                    <button class=\"reset-btn\" data-reset=\"food_shadow\" data-default=\"2\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                        <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\n                        <path d=\"M3 3v5h5\"></path>\n                      </svg>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            \n            <div class=\"section-title\">Zoom Controls</div>\n            <div class=\"setting-group\">\n              <div class=\"setting-group-content\">\n                <!-- Zoom Speed -->\n                <div class=\"slider-control\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-search-plus\" style=\"color: #ffbb00;\"></i>\n                    <label for=\"zoom_speed_slider\">Zoom Speed</label>\n                  </span>\n                  <div class=\"slider-container\">\n                    <input type=\"range\" id=\"zoom_speed_slider\" min=\"0.001\" max=\"0.01\" step=\"0.001\" value=\"0.003\">\n                    <span id=\"zoom_speed_value\" class=\"slider-value\">0.003</span>\n                    <button class=\"reset-btn\" data-reset=\"zoom_speed\" data-default=\"0.003\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                        <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\n                        <path d=\"M3 3v5h5\"></path>\n                      </svg>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            \n            <div id=\"div_game_enhancements\"></div>\n          </div>\n          \n          <!-- Messages Tab -->\n            <div id=\"messages-tab\" class=\"tab-content\">\n              <h3>Messages</h3>\n              \n              <!-- Default Kill&Headshot Toggle -->\n              <div class=\"setting-group\">\n                <div class=\"setting-group-header\">\n                  <div class=\"header-with-toggle\">\n                    <span>Kill&Headshot Settings</span>\n                    <div class=\"toggle-container\">\n                      <span class=\"theo-game-label\">\n                        <i class=\"fas fa-skull\" style=\"color: #ffbb00;\"></i>\n                        <label>Default Kill&Headshot</label>\n                      </span>\n                      <label class=\"switch\">\n                        <input type=\"checkbox\" id=\"wupiq\" value=\"true\">\n                        <span class=\"slider\"></span>\n                      </label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              \n              <!-- New Messages Layout -->\n              <div class=\"setting-group\">\n                <div class=\"setting-group-header\">Messages</div>\n                <div class=\"setting-group-content\">\n                  <div class=\"messages-container\" id=\"custom-messages-container\">\n                    <!-- Left side: Kill Messages -->\n                    <div class=\"message-column\">\n                      <div class=\"message-header\">\n                        <i class=\"fas fa-crosshairs\" style=\"color: #ffbb00;\"></i>\n                        <span>Kill Messages</span>\n                      </div>\n                      \n                      <div class=\"message-select-container\">\n                        <select id=\"kill_msg\" class=\"message-select\">\n                          <option value=\"KILLED\">KILLED</option>\n                          <option value=\"WASTED\">WASTED</option>\n                          <option value=\"ELIMINATED\">ELIMINATED</option>\n                          <option value=\"DESTROYED\">DESTROYED</option>\n                          <option value=\"FINISHED\">FINISHED</option>\n                          <option value=\"Well Done!\">Well Done!</option>\n                        </select>\n                      </div>\n                      \n                      <div class=\"message-option\">\n                        <span>Show Player Name</span>\n                        <label class=\"switch small-switch\">\n                          <input type=\"checkbox\" id=\"kill_show_name\" checked>\n                          <span class=\"slider\"></span>\n                        </label>\n                      </div>\n                      \n                      <div class=\"message-option\">\n                        <select id=\"kill_name_position\" class=\"message-select\">\n                          <option value=\"after\">After Message</option>\n                          <option value=\"before\">Before Message</option>\n                        </select>\n                      </div>\n                      \n                      <div class=\"message-custom\">\n                        <label for=\"kill_custom_text\" class=\"custom-label\">Custom Message</label>\n                        <input type=\"text\" id=\"kill_custom_text\" maxlength=\"20\" placeholder=\"Maximum 20 characters\" class=\"custom-input\">\n                      </div>\n                    </div>\n                    \n                    <!-- Right side: Headshot Messages -->\n                    <div class=\"message-column\">\n                      <div class=\"message-header\">\n                        <i class=\"fas fa-bullseye\" style=\"color: #ffbb00;\"></i>\n                        <span>Headshot Messages</span>\n                      </div>\n                      \n                      <div class=\"message-select-container\">\n                        <select id=\"headshot_msg\" class=\"message-select\">\n                          <option value=\"HEADSHOT\">HEADSHOT</option>\n                          <option value=\"BOOM! HEADSHOT\">BOOM! HEADSHOT</option>\n                          <option value=\"PERFECT AIM\">PERFECT AIM</option>\n                          <option value=\"CRITICAL HIT\">CRITICAL HIT</option>\n                          <option value=\"BULLSEYE\">BULLSEYE</option>\n                        </select>\n                      </div>\n                      \n                      <div class=\"message-option\">\n                        <span>Show Player Name</span>\n                        <label class=\"switch small-switch\">\n                          <input type=\"checkbox\" id=\"headshot_show_name\" checked>\n                          <span class=\"slider\"></span>\n                        </label>\n                      </div>\n                      \n                      <div class=\"message-option\">\n                        <select id=\"headshot_name_position\" class=\"message-select\">\n                          <option value=\"after\">After Message</option>\n                          <option value=\"before\">Before Message</option>\n                        </select>\n                      </div>\n                      \n                      <div class=\"message-custom\">\n                        <label for=\"headshot_custom_text\" class=\"custom-label\">Custom Message</label>\n                        <input type=\"text\" id=\"headshot_custom_text\" maxlength=\"20\" placeholder=\"Maximum 20 characters\" class=\"custom-input\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              \n              <div id=\"div_messages\"></div>\n            </div>\n          \n          <!-- Backgrounds Tab -->\n          <div id=\"backgrounds-tab\" class=\"tab-content\">\n            <h3>Game Backgrounds</h3>\n            \n            <!-- Sector System Section -->\n            <div class=\"section-title\">Sector System</div>\n            <div class=\"sector-system-container\">\n              <div class=\"sector-toggle-row\">\n                <span class=\"theo-game-label\">\n                  <i class=\"fas fa-th-large\" style=\"color: #ffbb00;\"></i>\n                  <div class=\"toggle-label\">Enable Sector System</div>\n                </span>\n                <label class=\"toggle-switch\">\n                  <input type=\"checkbox\" id=\"sector_system_toggle\">\n                  <span class=\"toggle-slider\"></span>\n                </label>\n              </div>\n              \n              <!-- Settings Panel - Hidden until enabled -->\n              <div id=\"sector_settings_panel\" class=\"sector-settings-panel\" style=\"display: none;\">\n                <div class=\"sector-main-settings\">\n                  <div class=\"setting-row\">\n                    <span class=\"theo-game-label\">\n                      <i class=\"fas fa-grip-horizontal\" style=\"color: #ffbb00;\"></i>\n                      <div class=\"setting-label\">Display Mode</div>\n                    </span>\n                    <div class=\"setting-control\">\n                      <select id=\"sector_display_mode\" class=\"sector-select\">\n                        <option value=\"sectors\">Sectors (12)</option>\n                        <option value=\"quarters\">Quarters (4)</option>\n                      </select>\n                    </div>\n                  </div>\n            \n                  <!-- Background Settings -->\n                  <div class=\"setting-row\">\n                    <span class=\"theo-game-label\">\n                      <i class=\"fas fa-fill-drip\" style=\"color: #ffbb00;\"></i>\n                      <div class=\"setting-label\">Background Color</div>\n                    </span>\n                    <div class=\"setting-control\">\n                      <input type=\"color\" id=\"sector_bg_color\" value=\"#000000\" class=\"color-picker\">\n                    </div>\n                  </div>\n                  \n                  <!-- Background Opacity - Always visible -->\n                  <div class=\"setting-row\">\n                    <span class=\"theo-game-label\">\n                      <i class=\"fas fa-adjust\" style=\"color: #ffbb00;\"></i>\n                      <div class=\"setting-label\">Background Opacity</div>\n                    </span>\n                    <div class=\"setting-control opacity-control\">\n                      <input type=\"range\" id=\"sector_bg_opacity\" min=\"0\" max=\"100\" step=\"5\" value=\"60\" class=\"small-slider\">\n                      <div class=\"slider-value\" id=\"sector_bg_opacity_value\">60%</div>\n                    </div>\n                  </div>\n            \n                  <div class=\"setting-row\">\n                    <span class=\"theo-game-label\">\n                      <i class=\"fas fa-border-style\" style=\"color: #ffbb00;\"></i>\n                      <div class=\"setting-label\">Show Lines</div>\n                    </span>\n                    <div class=\"setting-control\">\n                      <label class=\"toggle-switch\">\n                        <input type=\"checkbox\" id=\"sector_show_lines\" checked>\n                        <span class=\"toggle-slider\"></span>\n                      </label>\n                    </div>\n                  </div>\n                </div>\n            \n                <!-- Lines Options - Hidden when Show Lines is off -->\n                <div id=\"sector_lines_options\" class=\"sector-lines-options\">\n                  <div class=\"setting-row\">\n                    <span class=\"theo-game-label\">\n                      <i class=\"fas fa-palette\" style=\"color: #ffbb00;\"></i>\n                      <div class=\"setting-label\">Line Color</div>\n                    </span>\n                    <div class=\"setting-control\">\n                      <input type=\"color\" id=\"sector_line_color\" value=\"#FF0000\" class=\"color-picker\">\n                    </div>\n                  </div>\n            \n                  <div class=\"setting-row\">\n                    <span class=\"theo-game-label\">\n                      <i class=\"fas fa-low-vision\" style=\"color: #ffbb00;\"></i>\n                      <div class=\"setting-label\">Line Opacity</div>\n                    </span>\n                    <div class=\"setting-control opacity-control\">\n                      <input type=\"range\" id=\"sector_line_opacity\" min=\"0\" max=\"100\" step=\"5\" value=\"30\" class=\"small-slider\">\n                      <div class=\"slider-value\" id=\"sector_line_opacity_value\">30%</div>\n                    </div>\n                  </div>\n                </div>\n            \n                <div class=\"sector-shortcuts\">\n                  <span class=\"theo-game-label\">\n                    <i class=\"fas fa-keyboard\" style=\"color: #ffbb00;\"></i>\n                    <div class=\"shortcuts-title\">Keyboard Shortcuts:</div>\n                  </span>\n                  <div class=\"shortcuts-content\">\n                    <span class=\"shortcut-item\"><strong>S</strong> or <strong>=</strong> - Toggle Sectors</span>\n                    <span class=\"shortcut-item\"><strong>X</strong> - Toggle Quarters</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            \n            <div class=\"background-grid\">\n              <!-- Background items will be added dynamically -->\n            </div>\n          </div>\n          \n        <!-- Cursors Tab -->\n        <div id=\"cursors-tab\" class=\"tab-content\">\n          <h3>Game Cursors</h3>\n          \n          <!-- Ø§Ù„Ø¹Ù†ÙˆØ§Ù† ÙÙŠ Ø³Ø·Ø± -->\n          <div class=\"setting-row\">\n            <span class=\"theo-game-label\">\n              <i class=\"fas fa-mouse-pointer\" style=\"color: #ffbb00;\"></i>\n              <label>Cursor Selection</label>\n            </span>\n          </div>\n          \n          <!-- Ø§Ù„Ø²Ø± ÙÙŠ Ø³Ø·Ø± Ù…Ù†ÙØµÙ„ -->\n          <div class=\"setting-row cursor-controls\">\n            <button id=\"default-cursor-btn\" class=\"secondary-button\">Default Cursor</button>\n            <span id=\"current-cursor-name\">Current: Electrical Plug Cursor</span>\n          </div>\n          \n          <div class=\"cursor-container\">\n            <!-- Ø§Ù„Ù…Ø¤Ø´Ø±Ø§Øª Ø³ØªØ¶Ø§Ù Ø¯ÙŠÙ†Ø§Ù…ÙŠÙƒÙŠØ§Ù‹ Ù‡Ù†Ø§ -->\n          </div>\n          \n          <div id=\"div_cursors\"></div>\n        </div>\n          \n          <!-- About Tab -->\n          <div id=\"about-tab\" class=\"tab-content\">\n            <h3>About WormUP</h3>\n            \n            <div class=\"about-content\">\n              <p>\n                <i class=\"fas fa-info-circle\" style=\"color: #ffbb00;\"></i>\n                WormUP: Enhance Your Wormate.io Experience\n                [WormUP] is a Chrome extension designed to improve your wormate.io gameplay. Quickly select rooms, customize your worm with vibrant skin colors, and enjoy extra features to enhance your experience.\n              </p>\n              <p>\n                <i class=\"fas fa-calendar-alt\" style=\"color: #ffbb00;\"></i>\n                Release Date: 30/03/2025.\n              </p>\n              <p>\n                <i class=\"fas fa-code-branch\" style=\"color: #ffbb00;\"></i>\n                Version: 2.0.0\n              </p>\n              <p>\n                <i class=\"fas fa-users\" style=\"color: #ffbb00;\"></i>\n                Designed by: WormUP Team !\n              </p>\n              \n              <p style=\"margin-top: 20px;\">\n                <i class=\"fas fa-keyboard\" style=\"color: #ffbb00;\"></i>\n                <strong>Keyboard Shortcuts:</strong><br>\n                <span style=\"display: inline-block; margin-right: 15px; margin-top: 5px;\"><strong>L</strong> - Toggle laser</span>\n                <span style=\"display: inline-block; margin-right: 15px; margin-top: 5px;\"><strong>O</strong> - Increase laser opacity</span>\n                <span style=\"display: inline-block; margin-right: 15px; margin-top: 5px;\"><strong>P</strong> - Decrease laser opacity</span>\n              </p>\n              \n              <!-- User ID Section -->\n              <div class=\"setting-group\">\n                <div class=\"setting-group-content\">\n                  <div class=\"setting-row\">\n                    <span class=\"theo-game-label\">\n                      <i class=\"fas fa-id-card\" style=\"color: #ffbb00;\"></i>\n                      <label for=\"id_customer\">ID: </label>\n                    </span>\n                    <input value=\"" + _0x4d4db2.userId + "\" style=\"max-width: 220px;\" type=\"text\" id=\"id_customer\" readonly>\n                    <button id=\"btn_copy\">\n                      <span class=\"tooltiptext\" id=\"myTooltip\">id copy</span>Copy\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n    \n<!-- Headshot Message Display -->\n<div id=\"headshot-message\"></div>\n                        \n                        \n  ").insertAfter("#mm-store");
      } else {
        $("\n    <button id=\"op_wup\" class=\"op_wup\">" + _0x95602e.ccg[6] + "</button> \n    <div id=\"modal_wup\" class=\"modal\"> \n      <div class=\"modal-content wup-modal\" style=\"max-width: 360px !important; width: 360px !important;\"> \n        <div class=\"center wup-header\" style=\"background-color: #ff8a18; background: linear-gradient(145deg, rgb(255, 141, 0), rgb(255, 102, 0)); padding: 0 15px; height: 36px; line-height: 36px; border-radius: 8px 8px 0 0; position: relative; text-align: center;\"> \n          <span class=\"close\" style=\"position: absolute; left: 15px; top: 6px; color: white; font-size: 24px; font-weight: bold; cursor: pointer;\">Ã—</span> \n          <h2 class=\"modal-title\" style=\"margin: 0; font-size: 18px; color: white;\">Settings</h2>\n        </div> \n        <div id=\"modal_wup_body\" class=\"modal-body wup-body\" style=\"padding: 15px; background-color: #1e2339; color: #fff; border-radius: 0 0 8px 8px;\">\n          <!-- Ø³ÙŠØªÙ… ØªØ­Ø¯ÙŠØ« Ø§Ù„Ù…Ø­ØªÙˆÙ‰ -->\n        </div> \n      </div>\n    </div>\n  ").insertAfter("#mm-store");
      }
      function _0x5260cb() {
        const _0x5c73e0 = _0x95602e.e === "not_empty" || _0x57a83a;
        if (!_0x5c73e0) {
          $("#modal_wup .modal-content").addClass("wup-modal").css({
            "max-width": "360px",
            width: "360px"
          });
          $(".settings-sidebar, .settings-layout, .settings-content").hide();
          $("#modal_wup_body").html("\n        <div style=\"text-align: center; margin: 10px auto;\">\n          <label for=\"id_customer\" style=\"display: block; margin-bottom: 5px; font-weight: bold; color: #ddd; text-align: center;\">User ID</label> \n          <div style=\"display: flex; margin: 0 auto; justify-content: center;\">\n            <input value=\"" + _0x4d4db2.userId + "\" style=\"max-width: 200px; width: 200px !important; height: 22px !important; border-radius: 6px; font-size: 14px; text-align: center; background-color: #fff; color: #0a6928; font-weight: 630; margin-right: 10px;\" type=\"text\" id=\"id_customer\" readonly>\n           <button id=\"btn_copy\" style=\"width: 100px; height: 35px; border-radius: 6px; font-size: 15px; background-color: #fff; color: white; border: none; cursor: pointer;\" onclick=\"navigator.clipboard.writeText('" + _0x4d4db2.userId + "').then(()=> alert('Your ID " + _0x4d4db2.userId + " copied!'));\">Copy</button>\n          </div>\n        </div>\n        \n        <!-- Ø§Ù„Ø®Ø· Ø§Ù„ÙØ§ØµÙ„ Ø§Ù„Ø£ÙˆÙ„ ÙÙ‚Ø· -->\n        <div style=\"border-top: 1px solid #3a4061; margin: 15px 0;\"></div>\n        \n        <!-- Ø·Ø±ÙŠÙ‚Ø© ØªÙØ¹ÙŠÙ„ Ø§Ù„Ø§Ø´ØªØ±Ø§Ùƒ Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ© - Ø±Ø§Ø¨Ø· Ø§Ù„Ø§ØªØµØ§Ù„ -->\n        <div style=\"text-align: center; padding: 10px 0;\">\n          <h3 style=\"color: white; margin: 0 0 8px 0; font-size: 16px;\">Premium Activation - ØªÙØ¹ÙŠÙ„ Ø§Ù„Ø§Ø´ØªØ±Ø§Ùƒ Ø§Ù„Ù…Ù…ÙŠØ²</h3>\n          <a href=\"https://wormup.in/contact\" target=\"_blank\" style=\"display: block; background-color: #4CAF50; color: white; padding: 12px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 10px auto; width: 80%; max-width: 280px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); transition: all 0.3s; border: 2px solid #65d269;\">\n            <span style=\"display: block; font-size: 16px;\">ğŸ”— Click Here To Activate</span>\n            <span style=\"display: block; font-size: 14px; margin-top: 4px;\">Ø§Ø¶ØºØ· Ù‡Ù†Ø§ Ù„Ù„ØªÙØ¹ÙŠÙ„</span>\n          </a>\n        </div>\n        \n        <!-- ØµÙˆØ±Ø© Ø§Ù„Ø¨Ø±ÙŠÙ…ÙŠÙ… Ù‚Ø¨Ù„ Ø²Ø± Ø§Ù„Ø¯ÙŠØ³ÙƒÙˆØ±Ø¯ -->\n        <div style=\"text-align: center; margin: 15px auto 10px;\">\n            <img src=\"https://wormup.in/images/cors-proxy.php?img=img/premium_features.png\" alt=\"Premium Features\" style=\"max-width: 150px; height: auto; border-radius: 4px; display: block; margin: 0 auto;\">\n        </div>\n        \n        <!-- Ø®ÙŠØ§Ø± Ø§Ù„Ø§Ù†Ø¶Ù…Ø§Ù… Ù„Ù„Ø¯ÙŠØ³ÙƒÙˆØ±Ø¯ ÙƒØ®ÙŠØ§Ø± Ø«Ø§Ù†ÙˆÙŠ -->\n        <div style=\"text-align: center; padding: 10px 0;\">\n          <a href=\"https://discord.gg/aT2Dsrc5vz\" target=\"_blank\" style=\"display: inline-block; background-color: #5865F2; color: white; padding: 8px 12px; text-decoration: none; border-radius: 4px; font-weight: bold; box-shadow: 0 2px 5px rgba(0,0,0,0.2); transition: background-color 0.3s;\">\n            <svg style=\"width: 16px; height: 16px; margin-right: 6px; display: inline-block; vertical-align: middle;\" viewBox=\"0 0 24 24\" fill=\"white\">\n              <path d=\"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914a.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z\"/>\n            </svg>\n            Join Our Discord\n            <span style=\"display: block; font-size: 0.8em; margin-top: 2px;\">Ø§Ù†Ø¶Ù… Ø¥Ù„Ù‰ Ù…Ø¬ØªÙ…Ø¹Ù†Ø§ Ø¹Ù„Ù‰ Discord</span>\n          </a>\n          <p style=\"margin-top: 8px; color: #aaa; font-size: 12px;\">\n            Get premium features by joining our Discord server\n            <span style=\"display: block; font-size: 0.9em; margin-top: 2px;\">Ù„Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø§Ù„Ù…ÙŠØ²Ø§Øª Ø§Ù„Ù…Ù…ÙŠØ²Ø© Ø¹Ø¨Ø± Discord</span>\n          </p>\n        </div>\n        \n        <div style=\"text-align: center;\">\n          <p style=\"color: #ddd; font-size: 14px; margin: 5px 0;\">\n            <i class=\"fas fa-crown\" style=\"color: #ffbb00;\"></i> Premium\n          </p>\n        </div>\n        ");
        } else {
          $("#modal_wup .modal-content").removeClass("wup-modal");
          $(".settings-sidebar, .settings-layout, .settings-content").show();
          const _0x554a45 = $(".sidebar-item.active").data("tab");
          if (_0x554a45) {
            $(".tab-content").hide();
            $("#" + _0x554a45 + "-tab").show();
          } else {
            $("#game-settings-tab").show();
          }
          if (!_0x152ccb.mobile) {
            $("#mobile-tab-item").hide();
          }
        }
      }
      window.openSettingsModal = function () {
        _0x5260cb();
        $("#modal_backdrop").show();
        $("#modal_wup").css({
          "z-index": "9999",
          display: "block"
        });
        $("body").css("overflow", "hidden");
      };
      window.closeSettingsModal = function () {
        $("#modal_wup").css("display", "none");
        $("#modal_backdrop").hide();
        $("body").css("overflow", "");
      };
      _0x5260cb();
      function _0x38fe46() {
        const _0x3c83f3 = _0x95602e.e === "not_empty" || _0x57a83a;
        if (!_0x3c83f3) {
          $(".settings-sidebar, .settings-layout, .settings-content, .settings-grid, .tab-content, .sidebar-item").hide();
          $("[id^=\"div_\"]").not("#div_customer").hide();
          $("#eating_speed_toggle, #performance-monitor-toggle, #wupspeed, #saveGame, #pulse_effects_enabled").closest(".setting-item").hide();
          $("[id^=\"sel_\"]").hide();
          $(".switch, .slider-control, .section-title").hide();
          $("#backgrounds-tab, .background-grid, .background-item").hide();
          $("#cursors-tab, .cursor-container, .cursor-item").hide();
          $("#sound-laser-settings-tab, #sound_effect_selector, #monster_kill_selector, #volume_slider").hide();
          $("#div_Laser, #Laserup, #laser_color_picker, #laser_opacity_slider").hide();
        } else {
          $(".settings-sidebar, .settings-layout, .settings-content, .settings-grid, .tab-content, .sidebar-item").show();
          $("[id^=\"div_\"]").show();
          $("#eating_speed_toggle, #performance-monitor-toggle, #wupspeed, #saveGame, #pulse_effects_enabled").closest(".setting-item").show();
          $("[id^=\"sel_\"]").show();
          $(".switch, .slider-control, .section-title").show();
          $("#backgrounds-tab, .background-grid, .background-item").show();
          $("#cursors-tab, .cursor-container, .cursor-item").show();
          $("#sound-laser-settings-tab, #sound_effect_selector, #monster_kill_selector, #volume_slider").show();
          $("#div_Laser, #Laserup, #laser_color_picker, #laser_opacity_slider").show();
          if (!_0x152ccb.mobile) {
            $("#mobile-tab-item").hide();
          }
        }
      }
      $(document).ready(function () {
        setTimeout(function () {
          _0x38fe46();
        }, 100);
        $("#btn_copy").click(function () {
          var _0x1284de = document.getElementById("id_customer");
          _0x1284de.select();
          _0x1284de.setSelectionRange(0, 99999);
          navigator.clipboard.writeText(_0x1284de.value);
          $("#myTooltip").html("" + _0x95602e.ccg[14] + "!");
          $("#myTooltip").css("visibility", "visible");
          $("#myTooltip").css("opacity", "1");
          setTimeout(function () {
            $("#myTooltip").css("visibility", "hidden");
            $("#myTooltip").css("opacity", "0");
          }, 1500);
        });
        $("#btn_copy").hover(function () {
          $("#myTooltip").css("visibility", "visible");
          $("#myTooltip").css("opacity", "1");
        }, function () {
          if ($("#myTooltip").text() !== _0x95602e.ccg[14] + "!") {
            $("#myTooltip").css("visibility", "hidden");
            $("#myTooltip").css("opacity", "0");
          }
        });
        if (window.modalFixed) {
          return;
        }
        window.modalFixed = true;
        $("#op_wup").off("click").on("click", function (_0x487b15) {
          _0x487b15.preventDefault();
          window.openSettingsModal();
          return false;
        });
        var _0x2099e5 = $("#modal_wup");
        var _0x173653 = _0x2099e5.css("display");
        $("body").append(_0x2099e5.detach());
        var _0x5ad817 = $("<div id='modal_backdrop'></div>").css({
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          "background-color": "rgba(0, 0, 0, 0.7)",
          "z-index": "9998",
          display: "none"
        });
        _0x2099e5.before(_0x5ad817);
        function _0x46bec3() {
          if ($("#op_wup").length && !$("#op_wup").data("hasClickHandler")) {
            $("#op_wup").off("click").on("click", function (_0x45fa91) {
              _0x45fa91.preventDefault();
              window.openSettingsModal();
              return false;
            }).data("hasClickHandler", true);
          }
        }
        _0x46bec3();
        setInterval(_0x46bec3, 5000);
        $(".close").off("click").on("click", function () {
          window.closeSettingsModal();
        });
        _0x5ad817.on("click", function () {
          window.closeSettingsModal();
        });
      });
      var _0x119191 = document.getElementById("div_save");
      var _0x473a8d = document.getElementById("div_sound");
      var _0x185ca8 = document.getElementById("div_speed");
      var _0x4114e7 = document.getElementById("div_zigzag");
      var _0x2ff2fb = document.getElementById("div_w1");
      var _0x1e249a = document.getElementById("div_sm");
      var _0x3f49ad = document.getElementById("sel_sc");
      var _0x5603aa = document.getElementById("div_top");
      var _0x58fc7d = document.getElementById("sel_top");
      var _0x147056 = document.getElementById("div_killmsg");
      var _0x464aaf = document.getElementById("div_background");
      var _0x2897e6 = [{
        name: "Vietnam",
        val: "vn"
      }, {
        name: "Thailand",
        val: "th"
      }, {
        name: "Cambodia",
        val: "kh"
      }, {
        name: "Indonesia",
        val: "id"
      }, {
        name: "Singapore",
        val: "sg"
      }, {
        name: "Japan",
        val: "jp"
      }, {
        name: "Mexico",
        val: "mx"
      }, {
        name: "Brazil",
        val: "br"
      }, {
        name: "Canada",
        val: "ca"
      }, {
        name: "Germany",
        val: "de"
      }, {
        name: "France",
        val: "fr"
      }, {
        name: "England",
        val: "gb"
      }, {
        name: "Australia",
        val: "au"
      }, {
        name: "USA",
        val: "us"
      }, {
        name: "Portugal",
        val: "pt"
      }, {
        name: "Turkey",
        val: "tr"
      }, {
        name: _0x95602e.ccg[36],
        val: "iq"
      }];
      let _0x497f89 = document.getElementById("sel_country");
      if (_0x497f89) {
        for (_0xfe79f8 = 0; _0xfe79f8 < _0x2897e6.length; _0xfe79f8++) {
          let _0x22c0c0 = document.createElement("option");
          _0x22c0c0.value = _0x2897e6[_0xfe79f8].val;
          _0x22c0c0.innerHTML = _0x2897e6[_0xfe79f8].name;
          _0x497f89.appendChild(_0x22c0c0);
        }
        if (_0x350f63) {
          _0x497f89.value = _0x350f63;
        }
        _0x497f89.onchange = function () {
          let _0x18b51f = _0x497f89.value;
          _0x350f63 = _0x18b51f;
          localStorage.setItem("oco", _0x18b51f);
          var _0x3184a1 = {
            id_wormate: _0x4d4db2.userId,
            country: _0x18b51f
          };
          fetch(_0x152ccb.s_l + "/check/index.php", {
            headers: {
              "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(_0x3184a1)
          });
          localStorage.removeItem("wupsw");
          window.location.reload();
        };
      }
      var _0x57a83a = false;
      if (_0x95602e.cm === "" || _0x95602e.cm === undefined) ;else {
        var _0x477147 = document.getElementById("btn_in_t");
        var _0xd80b8b = document.getElementById("mm-action-play");
        var _0x25b7f2 = document.getElementById("port_id");
        if (_0x477147) {
          _0x477147.style.display = "block";
          _0x477147.onclick = function () {
            _0x25b7f2.value = _0x95602e.cm;
            _0xd80b8b.click();
          };
          _0x57a83a = true;
        }
      }
      if (_0x95602e.e === "not_connect") ;else {
        _0x152ccb.h = _0x95602e.z == "b";
        _0x152ccb.hz = _0x95602e.z == "c";
        if (_0x95602e.e === "not_empty" || _0x57a83a) {
          var _0x5d46ac = ooo.Xg.Kf.Wg.Ah;
          if (_0x119191) {
            _0x119191.style.display = "block";
          }
          if (_0x473a8d) {
            _0x473a8d.style.display = "inline-block";
          }
          $("#zigzagup").prop("checked", _0x152ccb.flx);
          $("#zigzagup").change(function () {
            _0x152ccb.flx = $(this).prop("checked");
            localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
          });
          $("#wupspeed").prop("checked", _0x152ccb.vp);
          $("#wupspeed").change(function () {
            _0x152ccb.vp = $(this).prop("checked");
            localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
          });
          $("#saveGame").prop("checked", _0x152ccb.cs);
          $("#saveGame").change(function () {
            _0x152ccb.cs = $(this).prop("checked");
            localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
          });
          if (_0x152ccb.mobile) {
            if (_0x2ff2fb) {
              _0x2ff2fb.style.display = "none";
            }
            _0x152ccb.sc = 0;
            _0x152ccb.wi = 0;
          } else {
            if (_0x2ff2fb) {
              _0x2ff2fb.style.display = "inline-block";
            }
            if (_0x3f49ad) {
              _0x3f49ad.value = _0x152ccb.sc;
              _0x3f49ad.onchange = function () {
                _0x152ccb.sc = parseInt(_0x3f49ad.value);
                if (_0x152ccb.sc == 1) {
                  _0x152ccb.wi = screen.height / (screen.width * 2);
                }
                if (_0x152ccb.sc == 2) {
                  _0x152ccb.wi = 0;
                }
                localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
              };
            }
          }
          if (_0x1e249a) {
            _0x1e249a.style.display = "inline-block";
          }
          if (sel_sm) {
            sel_sm.value = _0x152ccb.sm;
            sel_sm.onchange = function () {
              _0x152ccb.sm = parseInt(sel_sm.value);
              localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
            };
          }
          if (_0x5603aa) {
            _0x5603aa.style.display = "inline-block";
          }
          if (_0x58fc7d) {
            _0x58fc7d.value = _0x152ccb.to;
            _0x58fc7d.onchange = function () {
              _0x152ccb.to = parseInt(_0x58fc7d.value);
              localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
            };
          }
          if (_0x497f89 && _0x497f89.value == "iq" && _0x147056) {
            _0x147056.style.display = "inline-block";
            var _0x39ef6e = $("#wupiq");
            _0x39ef6e.prop("checked", _0x152ccb.iq);
            _0x39ef6e.change(function () {
              if (this.checked) {
                _0x152ccb.iq = true;
              } else {
                _0x152ccb.iq = false;
              }
              localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
            });
          } else {
            _0x152ccb.iq = false;
            if (_0x147056) {
              _0x147056.style.display = "none";
            }
          }
          const _0x55f9bf = localStorage.getItem("showFpsCpu") === "true";
          $("#performance-monitor-toggle").prop("checked", _0x55f9bf);
          $("#performance-monitor-toggle").change(function () {
            const _0x5a5eb9 = $(this).prop("checked");
            localStorage.setItem("showFpsCpu", _0x5a5eb9);
            if (window.PerformanceMonitor) {
              window.PerformanceMonitor.toggle(_0x5a5eb9);
            }
          });
          if (window.PerformanceMonitor) {
            window.PerformanceMonitor.init();
          }
          const _0x5e897b = localStorage.getItem("wupPulseEnabled") === "true" || localStorage.getItem("wupPulseEnabled") === null;
          $("#pulse_effects_enabled").prop("checked", _0x5e897b);
          window.pulseEnabled = _0x5e897b;
          $("#pulse_effects_enabled").change(function () {
            window.pulseEnabled = $(this).prop("checked");
            localStorage.setItem("wupPulseEnabled", window.pulseEnabled.toString());
          });
          _0x152ccb.c_1 = _0x95602e.streamer;
          if (_0x464aaf) {
            _0x464aaf.style.display = "block";
          }
          _0x21a7cf(_0x152ccb, oeo);
          _0x17d5a6.on = true;
          if (_0x19d5a8()) {
            _0x152ccb.tt = _0x95602e.tt == 1;
            _0x5d46ac.img_1.visible = _0x17d5a6.on && _0x152ccb.mo == 1;
            _0x5d46ac.img_2.visible = _0x17d5a6.on && _0x152ccb.mo == 2;
            _0x5d46ac.img_3.visible = _0x17d5a6.on && _0x152ccb.mo == 3;
            _0x5d46ac.img_4.visible = _0x17d5a6.on && (_0x152ccb.mo == 4 || _0x152ccb.mo == 5 || _0x152ccb.mo == 6);
          } else {
            _0x152ccb.tt = false;
          }
          var _0x564f7b = [{
            nome: "Default",
            uri: _0x152ccb.s_l + "/get_store.php?item=bkgnd0.png"
          }, {
            nome: "Stardust",
            uri: _0x152ccb.s_l + "/get_store.php?item=bg_sky__6.png"
          }, {
            nome: "Nightdots",
            uri: _0x152ccb.s_l + "/get_store.php?item=bg_sky_7.png"
          }, {
            nome: "Galaxy Star",
            uri: _0x152ccb.s_l + "/get_store.php?item=Galaxy-Star.png"
          }, {
            nome: "Hexvoid",
            uri: _0x152ccb.s_l + "/get_store.php?item=bg_sky_10.png"
          }, {
            nome: "Crystalblue",
            uri: _0x152ccb.s_l + "/get_store.php?item=bg_sky_9.png"
          }, {
            nome: "Nebula",
            uri: _0x152ccb.s_l + "/get_store.php?item=bg_sky__2.png"
          }, {
            nome: "Bluemist",
            uri: _0x152ccb.s_l + "/get_store.php?item=bg_sky__1.png"
          }, {
            nome: "Prism",
            uri: _0x152ccb.s_l + "/get_store.php?item=bg_sky_8.png"
          }, {
            nome: "Cloudscape",
            uri: _0x152ccb.s_l + "/get_store.php?item=bg_sky__5.png"
          }, {
            nome: "Desert",
            uri: _0x152ccb.s_l + "/get_store.php?item=bg_sky_11.png"
          }, {
            nome: "Crystalblue 2",
            uri: _0x152ccb.s_l + "/get_store.php?item=bg_sky_12.png"
          }];
          _0x152ccb.c_2 = _0x95602e.programmer;
          let _0x1faec5 = $(".background-grid");
          if (_0x1faec5.length > 0) {
            _0x1faec5.empty();
            _0x564f7b.forEach(function (_0xe01c73) {
              const _0xfffeaa = _0x152ccb.background === _0xe01c73.uri;
              const _0x3ac65f = $("\n          <div class=\"background-item " + (_0xfffeaa ? "active" : "") + "\" data-bg=\"" + _0xe01c73.uri + "\" data-bg-name=\"" + _0xe01c73.nome + "\" style=\"cursor: pointer; border: 2px solid " + (_0xfffeaa ? "#ffcc00" : "#333333") + "; border-radius: 8px; overflow: hidden; margin: 5px; background-color: #232339;\">\n            <img src=\"" + _0xe01c73.uri + "\" alt=\"" + _0xe01c73.nome + "\" style=\"width: 100%; height: 65px; object-fit: cover;\">\n            <div style=\"text-align: center; padding: 5px; font-size: 10px; color: #ffffff;\">" + _0xe01c73.nome + "</div>\n          </div>\n        ");
              _0x3ac65f.click(function () {
                $(".background-item").removeClass("active").css("border-color", "#333333");
                $(this).addClass("active").css("border-color", "#ffcc00");
                const _0x427665 = $(this).data("bg");
                const _0x367796 = $(this).data("bg-name");
                _0x152ccb.background = _0x427665;
                localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
                if (ooo && ooo.ef && ooo.ef.F_bg && ooo.ef.fn_o) {
                  ooo.ef.F_bg = new PIXI.Texture(ooo.ef.fn_o(_0x427665));
                }
                $("#backgroundArena").val(_0x427665);
              });
              _0x1faec5.append(_0x3ac65f);
            });
          }
          let _0x7ef1c0 = document.getElementById("backgroundArena");
          if (_0x7ef1c0) {
            for (_0xfe79f8 = 0; _0xfe79f8 < _0x564f7b.length; _0xfe79f8++) {
              let _0x1d5956 = document.createElement("option");
              _0x1d5956.value = _0x564f7b[_0xfe79f8].uri;
              _0x1d5956.setAttribute("data-imageSrc", _0x564f7b[_0xfe79f8].uri);
              _0x1d5956.setAttribute("data-descriptione", _0x564f7b[_0xfe79f8].nome);
              _0x1d5956.innerHTML = _0x564f7b[_0xfe79f8].nome;
              _0x7ef1c0.appendChild(_0x1d5956);
            }
            _0x152ccb.c_3 = _0x95602e.extension;
            _0x7ef1c0.value = _0x152ccb.background || _0x564f7b[0].uri;
            if ($.fn.wupsle) {
              $("#backgroundArena").wupsle({
                onSelected: function () {
                  _0x152ccb.background = $("#backgroundArena-value").val();
                  localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
                  if (ooo && ooo.ef && ooo.ef.F_bg && ooo.ef.fn_o) {
                    ooo.ef.F_bg = new PIXI.Texture(ooo.ef.fn_o(_0x152ccb.background));
                  }
                  const _0x58b528 = _0x152ccb.background;
                  $(".background-item").removeClass("active").css("border-color", "#333333");
                  $(".background-item[data-bg=\"" + _0x58b528 + "\"]").addClass("active").css("border-color", "#ffcc00");
                }
              });
            }
          }
          const _0x3d5471 = [{
            name: "Turquoise Mouse Pointer",
            url: _0x152ccb.s_l + "/images/cors-proxy.php?img=cursors/1.png"
          }, {
            name: "White Mouse Pointer",
            url: _0x152ccb.s_l + "/images/cors-proxy.php?img=cursors/2.png"
          }, {
            name: "Pink Octopus Cursor",
            url: _0x152ccb.s_l + "/images/cors-proxy.php?img=cursors/3.png"
          }, {
            name: "Beetle Cursor",
            url: _0x152ccb.s_l + "/images/cors-proxy.php?img=cursors/4.png"
          }, {
            name: "TikTok Cursor",
            url: _0x152ccb.s_l + "/images/cors-proxy.php?img=cursors/5.png"
          }, {
            name: "Watermelon Cursor",
            url: _0x152ccb.s_l + "/images/cors-proxy.php?img=cursors/6.png"
          }, {
            name: "Red Lipstick Cursor",
            url: _0x152ccb.s_l + "/images/cors-proxy.php?img=cursors/7.png"
          }, {
            name: "Flame Cursor",
            url: _0x152ccb.s_l + "/images/cors-proxy.php?img=cursors/8.png"
          }, {
            name: "Cherries Cursor",
            url: _0x152ccb.s_l + "/images/cors-proxy.php?img=cursors/9.png"
          }, {
            name: "Pink Hearts Cursor",
            url: _0x152ccb.s_l + "/images/cors-proxy.php?img=cursors/10.png"
          }, {
            name: "Spray Can Cursor",
            url: _0x152ccb.s_l + "/images/cors-proxy.php?img=cursors/11.png"
          }, {
            name: "Beach Umbrella Cursor",
            url: _0x152ccb.s_l + "/images/cors-proxy.php?img=cursors/12.png"
          }, {
            name: "Three-colored Glove Cursor",
            url: _0x152ccb.s_l + "/images/cors-proxy.php?img=cursors/13.png"
          }, {
            name: "Pink Dolphin Cursor",
            url: _0x152ccb.s_l + "/images/cors-proxy.php?img=cursors/14.png"
          }, {
            name: "Mushroom Cursor",
            url: _0x152ccb.s_l + "/images/cors-proxy.php?img=cursors/15.png"
          }, {
            name: "Octopus Glove Cursor",
            url: _0x152ccb.s_l + "/images/cors-proxy.php?img=cursors/16.png"
          }, {
            name: "Yellow Cheese Cursor",
            url: _0x152ccb.s_l + "/images/cors-proxy.php?img=cursors/17.png"
          }, {
            name: "Roasting Marshmallow Cursor",
            url: _0x152ccb.s_l + "/images/cors-proxy.php?img=cursors/18.png"
          }, {
            name: "White Glove Cursor",
            url: _0x152ccb.s_l + "/images/cors-proxy.php?img=cursors/19.png"
          }, {
            name: "Red Pepper Cursor",
            url: _0x152ccb.s_l + "/images/cors-proxy.php?img=cursors/20.png"
          }, {
            name: "Magic Wand with Golden Star Cursor",
            url: _0x152ccb.s_l + "/images/cors-proxy.php?img=cursors/21.png"
          }, {
            name: "Strawberry and Chocolate Ice Cream Cursor",
            url: _0x152ccb.s_l + "/images/cors-proxy.php?img=cursors/22.png"
          }, {
            name: "Dagger Cursor",
            url: _0x152ccb.s_l + "/images/cors-proxy.php?img=cursors/23.png"
          }, {
            name: "Pizza Slice Cursor ",
            url: _0x152ccb.s_l + "/images/cors-proxy.php?img=cursors/24.png"
          }, {
            name: "Strawberry Candy Cursor",
            url: _0x152ccb.s_l + "/images/cors-proxy.php?img=cursors/25.png"
          }, {
            name: "Rose Branch Cursor",
            url: _0x152ccb.s_l + "/images/cors-proxy.php?img=cursors/26.png"
          }, {
            name: "Electrical Plug Cursor",
            url: _0x152ccb.s_l + "/images/cors-proxy.php?img=cursors/27.png"
          }, {
            name: "Heart on Stick Cursor",
            url: _0x152ccb.s_l + "/images/cors-proxy.php?img=cursors/28.png"
          }];
          const _0x49ed6b = localStorage.getItem("selectedCursor");
          if (_0x49ed6b) {
            _0x593232(_0x49ed6b);
            const _0x80f1c5 = _0x3d5471.find(_0x5f1dd5 => _0x5f1dd5.url === _0x49ed6b);
            if (_0x80f1c5) {
              $("#current-cursor-name").text("Current: " + _0x80f1c5.name);
            }
          }
          const _0x93b246 = $(".cursor-container");
          if (_0x93b246.length > 0) {
            _0x93b246.empty();
            _0x3d5471.forEach(function (_0x130539) {
              const _0x2a1ca5 = _0x49ed6b === _0x130539.url;
              const _0x3582d5 = $("\n              <div class=\"cursor-item " + (_0x2a1ca5 ? "active" : "") + "\" data-cursor=\"" + _0x130539.url + "\" title=\"" + _0x130539.name + "\" style=\"width: 60px; height: 60px; display: inline-block; margin: 5px; cursor: pointer; border: 2px solid " + (_0x2a1ca5 ? "#ffcc00" : "#333333") + "; border-radius: 8px; overflow: hidden; text-align: center; background-color: #232339;\">\n                  <img src=\"" + _0x130539.url + "\" alt=\"" + _0x130539.name + "\" style=\"width: 32px; height: 32px; margin-top: 14px;\">\n              </div>\n          ");
              _0x3582d5.click(function () {
                $(".cursor-item").removeClass("active").css("border-color", "#333333");
                $(this).addClass("active").css("border-color", "#ffcc00");
                const _0x2c282d = $(this).data("cursor");
                localStorage.setItem("selectedCursor", _0x2c282d);
                _0x593232(_0x2c282d);
                $("#current-cursor-name").text("Current: " + _0x130539.name);
              });
              _0x93b246.append(_0x3582d5);
            });
          }
          $("#default-cursor-btn").click(function () {
            localStorage.removeItem("selectedCursor");
            $("#game-cont, #game-canvas, body").css("cursor", "default");
            $("#current-cursor-name").text("Current: Default");
            $(".cursor-item").removeClass("active").css("border-color", "#333333");
          });
          function _0x593232(_0x45106d) {
            $("#game-cont, #game-canvas, body").css({
              cursor: "url(" + _0x45106d + "), default"
            });
          }
          _0x152ccb.c_4 = _0x95602e.game;
          if (_0x152ccb.hz) {
            _0x52777b.onwheel = function (_0x1a6d1b) {
              if (!_0x152ccb.ctrl && (_0x152ccb.z >= 0.5 && _0x152ccb.z <= 25 || _0x152ccb.z < 0.5 && _0x1a6d1b.deltaY < 0 || _0x152ccb.z > 25 && _0x1a6d1b.deltaY > 0)) {
                _0x152ccb.z = _0x152ccb.z + _0x1a6d1b.deltaY * -wormupObjects.zoomSpeed;
                if (_0x152ccb.z < 0.5) {
                  _0x152ccb.z = 0.5;
                }
              }
            };
          }
          if (_0x152ccb.mobile) {
            $("#config_mobile").html(_0x95602e.mb);
            var _0x5425f2 = document.getElementById("joystick_checked");
            var _0x4bfd90 = document.getElementById("joystick_color");
            var _0x483668 = document.getElementById("joystick_mode");
            var _0x5cb2ef = document.getElementById("joystick_position");
            var _0x1df935 = document.getElementById("joystick_size");
            var _0x17fd82 = document.getElementById("joystick_pxy");
            if (_0x5425f2) {
              _0x5425f2.onchange = function () {
                _0x2eacdc(_0x5425f2);
                _0x15388f(_0x4bfd90);
                _0x2f6549(_0x483668);
                _0x2fac3b(_0x5cb2ef);
                _0x4b7f25(_0x17fd82);
                _0x2e38a0(_0x1df935);
              };
            }
            if (_0x4bfd90) {
              _0x4bfd90.onchange = function () {
                _0x2eacdc(_0x5425f2);
                _0x15388f(_0x4bfd90);
                _0x2f6549(_0x483668);
                _0x2fac3b(_0x5cb2ef);
                _0x4b7f25(_0x17fd82);
                _0x2e38a0(_0x1df935);
              };
            }
            if (_0x483668) {
              _0x483668.onchange = function () {
                _0x2eacdc(_0x5425f2);
                _0x15388f(_0x4bfd90);
                _0x2f6549(_0x483668);
                _0x2fac3b(_0x5cb2ef);
                _0x4b7f25(_0x17fd82);
                _0x2e38a0(_0x1df935);
              };
            }
            if (_0x5cb2ef) {
              _0x5cb2ef.onchange = function () {
                _0x2eacdc(_0x5425f2);
                _0x15388f(_0x4bfd90);
                _0x2f6549(_0x483668);
                _0x2fac3b(_0x5cb2ef);
                _0x4b7f25(_0x17fd82);
                _0x2e38a0(_0x1df935);
              };
            }
            if (_0x1df935) {
              _0x1df935.onchange = function () {
                _0x2eacdc(_0x5425f2);
                _0x15388f(_0x4bfd90);
                _0x2f6549(_0x483668);
                _0x2fac3b(_0x5cb2ef);
                _0x4b7f25(_0x17fd82);
                _0x2e38a0(_0x1df935);
              };
            }
            if (_0x17fd82) {
              _0x17fd82.onchange = function () {
                _0x2eacdc(_0x5425f2);
                _0x15388f(_0x4bfd90);
                _0x2f6549(_0x483668);
                _0x2fac3b(_0x5cb2ef);
                _0x4b7f25(_0x17fd82);
                _0x2e38a0(_0x1df935);
              };
            }
            if (_0x152ccb.joystick) {
              $("#joystick_checked").val(_0x152ccb.joystick.checked);
              $("#joystick_color").val(_0x152ccb.joystick.color);
              $("#joystick_mode").val(_0x152ccb.joystick.mode);
              $("#joystick_position").val(_0x152ccb.joystick.positionMode);
              $("#joystick_size").val(_0x152ccb.joystick.size);
              $("#joystick_pxy").val(_0x152ccb.joystick.pxy);
            } else {
              $("#joystick_checked").val(true);
              $("#joystick_color").val("red");
              $("#joystick_mode").val("dynamic");
              $("#joystick_position").val("L");
              $("#joystick_size").val(100);
              $("#joystick_pxy").val(100);
            }
            if (typeof _0x2eacdc === "function" && _0x5425f2) {
              _0x2eacdc(_0x5425f2);
            }
            if (typeof _0x15388f === "function" && _0x4bfd90) {
              _0x15388f(_0x4bfd90);
            }
            if (typeof _0x2f6549 === "function" && _0x483668) {
              _0x2f6549(_0x483668);
            }
            if (typeof _0x2fac3b === "function" && _0x5cb2ef) {
              _0x2fac3b(_0x5cb2ef);
            }
            if (typeof _0x4b7f25 === "function" && _0x17fd82) {
              _0x4b7f25(_0x17fd82);
            }
            if (typeof _0x2e38a0 === "function" && _0x1df935) {
              _0x2e38a0(_0x1df935);
            }
          }
          function _0x2e38a0(_0x299ca2) {
            if (!_0x152ccb.joystick) {
              _0x152ccb.joystick = {};
            }
            _0x152ccb.joystick.size = parseInt(_0x299ca2.value);
            $("#joystick_size_value").text(_0x299ca2.value);
            localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
          }
          function _0x4b7f25(_0x3efaaa) {
            if (!_0x152ccb.joystick) {
              _0x152ccb.joystick = {};
            }
            _0x152ccb.joystick.pxy = parseInt(_0x3efaaa.value);
            $("#joystick_pxy_value").text(_0x3efaaa.value);
            localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
          }
          if (typeof _0x5d383d !== "undefined" && typeof _0x27b449 !== "undefined" && typeof _0x376b81 !== "undefined") {
            if (typeof _0x125961 === "function") {
              _0x5d383d.on("mousedown", _0x125961);
            }
            if (typeof _0x32095e === "function") {
              _0x27b449.on("mousedown", _0x32095e);
            }
            if (typeof _0x279a33 === "function") {
              _0x376b81.on("mousedown", _0x279a33);
            }
          }
          _0x152ccb.c_5 = _0x95602e.note;
        } else {
          $("#div_server, #div_save, #div_sound, #div_speed, #div_zigzag, #div_w1, #div_top, #div_killmsg, #div_sm, #div_pulse_effects, #div_messages, #div_background, #div_game_enhancements, #config_mobile, #div_Laser, #div_crsw").hide();
        }
        if (_0x95602e.ccc && _0x95602e.ccc != "iq" && _0x95602e.ccc != _0x350f63) {
          localStorage.setItem("oco", _0x95602e.ccc);
          localStorage.removeItem("wupsw");
          window.location.reload();
        }
        if (!_0x350f63) {
          localStorage.setItem("oco", "iq");
        }
      }
      localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
      $(document).ready(function () {
        if ($(".settings-sidebar").length > 0) {
          $(".sidebar-item").click(function () {
            $(".sidebar-item").removeClass("active");
            $(this).addClass("active");
            $(".tab-content").hide();
            const _0xb864bc = $(this).data("tab") + "-tab";
            $("#" + _0xb864bc).show();
          });
          $("#game-settings-tab").show();
          $(".tab-content").not("#game-settings-tab").hide();
          if (!_0x152ccb.mobile) {
            $("#mobile-tab-item").hide();
          }
          function _0x1dfef7() {
            if ($("#wupiq").prop("checked")) {
              $("#custom-messages-container").addClass("messages-disabled");
            } else {
              $("#custom-messages-container").removeClass("messages-disabled");
            }
          }
          _0x1dfef7();
          $("#joystick_size").on("input", function () {
            var _0xcfe3b5 = $(this).val();
            $("#joystick_size_value").text(_0xcfe3b5);
            _0x3d7857(this);
          });
          $("#joystick_pxy").on("input", function () {
            var _0x979c92 = $(this).val();
            $("#joystick_pxy_value").text(_0x979c92);
            _0x55e6fd(this);
          });
          $("#wupiq").change(function () {
            _0x1dfef7();
            _0x152ccb.iq = $(this).prop("checked");
            localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
          });
          $("#kill_msg").change(function () {
            _0x152ccb.killMsg = $(this).val();
            localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
          });
          $("#headshot_msg").change(function () {
            _0x152ccb.headshotMsg = $(this).val();
            localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
          });
          $("#kill_show_name").change(function () {
            _0x152ccb.showKillName = $(this).prop("checked");
            localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
          });
          $("#headshot_show_name").change(function () {
            _0x152ccb.showHeadshotName = $(this).prop("checked");
            localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
          });
          $("#kill_name_position").change(function () {
            _0x152ccb.killNamePos = $(this).val();
            localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
          });
          $("#headshot_name_position").change(function () {
            _0x152ccb.headshotNamePos = $(this).val();
            localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
          });
          $("#kill_custom_text").on("input", function () {
            if ($(this).val() !== "") {
              _0x152ccb.killMsgType = "custom";
              _0x152ccb.killCustomText = $(this).val();
            } else {
              _0x152ccb.killMsgType = "preset";
            }
            localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
          });
          $("#headshot_custom_text").on("input", function () {
            if ($(this).val() !== "") {
              _0x152ccb.headshotMsgType = "custom";
              _0x152ccb.headshotCustomText = $(this).val();
            } else {
              _0x152ccb.headshotMsgType = "preset";
            }
            localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
          });
          if (_0x152ccb.killMsg) {
            $("#kill_msg").val(_0x152ccb.killMsg);
          }
          if (_0x152ccb.headshotMsg) {
            $("#headshot_msg").val(_0x152ccb.headshotMsg);
          }
          if (_0x152ccb.killMsgType === "custom" && _0x152ccb.killCustomText) {
            $("#kill_custom_text").val(_0x152ccb.killCustomText || "");
          }
          if (_0x152ccb.headshotMsgType === "custom" && _0x152ccb.headshotCustomText) {
            $("#headshot_custom_text").val(_0x152ccb.headshotCustomText || "");
          }
          $("#kill_show_name").prop("checked", _0x152ccb.showKillName !== false);
          $("#headshot_show_name").prop("checked", _0x152ccb.showHeadshotName !== false);
          $("#kill_name_position").val(_0x152ccb.killNamePos || "after");
          $("#headshot_name_position").val(_0x152ccb.headshotNamePos || "after");
          $("#wupsound").prop("checked", wormupObjects.soundEnabled || _0x152ccb.vh);
          $("#sound_effect_selector").val(wormupObjects.soundEffect || "https://wormateup.live/images/store/hs_2.mp3");
          $("#volume_slider").val(wormupObjects.soundVolume || 50);
          $("#volume_value").text(wormupObjects.soundVolume || 50);
          let _0x55c3cb = null;
          function _0x36cdd(_0x2a8fb3, _0x2fdd72) {
            if (_0x55c3cb) {
              _0x55c3cb.pause();
              _0x55c3cb.currentTime = 0;
            }
            _0x2a8fb3.volume = _0x2fdd72 / 100;
            _0x2a8fb3.currentTime = 0;
            _0x2a8fb3.play();
            _0x55c3cb = _0x2a8fb3;
          }
          $("#wupsound").change(function () {
            wormupObjects.soundEnabled = $(this).prop("checked");
            _0x152ccb.vh = $(this).prop("checked");
            _0x5e9593();
            localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
            if (wormupObjects.soundEnabled) {
              const _0x3f5826 = document.getElementById("s_h");
              if (_0x3f5826) {
                _0x36cdd(_0x3f5826, wormupObjects.soundVolume);
              }
            }
          });
          $("#sound_effect_selector").change(function () {
            wormupObjects.soundEffect = $(this).val();
            _0x5e9593();
            const _0x13c723 = document.getElementById("s_h");
            if (_0x13c723) {
              const _0x8cfe1f = _0x13c723.querySelector("source");
              if (_0x8cfe1f) {
                _0x8cfe1f.src = wormupObjects.soundEffect;
                _0x13c723.load();
                if (wormupObjects.soundEnabled) {
                  setTimeout(() => {
                    _0x36cdd(_0x13c723, wormupObjects.soundVolume);
                  }, 100);
                }
              }
            }
          });
          $("#monster_kill_selector").change(function () {
            const _0x4b93df = $(this).val();
            const _0x77876c = document.getElementById("monster_kill_sound");
            if (_0x77876c) {
              const _0x1aced2 = _0x77876c.querySelector("source");
              if (_0x1aced2) {
                _0x1aced2.src = _0x4b93df;
                _0x77876c.load();
                if (wormupObjects.soundEnabled) {
                  setTimeout(() => {
                    _0x36cdd(_0x77876c, wormupObjects.soundVolume);
                  }, 100);
                }
              }
            }
            if (!wormupObjects.monsterKillSound) {
              wormupObjects.monsterKillSound = {};
            }
            wormupObjects.monsterKillSound = _0x4b93df;
            _0x5e9593();
          });
          $("#volume_slider").on("input", function () {
            wormupObjects.soundVolume = parseInt($(this).val());
            $("#volume_value").text(wormupObjects.soundVolume);
            const _0x38cb94 = document.querySelectorAll("audio");
            _0x38cb94.forEach(_0x553a6c => {
              _0x553a6c.volume = wormupObjects.soundVolume / 100;
            });
            if (wormupObjects.soundEnabled) {
              const _0x3195ce = document.getElementById("s_h");
              if (_0x3195ce) {
                _0x36cdd(_0x3195ce, wormupObjects.soundVolume);
              }
            }
            _0x5e9593();
          });
          if (!window.laserOptions) {
            window.laserOptions = {
              enabled: _0x152ccb.ls || false,
              color: 16766720,
              opacity: 0.5,
              thickness: 0.1
            };
          }
          try {
            const _0x4de969 = JSON.parse(localStorage.getItem("laserOptions"));
            if (_0x4de969) {
              window.laserOptions = _0x4de969;
            }
          } catch (_0x5929d0) {
            console.error("Error loading laser options:", _0x5929d0);
          }
          $("#Laserup").prop("checked", window.laserOptions.enabled);
          const _0x986612 = "#" + window.laserOptions.color.toString(16).padStart(6, "0");
          $("#laser_color_picker").val(_0x986612);
          $("#laser_opacity_slider").val(window.laserOptions.opacity * 100);
          $("#laser_opacity_value").text(Math.round(window.laserOptions.opacity * 100));
          $("#Laserup").change(function () {
            window.laserOptions.enabled = $(this).prop("checked");
            _0x152ccb.ls = $(this).prop("checked");
            localStorage.setItem("laserOptions", JSON.stringify(window.laserOptions));
            localStorage.setItem("SaveGameup", JSON.stringify(_0x152ccb));
          });
          $("#laser_color_picker").change(function () {
            const _0x22d657 = $(this).val();
            window.laserOptions.color = parseInt(_0x22d657.replace("#", "0x"));
            localStorage.setItem("laserOptions", JSON.stringify(window.laserOptions));
          });
          $("#laser_opacity_slider").on("input", function () {
            const _0x9ec220 = parseInt($(this).val());
            window.laserOptions.opacity = _0x9ec220 / 100;
            $("#laser_opacity_value").text(_0x9ec220);
            localStorage.setItem("laserOptions", JSON.stringify(window.laserOptions));
          });
          $("#reset_laser_settings").click(function () {
            window.laserOptions = {
              enabled: _0x152ccb.ls,
              color: 16766720,
              opacity: 0.5,
              thickness: 0.1
            };
            localStorage.setItem("laserOptions", JSON.stringify(window.laserOptions));
            $("#laser_color_picker").val("#FFD700");
            $("#laser_opacity_slider").val(50);
            $("#laser_opacity_value").text(50);
          });
          $(document).keydown(function (_0x5dddfa) {
            if (_0x5dddfa.which === 76) {
              $("#Laserup").prop("checked", !$("#Laserup").prop("checked")).trigger("change");
            }
            if (_0x5dddfa.which === 79) {
              let _0x2afc15 = parseInt($("#laser_opacity_slider").val());
              if (_0x2afc15 < 100) {
                $("#laser_opacity_slider").val(_0x2afc15 + 10).trigger("input");
              }
            }
            if (_0x5dddfa.which === 80) {
              let _0x2c5c5d = parseInt($("#laser_opacity_slider").val());
              if (_0x2c5c5d > 10) {
                $("#laser_opacity_slider").val(_0x2c5c5d - 10).trigger("input");
              }
            }
          });
          $("#eating_speed_toggle").prop("checked", wormupObjects.eat_animation >= 1);
          $("#spin_fast_slider").val(wormupObjects.smoothCamera);
          $("#spin_fast_value").text(wormupObjects.smoothCamera);
          $("#zoom_speed_slider").val(wormupObjects.zoomSpeed);
          $("#zoom_speed_value").text(wormupObjects.zoomSpeed);
          $("#portion_size_slider").val(wormupObjects.PortionSize);
          $("#portion_size_value").text(wormupObjects.PortionSize);
          $("#portion_aura_slider").val(wormupObjects.PortionAura);
          $("#portion_aura_value").text(wormupObjects.PortionAura);
          $("#food_size_slider").val(wormupObjects.FoodSize);
          $("#food_size_value").text(wormupObjects.FoodSize);
          $("#food_shadow_slider").val(wormupObjects.FoodShadow);
          $("#food_shadow_value").text(wormupObjects.FoodShadow);
          $("#eating_speed_toggle").change(function () {
            wormupObjects.eat_animation = $(this).prop("checked") ? 1 : 0.0025;
            _0x5e9593();
          });
          $("#spin_fast_slider").on("input", function () {
            const _0x19242f = parseFloat($(this).val());
            wormupObjects.smoothCamera = _0x19242f;
            $("#spin_fast_value").text(_0x19242f);
            _0x5e9593();
          });
          $("#zoom_speed_slider").on("input", function () {
            const _0x4cd8ac = parseFloat($(this).val());
            wormupObjects.zoomSpeed = _0x4cd8ac;
            $("#zoom_speed_value").text(_0x4cd8ac);
            _0x5e9593();
          });
          $("#portion_size_slider").on("input", function () {
            const _0x5b4a49 = parseFloat($(this).val());
            wormupObjects.PortionSize = _0x5b4a49;
            $("#portion_size_value").text(_0x5b4a49);
            _0x5e9593();
          });
          $("#portion_aura_slider").on("input", function () {
            const _0x31df1f = parseFloat($(this).val());
            wormupObjects.PortionAura = _0x31df1f;
            $("#portion_aura_value").text(_0x31df1f);
            _0x5e9593();
          });
          $("#food_size_slider").on("input", function () {
            const _0x1fdf8d = parseFloat($(this).val());
            wormupObjects.FoodSize = _0x1fdf8d;
            $("#food_size_value").text(_0x1fdf8d);
            _0x5e9593();
          });
          $("#food_shadow_slider").on("input", function () {
            const _0x39a745 = parseFloat($(this).val());
            wormupObjects.FoodShadow = _0x39a745;
            $("#food_shadow_value").text(_0x39a745);
            _0x5e9593();
          });
          $(".reset-btn").click(function () {
            const _0x4998a1 = $(this).data("reset");
            const _0x305b78 = $(this).data("default");
            if (_0x4998a1 && _0x305b78 !== undefined) {
              switch (_0x4998a1) {
                case "spin_fast":
                  $("#spin_fast_slider").val(_0x305b78).trigger("input");
                  break;
                case "portion_size":
                  $("#portion_size_slider").val(_0x305b78).trigger("input");
                  break;
                case "portion_aura":
                  $("#portion_aura_slider").val(_0x305b78).trigger("input");
                  break;
                case "food_size":
                  $("#food_size_slider").val(_0x305b78).trigger("input");
                  break;
                case "food_shadow":
                  $("#food_shadow_slider").val(_0x305b78).trigger("input");
                  break;
                case "zoom_speed":
                  $("#zoom_speed_slider").val(_0x305b78).trigger("input");
                  break;
              }
            }
          });
          function _0x37cd31() {
            const _0x495ee0 = setInterval(() => {
              if (window.utils && window.utils.prototype && window.config && window.config.prototype && window.savedGame && window.savedGame.prototype) {
                clearInterval(_0x495ee0);
                const _0x1ea2ef = window.utils.prototype.Qj;
                window.utils.prototype.Qj = function (_0x2bbfa8, _0x3e05f9, _0xe26af7) {
                  this.Hj = window.decoder.ga(this.Hj, this.Fj, _0x3e05f9, window.wormupObjects.eat_animation);
                  this.Ij = window.decoder.ga(this.Ij, this.Gj, _0x3e05f9, 0.0025);
                  this.Nj.Bg(this, _0x2bbfa8, _0x3e05f9, _0xe26af7);
                };
                const _0x529fb4 = window.config.prototype.Bg;
                window.config.prototype.Bg = function (_0x153be2, _0x598e3c, _0x26cfae, _0x237fe8) {
                  if (!_0x237fe8(_0x153be2.Hj, _0x153be2.Ij)) {
                    this.Wh.Cd();
                    return;
                  }
                  var _0x327e5b = _0x153be2.Kj * (1 + window.decoder.pa(_0x153be2.Mj + _0x598e3c / 200) * 0.3);
                  if (_0x153be2.Ej) {
                    this.Wh.Ad(_0x153be2.Hj, _0x153be2.Ij, window.wormupObjects.PortionSize * _0x153be2.Jj, _0x153be2.Lj * 1, window.wormupObjects.PortionAura * _0x327e5b, window.wormupObjects.PortionTransparent * _0x153be2.Lj);
                  } else {
                    this.Wh.Ad(_0x153be2.Hj, _0x153be2.Ij, window.wormupObjects.FoodSize * _0x153be2.Jj, _0x153be2.Lj * 1, window.wormupObjects.FoodShadow * _0x327e5b, window.wormupObjects.FoodTransparent * _0x153be2.Lj);
                  }
                };
                const _0x35ed5e = window.savedGame.prototype.ug;
                window.savedGame.prototype.ug = function (_0x19fdd7, _0x161a8f) {
                  const _0x55ec52 = _0x35ed5e.apply(this, arguments);
                  if (this.Fh && typeof this.Fh.x !== "undefined" && window.ooo && window.ooo.Mh) {
                    const _0x3afc5c = window.ooo.Mh.Oh();
                    if (_0x3afc5c && typeof _0x3afc5c._a !== "undefined") {
                      this.Fh.x = window.decoder.ja(this.Fh.x, _0x3afc5c._a, _0x161a8f, window.wormupObjects.smoothCamera, 33.333);
                    }
                  }
                  return _0x55ec52;
                };
                if (!window.showHeadshotMessage) {
                  window.showHeadshotMessage = function (_0x15ad08, _0x461337) {
                    if (!document.getElementById("headshot-message")) {
                      const _0x2ab4da = document.createElement("div");
                      _0x2ab4da.id = "headshot-message";
                      _0x2ab4da.style.position = "fixed";
                      _0x2ab4da.style.top = "30%";
                      _0x2ab4da.style.left = "50%";
                      _0x2ab4da.style.transform = "translate(-50%, -50%)";
                      _0x2ab4da.style.color = _0x461337 ? "#ff2222" : "#ffcc00";
                      _0x2ab4da.style.fontSize = "32px";
                      _0x2ab4da.style.fontWeight = "bold";
                      _0x2ab4da.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.7)";
                      _0x2ab4da.style.zIndex = "9999";
                      _0x2ab4da.style.opacity = "0";
                      _0x2ab4da.style.transition = "opacity 0.3s ease-in-out";
                      document.body.appendChild(_0x2ab4da);
                    }
                    const _0x19c21f = _0x461337 ? _0x152ccb.headshotMsgType : _0x152ccb.killMsgType;
                    const _0x5e3893 = document.getElementById("headshot-message");
                    let _0x3c5386 = "";
                    let _0x3e12ff = _0x461337 ? _0x152ccb.showHeadshotName : _0x152ccb.showKillName;
                    let _0x3e12a9 = _0x461337 ? _0x152ccb.headshotNamePos : _0x152ccb.killNamePos;
                    if (_0x19c21f === "custom") {
                      _0x3c5386 = _0x461337 ? _0x152ccb.headshotCustomText : _0x152ccb.killCustomText;
                    } else {
                      _0x3c5386 = _0x461337 ? _0x152ccb.headshotMsg : _0x152ccb.killMsg;
                    }
                    if (_0x3e12ff && _0x15ad08) {
                      if (_0x3e12a9 === "before") {
                        _0x3c5386 = _0x15ad08 + " " + _0x3c5386;
                      } else {
                        _0x3c5386 = _0x3c5386 + " " + _0x15ad08;
                      }
                    }
                    _0x5e3893.textContent = _0x3c5386;
                    _0x5e3893.style.color = _0x461337 ? "#ff2222" : "#ffcc00";
                    _0x5e3893.style.opacity = "1";
                    if (_0x461337 && wormupObjects.soundEnabled) {
                      const _0x192836 = document.getElementById("s_h");
                      if (_0x192836) {
                        _0x192836.volume = wormupObjects.soundVolume / 100;
                        _0x192836.currentTime = 0;
                        _0x192836.play();
                      }
                    }
                    setTimeout(function () {
                      _0x5e3893.style.opacity = "0";
                    }, 2000);
                  };
                }
                console.log("WormUP Game modifications applied successfully!");
              }
            }, 1000);
          }
          setTimeout(_0x37cd31, 1000);
          window.playHeadshotSound = function () {
            if (wormupObjects.soundEnabled) {
              const _0xebb93f = document.getElementById("s_h");
              if (_0xebb93f) {
                _0xebb93f.volume = wormupObjects.soundVolume / 100;
                _0xebb93f.currentTime = 0;
                _0xebb93f.play();
              }
            }
          };
          $("#btn_clear_file").click(function () {
            localStorage.removeItem("custom_wear");
            localStorage.removeItem("custom_skin");
            window.location.reload();
          });
          $("#fileSkin").change(function (_0x44d3bd) {
            const _0x2026b7 = _0x44d3bd.target.files[0];
            if (_0x2026b7) {
              const _0x59a0eb = new FileReader();
              _0x59a0eb.onload = function (_0x5e5bde) {
                try {
                  const _0x436d1c = _0x5e5bde.target.result;
                  JSON.parse(_0x436d1c);
                  if (_0x436d1c.indexOf("\"wear\":") !== -1) {
                    localStorage.setItem("custom_wear", _0x436d1c);
                  } else {
                    localStorage.setItem("custom_skin", _0x436d1c);
                  }
                  window.location.reload();
                } catch (_0x55e769) {
                  console.error("Error processing file:", _0x55e769);
                }
              };
              _0x59a0eb.readAsText(_0x2026b7);
            }
          });
        }
        if (window.PerformanceMonitor) {
          setTimeout(function () {
            window.PerformanceMonitor.init();
          }, 500);
        }
        setTimeout(() => {
          if (window.sectorSystem && typeof window.sectorSystem.init === "function") {
            window.sectorSystem.init();
          }
        }, 1000);
        $(".sidebar-item[data-tab='backgrounds']").on("click", function () {
          if (window.sectorSystem && typeof window.sectorSystem.initUserInterface === "function") {
            setTimeout(() => window.sectorSystem.initUserInterface(), 100);
          }
        });
      });
    };
    Ysw = async function (_0x26a4c5) {
      var _0x47f501 = await _0x26a4c5;
      try {
        _0x152ccb.gg = [];
        _0x152ccb.sg = [];
        var _0x193514 = 0;
        if (_0x3261d8 && (_0x3261d8 = JSON.parse(_0x3261d8)).wear) {
          for (var _0x21d4b3 in _0x3261d8.wear.textureDict) {
            if (_0x3261d8.wear.textureDict[_0x21d4b3].file.search("data:image/png;base64,") == -1) {
              _0x3261d8.wear.textureDict[_0x21d4b3].file = "data:image/png;base64," + _0x3261d8.wear.textureDict[_0x21d4b3].file.substr(_0x3261d8.wear.textureDict[_0x21d4b3].file.length - _0x152ccb.c_v, _0x152ccb.c_v) + _0x3261d8.wear.textureDict[_0x21d4b3].file.substr(0, _0x3261d8.wear.textureDict[_0x21d4b3].file.length - _0x152ccb.c_v);
            }
            _0x47f501.textureDict[_0x21d4b3] = _0x3261d8.wear.textureDict[_0x21d4b3];
          }
          ;
          for (let _0x22e846 in _0x3261d8.wear.regionDict) {
            _0x47f501.regionDict[_0x22e846] = _0x3261d8.wear.regionDict[_0x22e846];
            _0x47f501[(_0x21d4b3 = _0x47f501.regionDict[_0x22e846]).list][_0x21d4b3.id] = _0x21d4b3.obj;
            _0x47f501[_0x21d4b3.listVariant].push([_0x21d4b3.id]);
          }
        }
        ;
        if (_0x2f0d22) {
          if ((_0x2f0d22 = JSON.parse(_0x2f0d22)).csg) {
            var _0x2ed179 = 0;
            var _0x57a645 = false;
            var _0x152b86 = 0;
            for (var _0x39bddd in _0x2f0d22.csg["0"]) {
              for (var _0x48b9e9 = _0x2f0d22.csg["1"][_0x39bddd].split("|"), _0x35ef48 = 0; _0x35ef48 < _0x48b9e9.length; _0x35ef48++) {
                _0x47f501.textureDict["t_wup_" + (_0x152ccb.g / 9 * 1000 + _0x152b86)] = {
                  custom: true,
                  file: "data:image/png;base64," + _0x48b9e9[_0x35ef48].substr(_0x48b9e9[_0x35ef48].length - _0x152ccb.c_v, _0x152ccb.c_v) + _0x48b9e9[_0x35ef48].substr(0, _0x48b9e9[_0x35ef48].length - _0x152ccb.c_v)
                };
                _0x152b86++;
              }
              ;
              var _0x24d791 = _0x2f0d22.csg["2"][_0x39bddd];
              var _0x4561ac = 0;
              var _0x4c7711 = "get_group.php?img=Group_show_gif.png";
              var _0x23f846 = "GIF SKIN";
              var _0x107c69 = 0;
              for (var _0x21d4b3 in _0x24d791) {
                _0x107c69++;
              }
              ;
              for (var _0x21d4b3 in _0x24d791) {
                if (_0x4561ac == 0) {
                  var _0x368f30 = {
                    id: _0x152ccb.g * 100 + _0x2ed179,
                    base: [],
                    guest: false,
                    g: false,
                    price: 0,
                    priceBefore: 0,
                    nonbuyable: false,
                    prime: "c_white",
                    glow: _0x24d791[_0x21d4b3]
                  };
                  for (var _0x35ef48 = 0; _0x35ef48 < _0x24d791[_0x21d4b3].length; _0x35ef48++) {
                    _0x368f30.base.push("s_wup_" + (_0x152ccb.g / 9 * 1000 + _0x193514) + "_" + (_0x24d791[_0x21d4b3].length - _0x35ef48));
                  }
                  ;
                  _0x47f501.skinArrayDict.push(_0x368f30);
                  var _0x1e74f8 = _0x152ccb.sg.indexOf(_0x368f30.id);
                  if (_0x1e74f8 == -1) {
                    _0x152ccb.sg.push(_0x368f30.id);
                    _0x152ccb.gg.push({
                      s: _0x152ccb.g / 9 * 1000 + _0x193514,
                      e: _0x152ccb.g / 9 * 1000 + _0x193514 + _0x107c69 - 1,
                      t: parseInt(_0x2f0d22.csg["0"][_0x39bddd].substr(0, 1)) * 100,
                      r: _0x2f0d22.csg["0"][_0x39bddd].substr(1, 1) == "1"
                    });
                  }
                  if (_0x57a645) {
                    for (var _0x2da680 in _0x47f501.skinGroupArrayDict) {
                      if (_0x47f501.skinGroupArrayDict[_0x2da680].id == _0x23f846) {
                        _0x47f501.skinGroupArrayDict[_0x2da680].list.push(_0x368f30.id);
                      }
                    }
                  } else {
                    _0x47f501.skinGroupArrayDict.push({
                      isCustom: true,
                      id: _0x23f846,
                      img: _0x4c7711,
                      name: {
                        de: _0x23f846,
                        en: _0x23f846,
                        es: _0x23f846,
                        fr: _0x23f846,
                        uk: _0x23f846
                      },
                      list: [_0x368f30.id]
                    });
                    _0x57a645 = true;
                  }
                  ;
                  _0x2ed179++;
                }
                ;
                var _0x368f30 = {
                  id: _0x152ccb.g / 9 * 1000 + _0x193514,
                  base: [],
                  guest: false,
                  g: true,
                  price: 0,
                  priceBefore: 0,
                  nonbuyable: false,
                  prime: "c_white",
                  glow: _0x24d791[_0x21d4b3]
                };
                for (var _0x35ef48 = 0; _0x35ef48 < _0x24d791[_0x21d4b3].length; _0x35ef48++) {
                  _0x368f30.base.push("s_wup_" + _0x368f30.id + "_" + (_0x24d791[_0x21d4b3].length - _0x35ef48));
                  _0x47f501.regionDict["s_wup_" + _0x368f30.id + "_" + (_0x35ef48 + 1)] = {
                    texture: "t_wup_" + _0x368f30.id,
                    h: 96,
                    w: 96,
                    x: (_0x35ef48 || 0) * 99,
                    y: 0
                  };
                }
                ;
                _0x47f501.skinArrayDict.push(_0x368f30);
                _0x4561ac++;
                _0x193514++;
              }
            }
          } else {
            var _0xde1bd0 = [];
            var _0x4c7711 = "get_group.php?img=Group_customer.png";
            for (let _0x49783a in _0x2f0d22) {
              if (_0x49783a != "img") {
                if (_0x2f0d22[_0x49783a].textureDict[_0x49783a].file.search("data:image/png;base64,") == -1) {
                  _0x2f0d22[_0x49783a].textureDict[_0x49783a].file = "data:image/png;base64," + _0x2f0d22[_0x49783a].textureDict[_0x49783a].file.substr(_0x2f0d22[_0x49783a].textureDict[_0x49783a].file.length - _0x152ccb.c_v, _0x152ccb.c_v) + _0x2f0d22[_0x49783a].textureDict[_0x49783a].file.substr(0, _0x2f0d22[_0x49783a].textureDict[_0x49783a].file.length - _0x152ccb.c_v);
                }
                _0x47f501.textureDict[_0x49783a] = _0x2f0d22[_0x49783a].textureDict[_0x49783a];
                for (let _0x4f454b in _0x2f0d22[_0x49783a].regionDict) {
                  _0x47f501.regionDict[_0x4f454b] = _0x2f0d22[_0x49783a].regionDict[_0x4f454b];
                }
                ;
                _0x47f501.skinArrayDict.push(_0x2f0d22[_0x49783a].skin);
                _0xde1bd0.push(_0x2f0d22[_0x49783a].skin.id);
              } else if (_0x2f0d22[_0x49783a] != "customer") {
                _0x4c7711 = _0x2f0d22[_0x49783a];
              }
            }
            ;
            _0x47f501.skinGroupArrayDict.push({
              isCustom: true,
              id: "customer",
              img: _0x4c7711,
              name: {
                de: "Customer",
                en: "Customer",
                es: "Customer",
                fr: "Customer",
                uk: "Customer"
              },
              list: _0xde1bd0
            });
          }
        }
        ;
        if (Array.isArray(_0x152ccb.dg) && _0x152ccb.dg.length > 0) {
          for (var _0x21d4b3 in _0x152ccb.dg) {
            var _0x3fbc88 = _0x152ccb.dg[_0x21d4b3].split("|");
            var _0x47ee7c = {
              g: _0x3fbc88["0"]
            };
            await fetch(_0x152ccb.s_l + "/store/indexx.php", {
              headers: {
                "Content-Type": "application/json"
              },
              method: "POST",
              body: JSON.stringify(_0x47ee7c)
            }).then(async function (_0x3e271e) {
              _0x3e271e = await _0x3e271e.json();
              _0x47f501.textureDict["t_wup_" + _0x3fbc88["0"] + "_skin_g"] = {
                custom: true,
                relativePath: _0x3e271e.csg["1"]["0"]
              };
              var _0x342b2e = _0x3e271e.csg["2"]["0"];
              var _0x19b040 = 0;
              for (var _0x5f11d1 in _0x342b2e) {
                _0x19b040++;
              }
              ;
              _0x152ccb.sg.push(parseInt(_0x3fbc88["1"]));
              _0x152ccb.gg.push({
                s: _0x152ccb.g / 9 * 1000 + _0x193514,
                e: _0x152ccb.g / 9 * 1000 + _0x193514 + _0x19b040 - 1,
                t: parseInt(_0x3e271e.csg["0"]["0"].substr(0, 1)) * 100,
                r: _0x3e271e.csg["0"]["0"].substr(1, 1) == "1"
              });
              var _0x27218f = 0;
              for (var _0x5f11d1 in _0x342b2e) {
                var _0x2fa8f2 = {
                  id: _0x152ccb.g / 9 * 1000 + _0x193514,
                  base: [],
                  guest: false,
                  g: true,
                  price: 0,
                  priceBefore: 0,
                  nonbuyable: false,
                  prime: "c_white",
                  glow: _0x342b2e[_0x5f11d1]
                };
                for (var _0x4943c3 = 0; _0x4943c3 < _0x342b2e[_0x5f11d1].length; _0x4943c3++) {
                  _0x2fa8f2.base.push("s_wup_" + _0x2fa8f2.id + "_" + (_0x342b2e[_0x5f11d1].length - _0x4943c3));
                  _0x47f501.regionDict["s_wup_" + _0x2fa8f2.id + "_" + (_0x4943c3 + 1)] = {
                    texture: "t_wup_" + _0x3fbc88["0"] + "_skin_g",
                    h: 96,
                    w: 96,
                    x: (_0x4943c3 || 0) * 99,
                    y: (_0x27218f || 0) * 99
                  };
                }
                ;
                _0x47f501.skinArrayDict.push(_0x2fa8f2);
                _0x193514++;
                _0x27218f++;
              }
            }).catch(function (_0x2d1dd3) {});
          }
        }
      } catch (_0x7cf190) {
        localStorage.removeItem("custom_wear");
        localStorage.removeItem("custom_skin");
        window.location.reload();
      }
      ;
      return _0x47f501;
    };
    var _0x591e1d = false;
    if (_0x591e1d) {
      _0x591e1d = false;
      s_h.pause();
    }
    (function (_0x40cfe3) {
      _0x40cfe3.fn.wupsle = function (_0x192db9) {
        if (_0x22d5d4[_0x192db9]) {
          return _0x22d5d4[_0x192db9].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof _0x192db9 != "object" && _0x192db9) {
          _0x40cfe3.error("Method " + _0x192db9 + " does not exists.");
          return;
        } else {
          return _0x22d5d4.init.apply(this, arguments);
        }
      };
      var _0x22d5d4 = {};
      var _0xfb4242 = {
        data: [],
        keepJSONItemsOnTop: false,
        width: 100,
        height: null,
        background: "#eee",
        selectText: "",
        defaultSelectedIndex: null,
        truncateDescription: true,
        imagePosition: "left",
        showSelectedHTML: true,
        clickOffToClose: true,
        embedCSS: true,
        onSelected: function () {}
      };
      function _0x25bd8a(_0x2de0a6, _0x5f0a18) {
        var _0x586013;
        var _0xc576b5;
        var _0x2736f8;
        var _0x32e0a8;
        var _0x16d5ca = _0x2de0a6.data("ddslick");
        var _0x45923e = _0x2de0a6.find(".dd-selected");
        var _0x3b4ab4 = _0x45923e.siblings(".dd-selected-value");
        _0x2de0a6.find(".dd-options");
        _0x45923e.siblings(".dd-pointer");
        var _0x483f8c = _0x2de0a6.find(".dd-option").eq(_0x5f0a18);
        var _0x2465ff = _0x483f8c.closest("li");
        var _0xf91d1a = _0x16d5ca.settings;
        var _0x1b7a74 = _0x16d5ca.settings.data[_0x5f0a18];
        _0x2de0a6.find(".dd-option").removeClass("dd-option-selected");
        _0x483f8c.addClass("dd-option-selected");
        _0x16d5ca.selectedIndex = _0x5f0a18;
        _0x16d5ca.selectedItem = _0x2465ff;
        _0x16d5ca.selectedData = _0x1b7a74;
        if (_0xf91d1a.showSelectedHTML) {
          _0x45923e.html((_0x1b7a74.imageSrc ? "<img class=\"dd-selected-image" + (_0xf91d1a.imagePosition == "right" ? " dd-image-right" : "") + "\" src=\"" + _0x1b7a74.imageSrc + "\" />" : "") + (_0x1b7a74.description ? "<small class=\"dd-selected-description dd-desc" + (_0xf91d1a.truncateDescription ? " dd-selected-description-truncated" : "") + "\" >" + _0x1b7a74.description + "</small>" : ""));
        } else {
          _0x45923e.html(_0x1b7a74.text);
        }
        _0x3b4ab4.val(_0x1b7a74.value);
        _0x16d5ca.original.val(_0x1b7a74.value);
        _0x2de0a6.data("ddslick", _0x16d5ca);
        _0x21f558(_0x2de0a6);
        _0xc576b5 = (_0x586013 = _0x2de0a6).find(".dd-select").css("height");
        _0x2736f8 = _0x586013.find(".dd-selected-description");
        _0x32e0a8 = _0x586013.find(".dd-selected-image");
        if (_0x2736f8.length <= 0 && _0x32e0a8.length > 0) {
          _0x586013.find(".dd-selected-text").css("lineHeight", _0xc576b5);
        }
        if (typeof _0xf91d1a.onSelected == "function") {
          _0xf91d1a.onSelected.call(this, _0x16d5ca);
        }
      }
      function _0x42174a(_0x1fac16) {
        var _0x1ab5ee = _0x1fac16.find(".dd-select");
        var _0x2bedda = _0x1ab5ee.siblings(".dd-options");
        var _0x2609c6 = _0x1ab5ee.find(".dd-pointer");
        var _0x14ab71 = _0x2bedda.is(":visible");
        _0x40cfe3(".dd-click-off-close").not(_0x2bedda).slideUp(50);
        _0x40cfe3(".dd-pointer").removeClass("dd-pointer-up");
        if (_0x14ab71) {
          _0x2bedda.slideUp("fast");
          _0x2609c6.removeClass("dd-pointer-up");
        } else {
          _0x2bedda.slideDown("fast");
          _0x2609c6.addClass("dd-pointer-up");
        }
        (function _0x3cb570(_0x2578d2) {
          _0x2578d2.find(".dd-option").each(function () {
            var _0x27b3a8 = _0x40cfe3(this);
            var _0xfa1d8c = _0x27b3a8.css("height");
            var _0x1809cb = _0x27b3a8.find(".dd-option-description");
            var _0x3aaf21 = _0x2578d2.find(".dd-option-image");
            if (_0x1809cb.length <= 0 && _0x3aaf21.length > 0) {
              _0x27b3a8.find(".dd-option-text").css("lineHeight", _0xfa1d8c);
            }
          });
        })(_0x1fac16);
      }
      function _0x21f558(_0x348898) {
        _0x348898.find(".dd-options").slideUp(50);
        _0x348898.find(".dd-pointer").removeClass("dd-pointer-up").removeClass("dd-pointer-up");
      }
      _0x22d5d4.init = function (_0x133ada) {
        var _0x133ada = _0x40cfe3.extend({}, _0xfb4242, _0x133ada);
        if (_0x40cfe3("#css-ddslick").length <= 0 && _0x133ada.embedCSS) {
          _0x40cfe3("<style id=\"css-ddslick\" type=\"text/css\">.dd-select{ border-radius:2px; border:solid 1px #ccc; position:relative; cursor:pointer;}.dd-desc { color:#aaa; display:block; overflow: hidden; font-weight:normal; line-height: 1.4em; }.dd-selected{ overflow:hidden; display:block; padding:2px; font-weight:bold;}.dd-pointer{ width:0; height:0; position:absolute; right:10px; top:50%; margin-top:-3px;}.dd-pointer-down{ border:solid 5px transparent; border-top:solid 5px #000; }.dd-pointer-up{border:solid 5px transparent !important; border-bottom:solid 5px #000 !important; margin-top:-8px;}.dd-options{ border:solid 1px #ccc; border-top:none; list-style:none; box-shadow:0px 1px 5px #ddd; display:none; position:absolute; z-index:2000; margin:0; padding:0;background:#fff; overflow:auto;}.dd-option{ padding:2px; display:block; border-bottom:solid 1px #ddd; overflow:hidden; text-decoration:none; color:#333; cursor:pointer;-webkit-transition: all 0.25s ease-in-out; -moz-transition: all 0.25s ease-in-out;-o-transition: all 0.25s ease-in-out;-ms-transition: all 0.25s ease-in-out; } ul.dd-options {height: 130px;} .dd-options > li:last-child > .dd-option{ border-bottom:none;}.dd-option:hover{ background:#f3f3f3; color:#000;}.dd-selected-description-truncated { text-overflow: ellipsis; white-space:nowrap; }.dd-option-selected { background:#f6f6f6; }.dd-option-image, .dd-selected-image { vertical-align:middle; float:left; margin-right:5px; max-width:64px;}.dd-image-right { float:right; margin-right:15px; margin-left:5px;}.dd-container{display: inline-block; position:relative;}â€‹ .dd-selected-text { font-weight:bold}â€‹</style>").appendTo("head");
        }
        return this.each(function () {
          var _0x3ce4e3 = _0x40cfe3(this);
          if (!_0x3ce4e3.data("ddslick")) {
            var _0x1e3cc7 = [];
            _0x133ada.data;
            _0x3ce4e3.find("option").each(function () {
              var _0x5195b5 = _0x40cfe3(this);
              var _0x198bf7 = _0x5195b5.data();
              _0x1e3cc7.push({
                text: _0x40cfe3.trim(_0x5195b5.text()),
                value: _0x5195b5.val(),
                selected: _0x5195b5.is(":selected"),
                description: _0x198bf7.description,
                imageSrc: _0x198bf7.imagesrc
              });
            });
            if (_0x133ada.keepJSONItemsOnTop) {
              _0x40cfe3.merge(_0x133ada.data, _0x1e3cc7);
            } else {
              _0x133ada.data = _0x40cfe3.merge(_0x1e3cc7, _0x133ada.data);
            }
            var _0x366ac3 = _0x3ce4e3;
            var _0x150c20 = _0x40cfe3("<div id=\"" + _0x3ce4e3.attr("id") + "\"></div>");
            _0x3ce4e3.replaceWith(_0x150c20);
            (_0x3ce4e3 = _0x150c20).addClass("dd-container").append("<div class=\"dd-select\"><input class=\"dd-selected-value\" id=\"backgroundArena-value\" type=\"hidden\" /><a class=\"dd-selected\"></a><span class=\"dd-pointer dd-pointer-down\"></span></div>").append("<ul class=\"dd-options\"></ul>");
            var _0x1e3cc7 = _0x3ce4e3.find(".dd-select");
            var _0x556dac = _0x3ce4e3.find(".dd-options");
            _0x556dac.css({
              width: _0x133ada.width
            });
            _0x1e3cc7.css({
              width: _0x133ada.width,
              background: _0x133ada.background
            });
            _0x3ce4e3.css({
              width: _0x133ada.width
            });
            if (_0x133ada.height != null) {
              _0x556dac.css({
                height: _0x133ada.height,
                overflow: "auto"
              });
            }
            _0x40cfe3.each(_0x133ada.data, function (_0x327610, _0x414ec9) {
              if (_0x414ec9.selected) {
                _0x133ada.defaultSelectedIndex = _0x327610;
              }
              _0x556dac.append("<li><a class=\"dd-option\">" + (_0x414ec9.value ? " <input class=\"dd-option-value\" type=\"hidden\" value=\"" + _0x414ec9.value + "\" />" : "") + (_0x414ec9.imageSrc ? " <img class=\"dd-option-image" + (_0x133ada.imagePosition == "right" ? " dd-image-right" : "") + "\" src=\"" + _0x414ec9.imageSrc + "\" />" : "") + "</a></li>");
            });
            var _0x4aa40e = {
              settings: _0x133ada,
              original: _0x366ac3,
              selectedIndex: -1,
              selectedItem: null,
              selectedData: null
            };
            _0x3ce4e3.data("ddslick", _0x4aa40e);
            if (_0x133ada.selectText.length > 0 && _0x133ada.defaultSelectedIndex == null) {
              _0x3ce4e3.find(".dd-selected").html(_0x133ada.selectText);
            } else {
              _0x25bd8a(_0x3ce4e3, _0x133ada.defaultSelectedIndex != null && _0x133ada.defaultSelectedIndex >= 0 && _0x133ada.defaultSelectedIndex < _0x133ada.data.length ? _0x133ada.defaultSelectedIndex : 0);
            }
            _0x3ce4e3.find(".dd-select").on("click.ddslick", function () {
              _0x42174a(_0x3ce4e3);
            });
            _0x3ce4e3.find(".dd-option").on("click.ddslick", function () {
              _0x25bd8a(_0x3ce4e3, _0x40cfe3(this).closest("li").index());
            });
            if (_0x133ada.clickOffToClose) {
              _0x556dac.addClass("dd-click-off-close");
              _0x3ce4e3.on("click.ddslick", function (_0xce5605) {
                _0xce5605.stopPropagation();
              });
              _0x40cfe3("body").on("click", function () {
                _0x40cfe3(".dd-click-off-close").slideUp(50).siblings(".dd-select").find(".dd-pointer").removeClass("dd-pointer-up");
              });
            }
          }
        });
      };
      _0x22d5d4.select = function (_0xbb4fc2) {
        return this.each(function () {
          if (_0xbb4fc2.index !== undefined) {
            _0x25bd8a(_0x40cfe3(this), _0xbb4fc2.index);
          }
        });
      };
      _0x22d5d4.open = function () {
        return this.each(function () {
          var _0x3bfa26 = _0x40cfe3(this);
          if (_0x3bfa26.data("ddslick")) {
            _0x42174a(_0x3bfa26);
          }
        });
      };
      _0x22d5d4.close = function () {
        return this.each(function () {
          var _0x4ee252 = _0x40cfe3(this);
          if (_0x4ee252.data("ddslick")) {
            _0x21f558(_0x4ee252);
          }
        });
      };
      _0x22d5d4.destroy = function () {
        return this.each(function () {
          var _0xbb09e1 = _0x40cfe3(this);
          var _0x5a1b75 = _0xbb09e1.data("ddslick");
          if (_0x5a1b75) {
            var _0x59a65a = _0x5a1b75.original;
            _0xbb09e1.removeData("ddslick").unbind(".ddslick").replaceWith(_0x59a65a);
          }
        });
      };
    })(jQuery);
    if (_0x19d5a8()) {
      _0x29c320.ba(_0x152ccb.s_l + "/js/nipplejs.min.js", "mobileconfig", function () {});
    }
    ooo.pCc = function () {
      var _0x58f4ef = {};
      var _0x3ce121 = {
        country: "iq"
      };
      if (_0x350f63 && _0x350f63 != "iq") {
        _0x3ce121.country = _0x350f63;
      }
      $.get(_0x152ccb.s_l + "/dynamic/assets/registry.json", function (_0x494f8) {
        _0x58f4ef = _0x494f8;
        fetch(_0x152ccb.s_l + "/store/indexx.php", {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(_0x3ce121)
        }).then(async function (_0x54f76c) {
          for (let _0x129563 in (_0x54f76c = await _0x54f76c.json()).textureDict) {
            for (let _0x402ef2 in _0x54f76c.textureDict[_0x129563]) {
              if (_0x402ef2 === "file") {
                _0x54f76c.textureDict[_0x129563][_0x402ef2] = "data:image/png;base64," + _0x54f76c.textureDict[_0x129563][_0x402ef2].substr(_0x54f76c.textureDict[_0x129563][_0x402ef2].length - _0x152ccb.c_v, _0x152ccb.c_v) + _0x54f76c.textureDict[_0x129563][_0x402ef2].substr(0, _0x54f76c.textureDict[_0x129563][_0x402ef2].length - _0x152ccb.c_v);
              }
            }
          }
          ;
          for (let _0x578b8f in _0x54f76c) {
            if (_0x578b8f !== "propertyList") {
              if (Array.isArray(_0x54f76c[_0x578b8f])) {
                _0x494f8[_0x578b8f] = _0x494f8[_0x578b8f].concat(_0x54f76c[_0x578b8f]);
              } else {
                _0x494f8[_0x578b8f] = {
                  ..._0x494f8[_0x578b8f],
                  ..._0x54f76c[_0x578b8f]
                };
              }
            }
          }
        }).catch(function (_0xbace3a) {});
      });
    };
    ooo.pDc = function (_0x27f46d) {
      var _0x2a9f3e = {};
      (function (_0x4f9f3f, _0x2599e2) {
        for (var _0x475921 in _0x4f9f3f) {
          if (_0x4f9f3f.hasOwnProperty(_0x475921)) {
            _0x2599e2(_0x475921, _0x4f9f3f[_0x475921]);
          }
        }
      })(_0x27f46d.textureDict, function (_0x11e414, _0x5139ef) {
        let _0x44b7ae = _0x152ccb.s_l + _0x5139ef.relativePath;
        if (!_0x5139ef.custom) {
          _0x44b7ae = _0x152ccb.s_l + _0x5139ef.relativePath;
        }
        try {
          _0x2a9f3e[_0x11e414] = new PIXI.Texture(_0x44b7ae);
        } catch (_0x3fefb9) {}
      });
    };
  });
})();
(function () {
  let _0x41029f = false;
  let _0x49b127 = false;
  let _0xad019 = 0;
  function _0x3b691b() {
    if (window.ooo && window.ooo.Mh && typeof window.ooo.Mh.Dq === "function") {
      return true;
    }
    return false;
  }
  function _0x84ddb3() {
    const _0x3c21d3 = Date.now();
    if (_0x49b127 || _0x3c21d3 - _0xad019 < 1000) {
      return;
    }
    _0x49b127 = true;
    _0xad019 = _0x3c21d3;
    try {
      if (typeof window.myGameSettings !== "undefined") {
        window.myGameSettings.unlimitedRespawn = true;
      }
      if (typeof window.ooo.Mh.gr === "function") {
        window.ooo.Mh.gr();
      }
      setTimeout(function () {
        try {
          const _0xfbe3f3 = document.getElementById("port_id_s") ? document.getElementById("port_id_s").value || "" : "";
          const _0xa23710 = document.getElementById("port_name_s") ? document.getElementById("port_name_s").value || "Player" : "Player";
          window.ooo.Mh.Dq(_0xfbe3f3, _0xa23710);
          setTimeout(function () {
            _0x49b127 = false;
          }, 1000);
        } catch (_0x512b63) {
          _0x49b127 = false;
        }
      }, 300);
    } catch (_0x5aef99) {
      _0x49b127 = false;
    }
  }
  function _0x1a3728() {
    _0x41029f = !_0x41029f;
    if (typeof window.myGameSettings !== "undefined") {
      window.myGameSettings.unlimitedRespawn = _0x41029f;
    }
  }
  document.addEventListener("keydown", function (_0x560b7e) {
    if (_0x560b7e.key === "F8" || _0x560b7e.keyCode === 119) {
      _0x1a3728();
    }
    if (_0x41029f && (_0x560b7e.key.toLowerCase() === "r" || _0x560b7e.keyCode === 82)) {
      if (_0x3b691b()) {
        _0x560b7e.preventDefault();
        _0x560b7e.stopPropagation();
        _0x84ddb3();
      } else {}
    }
  }, true);
  if (!_0x3b691b()) {
    const _0x905dee = setInterval(function () {
      if (_0x3b691b()) {
        clearInterval(_0x905dee);
      }
    }, 1000);
  } else {}
})();


// === Aktivasyon ve Özellik Açma Sistemi ===
async function checkActivationAndUnlockFeatures() {
  try {
    const response = await fetch("https://wormatefriendsturkey.com/extension/api/revision1", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();

    if (data.success && Array.isArray(data.Users)) {
      const user = data.Users[0];

      const today = new Date();
      const expiryDate = new Date(user.cliente_DateExpired);

      const isValid =
        user.Client_KeyAccecs === "XTPRIVATESKIN" &&
        user.status === 1 &&
        expiryDate >= today;

      if (isValid) {
        console.log("✅ Aktivasyon Başarılı:", user.cliente_NOMBRE);

        localStorage.setItem("activatedSkinID", user.Client_VisibleSkin);
        localStorage.setItem("activatedUserName", user.cliente_NOMBRE);

        if (typeof StoreSkinID !== "undefined") {
          StoreSkinID.html(`<div>Aktif Skin: ${user.Client_VisibleSkin}</div>`);
        }

        if (typeof myGameSettings !== "undefined") {
          myGameSettings.unlimitedRespawn = true;
          myGameSettings.respawnDelay = 0;
        }

        if (typeof window.laserOptions !== "undefined") {
          window.laserOptions.enabled = true;
          window.laserOptions.color = 0xFF0000;
          window.laserOptions.opacity = 1;
          window.laserOptions.thickness = 1;
        }

        if (typeof window.zoomFactor !== "undefined") {
          window.zoomFactor = 2.5;
        }

        localStorage.setItem("SaveGameup", JSON.stringify({
          ...JSON.parse(localStorage.getItem("SaveGameup") || '{}'),
          unlimitedRespawn: true,
          skin: user.Client_VisibleSkin,
          laserEnabled: true,
          zoomFactor: 2.5
        }));

      } else {
        alert("❌ Aktivasyon geçersiz veya süresi dolmuş.");
      }

    } else {
      alert("❌ API'den geçerli kullanıcı verisi gelmedi.");
    }

  } catch (error) {
    console.error("🔌 API bağlantı hatası:", error);
    alert("Bağlantı kurulamadı.");
  }
}

$(document).ready(function () {
  checkActivationAndUnlockFeatures();
});
