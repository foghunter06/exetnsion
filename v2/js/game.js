var a;
var c;
function d(a) {
  return (d = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (a) {
    return typeof a;
  } : function (a) {
    if (a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof a;
    }
  })(a);
}
(function () {
  var e = {};
  var f = {};
  var g = {};
  var h = {};
  g.a = function (a) {
    var c = new String();
    var d = parseInt(a.substring(0, 2), 16);
    for (var e = 2; e < a.length; e += 2) {
      var f = parseInt(a.substring(e, e + 2), 16);
      c += String.fromCharCode(f ^ (d = 3793 + d * 4513 & 255));
    }
    ;
    return c;
  };
  g.b = function (a) {
    return Function(g.a("19f8fe38e8fc7170").concat(a, g.a("0941")))();
  };
  e.c = g.b(g.a("e1250a7a013990"));
  e.d = e.c[g.a("32279b2643aa9da74e")];
  g.e = function () {
    return e.c[g.a("4b982848a663b4123a7c302a8569ad2334")] || 1;
  };
  e.c.addEventListener(g.a("b5ca58095d"), function () {
    let i = {
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
    let j = {
      s_l: atob("aHR0cHM6Ly90aW1tYXB3b3JtYXRlLmNvbQ=="),
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
      pm: {},
      joystick: i.joystick,
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
      c_1: "Cindynana GM",
      c_2: "Pham  Phu  Bach",
      c_3: "Tim map Wormate",
      c_4: "wormate.io",
      c_5: "please don't copy my code",
      d_1: "UTJsdVpIbE9ZVzVoSUVkTg==",
      d_2: "VUdoaGJTQlFhSFVnUW1GamFBPT0=",
      d_3: "VkdsdGJXRndWMjl5YldGMFpRPT0=",
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
    let k = localStorage.getItem("tmwSaveGame");
    if (k && k !== "null") {
      let a = JSON.parse(k);
      for (let c in a) {
        j[c] = a[c];
      }
    }
    ;
    let l = function () {
      let a = false;
      j.mobile = false;
      var c = navigator.userAgent || navigator.vendor || window.opera;
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(c) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(c.substr(0, 4))) {
        a = true;
        j.mobile = true;
      }
      return a;
    };
    let m = function (a) {
      j.joystick ||= i.joystick;
      j.joystick.checked = a.checked;
      localStorage.setItem("tmwSaveGame", JSON.stringify(j));
    };
    let n = function (a) {
      j.joystick ||= i.joystick;
      j.joystick.color = a.value;
      localStorage.setItem("tmwSaveGame", JSON.stringify(j));
    };
    let o = function (a) {
      j.joystick ||= i.joystick;
      j.joystick.mode = a.value;
      localStorage.setItem("tmwSaveGame", JSON.stringify(j));
    };
    let p = function (a) {
      j.joystick ||= i.joystick;
      j.joystick.position = {
        left: "75px",
        bottom: "75px"
      };
      if (a.value === "R") {
        j.joystick.position = {
          right: "75px",
          bottom: "75px"
        };
      }
      j.joystick.positionMode = a.value;
      localStorage.setItem("tmwSaveGame", JSON.stringify(j));
    };
    let q = function (a) {
      j.joystick ||= i.joystick;
      j.joystick.position = {
        left: (parseInt(a.value) + 10).toString() + "px",
        bottom: a.value + "px"
      };
      if (j.joystick.positionMode === "R") {
        j.joystick.position = {
          right: (parseInt(a.value) + 10).toString() + "px",
          bottom: a.value + "px"
        };
      }
      j.joystick.pxy = a.value;
      localStorage.setItem("tmwSaveGame", JSON.stringify(j));
    };
    let r = function (a) {
      j.joystick ||= i.joystick;
      j.joystick.size = a.value;
      localStorage.setItem("tmwSaveGame", JSON.stringify(j));
    };
    let s = function (a, c, d, e, f, g) {
      let h = {
        a: "",
        b: 0,
        c: ""
      };
      if (a > j.g * 100 + 100 || a < j.g * 10 || a === undefined) {
        j.a = a;
        if (a === undefined) {
          j.a = Math.floor(Math.random() * (j.g / 9) + (j.g - j.g / 9));
        }
        h.a = "00";
      } else {
        j.a = a - j.g * 10;
        h.b = j.a;
        j.a = j.a % (j.g / 9);
        h.b = (h.b - j.a) / (j.g / 9) + 1;
        j.a = j.a + (j.g - j.g / 9);
        h.a = h.b.toString(j.g).padStart(2, 0);
      }
      if (c > j.g * 20 || c < j.g / 9 * 100 || c === undefined) {
        if (c > j.g * 20 && c < j.g * 30) {
          j.b = c - j.g * 20;
          h.a = h.a + j.b.toString(j.g);
          j.b = 0;
          h.c = h.c + "1";
        } else {
          j.b = c;
          if (c === undefined) {
            j.b = 0;
          }
          h.a = h.a + "0";
          h.c = h.c + "0";
        }
      } else {
        j.b = c - j.g / 9 * 100 + j.g / j.g;
        h.a = h.a + j.b.toString(j.g);
        j.b = 0;
        h.c = h.c + "0";
      }
      if (d > j.g * 20 || d < j.g / 9 * 100 || d === undefined) {
        if (d > j.g * 20 && d < j.g * 30) {
          j.c = d - j.g * 20;
          h.a = h.a + j.c.toString(j.g);
          j.c = 0;
          h.c = h.c + "1";
        } else {
          j.c = d;
          if (d === undefined) {
            j.c = 0;
          }
          h.a = h.a + "0";
          h.c = h.c + "0";
        }
      } else {
        j.c = d - j.g / 9 * 100 + j.g / j.g;
        h.a = h.a + j.c.toString(j.g);
        j.c = 0;
        h.c = h.c + "0";
      }
      if (e > j.g * 20 || e < j.g / 9 * 100 || e === undefined) {
        if (e > j.g * 20 && e < j.g * 30) {
          j.d = e - j.g * 20;
          if (j.d.toString(j.g) === "N") {
            h.a = h.a + "0";
          } else {
            h.a = h.a + j.d.toString(j.g);
          }
          j.d = 0;
          h.c = h.c + "1";
        } else {
          j.d = e;
          if (e === undefined) {
            j.d = 0;
          }
          h.a = h.a + "0";
          h.c = h.c + "0";
        }
      } else {
        j.d = e - j.g / 9 * 100 + j.g / j.g;
        if (j.d.toString(j.g) === "N") {
          h.a = h.a + "0";
        } else {
          h.a = h.a + j.d.toString(j.g);
        }
        j.d = 0;
        h.c = h.c + "0";
      }
      if (f > j.g * 20 || f < j.g / 9 * 100 || f === undefined) {
        if (f > j.g * 20 && f < j.g * 30) {
          h.b = j.g / j.g;
          if (f <= j.g * 20 + (j.g - 1)) {
            j.e = f - j.g * 20;
          } else if (f <= j.g * 20 + (j.g - 1) * 2) {
            h.b = h.b * 2;
            j.e = f - j.g * 20 - (j.g - 1);
          } else if (f <= j.g * 20 + (j.g - 1) * 3) {
            j.e = f - j.g * 20 - (j.g - 1) * 2;
          } else if (f <= j.g * 20 + (j.g - 1) * 4) {
            h.b = h.b * 2;
            j.e = f - j.g * 20 - (j.g - 1) * 3;
          } else {
            j.e = 0;
          }
          if (j.e >= j.g) {
            h.b = 2;
            j.e = j.e - (j.g - 1);
          }
          h.a = h.a + j.e.toString(j.g);
          j.e = 0;
          h.c = h.c + "1";
        } else {
          j.e = f;
          if (f === undefined) {
            j.e = 0;
          }
          h.a = h.a + "0";
          h.c = h.c + "0";
          h.b = 0;
        }
      } else {
        h.b = j.g / j.g;
        if (f - j.g / 9 * 100 + 1 >= j.g) {
          j.e = f - (j.g / 9 * 100 + (j.g - 1));
          h.b = h.b * 2;
        } else {
          j.e = f - j.g / 9 * 100 + h.b;
        }
        h.a = h.a + j.e.toString(j.g);
        j.e = 0;
        h.c = h.c + "0";
      }
      if (h.a == "000000") {
        j.f = g.substr(0, 22).padEnd(22);
      } else {
        let a = parseInt(h.c, 2);
        if (f > 790 && f <= 860) {
          a += 16;
        }
        if (h.b <= 1) {
          h.a = h.a.substr(0, 5) + "." + h.a.substr(5, 1);
        } else {
          h.a = h.a.substr(0, 4) + "." + h.a.substr(4, 2);
        }
        if (g == "") {
          g = ".                       .";
        }
        if (h.c == "0000") {
          if (g.substr(23, 1) == ".") {
            g = g.substr(0, 23).padEnd(23) + " " + g.substr(24, 1).padEnd(1);
          }
          j.f = (g.length >= 32 ? g.substr(0, 25) : g.substr(0, 25).padEnd(25)) + h.a;
        } else {
          j.f = (g.length >= 32 ? g.substr(0, 23) : g.substr(0, 23).padEnd(23)) + "." + a.toString(j.g) + h.a;
        }
        j.f = j.f.replaceAll(" ", "_");
      }
    };
    let t = function (a) {
      let c;
      try {
        j.joystick ||= i.joystick;
        if (l() && a && j.joystick.checked) {
          (c = nipplejs.create(j.joystick)).on("move", function (a, c) {
            i.eie.fo = c.angle.radian <= Math.PI ? c.angle.radian * -1 : Math.PI - (c.angle.radian - Math.PI);
          });
        }
        return c;
      } catch (a) {
        console.error(a);
      }
    };
    let u = function (a) {
      let c = {
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
      let d = 0;
      c.h = a.substr(-9);
      if (c.h.substr(0, 1) != ".") {
        c.i = "0000";
      } else if ((d = parseInt(c.h.substr(1, 1), j.g)) > 15) {
        d -= 16;
        c.i = d.toString(2).padStart(4, 0);
      } else {
        c.i = d.toString(2).padStart(4, 0);
        d = 0;
      }
      c.f = a.substr(-7);
      if (c.f.substr(0, 2) != "00") {
        c.a = parseInt(c.f.substr(0, 2), j.g);
        c.a = (c.a - 1) * (j.g / 9) + j.g * 10 - (j.g - 4);
      }
      if (c.f.substr(5, 1) == ".") {
        if (c.f.substr(6, 1) != "0") {
          c.e = parseInt(c.f.substr(6, 1), j.g);
          if (c.i.substr(3, 1) != "0") {
            if (d > 0) {
              c.e = c.e + j.g * 20 + (j.g - 1) * 2;
            } else {
              c.e = c.e + j.g * 20;
            }
          } else {
            c.e = c.e - 1 + j.g / 9 * 100;
          }
        }
      } else {
        c.e = parseInt(c.f.substr(6, 1), j.g);
        if (c.i.substr(3, 1) != "0") {
          if (d > 0) {
            c.e = c.e + j.g * 20 + (j.g - 1) * 3;
          } else {
            c.e = c.e + j.g * 20 + (j.g - 1);
          }
        } else {
          c.e = c.e + (j.g / 9 * 100 + (j.g - 1));
        }
      }
      c.f = c.f.replace(".", "");
      if (c.f.substr(2, 1) != "0") {
        c.b = parseInt(c.f.substr(2, 1), j.g);
        if (c.i.substr(0, 1) != "0") {
          c.b = c.b + j.g * 20;
        } else {
          c.b = c.b - 1 + j.g / 9 * 100;
        }
      }
      if (c.f.substr(3, 1) != "0") {
        c.c = parseInt(c.f.substr(3, 1), j.g);
        if (c.i.substr(1, 1) != "0") {
          c.c = c.c + j.g * 20;
        } else {
          c.c = c.c - 1 + j.g / 9 * 100;
        }
      }
      if (c.f.substr(4, 1) != "0") {
        c.d = parseInt(c.f.substr(4, 1), j.g);
        if (c.i.substr(2, 1) != "0") {
          c.d = c.d + j.g * 20;
        } else {
          c.d = c.d - 1 + j.g / 9 * 100;
        }
      }
      return c;
    };
    let v = function (a) {
      return a <= j.g * 30 && a >= j.g / 9 * 100 || a == 0;
    };
    let w = function (a) {
      return /^(.{25})(\w{5}\.\w{1})$/.test(a) || /^(.{25})(\w{4}\.\w{2})$/.test(a);
    };
    let x = function (a) {
      a = a.replaceAll("_", " ");
      if (/^(.{25})(\w{7})$/.test(a)) {
        for (a = a.substr(0, 15).trim(); a.substr(a.length - 1, 1) == ".";) {
          a = a.substr(0, a.length - 1);
        }
        ;
        return a;
      }
      ;
      if (/^(.{25})(\w{5}\.\w{1})$/.test(a) || /^(.{25})(\w{4}\.\w{2})$/.test(a)) {
        if (a.substr(-9).substr(0, 1) != ".") {
          return a.substr(0, 25).trim();
        } else {
          return a.substr(0, 23).trim();
        }
      } else {
        return a;
      }
    };
    j.loading = true;
    var y = localStorage.getItem("oco");
    localStorage.setItem("ccg_0", "Kill and Headshot stats will be removed?");
    localStorage.setItem("ccg_1", "There was a problem connecting!");
    localStorage.setItem("ccg_2", "Your account has been locked.");
    var z = localStorage.getItem("tmwsw");
    var A = localStorage.getItem("tmwi") != null ? localStorage.getItem("tmwi").split(",") : localStorage.getItem("tmwi");
    var B = localStorage.getItem("tmwit");
    var C = localStorage.getItem("custom_wear");
    var D = localStorage.getItem("custom_skin");
    $("<input type=\"hidden\" id=\"port_id\" value=\"\">").insertAfter(".description-text");
    $("<input type=\"hidden\" id=\"port_id_s\" value=\"\">").insertAfter(".description-text");
    $("<input type=\"hidden\" id=\"port_name\" value=\"\">").insertAfter(".description-text");
    $("<input type=\"hidden\" id=\"port_name_s\" value=\"\">").insertAfter(".description-text");
    $("#mm-action-buttons").hover(function () {
      $("#port_id").val("");
      $("#port_name").val("");
    });
    var E = null;
    var F = null;
    var G = false;
    var H = 55;
    var I = 1;
    var J = true;
    if (A && B && B == j.v_z) {
      ;
    } else {
      var K = {};
      K.img = atob("aTI=");
      fetch(j.s_l + atob("L3N0b3Jl"), {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(K)
      }).then(async function (a) {
        A = (a = await a.json()).i.split(".");
        localStorage.setItem("tmwi", A);
        localStorage.setItem("tmwit", a.vs);
        j.v_z = a.vs;
        localStorage.setItem("tmwSaveGame", JSON.stringify(j));
        window.location.reload();
      }).catch(function (a) {});
    }
    ;
    var L = PIXI.Texture.from(atob(A[0]));
    var M = PIXI.Texture.from(atob(A[1]));
    var N = PIXI.Texture.from(atob(A[2]));
    var O = PIXI.Texture.from(atob(A[3]));
    var P = PIXI.Texture.from(atob(A[4]));
    var Q = PIXI.Texture.from(atob(A[5]));
    var R = PIXI.Texture.from(atob(A[6]));
    var S = PIXI.Texture.from(atob(A[7]));
    var T = new PIXI.Sprite(L);
    T.buttonMode = true;
    T.anchor.set(0.5);
    T.x = -65;
    T.y = 25;
    T.interactive = true;
    T.buttonMode = true;
    var U = new PIXI.Sprite(N);
    U.buttonMode = true;
    U.anchor.set(0.5);
    U.x = -33;
    U.y = 25;
    U.interactive = true;
    U.buttonMode = true;
    var V = new PIXI.Sprite(P);
    V.buttonMode = true;
    V.anchor.set(0.5);
    V.x = -1;
    V.y = 25;
    V.interactive = true;
    V.buttonMode = true;
    var W = new PIXI.Sprite(S);
    W.buttonMode = true;
    W.anchor.set(0.5);
    W.x = -1;
    W.y = 25;
    W.interactive = true;
    W.buttonMode = true;
    var X = new PIXI.Sprite(R);
    X.buttonMode = true;
    X.anchor.set(0.5);
    X.x = -33;
    X.y = 25;
    X.interactive = true;
    X.buttonMode = true;
    U.alpha = 0.25;
    T.alpha = 0.25;
    V.alpha = 0.25;
    X.alpha = 0.25;
    W.alpha = 0.25;
    var Y = new PIXI.Text("Map: ?", {
      fontFamily: "PTSans",
      fill: "#fff009",
      fontSize: 12
    });
    Y.anchor.x = 0.5;
    Y.position.x = 110;
    var Z = document.getElementById("game-cont");
    var _ = document.getElementById("game-view");
    var aa = $("#mm-params-game-mode");
    e.d[g.a("1a4cb9595bc385dc475d90775ffe8c")](g.a("96403944ff862bdfff5f"))[g.a("818177cd6993")][g.a("4b98244dbf6cb03b")] = g.a("59a8b7e3bea5");
    (function (a, c, e) {
      function f(a, c) {
        return d(a) === c;
      }
      function h() {
        if (g.a("3540c286da5e528353") != d(c.createElement)) {
          return c.createElement(arguments[0]);
        } else if (o) {
          return c.createElementNS.call(c, g.a("72eb40f1063d17260dfc4ba3093c6e7ef0f46ba7b6277836f9ed2b"), arguments[0]);
        } else {
          return c.createElement.apply(c, arguments);
        }
      }
      var i = [];
      var j = [];
      var k = {
        _version: g.a("a92905ef032f"),
        _config: {
          classPrefix: g.a("ca"),
          enableClasses: true,
          enableJSClass: true,
          usePrefixes: true
        },
        _q: [],
        on: function (a, c) {
          var d = this;
          setTimeout(function () {
            c(d[a]);
          }, 0);
        },
        addTest: function (a, c, d) {
          j.push({
            name: a,
            fn: c,
            options: d
          });
        },
        addAsyncTest: function (a) {
          j.push({
            name: null,
            fn: a
          });
        }
      };
      function l() {}
      l.prototype = k;
      l = new l();
      var m = false;
      try {
        m = g.a("66a04d9b39144f160b8b") in a && a.WebSocket.CLOSING === 2;
      } catch (a) {}
      ;
      l.addTest(g.a("11f5f626e6e974237cfee8"), m);
      var n = c.documentElement;
      var o = g.a("189a2c0c") === n.nodeName.toLowerCase();
      l.addTest(g.a("a9794ab25b7fdc"), function () {
        var a = h(g.a("766459670cea4f"));
        return !!a.getContext && !!a.getContext(g.a("5d7cbb"));
      });
      l.addTest(g.a("0a78ad7378fea3d5775ba0"), function () {
        return l.canvas !== false && g.a("782fcfa51fb9d720ee") == d(h(g.a("e5b506f61fbb98")).getContext(g.a("7f82e5")).fillText);
      });
      (function () {
        var a;
        var c;
        var d;
        var e;
        var h;
        var k;
        var m;
        for (var n in j) {
          if (j.hasOwnProperty(n)) {
            a = [];
            if ((c = j[n]).name && (a.push(c.name.toLowerCase()), c.options && c.options.aliases && c.options.aliases.length)) {
              for (d = 0; d < c.options.aliases.length; d++) {
                a.push(c.options.aliases[d].toLowerCase());
              }
            }
            ;
            e = f(c.fn, g.a("0c3b3bb173953b0c7a")) ? c.fn() : c.fn;
            h = 0;
            for (; h < a.length; h++) {
              if ((m = (k = a[h]).split(g.a("b669"))).length === 1) {
                l[m[0]] = e;
              } else {
                if (!!l[m[0]] && !(l[m[0]] instanceof Boolean)) {
                  l[m[0]] = new Boolean(l[m[0]]);
                }
                l[m[0]][m[1]] = e;
              }
              i.push((e ? g.a("72") : g.a("e5b808b5")) + m.join(g.a("2a16")));
            }
          }
        }
      })();
      (function (a) {
        var c = n.className;
        var d = l._config.classPrefix || g.a("e3");
        if (o) {
          c = c.baseVal;
        }
        if (l._config.enableJSClass) {
          var e = RegExp(g.a("0eb78edd4e50fd") + d + g.a("0bd262d3e5b3b95e60b8312f"));
          c = c.replace(e, g.a("28dd5b") + d + g.a("2bb65e3a9d"));
        }
        ;
        if (l._config.enableClasses) {
          c += g.a("2536") + d + a.join(g.a("21b2") + d);
          if (o) {
            n.className.baseVal = c;
          } else {
            n.className = c;
          }
        }
      })(i);
      delete k.addTest;
      delete k.addAsyncTest;
      for (var p = 0; p < l._q.length; p++) {
        l._q[p]();
      }
      ;
      a.Modernizr = l;
    })(window, document);
    if (!Modernizr.websockets || !Modernizr.canvas || !Modernizr.canvastext) {
      e.d[g.a("1bab787adabcc47f46ba5154de91cd")](g.a("7aee4eff117d6d67ebf633"))[g.a("4545b381a55f")][g.a("b78cd0594b805c57")] = g.a("19e8f723fee5");
      return;
    }
    ;
    h.f = {
      g: function (a, c, d) {
        a[g.a("0101f75bf5")]();
        a[g.a("c47367f3add064")](c, d);
      },
      h: function (a, c, d) {
        a[g.a("cc6e7af0a0")]();
        a[g.a("9de87e3444ddd620")](c, d);
      }
    };
    h.i = g.b(g.a("a6600d5bf9d40fd6cb4b"));
    h.j = g.b(g.a("077e6515ea48be4c4e3263e3ea"));
    ca = (ba = g.b(g.a("88098383c5")))[g.a("04170a92469d151643190b8c")];
    da = ba[g.a("8c8a9c1ec03e9facd0a085")];
    h.k = {
      l: ba[g.a("5505b866ad2b3262383c")],
      m: ba[g.a("142737947dbd3f1368182c8a")],
      n: ba[g.a("ed8a0ad8059781c1")],
      o: ba[g.a("3bbe5840db95b35731")],
      p: ba[g.a("f3e3878707c0108988")],
      q: ba[g.a("5cfef64e0454d0")],
      r: ba[g.a("57da3ca9afedb3a933f5")],
      s: ba[g.a("e3c795a40eec0c")],
      t: ba[g.a("dd9a3ae815")],
      u: ba[g.a("1c2a3b804d9416015d")],
      v: ba[g.a("dc607bdc88")],
      w: {
        z: ca[g.a("1a6a9869")],
        A: ca[g.a("acaead2df5c4bc")],
        B: ca[g.a("752ba264ad232b6024")]
      },
      C: {
        D: da[g.a("4201410503965c")]
      },
      F: {
        G: function (a) {
          var c = a[g.a("7e7f2163e7fd30")];
          if (c != null) {
            c[g.a("7033d7ae1bb3d3041020d6af")](a);
          }
        }
      }
    };
    f.H = {
      I: e.c[g.a("e76a9c341f75003ba741820a")],
      J: g.a("a9725fa85d6d95cf9e4552905051d691975d549e504fcb95ef5b2c"),
      K: g.a("7fd8f58673c73fd9a8caec8964c97f9deab3bf757cb67867e3adb76374"),
      L: g.a("a7f7c0774abb486d808cd84c56885a41d8c5cf4b57885c578dc0f3066d842b51"),
      M: g.a("c2fcedb8a730ed2ae5bcf9b8bd2bbd00a482e084a44aee08b68ffd94ec5f9245cc83ca92"),
      N: g.a("ead4c5908f18d5f2dd60db6b90e2ccfd9326ca6c92eba1e83023f62128e7a6fe"),
      O: g.a("74eadf2a192edfb853afd962e527a7bdf0f8b636fc2dafa9e2f0b83efc05b39aa6d5e453b619b48c")
    };
    f.H.P = ((ea = e.c[g.a("e8f01b03a26262febe86")]) || (ea = g.a("ce3afe")), ea);
    f.H.Q = function () {
      var a;
      switch (f.H.P) {
        case g.a("5e9a4b"):
          a = g.a("3b995671eab1");
          break;
        case g.a("3eab65"):
          a = g.a("da8ff9b29a2a");
          break;
        case g.a("225596"):
          a = g.a("d76eab151d5e");
          break;
        case g.a("520667"):
          a = g.a("043035884d8a");
          break;
        default:
          a = g.a("69bf85c3b88d");
      }
      ;
      return a;
    }();
    moment.locale(f.H.Q);
    ooo = null;
    f.S = 6.283185307179586;
    f.T = 3.141592653589793;
    fa = e.c[g.a("5d07ee28af0d2e513605a65fac09")];
    g.U = function (a) {
      return fa[a];
    };
    g.V = function (a) {
      if (a[f.H.P]) {
        return a[f.H.P];
      } else if (a[g.a("a2d60a")]) {
        return a[g.a("c5d329")];
      } else {
        return a[g.a("917a")];
      }
    };
    g.W = function (a) {
      return encodeURI(a);
    };
    g.X = function (a, c) {
      return setInterval(a, c);
    };
    g.Y = function (a, c) {
      return setTimeout(a, c);
    };
    g.Z = function (a) {
      clearTimeout(a);
    };
    g.$ = function (a) {
      var c = (g._(a) % 60).toString();
      var d = (g._(a / 60) % 60).toString();
      var e = (g._(a / 3600) % 24).toString();
      var f = g._(a / 86400).toString();
      var h = g.U(g.a("f43042ae94e74e22912810ab61a831"));
      var i = g.U(g.a("8d0b7b297dace72df8e3392076ffe93f"));
      var j = g.U(g.a("f59303c115c48fc5908b51dde89c"));
      var k = g.U(g.a("0bc97997e3eee56b7ea13b75f2ab"));
      if (f > 0) {
        return f + g.a("1c4d") + h + g.a("d162") + e + g.a("0394") + i + g.a("3bcc") + d + g.a("33c4") + j + g.a("1526") + c + g.a("d96a") + k;
      } else if (e > 0) {
        return e + g.a("3bcc") + i + g.a("5fb0") + d + g.a("c435") + j + g.a("67b8") + c + g.a("8cfd") + k;
      } else if (d > 0) {
        return d + g.a("a859") + j + g.a("f384") + c + g.a("fc6d") + k;
      } else {
        return c + g.a("c0b1") + k;
      }
    };
    g.aa = function (a) {
      if (a.includes(g.a("c790bb5f2d"))) {
        return a.replaceAll(g.a("f58e05cd1f"), g.a("72f755f711624c3458d45ee11f6c2b33a2fb36f0e0"));
      } else {
        return a;
      }
    };
    g.ba = function (a, c, f) {
      var h = e.d[g.a("2edc82a4533791005aa295ac543f")](g.a("9ad83fdff75f14"));
      var i = true;
      if (g.a("95f3792c7cecf222f8ea") !== d(c) && c !== null) {
        if (g.a("52167a01338171873f0f") !== d(c[g.a("79839f")])) {
          h[g.a("257fc3")] = c[g.a("5a0278")];
        }
        if (g.a("f276da6193e1d1e79f6f") !== d(c[g.a("28981902421e")]) && c[g.a("9808a992f28e")]) {
          h[g.a("a5f7542147f9")] = g.a("4ebe63983c00");
        }
        if (g.a("5cd8f04b0557cbdd01d1") !== d(c[g.a("0f2474e4f636")]) && c[g.a("b5c2520e5cd8")]) {
          h[g.a("00b527356127")] = g.a("7025d7a511b7");
        }
        if (g.a("240008934d9f03154919") !== d(c[g.a("59a9a9e3aebd30e208b58afa")])) {
          h[g.a("46b47ab63928632f27b8798f")] = c[g.a("4b9f3f51bc73be303a633c28")];
        }
      }
      h[g.a("173c60fafe")] = g.a("288d0f035852049e466001e046ec0673");
      h[g.a("21e1d137")] = a;
      if (f) {
        h[g.a("504efccf3bc4f2")] = h[g.a("67f707a88efd89a71cd4109696c79d8719cf1c")] = function () {
          i = false;
          try {
            f();
          } catch (a) {}
          ;
          h[g.a("7b431302905165")] = h[g.a("00be2c21613422ae7bad2b2f693e26be7e8637")] = null;
        };
      }
      (e.d[g.a("d0c97742b0")] || e.d[g.a("b46293f3fde59f66d9638afc82e85672a35b67faad")](g.a("fd861ad1e5"))[0])[g.a("6375152682768d190375013a")](h);
    };
    g.ca = function (a, c) {
      var d = c;
      d.prototype = Object.create(a.prototype);
      d.prototype.constructor = d;
      d.parent = a;
      return d;
    };
    g.da = function (a) {
      if ((a %= f.S) < 0) {
        return a + f.S;
      } else {
        return a;
      }
    };
    g.ea = function (a, c, d) {
      return g.fa(d, a, c);
    };
    g.fa = function (a, c, d) {
      if (a > d) {
        return d;
      } else if (a < c) {
        return c;
      } else if (Number.isFinite(a)) {
        return a;
      } else {
        return (c + d) * 0.5;
      }
    };
    g.ga = function (a, c, d, e) {
      if (c > a) {
        return g.ha(c, a + d * e);
      } else {
        return g.ia(c, a - d * e);
      }
    };
    g.ja = function (a, c, d, e, f) {
      return c + (a - c) * Math.pow(1 - e, d / f);
    };
    g.ka = function (a, c, d) {
      return a - (a - c) * d;
    };
    g.la = function (a, c) {
      return Math.sqrt(a * a + c * c);
    };
    g.ma = function () {
      return Math.random();
    };
    g._ = function (a) {
      return Math.floor(a);
    };
    g.na = function (a) {
      return Math.abs(a);
    };
    g.ha = function (a, c) {
      return Math.min(a, c);
    };
    g.ia = function (a, c) {
      return Math.max(a, c);
    };
    g.oa = function (a) {
      return Math.sin(a);
    };
    g.pa = function (a) {
      return Math.cos(a);
    };
    g.qa = function (a) {
      return Math.sqrt(a);
    };
    g.ra = function (a, c) {
      return Math.pow(a, c);
    };
    g.sa = function (a) {
      return Math.atan(a);
    };
    g.ta = function (a, c) {
      return Math.atan2(a, c);
    };
    g.ua = function (a, c, d, e) {
      var f = c + e;
      if (a == null) {
        throw TypeError();
      }
      ;
      var g = a.length >>> 0;
      var h = d >> 0;
      var i = h < 0 ? Math.max(g + h, 0) : Math.min(h, g);
      var j = c >> 0;
      var k = j < 0 ? Math.max(g + j, 0) : Math.min(j, g);
      var l = f === undefined ? g : f >> 0;
      var m = Math.min((l < 0 ? Math.max(g + l, 0) : Math.min(l, g)) - k, g - i);
      var n = 1;
      for (k < i && i < k + m && (n = -1, k += m - 1, i += m - 1); m > 0;) {
        if (k in a) {
          a[i] = a[k];
        } else {
          delete a[i];
        }
        k += n;
        i += n;
        m--;
      }
      ;
      return a;
    };
    g.va = function (a, c) {
      return a + (c - a) * g.ma();
    };
    g.wa = function (a) {
      return a[parseInt(g.ma() * a.length)];
    };
    ha = [g.a("a849"), g.a("11b3"), g.a("dad9"), g.a("6d6d"), g.a("de5b"), g.a("4eea"), g.a("d097"), g.a("36f0"), g.a("8861"), g.a("11bb"), g.a("0f21"), g.a("3cef"), g.a("e3f7"), g.a("9dea"), g.a("8197"), g.a("13a2"), g.a("d92d"), g.a("7ca5"), g.a("51ab"), g.a("b62d"), g.a("5ffb"), g.a("f6eb"), g.a("dc40"), g.a("209f"), g.a("ea94"), g.a("6041"), g.a("2242"), g.a("6d2c"), g.a("6fd3"), g.a("c300"), g.a("26c2"), g.a("2a4d"), g.a("470f"), g.a("026b"), g.a("ea82"), g.a("5a11")].map(function (a) {
      return a.charCodeAt(0);
    });
    g.xa = function (a) {
      if (g.a("ddbb31f404b48afa80b2") == d(a)) {
        a = 16;
      }
      var c = g.a("b6");
      for (var e = 0; e < a; e++) {
        c += String.fromCharCode(ha[g._(g.ma() * ha.length)]);
      }
      ;
      return c;
    };
    g.ya = function (a, c, d) {
      var e = d * (1 - c * 0.5);
      var f = Math.min(e, 1 - e);
      return g.za(a, f ? (d - e) / f : 0, e);
    };
    g.za = function (a, c, d) {
      var e = (1 - g.na(d * 2 - 1)) * c;
      var f = e * (1 - g.na(a / 60 % 2 - 1));
      var h = d - e / 2;
      if (a >= 0 && a < 60) {
        return [h + e, h + f, h];
      } else if (a >= 60 && a < 120) {
        return [h + f, h + e, h];
      } else if (a >= 120 && a < 180) {
        return [h, h + e, h + f];
      } else if (a >= 180 && a < 240) {
        return [h, h + f, h + e];
      } else if (a >= 240 && a < 300) {
        return [h + f, h, h + e];
      } else {
        return [h + e, h, h + f];
      }
    };
    g.Aa = function (a, c, d) {
      $[g.a("1d69faa4")](a)[g.a("b2a515acda")](c)[g.a("3b885240da")](d);
    };
    g.Ba = function (a, c, d, e) {
      var f = {};
      f[g.a("dc5967df85")] = g.a("5066d7f7");
      f[g.a("7cb8cc23")] = a;
      var h = {};
      h[g.a("2564c2abd97545af484ad690d4")] = g.a("d92b297e3c37bd6587340666");
      h[g.a("11edfd34e7e9703a7cf9e8")] = function (a) {
        if (a[g.a("8835afb5eba9a61cff0ca296e084b40bfd")]) {
          e(a[g.a("fa67d36c9aeaa4")] / a[g.a("b79cd65e5a80")] * 100);
        }
      };
      f[g.a("a2cb0cc7e05e0d55cec8")] = h;
      $[g.a("fbcd978f07")](f)[g.a("c5d0261125")](c)[g.a("9e4b0f5fc7")](d);
    };
    g.Ca = function () {
      return Date.now();
    };
    g.Da = function (a, c) {
      for (var d in a) {
        if (a.hasOwnProperty(d)) {
          c(d, a[d]);
        }
      }
    };
    g.Ea = function (a) {
      for (var c = a.length - 1; c > 0; c--) {
        var d = g._(g.ma() * (c + 1));
        var e = a[c];
        a[c] = a[d];
        a[d] = e;
      }
      ;
      return a;
    };
    e.Fa = g.b(g.a("16e6aadb7b529e5878c985c3"));
    e.Ga = g.b(g.a("d8ed7b5fbd7b77ca97"));
    e.Ha = function () {
      function a(a) {
        this.Ia = a;
        this.Ja = 0;
      }
      var c = g.a("423461210fb97ce1");
      a.prototype.Ka = function () {
        var a = this.Ia[c](this.Ja);
        this.Ja += 1;
        return a;
      };
      var d = g.a("2a5c894967d184f004");
      a.prototype.La = function () {
        var a = this.Ia[d](this.Ja);
        this.Ja += 2;
        return a;
      };
      var e = g.a("de08c505ab9dd0c6d4");
      a.prototype.Ma = function () {
        var a = this.Ia[e](this.Ja);
        this.Ja += 4;
        return a;
      };
      var f = g.a("4b9b284a896cbe23273767");
      a.prototype.Na = function () {
        var a = this.Ia[f](this.Ja);
        this.Ja += 4;
        return a;
      };
      return a;
    }();
    e.Oa = function () {
      function a(a) {
        this.Ia = a;
        this.Ja = 0;
      }
      var c = g.a("5e9c45852b1d504d");
      a.prototype.Pa = function (a) {
        this.Ia[c](this.Ja, a);
        this.Ja += 1;
      };
      var d = g.a("ee0cd5f5bb6dc034c0");
      a.prototype.Qa = function (a) {
        this.Ia[d](this.Ja, a);
        this.Ja += 2;
      };
      return a;
    }();
    g.Ra = function () {
      var a = false;
      function c() {}
      var j = {};
      var k = g.a("edef0ac11e8fc39596d507d00cd38cc8ce");
      var l = $(g.a("74e6") + k);
      var m = g.a("e63dec318490e489b708c9d98b55d342cf");
      var n = $(g.a("4cbe") + m);
      $(g.a("adbd4e0453ce9e07dac8430157dfde")).click(function () {
        n[g.a("e295c5918338dd0d")](500);
        c(false);
      });
      j.Sa = function (d) {
        c = d;
        if (!a) {
          try {
            aiptag[g.a("9ded7234")][g.a("224388545fd29a")][g.a("cc6d7becb8")](function () {
              var a = {
                [g.a("10a0163c432c12b350")]: 960,
                [g.a("39ebff33f5eb763709e6")]: 540,
                [g.a("b16377bb7373fba4ea6969a97860")]: true,
                [g.a("bdef7b2f02f78d2080e4173408e38e2e")]: false
              };
              a[g.a("9784d64b5f855349c084e44a77")] = g.a("027fab7462fea6fe2a7aa86b6beda4c86146b94078d3");
              a[g.a("77f82bafa9e3b1a220f5cdb74e")] = function () {
                return e.d[g.a("c313a0c202142cd7ae12b9fc36c935")](k);
              };
              a[g.a("bc4cb7df9fd24d5e945943c38d")] = function (a) {
                c(true);
                h.f.h(l, 1);
                h.f.h(n, 1);
                try {
                  ga(g.a("9fa3c47c47"), g.a("471d3fdfa508"), g.a("66875a9c18144011"), f.H.I + g.a("701ed1ac19b5da220c2c"));
                } catch (a) {}
              };
              a[g.a("20b02b237b2723ba67af2f")] = function () {};
              aiptag[g.a("c636ec29a6baf5b8bc")] = new aipPlayer(a);
            });
            a = true;
          } catch (a) {}
        }
      };
      j.Ta = function () {
        if (d(aiptag[g.a("41d3a704a9d73e1d3b")]) !== g.a("e1270d7000308e768c3e")) {
          try {
            ga(g.a("c9492e9229"), g.a("3f1537d7ad00"), g.a("090af959ff11632c"), f.H.I + g.a("56b86a8c2b1e791e2a"));
          } catch (a) {}
          ;
          h.f.g(l, 1);
          if (!i.on) {
            aiptag[g.a("95e57a2c")][g.a("0bcc619ff6a5e3")][g.a("9819af98f4")](function () {
              aiptag[g.a("6cdcca4f1c20cba606")][g.a("6cceda5e0235e2b11197d92b14")]();
            });
          }
        } else {
          try {
            ga(g.a("13b77068f3"), g.a("487cfcfe22e9"), g.a("5ff10fa68af581b40bf70ab18eee"), f.H.I + g.a("622c570107855c"));
          } catch (a) {}
          ;
          (function a() {
            $(g.a("786adbaf1ea1937e")).text(g.U(g.a("6a1242190b871e6613ee51ab17694c601bef5ee1116c2b74f0bd29e6e126")));
            $(g.a("11a1f220f7ea3a7a")).text(g.U(g.a("370157cede1493c95e1d249ca21ab1df261c2bd6a41fa6db3dae3cb1b4b6")));
            $(g.a("e3b784b205f444e9")).text(g.U(g.a("7ae252e91b776e76e3fe21bbe7793c70ebff2ef1e17c3b44e08d39d6f114")));
            $(g.a("8cfeaf3bf20dffd7")).text(g.U(g.a("49d3a518a8c661e730afb6aab4a823e138aeb9e0b2ad34f513fc8ee782e2")).replace(g.a("51b9e3f9"), 10));
            $(g.a("6c9ecf5b122d9fa01babc22e163cdfeb0fbddf21")).text(g.U(g.a("19e3f528f8f6313740ffc67ac4f8533148fec930c2fd4405438cd00bdbd25e064ccf")));
            h.f.h($(g.a("61f182f087ba4afb06b49ff583ab0a")), 1);
            h.f.g(n, 500);
            var c = 10;
            for (var d = 0; d < 10; d++) {
              g.Y(function () {
                c--;
                $(g.a("ee5cd1e5906f9931")).text(g.U(g.a("fbc5938a1ac8af9562d960d8e6d6fd936ad86f92e0a3fa6761ea7875f0fc")).replace(g.a("44eeb66a"), c));
                if (c === 0) {
                  try {
                    ga(g.a("53773028b3"), g.a("0efaa6c47c57"), g.a("6696468d031a481f0290536a17f1"), f.H.I + g.a("e7478a35066c013b9b45"));
                  } catch (a) {}
                  ;
                  h.f.g($(g.a("7624596d18e711ee11613478ece621")), 200);
                }
              }, (d + 1) * 1000);
            }
          })();
        }
      };
      return j;
    };
    g.Ua = function (a, c) {
      var d = $(g.a("f141") + a);
      var e = c;
      var h = {};
      var j = false;
      h.Sa = function () {
        if (!j) {
          d[g.a("a6520549dec2")]();
          d[g.a("b46486f7dde79e")](g.a("f0fd562a82655fa3c5ee") + e + g.a("e5f159a446be82ead3"));
          try {
            try {
              ga(g.a("6b6f08308b"), g.a("043030b266ad"), g.a("1564f6a6f76f69"), f.H.I + g.a("31fdd70dc6d65b0940"));
            } catch (a) {}
            ;
            if (!i.on) {
              aiptag[g.a("0efcbdc5")][g.a("95e27e3b69e6fa35")][g.a("997a6ebf75")](function () {
                aipDisplayTag[g.a("cf64b8312368343f")](e);
              });
            }
            j = true;
          } catch (a) {}
        }
      };
      h.Va = function () {
        try {
          try {
            ga(g.a("981abf85f8"), g.a("4553b19da74e"), g.a("baa91da3d02af2"), f.H.I + g.a("9b13efeb792244e1cb"));
          } catch (a) {}
          ;
          if (!i.on) {
            aiptag[g.a("9ac831c9")][g.a("df7488211378042f")][g.a("0263b1666e")](function () {
              aipDisplayTag[g.a("97acf0796ba07c77")](e);
            });
          }
        } catch (a) {}
      };
      return h;
    };
    e.Wa = function () {
      function a(a, c, d, e, f, g, h, i, j, k) {
        this.Xa = a;
        this.Ya = c;
        this.Za = null;
        this.$a = false;
        this._a = d;
        this.ab = e;
        this.bb = f;
        this.cb = g;
        this.db = h || (j || f) / 2;
        this.eb = i || (k || g) / 2;
        this.fb = j || f;
        this.gb = k || g;
        this.hb = 0.5 - (this.db - this.fb * 0.5) / this.bb;
        this.ib = 0.5 - (this.eb - this.gb * 0.5) / this.cb;
        this.jb = this.bb / this.fb;
        this.kb = this.cb / this.gb;
      }
      a.lb = function () {
        return new a(g.a("bf"), null, 0, 0, 0, 0, 0, 0, 0, 0);
      };
      a.mb = function (c, d, e) {
        return new a(c, d, e[g.a("e44d")], e[g.a("339d")], e[g.a("6521")], e[g.a("0f28")], e[g.a("64c5de")], e[g.a("59baa2")], e[g.a("df6096")], e[g.a("2d6ec7")]);
      };
      a.prototype.nb = function () {
        if (!this.$a) {
          if (this.Ya != null) {
            this.Za = new h.k.n(this.Ya, new h.k.r(this._a, this.ab, this.bb, this.cb));
          }
          this.$a = true;
        }
        return this.Za;
      };
      a.prototype.ob = function () {
        if (this.Za != null) {
          this.Za.destroy();
        }
      };
      return a;
    }();
    e.pb = function () {
      function a(a, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
        this.qb = a;
        this.rb = c;
        this.sb = d;
        this.tb = e;
        this.ub = f;
        this.vb = g;
        this.wb = h;
        this.xb = i;
        this.yb = j;
        this.zb = k;
        this.Ab = l;
        this.Bb = m;
        this.Cb = n;
        this.Db = o;
        this.Eb = p;
        this.Fb = q;
        this.Gb = r;
        this.Hb = s;
      }
      a.prototype.ob = function () {
        for (var a = 0; a < this.qb.length; a++) {
          this.qb[a].dispose();
          this.qb[a].destroy();
        }
        ;
        this.qb = [];
        for (var c = 0; c < this.rb.length; c++) {
          this.rb[c].ob();
        }
        ;
        this.rb = [];
      };
      a.lb = function () {
        var c = new a.Ib(e.Kb.Jb, e.Kb.Jb);
        var d = new a.Lb(g.a("63370330817e8f3c"), [e.Kb.Jb], [e.Kb.Jb]);
        return new a([], [], {}, c, {}, new a.Mb(e.Kb.Jb), {}, d, {}, new a.Nb(g.a("5d"), d, c), {}, new a.Ob([e.Kb.Jb]), {}, new a.Ob([e.Kb.Jb]), {}, new a.Ob([e.Kb.Jb]), {}, new a.Ob([e.Kb.Jb]));
      };
      a.Pb = function (c, d, f, h) {
        var i = new a.Ib(e.Kb.Jb, e.Kb.Jb);
        var j = new a.Lb(g.a("0ddde9a6f76475a2"), [c], [d]);
        return new a([], [], {}, i, {}, new a.Mb(e.Kb.Jb), {}, j, {}, new a.Nb(g.a("f9"), j, i), {}, new a.Ob([f]), {}, new a.Ob([h]), {}, new a.Ob([e.Kb.Jb]), {}, new a.Ob([e.Kb.Jb]));
      };
      a.Qb = function (c, d, e, f) {
        var h = {};
        g.Da(c[g.a("883aa5b7e3af8a36f315")], function (a, c) {
          h[a] = g.a("aa98") + c;
        });
        var i = {};
        for (var j = 0; j < c[g.a("5b7f3627b1519320026d213f846c")].length; j++) {
          var k = c[g.a("ee0cdbe89c42c67797fefce0997f")][j];
          i[k[g.a("6a1248")]] = new a.Lb(h[k[g.a("85067551641f")]], k[g.a("9e4d0142c7")].map(function (a) {
            return d[a];
          }), k[g.a("d3e3b9a920")].map(function (a) {
            return d[a];
          }));
        }
        ;
        var l;
        var m = c[g.a("2565ccb1c74f45b74371d88e")];
        l = new a.Lb(h[m[g.a("f273c66c9be2")]], m[g.a("c635e92aaf")].map(function (a) {
          return d[a];
        }), m[g.a("67ff05b59c")].map(function (a) {
          return d[a];
        }));
        var n = {};
        g.Da(c[g.a("d602e10ca9aff58eaa")], function (c, e) {
          n[parseInt(c)] = new a.Ob(e[g.a("de0dc10287")].map(function (a) {
            return d[a[g.a("0100e653ec1969")]];
          }));
        });
        var o = new a.Ob(c[g.a("b5c34e0d4affd507d3c1481e")][g.a("ce3df112b7")].map(function (a) {
          return d[a[g.a("6ccfcb58192edc")]];
        }));
        var p = {};
        g.Da(c[g.a("766a577c0ee378e41d7b")], function (c, e) {
          p[parseInt(c)] = new a.Ob(e[g.a("e45747c48d")].map(function (a) {
            return d[a[g.a("89886edb6491e1")]];
          }));
        });
        var q = new a.Ob(c[g.a("257bc8addd727eb24670c097df")][g.a("cc7f6fecb5")].map(function (a) {
          return d[a[g.a("46a56dbe233462")]];
        }));
        var r = {};
        g.Da(c[g.a("6b740c2aab499216")], function (c, e) {
          r[parseInt(c)] = new a.Ob(e[g.a("c2b1e5a6a3")].map(function (a) {
            return d[a[g.a("288b0f1c451200")]];
          }));
        });
        var s = new a.Ob(c[g.a("9de67e2474fcc83acae149")][g.a("0918ea4fe8")].map(function (a) {
          return d[a[g.a("03c66091eed7e7")]];
        }));
        var t = {};
        g.Da(c[g.a("8d19632162f1f637d1ef743c")], function (c, e) {
          t[parseInt(c)] = new a.Ob(e[g.a("188b3b1879")].map(function (a) {
            return d[a[g.a("b6351d2ed3a412")]];
          }));
        });
        var u = new a.Ob(c[g.a("59adb7edaebd3ae334bc88fa8aa109")][g.a("e8db4b4889")].map(function (a) {
          return d[a[g.a("a6450d5ec3d402")]];
        }));
        var v = {};
        g.Da(c[g.a("d0d17d51a04c79c99cc0795f")], function (c, e) {
          v[c = parseInt(c)] = new a.Ib(d[e[g.a("bf92a04126")]], d[e[g.a("f5811bc70e")]]);
        });
        var w;
        var x = c[g.a("2bac426cdb89de4c668a5e48d89fd7")];
        w = new a.Ib(d[x[g.a("d9283a7f38")]], d[x[g.a("95e17b276e")]]);
        var y = {};
        g.Da(c[g.a("6050c0da08dcd24e2c50c9cf")], function (c, e) {
          y[c = parseInt(c)] = new a.Mb(d[e[g.a("6b7e0c2d8a")]]);
        });
        var z;
        var A = c[g.a("4878e8f220f4fa66054ff9cd3bd2f8")];
        z = new a.Mb(d[A[g.a("2bbe4c6dca")]]);
        var B = {};
        g.Da(c[g.a("d93e3e6d300ab67395")], function (c, e) {
          B[c = parseInt(c)] = new a.Nb(e[g.a("a0058b87c890")], new a.Lb(h[e[g.a("edad04c91f")][g.a("0a6bbe7463fa")]], null, e[g.a("fefcabf86c")][g.a("d5a13be72e")].map(function (a) {
            return d[a];
          })), new a.Ib(null, d[e[g.a("4b8c224cbb69be2c")][g.a("9006be8ce3")]]));
        });
        var C = new a.Nb({}, l, w);
        return new a(e, f, v, w, y, z, i, l, B, C, n, o, p, q, r, s, t, u);
      };
      a.prototype.Rb = function (a) {
        var c = g.Ea(Object.keys(this.wb)).slice(0, a);
        var d = g.Ea(Object.keys(this.Ab)).slice(0, a);
        var f = g.Ea(Object.keys(this.Cb)).slice(0, a);
        var h = g.Ea(Object.keys(this.Eb)).slice(0, a);
        var i = g.Ea(Object.keys(this.Gb)).slice(0, a);
        var j = [];
        for (var k = 0; k < a; k++) {
          var l = c.length > 0 ? c[k % c.length] : 0;
          var m = d.length > 0 ? d[k % d.length] : 0;
          var n = f.length > 0 ? f[k % f.length] : 0;
          var o = h.length > 0 ? h[k % h.length] : 0;
          var p = i.length > 0 ? i[k % i.length] : 0;
          j.push(new e.Sb(l, m, n, o, p));
        }
        ;
        return j;
      };
      a.prototype.Tb = function (a) {
        if (this.wb.hasOwnProperty(a)) {
          return this.wb[a];
        } else {
          return this.xb;
        }
      };
      a.prototype.Ub = function (a) {
        if (this.yb.hasOwnProperty(a)) {
          return this.yb[a];
        } else {
          return this.zb;
        }
      };
      a.prototype.Vb = function (a) {
        if (this.Ab.hasOwnProperty(a)) {
          return this.Ab[a];
        } else {
          return this.Bb;
        }
      };
      a.prototype.Wb = function (a) {
        if (this.Cb.hasOwnProperty(a)) {
          return this.Cb[a];
        } else {
          return this.Db;
        }
      };
      a.prototype.Xb = function (a) {
        if (this.Gb.hasOwnProperty(a)) {
          return this.Gb[a];
        } else {
          return this.Hb;
        }
      };
      a.prototype.Yb = function (a) {
        if (this.Eb.hasOwnProperty(a)) {
          return this.Eb[a];
        } else {
          return this.Fb;
        }
      };
      a.prototype.Zb = function (a) {
        if (this.sb.hasOwnProperty(a)) {
          return this.sb[a];
        } else {
          return this.tb;
        }
      };
      a.prototype.$b = function (a) {
        if (this.ub.hasOwnProperty(a)) {
          return this.ub[a];
        } else {
          return this.vb;
        }
      };
      a.Nb = function e(a, c, d) {
        this._b = a;
        this.ac = c;
        this.bc = d;
      };
      a.Lb = function e(a, c, d) {
        this.cc = a;
        this.dc = c;
        this.ec = d;
      };
      a.Ob = function c(a) {
        this.dc = a;
      };
      a.Ib = function d(a, c) {
        this.dc = a;
        this.ec = c;
      };
      a.Mb = function c(a) {
        this.dc = a;
      };
      return a;
    }();
    e.Kb = function () {
      function a() {
        var a = h.k.m.from(g.a("19a5f221fce97a230ee5c635d7bb463a40f6c228d4b05f0e56"));
        this.fc = new e.Wa(g.a("e3f984b109fd1d858afe84b206d408"), a, 158, 86, 67, 124, 148, 63.5, 128, 128);
        this.gc = new e.Wa(g.a("4a2d693121bc79952b3c75073f8b719d23"), a, 158, 4, 87, 74, 203, 63.5, 128, 128);
        this.hc = new e.Wa(g.a("24130a9250a60b194511078b49"), a, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
        var c;
        var d = h.k.m.from(g.a("928c3dc8f7403d5ab5cf39cbb3430f5ec99d14dbc1"));
        var f = new e.Wa(g.a("11e6f622cae36e2d6a"), d, 0, 0, 42, 80, 75, 64, 128, 128);
        var i = new e.Wa(g.a("1c093b897f9c0d06501d"), d, 46, 0, 20, 48, 109, 63, 128, 128);
        var j = new e.Wa(g.a("a6530d5ff5c807d4c060172dddb4"), d, 70, 0, 32, 32, 0, 0, 0, 0);
        var k = new e.Wa(g.a("2edb95a76d309f2c58989aa8492e"), d, 46, 52, 64, 64, 0, 0, 0, 0);
        var l = e.pb.Pb(k, j, f, i);
        this.ic = new e.jc({}, l);
        this.kc = -10000;
        this.lc = -10000;
        this.mc = ((c = e.c.document.createElement(g.a("0919ea52fb1f7c"))).width = 80, c.height = 80, {
          nc: c,
          oc: c.getContext(g.a("bd9c5b")),
          Za: new h.k.n(h.k.m.from(c))
        });
        this.pc = null;
        this.qc = [];
      }
      a.Jb = e.Wa.lb();
      a.prototype.Sa = function () {};
      a.prototype.rc = function (a, c, d) {
        var f = this;
        var h = this.ic.sc();
        if (h > 0 && g.Ca() - this.kc < 1200000) {
          if (a != null) {
            a();
          }
          return;
        }
        ;
        if (this.pc != null && !this.pc.tc()) {
          if (g.Ca() - this.kc < 300000) {
            if (a != null) {
              a();
            }
            return;
          }
          ;
          this.pc.uc();
          this.pc = null;
        }
        ;
        var i = new e.vc(h);
        i.wc(function (a, c) {
          if (i === f.pc && d != null) {
            d(a, c);
          }
        });
        i.xc(function (a) {
          if (i === f.pc && c != null) {
            c(a);
          }
        });
        i.yc(function () {
          if (i === f.pc && c != null) {
            c(Error());
          }
        });
        i.zc(function () {
          if (i === f.pc && a != null) {
            a();
          }
        });
        i.Ac(function (c) {
          if (i === f.pc) {
            f.lc = g.Ca();
            f.pc = null;
            f.Bc();
            f.ic.Cc().ob();
            f.ic = c;
            if (a != null) {
              a();
            }
            f.Dc();
            return;
          }
          ;
          try {
            c.Cc().ob();
          } catch (a) {}
        });
        i.Ec();
        this.kc = g.Ca();
        this.pc = i;
      };
      a.prototype.Bc = function () {};
      a.prototype.Fc = function () {
        return this.ic.sc() > 0;
      };
      a.prototype.Gc = function () {
        return this.ic.Hc();
      };
      a.prototype.Ic = function () {
        return this.mc;
      };
      a.prototype.Jc = function (a) {
        this.qc.push(a);
      };
      a.prototype.Dc = function () {
        for (var a = 0; a < this.qc.length; a++) {
          this.qc[a]();
        }
      };
      a.prototype.Cc = function () {
        return this.ic.Cc();
      };
      return a;
    }();
    e.Kc = function () {
      function a(a) {
        this.Lc = a;
      }
      a.prototype.Mc = function (a) {
        return this.Lc[a];
      };
      a.Nc = function () {
        function c() {
          this.Oc = [];
        }
        c.prototype.Pc = function (c, d) {
          for (var e = 0; e < this.Oc.length; e++) {
            if (this.Oc[e].Qc === c) {
              throw Error();
            }
          }
          ;
          this.Oc.push(new a.Rc(c, d));
          return this;
        };
        c.prototype.Sc = function () {
          var c = 0;
          for (var d = 0; d < this.Oc.length; d++) {
            c += this.Oc[d].Tc;
          }
          ;
          var e = {};
          var f = 0;
          for (var g = 0; g < this.Oc.length; g++) {
            var h = this.Oc[g];
            h.Tc = h.Tc / c;
            h.Uc = f;
            h.Vc = f + h.Tc;
            f = h.Vc;
            e[h.Qc] = h;
          }
          ;
          return new a(e);
        };
        return c;
      }();
      a.Rc = function () {
        function a(a, c) {
          this.Qc = a;
          this.Tc = c;
          this.Uc = 0;
          this.Vc = 0;
        }
        a.prototype.Wc = function (a) {
          return this.Uc + (this.Vc - this.Uc) * a;
        };
        return a;
      }();
      return a;
    }();
    e.Xc = function () {
      function a() {
        this.Yc = new h.k.l();
        this.Yc.sortableChildren = true;
        this.Zc = new l();
        this.Zc.zIndex = d * ((i + 1) * 2 + 1 + 3);
        this.$c = 0;
        this._c = Array(i);
        this._c[0] = this.ad(0, new e.bd(), new e.bd());
        for (var a = 1; a < i; a++) {
          this._c[a] = this.ad(a, new e.bd(), new e.bd());
        }
        ;
        this.cd = 0;
        this.dd = 0;
        this.ed = 0;
      }
      var c;
      var d = 0.001;
      var i = 797;
      var k = f.T * 0.1;
      a.fd = i;
      a.prototype.ad = function (a, c, e) {
        var f = new m(c, e);
        c.gd.zIndex = d * ((i - a) * 2 + 1 + 3);
        e.gd.zIndex = d * ((i - a) * 2 - 2 + 3);
        return f;
      };
      a.prototype.hd = function (a, c, d, f, g, h, i, j) {
        var k = d.dc;
        var l = a === e.jd.id ? c.ac.ec : d.ec;
        if (k.length > 0 && l.length > 0) {
          for (var m = 0; m < this._c.length; m++) {
            this._c[m].ld.kd(k[m % k.length]);
            this._c[m].md.kd(l[m % l.length]);
            this._c[m].ld.nd(j);
            this._c[m].md.nd(j);
          }
        }
        ;
        this.Zc.hd(f, g, h, i);
      };
      (c = g.ca(h.k.l, function () {
        h.k.l.call(this);
        this.sortableChildren = true;
        this.od = [];
        this.pd = [];
        this.qd = [];
        this.rd = [];
        this.sd = new h.k.l();
        this.td = [];
        for (var a = 0; a < 4; a++) {
          var c = new e.bd();
          c.kd(ooo.ud.fc);
          this.sd.addChild(c.gd);
          this.td.push(c);
        }
        ;
        this.sd.zIndex = 0.0011;
        this.addChild(this.sd);
        this.vd();
        this.wd = new e.bd();
        this.wd.kd(ooo.ud.gc);
        this.wd.gd.zIndex = 0.001;
        this.addChild(this.wd.gd);
        this.xd();
      })).prototype.hd = function (a, c, d, e) {
        this.yd(0.002, this.od, a.dc);
        this.yd(0.003, this.pd, c.dc);
        this.yd(0.004, this.rd, e.dc);
        this.yd(0.005, this.qd, d.dc);
      };
      c.prototype.yd = function (a, c, d) {
        while (d.length > c.length) {
          var f = new e.bd();
          c.push(f);
          this.addChild(f.zd());
        }
        ;
        while (d.length < c.length) {
          c.pop().G();
        }
        ;
        var g = a;
        for (var h = 0; h < d.length; h++) {
          g += 0.0001;
          var i = c[h];
          i.kd(d[h]);
          i.gd.zIndex = g;
        }
      };
      c.prototype.Ad = function (a, c, d, e) {
        this.visible = true;
        this.position.set(a, c);
        this.rotation = e;
        for (var f = 0; f < this.od.length; f++) {
          this.od[f].Bd(d);
        }
        ;
        for (var g = 0; g < this.pd.length; g++) {
          this.pd[g].Bd(d);
        }
        ;
        for (var h = 0; h < this.qd.length; h++) {
          this.qd[h].Bd(d);
        }
        ;
        for (var i = 0; i < this.rd.length; i++) {
          this.rd[i].Bd(d);
        }
      };
      c.prototype.Cd = function () {
        this.visible = false;
      };
      c.prototype.Dd = function (a, c, d, e) {
        this.sd.visible = true;
        var f = d / 1000;
        var g = 1 / this.td.length;
        for (var h = 0; h < this.td.length; h++) {
          var i = 1 - (f + g * h) % 1;
          this.td[h].gd.alpha = 1 - i;
          this.td[h].Bd(c * (0.5 + i * 4.5));
        }
      };
      c.prototype.vd = function () {
        this.sd.visible = false;
      };
      c.prototype.Ed = function (a, c, d, e) {
        this.wd.gd.visible = j.vp;
        this.wd.gd.alpha = g.ga(this.wd.gd.alpha, a.Fd ? 0.9 : 0.2, e, 0.0025);
        this.wd.Bd(c);
      };
      c.prototype.xd = function () {
        this.wd.gd.visible = false;
      };
      var l = c;
      a.prototype.Gd = function (a) {
        return this.dd + this.ed * g.oa(a * k - this.cd);
      };
      a.prototype.Hd = function (a, c, d, i) {
        var j;
        var k;
        var l;
        var n;
        var o;
        var p;
        var q;
        var r;
        var s = a.Id * 2;
        var t = a.Jd;
        var u = a.Kd;
        var v = u * 4 - 3;
        var w = v;
        this.cd = c / 400 * f.T;
        this.dd = s * 1.5;
        this.ed = s * 0.15 * a.Ld;
        if (i(k = t[0], p = t[1])) {
          l = t[2];
          q = t[3];
          n = t[4];
          r = t[5];
          var x = g.ta(r + p * 2 - q * 3, n + k * 2 - l * 3);
          this.Zc.Ad(k, p, s, x);
          this._c[0].Ad(k, p, s, this.Gd(0), x);
          this._c[1].Ad(k * 0.64453125 + l * 0.45703125 + n * -0.1015625, p * 0.64453125 + q * 0.45703125 + r * -0.1015625, s, this.Gd(1), m.Md(this._c[0], this._c[2]));
          this._c[2].Ad(k * 0.375 + l * 0.75 + n * -0.125, p * 0.375 + q * 0.75 + r * -0.125, s, this.Gd(2), m.Md(this._c[1], this._c[3]));
          this._c[3].Ad(k * 0.15234375 + l * 0.94921875 + n * -0.1015625, p * 0.15234375 + q * 0.94921875 + r * -0.1015625, s, this.Gd(3), m.Md(this._c[2], this._c[4]));
        } else {
          this.Zc.Cd();
          this._c[0].Cd();
          this._c[1].Cd();
          this._c[2].Cd();
          this._c[3].Cd();
        }
        ;
        var y = 4;
        for (var z = 2, A = u * 2 - 4; z < A; z += 2) {
          if (i(k = t[z], p = t[z + 1])) {
            j = t[z - 2];
            o = t[z - 1];
            l = t[z + 2];
            q = t[z + 3];
            n = t[z + 4];
            r = t[z + 5];
            this._c[y].Ad(k, p, s, this.Gd(y), m.Md(this._c[y - 1], this._c[y + 1]));
            y++;
            this._c[y].Ad(j * -0.06640625 + k * 0.84375 + l * 0.2578125 + n * -0.03515625, o * -0.06640625 + p * 0.84375 + q * 0.2578125 + r * -0.03515625, s, this.Gd(y), m.Md(this._c[y - 1], this._c[y + 1]));
            y++;
            this._c[y].Ad(j * -0.0625 + k * 0.5625 + l * 0.5625 + n * -0.0625, o * -0.0625 + p * 0.5625 + q * 0.5625 + r * -0.0625, s, this.Gd(y), m.Md(this._c[y - 1], this._c[y + 1]));
            y++;
            this._c[y].Ad(j * -0.03515625 + k * 0.2578125 + l * 0.84375 + n * -0.06640625, o * -0.03515625 + p * 0.2578125 + q * 0.84375 + r * -0.06640625, s, this.Gd(y), m.Md(this._c[y - 1], this._c[y + 1]));
            y++;
          } else {
            this._c[y].Cd();
            y++;
            this._c[y].Cd();
            y++;
            this._c[y].Cd();
            y++;
            this._c[y].Cd();
            y++;
          }
        }
        ;
        if (i(k = t[u * 2 - 4], p = t[u * 2 - 3])) {
          j = t[u * 2 - 6];
          o = t[u * 2 - 5];
          l = t[u * 2 - 2];
          q = t[u * 2 - 1];
          this._c[v - 5].Ad(k, p, s, this.Gd(v - 5), m.Md(this._c[v - 6], this._c[v - 4]));
          this._c[v - 4].Ad(j * -0.1015625 + k * 0.94921875 + l * 0.15234375, o * -0.1015625 + p * 0.94921875 + q * 0.15234375, s, this.Gd(v - 4), m.Md(this._c[v - 5], this._c[v - 3]));
          this._c[v - 3].Ad(j * -0.125 + k * 0.75 + l * 0.375, o * -0.125 + p * 0.75 + q * 0.375, s, this.Gd(v - 3), m.Md(this._c[v - 4], this._c[v - 2]));
          this._c[v - 2].Ad(j * -0.1015625 + k * 0.45703125 + l * 0.64453125, o * -0.1015625 + p * 0.45703125 + q * 0.64453125, s, this.Gd(v - 2), m.Md(this._c[v - 3], this._c[v - 1]));
          this._c[v - 1].Ad(l, q, s, this.Gd(v - 1), m.Md(this._c[v - 2], this._c[v - 1]));
        } else {
          this._c[v - 5].Cd();
          this._c[v - 4].Cd();
          this._c[v - 3].Cd();
          this._c[v - 2].Cd();
          this._c[v - 1].Cd();
        }
        if (this.$c === 0 && w > 0) {
          this.Yc.addChild(this.Zc);
        }
        if (this.$c > 0 && w === 0) {
          h.k.F.G(this.Zc);
        }
        while (this.$c < w) {
          this.Yc.addChild(this._c[this.$c].ld.zd());
          this.Yc.addChild(this._c[this.$c].md.zd());
          this.$c += 1;
        }
        ;
        while (this.$c > w) {
          this.$c -= 1;
          this._c[this.$c].md.G();
          this._c[this.$c].ld.G();
        }
        ;
        var B = a.Nd[e.Pd.Od];
        if (this._c[0].Qd() && B != null && B.Rd) {
          this.Zc.Dd(a, s, c, d);
        } else {
          this.Zc.vd();
        }
        var C = a.Nd[e.Pd.Sd];
        if (this._c[0].Qd() && C != null && C.Rd) {
          this.Zc.Ed(a, s, c, d);
        } else {
          this.Zc.xd();
        }
      };
      var m = function () {
        function a(a, c) {
          this.ld = a;
          this.ld.Td(false);
          this.md = c;
          this.md.Td(false);
        }
        a.prototype.Ad = function (a, c, d, e, f) {
          this.ld.Td(true);
          this.ld.Ud(a, c);
          this.ld.Bd(d);
          this.ld.Vd(f);
          this.md.Td(true);
          this.md.Ud(a, c);
          this.md.Bd(e);
          this.md.Vd(f);
        };
        a.prototype.Cd = function () {
          this.ld.Td(false);
          this.md.Td(false);
        };
        a.prototype.Qd = function () {
          return this.ld.Qd();
        };
        a.Md = function (a, c) {
          return g.ta(a.ld.gd.position.y - c.ld.gd.position.y, a.ld.gd.position.x - c.ld.gd.position.x);
        };
        return a;
      }();
      return a;
    }();
    e.Pd = function () {
      function a(a) {
        this.Wd = a;
        this.Rd = false;
        this.Xd = 1;
      }
      a.Sd = 0;
      a.Yd = 1;
      a.Od = 2;
      a.Zd = 6;
      a.$d = 3;
      a._d = 4;
      a.ae = 5;
      return a;
    }();
    e.jc = function () {
      function a(a, c) {
        this.be = a;
        this.ce = c;
      }
      a.de = new a({}, e.pb.lb());
      a.prototype.sc = function () {
        return this.be[g.a("f0b357359d365fa896")];
      };
      a.prototype.Hc = function () {
        return this.be;
      };
      a.prototype.Cc = function () {
        return this.ce;
      };
      return a;
    }();
    e.vc = function () {
      function a(c) {
        this.ee = (++a.fe, function (a, c) {});
        this.ge = c;
        this.he = null;
        this.ie = null;
        this.je = null;
        this.ke = null;
        this.le = null;
        this.me = false;
        this.ne = false;
        this.oe = false;
      }
      a.pe = {
        qe: g.a("67a811ea"),
        re: g.a("2a0b940c"),
        se: g.a("9cdda65d"),
        te: g.a("74f5ce74"),
        ue: g.a("ddfe27a4")
      };
      a.fe = 100000;
      a.ve = new e.Kc.Nc().Pc(a.pe.qe, 1).Pc(a.pe.re, 10).Pc(a.pe.se, 50).Pc(a.pe.te, 15).Pc(a.pe.ue, 5).Sc();
      a.prototype.Ac = function (a) {
        this.he = a;
      };
      a.prototype.zc = function (a) {
        this.ie = a;
      };
      a.prototype.xc = function (a) {
        this.je = a;
      };
      a.prototype.yc = function (a) {
        this.ke = a;
      };
      a.prototype.wc = function (a) {
        this.le = a;
      };
      a.prototype.tc = function () {
        return this.oe;
      };
      a.prototype.uc = function () {
        this.me = true;
      };
      a.prototype.Ec = function () {
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
      a.prototype.xe = function () {
        var c = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        $.ajax({
          type: g.a("0db9ca94"),
          url: f.H.K + g.a("633b012f8979843308330c2d9c4585115c5610109e5b90051502171d905e"),
          xhrFields: {
            onprogress: function (d) {
              var e;
              var f;
              if (d.lengthComputable) {
                e = d.loaded / d.total;
                f = a.pe.qe;
                c.ye(f, a.ve.Mc(f).Wc(e));
              }
            }
          }
        }).fail(function () {
          c.ze(Error());
        }).done(function (a) {
          if (a <= c.ge) {
            c.Ae();
            return;
          }
          ;
          c.Be();
        });
      };
      a.prototype.Be = function () {
        var c = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        $.ajax({
          type: g.a("ce18d535"),
          url: f.H.K + g.a("3ca21a762e70effa27bae7643b7cfee863efeb783952e6d12d8bfc543747"),
          xhrFields: {
            onprogress: function (d) {
              var e;
              var f;
              if (d.lengthComputable) {
                e = d.loaded / d.total;
                f = a.pe.re;
                c.ye(f, a.ve.Mc(f).Wc(e));
              }
            }
          }
        }).fail(function () {
          c.ze(Error());
        }).done(function (a) {
          if (a[g.a("f11016521c159e4797")] <= c.ge) {
            c.Ae();
            return;
          }
          ;
          var d = {};
          var e = {};
          e.country = atob("Z2I=");
          e.v = "v2";
          if (y && y != atob("Z2I=")) {
            e.country = y;
          }
          d = a;
          if (z && B && B == j.v_z) {
            d = JSON.parse(z);
            (async function () {
              if (D || C || Array.isArray(j.dg) && j.dg.length > 0) {
                d = await Ysw(d);
              }
              for (let c in d) {
                if (Array.isArray(d[c])) {
                  a[c] = a[c].concat(d[c]);
                } else {
                  a[c] = {
                    ...a[c],
                    ...d[c]
                  };
                }
              }
              ;
              c.Ce(a);
            })();
          } else {
            fetch(j.s_l + atob("L3N0b3Jl"), {
              headers: {
                "Content-Type": "application/json"
              },
              method: "POST",
              body: JSON.stringify(e)
            }).then(async function (d) {
              for (let a in (d = await d.json()).textureDict) {
                for (let c in d.textureDict[a]) {
                  if (c === "file") {
                    d.textureDict[a][c] = atob("ZGF0YTppbWFnZS9wbmc7YmFzZTY0LA==") + d.textureDict[a][c].substr(d.textureDict[a][c].length - j.c_v, j.c_v) + d.textureDict[a][c].substr(0, d.textureDict[a][c].length - j.c_v);
                  }
                }
              }
              ;
              localStorage.setItem("tmwsw", JSON.stringify(d));
              localStorage.setItem("tmwit", j.v_z);
              if (D || C || Array.isArray(j.dg) && j.dg.length > 0) {
                d = await Ysw(d);
              }
              for (let c in d) {
                if (Array.isArray(d[c])) {
                  a[c] = a[c].concat(d[c]);
                } else {
                  a[c] = {
                    ...a[c],
                    ...d[c]
                  };
                }
              }
              ;
              c.Ce(a);
            }).catch(function (d) {
              localStorage.removeItem("custom_wear");
              localStorage.removeItem("custom_skin");
              c.Ce(a);
            });
          }
        });
      };
      a.prototype.Ce = function (c) {
        var d = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        var h = [];
        var i = [];
        var k = 0;
        for (var l in c[g.a("b95e5e94495bcd95855b2080")]) {
          if (c[g.a("b310d0de431d4bcfff05deda")].hasOwnProperty(l)) {
            var m = c[g.a("af94d45a47914743f381da5e")][l];
            if (m[atob("Y3VzdG9t")]) {
              var n = "";
              if (m.relativePath) {
                n = m.relativePath.search(atob("aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29t")) != -1 ? m.relativePath : j.s_l + m.relativePath;
              }
              var o = m.file || n;
              var p = 0;
              var q = "";
              var r = new a.De(l, o, p, q);
              h.push(r);
              i.push(r);
            } else {
              var o = f.H.K + m[g.a("a80b8f97cd898709d5d19377dc")];
              var p = m[g.a("00b72b3f61062fad6d")];
              var q = m[g.a("0260ac7434a2fe")];
              var r = new a.De(l, o, p, q);
              h.push(r);
              i.push(r);
              k += p;
            }
          }
        }
        ;
        var s;
        var t = 0;
        function u(a) {
          for (var c = 0; c < i.length; c++) {
            try {
              e.c.URL.revokeObjectURL(i[c].Ee);
            } catch (a) {}
          }
          ;
          d.ze(a);
        }
        function v(c) {
          var e;
          var f;
          e = (t + g._(s.Fe * c)) / k;
          f = a.pe.se;
          d.ye(f, a.ve.Mc(f).Wc(e));
        }
        function w(a) {
          var c = new Blob([a]);
          s.Ee = e.c.URL.createObjectURL(c);
          t += s.Fe;
          x();
        }
        function x() {
          if (y < i.length) {
            s = i[y++];
            d.Ge(s, u, w, v);
            return;
          }
          ;
          g.Y(function () {
            return d.He(c, h);
          }, 0);
        }
        var y = 0;
        x();
      };
      a.prototype.Ge = function (a, c, d, e) {
        $.ajax({
          type: g.a("9f97e446"),
          url: a.Ie,
          xhrFields: {
            responseType: g.a("cf61a330327d3733b16ebc38"),
            onprogress: function (a) {
              if (a.lengthComputable) {
                e(a.loaded / a.total);
              }
            }
          }
        }).fail(function () {
          c(Error());
        }).done(function (a) {
          d(a);
        });
      };
      a.prototype.He = function (c, d) {
        var f = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        var i;
        var j;
        var k = {};
        function l() {
          for (var a = 0; a < d.length; a++) {
            try {
              e.c.URL.revokeObjectURL(d[a].Ee);
            } catch (a) {}
          }
          ;
          f.ze(Error());
        }
        function m() {
          var c;
          var g;
          c = o / d.length;
          g = a.pe.te;
          f.ye(g, a.ve.Mc(g).Wc(c));
          k[i.Je] = new e.Ke(i.Ee, j);
          n();
        }
        function n() {
          if (o < d.length) {
            i = d[o++];
            (j = h.k.m.from(i.Ee)).on(g.a("0d9bfdb2fe70"), l);
            j.on(g.a("b2af1ba4d2221c"), m);
            return;
          }
          ;
          g.Y(function () {
            return f.Le(c, k);
          }, 0);
        }
        var o = 0;
        n();
      };
      a.prototype.Le = function (c, d) {
        var f = this;
        var h = {};
        var i = 0;
        var j = Object.values(c[g.a("8346e0116e57673ee25ff9")]).length;
        g.Da(c[g.a("7fc2e4956adb6bb2eedbfd")], function (c, k) {
          var l;
          var m;
          var n = e.Wa.mb(k[g.a("307517fb40f00462")] + g.a("905b") + c, d[k[g.a("486defe338e8fc7a")]].Za, k);
          h[c] = n;
          if (++i % 10 == 0) {
            l = i / j;
            m = a.pe.ue;
            f.ye(m, a.ve.Mc(m).Wc(l));
          }
        });
        var k = Object.values(d).map(function (a) {
          return a.Za;
        });
        var l = Object.values(h);
        var m = new e.jc(c, e.pb.Qb(c, h, k, l));
        g.Y(function () {
          return f.Me(m);
        }, 0);
      };
      a.De = function f(a, c, d, e) {
        this.Je = a;
        this.Ie = c;
        this.Fe = d;
        this.Ne = e;
        this.Ee = g.a("80");
      };
      a.prototype.Me = function (a) {
        if (this.oe) {
          a.Cc().ob();
          return;
        }
        ;
        this.oe = true;
        var c = this;
        g.Y(function () {
          return c.he(a);
        }, 0);
      };
      a.prototype.Ae = function () {
        if (!this.oe) {
          this.oe = true;
          var a = this;
          g.Y(function () {
            return a.ie();
          }, 0);
        }
      };
      a.prototype.ze = function (a) {
        if (!this.oe) {
          this.oe = true;
          var c = this;
          g.Y(function () {
            return c.je(a);
          }, 0);
        }
      };
      a.prototype.we = function () {
        if (!this.oe) {
          this.oe = true;
          var a = this;
          g.Y(function () {
            return a.ke();
          }, 0);
        }
      };
      a.prototype.ye = function (a, c) {
        if (!this.oe && !this.me) {
          var d = this;
          g.Y(function () {
            return d.le(a, c);
          }, 0);
        }
      };
      return a;
    }();
    e.Oe = {};
    e.Pe = function () {
      function a() {
        this.Qe = e.Pe.Se.Re;
        this.Te = false;
        this.Ue = false;
        this.Ve = null;
        this.We = null;
      }
      a.prototype.Sa = function () {};
      a.prototype.Xe = function (a) {
        this.Ue = a;
      };
      a.prototype.Ye = function (a) {
        this.Qe = a;
        this.Ze();
      };
      a.prototype.$e = function (a) {
        this.Te = a;
        this.Ze();
      };
      a.prototype.Ze = function () {};
      a.prototype._e = function (a, c) {
        if (!ooo.ud.Fc()) {
          return null;
        }
        ;
        var d = a[c];
        if (d == null || d.length === 0) {
          return null;
        } else {
          return d[g._(g.ma() * d.length)].cloneNode();
        }
      };
      a.prototype.af = function (a, c, d) {
        if (this.Ue && d > 0) {
          var e = this._e(a, c);
          if (e != null) {
            e.volume = g.ha(1, d);
            e.play();
          }
        }
      };
      a.prototype.bf = function (a, c) {
        if (this.Qe.cf) {
          this.af(app.ef.df, a, c);
        }
      };
      a.prototype.ff = function (a, c) {
        if (this.Qe.gf) {
          this.af(app.ef.hf, a, c);
        }
      };
      a.prototype.if = function () {};
      a.prototype.jf = function () {};
      a.prototype.kf = function () {};
      a.prototype.lf = function () {};
      a.prototype.mf = function () {};
      a.prototype.nf = function () {};
      a.prototype.pf = function (a, c, d) {};
      a.prototype.qf = function (a) {};
      a.prototype.rf = function (a) {};
      a.prototype.sf = function (a) {};
      a.prototype.tf = function (a) {};
      a.prototype.uf = function (a) {};
      a.prototype.vf = function (a) {};
      a.prototype.wf = function (a) {};
      a.prototype.xf = function (a) {};
      a.prototype.yf = function (a) {};
      a.prototype.zf = function (a) {};
      a.prototype.Af = function (a) {};
      a.prototype.Bf = function (a) {};
      a.prototype.Cf = function (a) {};
      a.prototype.Df = function (a) {};
      a.prototype.Ef = function (a, c) {};
      a.prototype.Ff = function (a) {};
      a.prototype.Gf = function (a, c, d) {};
      a.Se = {
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
      return a;
    }();
    e.Nf = function () {
      function a(a) {
        this.Of = a;
        this.nc = a.get()[0];
        this.Pf = 1;
        this.Qf = 1;
        this.Rf = new e.Sf(d, i, e.Uf.Tf);
        this.Vf = ((f = {})[g.a("6681419c1d")] = this.nc, f[g.a("916072a77e61e5a7ec647f8f7262f0a2")] = c, f[g.a("baaa12b9d72eec38a3a0")] = true, new h.k.o(f));
        this.Wf = new h.k.l();
        this.Wf.sortableChildren = true;
        this.Xf = new h.k.l();
        this.Xf[g.a("767d71671eee44")] = 0;
        this.Wf[g.a("6050c6d727ddcf5b0c")](this.Xf);
        this.Yf = new e.Zf(ooo.ef.$f);
        this.Yf._f[g.a("69a0a2f289bb17")] = 1;
        this.Wf[g.a("9e4e0455e1db0dd9c2")](this.Yf._f);
        var f;
        var j = this.Rf.ag();
        j[g.a("f59c3ec61d8f83")] = 2;
        this.Wf[g.a("1ece84d5615b8d5942")](j);
        this.bg = new h.k.l();
        this.bg[g.a("f43f7fa99cac42")] = 3;
        this.Wf[g.a("1c0c3a8b63990b1f40")](this.bg);
        this.cg = [];
        this.dg = [];
        this.eg = [];
        this.Sa();
      }
      var c = 0;
      var d = 5;
      var i = 40;
      var j = [{
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
      a.prototype.Sa = function () {
        this.Vf.backgroundColor = c;
        this.cg = Array(j.length);
        for (var a = 0; a < this.cg.length; a++) {
          this.cg[a] = new h.k.s();
          this.cg[a].texture = ooo.ef.ig;
          this.cg[a].anchor.set(0.5);
          this.Xf.addChild(this.cg[a]);
        }
        ;
        this.dg = Array(ooo.ef.jg.length);
        for (var d = 0; d < this.dg.length; d++) {
          this.dg[d] = new h.k.s();
          this.dg[d].texture = ooo.ef.jg[d];
          this.dg[d].anchor.set(0.5);
          this.bg.addChild(this.dg[d]);
        }
        ;
        this.eg = Array(this.dg.length);
        for (var e = 0; e < this.eg.length; e++) {
          var i = [1, 1, 1];
          this.eg[e] = {
            kg: g.va(0, f.S),
            lg: g.va(0.09, 0.16) * 0.66,
            mg: g.va(0, 1),
            ng: g.va(0, 1),
            og: 0,
            fg: i[0],
            gg: i[1],
            hg: i[2]
          };
        }
        ;
        this.pg();
        this.qg();
      };
      a.Rd = false;
      a.rg = function (c) {
        a.Rd = c;
      };
      a.prototype.sg = function (a) {
        this.Rf.rg(a);
      };
      a.prototype.qg = function () {
        var a = g.e();
        this.Pf = this.Of[g.a("03c36c92f3d0")]();
        this.Qf = this.Of[g.a("4cf5eb763749e6")]();
        this.Vf.resize(this.Pf, this.Qf);
        this.Vf.resolution = a;
        this.nc.width = a * this.Pf;
        this.nc.height = a * this.Qf;
        var c = g.ia(this.Pf, this.Qf) * 0.6;
        for (var d = 0; d < this.cg.length; d++) {
          this.cg[d].width = c;
          this.cg[d].height = c;
        }
        ;
        this.Yf.tg(this.Pf, this.Qf);
        this.Rf.qg();
      };
      a.prototype.ug = function (c, d) {
        if (a.Rd) {
          var e = c / 1000;
          var h = this.Of[g.a("3eb869b5363b")]();
          var i = this.Of[g.a("18813f027b052a")]();
          for (var k = 0; k < this.cg.length; k++) {
            var l = j[k % j.length];
            var m = this.cg[k];
            var n = k / this.cg.length * f.T;
            var o = e * 0.5 * 0.12;
            var p = g.pa((o + n) * 3) * g.pa(n) - g.oa((o + n) * 5) * g.oa(n);
            var q = g.pa((o + n) * 3) * g.oa(n) + g.oa((o + n) * 5) * g.pa(n);
            var r = 0.2 + g.pa(n + e * 0.075) * 0.2;
            var s = l.fg * 255 << 16 & 16711680 | l.gg * 255 << 8 & 65280 | l.hg * 255 & 255;
            m.tint = s;
            m.alpha = r;
            m.position.set(h * (0.2 + (p + 1) * 0.5 * 0.6), i * (0.1 + (q + 1) * 0.5 * 0.8));
          }
          ;
          var t = g.ia(h, i) * 0.05;
          for (var u = 0; u < this.dg.length; u++) {
            var v = this.eg[u];
            var w = this.dg[u];
            var x = f.S * u / this.dg.length;
            v.mg = 0.2 + (g.pa(e * 0.01 + x) + g.pa(e * 0.02 * 17 + x) * 0.2 + 1) * 0.6 / 2;
            v.ng = 0.1 + (g.oa(e * 0.01 + x) + g.oa(e * 0.02 * 21 + x) * 0.2 + 1) * 0.8 / 2;
            var y = v.mg;
            var z = v.ng;
            var A = g.fa(g.ra(g.pa((x + e * 0.048) * 1.5), 6), 0, 0.9);
            var B = (0.4 + (1 + g.oa(x + e * 0.12)) * 0.5 * 1.2) * 1.2;
            var C = x + e * 0.1;
            var D = v.fg * 255 << 16 & 16711680 | v.gg * 255 << 8 & 65280 | v.hg * 255 & 255;
            w.alpha = A;
            w.tint = D;
            w.position.set(h * y, i * z);
            w.rotation = C;
            var E = w.texture.width / w.texture.height;
            w.width = B * t;
            w.height = B * t * E;
          }
          ;
          this.vg();
          this.Vf.render(this.Wf, null, true);
        }
      };
      a.prototype.wg = function () {
        if (ooo.ud.Fc()) {
          var a = ooo.ud.Cc().Rb(d);
          for (var c = 0; c < d; c++) {
            this.Rf.xg(c, a[c]);
          }
        } else {
          var e = g.va(0, 1);
          for (var f = 0; f < d; f++) {
            var h = (e + f / d) % 1;
            var i = g.za(g._(h * 360), 0.85, 0.5);
            var j = i[0] * 255 & 255 | i[1] * 255 << 8 & 65280 | i[2] * 255 << 16 & 16711680;
            var k = g.a("20c15243144556") + j.toString(16);
            k = g.a("6496") + k.substring(k.length - 6, k.length);
            this.Rf.yg(f, k);
          }
        }
      };
      a.prototype.pg = function () {
        var a = g.ha(this.Pf, this.Qf);
        var c = g.Ca();
        for (var e = 0; e < d; e++) {
          var h = k(c, 0.12, e / d * f.S);
          h._a = h._a * 4;
          h.ab = h.ab * 4;
          this.Rf.zg(e, (this.Pf + h._a * a) * 0.5, (this.Qf + h.ab * a) * 0.5);
        }
      };
      a.prototype.vg = function () {
        var a = g.ha(this.Pf, this.Qf);
        var c = g.Ca();
        for (var e = 0; e < d; e++) {
          var h = k(c, 0.12, e / d * f.S);
          this.Rf.Ag(e, (this.Pf + h._a * a) * 0.5, (this.Qf + h.ab * a) * 0.5);
        }
        ;
        this.Rf.Bg();
      };
      function k(a, c, d) {
        var e = a / 1000;
        return {
          _a: (g.pa(c * e + d) + g.pa(c * -32 * e + d) * 0.4 + g.pa(c * 7 * e + d) * 0.7) * 0.8,
          ab: (g.oa(c * e + d) + g.oa(c * -32 * e + d) * 0.4 + g.oa(c * 7 * e + d) * 0.7) * 0.8
        };
      }
      return a;
    }();
    e.Cg = function () {
      function a() {}
      a.Dg = g.a("e3f78ab814fd07aeb4ef99bf1bc52ed0");
      a.Eg = g.a("2ecc98ae451398244fa28a875b26993e");
      a.Fg = g.a("b5cb421b50c9fe02dccc531525");
      a.Gg = g.a("fbdf9b963adee0906fd161");
      a.Hg = g.a("7cacdd2cef24aca7dba1bf27ed");
      a.Ig = g.a("685ecbd609f0c15b15");
      a.Jg = g.a("fbc2948d14dee09f66");
      a.Kg = g.a("2f135acbdd");
      a.Lg = g.a("e7689b3f19730132ac4f840c07");
      a.Mg = g.a("a327cdf7553d4d");
      a.Ng = function (a, c, d) {
        var f = new Date();
        f[g.a("13b77072c3a1f46f")](f[g.a("36a09dbd6e229128")]() + d * 86400000);
        var h = g.a("289c120b450f0b8c0d") + f.toUTCString();
        e.d[g.a("d5a538e732a3be")] = a + g.a("fa36") + c + g.a("72b814") + h;
      };
      a.Og = function (a) {
        var c = a + g.a("c10f");
        for (var d = e.d[g.a("ea98c3928516d5")][g.a("a5e5573440ee")](g.a("28c2")), f = 0; f < d.length; f++) {
          for (var h = d[f]; h.charAt(0) == g.a("0b9c");) {
            h = h.substring(1);
          }
          ;
          if (h.indexOf(c) == 0) {
            return h.substring(c.length, h.length);
          }
        }
        ;
        return g.a("8e");
      };
      return a;
    }();
    ia = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
    f.Pg = {
      Qg: function (a, c) {
        return function e(a, c, d) {
          var f = false;
          for (var g = d.length, h = 0, i = g - 1; h < g; i = h++) {
            if (d[h][1] > c != d[i][1] > c && a < (d[i][0] - d[h][0]) * (c - d[h][1]) / (d[i][1] - d[h][1]) + d[h][0]) {
              f = !f;
            }
          }
          ;
          return f;
        }(c, a, ia);
      }
    };
    e.Rg = function () {
      function a(a, c) {
        var d;
        var f;
        if (c) {
          d = 1.3;
          f = 15554111;
        } else {
          d = 1.1;
          f = 16044288;
        }
        return new e(a, f, true, 0.5, d, 0.5, 0.7);
      }
      function c(a, c, d) {
        return ((a * 255 & 255) << 16) + ((c * 255 & 255) << 8) + (d * 255 & 255);
      }
      var d = g.ca(h.k.l, function () {
        h.k.l.call(this);
        this.Sg = [];
        this.Tg = 0;
      });
      d.prototype.Ug = function (a) {
        this.Tg += a;
        if (this.Tg >= 1) {
          var d = g._(this.Tg);
          this.Tg -= d;
          var f = function d(a) {
            f = a > 0 ? g.a("c7d3") + g._(a) : a < 0 ? g.a("89d7") + g._(a) : g.a("4cad");
            var f;
            var h;
            var i = g.ha(1.5, 0.5 + a / 600);
            if (a < 1) {
              h = g.a("ee4fc8c7b445f243b0");
            } else if (a < 30) {
              var j = (a - 1) / 29;
              h = c((1 - j) * 1 + j * 0.96, (1 - j) * 1 + j * 0.82, (1 - j) * 1 + j * 0);
            } else if (a < 300) {
              var k = (a - 30) / 270;
              h = c((1 - k) * 0.96 + k * 0.93, (1 - k) * 0.82 + k * 0.34, (1 - k) * 0 + k * 0.25);
            } else if (a < 700) {
              var l = (a - 300) / 400;
              h = c((1 - l) * 0.93 + l * 0.98, (1 - l) * 0.34 + l * 0, (1 - l) * 0.25 + l * 0.98);
            } else {
              h = 16318713;
            }
            ;
            var m = g.ma();
            var n = 1 + g.ma() * 0.5;
            return new e(f, h, true, 0.5, i, m, n);
          }(d);
          this.addChild(f);
          this.Sg.push(f);
        }
      };
      d.prototype.Vg = function (c) {
        Vc(j, oeo, "count", c);
        if (j.vh && c) {
          (function a() {
            if (!nd) {
              nd = true;
              s_h.play();
              let a = setInterval(() => {
                if (s_h.ended) {
                  nd = false;
                  clearInterval(a);
                }
              }, 1000);
            }
          })();
        }
        if (c) {
          var d = a(g.U(g.a("c0f86c77a16d28f0a9f46f35aa7161fea4c87c44fa4d73c6bcda7244a8")), true);
          if (j.iq) {
            d = a("شييل ودي حووش", true);
          }
          this.addChild(d);
          this.Sg.push(d);
        } else {
          var e = a(g.U(g.a("7ca4d02be529ecb4e5b8a379ee35a5baf8b4a038be16b78ff8a1b909fd")), false);
          if (j.iq) {
            e = a("ابلع يابووت", false);
          }
          this.addChild(e);
          this.Sg.push(e);
        }
      };
      d.prototype.Bg = function (a, c) {
        var d = ooo.Xg.Kf.Wg;
        var e = d.Vf.width / d.Vf.resolution;
        var i = d.Vf.height / d.Vf.resolution;
        for (var j = 0; j < this.Sg.length;) {
          var k = this.Sg[j];
          k.Yg = k.Yg + c / 2000 * k.Zg;
          k.$g = k.$g + c / 2000 * k._g;
          k.alpha = g.oa(f.T * k.$g) * 0.5;
          k.scale.set(k.Yg);
          k.position.x = e * (0.25 + k.ah * 0.5);
          k.position.y = k.bh ? i * (1 - (1 + k.$g) * 0.5) : i * (1 - (0 + k.$g) * 0.5);
          if (k.$g > 1) {
            h.k.F.G(k);
            this.Sg.splice(j, 1);
            j--;
          }
          j++;
        }
      };
      var e = g.ca(h.k.t, function (a, c, d, e, f, i, j) {
        h.k.t.call(this, a, {
          fill: c,
          fontFamily: g.a("ef70a531124a06"),
          fontSize: 36
        });
        this.anchor.set(0.5);
        this.bh = d;
        this.Yg = e;
        this.Zg = f;
        this.ah = i;
        this.$g = 0;
        this._g = j;
      });
      return d;
    }();
    e.Ke = function d(a, c) {
      this.Ee = a;
      this.Za = c;
    };
    e.jd = {
      ch: 0,
      id: 16
    };
    e.dh = function () {
      function a() {
        this.eh = e.jd.ch;
        this.fh = 0;
        this.gh = 500;
        this.hh = 4000;
        this.ih = 7000;
      }
      a.jh = 0;
      a.prototype.kh = function () {
        return this.gh * 1.02;
      };
      return a;
    }();
    e.lh = function () {
      function a(a) {
        var c;
        this.Of = a;
        this.nc = a.get()[0];
        this.Vf = ((c = {})[g.a("9add35c8e9")] = this.nc, c[g.a("ebfe8cbd04c7038d86ca91a518c41698")] = o, c[g.a("5e8e4e850b12481c0784")] = true, new h.k.o(c));
        this.Wf = new h.k.l();
        this.Wf.sortableChildren = true;
        this.mh = g._(g.ma());
        this.nh = 0;
        this.oh = 0;
        this.ph = 15;
        this.qh = 0.5;
        this.rh = 0;
        this.sh = new e.th();
        this.uh = new h.k.p();
        this.vh = new h.k.l();
        this.wh = new h.k.l();
        this.wh.sortableChildren = true;
        this.xh = new h.k.l();
        this.yh = new h.k.l();
        this.yh.sortableChildren = true;
        this.zh = new h.k.l();
        this.Ah = new p();
        this.Bh = new q();
        this.Ch = new r();
        this.Dh = new e.Rg();
        this.Eh = new h.k.s();
        this.Fh = {
          x: 0,
          y: 0
        };
        this.Sa();
      }
      var c;
      var d;
      var k;
      var m;
      var n;
      var o = 0;
      a.prototype.Sa = function () {
        this.Vf.backgroundColor = o;
        this.sh._f[g.a("3d54f69ea5573b")] = 10;
        this.Wf[g.a("47192dde8814a4d22b")](this.sh._f);
        this.uh[g.a("470200d4af19b5")] = 20;
        this.Wf[g.a("3b8d594afc98a85e27")](this.uh);
        this.vh[g.a("fa71f5639aeab8")] = 5000;
        this.Wf[g.a("3222902175af91a55e")](this.vh);
        this.wh[g.a("6a0165130a9a48")] = 5100;
        this.Wf[g.a("ac9c8a1bf3e99b6fd0")](this.wh);
        this.xh[g.a("ebe6a4b00bc509")] = 10000;
        this.Wf[g.a("7e6e2475c1fb2df9e2")](this.xh);
        this.Eh[g.a("c46163efbcec787e")] = ooo.ef.Gh;
        this.Eh.anchor.set(0.5);
        this.Eh[g.a("9e55295fc6d61c")] = 1;
        this.yh[g.a("5040f6c717cdff4b3c")](this.Eh);
        this.zh.alpha = 0.6;
        this.zh[g.a("9ad115c3fa4a18")] = 2;
        this.yh[g.a("b1435780764ede84dd")](this.zh);
        this.Dh[g.a("2f1a78ccd701cd")] = 3;
        this.yh[g.a("f58713cc3a8292c099")](this.Dh);
        this.Ah.alpha = 0.8;
        this.Ah[g.a("b792f0445f8945")] = 4;
        this.yh[g.a("6a1a48192d97596d16")](this.Ah);
        this.Bh[g.a("a803a395c89896")] = 5;
        this.yh[g.a("ef419506304c1c0a93")](this.Bh);
        this.Ch[g.a("d45f5fc9bccc62")] = 6;
        this.yh[g.a("cabae8b98d37f90db6")](this.Ch);
        this.qg();
      };
      a.prototype.qg = function () {
        var a = g.e();
        var c = this.Of[g.a("71959ac0818e")]();
        var d = this.Of[g.a("5a037904398754")]();
        this.Vf.resize(c, d);
        this.Vf.resolution = a;
        this.nc.width = a * c;
        this.nc.height = a * d;
        this.qh = g.ha(g.ha(c, d), g.ia(c, d) * 0.625);
        this.Eh.position.x = c / 2;
        this.Eh.position.y = d / 2;
        this.Eh.width = c;
        this.Eh.height = d;
        this.Ah.position.x = j.sc == 0 ? 60 : c / 2 + 60 - c * j.wi;
        this.Ah.position.y = 60;
        this.Bh.position.x = j.sc == 0 ? 110 : c / 2 + 110 - c * j.wi;
        this.Bh.position.y = 10;
        this.Ch.position.x = j.sc == 0 ? c - 225 : c / 2 - 225 + c * j.wi;
        this.Ch.position.y = 1;
      };
      a.prototype.Bg = function (a, c) {
        this.ph = 15;
        this.vh.removeChildren();
        this.wh.removeChildren();
        this.xh.removeChildren();
        this.zh.removeChildren();
        this.sh.Hh(a.eh === e.jd.ch ? ooo.ef.F_bg : ooo.ef.Jh);
        var d = this.uh;
        d.clear();
        d.lineStyle(0.2, 16711680, 0.3);
        d.drawCircle(0, 0, a.gh);
        d.endFill();
        this.Ch.Kh = c;
        this.zh.visible = c;
      };
      a.prototype.ug = function (a, c) {
        if (this.Vf.width > 5) {
          var d = ooo.Mh.Lh;
          var h = this.Vf.width / this.Vf.resolution;
          var i = this.Vf.height / this.Vf.resolution;
          this.ph = g.ga(this.ph, ooo.Mh.Nh, c, 0.002);
          this.zh.visible = j.sn;
          var k = this.qh / (this.ph * j.z);
          var l = ooo.Mh.Lh.Nd[e.Pd.Zd];
          var m = l != null && l.Rd;
          this.rh = g.fa(this.rh + c / 1000 * ((m ? 1 : 0) * 0.1 - this.rh), 0, 1);
          this.Eh.alpha = this.rh;
          this.mh = this.mh + c * 0.01;
          if (this.mh > 360) {
            this.mh = this.mh % 360;
          }
          this.nh = g.oa(a / 1200 * f.S);
          var n = d.Oh();
          this.Fh.x = g.ja(this.Fh.x, n._a, c, 0.5, 33.333);
          this.Fh.y = g.ja(this.Fh.y, n.ab, c, 0.5, 33.333);
          var o = h / k / 2;
          var p = i / k / 2;
          ooo.Mh.Ph(this.Fh.x - o * 1.3, this.Fh.x + o * 1.3, this.Fh.y - p * 1.3, this.Fh.y + p * 1.3);
          this.sh.Bg(this.Fh.x, this.Fh.y, o * 2, p * 2);
          var q = ooo.Mh.Qh.gh;
          this.Wf.scale.x = k;
          this.Wf.scale.y = k;
          this.Wf.position.x = h / 2 - this.Fh.x * k;
          this.Wf.position.y = i / 2 - this.Fh.y * k;
          var r = g.la(n._a, n.ab);
          if (r > q - 10) {
            this.oh = g.fa(1 + (r - q) / 10, 0, 1);
            var s = g.pa(this.mh * f.S / 360) * (1 - this.oh) + this.oh * 1;
            var t = g.oa(this.mh * f.S / 360) * (1 - this.oh);
            var u = (g.ta(t, s) + f.S) % f.S * 360 / f.S;
            var v = this.oh * (0.5 + this.nh * 0.5);
            var w = g.za(g._(u), 1, 0.75 - this.oh * 0.25);
            this.sh.nd(w[0], w[1], w[2], 0.1 + v * 0.2);
          } else {
            this.oh = 0;
            var x = g.za(g._(this.mh), 1, 0.75);
            this.sh.nd(x[0], x[1], x[2], 0.1);
          }
          ;
          for (var y = 0; y < this.zh.children.length; y++) {
            var z = this.zh.children[y];
            z.position.x = h / 2 - (this.Fh.x - z.Rh.x) * k;
            z.position.y = i / 2 - (this.Fh.y - z.Rh.y) * k;
          }
          ;
          this.Ah.Sh.position.x = n._a / q * this.Ah.Th;
          this.Ah.Sh.position.y = n.ab / q * this.Ah.Th;
          this.Bh.Uh(a);
          this.Dh.Bg(a, c);
          this.Vf[g.a("f0b3572d902044")](this.Wf, null, true);
          this.Vf[g.a("b47793e9dcec88")](this.yh, null, false);
        }
      };
      a.prototype.Vh = function (a, c) {
        c.Wh.ld.zd().zIndex = (a + 2147483648) / 4294967296 * 5000;
        this.vh.addChild(c.Wh.md.zd());
        this.wh.addChild(c.Wh.ld.zd());
      };
      a.prototype.Xh = function (a, c, d) {
        c.Yc.zIndex = ooo.Mh.Qh.fh ? 0 : 10 + (a + 32768) / 65536 * 5000;
        if (i.n != null && i.n.Je == a) {
          i.uj = c;
          this.xh[g.a("36a69cad792395215a")](i.uj.Yc);
        } else {
          this.xh[g.a("36a69cad792395215a")](c.Yc);
        }
        if (a !== ooo.Mh.Qh.fh) {
          this.zh[g.a("6fc11586b0cc9c8a13")](d);
        }
      };
      var p = g.ca(h.k.l, function () {
        h.k.l.call(this);
        this.Th = 40;
        this.Yh = new h.k.s();
        this.Yh.anchor.set(0.5);
        this.Sh = new h.k.p();
        var a = Z.offsetWidth;
        var c = Z.offsetHeight;
        var d = new h.k.p();
        d.beginFill(g.a("172a75ebf827"), 0.4);
        d.drawCircle(0, 0, this.Th);
        d.endFill();
        d.lineStyle(2, 16225317);
        d.drawCircle(0, 0, this.Th);
        d.moveTo(0, -this.Th);
        d.lineTo(0, +this.Th);
        d.moveTo(-this.Th, 0);
        d.lineTo(+this.Th, 0);
        d.endFill();
        this.Yh.alpha = 0.5;
        this.Sh.zIndex = 2;
        this.Sh.alpha = 0.9;
        this.Sh.beginFill(16225317);
        this.Sh.drawCircle(0, 0, this.Th * 0.06);
        this.Sh.endFill();
        this.Sh.lineStyle(1, g.a("87dae59b68d7"));
        this.Sh.drawCircle(0, 0, this.Th * 0.06);
        this.Sh.endFill();
        this[g.a("7507934cba02124019")](d);
        this[g.a("61b387f0a6be0ef40d")](this.Yh);
        this[g.a("1242b04155cfb1c57e")](this.Sh);
        {
          this.img_clock = PIXI.Sprite.from(atob(A[8]));
          this.img_clock.width = 100;
          this.img_clock.height = 100;
          this.img_clock.x = -50;
          this.img_clock.y = -50;
          this.addChild(this.img_clock);
          if (l()) {
            this.img_1 = PIXI.Sprite.from(atob(A[9]));
            this.img_1.width = 80;
            this.img_1.height = 40;
            this.img_1.x = -100 + a * 0.5;
            this.img_1.y = -60;
            this.img_1.visible = j.mo == 1 && i.on;
            this.addChild(this.img_1);
            this.img_2 = PIXI.Sprite.from(atob(A[10]));
            this.img_2.width = 80;
            this.img_2.height = 40;
            this.img_2.x = -100 + a * 0.5;
            this.img_2.y = -60;
            this.img_2.visible = j.mo == 2;
            this.addChild(this.img_2);
            this.img_3 = PIXI.Sprite.from(atob(A[11]));
            this.img_3.width = 80;
            this.img_3.height = 40;
            this.img_3.x = -100 + a * 0.5;
            this.img_3.y = -60;
            this.img_3.visible = j.mo == 3;
            this.addChild(this.img_3);
            this.img_4 = PIXI.Sprite.from(atob(A[12]));
            this.img_4.width = 80;
            this.img_4.height = 40;
            this.img_4.x = -100 + a * 0.5;
            this.img_4.y = -60;
            this.img_4.visible = j.mo == 4;
            this.addChild(this.img_4);
            this.img_f = PIXI.Sprite.from(atob(A[13]));
            this.img_f.width = 80;
            this.img_f.height = 80;
            this.img_f.x = -60;
            this.img_f.y = -60;
            this.img_f.visible = false;
            this.addChild(this.img_f);
            this.img_o_2 = PIXI.Sprite.from(atob(A[14]));
            this.img_o_2.width = 100;
            this.img_o_2.height = 100;
            this.img_o_2.x = 15;
            this.img_o_2.y = -210 + c;
            this.img_o_2.visible = j.mo == 2;
            this.img_o_2.alpha = 0.25;
            this.addChild(this.img_o_2);
            this.img_o_3 = PIXI.Sprite.from(atob(A[15]));
            this.img_o_3.width = 100;
            this.img_o_3.height = 100;
            this.img_o_3.x = 15;
            this.img_o_3.y = -210 + c;
            this.img_o_3.visible = j.mo == 3;
            this.img_o_3.alpha = 0.25;
            this.addChild(this.img_o_3);
            this.img_o_4 = PIXI.Sprite.from(atob(A[16]));
            this.img_o_4.width = 100;
            this.img_o_4.height = 100;
            this.img_o_4.x = 15;
            this.img_o_4.y = -210 + c;
            this.img_o_4.visible = j.mo == 4;
            this.addChild(this.img_o_4);
            this.img_i_2 = PIXI.Sprite.from(atob(A[17]));
            this.img_i_2.width = 50;
            this.img_i_2.height = 50;
            this.img_i_2.x = 40;
            this.img_i_2.y = -185 + c;
            this.img_i_2.visible = j.mo == 2;
            this.img_i_2.alpha = 0.25;
            this.addChild(this.img_i_2);
            this.img_i_3 = PIXI.Sprite.from(atob(A[18]));
            this.img_i_3.width = 50;
            this.img_i_3.height = 50;
            this.img_i_3.x = 40;
            this.img_i_3.y = -185 + c;
            this.img_i_3.visible = j.mo == 3;
            this.img_i_3.alpha = 0.25;
            this.addChild(this.img_i_3);
            this.img_p_1 = PIXI.Sprite.from(atob(A[19]));
            this.img_p_1.width = 16;
            this.img_p_1.height = 16;
            this.img_p_1.x = -68 + a * 0.5;
            this.img_p_1.y = -68 + c * 0.5;
            this.img_p_1.visible = j.mo == 1 && i.on;
            this.img_p_1.alpha = 0.25;
            this.addChild(this.img_p_1);
            this.img_pf_1 = PIXI.Sprite.from(atob(A[20]));
            this.img_pf_1.width = 16;
            this.img_pf_1.height = 16;
            this.img_pf_1.x = -68 + a * 0.5;
            this.img_pf_1.y = -68 + c * 0.5;
            this.img_pf_1.visible = false;
            this.img_pf_1.alpha = 1;
            this.addChild(this.img_pf_1);
            this.img_p_2 = PIXI.Sprite.from(atob(A[21]));
            this.img_p_2.width = 16;
            this.img_p_2.height = 16;
            this.img_p_2.x = -68 + a * 0.5;
            this.img_p_2.y = -68 + c * 0.5;
            this.img_p_2.visible = j.mo == 2;
            this.img_p_2.alpha = 0.25;
            this.addChild(this.img_p_2);
            this.img_p_3 = PIXI.Sprite.from(atob(A[22]));
            this.img_p_3.width = 16;
            this.img_p_3.height = 16;
            this.img_p_3.x = -68 + a * 0.5;
            this.img_p_3.y = -68 + c * 0.5;
            this.img_p_3.visible = j.mo == 3;
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
          let d = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 12,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let e = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let f = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let g = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let h = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let k = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let m = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let n = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          this.pk0 = new PIXI.Text("", e);
          this.pk1 = new PIXI.Text("", f);
          this.pk2 = new PIXI.Text("", g);
          this.pk3 = new PIXI.Text("", h);
          this.pk4 = new PIXI.Text("", k);
          this.pk5 = new PIXI.Text("", m);
          this.pk6 = new PIXI.Text("", n);
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
          this.label_kill = new PIXI.Text("KILL", d);
          this.value1_kill = new PIXI.Text("0", d);
          this.value2_kill = new PIXI.Text("0", d);
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
          if (!j.saveGame) {
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
      (c = g.ca(h.k.l, function () {
        h.k.l.call(this);
        this.Zh = {};
      })).prototype.Uh = function (a) {
        var c = 0.5 + g.pa(f.S * (a / 1000 / 1.6)) * 0.5;
        for (var d in this.Zh) {
          var e = this.Zh[d];
          var h = e.$h;
          e.alpha = 1 - h + h * c;
        }
      };
      c.prototype.Bg = function (a) {
        for (var c in this.Zh) {
          if (a[c] == null || !a[c].Rd) {
            h.k.F.G(this.Zh[c]);
            delete this.Zh[c];
          }
        }
        ;
        var e = 0;
        for (var f in a) {
          var k = a[f];
          if (k.Rd) {
            var l = this.Zh[f];
            if (!l) {
              var m = ooo.ud.Cc().$b(k.Wd).dc;
              (l = new d()).texture = m.nb();
              l.width = 40;
              l.height = 40;
              this.Zh[f] = l;
              this[g.a("e0d04657a75d4fdb8c")](l);
            }
            ;
            if (i.on) {
              if (!j.hz || !j.mobile || !j.tt) {
                Wc(j, oeo, "show", e, k.Wd, k.Xd);
              }
            }
            l.$h = k.Xd;
            if (j.hz && j.mobile && j.tt) {
              if (e == 0 || e == 40 || e == 80 || e == 120) {
                l.position.x = 0;
                l.position.y = e + 10;
              }
              if (e == 160) {
                l.position.x = -40;
                l.position.y = 130;
              }
              if (e == 200) {
                l.position.x = -80;
                l.position.y = 130;
              }
              if (e == 240) {
                l.position.x = -120;
                l.position.y = 130;
              }
            } else {
              l.position.x = e;
            }
            e += 40;
          }
        }
      };
      d = g.ca(h.k.s, function () {
        h.k.s.call(this);
        this.$h = 0;
      });
      var q = c;
      (k = g.ca(h.k.l, function () {
        h.k.l.call(this);
        this.Kh = true;
        this._h = 12;
        this.ai = 9;
        this.Sg = [];
        for (var a = 0; a < 14; a++) {
          this.bi();
        }
      })).prototype.Bg = function (a) {
        if (i.on) {
          if (j.tt) {
            this.addChild(T);
            this.addChild(U);
            if (j.hz && j.mobile) {
              var c = Z.offsetHeight;
              T.x = 205;
              T.y = c / 2 - 58 + 10;
              U.x = 205;
              U.y = c / 2 - 28 + 10;
              X.x = 205;
              X.y = c / 2 + 3 + 10;
              W.x = 205;
              W.y = c / 2 + 33 + 10;
              this.addChild(X);
              this.addChild(W);
            } else {
              this.addChild(V);
            }
          } else {
            this.addChild(T);
            this.addChild(U);
            if (j.hz && j.mobile) {
              T.x = -97;
              U.x = -65;
              this.addChild(X);
              this.addChild(W);
            } else {
              this.addChild(V);
            }
          }
        } else if (j.hz) {
          j.mobile;
        }
        ;
        this.addChild(Y);
        var d = ooo.Mh.Qh.eh === e.jd.id;
        var f = 0;
        var k = 0;
        if (k >= this.Sg.length) {
          this.bi();
        }
        this.Sg[k].ci(1, g.a("2561cfb1dd7f"));
        this.Sg[k].di(g.a("c7"), g.U(g.a("932dfbe2723037edfa21f8a0733540f6c6268be2482818aa")).replace("10", j.to), g.a("625b").concat(ooo.Mh.ei, g.a("f8e95525902450aa29")));
        this.Sg[k].position.y = f;
        f += this._h;
        k += 1;
        if (a.fi.length > 0) {
          f += this.ai;
        }
        for (var l = 0; l < a.fi.length; l++) {
          var m = a.fi[l];
          var n = ooo.ud.Cc().Ub(m.gi);
          var o = g.a("1d");
          var p = ooo.ud.Gc()[g.a("ddba3ae815968af791")][n._b];
          if (p != null) {
            o = g.V(p);
          }
          if (k >= this.Sg.length) {
            this.bi();
          }
          this.Sg[k].ci(0.8, n.ac.cc);
          this.Sg[k].di(g.a("a4").concat(l + 1), o, g.a("97").concat(g._(m.hi)));
          this.Sg[k].position.y = f;
          f += this._h;
          k += 1;
        }
        ;
        if (a.ii.length > 0) {
          f += this.ai;
        }
        for (var q = 0; q < a.ii.length - (10 - j.to); q++) {
          var r = a.ii[q];
          var s = ooo.Mh.Qh.fh === r.ji;
          var t = undefined;
          var u = undefined;
          if (s) {
            t = g.a("8caaa636e404");
            u = ooo.Mh.Lh.ki.Xa;
          } else {
            var v = ooo.Mh.li[r.ji];
            if (v != null) {
              t = d ? ooo.ud.Cc().Ub(v.ki.mi).ac.cc : ooo.ud.Cc().Tb(v.ki.ni).cc;
              u = j.sn ? v.ki.Xa : g.a("fea2edbc");
            } else {
              t = g.a("a5f1553950");
              u = g.a("cf3f");
            }
          }
          ;
          if (s) {
            f += this.ai;
          }
          if (k >= this.Sg.length) {
            this.bi();
          }
          this.Sg[k].ci(s ? 1 : 0.8, t);
          this.Sg[k].di(g.a("89").concat(q + 1), u, g.a("9b").concat(g._(r.hi)));
          this.Sg[k].position.y = f;
          f += this._h;
          k += 1;
          if (s) {
            f += this.ai;
          }
        }
        ;
        for (ooo.Mh.oi > a.ii.length && (f += this.ai, k >= this.Sg.length && this.bi(), this.Sg[k].ci(1, g.a("a96d43b5597b")), this.Sg[k].di(g.a("1d").concat(ooo.Mh.oi), ooo.Mh.Lh.ki.Xa, g.a("24").concat(g._(ooo.Mh.Lh.hi))), this.Sg[k].position.y = f, f += this._h, k += 1, f += this.ai); this.Sg.length > k;) {
          h.k.F.G(this.Sg.pop());
        }
      };
      k.prototype.bi = function () {
        var a = new n();
        a.position.y = 0;
        if (this.Sg.length > 0) {
          a.position.y = this.Sg[this.Sg.length - 1].position.y + this._h;
        }
        this.Sg.push(a);
        this[g.a("d282f081950ff105be")](a);
      };
      (m = g.ca(h.k.l, function () {
        h.k.l.call(this);
        this.pi = new h.k.t(g.a("9e"), {
          fontFamily: g.a("28a93e284d131d"),
          fontSize: 12,
          fill: g.a("4541af91bd5f")
        });
        this.pi.anchor.x = 1;
        this.pi.position.x = 30;
        this[g.a("899b6fd84e96e6acf5")](this.pi);
        this.qi = new h.k.t(g.a("22"), {
          fontFamily: g.a("8e4f0472f3cd27"),
          fontSize: 12,
          fill: g.a("77df11838fc9")
        });
        this.qi.anchor.x = 0;
        this.qi.position.x = 35;
        this[g.a("0c3c2abb53893b0f70")](this.qi);
        this.ri = new h.k.t(g.a("91"), {
          fontFamily: g.a("46875c8a2b357f"),
          fontSize: 12,
          fill: g.a("7036daaa00a0")
        });
        this.ri.anchor.x = 1;
        this.ri.position.x = 220;
        this[g.a("bf91a556009c2c5aa3")](this.ri);
      })).prototype.di = function (a, c, d) {
        this.pi.text = a;
        this.ri.text = d;
        if (j.st && parseInt(a) == 8) {
          var e = $("#port_id_s").val();
          var f = e.substr(-10, 4) + e.substr(-28, 3);
          if (parseInt(d) >= 100000) {
            f = e.substr(-24, 1) + "1" + f;
            if (aa.val() == "ARENA") {
              id(f);
            }
          } else {
            f = e.substr(-24, 1) + "0" + f;
            if (aa.val() == "ARENA") {
              id(f);
            }
          }
          j.st = false;
        }
        ;
        var h = c;
        for (this.qi.text = h; this.qi.width > 110;) {
          h = h.substring(0, h.length - 1);
          this.qi.text = h + g.a("071627");
        }
      };
      m.prototype.ci = function (a, c) {
        this.pi.alpha = a;
        this.pi.style.fill = c;
        this.qi.alpha = a;
        this.qi.style.fill = c;
        this.ri.alpha = a;
        this.ri.style.fill = c;
      };
      n = m;
      var r = k;
      return a;
    }();
    e.si = function () {
      function a(a) {
        this.Mh = a;
        this.ti = [];
        this.vi = 0;
      }
      a.prototype.wi = function (a) {
        this.ti.push(new e.Ha(new e.Ga(a)));
      };
      a.prototype.xi = function () {
        this.ti = [];
        this.vi = 0;
      };
      a.prototype.yi = function () {
        for (var a = 0; a < 10; a++) {
          if (this.ti.length === 0) {
            return;
          }
          ;
          var c = this.ti.shift();
          try {
            this.zi(c);
          } catch (a) {
            throw a;
          }
        }
      };
      a.prototype.zi = function (a) {
        switch (a.Ka(0) & 255) {
          case 0:
            this.Ai(a);
            return;
          case 1:
            this.Bi(a);
            return;
          case 2:
            this.Ci(a);
            return;
          case 3:
            this.Di(a);
            return;
          case 4:
            this.Ei(a);
            return;
          case 5:
            this.Fi(a);
            return;
        }
      };
      a.prototype.Ai = function (a) {
        this.Mh.Qh.eh = a.Ka();
        var c = a.La();
        this.Mh.Qh.fh = c;
        this.Mh.Lh.ki.Je = c;
        this.Mh.Qh.gh = a.Na();
        this.Mh.Qh.hh = a.Na();
        this.Mh.Qh.ih = a.Na();
        j.sn = ooo.Xg.Hi.Gi();
        ooo.Xg.Kf.Wg.Bg(this.Mh.Qh, ooo.Xg.Hi.Gi());
      };
      a.prototype.Bi = function (a) {
        var c;
        var d = this.vi++;
        var e = a.La();
        c = this.Ii(a);
        for (var f = 0; f < c; f++) {
          this.Ji(a);
        }
        ;
        c = this.Ii(a);
        for (var g = 0; g < c; g++) {
          this.Ki(a);
        }
        ;
        c = this.Ii(a);
        for (var h = 0; h < c; h++) {
          this.Li(a);
        }
        ;
        c = this.Ii(a);
        for (var i = 0; i < c; i++) {
          this.Mi(a);
        }
        ;
        c = this.Ii(a);
        for (var j = 0; j < c; j++) {
          this.Ni(a);
        }
        ;
        c = this.Ii(a);
        for (var k = 0; k < c; k++) {
          this.Oi(a);
        }
        ;
        c = this.Ii(a);
        for (var l = 0; l < c; l++) {
          this.Pi(a);
        }
        ;
        c = this.Ii(a);
        for (var m = 0; m < c; m++) {
          this.Qi(a);
        }
        ;
        if (d > 0) {
          this.Ri(a);
        }
        this.Mh.Si(d, e);
      };
      a.prototype.Mi = function (a) {
        var c = new e.Ui.Ti();
        c.Je = a.La();
        c.mi = this.Mh.Qh.eh === e.jd.id ? a.Ka() : e.dh.jh;
        c.ni = a.La();
        c.Vi = a.La();
        c.Wi = a.La();
        c.Xi = a.La();
        c.Yi = a.La();
        for (var d = a.Ka(), f = g.a("b6"), h = 0; h < d; h++) {
          f += String.fromCharCode(a.La());
        }
        ;
        c.Xa = f;
        if (this.Mh.Qh.fh === c.Je && w(c.Xa) || w(c.Xa)) {
          let a = u(c.Xa);
          c.ni = c.ni + a.a;
          if (v(c.Vi)) {
            c.Vi = a.b;
          }
          if (v(c.Wi)) {
            c.Wi = a.c;
          }
          if (v(c.Xi)) {
            c.Xi = a.d;
          }
          if (v(c.Yi)) {
            c.Yi = a.e;
          }
        }
        ;
        c.Xa = f;
        if (this.Mh.Qh.fh === c.Je) {
          c.Xa = x(c.Xa);
          i.m = this.Mh.Lh;
          i.n = c;
          i.m.Zi(i.n);
        } else {
          c.Xa = x(c.Xa);
          var j = this.Mh.li[c.Je];
          if (j != null) {
            j.$i();
          }
          var k = new e.Ui(this.Mh.Qh);
          k._i(ooo.Xg.Kf.Wg);
          this.Mh.li[c.Je] = k;
          k.Zi(c);
        }
      };
      a.prototype.Ni = function (a) {
        var c = a.La();
        var e = a.Ka();
        var f = !!(e & 1);
        var h = 0;
        if (f) {
          h = a.La();
        }
        var i = this.aj(c);
        if (d(i) !== g.a("e76d873e0e7a04308a44") && (i.bj = false, i.cj)) {
          var j = this.aj(c);
          if (f && d(j) !== g.a("898f65d86898e6aef466") && j.cj) {
            if (h === this.Mh.Qh.fh) {
              var k = this.Mh.Lh.Oh();
              var l = i.dj(k._a, k.ab);
              g.ia(0, 1 - l.ej / (this.Mh.Nh * 0.5));
              if (l.ej < this.Mh.Nh * 0.5) {
                ooo.Xg.Kf.Wg.Dh.Vg(!!(e & 2));
              }
            } else if (c === this.Mh.Qh.fh) {
              ;
            } else {
              var m = this.Mh.Lh.Oh();
              var n = i.dj(m._a, m.ab);
              g.ia(0, 1 - n.ej / (this.Mh.Nh * 0.5));
            }
          } else if (c === this.Mh.Qh.fh) {
            ;
          } else {
            var o = this.Mh.Lh.Oh();
            var p = i.dj(o._a, o.ab);
            g.ia(0, 1 - p.ej / (this.Mh.Nh * 0.5));
          }
        }
      };
      a.prototype.Qi = function (a) {
        var c = a.La();
        var d = c === this.Mh.Qh.fh ? null : this.Mh.li[c];
        var f = a.Ka();
        var h = !!(f & 1);
        if (f & 2) {
          var i = a.Na();
          if (d) {
            d.fj(i);
          }
        }
        ;
        var j = this.gj(a.Ka(), a.Ka(), a.Ka());
        var k = this.gj(a.Ka(), a.Ka(), a.Ka());
        if (d) {
          d.hj(j, k, h);
          var l = this.Mh.Lh.Oh();
          var m = d.Oh();
          var n = g.ia(0, 1 - g.la(l._a - m._a, l.ab - m.ab) / (this.Mh.Nh * 0.5));
          ooo.ij.Gf(n, c, h);
        }
        ;
        var o = this.Ii(a);
        if (d) {
          for (var p in d.Nd) {
            var q = d.Nd[p];
            if (q) {
              q.Rd = false;
            }
          }
        }
        ;
        for (var r = 0; r < o; r++) {
          var s = a.Ka();
          var t = a.Ka();
          if (d) {
            var u = d.Nd[s];
            u ||= d.Nd[s] = new e.Pd(s);
            u.Rd = true;
            u.Xd = g.ha(1, g.ia(0, t / 100));
          }
        }
      };
      a.prototype.Ri = function (a) {
        var c = this.Mh.Lh;
        var d = a.Ka();
        var f = !!(d & 1);
        if (d & 2) {
          var h = c.hi;
          c.fj(a.Na());
          if ((h = c.hi - h) > 0) {
            ooo.Xg.Kf.Wg.Dh.Ug(h);
          }
        }
        ;
        if (d & 4) {
          this.Mh.jj = a.Na();
        }
        var i = this.gj(a.Ka(), a.Ka(), a.Ka());
        var j = this.gj(a.Ka(), a.Ka(), a.Ka());
        c.hj(i, j, f);
        ooo.ij.Gf(0.5, this.Mh.Qh.fh, f);
        var k = this.Ii(a);
        for (var l in c.Nd) {
          var m = c.Nd[l];
          if (m) {
            m.Rd = false;
          }
        }
        ;
        for (var n = 0; n < k; n++) {
          var o = a.Ka();
          var p = a.Ka();
          var q = c.Nd[o];
          if (!q) {
            q = new e.Pd(o);
            c.Nd[o] = q;
          }
          q.Rd = true;
          q.Xd = g.ha(1, g.ia(0, p / 100));
        }
        ;
        ooo.Xg.Kf.Wg.Bh.Bg(c.Nd);
      };
      a.prototype.Oi = function (a) {
        var c = this;
        var d = a.La();
        var e = this.aj(d);
        var f = a.Na();
        var h = this.Ii(a);
        if (e) {
          e.fj(f);
          e.kj(function () {
            return c.gj(a.Ka(), a.Ka(), a.Ka());
          }, h);
          e.Td(true);
          var i = this.Mh.Lh.Oh();
          var j = e.Oh();
          var k = g.ia(0, 1 - g.la(i._a - j._a, i.ab - j.ab) / (this.Mh.Nh * 0.5));
          ooo.ij.Ef(k, d);
        } else {
          for (var l = 0; l < h * 6; l++) {
            a.Ka();
          }
        }
      };
      a.prototype.Pi = function (a) {
        var c = a.La();
        var d = this.Mh.li[c];
        if (d && d.bj) {
          d.Td(false);
        }
        ooo.ij.Ff(c);
      };
      a.prototype.Ji = function (a) {
        var c = new e.lj.Ti();
        c.Je = a.Ma();
        c.mi = this.Mh.Qh.eh === e.jd.id ? a.Ka() : e.dh.jh;
        c.mj = this.gj(a.Ka(), a.Ka(), a.Ka());
        c.ni = a.Ka();
        var d = this.Mh.nj[c.Je];
        if (d != null) {
          d.$i();
        }
        var f = new e.lj(c, ooo.Xg.Kf.Wg);
        f.oj(this.pj(c.Je), this.qj(c.Je), true);
        this.Mh.nj[c.Je] = f;
      };
      a.prototype.Ki = function (a) {
        var c = a.Ma();
        var d = this.Mh.nj[c];
        if (d) {
          d.rj = 0;
          d.sj = d.sj * 1.5;
          d.tj = true;
        }
      };
      a.prototype.Li = function (a) {
        var c = a.Ma();
        var d = a.La();
        var e = this.Mh.nj[c];
        if (e) {
          e.rj = 0;
          e.sj = e.sj * 0.1;
          e.tj = true;
          var f = this.aj(d);
          if (f && f.cj) {
            this.Mh.Qh.fh;
            var g = f.Oh();
            e.oj(g._a, g.ab, false);
          }
        }
      };
      var c = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
      a.prototype.Ci = function (a) {
        var d = ooo.ud.Ic().oc;
        var e = d.getImageData(0, 0, 80, 80);
        var f = c[0];
        var g = 80 - f;
        var h = 0;
        for (var i = 0; i < 628; i++) {
          var j = a.Ka();
          for (var k = 0; k < 8; k++) {
            var l = (f + h * 80) * 4;
            if ((j >> k & 1) != 0) {
              e.data[l] = 255;
              e.data[l + 1] = 255;
              e.data[l + 2] = 255;
              e.data[l + 3] = 255;
            } else {
              e.data[l + 3] = 0;
            }
            if (++f >= g && ++h < 80) {
              g = 80 - (f = c[h]);
            }
          }
        }
        ;
        d.putImageData(e, 0, 0);
        var m = ooo.Xg.Kf.Wg.Ah.Yh;
        m.texture = ooo.ud.Ic().Za;
        m.texture.update();
      };
      a.prototype.Ei = function (a) {
        a.Ma();
      };
      a.prototype.Fi = function (a) {
        this.Mh.uj();
      };
      a.prototype.Di = function (a) {
        this.Mh.ei = a.La();
        this.Mh.oi = a.La();
        var c = new e.vj();
        c.ii = [];
        for (var d = a.Ka(), f = 0; f < d; f++) {
          var g = a.La();
          var h = a.Na();
          c.ii.push(e.vj.wj(g, h));
        }
        ;
        c.fi = [];
        if (this.Mh.Qh.eh === e.jd.id) {
          for (var i = a.Ka(), j = 0; j < i; j++) {
            var k = a.Ka();
            var l = a.Na();
            c.fi.push(e.vj.xj(k, l));
          }
        }
        ;
        ooo.Xg.Kf.Wg.Ch.Bg(c);
      };
      a.prototype.aj = function (a) {
        if (a === this.Mh.Qh.fh) {
          return this.Mh.Lh;
        } else {
          return this.Mh.li[a];
        }
      };
      a.prototype.gj = function (a, c, d) {
        return (((d & 255 | c << 8 & 65280 | a << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
      };
      a.prototype.pj = function (a) {
        return ((a & 65535) / 32768 - 1) * this.Mh.Qh.kh();
      };
      a.prototype.qj = function (a) {
        return ((a >> 16 & 65535) / 32768 - 1) * this.Mh.Qh.kh();
      };
      a.prototype.Ii = function (a) {
        var c = a.Ka();
        if ((c & 128) == 0) {
          return c;
        }
        ;
        var d = a.Ka();
        if ((d & 128) == 0) {
          return d | c << 7 & 16256;
        }
        ;
        var e = a.Ka();
        if ((e & 128) == 0) {
          return e | d << 7 & 16256 | c << 14 & 2080768;
        }
        ;
        var f = a.Ka();
        if ((f & 128) == 0) {
          return f | e << 7 & 16256 | d << 14 & 2080768 | c << 21 & 266338304;
        } else {
          return undefined;
        }
      };
      return a;
    }();
    e.yj = function () {
      function a(a) {
        this.zj = a;
      }
      a.Aj = function () {
        return new e.yj(null);
      };
      a.Bj = function (a) {
        return new e.yj(a);
      };
      a.prototype.Mc = function () {
        return this.zj;
      };
      a.prototype.Cj = function () {
        return this.zj != null;
      };
      a.prototype.Dj = function (a) {
        if (this.zj != null) {
          a(this.zj);
        }
      };
      return a;
    }();
    e.lj = function () {
      function a(a, c) {
        this.ki = a;
        this.Ej = a.ni >= 80;
        this.Fj = 0;
        this.Gj = 0;
        this.Hj = 0;
        this.Ij = 0;
        this.sj = this.Ej ? 1 : a.mj;
        this.rj = 1;
        this.tj = false;
        this.Jj = 0;
        this.Kj = 0;
        this.Lj = 1;
        this.Mj = f.S * g.ma();
        this.Nj = new e.Oj();
        this.Nj.hd(ooo.Mh.Qh.eh, this.ki.mi === e.dh.jh ? null : ooo.ud.Cc().Ub(this.ki.mi), ooo.ud.Cc().Zb(this.ki.ni));
        c.Vh(a.Je, this.Nj);
      }
      a.prototype.$i = function () {
        this.Nj.Wh.md.G();
        this.Nj.Wh.ld.G();
      };
      a.prototype.oj = function (a, c, d) {
        this.Fj = a;
        this.Gj = c;
        if (d) {
          this.Hj = a;
          this.Ij = c;
        }
      };
      a.prototype.Pj = function (a, c) {
        var d = g.ha(0.5, this.sj * 1);
        var e = g.ha(2.5, this.sj * 1.5);
        this.Jj = g.ga(this.Jj, d, c, 0.0025);
        this.Kj = g.ga(this.Kj, e, c, 0.0025);
        this.Lj = g.ga(this.Lj, this.rj, c, 0.0025);
      };
      a.prototype.Qj = function (a, c, d) {
        this.Hj = g.ga(this.Hj, this.Fj, c, 0.0025);
        this.Ij = g.ga(this.Ij, this.Gj, c, 0.0025);
        this.Nj.Bg(this, a, c, d);
      };
      a.Ti = function a() {
        this.Je = 0;
        this.mi = e.dh.jh;
        this.mj = 0;
        this.ni = 0;
      };
      return a;
    }();
    e.Oj = function () {
      function a() {
        this.Wh = new f(new e.bd(), new e.bd());
        this.Wh.md.gd.blendMode = h.k.w.z;
        this.Wh.md.gd.zIndex = d;
        this.Wh.ld.gd.zIndex = c;
      }
      var c = 500;
      var d = 100;
      a.prototype.hd = function (a, c, d) {
        var f = d.dc;
        if (f != null) {
          this.Wh.ld.kd(f);
        }
        var g = a === e.jd.id && c != null ? c.bc.ec : d.ec;
        if (g != null) {
          this.Wh.md.kd(g);
        }
      };
      a.prototype.Bg = function (a, c, d, e) {
        if (!e(a.Hj, a.Ij)) {
          this.Wh.Cd();
          return;
        }
        ;
        var f = a.Kj * (1 + g.pa(a.Mj + c / 200) * 0.3);
        if (a.Ej) {
          this.Wh.Ad(a.Hj, a.Ij, (1 + j.z * 0.2) * 2 * a.Jj, a.Lj * 1, (1 + j.z * 0.2) * 1.2 * f, a.Lj * 0.8);
        } else {
          this.Wh.Ad(a.Hj, a.Ij, a.Jj * 2, a.Lj * 1, f * 2, a.Lj * 0.3);
        }
      };
      var f = function () {
        function a(a, c) {
          this.ld = a;
          this.md = c;
        }
        a.prototype.Ad = function (a, c, d, e, f, g) {
          this.ld.Td(true);
          this.ld.Ud(a, c);
          this.ld.Bd(d);
          this.ld.Rj(e);
          this.md.Td(true);
          this.md.Ud(a, c);
          this.md.Bd(f);
          this.md.Rj(g);
        };
        a.prototype.Cd = function () {
          this.ld.Td(false);
          this.md.Td(false);
        };
        return a;
      }();
      return a;
    }();
    e.Sj = function () {
      function a() {
        this.Tj = 0;
        this.Uj = 0;
        this.Vj = 0;
        this.Wj = 0;
        this.Xj = 0;
        this.Yj = [];
      }
      function c(a, c) {
        for (var d = 0; d < a.length; d++) {
          if (parseInt(a[d][g.a("455fa3")]) === c) {
            return d;
          }
        }
        ;
        return -1;
      }
      a.prototype.Sa = function () {};
      a.prototype.Zj = function (a) {
        if (!j.loading) {
          j.pm = {
            ...this
          };
          localStorage.setItem("tmwSaveGame", JSON.stringify(j));
        }
        switch (a) {
          case e._j.$j:
            return this.Tj;
          case e._j.ak:
            return this.Uj;
          case e._j.bk:
            return this.Vj;
          case e._j.ck:
            return this.Wj;
          case e._j.dk:
            return this.Xj;
        }
        ;
        return 0;
      };
      a.prototype.ek = function () {
        return new e.Sb(this.Tj, this.Uj, this.Vj, this.Wj, this.Xj);
      };
      a.prototype.fk = function (a) {
        this.Yj.push(a);
        this.gk();
      };
      a.prototype.hk = function () {
        if (!ooo.ud.Fc()) {
          return g.wa([32, 33, 34, 35]);
        }
        ;
        var a = [];
        for (var c = ooo.ud.Gc()[g.a("1f234afbcd15d7e446216df3c828")], d = 0; d < c.length; d++) {
          var f = c[d];
          if (this.ik(f[g.a("439d21")], e._j.$j)) {
            a.push(f);
          }
        }
        ;
        if (a.length === 0) {
          return 0;
        } else {
          return a[parseInt(a.length * g.ma())][g.a("d8c07e")];
        }
      };
      a.prototype.jk = function () {
        if (ooo.ud.Fc()) {
          var a = ooo.ud.Gc()[g.a("c141289d2b77b58aa8430f952e4a")];
          var d = c(a, this.Tj);
          if (d >= 0) {
            for (var f = d + 1; f < a.length; f++) {
              if (this.ik(a[f][g.a("0a72a8")], e._j.$j) && a[f].g !== true) {
                this.Tj = a[f][g.a("21fbc7")];
                this.gk();
                return;
              }
            }
            ;
            for (var h = 0; h < d; h++) {
              if (this.ik(a[h][g.a("e7718d")], e._j.$j) && a[h].g !== true) {
                this.Tj = a[h][g.a("9e4604")];
                this.gk();
                return;
              }
            }
          }
        }
      };
      a.prototype.kk = function () {
        if (ooo.ud.Fc) {
          var a = ooo.ud.Gc()[g.a("1a58b74470ee92c3434aa05c45c3")];
          var d = c(a, this.Tj);
          if (d >= 0) {
            for (var f = d - 1; f >= 0; f--) {
              if (this.ik(a[f][g.a("8830ae")], e._j.$j) && a[f].g !== true) {
                this.Tj = a[f][g.a("29f3cf")];
                this.gk();
                return;
              }
            }
            ;
            for (var h = a.length - 1; h > d; h--) {
              if (this.ik(a[h][g.a("07516d")], e._j.$j) && a[h].g !== true) {
                this.Tj = a[h][g.a("156ff3")];
                this.gk();
                return;
              }
            }
          }
        }
      };
      a.prototype.lk = function (a, c) {
        if (!ooo.ud.Fc() || this.ik(a, c)) {
          switch (c) {
            case e._j.$j:
              if (this.Tj !== a) {
                this.Tj = a;
                this.gk();
              }
              return;
            case e._j.ak:
              if (this.Uj !== a) {
                this.Uj = a;
                this.gk();
              }
              return;
            case e._j.bk:
              if (this.Vj !== a) {
                this.Vj = a;
                this.gk();
              }
              return;
            case e._j.ck:
              if (this.Wj !== a) {
                this.Wj = a;
                this.gk();
              }
              return;
            case e._j.dk:
              if (this.Xj !== a) {
                this.Xj = a;
                this.gk();
              }
              return;
          }
        }
      };
      a.prototype.ik = function (a, c) {
        var d = this.mk(a, c);
        return d != null && (ooo.ok.nk() ? d.pk() === 0 && !d.qk() || ooo.ok.rk(a, c) : d.sk());
      };
      a.prototype.mk = function (a, d) {
        if (!ooo.ud.Fc()) {
          return null;
        }
        ;
        var f = ooo.ud.Gc();
        if (d === e._j.$j) {
          var h = c(f[g.a("d614f300b4aaee9fbf16e4188187")], a);
          if (h < 0) {
            return null;
          } else {
            return e.uk.tk(f[g.a("64c6cd5e0678d8c90dc4ea561335")][h]);
          }
        }
        ;
        var i = null;
        switch (d) {
          case e._j.ak:
            i = f[g.a("9deb663552d6ca37d1")][a];
            break;
          case e._j.bk:
            i = f[g.a("209c0d06501d229e4b8d")][a];
            break;
          case e._j.ck:
            i = f[g.a("3f1820c6871da6c2")][a];
            break;
          case e._j.dk:
            i = f[g.a("5521bb69aa393e7f1927bc64")][a];
        }
        ;
        if (i != null) {
          return e.uk.vk(i);
        } else {
          return null;
        }
      };
      a.prototype.gk = function () {
        for (var a = 0; a < this.Yj.length; a++) {
          this.Yj[a]();
        }
      };
      return a;
    }();
    e._j = function () {
      function a() {}
      a.$j = g.a("385a31c272");
      a.ak = g.a("30442bc667");
      a.bk = g.a("fbe1b2bb2bf8");
      a.dk = g.a("71a5bfe5a6b532fb");
      a.ck = g.a("5d069e44");
      return a;
    }();
    e.wk = function () {
      function a() {
        this.fn_o = c;
        this.ig = new h.k.n(h.k.m.from(g.a("d5e93ee538adbefff2ac38bd0eb090e084b50bfd47aa85fb")));
        this.F_bg = new h.k.n(c());
        var a;
        var d;
        var i;
        var j;
        var k = h.k.m.from(atob(A[23]) || f.H.N);
        var l = new h.k.n(k, new h.k.r(0, 0, 256, 256));
        var m = new h.k.n(k, new h.k.r(0, 0, 256, 256));
        this.jg = Array(16);
        for (var n = 0; n < this.jg.length; n++) {
          this.jg[n] = n % 2 == 0 ? l : m;
        }
        ;
        this.Ih = new h.k.n(((a = h.k.m.from("/images/bg-pattern-pow2-ARENA.png")).wrapMode = h.k.C.D, a));
        this.Jh = new h.k.n(((d = h.k.m.from("/images/bg-pattern-pow2-TEAM2.png")).wrapMode = h.k.C.D, d));
        this.Gh = new h.k.n(h.k.m.from(g.a("66d841940b1c490e4193556f01ad44eb11")));
        this.$f = new h.k.n(((i = h.k.m.from(f.H.O)).wrapMode = h.k.C.D, i));
        this.mc = ((j = e.d.createElement(g.a("d9293a622b2fac"))).width = 80, j.height = 80, {
          nc: j,
          oc: j[g.a("1d69faa4e27d4da0406ed3")](g.a("9b7ef9")),
          Za: new h.k.n(h.k.m[g.a("584fe8c431")](j))
        });
        this.hf = {};
        this.df = {};
        this.xk = [];
        this.yk = null;
      }
      function c(a) {
        (a = h.k.m.from(a || j.background || "/images/bg-pattern-pow2-ARENA.png")).wrapMode = h.k.C.D;
        return a;
      }
      a.prototype.Sa = function (a) {
        function c() {
          if (--d == 0) {
            a();
          }
        }
        var d = 4;
        this.hf = {};
        c();
        this.df = {};
        c();
        this.xk = [];
        c();
        this.yk = null;
        c();
      };
      return a;
    }();
    e.zk = function () {
      function a() {
        this.Ak = null;
        this.Kf = new e.Bk();
        this.Jf = new e.Ck();
        this.Dk = new e.Ek();
        this.Fk = new e.Gk();
        this.Hk = new e.Ik();
        this.Jk = new e.Kk();
        this.Lk = new e.Mk();
        this.Nk = new e.Ok();
        this.Hi = new e.Pk();
        this.Qk = new e.Rk();
        this.Sk = new e.Tk();
        this.Uk = new e.Vk();
        this.Wk = new e.Xk();
        this.Yk = new e.Zk();
        this.Re = new e.$k();
        this._k = new e.al();
        this.bl = new e.cl();
        this.dl = new e.el();
        this.fl = [];
      }
      function c(a, c) {
        if (c !== a.length + 1) {
          var d = a[c];
          g.ua(a, c + 1, c, a.length - c - 1);
          a[a.length - 1] = d;
        }
      }
      a.prototype.Sa = function () {
        this.Ak = new e.Nf(e.Uf.Tf);
        this.fl = [this.Kf, this.Jf, this.Dk, this.Fk, this.Hk, this.Jk, this.Lk, this.Nk, this.Hi, this.Qk, this.Sk, this.Uk, this.Wk, this.Yk, this.Re, this._k, this.bl, this.dl];
        for (var a = 0; a < this.fl.length; a++) {
          this.fl[a].Sa();
        }
      };
      a.prototype.Uh = function (a, c) {
        for (var d = this.fl.length - 1; d >= 0; d--) {
          this.fl[d].ug(a, c);
        }
        ;
        if (this.fl[0] !== this.Kf && this.fl[0] !== this.dl && this.Ak != null) {
          this.Ak.ug(a, c);
        }
      };
      a.prototype.qg = function () {
        for (var a = this.fl.length - 1; a >= 0; a--) {
          this.fl[a].qg();
        }
        ;
        if (this.Ak != null) {
          this.Ak.qg();
        }
      };
      a.prototype.gl = function (a) {
        var c = function d(a, c) {
          for (var e = 0; e < a.length; e++) {
            if (a[e] === c) {
              return e;
            }
          }
          ;
          return -1;
        }(this.fl, a);
        if (c >= 0) {
          this.fl[0].hl();
          (function d(a, c) {
            if (c !== 0) {
              var e = a[c];
              g.ua(a, 0, 1, c);
              a[0] = e;
            }
          })(this.fl, c);
          this.il();
        }
      };
      a.prototype.jl = function () {
        this.fl[0].hl();
        do {
          c(this.fl, 0);
        } while (this.fl[0].Wd !== e.ll.kl);
        ;
        this.il();
      };
      a.prototype.il = function () {
        var a = this.fl[0];
        a.ml();
        a.nl();
        this.ol();
      };
      a.prototype.pl = function () {
        return this.fl.length !== 0 && this.fl[0].Wd === e.ll.kl && this.Yk.ql();
      };
      a.prototype.rl = function () {
        if (this.fl.length === 0) {
          return null;
        } else {
          return this.fl[0];
        }
      };
      a.prototype.ol = function () {
        if (this.pl()) {
          this.gl(this.Yk);
        }
      };
      return a;
    }();
    e.vj = function () {
      function a() {
        this.ii = [];
        this.fi = [];
      }
      a.wj = function (a, c) {
        return {
          ji: a,
          hi: c
        };
      };
      a.xj = function (a, c) {
        return {
          gi: a,
          hi: c
        };
      };
      return a;
    }();
    e.sl = function () {
      function c() {
        this.tl = [];
        this.ul = [];
        this.vl = false;
        this.wl = h;
        this.xl = {};
      }
      var h = g.a("64d2d3521b4d");
      var i = g.a("2c1a1b9a4375");
      var k = g.a("0bda6f");
      var l = g.a("6b7b0a");
      c.yl = new (function () {
        function a() {}
        a.zl = function c(a) {
          this.Al = a;
        };
        a.prototype.Bl = function () {
          return g.a("5d3bb17484340a7a0032") != (typeof FB == "undefined" ? "undefined" : d(FB));
        };
        a.prototype.Cl = function (a, c, d) {
          var e = g.a("6851decf1cce94105f26c0a204ad9821192adfa913a2d561e33eaffce9b0") + g.a("929c35c6f5422b5ac5df33c6fb415d") + a;
          $.get(e).fail(function () {
            c();
          }).done(function () {
            d();
          });
        };
        a.prototype.Dl = function (c, d) {
          if (!this.Bl()) {
            c();
            return;
          }
          ;
          this.El(function () {
            FB.login(function (e) {
              if (e.status !== g.a("a2d00bdbc8520b4dcfdf")) {
                c();
                return;
              }
              ;
              var f = e.authResponse.accessToken;
              d(new a.zl(f));
            });
          }, function (a) {
            d(a);
          });
        };
        a.prototype.El = function (c, d) {
          var e = this;
          if (!this.Bl()) {
            c();
            return;
          }
          ;
          FB.getLoginStatus(function (f) {
            if (f.status !== g.a("e0d24d5d8a5045c38ddd")) {
              c();
              return;
            }
            ;
            var h = f.authResponse.accessToken;
            e.Cl(h, function () {
              c();
            }, function () {
              d(new a.zl(h));
            });
          });
        };
        a.prototype.Fl = function () {
          if (this.Bl()) {
            FB.logout();
          }
        };
        return a;
      }())();
      c.Gl = new (function () {
        function c() {}
        c.Hl = function d(a, c) {
          this.Al = a;
          this.Il = c;
        };
        c.prototype.Bl = function () {
          return g.a("34f018635d6f13e559e9") != d(a);
        };
        c.prototype.Dl = function (e, f) {
          if (g.a("074d671eee5ae4106a24") == d(a)) {
            e();
            return;
          }
          ;
          a.then(function () {
            if (a.isSignedIn.get()) {
              var h = a.currentUser.get();
              var i = h.getAuthResponse().id_token;
              var j = new Date().getTime() + h.getAuthResponse().expires_in * 1000;
              if (new Date().getTime() < j) {
                f(new c.Hl(i, j));
                return;
              }
            }
            ;
            a.signIn().then(function (a) {
              if (g.a("c46068f3adff6375a979") !== d(a.error) || !a.isSignedIn()) {
                e();
                return;
              }
              ;
              var h = a.getAuthResponse().id_token;
              var i = new Date().getTime() + a.getAuthResponse().expires_in * 1000;
              f(new c.Hl(h, i));
            });
          });
        };
        c.prototype.El = function (e, f) {
          if (g.a("c1472d902050ae96ac5e") == d(a)) {
            e();
            return;
          }
          ;
          a.then(function () {
            if (a.isSignedIn.get()) {
              var d = a.currentUser.get();
              var g = d.getAuthResponse().id_token;
              var h = new Date().getTime() + d.getAuthResponse().expires_in * 1000;
              if (new Date().getTime() < h) {
                f(new c.Hl(g, h));
                return;
              }
            }
            ;
            e();
          });
        };
        c.prototype.Fl = function () {
          if (g.a("4ce8e07b3547fbcd31c1") != d(a)) {
            a.signOut();
          }
        };
        return c;
      }())();
      c.prototype.Sa = function () {
        this.Jl();
      };
      c.prototype.Kl = function () {
        if (this.vl) {
          return this.xl[g.a("cf75a227214d31")];
        } else {
          return g.a("02");
        }
      };
      c.prototype.Ll = function () {
        if (this.vl) {
          return this.xl[g.a("e76d9a3f19720c338a")];
        } else {
          return g.a("23");
        }
      };
      c.prototype.Ml = function () {
        if (this.vl) {
          return this.xl[g.a("d0cf7b40bf4b77cabd")];
        } else {
          return g.a("22");
        }
      };
      c.prototype.Nl = function () {
        if (this.vl) {
          return this.xl[g.a("ef418703074507338544")];
        } else {
          return f.H.M;
        }
      };
      c.prototype.Ol = function () {
        return this.vl && this.xl[g.a("26de9bfb5f42894f")];
      };
      c.prototype.Pl = function () {
        return this.vl && this.xl[g.a("d923284f3220ac758f26247d133389")];
      };
      c.prototype.Ql = function () {
        if (this.vl) {
          return this.xl[g.a("c5d5281127c9")];
        } else {
          return 0;
        }
      };
      c.prototype.Rl = function () {
        if (this.vl) {
          return this.xl[g.a("d0cd7755b149")];
        } else {
          return 1;
        }
      };
      c.prototype.Sl = function () {
        if (this.vl) {
          return this.xl[g.a("feeab8e14d7d887070f2a4")];
        } else {
          return 0;
        }
      };
      c.prototype.Tl = function () {
        if (this.vl) {
          return this.xl[g.a("24101e877c96241e5409")];
        } else {
          return 50;
        }
      };
      c.prototype.Ul = function () {
        if (this.vl) {
          return this.xl[g.a("b5d55c0157e3df")];
        } else {
          return 0;
        }
      };
      c.prototype.Vl = function () {
        if (this.vl) {
          return this.xl[g.a("6e9a496401ca50")];
        } else {
          return 0;
        }
      };
      c.prototype.Wl = function () {
        if (this.vl) {
          return this.xl[g.a("5844f5de28c5d74b")];
        } else {
          return 0;
        }
      };
      c.prototype.Xl = function () {
        if (this.vl) {
          return this.xl[g.a("4a3c603c3dac75921b07")];
        } else {
          return 0;
        }
      };
      c.prototype.Yl = function () {
        if (this.vl) {
          return this.xl[g.a("06ffa9ed437f")];
        } else {
          return 0;
        }
      };
      c.prototype.Zl = function () {
        if (this.vl) {
          return this.xl[g.a("21faca33cdc544375bff")];
        } else {
          return 0;
        }
      };
      c.prototype.$l = function () {
        if (this.vl) {
          return this.xl[g.a("cab9e9aeba0ce513a48ae284ba33f104bfb8f98e")];
        } else {
          return 0;
        }
      };
      c.prototype._l = function () {
        if (this.vl) {
          return this.xl[g.a("b783d046579f")];
        } else {
          return 0;
        }
      };
      c.prototype.am = function () {
        if (this.vl) {
          return this.xl[g.a("c31ca0d7232b21d5bf0f")];
        } else {
          return 0;
        }
      };
      c.prototype.bm = function () {
        if (this.vl) {
          return this.xl[g.a("9b3ff8fd6c394efcd004c9f75e3d4d")];
        } else {
          return 0;
        }
      };
      c.prototype.cm = function () {
        if (this.vl) {
          return this.xl[g.a("6045cdc705d9f65b0940fed201d8fd5a13")];
        } else {
          return 0;
        }
      };
      c.prototype.dm = function () {
        if (this.vl) {
          return this.xl[g.a("13b67061d3a9ed6f")];
        } else {
          return {};
        }
      };
      c.prototype.em = function (a) {
        this.tl.push(a);
        a();
      };
      c.prototype.fm = function (a) {
        this.ul.push(a);
        a();
      };
      c.prototype.rk = function (a, c) {
        var d = this.xl[g.a("e92a19731d3b9d54882e1a5701")].concat(j.pL || []);
        if (d == null) {
          return false;
        }
        ;
        for (i = 0; i < d.length; i++) {
          var e = d[i];
          if (e[g.a("ae5614")] == a && e[g.a("b0f58b73d1")] === c) {
            return true;
          }
        }
        ;
        return false;
      };
      c.prototype.nk = function () {
        return this.vl;
      };
      c.prototype.gm = function () {
        return this.wl;
      };
      c.prototype.hm = function (a) {
        var c = this;
        var d = this.Kl();
        var f = this.Ql();
        var h = this.Rl();
        this.im(function () {
          if (a != null) {
            a();
          }
        }, function (i) {
          c.xl = i[g.a("f43045a28a965e2a882c")];
          c.jm();
          var j = c.Kl();
          var k = c.Ql();
          var l = c.Rl();
          if (d === j) {
            if (l > 1 && l !== h) {
              ooo.Xg.Yk.km(new e.lm(l));
            }
            var m = k - f;
            if (m >= 20) {
              ooo.Xg.Yk.km(new e.mm(m));
            }
          }
          ;
          if (a != null) {
            a();
          }
        });
      };
      c.prototype.im = function (a, c) {
        var d = f.H.J + g.a("d648e81cb8c4eb98b70b8f") + this.wl + g.a("adb1480545f7c001c7e2561c58");
        g.Aa(d, a, function (d) {
          if (d[g.a("d8ca754fb9")] !== 1200) {
            a();
          } else {
            c(d);
          }
        });
      };
      c.prototype.nm = function (a, c, d, e) {
        var h = f.H.J + g.a("4cb2fe6a320ee5d63dc1b9") + this.wl + g.a("3ee062a43b03763a36b27aad33") + g.a("33db5c428a") + a + g.a("eaddd8849e1a8d") + c;
        g.Aa(h, function () {
          d();
        }, function (a) {
          if (a[g.a("9fb3ce7646")] !== 1200) {
            d();
          } else {
            e();
          }
        });
      };
      c.prototype.om = function (a, c) {
        var d = f.H.J + g.a("706ec2b616eac132112d95") + this.wl + g.a("17677deff729e9eb5e3342fdd63ad1");
        g.Aa(d, a, function (d) {
          if (d[g.a("72e05be113")] !== 1200) {
            a();
          } else {
            c();
          }
        });
      };
      c.prototype.pm = function (a) {
        var d = this;
        if (this.vl) {
          this.qm();
        }
        c.yl.Dl(function () {
          a();
        }, function (c) {
          d.rm(k, c.Al, a);
        });
      };
      c.prototype.sm = function (a) {
        var d = this;
        if (this.vl) {
          this.qm();
        }
        c.Gl.Dl(function () {
          a();
        }, function (c) {
          d.rm(l, c.Al, a);
        });
      };
      c.prototype.rm = function (a, c, d) {
        var e = this;
        var h = a + g.a("c44a") + c;
        var i = f.H.J + g.a("dde12fe503fd94e18cb248") + h + g.a("5d61b37f863b0d");
        g.Aa(i, function () {
          e.tm();
        }, function (f) {
          if (f[g.a("ae5c1f25d7")] !== 1200) {
            e.tm();
          } else {
            e.um(a, c, f[g.a("bddb4c1533eda715b1d7")]);
            if (d != null) {
              d();
            }
          }
        });
      };
      c.prototype.qm = function () {
        try {
          this.vm();
          this.wm();
        } catch (a) {}
        ;
        this.xm();
      };
      c.prototype.ym = function () {
        if (this.vl) {
          this.om(function () {}, function () {});
        }
      };
      c.prototype.tm = function () {
        ooo.Xg.gl(ooo.Xg._k);
      };
      c.prototype.um = function (a, c, d) {
        var f = this;
        md(d, function (d) {
          var h = f.vl ? f.xl[g.a("8d0b7c2563cbf7")] : d;
          f.vl = true;
          f.wl = a + g.a("622c") + c;
          f.xl = d;
          e.Cg.Ng(e.Cg.Hg, a, 60);
          if (h !== f.xl[g.a("08ac393e7e142a")]) {
            f.zm();
          } else {
            f.jm();
          }
          ooo.Xp(true, true);
          j.loading = false;
        });
      };
      c.prototype.xm = function () {
        var a = this.vl ? this.xl[g.a("2a4e9f585cf694")] : i;
        this.vl = false;
        this.wl = h;
        this.xl = {};
        e.Cg.Ng(e.Cg.Hg, g.a("ba"), 60);
        if (a !== this.xl[g.a("e1271071171f83")]) {
          this.zm();
        } else {
          this.jm();
        }
      };
      c.prototype.Jl = function () {
        var a = e.Cg.Og(e.Cg.Hg);
        var d = this;
        if (k === a) {
          var f = 1;
          (function a() {
            if (!c.yl.Bl() && f++ < 5) {
              g.Y(a, 1000);
              return;
            }
            ;
            c.yl.El(function () {}, function (a) {
              d.rm(k, a.Al);
            });
          })();
        } else if (l === a) {
          var h = 1;
          (function a() {
            if (!c.Gl.Bl() && h++ < 5) {
              g.Y(a, 1000);
              return;
            }
            ;
            c.Gl.El(function () {}, function (a) {
              d.rm(l, a.Al);
            });
          })();
        }
      };
      c.prototype.zm = function () {
        for (var a = 0; a < this.tl.length; a++) {
          this.tl[a]();
        }
        ;
        this.jm();
      };
      c.prototype.jm = function () {
        for (var a = 0; a < this.ul.length; a++) {
          this.ul[a]();
        }
      };
      c.prototype.vm = function () {
        c.yl.Fl();
      };
      c.prototype.wm = function () {
        c.Gl.Fl();
      };
      return c;
    }();
    e.Sf = function () {
      function a(a, c, d) {
        this.Of = d;
        this.Rd = false;
        this.Yc = new h.k.l();
        this.Yc.visible = false;
        this.Am = Array(a);
        for (var f = 0; f < this.Am.length; f++) {
          var g = new e.Bm(new h.j(c * 3));
          g.Cm(c);
          this.Am[f] = g;
          this.Yc.addChild(g.ag());
        }
        ;
        this.Pf = 1;
        this.Qf = 1;
        this.qg();
      }
      a.prototype.ag = function () {
        return this.Yc;
      };
      a.prototype.rg = function (a) {
        this.Rd = a;
        this.Yc.visible = a;
      };
      a.prototype.qg = function () {
        this.Pf = this.Of[g.a("69ad82f899b6")]();
        this.Qf = this.Of[g.a("3b845847d898b5")]();
        var a = this.Qf / 30;
        for (var c = 0; c < this.Am.length; c++) {
          this.Am[c].Dm(a);
        }
      };
      a.prototype.Bg = function () {
        if (this.Rd) {
          for (var a = 0; a < this.Am.length; a++) {
            this.Am[a].Bg(this.Vf);
          }
        }
      };
      a.prototype.Em = function () {
        return this.Pf;
      };
      a.prototype.Fm = function () {
        return this.Qf;
      };
      a.prototype.xg = function (a, c) {
        this.Am[a].Gm(c);
      };
      a.prototype.yg = function (a, c) {
        this.Am[a].Hm(c);
      };
      a.prototype.zg = function (a, c, d) {
        var e = this.Am[a];
        for (var f = e.Im(), g = e.Jm, h = 0; h < f; h++) {
          g[h * 3] = c;
          g[h * 3 + 1] = d;
          g[h * 3 + 2] = 0;
        }
      };
      a.prototype.Ag = function (a, c, d) {
        var e;
        var f;
        var h = this.Am[a];
        var i = h.Im();
        var j = h.Jm;
        var k = h.Km();
        var l = j[0];
        var m = j[1];
        var n = c - l;
        var o = d - m;
        var p = g.la(n, o);
        if (p > 0) {
          j[0] = c;
          j[1] = d;
          j[2] = g.ta(o, n);
          var q = k * 0.25 / (k * 0.25 + p);
          var r = 1 - q * 2;
          for (var s = 1, t = i; s < t; s++) {
            e = j[s * 3];
            j[s * 3] = j[s * 3 - 3] * r + (e + l) * q;
            l = e;
            f = j[s * 3 + 1];
            j[s * 3 + 1] = j[s * 3 - 2] * r + (f + m) * q;
            m = f;
            j[s * 3 + 2] = g.ta(j[s * 3 - 2] - j[s * 3 + 1], j[s * 3 - 3] - j[s * 3]);
          }
        }
      };
      return a;
    }();
    e.Lm = function () {
      function a(a) {
        var f;
        var i = this;
        this.Of = a;
        this.nc = a.get()[0];
        this.Vf = ((f = {})[g.a("5d38b67596")] = i.nc, f[g.a("34f10466567a0aea4ee8107b")] = true, new h.k.o(f));
        this.Rd = false;
        this.Mm = new e.Bm(new h.j(c * 3));
        this.Pf = 1;
        this.Qf = 1;
        this.Nm = d.Om;
        this.Pm = d.Om;
        this.Qm = d.Om;
        this.Rm = d.Om;
        this.Sm = d.Om;
        this.qg();
        ooo.ud.Jc(function () {
          i.Mm.Tm();
        });
      }
      var c = g.ha(100, e.Xc.fd);
      var d = {
        Om: g.a("0c6d22ab20"),
        Um: g.a("7cfdd23bb1"),
        Vm: g.a("3273983104")
      };
      a.prototype.rg = function (a) {
        this.Rd = a;
      };
      a.prototype.qg = function () {
        var a = g.e();
        this.Pf = this.Of[g.a("51b5bae0a1ae")]();
        this.Qf = this.Of[g.a("28910f124b151a")]();
        this.Vf.resize(this.Pf, this.Qf);
        this.Vf.resolution = a;
        this.nc.width = a * this.Pf;
        this.nc.height = a * this.Qf;
        var d = this.Qf / 4;
        this.Mm.Dm(d);
        var e = g.fa(g._(this.Pf / d) * 2 - 5, 1, c);
        this.Mm.Cm(e);
      };
      a.prototype.ug = function () {
        if (this.Rd) {
          var a = g.Ca() / 200;
          var c = g.oa(a);
          this.Mm.Wm(this.Xm(this.Nm, c), this.Ym(this.Nm, c));
          this.Mm.Zm(this.$m(this.Pm, c), this.$m(this.Qm, c), this.$m(this.Rm, c), this.$m(this.Sm, c));
          var d = this.Mm.Km();
          for (var e = this.Mm.Im(), h = this.Mm.Jm, i = this.Pf - (this.Pf - d * 0.5 * (e - 1)) * 0.5, j = this.Qf * 0.5, k = 0, l = 0, m = -1; m < e; m++) {
            var n = m;
            var o = g.pa(n * 1 / 12 * f.T - a) * (1 - g.ra(16, n * -1 / 12));
            if (m >= 0) {
              h[m * 3] = i - d * 0.5 * n;
              h[m * 3 + 1] = j + d * 0.5 * o;
              h[m * 3 + 2] = g.ta(l - o, n - k);
            }
            k = n;
            l = o;
          }
          ;
          this.Mm.Bg();
          this.Mm._m(this.Vf);
        }
      };
      a.prototype.Gm = function (a) {
        this.Mm.Gm(a);
      };
      a.prototype.an = function (a) {
        this.Nm = a ? d.Vm : d.Um;
        this.Pm = d.Om;
        this.Qm = d.Om;
        this.Rm = d.Om;
        this.Sm = d.Om;
      };
      a.prototype.bn = function (a) {
        this.Nm = d.Om;
        this.Pm = a ? d.Vm : d.Um;
        this.Qm = d.Om;
        this.Rm = d.Om;
        this.Sm = d.Om;
      };
      a.prototype.cn = function (a) {
        this.Nm = d.Om;
        this.Pm = d.Om;
        this.Qm = a ? d.Vm : d.Um;
        this.Rm = d.Om;
        this.Sm = d.Om;
      };
      a.prototype.dn = function (a) {
        this.Nm = d.Om;
        this.Pm = d.Om;
        this.Qm = d.Om;
        this.Rm = a ? d.Vm : d.Um;
        this.Sm = d.Om;
      };
      a.prototype.en = function (a) {
        this.Nm = d.Om;
        this.Pm = d.Om;
        this.Qm = d.Om;
        this.Rm = d.Om;
        this.Sm = a ? d.Vm : d.Um;
      };
      a.prototype.Xm = function (a, c) {
        switch (a) {
          case d.Um:
            return 0.9 + c * 0.1;
          case d.Vm:
            return 0.4 + c * 0.3;
        }
        ;
        return 1;
      };
      a.prototype.Ym = function (a, c) {
        switch (a) {
          case d.Um:
            return 0.6 + c * 0.5;
          case d.Vm:
            return 0.3 + c * 0.3;
        }
        ;
        return 1;
      };
      a.prototype.$m = function (a, c) {
        switch (a) {
          case d.Um:
            return 0.9 + c * 0.1;
          case d.Vm:
            return 0.6 + c * 0.4;
        }
        ;
        return 1;
      };
      return a;
    }();
    e.uk = function () {
      function a(a, c, d, e, f) {
        this.gn = a;
        this.hn = c;
        this.in = d;
        this.jn = e;
        this.kn = f;
      }
      a.tk = function (c) {
        return new a(c[g.a("16d7aac0794e")], c[g.a("06f0bdfc796f")], c[g.a("4cf3e1713254ebc236c9f3")], c[g.a("e29dcb9b8402d1188897c9be8f0ac3e4")], c[g.a("241103844b8b030b58140191")]);
      };
      a.vk = function (c) {
        return new a(c[g.a("818271dd6693")], c[g.a("a0169796d781")], c[g.a("6a1543130c8a496010ef51")], c[g.a("7669576718fe45ec1c632552e3e637f0")], c[g.a("d44173d4bbdb735ba84471c1")]);
      };
      a.prototype.pk = function () {
        return this.gn;
      };
      a.prototype.sk = function () {
        return this.hn;
      };
      a.prototype.qk = function () {
        return this.in;
      };
      a.prototype.ln = function () {
        return this.jn;
      };
      a.prototype.mn = function () {
        return this.kn;
      };
      return a;
    }();
    e.Zf = function () {
      function a(a) {
        this.nn = {};
        this.nn[i] = a;
        var c = h.k.q.from(m, n, this.nn);
        this._f = new h.k.v(l, c);
        this._f.blendMode = h.k.w.B;
      }
      var c = g.a("ae5e411e") + g.xa();
      var d = g.a("d8c82874") + g.xa();
      var e = g.a("cb08bfdf21f33da3a7edbaa81ae92db8b2f4");
      var f = g.a("feffb2fe6876a7616ff8a6d46b6fbe7476");
      var i = g.a("1edad3ee") + g.xa();
      var j = g.a("b31181f9") + g.xa();
      var k = g.a("9017e3bc") + g.xa();
      var l = new h.k.u().addAttribute(c, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2).addAttribute(d, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2);
      var m = g.a("8e6f2244f1ca27ccf9497844ffcf35d8f35f4057cedc05c19d561c4dd8d20ec8da5a5037d7a046e5").concat(c, g.a("b43e97f3ccfb9369c9799bafb6f46121e4")).concat(d, g.a("29a1de32c4f840125c82de05c19517")).concat(e, g.a("d41e63c9b1cf7559b10d73ce948202")).concat(f, g.a("6248511b0f91478b075b5a180dcb10")).concat(j, g.a("5812ecca2ed4f7410711d4d6078786")).concat(k, g.a("8aa02ff2e06c2401f4cf3bc4e2070a66cef41de3d963256ee6f6238891195d02c9d402ceda1f162ddda200e5e4082c16f9842ff0dd20f379909cd08a8719cf158f84c8988970a159e2cda4cfe049aa51e9daa4d8ed5f9740d5ca91cdd05e931a8595df89ce19dcee93779457b9d3e7dab345817e97e1e8c34d479b5448d084dc555f895a21aee8913c13fe133895e09a2b13e91e2e98d1861b06dc030f8c9ed6435fcc504fd69ee91b389329699797ba533f952250f276b421672c7d")).concat(f, g.a("b34e")).concat(e, g.a("5803ecce3f9eb6")).concat(c, g.a("5d62ee3ed17b4a3a1d2fcb28c76a472d436ec61b870710105539a44b8b0f1e422d0f8d516c01be")).concat(j, g.a("67a31fbf88aecdab199d")).concat(d, g.a("ab67dbfb4c5211cfc6088896195d13dcde0f8f86602322c0a611abe6260a28d7b852b59467df02a1a1e1b0a807e92babb6fff3b972a14fe2cabfd4f857b4368988ee88bb01f0109092c986c80e8251b5a8cf8f8b1aded19371d56885a9c2a4cb258c24d5beeea12b28b27065a5e8ef3826e46878b2a6c47111fc153892f499341ef50434c295dd0802ca07138c9e8b174d895e1c9786f31c3bde177993a78a7518d13b0ce179fb101c500a159e46f53c692225648d5fb50d305d2b7d912ac723414e220ab063be315a0e0303941ad15b571e54558a463c04b10f")).concat(k, g.a("34b803710374"));
      var n = g.a("1576e5adfa6368a57260bfb8c8754ba40570cbb7c86e10aa4c6cd689df451392504585c8").concat(k, g.a("648ed359015fc5c9019ddd5e1d31dea606f7f267")).concat(i, g.a("8aa03af2e77b704cf3ca3a8dbf5c3f45c5ed2eccf96c0f5dcdc159c1c34f1c4cd8de5ef986")).concat(i, g.a("904d")).concat(k, g.a("928a6fd8"));
      a.prototype.tg = function (a, c) {
        this._f.scale.x = a;
        this._f.scale.y = c;
        this.nn[j] = [a, c, 1 / a + 1, 1 / c + 1];
      };
      return a;
    }();
    e.th = function () {
      function a() {
        this.nn = {};
        this.nn[i] = [1, 0.5, 0.25, 0.5];
        this.nn[j] = h.k.n.WHITE;
        this.nn[k] = [0, 0];
        this.nn[l] = [0, 0];
        var a = h.k.q.from(o, p, this.nn);
        this._f = new h.k.v(n, a);
      }
      var c = g.a("c315f4e9") + g.xa();
      var d = g.a("84b4f408") + g.xa();
      var e = g.a("bc798ceeaee26e72b07c69f985f87e69a565");
      var f = g.a("e3e497b90dfd0aae82f383930ed4038b8b");
      var i = g.a("5cd8ad70") + g.xa();
      var j = g.a("7b594931") + g.xa();
      var k = g.a("2d6b9abf") + g.xa();
      var l = g.a("74b08018") + g.xa();
      var m = g.a("8027f38c") + g.xa();
      var n = new h.k.u().addAttribute(c, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(d, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
      var o = g.a("8344f71364517a13e452ad136a2478f7fe34b5e07b2778fea02de9fa6d3943e7d73185e0423b1bba").concat(c, g.a("a28805c1d245015bdfcf099dd85a137392")).concat(d, g.a("557da266b02c347e306eb271956143")).concat(e, g.a("3a70892357a96fa32f73693432e428")).concat(f, g.a("c9013d9d3f47a66eb66225613674f7")).concat(m, g.a("47433fd5a218edd32ee93feafaff")).concat(m, g.a("a844")).concat(d, g.a("3ef467bd1d036b262fa361b624667a382deb38c9")).concat(f, g.a("3a61")).concat(e, g.a("29b0dd39cead07")).concat(c, g.a("419ef25af59f6e5631c3e74ce38e63b17ff2fabfa8"));
      var p = g.a("b6370a2cd9a20fa4d121a039abb4eca5e631e436abafb7abaf2de908bc84b493b304aa49").concat(m, g.a("57b32ca4b2eab2bc32b017b780a0c5")).concat(i, g.a("afdbc44c5a825a54dac8ca4b569c514bcdc28512")).concat(j, g.a("bc368be1a9f76d61a93570f2abab2a")).concat(k, g.a("fa30c96397e9afe36f33b27065a5e8")).concat(l, g.a("501ae4cc3dc1b64a3940f48375d6f9433f77d0d203f6c95b074b97cf09c5da4a022480875c")).concat(j, g.a("c358")).concat(m, g.a("b0ab")).concat(k, g.a("b7c3")).concat(l, g.a("863e6229a4a867")).concat(i, g.a("cc336fb5a6c47117fc")).concat(i, g.a("f22dc66294ab88a7ca228770"));
      a.prototype.nd = function (a, c, d, e) {
        var f = this.nn[i];
        f[0] = a;
        f[1] = c;
        f[2] = d;
        f[3] = e;
      };
      a.prototype.Hh = function (a) {
        this.nn[j] = a;
      };
      a.prototype.Bg = function (a, c, d, e) {
        this._f.position.x = a;
        this._f.position.y = c;
        this._f.scale.x = d;
        this._f.scale.y = e;
        var f = this.nn[k];
        f[0] = d * 0.2520615384615385;
        f[1] = e * 0.4357063736263738;
        var g = this.nn[l];
        g[0] = a * 0.2520615384615385;
        g[1] = c * 0.4357063736263738;
      };
      return a;
    }();
    e.bd = function () {
      function a() {
        this.gd = new h.k.s();
        this.pn = 0;
        this.qn = 0;
      }
      a.prototype.kd = function (a) {
        this.gd.texture = a.nb();
        this.gd.anchor.set(a.hb, a.ib);
        this.pn = a.jb;
        this.qn = a.kb;
      };
      a.prototype.nd = function (a) {
        this.gd.tint = parseInt(a.substring(1), 16);
      };
      a.prototype.Bd = function (a) {
        this.gd.width = a * this.pn;
        this.gd.height = a * this.qn;
      };
      a.prototype.Vd = function (a) {
        this.gd.rotation = a;
      };
      a.prototype.Ud = function (a, c) {
        this.gd.position.set(a, c);
      };
      a.prototype.Td = function (a) {
        this.gd.visible = a;
      };
      a.prototype.Qd = function () {
        return this.gd.visible;
      };
      a.prototype.Rj = function (a) {
        this.gd.alpha = a;
      };
      a.prototype.zd = function () {
        return this.gd;
      };
      a.prototype.G = function () {
        h.k.F.G(this.gd);
      };
      return a;
    }();
    e.Ui = function () {
      function a(a) {
        this.Qh = a;
        this.ki = new e.Ui.Ti();
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
        this.sn = new h.j(c * 2);
        this.tn = new h.j(c * 2);
        this.Jd = new h.j(c * 2);
        this.un = null;
        this.vn = null;
        this.wn = null;
        this.xn();
      }
      var c = 200;
      a.prototype.$i = function () {
        if (this.vn != null) {
          h.k.F.G(this.vn.Yc);
        }
        if (this.wn != null) {
          h.k.F.G(this.wn);
        }
      };
      a.prototype.xn = function () {
        this.fj(0.25);
        this.ki.Xa = g.a("e9");
        this.bj = true;
        this.Nd = {};
        this.Td(false);
      };
      a.prototype.Zi = function (a) {
        this.ki = a;
        this.yn(this.cj);
      };
      a.prototype.Td = function (a) {
        var c = this.cj;
        this.cj = a;
        this.yn(c);
      };
      a.prototype.fj = function (a) {
        this.hi = a * 50;
        var d = a;
        if (a > this.Qh.hh) {
          d = g.sa((a - this.Qh.hh) / this.Qh.ih) * this.Qh.ih + this.Qh.hh;
        }
        var e = g.qa(g.ra(d * 5, 0.707106781186548) * 4 + 25);
        var f = g.ha(c, g.ia(3, (e - 5) * 5 + 1));
        var h = this.Kd;
        this.Id = (5 + e * 0.9) * 0.025;
        this.Kd = g._(f);
        this.rn = f - this.Kd;
        if (h > 0 && h < this.Kd) {
          var i = this.sn[h * 2 - 2];
          var j = this.sn[h * 2 - 1];
          var k = this.tn[h * 2 - 2];
          var l = this.tn[h * 2 - 1];
          var m = this.Jd[h * 2 - 2];
          var n = this.Jd[h * 2 - 1];
          for (var o = h; o < this.Kd; o++) {
            this.sn[o * 2] = i;
            this.sn[o * 2 + 1] = j;
            this.tn[o * 2] = k;
            this.tn[o * 2 + 1] = l;
            this.Jd[o * 2] = m;
            this.Jd[o * 2 + 1] = n;
          }
        }
      };
      a.prototype.kj = function (a, c) {
        this.Kd = c;
        for (var d = 0; d < this.Kd; d++) {
          this.sn[d * 2] = this.tn[d * 2] = this.Jd[d * 2] = a();
          this.sn[d * 2 + 1] = this.tn[d * 2 + 1] = this.Jd[d * 2 + 1] = a();
        }
      };
      a.prototype.hj = function (a, c, d) {
        this.Fd = d;
        for (var e = 0; e < this.Kd; e++) {
          this.sn[e * 2] = this.tn[e * 2];
          this.sn[e * 2 + 1] = this.tn[e * 2 + 1];
        }
        ;
        var f = a - this.tn[0];
        var g = c - this.tn[1];
        this.zn(f, g, this.Kd, this.tn);
      };
      a.prototype.zn = function (a, c, d, e) {
        var f = g.la(a, c);
        if (f > 0) {
          var h;
          var i = e[0];
          e[0] += a;
          var j;
          var k = e[1];
          e[1] += c;
          var l = this.Id / (this.Id + f);
          var m = 1 - l * 2;
          for (var n = 1, o = d - 1; n < o; n++) {
            h = e[n * 2];
            e[n * 2] = e[n * 2 - 2] * m + (h + i) * l;
            i = h;
            j = e[n * 2 + 1];
            e[n * 2 + 1] = e[n * 2 - 1] * m + (j + k) * l;
            k = j;
          }
          ;
          m = 1 - (l = this.rn * this.Id / (this.rn * this.Id + f)) * 2;
          e[d * 2 - 2] = e[d * 2 - 4] * m + (e[d * 2 - 2] + i) * l;
          e[d * 2 - 1] = e[d * 2 - 3] * m + (e[d * 2 - 1] + k) * l;
        }
      };
      a.prototype.Oh = function () {
        return {
          _a: this.Jd[0],
          ab: this.Jd[1]
        };
      };
      a.prototype.dj = function (a, c) {
        var d = 1000000;
        var e = a;
        var f = c;
        for (var h = 0; h < this.Kd; h++) {
          var i = this.Jd[h * 2];
          var j = this.Jd[h * 2 + 1];
          var k = g.la(a - i, c - j);
          if (k < d) {
            d = k;
            e = i;
            f = j;
          }
        }
        ;
        return {
          _a: e,
          ab: f,
          ej: d
        };
      };
      a.prototype._i = function (a) {
        this.un = a;
      };
      a.prototype.Pj = function (a, c) {
        this.Lj = g.ga(this.Lj, this.bj ? this.Fd ? 0.9 + g.pa(a / 400 * f.T) * 0.1 : 1 : 0, c, 1 / 800);
        this.Ld = g.ga(this.Ld, this.bj ? this.Fd ? 1 : 0 : 1, c, 0.0025);
        if (this.vn != null) {
          this.vn.Yc.alpha = this.Lj;
        }
        if (this.wn != null) {
          this.wn.alpha = this.Lj;
        }
      };
      a.prototype.Qj = function (a, c, d, e) {
        if (this.cj && this.bj) {
          var f = g.ra(0.11112, c / 95);
          for (var h = 0; h < this.Kd; h++) {
            var i = g.ka(this.sn[h * 2], this.tn[h * 2], d);
            var j = g.ka(this.sn[h * 2 + 1], this.tn[h * 2 + 1], d);
            this.Jd[h * 2] = g.ka(i, this.Jd[h * 2], f);
            this.Jd[h * 2 + 1] = g.ka(j, this.Jd[h * 2 + 1], f);
          }
        }
        ;
        if (this.vn != null && this.cj) {
          this.vn.Hd(this, a, c, e);
        }
        if (this.wn != null) {
          this.wn.Rh.x = this.Jd[0];
          this.wn.Rh.y = this.Jd[1] - this.Id * 3;
        }
      };
      a.prototype.yn = function (a) {
        if (this.cj) {
          if (!a) {
            this.An();
          }
        } else {
          if (this.vn != null) {
            h.k.F.G(this.vn.Yc);
          }
          if (this.wn != null) {
            h.k.F.G(this.wn);
          }
        }
      };
      a.prototype.An = function () {
        if (this.vn == null) {
          this.vn = new e.Xc();
        } else {
          h.k.F.G(this.vn.Yc);
        }
        this.vn.hd(ooo.Mh.Qh.eh, ooo.ud.Cc().Ub(this.ki.mi), ooo.ud.Cc().Tb(this.ki.ni), ooo.ud.Cc().Vb(this.ki.Vi), ooo.ud.Cc().Wb(this.ki.Wi), ooo.ud.Cc().Xb(this.ki.Xi), ooo.ud.Cc().Yb(this.ki.Yi), g.a("1525f1aeff6c7daa"));
        if (this.wn == null) {
          this.wn = new e.Bn(g.a("20"));
          this.wn.style.fontFamily = g.a("64e5f2640957d9");
          this.wn.anchor.set(0.5);
        } else {
          h.k.F.G(this.wn);
        }
        this.wn.style.fontSize = 14;
        this.wn.style.fill = ooo.ud.Cc().Tb(this.ki.ni).cc;
        this.wn.text = this.ki.Xa;
        this.un.Xh(this.ki.Je, this.vn, this.wn);
        if (i.n != null && i.n.Je == this.ki.Je) {
          i.vj = this.wn;
          let a = j.sg.indexOf(i.n.ni);
          if (a == -1) {
            if (j.ig != -1) {
              j.ig = -1;
            }
          } else {
            j.ig = j.gg[a].s;
            j.re = false;
            _c();
          }
        }
      };
      a.Ti = function a() {
        this.Je = 0;
        this.mi = e.dh.jh;
        this.ni = 0;
        this.Vi = 0;
        this.Wi = 0;
        this.Xi = 0;
        this.Yi = 0;
        this.Xa = g.a("1d");
      };
      return a;
    }();
    e.Bn = g.ca(h.k.t, function (a, c, d) {
      h.k.t.call(this, a, c, d);
      this.Rh = {
        x: 0,
        y: 0
      };
    });
    e.Sb = function () {
      function a(a, c, d, e, f) {
        this.Tj = a;
        this.Uj = c;
        this.Vj = d;
        this.Wj = e;
        this.Xj = f;
      }
      a.prototype.Cn = function (c) {
        return new a(c, this.Uj, this.Vj, this.Wj, this.Xj);
      };
      a.prototype.Dn = function (c) {
        return new a(this.Tj, c, this.Vj, this.Wj, this.Xj);
      };
      a.prototype.En = function (c) {
        return new a(this.Tj, this.Uj, c, this.Wj, this.Xj);
      };
      a.prototype.Fn = function (c) {
        return new a(this.Tj, this.Uj, this.Vj, c, this.Xj);
      };
      a.prototype.Gn = function (c) {
        return new a(this.Tj, this.Uj, this.Vj, this.Wj, c);
      };
      return a;
    }();
    e.Bm = function () {
      function a(a) {
        this.Hn = new e.Xc();
        this.Hn.Yc.addChild(this.Hn.Zc);
        this.In = null;
        this.Jn = null;
        this.Jm = a;
        this.$c = 0;
        this.mj = 1;
        this.Kn = 1;
        this.Ln = 1;
        this.Mn = 1;
        this.Nn = 1;
        this.On = 1;
        this.Pn = 1;
        this.Hm(g.a("4bdf2b58a966b724"));
      }
      var c = new e.Sb(0, 0, 0, 0, 0);
      a.prototype.ag = function () {
        return this.Hn.Yc;
      };
      a.prototype.Cm = function (a) {
        this.$c = a;
        if (this.Hn.$c !== a) {
          for (var c = a; c < this.Hn._c.length; c++) {
            this.Hn._c[c].Cd();
          }
          ;
          while (this.Hn.$c > a) {
            this.Hn.$c -= 1;
            var d = this.Hn._c[this.Hn.$c];
            d.md.G();
            d.ld.G();
          }
          ;
          while (this.Hn.$c < a) {
            var e = this.Hn._c[this.Hn.$c];
            this.Hn.$c += 1;
            this.Hn.Yc.addChild(e.ld.zd());
            this.Hn.Yc.addChild(e.md.zd());
            e.ld.Rj(this.Kn);
            e.md.Rj(this.Ln);
          }
          ;
          for (var f = 0; f < this.Hn.Zc.od.length; f++) {
            this.Hn.Zc.od[f].Rj(this.Mn);
          }
          ;
          for (var g = 0; g < this.Hn.Zc.pd.length; g++) {
            this.Hn.Zc.pd[g].Rj(this.Nn);
          }
          ;
          for (var h = 0; h < this.Hn.Zc.rd.length; h++) {
            this.Hn.Zc.rd[h].Rj(this.On);
          }
          ;
          for (var i = 0; i < this.Hn.Zc.qd.length; i++) {
            this.Hn.Zc.qd[i].Rj(this.Pn);
          }
        }
      };
      a.prototype.Im = function () {
        return this.$c;
      };
      a.prototype.Gm = function (a) {
        this.In = a;
        this.Jn = g.a("9a883acbf8490657");
        this.Tm();
      };
      a.prototype.Hm = function (a) {
        this.In = c;
        this.Jn = a;
        this.Tm();
      };
      a.prototype.Tm = function () {
        this.Hn.hd(e.jd.ch, null, ooo.ud.Cc().Tb(this.In.Tj), ooo.ud.Cc().Vb(this.In.Uj), ooo.ud.Cc().Wb(this.In.Vj), ooo.ud.Cc().Xb(this.In.Xj), ooo.ud.Cc().Yb(this.In.Wj), this.Jn);
      };
      a.prototype.Dm = function (a) {
        this.mj = a;
      };
      a.prototype.Km = function () {
        return this.mj;
      };
      a.prototype.Wm = function (a, c) {
        this.Kn = a;
        this.Ln = c;
        for (var d = 0; d < this.$c; d++) {
          var e = this.Hn._c[d];
          e.ld.Rj(this.Kn);
          e.md.Rj(this.Ln);
        }
      };
      a.prototype.Zm = function (a, c, d, e) {
        this.Mn = a;
        this.Nn = c;
        this.On = d;
        this.Pn = e;
        for (var f = 0; f < this.Hn.Zc.od.length; f++) {
          this.Hn.Zc.od[f].Rj(this.Mn);
        }
        ;
        for (var g = 0; g < this.Hn.Zc.pd.length; g++) {
          this.Hn.Zc.pd[g].Rj(this.Nn);
        }
        ;
        for (var h = 0; h < this.Hn.Zc.rd.length; h++) {
          this.Hn.Zc.rd[h].Rj(this.On);
        }
        ;
        for (var i = 0; i < this.Hn.Zc.qd.length; i++) {
          this.Hn.Zc.qd[i].Rj(this.Pn);
        }
      };
      a.prototype.Bg = function () {
        var a = this.mj * 2;
        var c = this.mj * 2 * 1.5;
        if (this.$c > 0) {
          var d = this.Jm[0];
          var e = this.Jm[1];
          var f = this.Jm[2];
          this.Hn._c[0].Ad(d, e, a, c, f);
          this.Hn.Zc.Ad(d, e, a, f);
        }
        ;
        for (var g = 1; g < this.$c; g++) {
          var h = this.Jm[g * 3];
          var i = this.Jm[g * 3 + 1];
          var j = this.Jm[g * 3 + 2];
          this.Hn._c[g].Ad(h, i, a, c, j);
        }
      };
      a.prototype._m = function (a) {
        a.render(this.Hn.Yc);
      };
      return a;
    }();
    e.Uf = function () {
      function a(a) {
        this.Wd = a;
      }
      a.Tf = $(g.a("b909598d5e45d882ae472d906855a696bf5b38"));
      a.Qn = $(g.a("bd8d4c0433d7b717ad9b251731"));
      a.Rn = $(g.a("f5c504c71a839ac0d08c0ac4f59d6dc7"));
      a.Sn = $(g.a("6b3f003f9d4b84125e53070787"));
      a.Tn = $(g.a("a85a8d9ac198c309d9e485"));
      a.Un = $(g.a("d96929692e3bb364927f157d0021"));
      a.Vn = $(g.a("df338c330a7a483b82769c771d750829"));
      a.Wn = $(g.a("e092525c9440569a9ed04f4c"));
      a.Xn = $(g.a("a7fbdd754aaf597bddcdc74b5693"));
      a.Yn = $(g.a("de4ccc1e8397cd9b815ade108f8c"));
      a.Zn = $(g.a("a5b5553d5aeed935ceea4a041cd4da01c2"));
      a.$n = $(g.a("277b4ce8d933dfb3480145c7c405cc8b540757c4de0fc9c7501e6cc4aa11b2"));
      a._n = $(g.a("5240711724886ac43d0a7108738c4f9f0c1647010f9846d41c12490a"));
      a.prototype.Sa = function () {};
      a.prototype.ml = function () {};
      a.prototype.nl = function () {};
      a.prototype.hl = function () {};
      a.prototype.qg = function () {};
      a.prototype.ug = function (a, c) {};
      return a;
    }();
    ja = $(g.a("0230a27c68f6a4b4697abc6967f0be"));
    ka = $(g.a("3505d181d74b57c15e41d184a85c3691"));
    la = $(g.a("9367f6e9792f6bebef3fb0ec78"));
    ma = $(g.a("cb5fb8d023b626a8e7e7afa23bb06da5e2ee"));
    na = $(g.a("0959ed55e31f636d62eaf236f0ab712a"));
    oa = $(g.a("43d7235fa999a51726993e4dae67b4"));
    pa = $(g.a("071b6f13e55de1537c237ef0f6"));
    qa = $(g.a("f5c511c1178b97818d821ed3e4"));
    ra = $(g.a("9e0c0658ccd20898c458094bce"));
    sa = $(g.a("ee5cd7e09f66996697e9cee889"));
    (ta = g.ca(e.Uf, function () {
      e.Uf.call(this, e.ll.ao);
      var a = this;
      var c = sa.get()[0];
      na.toggle(f.co.bo);
      ja.text(g.U(g.a("322a9a2153bfd6ae5b2699634caa73a42e272a212fa364bc")));
      ka.text(g.U(g.a("4078ecf721eda8702974efb53ef8fd6a3c55bcc03bcbe24e365cff")));
      ka.click(function () {
        ooo.ij.if();
        f.co.do.Va();
        ooo.ij.Ye(e.Pe.Se.Jf);
        ooo.Xg.gl(ooo.Xg.Jf);
      });
      $(g.a("e8d15e5680")).keydown(function (c) {
        if (c.keyCode !== 17 || !(j.ctrl = true)) {
          if (c.keyCode !== 17) {
            j.ctrl = false;
          }
        }
        if (c.keyCode === 32) {
          a.eo = true;
        }
      }).keyup(function (c) {
        j.ctrl = false;
        if (i.on && j.s) {
          if (c.keyCode == 81 || c.keyCode == 87) {
            if (c.keyCode == 81) {
              T.texture = M;
              U.texture = N;
              T.alpha = 1;
              U.alpha = 0.25;
              Xc();
            }
            if (c.keyCode == 87) {
              U.texture = O;
              T.texture = L;
              T.alpha = 0.25;
              U.alpha = 1;
              ad();
            }
          } else {
            U.texture = N;
            T.texture = L;
            U.alpha = 0.25;
            T.alpha = 0.25;
            G = false;
            H = 55;
            I = 1;
            J = true;
            clearInterval(E);
            E = null;
          }
          if (c.keyCode == 90) {
            if (j.z == 1) {
              if (j.h) {
                j.z = 1.6;
              } else {
                j.z = 1.2;
              }
              V.texture = Q;
              V.alpha = 1;
            } else {
              j.z = 1;
              V.texture = P;
              V.alpha = 0.25;
            }
          }
          if (j.hz && !j.mobile) {
            if (c.keyCode == 188 && j.z >= 0.2) {
              j.z = j.z - 0.1;
            }
            if (c.keyCode == 190 && j.z <= 25) {
              j.z = j.z + 0.1;
            }
          }
        }
        if (i.on && c.keyCode == 82) {
          if (j.r1) {
            $("#port_id_s").val(j.pi);
            $("#port_name_s").val(j.pn);
            $("#port_id").val($("#port_id_s").val());
            $("#port_name").val($("#port_name_s").val());
            document.getElementById("mm-action-play").click();
          } else {
            j.r1 = true;
          }
        }
        if (i.on && c.keyCode == 78) {
          document.getElementById("settings-show-names-switch").click();
          if (j.sn) {
            j.sn = false;
          } else {
            j.sn = true;
          }
        }
        if (c.keyCode === 32) {
          a.eo = false;
        }
      });
      c.addEventListener(g.a("0582e8cdea9266d37b9b"), function (d) {
        if (i.on && j.mobile && j.mo != 6 && j.s) {
          var e = btoa(j.c_1);
          if (j.mo1.x != -1 && j.mo1.y == -1 && btoa(e) == j.d_1 || j.mo2.x == -1 && j.mo2.y != -1 && btoa(e) == j.d_1) {
            var f = ooo.Xg.Kf.Wg.Ah;
            var g = c.offsetHeight;
            var h = c.offsetWidth;
            var k = g * 0.5;
            var m = h * 0.5;
            var n = btoa(j.c_2);
            for (let c = 0; c < d.changedTouches.length; c++) {
              var o = d.changedTouches[c].pageX;
              var p = d.changedTouches[c].pageY;
              var q = d.changedTouches[c].identifier;
              if (j.mo == 1 && btoa(n) == j.d_2) {
                g *= 0.5;
                h *= 0.5;
              }
              if (j.mo == 2 && btoa(n) == j.d_2) {
                g = f.img_o_2.y + 110;
                h = f.img_o_2.x + 110;
              }
              if (j.mo == 3 && btoa(n) == j.d_2) {
                g = f.img_o_3.y + 110;
                h = f.img_o_3.x + 110;
              }
              if (j.mo == 4 && btoa(n) == j.d_2 || j.mo == 5 && btoa(n) == j.d_2) {
                g = f.img_o_4.y + 110;
                h = f.img_o_4.x + 110;
              }
              var r = btoa(j.c_5);
              var s = Math.atan2(p - g, o - h);
              var t = Math.cos(s);
              var u = Math.sin(s);
              var v = btoa(j.c_4);
              var w = j.mo1.x == q;
              btoa(j.c_3);
              if (w && btoa(v) == j.d_4) {
                if (o <= 0 || p <= 0) {
                  j.mo1.x = -1;
                  if (j.mo == 1) {
                    f.img_p_1.alpha = 0.25;
                  }
                  if (j.mo == 2) {
                    f.img_o_2.alpha = 0.25;
                    f.img_i_2.alpha = 0.25;
                    f.img_p_2.alpha = 0.25;
                  }
                  if (j.mo == 3) {
                    f.img_o_3.alpha = 0.25;
                    f.img_i_3.alpha = 0.25;
                    f.img_p_3.alpha = 0.25;
                  }
                  if (j.mo == 4 || j.mo == 5) {
                    f.img_p_2.alpha = 0.25;
                  }
                } else {
                  a.fo = s;
                  var x = 50;
                  if (j.mo == 1 || j.mo == 4 || j.mo == 5) {
                    x = 110;
                  }
                  var y = h - o;
                  var z = g - p;
                  var A = Math.sqrt(y * y + z * z);
                  var B = m + A * t - 68;
                  var C = k + A * u - 68;
                  var D = m + x * t - 68;
                  var E = k + x * u - 68;
                  var F = m + t * 75 - 68;
                  var G = k + u * 75 - 68;
                  var H = o - 85;
                  var I = p - 85;
                  var J = h + x * t - 85;
                  var K = g + x * u - 85;
                  var L = h + t * 3 - 110;
                  var M = g + u * 3 - 110;
                  if (A < x) {
                    if (j.mo2.x == -1 && j.mo2.y != -1) {
                      f.img_pf_1.x = B;
                      f.img_pf_1.y = C;
                    } else {
                      if (j.mo == 1) {
                        f.img_p_1.x = B;
                        f.img_p_1.y = C;
                      }
                      if (j.mo == 2 || j.mo == 4 || j.mo == 5) {
                        f.img_p_2.x = B;
                        f.img_p_2.y = C;
                      }
                      if (j.mo == 3) {
                        f.img_p_3.x = B;
                        f.img_p_3.y = C;
                      }
                    }
                    if (j.mo == 2) {
                      f.img_i_2.y = I;
                      f.img_i_2.x = H;
                    }
                    if (j.mo == 3) {
                      f.img_i_3.y = I;
                      f.img_i_3.x = H;
                    }
                  } else {
                    if (j.mo2.x == -1 && j.mo2.y != -1) {
                      f.img_pf_1.x = D;
                      f.img_pf_1.y = E;
                      if (j.mo == 2 || j.mo == 3) {
                        if (A < 75) {
                          f.img_pf_1.x = B;
                          f.img_pf_1.y = C;
                        } else {
                          f.img_pf_1.x = F;
                          f.img_pf_1.y = G;
                        }
                      }
                    } else {
                      if (j.mo == 1) {
                        f.img_p_1.x = D;
                        f.img_p_1.y = E;
                      }
                      if (j.mo == 2 || j.mo == 4 || j.mo == 5) {
                        f.img_p_2.x = D;
                        f.img_p_2.y = E;
                        if (j.mo == 2) {
                          if (A < 75) {
                            f.img_p_2.x = B;
                            f.img_p_2.y = C;
                          } else {
                            f.img_p_2.x = F;
                            f.img_p_2.y = G;
                          }
                        }
                      }
                      if (j.mo == 3) {
                        if (A < 75) {
                          f.img_p_3.x = B;
                          f.img_p_3.y = C;
                        } else {
                          f.img_p_3.x = F;
                          f.img_p_3.y = G;
                        }
                      }
                    }
                    if (j.mo == 2) {
                      f.img_i_2.y = K;
                      f.img_i_2.x = J;
                    }
                    if (j.mo == 3) {
                      f.img_i_3.y = K;
                      f.img_i_3.x = J;
                      f.img_o_3.y = M;
                      f.img_o_3.x = L;
                    }
                  }
                }
              } else if ((w = j.mo2.y == q) && btoa(r) == j.d_5) {
                if (o <= 0 || p <= 0) {
                  j.mo2.y = -1;
                  f.img_f.visible = false;
                  f.img_pf_1.visible = false;
                  if (j.mo == 1) {
                    f.img_p_1.visible = true;
                  }
                  if (j.mo == 2 || j.mo == 4 || j.mo == 5) {
                    f.img_p_2.visible = true;
                  }
                  if (j.mo == 3) {
                    f.img_p_3.visible = true;
                  }
                  if (j.mo == 4 || j.mo == 5) {
                    f.img_f.visible = true;
                  }
                  a.eo = false;
                } else if (j.mo == 3) {
                  t = Math.cos(s = Math.atan2(p - (g = f.img_f.y + 100), o - (h = f.img_f.x + 100)));
                  u = Math.sin(s);
                  var H = h + t * 3 - 100;
                  var I = g + u * 3 - 100;
                  var y = h - o;
                  var z = g - p;
                  var A = Math.sqrt(y * y + z * z);
                  if (A >= 40) {
                    f.img_f.y = H;
                    f.img_f.x = I;
                  }
                }
              }
            }
          }
        } else if (!l() || !j.joystick.checked) {
          if (d = d || window.event) {
            if ((d = d.touches[0]).clientX !== undefined) {
              a.fo = Math.atan2(d.clientY - c.offsetHeight * 0.5, d.clientX - c.offsetWidth * 0.5);
            } else {
              a.fo = Math.atan2(d.pageY - c.offsetHeight * 0.5, d.pageX - c.offsetWidth * 0.5);
            }
          }
        }
      }, true);
      c.addEventListener(g.a("0a6fa3686df7a3d57351a0"), function (d) {
        if (i.on && j.mobile && j.mo != 6 && j.s) {
          var e = ooo.Xg.Kf.Wg.Ah;
          var f = btoa(j.c_4);
          var g = c.offsetHeight;
          var h = btoa(j.c_3);
          var k = c.offsetWidth;
          var l = btoa(j.c_5);
          var m = (d = d || window.event).touches.item(0).pageX;
          var n = btoa(j.c_2);
          var o = d.touches.item(0).pageY;
          var p = d.touches.length;
          var q = btoa(j.c_1);
          var r = d.touches.item(0).identifier;
          for (let a = 0; a < p; a++) {
            if (j.mo2.x == -1 && j.mo2.y != -1) {
              if (d.touches.item(a).identifier != j.mo2.y) {
                m = d.touches.item(a).pageX;
                o = d.touches.item(a).pageY;
                r = d.touches.item(a).identifier;
              }
            } else {
              m = d.touches.item(a).pageX;
              o = d.touches.item(a).pageY;
              r = d.touches.item(a).identifier;
            }
          }
          ;
          var s = 0;
          if (j.mo == 4 && btoa(l) == j.d_5 || j.mo == 5 && btoa(f) == j.d_4) {
            s = Math.sqrt((m - e.img_f.x - 100) * (m - e.img_f.x - 100) + (o - e.img_f.y - 100) * (o - e.img_f.y - 100));
          }
          if (p == 1 && (j.mo == 4 && s > 40 || j.mo != 4) && (j.mo == 5 && s > 40 || j.mo != 5)) {
            j.mo2.y = -1;
            e.img_f.visible = false;
            e.img_pf_1.visible = false;
            if (j.mo == 1) {
              e.img_p_1.alpha = 0.25;
              e.img_p_1.visible = true;
            }
            if (j.mo == 2) {
              e.img_o_2.alpha = 0.25;
              e.img_i_2.alpha = 0.25;
              e.img_p_2.alpha = 0.25;
              e.img_p_2.visible = true;
            }
            if (j.mo == 3) {
              e.img_o_3.alpha = 0.25;
              e.img_i_3.alpha = 0.25;
              e.img_p_3.alpha = 0.25;
              e.img_p_3.visible = true;
            }
            if (j.mo == 4 || j.mo == 5) {
              e.img_p_2.alpha = 0.25;
              e.img_p_2.visible = true;
              e.img_f.visible = true;
            }
            a.eo = false;
          }
          if (j.mo1.x == -1 && j.mo1.y == -1 && btoa(f) == j.d_4 && (j.mo == 4 && s > 40 || j.mo != 4 && btoa(h) == j.d_3) && (j.mo == 5 && s > 40 || j.mo != 5 && btoa(n) == j.d_2)) {
            j.mo1.x = r;
            if (j.mo1.x == j.mo2.y && j.mo1.y == j.mo2.x) {
              m = d.touches.item(1).pageX;
              o = d.touches.item(1).pageY;
            }
            var t = k * 0.5 - 68;
            var u = g * 0.5 - 68;
            var v = m - 110;
            var w = o - 110;
            var x = m - 85;
            var y = o - 85;
            if (j.mo == 1 && j.mo2.x == -1 && j.mo2.y == -1) {
              e.img_p_1.alpha = 1;
              e.img_p_1.x = t;
              e.img_p_1.y = u;
              e.img_p_1.visible = true;
            }
            if (j.mo == 2) {
              e.img_o_2.alpha = 1;
              e.img_o_2.x = v;
              e.img_o_2.y = w;
              e.img_i_2.alpha = 1;
              e.img_i_2.x = x;
              e.img_i_2.y = y;
              if (j.mo2.x == -1 && j.mo2.y == -1) {
                e.img_p_2.alpha = 1;
                e.img_p_2.x = t;
                e.img_p_2.y = u;
                e.img_p_2.visible = true;
              }
            }
            if (j.mo == 3 && btoa(l) == j.d_5) {
              e.img_o_3.alpha = 1;
              e.img_o_3.x = v;
              e.img_o_3.y = w;
              e.img_i_3.alpha = 1;
              e.img_i_3.x = x;
              e.img_i_3.y = y;
              if (j.mo2.x == -1 && j.mo2.y == -1) {
                e.img_p_3.alpha = 1;
                e.img_p_3.x = t;
                e.img_p_3.y = u;
                e.img_p_3.visible = true;
              }
            }
            if (j.mo == 4 && btoa(n) == j.d_2 && j.mo2.x == -1 && j.mo2.y == -1) {
              e.img_p_2.alpha = 1;
              e.img_p_2.x = t;
              e.img_p_2.y = u;
              e.img_p_2.visible = true;
            }
            if (j.mo == 5 && btoa(h) == j.d_3 && j.mo2.x == -1 && j.mo2.y == -1) {
              e.img_p_2.alpha = 1;
              e.img_p_2.x = t;
              e.img_p_2.y = u;
              e.img_p_2.visible = true;
            }
          } else if (p >= 2 && j.mo2.x == -1 && j.mo2.y == -1 && btoa(h) == j.d_3 || p == 1 && j.mo == 4 && s <= 40 && btoa(q) == j.d_1 || p == 1 && j.mo == 5 && s <= 40 && btoa(n) == j.d_2) {
            j.mo2.y = r;
            e.img_f.visible = true;
            e.img_pf_1.visible = true;
            if (j.mo == 1) {
              e.img_p_1.visible = false;
              e.img_pf_1.x = e.img_p_1.x;
              e.img_pf_1.y = e.img_p_1.y;
            }
            if (j.mo == 2 || j.mo == 4 || j.mo == 5) {
              e.img_p_2.visible = false;
              e.img_pf_1.x = e.img_p_2.x;
              e.img_pf_1.y = e.img_p_2.y;
            }
            if (j.mo == 3 && btoa(h) == j.d_3) {
              e.img_p_3.visible = false;
              e.img_pf_1.x = e.img_p_3.x;
              e.img_pf_1.y = e.img_p_3.y;
            }
            if (j.mo != 4 && j.mo != 5) {
              e.img_f.x = m - 100;
              e.img_f.y = o - 100;
            }
            a.eo = true;
          }
          ;
          d.preventDefault();
        } else {
          if (d = d || window.event) {
            a.eo = d.touches.length >= 2;
          }
          d.preventDefault();
        }
      }, true);
      c.addEventListener(g.a("f0b55d36972d53a99c"), function (c) {
        if (i.on && j.mobile && j.mo != 6 && j.s) {
          var d = ooo.Xg.Kf.Wg.Ah;
          var e = btoa(j.c_1);
          if (c = c || window.event) {
            if ((c = c.changedTouches[0]).clientX !== undefined) {
              gd(c.clientX, c.clientY);
            } else {
              gd(c.pageX, c.pageY);
            }
          }
          var f = btoa(j.c_2);
          var g = c.identifier;
          if (g == j.mo1.x && j.mo1.y == -1 && btoa(f) == j.d_2) {
            j.mo1.x = -1;
            if (j.mo == 1) {
              d.img_p_1.alpha = 0.25;
            }
            if (j.mo == 2) {
              d.img_o_2.alpha = 0.25;
              d.img_i_2.alpha = 0.25;
              d.img_p_2.alpha = 0.25;
            }
            if (j.mo == 3 && btoa(e) == j.d_1) {
              d.img_o_3.alpha = 0.25;
              d.img_i_3.alpha = 0.25;
              d.img_p_3.alpha = 0.25;
            }
            if (j.mo == 4) {
              d.img_p_2.alpha = 0.25;
            }
            if (j.mo == 5) {
              d.img_p_2.alpha = 0.25;
            }
          }
          var h = btoa(j.c_3);
          if (j.mo2.x == -1 && g == j.mo2.y && btoa(h) == j.d_3) {
            j.mo2.y = -1;
            d.img_f.visible = false;
            d.img_pf_1.visible = false;
            if (j.mo == 1) {
              d.img_p_1.visible = true;
            }
            if (j.mo == 2 || j.mo == 4 && btoa(f) == j.d_2 || j.mo == 5 && btoa(h) == j.d_3) {
              d.img_p_2.visible = true;
            }
            if (j.mo == 3) {
              d.img_p_3.visible = true;
            }
            if (j.mo == 4 || j.mo == 5) {
              d.img_f.visible = true;
            }
            a.eo = false;
          }
        } else {
          if (c = c || window.event) {
            a.eo = c.touches.length >= 2;
          }
          if (j.mobile && j.s && (c = c || window.event)) {
            if ((c = c.changedTouches[0]).clientX !== undefined) {
              gd(c.clientX, c.clientY);
            } else {
              gd(c.pageX, c.pageY);
            }
          }
        }
      }, true);
      c.addEventListener(g.a("9b21f2fb6c354cfdd531"), function (f) {
        if (f = f || e.c[g.a("4236723028a3")] && g.a("1573f9acfc6c72a2786a") != d(f.clientX)) {
          a.fo = g.ta(f.clientY - c.offsetHeight * 0.5, f.clientX - c.offsetWidth * 0.5);
        }
      }, true);
      c.addEventListener(g.a("899764c97e9bebafe66c"), function (c) {
        a.eo = true;
      }, true);
      c.addEventListener(g.a("b14f5c914643c298"), function (c) {
        a.eo = false;
      }, true);
      this.Wg = new e.lh(sa);
      this.go = ua.ho;
      this.fo = 0;
      this.eo = false;
      i.eie = a;
    })).prototype.Sa = function () {};
    ta.prototype.ml = function () {
      e.Nf.rg(false);
      h.f.h(e.Uf.Tf, 50);
      h.f.h(e.Uf.Qn, 1);
      h.f.h(e.Uf.Rn, 50);
      h.f.h(e.Uf.Sn, 50);
      h.f.g(e.Uf.Tn, 500);
      if (this.go === ua.ho) {
        h.f.h(e.Uf.Un, 1);
      } else {
        h.f.g(e.Uf.Un, 500);
      }
      h.f.h(e.Uf.Vn, 50);
      h.f.h(e.Uf.Wn, 50);
      h.f.h(e.Uf.Xn, 50);
      h.f.h(e.Uf.Yn, 50);
      h.f.h(e.Uf.Zn, 50);
      h.f.h(e.Uf.$n, 50);
      h.f.h(e.Uf._n, 50);
    };
    ta.prototype.ho = function () {
      this.go = ua.ho;
      return this;
    };
    ta.prototype.io = function () {
      h.f.h(la, 1);
      g.Y(function () {
        h.f.g(la, 500);
      }, 3000);
      h.f.h(ma, 1);
      g.Y(function () {
        h.f.g(ma, 500);
      }, 500);
      this.go = ua.io;
      return this;
    };
    ta.prototype.nl = function () {
      this.eo = false;
      this.Wg.qg();
      if (this.go === ua.io) {
        ooo.ij.mf();
      }
    };
    ta.prototype.qg = function () {
      this.Wg.qg();
    };
    ta.prototype.ug = function (a, c) {
      this.Wg.ug(a, c);
    };
    ta.prototype.jo = function (a, c, e) {
      var h;
      var i;
      var j;
      if (c >= 1 && c <= 10) {
        h = g.U(g.a("be26ee35a7abaab2a73aed77b8beffa8a22bbe11be82f780f80e") + c);
        i = g.U(g.a("520a7a01339f368e3b0679432c8a53840e070a050a964b9c23156e120f8d54"));
        j = g.U(g.a("6058ccd701cd88500954cf951fd2cd56112d9cb01ca4c4222a2cc9be10b99022e522b194ebbaa2")).replace(g.a("ce24a01c"), e).replace(g.a("51b9e2f9"), a).replace(g.a("44eeb46a"), h);
      } else {
        h = g.a("9e");
        i = g.U(g.a("d5af39ec3cb2f5ebbca33abe13b790e189a249ec1ba3a3f599"));
        j = g.U(g.a("835deb126240271dea51e8507c2f72ebf228bbf57f296befc929eefb73240fffc627d6d8482a44")).replace(g.a("5cd6ae52"), e).replace(g.a("ee0481fc"), a);
      }
      oa.html(g.U(g.a("011bed50e00e295f6817ee12ff1b7c357df6bd3dfaf365")));
      pa.html(a);
      qa.html(h);
      ra.html(i);
      if (f.co.bo) {
        var k;
        var l;
        var m;
        var n;
        var o;
        var p;
        var q;
        var r = g.U(g.a("0d97e1a4f47a3da3746bf2e6eb6f68b9717ab1a3c97351b1"));
        g.U(g.a("439d2b52a280e75d2a912810bc6fb22b32687b35bf69ab2f09692e3bb364cf310264113f8876"));
        na.empty().append((k = r, l = g.a("2bb4596adf938b0d1c935a54da89cd4f158552"), m = g.a("0a6ca36f63fea4c43c4abb"), n = j, o = j, p = g.a("16cfacdd6a58e60231d88fc34f52905008de879643568d5a4bccdfae556e872d57b59de453269b6050aa77ff282363"), (q = $(g.a("a368c1ff516615e9dd3b8de6420c5fd18e46ddd243180385941bcad91107729cac06a2997548798ae40fbbd96da027a7a1f7bca939b57bfbf5bdffee27ad43e2c1b49ceb45a84bfa9df588a92dcf09dfd194d5d6579c4cdcdb98c8d85d90f99f6f8e7686e6dbecc729cc7f9bfca5e37476e62b") + g.a("763b4a6c19ff1cf5432d7033a2ea79b7b635686ee3ff38f5b33d6414a48174cdf34e3f41ee967e99ab194211c4da08d99b154b0c9b8c2df99f1d5f7f8eb315b1de671c7498864ef98c61b771f6e6b283f460b177fdb3a1e8f771a317ffd4a5cbef0fad50f4d8eac0e85f8e4581c389c1d5599159d9ce82cbc34889afc723833cd8b295bec3258965c8bdb6a7363df27d2ba3fcb73e78e12c3db1e981220ee6103894f8982b05ef002c9ace820201d11b15c1dd89420dd4131bd3ddf81c76d47207e9c1a1177ec5630f9934e47429267520be64b577792f3b28b932ce6c5f3b16208026") + g.a("b11e4094544889") + k + g.a("74f999340828d4f540e2da26f66f"))).click(function () {
          if (g.a("aace02d9cb59192fd7a7") !== (typeof FB == "undefined" ? "undefined" : d(FB)) && g.a("371d57cede0ad4c05a14") != d(FB.ui)) {
            FB.ui({
              method: g.a("7b4a180b9b"),
              display: g.a("d8d9755ba95d"),
              link: l,
              name: m,
              caption: n,
              description: o,
              picture: p
            }, function () {});
          }
        }), q));
      }
    };
    ta.prototype.ko = function () {
      return this.fo;
    };
    ta.prototype.lo = function () {
      return this.eo;
    };
    ua = {
      ho: 0,
      io: 1
    };
    e.Bk = ta;
    va = $(g.a("d0827e4cb5417fc9bf846a59b34a6cca93c20f508b5b52"));
    wa = $(g.a("1525fba7f86e72a27a23efa2ce7551b156658abac868"));
    xa = $(g.a("11a1ff2bf4e27e267ea7eb3ef2e96d3552e18e20c0ee53"));
    (ya = g.ca(e.Uf, function () {
      e.Uf.call(this, e.ll.ao);
      this.mo = -1;
      this.no = g.a("50");
    })).prototype.Sa = function () {};
    ya.prototype.ml = function () {
      e.Nf.rg(true);
      h.f.g(e.Uf.Tf, 500);
      h.f.g(e.Uf.Qn, 1);
      h.f.h(e.Uf.Rn, 50);
      h.f.h(e.Uf.Sn, 50);
      h.f.h(e.Uf.Tn, 50);
      h.f.h(e.Uf.Un, 50);
      h.f.h(e.Uf.Vn, 50);
      h.f.h(e.Uf.Wn, 50);
      h.f.h(e.Uf.Xn, 50);
      h.f.g(e.Uf.Yn, 500);
      h.f.h(e.Uf.Zn, 50);
      h.f.h(e.Uf.$n, 50);
      h.f.h(e.Uf._n, 50);
    };
    ya.prototype.nl = function () {
      ooo.ij.Ye(e.Pe.Se.Re);
      ooo.Xg.Ak.wg();
      ooo.Xg.Ak.sg(true);
    };
    ya.prototype.hl = function () {
      ooo.Xg.Ak.sg(false);
    };
    ya.prototype.oo = function () {
      this.po(g.a("ef"), 0);
      h.f.g(va, 100);
    };
    ya.prototype.qo = function () {
      h.f.h(va, 100);
    };
    ya.prototype.po = function (a, c) {
      if (this.no !== a) {
        this.no = a;
      }
      var d = g.fa(g._(c * 100), 0, 100);
      if (this.mo !== d) {
        wa.css(g.a("c620e13dbeb3"), d + g.a("f94f"));
        xa.html(d + g.a("2e9fd5"));
      }
    };
    e.$k = ya;
    za = $(g.a("be6ced3cefbfedbba37afc36ba"));
    $(g.a("b8aa9766916197e1a5bc6176aa6163e5"));
    $(g.a("dac8f180f303c91f87dec69a9203c714"));
    Aa = $(g.a("bd8d521d6cd0ac00b1d92a552bcfbf08a2d03c"));
    Ba = $(g.a("be6ced3cefbee1bbb37aeb36a4af"));
    Ca = $(g.a("1d2df2bd8c7e4cb5417fc9bf"));
    Da = $(g.a("cb5fa0d362ec3ea3b7edbba17af82ba5bcfeb8bd2cbd03b391"));
    Ea = $(g.a("1bef7063b2bcce7347bd4b718aa8db754cae486ddccdc5474b90"));
    $(g.a("e4164bdac5dc5c5e824903cb95b946"));
    Fa = $(g.a("4cbee3727d52f9ca3a88f546365f"));
    Ga = $(g.a("2bff40738293da4b5dc94554d29e"));
    Ha = $(g.a("0ebcbdcc3f50bf4c788ab6cc625f"));
    Ia = $(g.a("18ca3706311e35864edc0d054107"));
    Ja = $(g.a("b4269bea95fa9162d22091f9a5e32f71b16172f8a6b46672bf69"));
    Ka = $(g.a("2d3dc28d9c525296544bc4c5d7435887534fd295"));
    La = $(g.a("7e2c2d7cafe325e7e77a3b34edfa21f8a3723f45f7"));
    Ma = $(g.a("f5c51ac5548b98d89481119df19e62cd"));
    Na = $(g.a("3eec6dbc6f3267212fb866f42d2e692e3a"));
    Oa = $(g.a("1684b5c4374abf5977c08e9c4e5c835c48"));
    Pa = $(g.a("c7dba457668c215fb665a36f3a6a3329"));
    Qa = $(g.a("6edc5d6c5ff040ea0462"));
    Ra = $(g.a("bc2e93e2edfd6772a07074e4"));
    Sa = $(g.a("bae811a0933ce525b6baeab2b5"));
    Ta = $(g.a("3eec6dbc6f306b3c28a425bb2523"));
    Ua = $(g.a("4bdf2053e270bd232a61276bb67eb83e3a7e"));
    Va = $(g.a("6edc5d6c5ff358e40f624a240ff859ff106e2d74"));
    Wa = $(g.a("82b029f8ab742770e4e861ebef73"));
    Xa = $(g.a("56c47584771b700c278a52dc070b545804965a"));
    Ya = $(g.a("f70b9407565c110f8655735fe64cf55b715965"));
    Za = $(g.a("46f465b4672b603c37ba62cc3e0662003a"));
    ($a = g.ca(e.Uf, function () {
      e.Uf.call(this, e.ll.kl);
      this.mo = -1;
      this.no = g.a("26");
      this.ro = new e.Lm(Fa);
      La.click(function () {
        ooo.ij.if();
      });
      Fa.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Qk);
        }
      });
      Ga.click(function () {
        ooo.ij.if();
        ooo.so.kk();
      });
      Ha.click(function () {
        ooo.ij.if();
        ooo.so.jk();
      });
      Ka.keypress(function (a) {
        j.r1 = false;
        if (a.keyCode === 13) {
          ooo.to();
        }
      });
      Ma.click(function () {
        ooo.ij.if();
        ooo.to();
      });
      Na.click(function () {
        ooo.ij.if();
        ooo.to();
      });
      Oa.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Nk);
      });
      Sa.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Hi);
      });
      Pa.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Lk);
        }
      });
      Ra.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Jk);
        }
      });
      Qa.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Sk);
        }
      });
      Ta.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Hk);
        }
      });
      this.uo();
      this.vo();
      var a = e.Cg.Og(e.Cg.Ig);
      if (a !== g.a("dbcd8f8b11d1") && a !== g.a("8acf09dcc32d")) {
        a = g.a("81b351f14bb7");
      }
      La.val(a);
    })).prototype.Sa = function () {
      var a = this;
      function c(a, c) {
        if (a.pm) {
          c.skinId = a.pm.Tj;
          c.eyesId = a.pm.Uj;
          c.mouthId = a.pm.Vj;
          c.hatId = a.pm.Wj;
          c.glassesId = a.pm.Xj;
        }
      }
      ooo.ok.fm(function () {
        if (ooo.ok.nk()) {
          c(j, ooo.ok.xl);
          ooo.so.lk(ooo.ok.Ul(), e._j.$j);
          ooo.so.lk(ooo.ok.Vl(), e._j.ak);
          ooo.so.lk(ooo.ok.Wl(), e._j.bk);
          ooo.so.lk(ooo.ok.Xl(), e._j.dk);
          ooo.so.lk(ooo.ok.Yl(), e._j.ck);
        } else {
          ooo.so.lk(ooo.wo(), e._j.$j);
          ooo.so.lk(0, e._j.ak);
          ooo.so.lk(0, e._j.bk);
          ooo.so.lk(0, e._j.dk);
          ooo.so.lk(0, e._j.ck);
        }
      });
      ooo.ok.fm(function () {
        Ma.toggle(ooo.ok.nk());
        Oa.toggle(!ooo.ok.nk());
        Na.toggle(!ooo.ok.nk());
        Ra.toggle(ooo.ok.nk());
        Qa.toggle(ooo.ok.nk());
        Ta.toggle(ooo.ok.nk());
        Pa.toggle(true);
        Sa.toggle(true);
        if (ooo.ok.nk()) {
          Ia.hide();
          Va.html(ooo.ok.Ll());
          Ua.attr(g.a("f59505cb"), ooo.ok.Nl());
          Wa.html(ooo.ok.Ql());
          Xa.width(ooo.ok.Sl() * 100 / ooo.ok.Tl() + g.a("a054"));
          Ya.html(ooo.ok.Sl() + g.a("2d3e80c0") + ooo.ok.Tl());
          Za.html(ooo.ok.Rl());
          Ka.val(ooo.ok.Ml());
        } else {
          Ia.toggle(f.co.bo && !ooo.xo());
          Va.html(Va.data(g.a("c2b4f1b0b523")));
          Ua.attr(g.a("6d2d9d43"), f.H.M);
          Wa.html(g.a("13f525"));
          Xa.width(g.a("4cad"));
          Ya.html(g.a("49"));
          Za.html(1);
          Ka.val(e.Cg.Og(e.Cg.Jg));
        }
      });
      ooo.so.fk(function () {
        a.ro.Gm(ooo.so.ek());
      });
    };
    $a.prototype.ml = function () {
      e.Nf.rg(true);
      h.f.g(e.Uf.Tf, 500);
      h.f.g(e.Uf.Qn, 1);
      h.f.g(e.Uf.Rn, 500);
      h.f.g(e.Uf.Sn, 500);
      h.f.h(e.Uf.Tn, 50);
      h.f.h(e.Uf.Un, 50);
      h.f.g(e.Uf.Vn, 500);
      h.f.h(e.Uf.Wn, 50);
      h.f.h(e.Uf.Xn, 50);
      h.f.h(e.Uf.Yn, 50);
      h.f.h(e.Uf.Zn, 50);
      h.f.h(e.Uf.$n, 50);
      h.f.h(e.Uf._n, 50);
    };
    $a.prototype.yo = function () {
      h.f.g(za, 500);
      h.f.g(Aa, 500);
      h.f.g(Ba, 500);
      h.f.h(Ca, 100);
    };
    $a.prototype.zo = function () {
      h.f.h(za, 100);
      h.f.h(Aa, 100);
      h.f.h(Ba, 100);
      h.f.g(Ca, 500);
    };
    $a.prototype.po = function (a, c) {
      if (this.no !== a) {
        this.no = a;
      }
      var d = g.fa(g._(c * 100), 0, 100);
      if (this.mo !== d) {
        Da.css(g.a("b630112dcea3"), d + g.a("3eea"));
        Ea.html(d + g.a("a051c7"));
      }
    };
    $a.prototype.nl = function () {
      ooo.ij.jf();
      this.ro.rg(true);
    };
    $a.prototype.hl = function () {
      this.ro.rg(false);
    };
    $a.prototype.qg = function () {
      this.ro.qg();
    };
    $a.prototype.ug = function (a, c) {
      this.ro.ug();
    };
    $a.prototype.Ml = function () {
      return Ka.val();
    };
    $a.prototype.Ao = function () {
      return La.val();
    };
    $a.prototype.uo = function () {
      var a = $(g.a("b347d8cb1a095ddcd20fd8835c1f2fc6")).children();
      var c = 0;
      g.X(function () {
        a.eq(c).fadeOut(500, function () {
          if (++c >= a.length) {
            c = 0;
          }
          a.eq(c).fadeIn(500).css(g.a("0277ad6676fba9e0"), g.a("87d1e79662d268d3edacfe6178"));
        });
      }, 3000);
    };
    $a.prototype.vo = function () {
      if (f.co.bo && !ooo.xo()) {
        Ia.show();
        var a = g.U(g.a("455fa99cac42659b2c53aa2ebc233a6a7b2bb266ac642e623121bc7bb2390a7a1678947088280e"));
        var c = encodeURIComponent(g.U(g.a("00b82c37612d68b069b42f75613c27b13e8c370d614b2389748639004f06378153df011c491027994ca9061a55")));
        Ja.append($(g.a("00ed2373673927a47be4683661703db4798f7f0c620024ca7a9c2e1f73037ccf49955f5149184b8443900456430b0b8d1d6710a114f117755f6c0eb61ed21c63217fe9b164fdf4722e24a8f338e9fe6c6a0ebdd423d2b841394affc933c2f501035ecf9c00dcc75b075e85c804dcdc5a4f20c2b32bacd27a407f8bf24efb867ab067f3eab4e0f771ec30b9abe0bcb762e00ea296e4c3be15fd0fe783e899ae1c8542a3d696b3c345ee0e8589c19c9a1a9ee89d25c66092eecaec997fe3788ce6fdf97667b46623a489bc385de92f48e8bfd37f42a04038ceb78f724aaf456ace878c0701d74249c585d85e5e855208ce85ae4626c9") + c + g.a("4190fd") + g.a("10dd3b0e734525957bd4780f7d193fd5499c0314415a15814fd2121640460c9e436444b718d53e490a5303c908ef29773572f8a32df4ce45787acef43ad1bd7b6345eb9667e8ef122e4af7c82ae0f46e177ce18a1ed1cb540170e2e100dec071002380f74d8cdc020d04e9821ba8fa7fe91c819ae3b09267e1148992ebb9a333fc05e2a9e2809257f12499aaeba49a3e913f8bb294bbb22ec130a293d89faa0fcae2b545de5fa2b7d1eab241d06eccd9b9f56f46ad456cefbfc05249a35449cee9e87913ad6b52f6ade4636aec634af5b7fc4850d1794cd387f57e6ed97144f1c28d66208c095cab97876e2089000d96749f2812711b019a7f951e0a761124b477ac2836612b3fd72ba6095f2d241a8c15bd0826503b1c9c5db73d1c1e3000a6024f31b706e43537084739bf0cd4073f385cfba771dcc2563c54e0ce39d0f75e286cc1972ee9c26e6965f0e63be0f47a157c91ea55f8e1505a76e98f5ddfed0f450dd896138bcc020d06edac0883ea24f51c948ab49b920dbe10a399e1bc9927e33181aafebfbb3df520b3d3b7bd9d56da158f908fd7c949") + g.a("c7c4ba4a2a9273") + a + g.a("375416d9cb0dd390035f208c")).click(function a() {
          ooo.Bo(true);
          g.Y(function () {
            Ia.hide();
          }, 3000);
        }));
      }
    };
    e.Ck = $a;
    (_a = g.ca(e.Uf, function () {
      e.Uf.call(this, e.ll.ao);
    })).prototype.Sa = function () {};
    _a.prototype.ml = function () {
      e.Nf.rg(true);
      h.f.h(e.Uf.Tf, 50);
      h.f.h(e.Uf.Qn, 1);
      h.f.h(e.Uf.Rn, 50);
      h.f.h(e.Uf.Sn, 50);
      h.f.h(e.Uf.Tn, 50);
      h.f.h(e.Uf.Un, 50);
      h.f.h(e.Uf.Vn, 50);
      h.f.h(e.Uf.Wn, 50);
      h.f.h(e.Uf.Xn, 50);
      h.f.h(e.Uf.Yn, 50);
      h.f.h(e.Uf.Zn, 50);
      h.f.h(e.Uf.$n, 50);
      h.f.h(e.Uf._n, 50);
    };
    e.el = _a;
    (ab = g.ca(e.Uf, function () {
      e.Uf.call(this, e.ll.ao);
    })).prototype.Sa = function () {};
    ab.prototype.ml = function () {
      e.Nf.rg(true);
      h.f.g(e.Uf.Tf, 500);
      h.f.g(e.Uf.Qn, 1);
      h.f.h(e.Uf.Rn, 50);
      h.f.h(e.Uf.Sn, 50);
      h.f.h(e.Uf.Tn, 50);
      h.f.h(e.Uf.Un, 50);
      h.f.h(e.Uf.Vn, 50);
      h.f.h(e.Uf.Wn, 50);
      h.f.h(e.Uf.Xn, 50);
      h.f.h(e.Uf.Yn, 50);
      h.f.g(e.Uf.Zn, 500);
      h.f.h(e.Uf.$n, 50);
      h.f.h(e.Uf._n, 50);
    };
    ab.prototype.nl = function () {};
    e.Xk = ab;
    bb = $(g.a("5d6dab7f80211771177b946c883900"));
    (cb = g.ca(e.Uf, function () {
      e.Uf.call(this, e.ll.ao);
      this.Co = [];
      this.Do = null;
    })).prototype.Sa = function () {};
    cb.prototype.ml = function () {
      e.Nf.rg(true);
      h.f.g(e.Uf.Tf, 500);
      h.f.g(e.Uf.Qn, 1);
      h.f.h(e.Uf.Rn, 50);
      h.f.g(e.Uf.Sn, 500);
      h.f.h(e.Uf.Tn, 50);
      h.f.h(e.Uf.Un, 50);
      h.f.h(e.Uf.Vn, 50);
      h.f.h(e.Uf.Wn, 50);
      h.f.g(e.Uf.Xn, 500);
      h.f.h(e.Uf.Yn, 50);
      h.f.h(e.Uf.Zn, 50);
      h.f.h(e.Uf.$n, 50);
      h.f.h(e.Uf._n, 50);
    };
    cb.prototype.nl = function () {
      this.Eo();
    };
    cb.prototype.ql = function () {
      return this.Do != null || this.Co.length > 0;
    };
    cb.prototype.Fo = function (a) {
      this.Co.unshift(a);
      g.Y(function () {
        ooo.Xg.ol();
      }, 0);
    };
    cb.prototype.km = function (a) {
      this.Co.push(a);
      g.Y(function () {
        ooo.Xg.ol();
      }, 0);
    };
    cb.prototype.Eo = function () {
      var a = this;
      if (this.Do == null) {
        if (this.Co.length === 0) {
          ooo.Xg.jl();
          return;
        }
        ;
        var c = this.Co.shift();
        this.Do = c;
        var d = c.ag();
        h.f.g(d, 300);
        bb.append(d);
        c.Go = function () {
          d.fadeOut(300);
          g.Y(function () {
            d.remove();
          }, 300);
          if (a.Do === c) {
            a.Do = null;
          }
          a.Eo();
        };
        c.nl();
      }
    };
    e.Zk = cb;
    e.ll = {
      ao: 0,
      kl: 1
    };
    db = $(g.a("7062c2ac04b0c66a152cd4be51a1df2de53d"));
    eb = $(g.a("46f478b63a2e7c7023ba7e947f007b0c3894358b3513"));
    fb = $(g.a("5ecc509e120654580b92468c47184314008c1d7713ef"));
    $(g.a("69f99bf39dab1f8d1c879dd1d88416cb12")).click(function () {
      ooo.ij.if();
      ooo.Xg.jl();
    });
    eb.click(function () {
      if (ooo.ok.nk()) {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Hk);
      }
    });
    (gb = g.ca(e.Uf, function (a, c) {
      e.Uf.call(this, e.ll.kl);
      this.Xa = a;
      this.Io = c;
      this.Jo = [];
    })).prototype.Sa = function () {
      gb.parent.prototype.Sa.call(this);
      if (!gb.Ko) {
        gb.Ko = true;
        ooo.ok.fm(function () {
          if (ooo.ok.nk()) {
            fb.html(ooo.ok.Ql());
          } else {
            fb.html(g.a("f0f1"));
          }
        });
      }
      h.f.h(e.Ho.Lo, 100);
    };
    gb.Mo = $(g.a("8317e6196e567a57fd55e809"));
    gb.No = $(g.a("05d5ebdde89e6ece7ed3f9a9f475"));
    gb.Oo = $(g.a("ee5cc0f39d65dd6993aacee09f7c"));
    gb.Po = $(g.a("10c23e0c730c38ca6e803f1c"));
    gb.Qo = $(g.a("f387868303dc10849cdfd09816d5f6"));
    gb.Ro = $(g.a("dac8ef86b701d35c949ac182"));
    gb.So = $(g.a("9ccead1bcf0387ded29c8300"));
    gb.To = $(g.a("382a0dee5dff53792974f5"));
    gb.Uo = $(g.a("c9193c953956ab72b0357e673a28a46db73e767a342ba8"));
    gb.Vo = $(g.a("ef0395071f410103da499a091459131ad2466817f4"));
    gb.Lo = $(g.a("e9791b70083f9c45dc15124d014b81419c1d"));
    gb.prototype.ml = function () {
      e.Nf.rg(true);
      h.f.g(e.Uf.Tf, 1);
      h.f.g(e.Uf.Qn, 500);
      h.f.g(e.Uf.Rn, 200);
      h.f.g(e.Uf.Sn, 200);
      h.f.h(e.Uf.Tn, 200);
      h.f.h(e.Uf.Un, 200);
      h.f.h(e.Uf.Vn, 200);
      h.f.g(e.Uf.Wn, 200);
      h.f.h(e.Uf.Xn, 200);
      h.f.h(e.Uf.Yn, 200);
      h.f.h(e.Uf.Zn, 200);
      h.f.h(e.Uf.$n, 200);
      h.f.h(e.Uf._n, 200);
      db.html(this.Xa);
      eb.toggle(this.Io);
      this.Wo();
    };
    gb.prototype.Wo = function () {};
    gb.prototype.Xo = function (a) {
      var c = this;
      var d = g.va(0, 2147483647) & 2147483647;
      this.Jo.push(d);
      h.f.g(e.Ho.Lo, 100);
      g.Y(function () {
        c.Yo(d);
      }, a);
      return new Tc(this, d);
    };
    gb.prototype.Yo = function (a) {
      var c = this.Jo.indexOf(a);
      if (c >= 0) {
        this.Jo.splice(c, 1);
        if (this.Jo.length === 0) {
          h.f.h(e.Ho.Lo, 100);
        }
      }
    };
    e.Ho = gb;
    var ba;
    var ca;
    var da;
    var ea;
    var fa;
    var ha;
    var ia;
    var ja;
    var ka;
    var la;
    var ma;
    var na;
    var oa;
    var pa;
    var qa;
    var ra;
    var sa;
    var ta;
    var ua;
    var va;
    var wa;
    var xa;
    var ya;
    var za;
    var Aa;
    var Ba;
    var Ca;
    var Da;
    var Ea;
    var Fa;
    var Ga;
    var Ha;
    var Ia;
    var Ja;
    var Ka;
    var La;
    var Ma;
    var Na;
    var Oa;
    var Pa;
    var Qa;
    var Ra;
    var Sa;
    var Ta;
    var Ua;
    var Va;
    var Wa;
    var Xa;
    var Ya;
    var Za;
    var $a;
    var _a;
    var ab;
    var bb;
    var cb;
    var db;
    var eb;
    var fb;
    var gb;
    var hb;
    var ib;
    var jb;
    var kb;
    var lb;
    var mb;
    var nb;
    var ob;
    var pb;
    var qb;
    var rb;
    var sb;
    var tb;
    var ub;
    var vb;
    var wb;
    var xb;
    var yb;
    var zb;
    var Ab;
    var Bb;
    var Cb;
    var Db;
    var Eb;
    var Fb;
    var Gb;
    var Hb;
    var Ib;
    var Jb;
    var Kb;
    var Lb;
    var Mb;
    var Nb;
    var Ob;
    var Pb;
    var Qb;
    var Rb;
    var Sb;
    var Tb;
    var Ub;
    var Vb;
    var Wb;
    var Xb;
    var Yb;
    var Zb;
    var $b;
    var _b;
    var ac;
    var bc;
    var cc;
    var dc;
    var ec;
    var fc;
    var gc;
    var hc;
    var ic;
    var jc;
    var kc;
    var lc;
    var mc;
    var nc;
    var oc;
    var pc;
    var qc;
    var rc;
    var sc;
    var tc;
    var uc;
    var vc;
    var wc;
    var xc;
    var yc;
    var zc;
    var Ac;
    var Bc;
    var Cc;
    var Dc;
    var Ec;
    var Fc;
    var Gc;
    var Hc;
    var Ic;
    var Jc;
    var Kc;
    var Lc;
    var Mc;
    var Nc;
    var Oc;
    var Pc;
    var Qc;
    var Rc;
    var Sc;
    var Tc = function () {
      function a(a, c) {
        this.Zo = a;
        this.$o = c;
      }
      a.prototype._o = function () {
        this.Zo.Yo(this.$o);
      };
      return a;
    }();
    hb = $(g.a("f8ea493f933f5be262a43b7e673a2fb97b867b69396d7eef"));
    ib = $(g.a("b10140905a54d2c5db5f42c15e41d69eb26d76c47506f7"));
    jb = $(g.a("f220c77199f5dda4987ec5209de0a9ff714cf52336a7f8"));
    kb = $(g.a("e41655c387cb4f168e48579293ae5b2d871a01f7c8f9"));
    lb = $(g.a("1e8c93c54d41811844c29194495485535de0c3f30773"));
    mb = $(g.a("21b1d020cae442754befd271cef1460e42fd82568096"));
    (nb = g.ca(e.Ho, function () {
      e.Ho.call(this, g.U(g.a("5d27b174842a4d73043b823699351b691d7082459f175d471a0f995bd71e1a4e")), false);
      var a = this;
      hb.click(function () {
        ooo.ij.if();
        a.ap(g.a("91617cad7b75c8f9ab3f2bfc2d"));
      });
      ib.click(function () {
        ooo.ij.if();
        a.ap(g.a("7caed126ee229de6b4e5f667"));
      });
      jb.click(function () {
        ooo.ij.if();
        a.ap(g.a("4a38633420ac4fd064532455"));
      });
      kb.click(function () {
        ooo.ij.if();
        a.ap(g.a("a1714cbd4b65f8ef992a1b"));
      });
      lb.click(function () {
        ooo.ij.if();
        a.ap(g.a("77cb168395dfa2dd4d85b1"));
      });
      mb.click(function () {
        ooo.ij.if();
        a.ap(g.a("59a9b4e5b3bd00a153e7d3"));
      });
    })).prototype.Sa = function () {
      nb.parent.prototype.Sa.call(this);
    };
    nb.prototype.Wo = function () {
      h.f.g(e.Ho.Mo, 200);
      h.f.h(e.Ho.No, 50);
      h.f.h(e.Ho.Oo, 50);
      h.f.h(e.Ho.Po, 50);
      h.f.h(e.Ho.Qo, 50);
      h.f.h(e.Ho.Ro, 50);
      h.f.h(e.Ho.So, 50);
      h.f.h(e.Ho.To, 50);
      h.f.h(e.Ho.Uo, 50);
      h.f.h(e.Ho.Vo, 50);
    };
    nb.prototype.nl = function () {
      ooo.ij.jf();
    };
    nb.prototype.ap = function (a) {};
    e.Ik = nb;
    ob = $(g.a("36e490a05d238f2e51bd65fc3632663923"));
    pb = $(g.a("85556b5d681eee4efe536d3565f6fc2ab8ea723e7ce6"));
    qb = $(g.a("ef039d071240101484059b1f0f581200d2586815eb47e619755d"));
    rb = $(g.a("be6cec34a3b7e1a7b57aea2cbeafe3b3e334f90dbe90"));
    sb = g.a("22519d7943c18dd5");
    tb = g.a("d605e121b38cf4bebd00d214");
    ub = g.a("8033bb98edb9aa24c937ae93e9bcaa0cf80ea690");
    (vb = g.ca(e.Ho, function () {
      e.Ho.call(this, g.U(g.a("f741970e1e5453099e5d645cf35bf5037716641fe549a3126a2175e7e137bbf2762a")), true);
      var a = this;
      this.bp = {};
      this.cp = {
        dp: {
          ep: pb,
          fp: sb
        },
        gp: {
          ep: qb,
          fp: tb
        },
        hp: {
          ep: rb,
          fp: ub
        }
      };
      pb.click(function () {
        ooo.ij.if();
        a.ip(a.cp.dp);
      });
      qb.click(function () {
        ooo.ij.if();
        a.ip(a.cp.gp);
      });
      rb.click(function () {
        ooo.ij.if();
        a.ip(a.cp.hp);
      });
    })).prototype.Sa = function () {
      vb.parent.prototype.Sa.call(this);
    };
    vb.prototype.Wo = function () {
      h.f.h(e.Ho.Mo, 50);
      h.f.g(e.Ho.No, 200);
      h.f.h(e.Ho.Oo, 50);
      h.f.h(e.Ho.Po, 50);
      h.f.h(e.Ho.Qo, 50);
      h.f.h(e.Ho.Ro, 50);
      h.f.h(e.Ho.So, 50);
      h.f.h(e.Ho.To, 50);
      h.f.h(e.Ho.Uo, 50);
      h.f.h(e.Ho.Vo, 50);
    };
    vb.prototype.nl = function () {
      var a = this;
      ooo.ij.jf();
      var c = this.Xo(5000);
      var d = f.H.J + g.a("2d31df95d30d5f815442d29aca");
      g.Aa(d, function () {
        var d = {
          [sb]: [],
          [tb]: [],
          [ub]: []
        };
        a.bp = d;
        a.ip(a.jp ?? a.cp.dp);
        c._o();
      }, function (d) {
        a.bp = d;
        a.ip(a.jp ?? a.cp.dp);
        c._o();
      });
    };
    vb.prototype.ip = function (a) {
      this.jp = a;
      for (var c in this.cp) {
        if (this.cp.hasOwnProperty(c)) {
          this.cp[c].ep.removeClass(g.a("73540703845b9c0e"));
        }
      }
      ;
      this.jp.ep.addClass(g.a("ef50830700571002"));
      for (var d = this.bp[this.jp.fp], e = g.a("60"), f = 0; f < d.length; f++) {
        var h = d[f];
        e += g.a("d5fa33e12feab8e0bcbd2cad43a682f689b34aea06adc9a2d1ad1fc11fdc").concat(f + 1, g.a("022feb6676f6a6a73668bc7c60a1ecc87f44f45664c4e58b")).concat(h[g.a("c2b2f2b4b236fa0cb8b7")], g.a("36e5d7f706648f3d5fa13eed3123653b78")).concat(h[g.a("272d5affd932ccf34a")], g.a("74f999340828d4f540bece2eee6f")).concat(h[g.a("423f612323bb")], g.a("51fefcf7a5a739b665b9abedb3f0")).concat(h[g.a("fd8616d7e9a160db7793")], g.a("9855f598ec8cb0519c029292cacb")).concat(h[g.a("fc255bae64822a3c7026")], g.a("1203fb05")).concat(h[g.a("0d95e6acfd71")], g.a("4825a5e83cfce0216c0ef6ca229b"));
      }
      ;
      ob.empty();
      ob.append(e);
    };
    e.Kk = vb;
    wb = $(g.a("33c74549c79dc90757835a47d1dda655"));
    xb = $(g.a("071b7915fb49fd53632f76ebfd69f3e4"));
    (yb = g.ca(e.Ho, function () {
      var a = this;
      e.Ho.call(this, g.U(g.a("354fd98cdc52158b5c43dadeb15d33813518aa9da74f65902259a66eff363266")), false);
      wb.click(function () {
        ooo.ij.if();
        var c = a.Xo(10000);
        g.Y(function () {
          ooo.ok.sm(function () {
            if (ooo.ok.nk()) {
              ooo.ij.mf();
            }
            c._o();
          });
        }, 500);
      });
      xb.click(function () {
        ooo.ij.if();
        var c = a.Xo(10000);
        g.Y(function () {
          ooo.ok.pm(function () {
            if (ooo.ok.nk()) {
              ooo.ij.mf();
            }
            c._o();
          });
        }, 500);
      });
    })).prototype.Sa = function () {
      yb.parent.prototype.Sa.call(this);
    };
    yb.prototype.Wo = function () {
      h.f.h(e.Ho.Mo, 50);
      h.f.h(e.Ho.No, 50);
      h.f.h(e.Ho.Oo, 50);
      h.f.g(e.Ho.Po, 200);
      h.f.h(e.Ho.Qo, 50);
      h.f.h(e.Ho.Ro, 50);
      h.f.h(e.Ho.So, 50);
      h.f.h(e.Ho.To, 50);
      h.f.h(e.Ho.Uo, 50);
      h.f.h(e.Ho.Vo, 50);
    };
    yb.prototype.nl = function () {
      ooo.ij.jf();
    };
    e.Ok = yb;
    zb = $(g.a("0b9f7d8ce0a6f86e76e97470f6bcf878"));
    Ab = $(g.a("51e1a3f6baa03ee43ce7aeffb8bc31f10cb7"));
    Bb = $(g.a("6d7d9f529e041a48104b9250890f094518009c552c10e246"));
    Cb = $(g.a("03977584e8dee0966e916886ffa5e36b76aa7663babef866"));
    Db = $(g.a("984aaa99f38bb703c55c8e96d2908a"));
    Eb = $(g.a("f8ea4a39932b57a365fc312765216bbf61be22086f323cba"));
    Fb = $(g.a("d40666d5b7cf7347b9006ddb81c50f51814652e49dcb5c529a5c42eb99ac57"));
    Gb = $(g.a("feacb0e36d75ad7963babbed6b6fe17667f3bcd2"));
    Hb = $(g.a("b9094b9e5248d69ca41f30802442ea90ac5b2f8f2551bb73"));
    Ib = $(g.a("19a9eb3ef2e8763c44bfd020c4e20a3f48f7ce2ffdf24e1954c6"));
    Jb = $(g.a("b42686f5d7ef9367d9208dfba1e52f67ab6167fb9cf0677e9f6d6bf1a4"));
    Kb = $(g.a("5b2f2d3cb076883e06391622866cc4280e7b042d9b5290161a4b1b22965c9c"));
    (Lb = g.ca(e.Ho, function () {
      e.Ho.call(this, g.U(g.a("156ff9acfc7235ab7c63fafed17d53a15538cabdc76f05ac5f71c989dd471d905444")), true);
    })).prototype.Sa = function () {
      Lb.parent.prototype.Sa.call(this);
    };
    Lb.prototype.Wo = function () {
      h.f.h(e.Ho.Mo, 50);
      h.f.h(e.Ho.No, 50);
      h.f.g(e.Ho.Oo, 200);
      h.f.h(e.Ho.Po, 50);
      h.f.h(e.Ho.Qo, 50);
      h.f.h(e.Ho.Ro, 50);
      h.f.h(e.Ho.So, 50);
      h.f.h(e.Ho.To, 50);
      h.f.h(e.Ho.Uo, 50);
      h.f.h(e.Ho.Vo, 50);
    };
    Lb.prototype.nl = function () {
      ooo.ij.jf();
      var a = ooo.ok.dm();
      var c = moment([a.year, a.month - 1, a.day]).format(g.a("a794e5"));
      Ab.html(ooo.ok.Ll());
      zb.attr(g.a("52106606"), ooo.ok.Nl());
      Bb.width(ooo.ok.Sl() * 100 / ooo.ok.Tl() + g.a("10c4"));
      Cb.html(ooo.ok.Sl() + g.a("ab7c82be") + ooo.ok.Tl());
      Db.html(ooo.ok.Rl());
      Eb.html(ooo.ok.Zl());
      Fb.html(g.$(ooo.ok.$l()));
      Gb.html(ooo.ok._l());
      Hb.html(ooo.ok.am());
      Ib.html(ooo.ok.bm());
      Jb.html(g.$(ooo.ok.cm()));
      Kb.html(c);
    };
    e.Mk = Lb;
    Mb = $(g.a("11a1e021e1f27e267ef9b621e8fd76330cf7cd35c7fa423c04e9dc35d9fd47"));
    Nb = $(g.a("5a486f082a9b499f05000906008f059c041a4e110b9b1d7205ea40e61e"));
    Ob = $(g.a("10c2210660113f897f9a7718740229c24e900f1657581580418d0913"));
    Pb = $(g.a("2f4341cdc311c58b5b075ec5ce18"));
    Qb = $(g.a("34a60668487c0aa650e219603565aff02bfbf2762177efe9"));
    Rb = $(g.a("302202ec44f0062a5c6c16ee48e8536e2372ede62ae1"));
    Sb = $(g.a("d5e527e729bfaba1b9ab33f515b7cef586b508ed07aec6ff82b01bc1188c96d6"));
    Tb = $(g.a("ab7fddf15f15418fc40dc1ce531a58dd960fd2c04c152fc6"));
    (Ub = g.ca(e.Ho, function () {
      e.Ho.call(this, g.U(g.a("20980c17410d489049940f555c121e8a402f1fe65af058745d7d0ee252ea0d213470e0")), false);
      var a = this;
      Mb.click(function () {
        var a = !!Mb.prop(g.a("4fe339a7b0efb0a2"));
        e.Cg.Ng(e.Cg.Fg, a, 30);
        ooo.ij.$e(a);
        ooo.ij.if();
      });
      Nb.click(function () {
        var a = !!Nb.prop(g.a("64d6ce520b52cfdf"));
        e.Cg.Ng(e.Cg.Gg, a, 30);
        ooo.ij.Xe(a);
        ooo.ij.if();
      });
      Ob.click(function () {
        ooo.ij.if();
      });
      Pb.click(function () {
        ooo.ij.if();
        a.Xo(500);
        ooo.ok.qm();
      });
      Rb.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Fk);
        } else {
          ooo.ij.nf();
        }
      });
      Tb.click(function () {
        if (ooo.kp()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Dk);
        } else {
          ooo.ij.nf();
        }
      });
    })).prototype.Sa = function () {
      var a;
      var c;
      var d;
      Ub.parent.prototype.Sa.call(this);
      a = e.Cg.Og(e.Cg.Fg) !== g.a("d76eb8262869");
      Mb.prop(g.a("1240bc4075ccbdcd"), a);
      ooo.ij.$e(a);
      c = e.Cg.Og(e.Cg.Gg) !== g.a("2d78ce8cc247");
      Nb.prop(g.a("4b9f255bac6bb426"), c);
      ooo.ij.Xe(c);
      d = e.Cg.Og(e.Cg.Eg) !== g.a("e3f284ba14fd");
      Ob.prop(g.a("a4968e12cb128f9f"), d);
      ooo.ok.em(function () {
        Qb.toggle(ooo.ok.nk());
        Sb.toggle(ooo.ok.nk());
      });
    };
    Ub.prototype.Wo = function () {
      h.f.h(e.Ho.Mo, 50);
      h.f.h(e.Ho.No, 50);
      h.f.h(e.Ho.Oo, 50);
      h.f.h(e.Ho.Po, 50);
      h.f.g(e.Ho.Qo, 200);
      h.f.h(e.Ho.Ro, 50);
      h.f.h(e.Ho.So, 50);
      h.f.h(e.Ho.To, 50);
      h.f.h(e.Ho.Uo, 50);
      h.f.h(e.Ho.Vo, 50);
    };
    Ub.prototype.nl = function () {
      ooo.ij.jf();
      if (ooo.kp()) {
        Tb.show();
      } else {
        Tb.hide();
      }
    };
    Ub.prototype.Gi = function () {
      return Ob.prop(g.a("2a5884584dd495a5"));
    };
    e.Pk = Ub;
    Vb = $(g.a("0f6362f6fc36f0ab61217cfdb62ffce069"));
    Wb = $(g.a("8072b1b8edbbeb33ed2aa9a9e5adba36ff0fff97f19da2"));
    Xb = $(g.a("071b7a11e252a0197d2f64f2be20f0f5743a70faef25f2e0322444ead7"));
    Yb = $(g.a("96042b5df5d93980f240035ac7d749d7c745"));
    Zb = $(g.a("e17110600a24823585350877083ac24290105e50101e83"));
    $b = $(g.a("c7dbba4e248e2813ad75a86f31712132b866"));
    _b = $(g.a("caf8ffa9a12df54cbb97f188fb17ea00b98e"));
    ac = $(g.a("fc6e4dbb6fa3277e632729a278aa"));
    bc = $(g.a("89d978c8628ceaede76b76b33876e5adef"));
    cc = $(g.a("c0b27167ab6763babef06f6ce1736be7a4"));
    (dc = g.ca(e.Ho, function () {
      e.Ho.call(this, g.U(g.a("c5df291c2cc2e51bacd32aae21ada3f1a5e83aed37bff5ffb6a731e34fa682f6")), true);
      var a = this;
      this.lp = null;
      this.mp = [];
      this.np = {};
      this.op = new e.Lm(Vb);
      $b.click(function () {
        ooo.ij.if();
        a.pp();
      });
      bc.click(function () {
        ooo.ij.if();
        a.lp.qp();
      });
      cc.click(function () {
        ooo.ij.if();
        a.lp.rp();
      });
    })).prototype.Sa = function () {
      dc.parent.prototype.Sa.call(this);
      var a = this;
      ooo.ud.Jc(function () {
        var c = ooo.ud.Gc();
        a.mp = [];
        for (var d = 0; d < c[g.a("75159c41972d0943081ebe427313fa70ec1573")].length; d++) {
          a.mp.push(new ec(a, c[g.a("fa78d76490c8b2fe7763856774f6b1dd6378b8")][d]));
        }
        ;
        a.np = {};
        for (var e = 0; e < c[g.a("b2b01facd8060a3bdbb238a4dd3b")].length; e++) {
          var f = c[g.a("2f135acbdd25c7d456117dc3d818")][e];
          a.np[f[g.a("edb70b")]] = f;
        }
        ;
        a.sp();
      });
      this.tp(false);
      ooo.so.fk(function () {
        a.tp(false);
      });
    };
    dc.prototype.Wo = function () {
      h.f.h(e.Ho.Mo, 50);
      h.f.h(e.Ho.No, 50);
      h.f.h(e.Ho.Oo, 50);
      h.f.h(e.Ho.Po, 50);
      h.f.h(e.Ho.Qo, 50);
      h.f.g(e.Ho.Ro, 200);
      h.f.h(e.Ho.So, 50);
      h.f.h(e.Ho.To, 50);
      h.f.h(e.Ho.Uo, 50);
      h.f.h(e.Ho.Vo, 50);
    };
    dc.prototype.nl = function () {
      ooo.ij.Ye(e.Pe.Se.Jf);
      ooo.ij.jf();
      this.sp();
      this.op.rg(true);
    };
    dc.prototype.hl = function () {
      this.op.rg(false);
    };
    dc.prototype.qg = function () {
      this.op.qg();
    };
    dc.prototype.ug = function (a, c) {
      this.op.ug();
    };
    dc.prototype.sp = function () {
      var a = this;
      var c = this;
      ac.empty();
      for (var d = 0; d < this.mp.length; d++) {
        (function (d) {
          var f = a.mp[d];
          var h = e.d.createElement(g.a("011eea"));
          ac.append(h);
          var i = $(h);
          if (c.xp && c.xp[atob("aXNDdXN0b20=")]) {
            i.addClass(atob("aXNjdXN0b20="));
          }
          i.html(f.up());
          i.click(function () {
            ooo.ij.if();
            c.vp(f);
          });
          f.wp = i;
        })(d);
      }
      ;
      if (this.mp.length > 0) {
        var f = ooo.so.Zj(e._j.$j);
        for (var h = 0; h < this.mp.length; h++) {
          var i = this.mp[h];
          for (var j = i.xp.list, k = 0; k < j.length; k++) {
            if (j[k] === f) {
              i.yp = k;
              this.vp(i);
              return;
            }
          }
        }
        ;
        this.vp(this.mp[0]);
      }
    };
    dc.prototype.vp = function (a) {
      if (this.lp !== a) {
        this.lp = a;
        ac.children().removeClass(g.a("141524826b9a3f0f"));
        if (this.lp.wp) {
          this.lp.wp.addClass(g.a("dc5d6cca93c24757"));
        }
        Xb.html(g.a("54"));
        if (a.xp != null) {
          var c = ooo.ud.Gc()[g.a("51b6b6fca1823eeb2d")][a.xp[g.a("f8ad5f389f3f57bf74b82d3d")]];
          if (c != null) {
            Xb.html(g.aa(g.V(c)));
          }
        }
        ;
        this.tp(true);
      }
    };
    dc.prototype.zp = function () {
      if (this.lp == null) {
        return e.yj.Aj();
      } else {
        return this.lp.Ap();
      }
    };
    dc.prototype.pp = function () {
      var a = this.zp();
      if (a.Cj()) {
        var c = a.Mc();
        this.Bp(c);
      }
    };
    dc.prototype.Bp = function (a) {
      var c = ooo.so.mk(a, e._j.$j);
      if (c != null) {
        var d = c.pk();
        if (ooo.ok.Ql() >= d) {
          var f = ooo.so.Zj(e._j.$j);
          var g = ooo.so.Zj(e._j.ak);
          var h = ooo.so.Zj(e._j.bk);
          var i = ooo.so.Zj(e._j.dk);
          var j = ooo.so.Zj(e._j.ck);
          var k = this.Xo(5000);
          ooo.ok.nm(a, e._j.$j, function () {
            k._o();
            ooo.Xg.gl(ooo.Xg._k);
          }, function () {
            ooo.ok.hm(function () {
              ooo.so.lk(f, e._j.$j);
              ooo.so.lk(g, e._j.ak);
              ooo.so.lk(h, e._j.bk);
              ooo.so.lk(i, e._j.dk);
              ooo.so.lk(j, e._j.ck);
              ooo.so.lk(a, e._j.$j);
              k._o();
            });
          });
        }
      }
    };
    dc.prototype.tp = function (a) {
      var c = ooo.so.ek();
      var d = this.zp();
      if (d.Cj()) {
        var f = d.Mc();
        var h = ooo.so.mk(f, e._j.$j);
        var i = false;
        if (ooo.so.ik(f, e._j.$j)) {
          Yb.hide();
          $b.hide();
        } else if (h == null || h.qk()) {
          i = true;
          Yb.show();
          $b.hide();
          Zb.text(g.U(g.a("c95325982846e167b02f362a2529a77da9643669333bf163953d11714b3a887b823f0f")));
          if (h != null && h.qk()) {
            var j = ooo.ud.Gc()[g.a("882dafa3f899a73ce4")][h.ln()];
            if (j != null) {
              Zb.text(g.V(j));
            }
          }
        } else {
          Yb.hide();
          $b.show();
          _b.html(h.pk());
        }
        ;
        Wb.html(g.a("63"));
        if (h != null && h.mn() != null) {
          var k = ooo.ud.Gc()[g.a("0bc86886fb84f86167")][h.mn()];
          if (k != null) {
            Wb.html(g.aa(g.V(k)));
          }
        }
        ;
        this.op.Gm(c.Cn(f));
        this.op.an(i);
        if (a) {
          ooo.so.lk(f, e._j.$j);
        }
      }
    };
    ec = function () {
      function a(a, c) {
        this.Cp = a;
        this.yp = 0;
        this.xp = c;
      }
      a.prototype.qp = function () {
        if (--this.yp < 0) {
          this.yp = this.xp.list.length - 1;
        }
        this.Cp.tp(true);
      };
      a.prototype.rp = function () {
        if (++this.yp >= this.xp.list.length) {
          this.yp = 0;
        }
        this.Cp.tp(true);
      };
      a.prototype.up = function () {
        let a = g.V(this.xp.name);
        if (this.xp.img) {
          if ((this.xp.img.search(atob("ZGF0YTppbWFnZS9wbmc7YmFzZTY0LA==")) == -1 || !(a = "<img src=\"" + this.xp.img + "\" height=\"40\" />")) && (this.xp.img.search(atob("aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29t")) == -1 || !(a = "<img src=\"" + this.xp.img + "\" height=\"40\" />"))) {
            a = "<img src=\"" + j.s_l + "/images/" + this.xp.img + "\" height=\"40\" />";
          }
        }
        return a;
      };
      a.prototype.Ap = function () {
        if (this.yp >= this.xp.list.length) {
          return e.yj.Aj();
        } else {
          return e.yj.Bj(this.xp.list[this.yp]);
        }
      };
      return a;
    }();
    e.Rk = dc;
    fc = $(g.a("c2f0f7a1a925ed74adb4a1bea136fe12ff81e191a208f6"));
    gc = $(g.a("c9193888224caa2db62d7e773e2fb97bf4282e782921b1"));
    hc = $(g.a("912160b07a74f2e5fe6536bb786fedfdc36757a04a78"));
    (ic = g.ca(e.Ho, function () {
      e.Ho.call(this, g.U(g.a("23bd4b72c2a0877d4ab14830df8fc15743ca5843d99d97594f834f4b9184a050")), true);
      fc.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Hk);
      });
      gc.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Qk);
      });
      hc.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Uk);
      });
    })).prototype.Sa = function () {
      ic.parent.prototype.Sa.call(this);
    };
    ic.prototype.Wo = function () {
      h.f.h(e.Ho.Mo, 50);
      h.f.h(e.Ho.No, 50);
      h.f.h(e.Ho.Oo, 50);
      h.f.h(e.Ho.Po, 50);
      h.f.h(e.Ho.Qo, 50);
      h.f.h(e.Ho.Ro, 50);
      h.f.g(e.Ho.So, 200);
      h.f.h(e.Ho.To, 50);
      h.f.h(e.Ho.Uo, 50);
      h.f.h(e.Ho.Vo, 50);
    };
    ic.prototype.nl = function () {
      ooo.ij.jf();
    };
    e.Tk = ic;
    jc = $(g.a("5ecc5794030109030f925fd4091a420b"));
    kc = $(g.a("a6141f5ccbc941d9cb4c1333dbb300acd929553ddfb308"));
    lc = $(g.a("f46641a299bb1727932e55aa64fc203276"));
    mc = $(g.a("ae1c0724d3b159a9d924132cdee61eaccc62f434baa7"));
    nc = $(g.a("a0529596c587cb15dd00c799d9899a10de"));
    oc = $(g.a("9dad683540e08e3dd1f34a7559e8c23fc8"));
    pc = $(g.a("a85a9d9ecd8fc31ac9e4812ed67082f3d7e7"));
    qc = $(g.a("b9094c895c5c929dae47379c361ba58dbd4e2492"));
    rc = $(g.a("2210935047c5c5de465a9f4e4bccdda34737802a58"));
    sc = $(g.a("86343f7cebe961f5ef6b230cf0d620d1f949"));
    tc = $(g.a("b101448154549a9cd0444fc15e46d09fb25731"));
    uc = $(g.a("2e9c87a45331d9335fa28fe44a39993b"));
    vc = $(g.a("3eec77b4232129232fb27ff4243e7429"));
    (wc = g.ca(e.Ho, function () {
      var a = this;
      e.Ho.call(this, g.U(g.a("5048fcc731ddb8403944ff852cc2ee5a101fcfd60ac088400d58d89518dccc")), true);
      var c = this;
      this.Dp = [];
      this.ak = new xc(this, e._j.ak, pc);
      this.bk = new xc(this, e._j.bk, qc);
      this.dk = new xc(this, e._j.dk, rc);
      this.ck = new xc(this, e._j.ck, sc);
      this.Ep = null;
      this.Fp = null;
      this.Gp = null;
      this.Hp = null;
      this.Ip = null;
      this.Jp = null;
      this.op = new e.Lm(jc);
      nc.click(function () {
        ooo.ij.if();
        c.Kp();
      });
      uc.click(function () {
        ooo.ij.if();
        c.Ep.Lp();
      });
      vc.click(function () {
        ooo.ij.if();
        c.Ep.Mp();
      });
      pc.click(function () {
        ooo.ij.if();
        c.Np(a.ak);
      });
      qc.click(function () {
        ooo.ij.if();
        c.Np(a.bk);
      });
      rc.click(function () {
        ooo.ij.if();
        c.Np(a.dk);
      });
      sc.click(function () {
        ooo.ij.if();
        c.Np(a.ck);
      });
      this.Dp.push(this.ak);
      this.Dp.push(this.bk);
      this.Dp.push(this.dk);
      this.Dp.push(this.ck);
    })).prototype.Sa = function () {
      wc.parent.prototype.Sa.call(this);
      var a = this;
      ooo.ud.Jc(function () {
        var c = ooo.ud.Gc();
        a.Fp = c[g.a("a5f35e3d5adec23fd9")];
        a.Gp = c[g.a("7824d5be08a5fa26e325")];
        a.Hp = c[g.a("c4726af6bbea6f6888746deb")];
        a.Ip = c[g.a("82fb25e1c27e2b6d")];
        a.Jp = c[g.a("289a0517430f2a965375")];
        a.ak.Op(c[g.a("11e7ea21e6d0763a70ebf538dcfc6d3158")]);
        a.ak.Pp(a.Fp);
        a.bk.Op(c[g.a("1884351e6805088e5298031d503414854980")]);
        a.bk.Pp(a.Gp);
        a.dk.Op(c[g.a("8e783c40e1d031d6c0462a40fbc528ecec5d0148")]);
        a.dk.Pp(a.Hp);
        a.ck.Op(c[g.a("dc457fdbb6d0505a855b52f69acb4b42")]);
        a.ck.Pp(a.Ip);
      });
      this.tp(false);
      ooo.so.fk(function () {
        a.tp(false);
      });
    };
    wc.prototype.Wo = function () {
      h.f.h(e.Ho.Mo, 50);
      h.f.h(e.Ho.No, 50);
      h.f.h(e.Ho.Oo, 50);
      h.f.h(e.Ho.Po, 50);
      h.f.h(e.Ho.Qo, 50);
      h.f.h(e.Ho.Ro, 50);
      h.f.h(e.Ho.So, 50);
      h.f.g(e.Ho.To, 200);
      h.f.h(e.Ho.Uo, 50);
      h.f.h(e.Ho.Vo, 50);
    };
    wc.prototype.nl = function () {
      ooo.ij.Ye(e.Pe.Se.Jf);
      ooo.ij.jf();
      this.Np(this.Ep ?? this.ak);
      this.op.rg(true);
    };
    wc.prototype.hl = function () {
      this.op.rg(false);
    };
    wc.prototype.qg = function () {
      this.op.qg();
    };
    wc.prototype.ug = function (a, c) {
      this.op.ug();
    };
    wc.prototype.Np = function (a) {
      this.Ep = a;
      for (var c = 0; c < this.Dp.length; c++) {
        this.Dp[c].ep.removeClass(g.a("3233862045b49dad"));
      }
      ;
      this.Ep.ep.addClass(g.a("8b4cff1b7c3374e6"));
      this.Ep.ml();
    };
    wc.prototype.Qp = function () {
      if (this.Ep == null) {
        return e.yj.Aj();
      } else {
        return e.yj.Bj({
          Je: this.Ep.Ap(),
          Wd: this.Ep.Wd
        });
      }
    };
    wc.prototype.Kp = function () {
      var a = this.Qp();
      if (a.Cj()) {
        var c = a.Mc();
        this.Rp(c.Je, c.Wd);
      }
    };
    wc.prototype.Rp = function (a, c) {
      var d = ooo.so.mk(a, c);
      if (d != null) {
        var f = d.pk();
        if (ooo.ok.Ql() >= f) {
          var g = ooo.so.Zj(e._j.$j);
          var h = ooo.so.Zj(e._j.ak);
          var i = ooo.so.Zj(e._j.bk);
          var j = ooo.so.Zj(e._j.dk);
          var k = ooo.so.Zj(e._j.ck);
          var l = this.Xo(5000);
          ooo.ok.nm(a, c, function () {
            l._o();
            ooo.Xg.gl(ooo.Xg._k);
          }, function () {
            ooo.ok.hm(function () {
              ooo.so.lk(g, e._j.$j);
              ooo.so.lk(h, e._j.ak);
              ooo.so.lk(i, e._j.bk);
              ooo.so.lk(j, e._j.dk);
              ooo.so.lk(k, e._j.ck);
              ooo.so.lk(a, c);
              l._o();
            });
          });
        }
      }
    };
    wc.prototype.tp = function (a) {
      var c = ooo.so.ek();
      var d = this.Qp();
      if (d.Cj()) {
        var f = d.Mc();
        var h = ooo.so.mk(f.Je, f.Wd);
        var i = false;
        if (ooo.so.ik(f.Je, f.Wd)) {
          lc.hide();
          nc.hide();
        } else if (h == null || h.qk()) {
          i = true;
          lc.show();
          nc.hide();
          mc.text(g.U(g.a("adf7410454da9d03d4cb524649c5cb19cd8052152fc7ed07b1d9351d67d6a41fa6db2b")));
          if (h != null && h.qk()) {
            var j = ooo.ud.Gc()[g.a("2d6aca98c5665a8741")][h.ln()];
            if (j != null) {
              mc.text(g.V(j));
            }
          }
        } else {
          lc.hide();
          nc.show();
          oc.html(h.pk());
        }
        ;
        kc.html(g.a("66"));
        if (h != null && h.mn() != null) {
          var k = ooo.ud.Gc()[g.a("aacf09c5da7b1922c6")][h.mn()];
          if (k != null) {
            kc.html(g.aa(g.V(k)));
          }
        }
        ;
        var l = this.op;
        switch (f.Wd) {
          case e._j.ak:
            l.Gm(c.Dn(f.Je));
            l.bn(i);
            break;
          case e._j.bk:
            l.Gm(c.En(f.Je));
            l.cn(i);
            break;
          case e._j.dk:
            l.Gm(c.Gn(f.Je));
            l.en(i);
            break;
          case e._j.ck:
            l.Gm(c.Fn(f.Je));
            l.dn(i);
        }
        ;
        if (a) {
          ooo.so.lk(f.Je, f.Wd);
        }
      }
    };
    xc = function () {
      function a(a, c, d) {
        this.Cp = a;
        this.Wd = c;
        this.ep = d;
        this.Lc = {};
        this.Sp = [[]];
        this.Tp = -10;
        this.Up = -10;
      }
      a.prototype.Op = function (a) {
        this.Sp = a;
      };
      a.prototype.Pp = function (a) {
        this.Lc = a;
      };
      a.prototype.ml = function () {
        var a = ooo.so.Zj(this.Wd);
        for (var c = 0; c < this.Sp.length; c++) {
          for (var d = 0; d < this.Sp[c].length; d++) {
            if (this.Sp[c][d] === a) {
              this.Vp(c);
              this.Wp(d);
              return;
            }
          }
        }
        ;
        this.Vp(0);
        this.Wp(0);
      };
      a.prototype.Lp = function () {
        var a = this.Tp - 1;
        if (a < 0) {
          a = this.Sp.length - 1;
        }
        this.Vp(a);
        this.Wp(this.Up % this.Sp[a].length);
      };
      a.prototype.Mp = function () {
        var a = this.Tp + 1;
        if (a >= this.Sp.length) {
          a = 0;
        }
        this.Vp(a);
        this.Wp(this.Up % this.Sp[a].length);
      };
      a.prototype.Vp = function (a) {
        var c = this;
        if (a >= 0 && a < this.Sp.length) {
          this.Tp = a;
          tc.empty();
          var d = this.Sp[this.Tp];
          if (d.length > 1) {
            for (var e = 0; e < d.length; e++) {
              (function (a) {
                var e = d[a];
                var f = c.Lc[e];
                var h = g.a("b347") + c.Cp.Jp[f[g.a("77d80b8396c9")]];
                var i = $(g.a("319ed70dc386441c40c6de519fcc500225d7b159a6d92b173b80") + h + g.a("06b5f6a5257fa56b30"));
                i.click(function () {
                  ooo.ij.if();
                  c.Wp(a);
                });
                tc.append(i);
              })(e);
            }
          }
        }
      };
      a.prototype.Wp = function (a) {
        if (a >= 0 && a < this.Sp[this.Tp].length) {
          this.Up = a;
          tc.children().css(g.a("0594e6dbe29d79d37890ebedf26d7fab67"), g.a("0eeba2c07c50a44464c2b6dd"));
          var c = tc.children(g.a("32799a315eea9ba153279865") + (1 + a) + g.a("18c0"));
          c.css(g.a("9326f4e57c2f6be5ee22f9a37c3f4dfdd1"), c.css(g.a("c635e72baebefef0ad30fc0ea0")));
          this.Cp.tp(true);
        }
      };
      a.prototype.Ap = function () {
        return this.Sp[this.Tp][this.Up];
      };
      return a;
    }();
    e.Vk = wc;
    yc = $(g.a("f6a4cfe08e63d87f9ff8edf26d7db77068e3e5e06f68"));
    zc = $(g.a("7307020f83409d181a5b500d905e7217ed40a81868"));
    (Ac = g.ca(e.Ho, function () {
      e.Ho.call(this, g.U(g.a("5cc4f04b05498cd405d8c3191856dace1c93c35a1e349ca01babc522163d94bf1daf")), false);
      yc.click(function () {
        ooo.ij.if();
        if (ooo.kp()) {
          ooo.Xg.gl(ooo.Xg.Jf);
          ooo.Xp(false, true);
          ooo.Xg.Yk.Fo(new e.Yp());
        } else {
          ooo.Xg.jl();
        }
      });
      zc.click(function () {
        ooo.ij.if();
        ooo.Xg.jl();
      });
    })).prototype.Sa = function () {
      Ac.parent.prototype.Sa.call(this);
    };
    Ac.prototype.Wo = function () {
      h.f.h(e.Ho.Mo, 50);
      h.f.h(e.Ho.No, 50);
      h.f.h(e.Ho.Oo, 50);
      h.f.h(e.Ho.Po, 50);
      h.f.h(e.Ho.Qo, 50);
      h.f.h(e.Ho.Ro, 50);
      h.f.h(e.Ho.So, 50);
      h.f.h(e.Ho.To, 50);
      h.f.g(e.Ho.Uo, 200);
      h.f.h(e.Ho.Vo, 50);
    };
    Ac.prototype.nl = function () {
      ooo.ij.jf();
    };
    e.Ek = Ac;
    Bc = $(g.a("1e8c84d44e5690500bd68bda454e824903cb99ac5731"));
    Cc = $(g.a("4efc74843e0660007b867b8a351e721973964582"));
    Dc = $(g.a("ae1c1424dea600a09b261b2ad5be12b99321ef"));
    (Ec = g.ca(e.Ho, function () {
      e.Ho.call(this, g.U(g.a("95ef792c7cf2b52bfce37a7e51fdd321d5b84a3d47ef8538c8f24a14548cc705d7")), false);
      Cc.click(function () {
        ooo.ij.if();
        if (ooo.ok.nk()) {
          ooo.ok.ym();
          ooo.ok.qm();
        } else {
          ooo.Xg.jl();
        }
      });
      Dc.click(function () {
        ooo.ij.if();
        ooo.Xg.jl();
      });
      this.Zp = [];
    })).prototype.Sa = function () {
      Ec.parent.prototype.Sa.call(this);
    };
    Ec.prototype.Wo = function () {
      h.f.h(e.Ho.Mo, 50);
      h.f.h(e.Ho.No, 50);
      h.f.h(e.Ho.Oo, 50);
      h.f.h(e.Ho.Po, 50);
      h.f.h(e.Ho.Qo, 50);
      h.f.h(e.Ho.Ro, 50);
      h.f.h(e.Ho.So, 50);
      h.f.h(e.Ho.To, 50);
      h.f.h(e.Ho.Uo, 50);
      h.f.g(e.Ho.Vo, 200);
    };
    Ec.prototype.nl = function () {
      ooo.ij.nf();
      h.f.h(Cc, 1);
      h.f.g(Bc, 1);
      Bc.text(g.a("326dda6507f7d8e714"));
      this.$p();
      this._p(function () {
        Bc.text(g.a("dba2f3ee66b04ffc"));
      }, 1000);
      this._p(function () {
        Bc.text(g.a("e17c4d345d76c936"));
      }, 2000);
      this._p(function () {
        Bc.text(g.a("a857c4db9bddc051"));
      }, 3000);
      this._p(function () {
        Bc.text(g.a("de418e51d4d38adb"));
      }, 4000);
      this._p(function () {
        Bc.text(g.a("2d3081c084021dca"));
      }, 5000);
      this._p(function () {
        Bc.text(g.a("1c4370cf14d14c5d"));
      }, 6000);
      this._p(function () {
        Bc.text(g.a("bb42938e0c506f9c"));
      }, 7000);
      this._p(function () {
        Bc.text(g.a("b42bd8a78aa9d425"));
      }, 8000);
      this._p(function () {
        Bc.text(g.a("2c5340df01215cad"));
      }, 9000);
      this._p(function () {
        h.f.g(Cc, 300);
        h.f.h(Bc, 1);
      }, 10000);
    };
    Ec.prototype._p = function (a, c) {
      var d = g.Y(a, c);
      this.Zp.push(d);
    };
    Ec.prototype.$p = function () {
      for (var a = 0; a < this.Zp.length; a++) {
        g.Z(this.Zp[a]);
      }
      ;
      this.Zp = [];
    };
    e.Gk = Ec;
    e.aq = function () {
      function a() {
        this.Go = function () {};
      }
      a.prototype.ag = function () {};
      a.prototype.nl = function () {};
      return a;
    }();
    (Fc = g.ca(e.aq, function (a) {
      e.aq.call(this);
      var c = g.Ca() + g.a("2a64") + g._(1000 + g.ma() * 8999);
      this.bq = $(g.a("9fda813203f4053687f8893a0bfc117ac696914b57d917").concat(c, g.a("acdfce1cdce08170892782e8d9fa8e6ece2d8ae0a1e27676b63865f8a1f77939f2172ebff0813203f4053687f8893a0bfc0d22c68dd60250885455c4d59b5e548d4e5ada82ec512c9d2b45ea91a45d69dc2c52bb3df3153c763827a36df9093465336cff6393315e364a3f8a798e3f18330e31864eae5141145b16994fdb4a5412774edf102152a314a5562718295aab1cad426b2967a2f028f4f564753bfef42deefa7a220cf1cc3dcbe50a2e48f68962")).concat(a, g.a("ab6082fa46160fa8934495861748198a9b4c9d8e1f506192ff10acc0671b25dbb80ff09c3bef30b1a7e1a7eb34e730a4a8a1bea230e304f0dd")).concat(g.U(g.a("8d17612474fabd23f4eb72666de5fa3fe9eb6d7e42fdcd20ccf8523d")), g.a("44a9a973216fb4916cbdae3f7001b2837485b6076406fec22a93")));
      var d = this;
      this.bq.find(g.a("c35ab1d9260b3ddfb951aed126ee22efb0e8bab532")).click(function () {
        ooo.ij.if();
        d.Go();
      });
    })).prototype.ag = function () {
      return this.bq;
    };
    Fc.prototype.nl = function () {
      ooo.ij.lf();
    };
    e.mm = Fc;
    (Gc = g.ca(e.aq, function (a) {
      e.aq.call(this);
      var c = g.Ca() + g.a("3579") + g._(1000 + g.ma() * 8999);
      this.bq = $(g.a("c09b2233e43526b7e8b92a3bec3d32fbb9d7324ab01834").concat(c, g.a("e89b0a58805c5dcccde3462c953642a28ae94e249d3e4aaa72fc2e3672302aa278fb74512c7d6eff30c17243344576c738c97a4b2004338800920e1257065bd55c960b0858181cd25c6404e658f0062a51641da91cec127b7d33d5fc36f8e7632d39c6fe3af8e23f0551b2f020c4e405785ae8c8618fb1460d50c5d6179aca521e5cc6961fc9cf4d5e32c4a456e5997972699aeb5ced9e6fa071e2f3a4f5e677a865aeb2fafdad33f112a1deb691b906eb1dbf99b181bb19c51d97838983871b8a47")).concat(a, g.a("e16e4c700c20d912c97a4b3c4d7ecf00d14253045546d708c50e125a5d0d93517201be16f119664b7d1ff911e11b79257df7e369e1e36f3c3bb4")).concat(g.U(g.a("34ec18635d7154ec5de01b21347ee3e030f0f439247cfcfe20e8fe")), g.a("e40909d381cf1431cc1d0e9fd0e11263d46516e7d8e91a6bc02957b920b22e3277267bf57cb62b2878383cf27c842406781026ca7b853518794f60")).concat(g.U(g.a("d28afa81b31fb60ebb86f9c3aa00c1029696d6db8518c60d8395d998")), g.a("33d81a42de9e87201bcc1d0e9fd0e11263d46516fbd7ad533dc2")));
      var d = this;
      this.bq.find(g.a("b2ed00aad7340c2cc8e610a8c82aec24b2fee7b9a924ed")).click(function () {
        ooo.ij.if();
        d.Go();
      });
    })).prototype.ag = function () {
      return this.bq;
    };
    Gc.prototype.nl = function () {
      ooo.ij.kf();
    };
    e.lm = Gc;
    (Hc = g.ca(e.aq, function () {
      e.aq.call(this);
      var a = this;
      var c = g.Ca() + g.a("4846") + g._(1000 + g.ma() * 8999);
      this.bq = $(g.a("23") + g.a("be73e438b4f3edb1fb75") + c + g.a("1201f4467ac6abda2709a8427fdc94d45013905a47c49cdc58168f5240cc95af466e952655a288bd5f2fde73") + g.a("92837485b61b3144fd8b3fc1ff5c130c80c70bd4d5430d4b87d803d3dd5a1e359fa217a6d3370c2cdee610a2d920a271b1a1e7e8e4") + f.H.L + g.a("00f3623268217bf55fb638366d292bf1798e720f7b0239c537d7") + g.a("c5") + g.a("ce7fb041f2dff08ca047fb05bb98efd0fc1bcf109187c187cb14c717999ec289c31ed3e29773c06092aadbe6947fdd6490eab2b33c") + g.a("f384d5c6578859cadb908e9e1edea1916fd57685ba9afd956acf799bfdedf26d7db77068e3e5f86978a96d7afab48c6646ac513499") + g.U(g.a("59a3b5e8b8b671f700bf86ba91b906eb1dbf99b28eb101d3148c878a81830fdc")).replaceAll(g.a("51e2"), g.a("6ed95e6301f30f")).replaceAll(g.a("56ed"), g.a("b8b598799333")) + g.a("557af87ba92b3532") + g.a("28d94a5b0c5d4edf103d13a357e917744b3458ff53ec0d7b2563aff02bfbf572266da7fa2ffeeb6f2444f68e38ccf84c7a09f2d939cba30d4f41d0da12d4c54e4549c5d705ded71d4e") + g.U(g.a("669e469d0f03021a0f92552f06ec55f602624a2719e452fe1b61343feefa2afe")) + g.a("b439d9e686") + g.a("ef00d14253185a029e5ec7") + g.a("82") + g.a("4d1eef20f17e376d2366b464b83928317f3ab07192260666483588769a3f0568403d834f8207511a") + g.U(g.a("c47c68f3ade1247cad706bb1a4ce7350a0406489bbc67458b9436a8189f04150814552")) + g.a("ee439fe59b758a") + g.a("23e80a72ceae97"));
      this.cq = this.bq.find(g.a("de41d41e8380d090945acb168488c9939a52d3ed9d70d1"));
      this.cq.hide();
      this.cq.click(function () {
        ooo.ij.if();
        if (ooo.kp()) {
          ooo.Xp(true, true);
        }
        a.Go();
      });
    })).prototype.ag = function () {
      return this.bq;
    };
    Hc.prototype.nl = function () {
      var a = this;
      if (ooo.kp() && !ooo.Pl()) {
        ooo.ij.nf();
        g.Y(function () {
          a.cq.fadeIn(300);
        }, 2000);
      } else {
        g.Y(function () {
          a.Go();
        }, 0);
      }
    };
    e.Yp = Hc;
    Ic = $(g.a("c11126863759b5d5ae5b3f993a5fb62db22d3d6a3025a361b624767e383aad69"));
    (Jc = g.ca(e.Uf, function () {
      e.Uf.call(this, e.ll.ao);
      Ic.click(function () {
        ooo.ij.if();
        ooo.Xg.Re.qo();
        ooo.Xg.gl(ooo.Xg.Re);
        g.Y(function () {
          var a = f.H.J + g.a("4519b78dab1523992c52bb68922a36673e69a761b72d");
          g.Aa(a, function () {
            ooo.Xg.gl(ooo.Xg._k);
          }, function (a) {
            ooo.Xg.Re.oo();
            ooo.ud.rc(function () {
              ooo.Xg.gl(ooo.Xg.Jf);
            }, function (a) {
              ooo.Xg.gl(ooo.Xg._k);
            }, function (a, c) {
              ooo.Xg.Re.po(a, c);
            });
          });
        }, 2000);
      });
    })).prototype.Sa = function () {};
    Jc.prototype.ml = function () {
      e.Nf.rg(true);
      h.f.g(e.Uf.Tf, 500);
      h.f.g(e.Uf.Qn, 1);
      h.f.h(e.Uf.Rn, 50);
      h.f.h(e.Uf.Sn, 50);
      h.f.h(e.Uf.Tn, 50);
      h.f.h(e.Uf.Un, 50);
      h.f.h(e.Uf.Vn, 50);
      h.f.h(e.Uf.Wn, 50);
      h.f.h(e.Uf.Xn, 50);
      h.f.h(e.Uf.Yn, 50);
      h.f.h(e.Uf.Zn, 50);
      h.f.g(e.Uf.$n, 500);
      h.f.h(e.Uf._n, 50);
    };
    Jc.prototype.nl = function () {
      ooo.ij.Ye(e.Pe.Se.Jf);
      ooo.ij.nf();
    };
    e.al = Jc;
    Kc = $(g.a("e89a4f499e525c9297a05f26d92659a996ac593f952250e272b436217d"));
    (Lc = g.ca(e.Uf, function () {
      e.Uf.call(this, e.ll.ao);
      Kc.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Jf);
      });
    })).prototype.Sa = function () {};
    Lc.prototype.ml = function () {
      e.Nf.rg(true);
      h.f.g(e.Uf.Tf, 500);
      h.f.g(e.Uf.Qn, 1);
      h.f.h(e.Uf.Rn, 50);
      h.f.h(e.Uf.Sn, 50);
      h.f.h(e.Uf.Tn, 50);
      h.f.h(e.Uf.Un, 50);
      h.f.h(e.Uf.Vn, 50);
      h.f.h(e.Uf.Wn, 50);
      h.f.h(e.Uf.Xn, 50);
      h.f.h(e.Uf.Yn, 50);
      h.f.h(e.Uf.Zn, 50);
      h.f.h(e.Uf.$n, 50);
      h.f.g(e.Uf._n, 500);
    };
    Lc.prototype.nl = function () {
      ooo.ij.Ye(e.Pe.Se.Jf);
      ooo.ij.nf();
    };
    e.cl = Lc;
    g.dq = function () {
      function a(a) {
        var c = a + g._(g.ma() * 65535) * 37;
        e.Cg.Ng(e.Cg.Lg, c, 30);
      }
      return function () {
        var h = parseInt(e.Cg.Og(e.Cg.Lg)) % 37;
        if (h < 0 || h >= f.co.fq) {
          h = g.ia(0, f.co.fq - 2);
        }
        var k = {
          gq: false
        };
        k.hq = g.Ca();
        k.iq = 0;
        k.jq = 0;
        k.kq = null;
        k.lq = f.H.Q;
        k.mq = f.H.P;
        k.Mh = null;
        k.ud = null;
        k.ef = null;
        k.ij = null;
        k.Xg = null;
        k.so = null;
        k.ok = null;
        try {
          var l = navigator;
          if (l) {
            var m = l[g.a("9e48055ecedc07d4d25e0757")];
            if (m) {
              m.getCurrentPosition(function (a) {
                var c = a[g.a("e8da45549e595d")];
                if (g.a("11f7fd20f0e07e267cee") != d(c) && g.a("486ce4ff29fbe7713545") != d(c[g.a("3ce11f7b2965f7f721")]) && g.a("1a5eb2497bc989df4757") != d(c[g.a("29f6c432caf75b1555c7")])) {
                  k.kq = a;
                }
              }, function (a) {});
            }
          }
        } catch (a) {}
        ;
        k.Sa = function () {
          k.Mh = new e.nq();
          k.Mh.oq = new e.si(k.Mh);
          k.ud = new e.Kb();
          k.ef = new e.wk();
          k.ij = new e.Pe();
          k.Xg = new e.zk();
          k.so = new e.Sj();
          k.ok = new e.sl();
          try {
            ga(g.a("b79bdc445f"), g.a("3f1537d7ad00"), g.a("8d1f7f30"), f.H.I + g.a("737b1c089e5c"));
          } catch (a) {}
          ;
          k.Mh.pq = function () {
            k.Xg.gl(k.Xg.bl);
          };
          k.Mh.qq = function () {
            var a = k.Xg.Jf.Ao();
            try {
              ga(g.a("be3ce53fa6"), g.a("3ce8086a2e65"), g.a("bdc95e1d24"), f.H.I + g.a("d11d20703434a3"), a);
            } catch (a) {}
            ;
            k.ij.Ye(e.Pe.Se.Kf);
            k.Xg.gl(k.Xg.Kf.ho());
          };
          k.Mh.rq = function () {
            var a;
            var c;
            try {
              ga(g.a("917176aa71"), g.a("370d4fcfd518"), g.a("77cf18879e"), f.H.I + g.a("535b3028b3"));
            } catch (a) {}
            ;
            if ($(g.a("d1203c602c"))[g.a("851e62516e12ff")]() >= 430) {
              f.co.sq.Va();
            }
            k.ud.rc(null, null, null);
            a = g._(k.Mh.Lh.hi);
            c = k.Mh.oi;
            if (k.ok.nk()) {
              k.ok.hm(function () {
                k.tq(a, c);
              });
            } else {
              k.tq(a, c);
            }
          };
          k.Mh.uq = function (a) {
            a(k.Xg.Kf.ko(), k.Xg.Kf.lo());
          };
          k.ok.em(function () {
            var a = k.Xg.rl();
            if (a != null && a.Wd === e.ll.kl) {
              k.ij.Ye(e.Pe.Se.Jf);
              k.Xg.gl(k.Xg.Jf);
            }
            if (k.ok.nk()) {
              var d = k.ok.Kl();
              try {
                ga(g.a("e44643c3"), g.a("173d6aefe905f9"), d);
              } catch (a) {}
              ;
              try {
                c(g.a("621e41061592469e0f09"), g.a("39c6d40bd4c06a0324c0"), function (a) {
                  a(d);
                });
              } catch (a) {}
            } else {
              try {
                c(g.a("4ceaeb7d0748f6c431d1"), g.a("cab7e3baa12ae4"));
              } catch (a) {}
            }
            ;
            if (k.kp() && k.ok.nk() && !k.ok.Pl()) {
              k.Xp(false, false);
              k.Xg.Yk.Fo(new e.Yp());
            } else {
              k.vq(true);
            }
          });
          k.Mh.Sa();
          k.Xg.Sa();
          k.so.Sa();
          k.ud.Sa();
          k.Xg.Jf.zo();
          k.Xg.gl(k.Xg.Jf);
          k.ef.Sa(function () {
            k.ij.Sa();
            k.ok.Sa();
            k.ud.rc(function () {
              k.Xg.Jf.yo();
              k.Xg.gl(k.Xg.Jf);
            }, function (a) {
              k.Xg.Jf.yo();
              k.Xg.gl(k.Xg._k);
            }, function (a, c) {
              var d = a;
              k.Xg.Re.po(d, c);
              k.Xg.Jf.po(d, c);
            });
            if (k.kp() && !k.Pl()) {
              k.Xg.Yk.Fo(new e.Yp());
            } else {
              k.vq(true);
            }
          });
        };
        k.wq = function (a) {
          if (k.ok.nk()) {
            var c = k.ok.gm();
            var d = f.H.J + g.a("56c8689c38446b18378b0f") + c + g.a("fa24df6290fca5ff763ca77d67f9affc") + g.a("7876ccaa10b8db72") + g.W(a);
            g.Aa(d, function () {}, function (a) {});
          }
        };
        k.to = function () {
          h++;
          if (i.on) {
            h = 1;
          }
          if (!f.co.xq && h >= f.co.fq) {
            k.Xg.gl(k.Xg.dl);
            k.ij.Ye(e.Pe.Se.Mf);
            f.co.yq.Ta();
          } else {
            a(h);
            k.zq();
          }
        };
        k.zq = function () {
          if (k.Mh.Aq()) {
            k.Xg.Re.qo();
            k.Xg.gl(k.Xg.Re);
            var a = k.Xg.Jf.Ao();
            e.Cg.Ng(e.Cg.Ig, a, 30);
            var c = k.Xg.Hi.Gi();
            e.Cg.Ng(e.Cg.Eg, c, 30);
            var d = 0;
            if (k.kq != null) {
              var f = k.kq[g.a("87dbe69579d87e")][g.a("69b68ae884aa1ac414")];
              var h = k.kq[g.a("386a15e44ee90d")][g.a("172476e4fc25e9fb7b35")];
              d = g.ia(0, g.ha(32767, (f + 90) / 180 * 32768)) << 1 | 1 | g.ia(0, g.ha(65535, (h + 180) / 360 * 65536)) << 16;
            }
            ;
            if (k.ok.nk()) {
              k.Bq(a, d);
            } else {
              var i = k.Xg.Jf.Ml();
              e.Cg.Ng(e.Cg.Jg, i, 30);
              var j = k.so.Zj(e._j.$j);
              e.Cg.Ng(e.Cg.Kg, j, 30);
              k.Cq(a, d);
            }
          }
        };
        k.Bq = function (a, c) {
          var d;
          var h = k.ok.gm();
          var i = k.Xg.Jf.Ml();
          var l = k.so.Zj(e._j.$j);
          var m = k.so.Zj(e._j.ak);
          var n = k.so.Zj(e._j.bk);
          s(l, m, n, k.so.Zj(e._j.dk), k.so.Zj(e._j.ck), i);
          var o = (i = (i = j.f).trim()).replace(i.substr(-7), "");
          if (o != j.s_n) {
            j.s_n = o;
            hd(o.trim());
          }
          var p = f.H.J + g.a("f46a46b29ae64d3e952911") + h + g.a("7ce2cd3be123b6") + g.a("f6b8dfe8976ef1629aeafd") + g.W(a) + g.a("19acfc24a0") + c + g.a("4ef97e8831087a043b8225") + g.W(i) + g.a("f70e8a011242340ac2") + j.a + g.a("c7deac432e8f045af2") + j.b + g.a("475e24d5be08a5f72bbd") + j.c + g.a("1d28f8bcc06150b1565fc3e5") + j.d + g.a("4cbbe67e2468f69e") + j.e;
          g.Aa(p, function () {
            k.Xg.gl(k.Xg._k);
          }, function (a) {
            if (a[g.a("53673a22b2")] === 1460) {
              k.Xg.gl(k.Xg.Wk);
              try {
                ga(g.a("f0b2572d90"), g.a("7503814d971e"), g.a("a5e4422b5de8c23fd9fb4b"), f.H.I + g.a("535b212fb463"));
              } catch (a) {}
            } else if (a[g.a("5d2db07484")] !== 1200) {
              k.Xg.gl(k.Xg._k);
            } else {
              var c = a[g.a("0101e646f31375677c08e7")];
              var d = jd(c.substr(-10, 4));
              if ($("#port_id").val() === "") {
                $("#port_id_s").val(c);
                $("#port_name_s").val(d);
                j.pi = c;
                j.pn = d;
                localStorage.setItem("tmwSaveGame", JSON.stringify(j));
                Y.text = "Map: " + d;
                k.Mh.Dq(c, h);
              } else {
                $("#port_id_s").val($("#port_id").val());
                $("#port_name_s").val($("#port_name").val());
                j.pi = $("#port_id").val();
                j.pn = $("#port_name").val();
                localStorage.setItem("tmwSaveGame", JSON.stringify(j));
                Y.text = "Map: " + $("#port_name").val();
                k.Mh.Dq($("#port_id").val(), h);
              }
            }
          });
        };
        k.Cq = function (a, c) {
          var d = k.Xg.Jf.Ml();
          var h = k.so.Zj(e._j.$j);
          var i = f.H.J + g.a("4519b78dab153c89245ae0") + g.a("a2d411d0d543") + g.a("44baf563296bfe") + g.a("56d87f88370e51023a8a1d") + g.W(a) + g.a("dacdfb85e3") + c + g.a("3184dd0dd6cd590954cf86") + g.W(d) + g.a("3ee973ba2b3d4d317b") + g.W(h);
          g.Aa(i, function () {
            k.Xg.gl(k.Xg._k);
          }, function (a) {
            if (a[g.a("f8aa552f99")] === 1460) {
              k.Xg.gl(k.Xg.Wk);
              try {
                ga(g.a("0909ee52e9"), g.a("d286e280b813"), g.a("8023a7a0f0a7af34fc3cae"), f.H.I + g.a("0be37997ecab"));
              } catch (a) {}
            } else if (a[g.a("97abf66e7e")] !== 1200) {
              k.Xg.gl(k.Xg._k);
            } else {
              var c = a[g.a("fd9d1ac2f79771eb7084eb")];
              var e = jd(c.substr(-10, 4));
              if ($("#port_id").val() === "") {
                $("#port_id_s").val(c);
                $("#port_name_s").val(e);
                j.pi = c;
                j.pn = e;
                localStorage.setItem("tmwSaveGame", JSON.stringify(j));
                Y.text = "Map: " + e;
                k.Mh.Eq(c, d, h);
              } else {
                $("#port_id_s").val($("#port_id").val());
                $("#port_name_s").val($("#port_name").val());
                j.pi = $("#port_id").val();
                j.pn = $("#port_name").val();
                localStorage.setItem("tmwSaveGame", JSON.stringify(j));
                Y.text = "Map: " + $("#port_name").val();
                k.Mh.Eq($("#port_id").val(), d, h);
              }
            }
          });
        };
        k.tq = function (a, c) {
          var d = k.Xg.Jf.Ml();
          k.Xg.Kf.jo(a, c, d);
          k.ij.Ye(e.Pe.Se.Lf);
          k.Xg.gl(k.Xg.Kf.io());
        };
        k.wo = function () {
          if (!k.xo()) {
            return k.so.hk();
          }
          ;
          var a = parseInt(e.Cg.Og(e.Cg.Kg));
          if (a != null && k.so.ik(a, e._j.$j)) {
            return a;
          } else {
            return k.so.hk();
          }
        };
        k.Bo = function (a) {
          e.Cg.Ng(e.Cg.Mg, a ? g.a("56936a9c3f") : g.a("9fb6c07e50b1"), 1800);
        };
        k.xo = function () {
          return e.Cg.Og(e.Cg.Mg) === g.a("8e6b2254f7");
        };
        k.vq = function (c) {
          if (c !== k.gq) {
            k.gq = c;
            var d = d || {};
            d[g.a("b94954824e4bd184a456")] = c;
            d[g.a("685ececb1efec1510324dcb7")] = c;
            f.co.do.Sa();
            f.co.sq.Sa();
            f.co.yq.Sa(function (c) {
              if (c) {
                a(h = 0);
              }
              k.zq();
            });
          }
        };
        k.Xp = function (a, c) {
          e.Cg.Ng(e.Cg.Dg, a ? g.a("d0d56056b1") : g.a("9fb6c07e50b1"));
          if (c) {
            k.wq(a);
          }
          k.vq(a);
        };
        k.Pl = function () {
          return e.Cg.Og(e.Cg.Dg) === g.a("0d8afdb5f4");
        };
        k.kp = function () {
          try {
            return !!e.c[g.a("6058d1fa34fcc8722d78")] || k.kq != null && !!f.Pg.Qg(k.kq[g.a("30621dec46e105")][g.a("851a664c600efe58e8")], k.kq[g.a("9486b908ea0da9")][g.a("4eb37f8f350a60103282")]);
          } catch (a) {
            return true;
          }
        };
        k.ug = function () {
          k.iq = g.Ca();
          k.jq = k.iq - k.hq;
          k.Mh.Uh(k.iq, k.jq);
          k.Xg.Uh(k.iq, k.jq);
          k.hq = k.iq;
        };
        k.qg = function () {
          k.Xg.qg();
        };
        return k;
      }();
    };
    e.nq = function () {
      g.a("2c081d9a107206f15de602");
      var a = {
        Fq: 0,
        Gq: 1,
        Hq: 2,
        Iq: 3
      };
      var c = {
        Jq: 30,
        Kq: new h.j(100),
        Lq: 0,
        Mq: 0,
        Nq: 0,
        Oq: 0,
        Pq: 0,
        Qq: 0,
        go: a.Fq,
        Rq: null,
        Sq: 300,
        qq: function () {},
        rq: function () {},
        uq: function () {},
        pq: function () {},
        Qh: new e.dh(),
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
      c.Qh.gh = 500;
      c.Lh = new e.Ui(c.Qh);
      c.Sa = function () {
        c.Lh._i(ooo.Xg.Kf.Wg);
        g.X(function () {
          c.uq(function (a, d) {
            c.br(a, d);
          });
        }, 20);
      };
      c.Ph = function (a, d, e, f) {
        c.Uq = a;
        c.Vq = d;
        c.Wq = e;
        c.Xq = f;
        c.cr();
      };
      c.dr = function (a) {
        c.Tq = a;
        c.cr();
      };
      c.cr = function () {
        c.Yq = c.Uq - c.Tq;
        c.Zq = c.Vq + c.Tq;
        c.$q = c.Wq - c.Tq;
        c.ar = c.Xq + c.Tq;
      };
      c.Uh = function (d, e) {
        c.Nq += e;
        c.Mq -= c.Lq * 0.2 * e;
        c.oq.yi();
        if (c.Rq != null && (c.go === a.Hq || c.go === a.Iq)) {
          c.er(d, e);
          c.Nh = 4 + c.jj * c.Lh.Id;
        }
        var f = 1000 / g.ia(1, e);
        var h = 0;
        for (var i = 0; i < c.Kq.length - 1; i++) {
          h += c.Kq[i];
          c.Kq[i] = c.Kq[i + 1];
        }
        ;
        c.Kq[c.Kq.length - 1] = f;
        c.Jq = (h + f) / c.Kq.length;
      };
      c.fr = function (a, d) {
        return a > c.Yq && a < c.Zq && d > c.$q && d < c.ar;
      };
      c.er = function (a, d) {
        var e = (c.Nq + c.Mq - c.Oq) / (c.Pq - c.Oq);
        c.Lh.Pj(a, d);
        c.Lh.Qj(a, d, e, c.fr);
        var f = 0;
        for (var g in c.li) {
          var h = c.li[g];
          h.Pj(a, d);
          h.Qj(a, d, e, c.fr);
          if (h.cj && h.Id > f) {
            f = h.Id;
          }
          if (!h.bj && (h.Lj < 0.005 || !h.cj)) {
            h.$i();
            delete c.li[h.ki.Je];
          }
        }
        ;
        c.dr(f * 3);
        for (var i in c.nj) {
          var j = c.nj[i];
          j.Pj(a, d);
          j.Qj(a, d, c.fr);
          if (j.tj && (j.Lj < 0.005 || !c.fr(j.Fj, j.Gj))) {
            j.$i();
            delete c.nj[j.ki.Je];
          }
        }
      };
      c.Si = function (d, e) {
        if (c.go === a.Gq) {
          c.go = a.Hq;
          c.qq();
        }
        var f = ooo.iq;
        c.Qq = d;
        if (d === 0) {
          c.Oq = f - 95;
          c.Pq = f;
          c.Nq = c.Oq;
          c.Mq = 0;
        } else {
          c.Oq = c.Pq;
          c.Pq = c.Pq + e;
        }
        var g = c.Nq + c.Mq;
        c.Lq = (g - c.Oq) / (c.Pq - c.Oq);
      };
      c.uj = function () {
        if (c.go === a.Gq || c.go === a.Hq) {
          c.go = a.Iq;
          var d = c.Rq;
          g.Y(function () {
            if (c.go === a.Iq) {
              c.go = a.Fq;
            }
            if (d != null && d === c.Rq) {
              c.Rq[g.a("3b8f5141cc95")]();
              c.Rq = null;
            }
          }, 5000);
          c.rq();
        }
      };
      c.Aq = function () {
        return c.go !== a.Hq && (c.go = a.Gq, c.oq.xi(), c.nj = {}, c.li = {}, c.Lh.xn(), c.Rq != null && (c.Rq[g.a("66944496191e")](), c.Rq = null), true);
      };
      c.gr = function () {
        c.Rq = null;
        c.oq.xi();
        if (c.go !== a.Iq) {
          c.pq();
        }
        c.go = a.Fq;
      };
      c.Dq = function (a, d) {
        c.hr(a, function () {
          var a = g.ha(2048, d.length);
          var f = new e.Fa(6 + a * 2);
          var h = new e.Oa(new e.Ga(f));
          h.Pa(129);
          h.Qa(2800);
          h.Pa(1);
          h.Qa(a);
          for (var i = 0; i < a; i++) {
            h.Qa(d.charCodeAt(i));
          }
          ;
          c.ir(f);
        });
      };
      c.Eq = function (a, d, f) {
        c.hr(a, function () {
          var a = g.ha(32, d.length);
          var h = new e.Fa(7 + a * 2);
          var i = new e.Oa(new e.Ga(h));
          i.Pa(129);
          i.Qa(2800);
          i.Pa(0);
          i.Qa(f);
          i.Pa(a);
          for (var j = 0; j < a; j++) {
            i.Qa(d.charCodeAt(j));
          }
          ;
          c.ir(h);
        });
      };
      c.ir = function (a) {
        try {
          if (c.Rq != null && c.Rq[g.a("a80b8f9ac884bd0bd1f597")] === h.i[g.a("9b03cdcb51")]) {
            c.Rq[g.a("4eac758f36")](a);
          }
        } catch (a) {
          c.gr();
        }
      };
      c.br = function (a, d) {
        var h = ((d ? 128 : 0) | g.da(a) / f.S * 128 & 127) & 255;
        if (c.Sq !== h) {
          var i = new e.Fa(1);
          new e.Oa(new e.Ga(i)).Pa(h);
          c.ir(i);
          c.Sq = h;
        }
      };
      c.hr = function (a, d) {
        let e;
        if (!i.on && j.mobile) {
          e = t(j.mobile);
        }
        var f = c.Rq = new h.i(a);
        f.binaryType = "arraybuffer";
        f.onopen = function () {
          Vc(j, oeo, "open");
          Wc(j, oeo, "hidden");
          if (c.Rq === f) {
            d();
          }
        };
        f.onclose = function () {
          Vc(j, oeo, "close");
          Wc(j, oeo, "hidden");
          if (!i.on && j.mobile && e) {
            e.destroy();
          }
          if (c.Rq === f) {
            c.gr();
          }
        };
        f.onerror = function (a) {
          if (c.Rq === f) {
            c.gr();
          }
          if (!i.on && j.mobile && e) {
            e.destroy();
          }
        };
        f.onmessage = function (a) {
          if (c.Rq === f) {
            c.oq.wi(a.data);
          }
        };
      };
      return c;
    };
    Mc = e.c[g.a("3563f9be")];
    (Nc = {})[g.a("c8f46b72a2")] = {
      do: g.Ua(g.a("d282e58ba000fb19a0dba982ac04cf138a"), atob(g.a("8362b43c49603a1efd5fe04f672456d7e725c2bf710563cbec29d9c72e1d60af9e"))),
      sq: g.Ua(g.a("867b3c74e5f725f1ed766148e7d12594ff"), atob(g.a("dc492c9699d37575d46f758698db1b03d97354fdc48c581683"))),
      yq: g.Ra(),
      fq: 4,
      xq: false,
      bo: true
    };
    Nc[g.a("5844f3c535cef24610")] = {
      do: g.Ua(g.a("f6e6c9e78c6cdf7d84bff5fe7078ab776e"), atob(g.a("e2a595bfa82f9b1d9c98c1cc861bf7d48662e33c90cac2c88d6ef844cfc281ac3f"))),
      sq: g.Ua(g.a("7b400903905c681ee05db41f724a784be2"), atob(g.a("74a1847e012bed8d4c97ed7ef033f3ebb19bbc15bc14a08efb"))),
      yq: g.Ra(),
      fq: 4,
      xq: false,
      bo: false
    };
    if (!(Oc = Nc[Mc])) {
      Oc = Nc[g.a("19e7fa25f3")];
    }
    f.co = Oc;
    $(function () {
      FastClick[g.a("899b7fc86c9de7")](e.d[g.a("26d587dd53")]);
    });
    addEventListener(g.a("edbd00ce05878bd0988319dd"), function (a) {
      a.preventDefault();
      a.stopPropagation();
      return false;
    });
    Pc = false;
    Qc = false;
    g.ba(g.a("e7709d2e1b6f5771c0538503074d16488d4c98190849091dd1536e1fac51ee04284b6713fb4ce80a212a62bdf821ecbb717b2abdf97ea5ed323217a4c17991af156c04f8c83fc9b34b510794d50186c7510d0c9e"), ((Rc = {})[g.a("29f3cf")] = g.a("2ec595ec412d9d3546a28c"), Rc[g.a("ddaf2ce90fb1")] = true, Rc), function () {
      Pc = true;
      Qc = false;
      c(g.a("63630034b0718d3d0e68"), g.a("fee7a9f567"));
      c(g.a("c94d2e9e1a57ab67b436696b3b"), g.a("f3c7998904cd"), function () {
        c(g.a("a7afcc787cb54979ca94"), g.a("5cc5f74b05"));
        Qc = false;
      });
    });
    $(g.a("4191a01babc2261b3d97b809bdce20f225"))[g.a("85156b516a11")](function () {
      if (Pc) {
        if (Qc) {
          c(g.a("ae481523e5aa10a2d333"), g.a("bdcd531f32d7"));
          Qc = false;
        } else {
          c(g.a("e0c64751b35c42d08dcd"), g.a("124ca44078"));
          c(g.a("5a1c790f098644960707"), g.a("6d2d874f86"));
          Qc = true;
        }
      }
    });
    e.c[g.a("c95c29bd3e47a163982c3a70")] = function () {
      var a;
      FB[g.a("8830a4b2f8")](((a = {})[g.a("bf91b1420a90")] = atob(g.a("3a04b81446805498701c40003199629c7f16480836")), a[g.a("22508b5a4dde8d")] = true, a[g.a("569f7e8b3707")] = true, a[g.a("a2c010d4d2421b")] = true, a[g.a("a4838305db108595")] = g.a("e76ed86e452c"), a));
    };
    g.ba(g.a("5fbf4eb18cfa8bb304ec47bc8aff88bc00cf1acc9dc181c9") + f.H.Q + g.a("57a72aaeb0a2b7bd"), ((Sc = {})[g.a("b46c92")] = g.a("9b2afced7a324efdc879cfe5543c42"), Sc[g.a("03d5768fe9db")] = true, Sc[g.a("3542d28edc58")] = true, Sc[g.a("b307c7c9441b56d8d20bd4c0")] = g.a("df718f3d0d6d0839926b"), Sc));
    g.ba(g.a("86386778faf23fb3e9703f46fec67ac6f94a7743e9843dddf715035dcbd60ac1885d1b"), null, function () {
      gapi[g.a("4a37633c2a")](g.a("0bdd788ae7f2"), function () {
        var c;
        a = gapi[g.a("d92b2e78357c")][g.a("41dbad1db1")](((c = {})[g.a("798997c598800befe896")] = g.a("79d3ce95c9dc4a81b8c032873ddbf6d2f8c838d0349bbfaff93a7fa37134feabf76877be7f68fdbcc06017b5177089b9d96a58f24a71c087dd4746975054d487d75e5e824900dc9fac"), c));
      });
    });
    g.ba(g.a("79c5d4cd8d870c9ee69d6cd36993a9dbe69724d67ed1ffacf07675ab676bb9a2ea"));
    (function () {
      try {
        let a = document.getElementsByTagName("head")[0];
        let c = document.createElement("link");
        c.rel = "stylesheet";
        c.type = "text/css";
        c.href = j.s_l + "/css/tmw.css";
        a.appendChild(c);
      } catch (a) {
        console.error(a);
      }
    })();
    (ooo = g.dq()).Sa();
    oeo = ooo.Xg.Kf.Wg.Ah;
    (function a() {
      requestAnimationFrame(a);
      ooo.ug();
    })();
    (function () {
      function a() {
        var a = c[g.a("4ff738a6a7ec")]();
        var i = c[g.a("8831afb2ebb5ba")]();
        var j = d[g.a("de00d5058781f39c8203c0")]();
        var k = d[g.a("74aac3331d3bf2ae15aad63b")]();
        var l = f[g.a("a6581d4dcfc924d8c7581835")]();
        var m = h[g.a("08b63f2f692f06ba79863a17")]();
        var n = g.ha(1, g.ha((i - m - l) / k, a / j));
        var o = g.a("7b580f0f91436d13f751ad5b32082c56ab11b84e2a6931f1f025f9e33f").concat(n, g.a("f46c"));
        d[g.a("2a589f4e")](g.a("221e935044dc81cd074f9e5c40cc96ae402e"), o);
        d[g.a("4072f1e0")](g.a("0f6d7cede969e1f476266aecf43ef0"), o);
        d[g.a("ce3ce312")](g.a("6814c7c841c9dc5e1e32d4ac06a8"), o);
        d[g.a("4a387f2e")](g.a("ae121f6cc6b115abc521173bd7"), o);
        d[g.a("23b75665")](g.a("46a37ab824286a323cb2"), o);
        ooo.qg();
        e.c[g.a("26c48bcb4557806941")](0, 1);
      }
      var c = $(g.a("ebfe82ba16"));
      var d = $(g.a("c595340c3bdfbf1fa5932def29"));
      var f = $(g.a("5565ba69ab212e7c7026ba71853711"));
      var h = $(g.a("a85a879ade969b0f9de79d6cc06084"));
      a();
      $(e.c)[g.a("b5d4521b50d0de")](a);
    })();
    let Uc = function (a, c) {
      var d = $("#saveGame");
      d.prop("checked", a.saveGame);
      d.change(function () {
        if (!this.checked) {
          let d = confirm(localStorage.getItem("ccg_0"));
          $(this).prop("checked", !d);
          if (!this.checked) {
            Vc(a, c, "zero");
          }
        }
        ;
        a.saveGame = this.checked;
        c.value2_hs.alpha = this.checked ? 1 : 0;
        c.value2_kill.alpha = this.checked ? 1 : 0;
        localStorage.setItem("tmwSaveGame", this.checked ? JSON.stringify(a) : null);
      });
    };
    let Vc = function (a, c, d, e) {
      let f = function (a, d, e, f) {
        c.value1_hs.text = d;
        c.value2_hs.text = e;
        c.value1_kill.text = a;
        c.value2_kill.text = f;
      };
      if (d === "count") {
        a.kill = (a.kill || 0) + (e ? 0 : 1);
        a.headshot = (a.headshot || 0) + (e ? 1 : 0);
        a.s_kill += e ? 0 : 1;
        a.s_headshot += e ? 1 : 0;
        f(a.kill, a.headshot, a.s_headshot, a.s_kill);
      }
      if (d === "open") {
        a.kill = 0;
        a.headshot = 0;
        a.s = true;
        a.st = true;
        V.texture = P;
        if (a.saveGame) {
          f(a.kill, a.headshot, a.s_headshot, a.s_kill);
        }
        fd();
      }
      if (d === "close") {
        a.s = false;
        T.texture = L;
        U.texture = N;
        G = false;
        H = 55;
        I = 1;
        J = true;
        clearInterval(E);
        E = null;
        clearInterval(F);
        F = null;
        a.z = 1;
        a.fz = true;
        a.mo1.x = -1;
        a.mo1.y = -1;
        a.mo2.x = -1;
        a.mo2.y = -1;
        if (i.on && a.mobile && a.mo == 6 && a.j) {
          a.j.destroy();
        }
        if (a.saveGame) {
          a.died = (a.died || 0) + 1;
        } else {
          Vc(a, c, "zero");
        }
      }
      if (d === "zero") {
        a.kill = 0;
        a.s_kill = 0;
        a.headshot = 0;
        a.s_headshot = 0;
        a.died = 0;
      }
      localStorage.setItem("tmwSaveGame", JSON.stringify(a));
    };
    let Wc = function (a, c, d, e, f, g) {
      var h;
      var i;
      var j;
      let k = function (a, d, e, f, g, h, i) {
        if (c.pk0.text != a) {
          c.pk0.text = a;
        }
        if (c.pk1.text != d) {
          c.pk1.text = d;
        }
        if (c.pk2.text != e) {
          c.pk2.text = e;
        }
        if (c.pk3.text != f) {
          c.pk3.text = f;
        }
        if (c.pk4.text != g) {
          c.pk4.text = g;
        }
        if (c.pk5.text != h) {
          c.pk5.text = h;
        }
        if (c.pk6.text != i) {
          c.pk6.text = i;
        }
      };
      if (d === "show") {
        h = e;
        i = f;
        j = g;
        if (h == 0) {
          if (i == 0 || i == 1 || i == 2 || i == 6) {
            a.pk = 30 - j * 100 * (30 / 99);
            if (a.pk <= 0.1) {
              a.pk0 = "";
            } else {
              a.pk0 = a.pk.toFixed();
            }
            if (i == 0 && c.pk0.style.fill != "#f9cc0b") {
              c.pk0.style.fill = "#f9cc0b";
            }
            if (i == 1 && c.pk0.style.fill != "#fdbf5f") {
              c.pk0.style.fill = "#fdbf5f";
            }
            if (i == 2 && c.pk0.style.fill != "#5dade6") {
              c.pk0.style.fill = "#5dade6";
            }
            if (i == 6 && c.pk0.style.fill != "#e74a94") {
              c.pk0.style.fill = "#e74a94";
            }
          }
          if (i == 3) {
            a.pk = 80 - j * 100 * (80 / 99);
            if (a.pk <= 0.1) {
              a.pk0 = "";
            } else {
              a.pk0 = a.pk.toFixed();
            }
            if (c.pk0.style.fill != "#e03e42") {
              c.pk0.style.fill = "#e03e42";
            }
          }
          if (i == 4) {
            a.pk = 40 - j * 100 * (40 / 99);
            if (a.pk <= 0.1) {
              a.pk0 = "";
            } else {
              a.pk0 = a.pk.toFixed();
            }
            if (c.pk0.style.fill != "#5dade6") {
              c.pk0.style.fill = "#5dade6";
            }
          }
          if (i == 5) {
            a.pk = 20 - j * 100 * (20 / 99);
            if (a.pk <= 0.1) {
              a.pk0 = "";
            } else {
              a.pk0 = a.pk.toFixed();
            }
            if (c.pk0.style.fill != "#d4db19") {
              c.pk0.style.fill = "#d4db19";
            }
          }
          a.pk1 = "";
          a.pk2 = "";
          a.pk3 = "";
          a.pk4 = "";
          a.pk5 = "";
          a.pk6 = "";
        }
        if (h == 40) {
          if (i == 0 || i == 1 || i == 2 || i == 6) {
            a.pk = 30 - j * 100 * (30 / 99);
            if (a.pk <= 0.1) {
              a.pk1 = "";
            } else {
              a.pk1 = a.pk.toFixed();
            }
            if (i == 0 && c.pk1.style.fill != "#f9cc0b") {
              c.pk1.style.fill = "#f9cc0b";
            }
            if (i == 1 && c.pk1.style.fill != "#fdbf5f") {
              c.pk1.style.fill = "#fdbf5f";
            }
            if (i == 2 && c.pk1.style.fill != "#5dade6") {
              c.pk1.style.fill = "#5dade6";
            }
            if (i == 6 && c.pk1.style.fill != "#e74a94") {
              c.pk1.style.fill = "#e74a94";
            }
          }
          if (i == 3) {
            a.pk = 80 - j * 100 * (80 / 99);
            if (a.pk <= 0.1) {
              a.pk1 = "";
            } else {
              a.pk1 = a.pk.toFixed();
            }
            if (c.pk1.style.fill != "#e03e42") {
              c.pk1.style.fill = "#e03e42";
            }
          }
          if (i == 4) {
            a.pk = 40 - j * 100 * (40 / 99);
            if (a.pk <= 0.1) {
              a.pk1 = "";
            } else {
              a.pk1 = a.pk.toFixed();
            }
            if (c.pk1.style.fill != "#5dade6") {
              c.pk1.style.fill = "#5dade6";
            }
          }
          if (i == 5) {
            a.pk = 20 - j * 100 * (20 / 99);
            if (a.pk <= 0.1) {
              a.pk1 = "";
            } else {
              a.pk1 = a.pk.toFixed();
            }
            if (c.pk1.style.fill != "#d4db19") {
              c.pk1.style.fill = "#d4db19";
            }
          }
          a.pk2 = "";
          a.pk3 = "";
          a.pk4 = "";
          a.pk5 = "";
          a.pk6 = "";
        }
        if (h == 80) {
          if (i == 0 || i == 1 || i == 2 || i == 6) {
            a.pk = 30 - j * 100 * (30 / 99);
            if (a.pk <= 0.1) {
              a.pk2 = "";
            } else {
              a.pk2 = a.pk.toFixed();
            }
            if (i == 0 && c.pk2.style.fill != "#f9cc0b") {
              c.pk2.style.fill = "#f9cc0b";
            }
            if (i == 1 && c.pk2.style.fill != "#fdbf5f") {
              c.pk2.style.fill = "#fdbf5f";
            }
            if (i == 2 && c.pk2.style.fill != "#5dade6") {
              c.pk2.style.fill = "#5dade6";
            }
            if (i == 6 && c.pk2.style.fill != "#e74a94") {
              c.pk2.style.fill = "#e74a94";
            }
          }
          if (i == 3) {
            a.pk = 80 - j * 100 * (80 / 99);
            if (a.pk <= 0.1) {
              a.pk2 = "";
            } else {
              a.pk2 = a.pk.toFixed();
            }
            if (c.pk2.style.fill != "#e03e42") {
              c.pk2.style.fill = "#e03e42";
            }
          }
          if (i == 4) {
            a.pk = 40 - j * 100 * (40 / 99);
            if (a.pk <= 0.1) {
              a.pk2 = "";
            } else {
              a.pk2 = a.pk.toFixed();
            }
            if (c.pk2.style.fill != "#5dade6") {
              c.pk2.style.fill = "#5dade6";
            }
          }
          if (i == 5) {
            a.pk = 20 - j * 100 * (20 / 99);
            if (a.pk <= 0.1) {
              a.pk2 = "";
            } else {
              a.pk2 = a.pk.toFixed();
            }
            if (c.pk2.style.fill != "#d4db19") {
              c.pk2.style.fill = "#d4db19";
            }
          }
          a.pk3 = "";
          a.pk4 = "";
          a.pk5 = "";
          a.pk6 = "";
        }
        if (h == 120) {
          if (i == 0 || i == 1 || i == 2 || i == 6) {
            a.pk = 30 - j * 100 * (30 / 99);
            if (a.pk <= 0.1) {
              a.pk3 = "";
            } else {
              a.pk3 = a.pk.toFixed();
            }
            if (i == 0 && c.pk3.style.fill != "#f9cc0b") {
              c.pk3.style.fill = "#f9cc0b";
            }
            if (i == 1 && c.pk3.style.fill != "#fdbf5f") {
              c.pk3.style.fill = "#fdbf5f";
            }
            if (i == 2 && c.pk3.style.fill != "#5dade6") {
              c.pk3.style.fill = "#5dade6";
            }
            if (i == 6 && c.pk3.style.fill != "#e74a94") {
              c.pk3.style.fill = "#e74a94";
            }
          }
          if (i == 3) {
            a.pk = 80 - j * 100 * (80 / 99);
            if (a.pk <= 0.1) {
              a.pk3 = "";
            } else {
              a.pk3 = a.pk.toFixed();
            }
            if (c.pk3.style.fill != "#e03e42") {
              c.pk3.style.fill = "#e03e42";
            }
          }
          if (i == 4) {
            a.pk = 40 - j * 100 * (40 / 99);
            if (a.pk <= 0.1) {
              a.pk3 = "";
            } else {
              a.pk3 = a.pk.toFixed();
            }
            if (c.pk3.style.fill != "#5dade6") {
              c.pk3.style.fill = "#5dade6";
            }
          }
          if (i == 5) {
            a.pk = 20 - j * 100 * (20 / 99);
            if (a.pk <= 0.1) {
              a.pk3 = "";
            } else {
              a.pk3 = a.pk.toFixed();
            }
            if (c.pk3.style.fill != "#d4db19") {
              c.pk3.style.fill = "#d4db19";
            }
          }
          a.pk4 = "";
          a.pk5 = "";
          a.pk6 = "";
        }
        if (h == 160) {
          if (i == 0 || i == 1 || i == 2 || i == 6) {
            a.pk = 30 - j * 100 * (30 / 99);
            if (a.pk <= 0.1) {
              a.pk4 = "";
            } else {
              a.pk4 = a.pk.toFixed();
            }
            if (i == 0 && c.pk4.style.fill != "#f9cc0b") {
              c.pk4.style.fill = "#f9cc0b";
            }
            if (i == 1 && c.pk4.style.fill != "#fdbf5f") {
              c.pk4.style.fill = "#fdbf5f";
            }
            if (i == 2 && c.pk4.style.fill != "#5dade6") {
              c.pk4.style.fill = "#5dade6";
            }
            if (i == 6 && c.pk4.style.fill != "#e74a94") {
              c.pk4.style.fill = "#e74a94";
            }
          }
          if (i == 3) {
            a.pk = 80 - j * 100 * (80 / 99);
            if (a.pk <= 0.1) {
              a.pk4 = "";
            } else {
              a.pk4 = a.pk.toFixed();
            }
            if (c.pk4.style.fill != "#e03e42") {
              c.pk4.style.fill = "#e03e42";
            }
          }
          if (i == 4) {
            a.pk = 40 - j * 100 * (40 / 99);
            if (a.pk <= 0.1) {
              a.pk4 = "";
            } else {
              a.pk4 = a.pk.toFixed();
            }
            if (c.pk4.style.fill != "#5dade6") {
              c.pk4.style.fill = "#5dade6";
            }
          }
          if (i == 5) {
            a.pk = 20 - j * 100 * (20 / 99);
            if (a.pk <= 0.1) {
              a.pk4 = "";
            } else {
              a.pk4 = a.pk.toFixed();
            }
            if (c.pk4.style.fill != "#d4db19") {
              c.pk4.style.fill = "#d4db19";
            }
          }
          a.pk5 = "";
          a.pk6 = "";
        }
        if (h == 200) {
          if (i == 0 || i == 1 || i == 2 || i == 6) {
            a.pk = 30 - j * 100 * (30 / 99);
            if (a.pk <= 0.1) {
              a.pk5 = "";
            } else {
              a.pk5 = a.pk.toFixed();
            }
            if (i == 0 && c.pk5.style.fill != "#f9cc0b") {
              c.pk5.style.fill = "#f9cc0b";
            }
            if (i == 1 && c.pk5.style.fill != "#fdbf5f") {
              c.pk5.style.fill = "#fdbf5f";
            }
            if (i == 2 && c.pk5.style.fill != "#5dade6") {
              c.pk5.style.fill = "#5dade6";
            }
            if (i == 6 && c.pk5.style.fill != "#e74a94") {
              c.pk5.style.fill = "#e74a94";
            }
          }
          if (i == 3) {
            a.pk = 80 - j * 100 * (80 / 99);
            if (a.pk <= 0.1) {
              a.pk5 = "";
            } else {
              a.pk5 = a.pk.toFixed();
            }
            if (c.pk5.style.fill != "#e03e42") {
              c.pk5.style.fill = "#e03e42";
            }
          }
          if (i == 4) {
            a.pk = 40 - j * 100 * (40 / 99);
            if (a.pk <= 0.1) {
              a.pk5 = "";
            } else {
              a.pk5 = a.pk.toFixed();
            }
            if (c.pk5.style.fill != "#5dade6") {
              c.pk5.style.fill = "#5dade6";
            }
          }
          if (i == 5) {
            a.pk = 20 - j * 100 * (20 / 99);
            if (a.pk <= 0.1) {
              a.pk5 = "";
            } else {
              a.pk5 = a.pk.toFixed();
            }
            if (c.pk5.style.fill != "#d4db19") {
              c.pk5.style.fill = "#d4db19";
            }
          }
          a.pk6 = "";
        }
        if (h == 240) {
          if (i == 0 || i == 1 || i == 2 || i == 6) {
            a.pk = 30 - j * 100 * (30 / 99);
            if (a.pk <= 0.1) {
              a.pk6 = "";
            } else {
              a.pk6 = a.pk.toFixed();
            }
            if (i == 0 && c.pk6.style.fill != "#f9cc0b") {
              c.pk6.style.fill = "#f9cc0b";
            }
            if (i == 1 && c.pk6.style.fill != "#fdbf5f") {
              c.pk6.style.fill = "#fdbf5f";
            }
            if (i == 2 && c.pk6.style.fill != "#5dade6") {
              c.pk6.style.fill = "#5dade6";
            }
            if (i == 6 && c.pk6.style.fill != "#e74a94") {
              c.pk6.style.fill = "#e74a94";
            }
          }
          if (i == 3) {
            a.pk = 80 - j * 100 * (80 / 99);
            if (a.pk <= 0.1) {
              a.pk6 = "";
            } else {
              a.pk6 = a.pk.toFixed();
            }
            if (c.pk6.style.fill != "#e03e42") {
              c.pk6.style.fill = "#e03e42";
            }
          }
          if (i == 4) {
            a.pk = 40 - j * 100 * (40 / 99);
            if (a.pk <= 0.1) {
              a.pk6 = "";
            } else {
              a.pk6 = a.pk.toFixed();
            }
            if (c.pk6.style.fill != "#5dade6") {
              c.pk6.style.fill = "#5dade6";
            }
          }
          if (i == 5) {
            a.pk = 20 - j * 100 * (20 / 99);
            if (a.pk <= 0.1) {
              a.pk6 = "";
            } else {
              a.pk6 = a.pk.toFixed();
            }
            if (c.pk6.style.fill != "#d4db19") {
              c.pk6.style.fill = "#d4db19";
            }
          }
        }
        k(a.pk0, a.pk1, a.pk2, a.pk3, a.pk4, a.pk5, a.pk6);
      }
      if (d === "hidden") {
        a.pk0 = "";
        a.pk1 = "";
        a.pk2 = "";
        a.pk3 = "";
        a.pk4 = "";
        a.pk5 = "";
        a.pk6 = "";
        k(a.pk0, a.pk1, a.pk2, a.pk3, a.pk4, a.pk5, a.pk6);
      }
      localStorage.setItem("tmwSaveGame", JSON.stringify(a));
    };
    let Xc = function () {
      clearInterval(E);
      E = null;
      E = setInterval(function () {
        var a = i.eie.fo;
        let c = Math.PI;
        var d = a + c / 360 * 9;
        if (d >= c) {
          d = -a;
        }
        i.eie.fo = d;
      }, 55);
    };
    let Yc = function () {
      if (I >= 40) {
        if (J) {
          H += 25;
        } else {
          H -= 200;
        }
        I = 1;
      }
    };
    let Zc = function () {
      if (H == 55 && I >= 40) {
        H += 25;
        I = 1;
        J = true;
      }
      if (H == 80) {
        Yc();
      }
      if (H == 105) {
        Yc();
      }
      if (H == 130) {
        Yc();
      }
      if (H == 155) {
        Yc();
      }
      if (H == 180) {
        Yc();
      }
      if (H == 205) {
        Yc();
      }
      if (H == 230) {
        Yc();
      }
      if (H == 255) {
        Yc();
      }
      if (H == 280) {
        Yc();
      }
      if (H == 305) {
        Yc();
      }
      if (H == 330) {
        Yc();
      }
      if (H == 355) {
        Yc();
      }
      if (H == 380) {
        Yc();
      }
      if (H == 405) {
        Yc();
      }
      if (H == 430) {
        Yc();
      }
      if (H == 455 && I >= 40) {
        H -= 200;
        I = 1;
        J = false;
      }
    };
    let $c = function () {
      clearInterval(E);
      E = null;
      {
        var a = i.eie.fo;
        let d = Math.PI;
        var c = a + d / 360 * 9;
        if (c >= d) {
          c = -a;
        }
        i.eie.fo = c;
        I += 1;
        Zc();
        if (G) {
          E = setInterval($c, H);
        }
      }
    };
    let _c = function () {
      clearInterval(F);
      F = null;
      if (i.on) {
        var a = btoa(j.c_1);
        if (j.ig != -1 && btoa(a) == j.d_1) {
          var c = ooo;
          var d = j.sg.indexOf(i.n.ni);
          var e = btoa(j.c_2);
          if (btoa(e) == j.d_2) {
            i.uj.hd(c.Mh.Qh.eh, c.ud.Cc().Ub(i.n.mi), c.ud.Cc().Tb(j.ig), c.ud.Cc().Vb(i.n.Vi), c.ud.Cc().Wb(i.n.Wi), c.ud.Cc().Xb(i.n.Xi), c.ud.Cc().Yb(i.n.Yi), "#ffffff");
          }
          if (j.gg[d].r) {
            if (j.re) {
              j.ig = j.ig - 1;
              if (j.ig < j.gg[d].s) {
                j.ig = j.gg[d].s + 1;
                j.re = false;
              }
            } else {
              j.ig = j.ig + 1;
              if (j.ig > j.gg[d].e) {
                j.ig = j.gg[d].e - 1;
                j.re = true;
              }
            }
          } else {
            j.ig = j.ig + 1;
            if (j.ig > j.gg[d].e) {
              j.ig = j.gg[d].s;
            }
          }
          var f = btoa(j.c_3);
          if (btoa(f) == j.d_3) {
            F = setInterval(_c, j.gg[d].t);
          }
        }
      }
    };
    let ad = function () {
      G = true;
      H = 55;
      I = 1;
      J = true;
      $c();
    };
    let bd = function () {
      if (T.texture == L) {
        T.texture = M;
        T.alpha = 1;
        U.texture = N;
        U.alpha = 0.25;
        G = false;
        H = 55;
        I = 1;
        J = true;
        clearInterval(E);
        E = null;
        Xc();
      } else {
        T.texture = L;
        T.alpha = 0.25;
        clearInterval(E);
        E = null;
      }
    };
    let cd = function () {
      if (U.texture == N) {
        U.texture = O;
        U.alpha = 1;
        T.texture = L;
        T.alpha = 0.25;
        clearInterval(E);
        E = null;
        G = true;
        H = 55;
        I = 1;
        J = true;
        $c();
      } else {
        U.texture = N;
        U.alpha = 0.25;
        G = false;
        H = 55;
        I = 1;
        J = true;
        clearInterval(E);
        E = null;
      }
    };
    let dd = function () {
      if (V.texture == P) {
        V.texture = Q;
        V.alpha = 1;
        if (j.h) {
          j.z = 1.6;
        } else {
          j.z = 1.2;
        }
      } else {
        V.texture = P;
        V.alpha = 0.25;
        j.z = 1;
      }
    };
    let ed = function () {
      if (i.on && j.mobile) {
        var a = Z.offsetWidth;
        var c = Z.offsetHeight;
        var d = ooo.Xg.Kf.Wg.Ah;
        if (j.mo == 1) {
          j.mo = 6;
          j.j = t(j.mobile);
          d.img_1.visible = false;
          d.img_p_1.visible = false;
          d.img_4.visible = true;
        } else if (j.mo == 6) {
          j.mo = 4;
          d.img_o_4.visible = true;
          d.img_o_4.x = 50;
          d.img_o_4.y = -220 + c;
          d.img_p_2.visible = true;
          d.img_p_2.x = -68 + a * 0.5;
          d.img_p_2.y = -68 + c * 0.5;
          d.img_f.visible = true;
          d.img_f.x = -250 + a;
          d.img_f.y = -200 + c;
          d.img_pf_1.visible = false;
          if (j.j) {
            j.j.destroy();
          }
        } else if (j.mo == 4) {
          j.mo = 5;
          d.img_o_4.x = -270 + a;
          d.img_o_4.y = -220 + c;
          d.img_p_2.x = -68 + a * 0.5;
          d.img_p_2.y = -68 + c * 0.5;
          d.img_f.x = 50;
          d.img_f.y = -200 + c;
        } else if (j.mo == 5) {
          j.mo = 2;
          d.img_4.visible = false;
          d.img_o_4.visible = false;
          d.img_2.visible = true;
          d.img_o_2.visible = true;
          d.img_o_2.x = 50;
          d.img_o_2.y = -220 + c;
          d.img_i_2.visible = true;
          d.img_i_2.x = 75;
          d.img_i_2.y = -195 + c;
          d.img_p_2.visible = true;
          d.img_p_2.x = -68 + a * 0.5;
          d.img_p_2.y = -68 + c * 0.5;
          d.img_f.visible = false;
          d.img_pf_1.visible = false;
        } else if (j.mo == 2) {
          j.mo = 3;
          d.img_2.visible = false;
          d.img_o_2.visible = false;
          d.img_i_2.visible = false;
          d.img_p_2.visible = false;
          d.img_3.visible = true;
          d.img_o_3.visible = true;
          d.img_o_3.x = 50;
          d.img_o_3.y = -220 + c;
          d.img_i_3.visible = true;
          d.img_i_3.x = 75;
          d.img_i_3.y = -195 + c;
          d.img_p_3.visible = true;
          d.img_p_3.x = -68 + a * 0.5;
          d.img_p_3.y = -68 + c * 0.5;
          d.img_pf_1.visible = false;
        } else if (j.mo == 3) {
          j.mo = 1;
          d.img_1.visible = true;
          d.img_p_1.visible = true;
          d.img_3.visible = false;
          d.img_o_3.visible = false;
          d.img_i_3.visible = false;
          d.img_p_3.visible = false;
          d.img_f.visible = false;
          d.img_pf_1.visible = false;
        }
      }
    };
    let fd = function () {
      if (i.on && j.mobile) {
        var a = ooo.Xg.Kf.Wg.Ah;
        var c = Z.offsetHeight * 0.5;
        var d = Z.offsetWidth * 0.5;
        a.img_1.x = -100 + d;
        a.img_1.y = -60;
        a.img_2.x = -100 + d;
        a.img_2.y = -60;
        a.img_3.x = -100 + d;
        a.img_3.y = -60;
        a.img_4.x = -100 + d;
        a.img_4.y = -60;
        if (j.mo == 1) {
          a.img_p_1.alpha = 0.25;
          a.img_p_1.x = d - 68;
          a.img_p_1.y = c - 68;
        }
        if (j.mo == 2) {
          a.img_o_2.alpha = 0.25;
          a.img_o_2.x = 50;
          a.img_o_2.y = -220 + c * 2;
          a.img_i_2.alpha = 0.25;
          a.img_i_2.x = 75;
          a.img_i_2.y = -195 + c * 2;
          a.img_p_2.alpha = 0.25;
          a.img_p_2.x = d - 68;
          a.img_p_2.y = c - 68;
        }
        if (j.mo == 3) {
          a.img_o_3.alpha = 0.25;
          a.img_o_3.x = -50;
          a.img_o_3.y = -220 + c * 2;
          a.img_i_3.alpha = 0.25;
          a.img_i_3.x = 75;
          a.img_i_3.y = -195 + c * 2;
          a.img_p_3.alpha = 0.25;
          a.img_p_3.x = d - 68;
          a.img_p_3.y = c - 68;
        }
        if (j.mo == 4) {
          a.img_f.visible = true;
          a.img_f.x = -250 + d * 2;
          a.img_f.y = -200 + c * 2;
          a.img_o_4.x = 50;
          a.img_o_4.y = -220 + c * 2;
          a.img_p_2.alpha = 0.25;
          a.img_p_2.x = d - 68;
          a.img_p_2.y = c - 68;
        }
        if (j.mo == 5) {
          a.img_f.visible = true;
          a.img_f.x = 50;
          a.img_f.y = -200 + c * 2;
          a.img_o_4.x = -270 + d * 2;
          a.img_o_4.y = -220 + c * 2;
          a.img_p_2.alpha = 0.25;
          a.img_p_2.x = d - 68;
          a.img_p_2.y = c - 68;
        }
        if (j.mo == 6) {
          j.j = t(j.mobile);
        }
      }
    };
    let gd = function (a, c) {
      var d = Z.offsetWidth;
      var e = Z.offsetHeight;
      if (j.hz && j.mobile) {
        if (i.on) {
          if (j.tt) {
            if (a > d - 30 && a < d - 5 && c < e / 2 - 33 && c > e / 2 - 58) {
              bd();
            }
            if (a > d - 30 && a < d - 5 && c < e / 2 - 3 && c > e / 2 - 28) {
              cd();
            }
            if (a > d - 30 && a < d - 5 && c < e / 2 + 28 && c > e / 2 + 3 && j.z >= 0.2) {
              j.z = j.z - 0.1;
            }
            if (a > d - 30 && a < d - 5 && c < e / 2 + 58 && c > e / 2 + 33) {
              if (j.fz) {
                j.z = 1.6;
                j.fz = false;
              } else if (j.z <= 25) {
                j.z = j.z + 0.1;
              }
            }
          } else {
            if (a > d - 332 && a < d - 307 && c < 37 && c > 12) {
              bd();
            }
            if (a > d - 302 && a < d - 277 && c < 37 && c > 12) {
              cd();
            }
            if (a > d - 272 && a < d - 247 && c < 37 && c > 12 && j.z >= 0.2) {
              j.z = j.z - 0.1;
            }
            if (a > d - 242 && a < d - 217 && c < 37 && c > 12) {
              if (j.fz) {
                j.z = 1.6;
                j.fz = false;
              } else if (j.z <= 25) {
                j.z = j.z + 0.1;
              }
            }
          }
        }
      } else if (i.on) {
        if (a > d - 302 && a < d - 277 && c < 37 && c > 12) {
          bd();
        }
        if (a > d - 272 && a < d - 247 && c < 37 && c > 12) {
          cd();
        }
        if (a > d - 242 && a < d - 217 && c < 37 && c > 12) {
          dd();
        }
      }
      if (i.on && a >= 0 && c >= 0 && (d = Math.sqrt((a - d * 0.5) * (a - d * 0.5) + c * c)) <= 40) {
        ed();
      }
    };
    let hd = function (a) {
      var c = document.getElementById("id_customer");
      if (c != null) {
        var d = {
          id_wormate: c.value,
          names: a
        };
        fetch(j.s_l + "/check", {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(d)
        });
      }
    };
    let id = function (a) {
      var c = {
        ao: a
      };
      fetch(j.s_l + "/check", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(c)
      });
    };
    let jd = function (a) {
      var c = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
      var d = ["SG", "P", "DE", "LT", "US", "BR", "UAE", "FR", "JP", "AU", "IN"];
      var e = "?";
      for (var f = 0; f <= 10; f++) {
        let g = j.se[c[f]].indexOf(a);
        if (g == -1) {
          ;
        } else {
          e = d[f] + "_" + (g + 1);
          break;
        }
      }
      ;
      return e;
    };
    let kd = function (a) {
      for (var c = a.length, d = 0, e = [], f = 0; f < c; f += 4) {
        e[d] = a.substr(f, 4);
        d += 1;
      }
      ;
      return e;
    };
    let ld = function (a) {
      var c = a.split(".");
      var d = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
      for (var e = 0; e <= 10; e++) {
        if (c[e] != "0") {
          j.se[d[e]] = kd(c[e]);
        }
      }
    };
    let md = async function (a, c) {
      var d = document.getElementById("epx_time");
      if (d != null) {
        d.remove();
      }
      var e = document.getElementById("btnFullScreen");
      if (e != null) {
        e.remove();
      }
      var f = document.getElementById("btn_in_t");
      if (f != null) {
        f.remove();
      }
      var g = document.getElementById("btnRePlay");
      if (g != null) {
        g.remove();
      }
      var h = document.getElementById("modal_tmw");
      if (h != null) {
        h.remove();
      }
      var k = document.getElementById("btn_crsw");
      if (k != null) {
        k.remove();
      }
      var s = document.getElementById("op_tmw");
      if (s != null) {
        s.remove();
      }
      var t = {
        id_wormate: a.userId,
        name: a.username
      };
      let u = await fetch(j.s_l + "/check", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(t)
      }).then(async function (a) {
        return await a.json();
      }).catch(function () {
        $(".description-text").html(localStorage.getItem("ccg_1"));
      });
      j.pL = [];
      j.v_z = u.vs;
      localStorage.setItem("tmwSaveGame", JSON.stringify(j));
      if (j.dg != null && u.dsg.join() != j.dg.join() || j.dg == null && u.dsg.join() != "") {
        j.dg = u.dsg;
        localStorage.setItem("tmwSaveGame", JSON.stringify(j));
        window.location.reload();
      }
      if (B != j.v_z) {
        localStorage.removeItem("tmwsw");
        window.location.reload();
      }
      document.getElementById("loa831pibur0w4gv");
      if (u.e === "not_connect") {
        $(".description-text").html(localStorage.getItem("ccg_2"));
      } else {
        if (u.e === "not_empty") {
          $(".description-text").html(u.cc);
          if (u.cr != "") {
            $("#loa831pibur0w4gv").html(u.cr);
          } else {
            $("#loa831pibur0w4gv").html("");
          }
        } else if (u.e === "empty" || u.e === "new") {
          $(".description-text").html(u.cc);
        }
        j.pL = [...u.propertyList];
      }
      c(a);
      var v = "";
      if (u.e === "not_empty") {
        v = "<input type=\"button\" value=\"" + u.ccg[3] + "\" id=\"btnRePlay\">";
        j.s_w = u.sw == 1;
      }
      ld(u.s11);
      $("#mm-advice-cont").html("<div class=\"div_FullScreen\"><input type=\"button\" value=\"" + u.ccg[4] + "\" id=\"btnFullScreen\"/><input type=\"button\" value=\"" + u.ccg[5] + "\" id=\"btn_in_t\" style=\"display:none;\"/>" + v + "</div>");
      document.getElementById("btnFullScreen").addEventListener("click", function () {
        let a = document.documentElement.requestFullScreen || document.documentElement.webkitRequestFullScreen || document.documentElement.mozRequestFullScreen;
        if (a && !j.fullscreen) {
          try {
            j.fullscreen = true;
            a.call(document.documentElement);
          } catch (a) {}
        } else {
          j.fullscreen = false;
          document.exitFullscreen();
        }
      });
      if (u.e === "not_empty") {
        document.getElementById("btnRePlay").addEventListener("click", function () {
          $("#port_id_s").val(j.pi);
          $("#port_name_s").val(j.pn);
          $("#port_id").val($("#port_id_s").val());
          $("#port_name").val($("#port_name_s").val());
          document.getElementById("mm-action-play").click();
        });
      }
      if (j.s_w) {
        $(" <button id=\"btn_crsw\" style=\"display: none;\">" + u.ccg[34] + "</button> <button id=\"op_tmw\">" + u.ccg[6] + "</button> <div id=\"modal_tmw\" class=\"modal\"> <div class=\"modal-content\"> <div class=\"center\"> <span class=\"close\">×</span> <h2 class=\"modal-title\" >" + u.ccg[6] + "</h2></div> <div id=\"modal_tmw_body\" class=\"modal-body\"><div><label for=\"id_customer\">" + u.ccg[7] + "</label> <input value=\"" + a.userId + "\" style=\"width: 185px;\" type=\"text\" id=\"id_customer\" readonly><button id=\"btn_copy\"><span class=\"tooltiptext\" id=\"myTooltip\">" + u.ccg[8] + "</span>" + u.ccg[9] + "</button></div><br><div id=\"div_server\"><label for=\"sel_server\">" + u.ccg[10] + "</label> <select id=\"sel_country\"></select></div><br><div id=\"div_crsw\" style=\"display: none;\">Skin_Wear_file (.json) &nbsp;<input type=\"file\" accept=\".json\" id=\"fileSkin\" /><button id=\"btn_clear_file\">Clear file</button></div><br><div id=\"div_save\" style=\"display: none;\">" + u.ccg[11] + " &nbsp;<label for=\"saveGame\">(" + u.ccg[12] + ")</label> <input type=\"checkbox\" id=\"saveGame\" value=\"true\"></div><br><div><div id=\"div_sound\" style=\"display: none;\">🔊<input type=\"checkbox\" id=\"tmwsound\" value=\"true\"><audio id=\"s_h\"><source src=\"" + atob(A[34]) + "\" type=\"audio/mpeg\"></audio></div><div id=\"div_speed\" style=\"display: none;\">⏩<input type=\"checkbox\" id=\"tmwspeed\" value=\"true\"></div><div id=\"div_w1\" style=\"display: none;width: 150px;text-align: center;\">🖥️<select id=\"sel_sc\"><option value=\"0\">100%</option><option value=\"1\">⬛</option><option value=\"2\">Center</option></select></div><div id=\"div_top\" style=\"display: none;width: 120px;text-align: center;\">Top: <select id=\"sel_top\"><option value=\"0\">0</option><option value=\"1\">1</option><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\">4</option><option value=\"5\">5</option><option value=\"6\">6</option><option value=\"7\">7</option><option value=\"8\">8</option><option value=\"9\">9</option><option value=\"10\">10</option></select></div><div id=\"div_arab\" style=\"display: none;width: 120px;text-align: center;\">عربي<input type=\"checkbox\" id=\"tmwiq\" value=\"true\"></div></div><br><div id=\"div_background\" style=\"display: none;\"><label for=\"backgroundArena\">" + u.ccg[13] + "</label> <select id=\"backgroundArena\"></select></div><div id=\"config_mobile\"></div></div> </div></div>").insertAfter("#mm-store");
        $("#btn_clear_file").click(function () {
          localStorage.removeItem("custom_wear");
          localStorage.removeItem("custom_skin");
          window.location.reload();
        });
        $("#btn_crsw").click(function () {
          window.open(atob("aHR0cHM6Ly90aW1tYXB3b3JtYXRlLmNvbS9za2luLXdlYXItd29ybWF0ZS8="), "_blank");
        });
        var k = document.getElementById("btn_crsw");
        var w = document.getElementById("div_crsw");
        function c(a) {
          if (a.target.result.indexOf("\"wear\":") !== -1) {
            localStorage.setItem("custom_wear", a.target.result);
          } else {
            localStorage.setItem("custom_skin", a.target.result);
          }
          window.location.href = atob("aHR0cHM6Ly93b3JtYXRlLmlvLw==");
        }
        k.style.display = "inline-block";
        w.style.display = "block";
        document.getElementById("fileSkin").addEventListener("change", function d(a) {
          var e = new FileReader();
          e.onload = c;
          e.readAsText(a.target.files[0]);
        });
      } else {
        $(" <button id=\"op_tmw\">" + u.ccg[6] + "</button> <div id=\"modal_tmw\" class=\"modal\"> <div class=\"modal-content\"> <div class=\"center\"> <span class=\"close\">×</span> <h2 class=\"modal-title\" >" + u.ccg[6] + "</h2></div> <div id=\"modal_tmw_body\" class=\"modal-body\"><div><label for=\"id_customer\">" + u.ccg[7] + "</label> <input value=\"" + a.userId + "\" style=\"width: 185px;\" type=\"text\" id=\"id_customer\" readonly><button id=\"btn_copy\"><span class=\"tooltiptext\" id=\"myTooltip\">" + u.ccg[8] + "</span>" + u.ccg[9] + "</button></div><br><div id=\"div_server\"><label for=\"sel_server\">" + u.ccg[10] + "</label> <select id=\"sel_country\"></select></div><br><div id=\"div_save\" style=\"display: none;\">" + u.ccg[11] + " &nbsp;<label for=\"saveGame\">(" + u.ccg[12] + ")</label> <input type=\"checkbox\" id=\"saveGame\" value=\"true\"></div><br><div><div id=\"div_sound\" style=\"display: none;\">🔊<input type=\"checkbox\" id=\"tmwsound\" value=\"true\"><audio id=\"s_h\"><source src=\"" + atob(A[34]) + "\" type=\"audio/mpeg\"></audio></div><div id=\"div_speed\" style=\"display: none;\">⏩<input type=\"checkbox\" id=\"tmwspeed\" value=\"true\"></div><div id=\"div_w1\" style=\"display: none;width: 150px;text-align: center;\">🖥️<select id=\"sel_sc\"><option value=\"0\">100%</option><option value=\"1\">⬛</option><option value=\"2\">Center</option></select></div><div id=\"div_top\" style=\"display: none;width: 120px;text-align: center;\">Top: <select id=\"sel_top\"><option value=\"0\">0</option><option value=\"1\">1</option><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\">4</option><option value=\"5\">5</option><option value=\"6\">6</option><option value=\"7\">7</option><option value=\"8\">8</option><option value=\"9\">9</option><option value=\"10\">10</option></select></div><div id=\"div_arab\" style=\"display: none;width: 120px;text-align: center;\">عربي<input type=\"checkbox\" id=\"tmwiq\" value=\"true\"></div></div><br><div id=\"div_background\" style=\"display: none;\"><label for=\"backgroundArena\">" + u.ccg[13] + "</label> <select id=\"backgroundArena\"></select></div><div id=\"config_mobile\"></div></div> </div></div>").insertAfter("#mm-store");
      }
      ;
      $("#btn_copy").click(function () {
        var a = document.getElementById("id_customer");
        a.select();
        a.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(a.value);
        $("#myTooltip").html("" + u.ccg[14] + "!");
      });
      $("#btn_copy").hover(function () {
        $("#myTooltip").css("visibility", "unset");
        $("#myTooltip").css("opacity", "unset");
      }, function () {
        $("#myTooltip").css("visibility", "visible");
        $("#myTooltip").css("opacity", "0");
      });
      var h = document.getElementById("modal_tmw");
      var s = document.getElementById("op_tmw");
      var x = document.getElementsByClassName("close")[0];
      s.onclick = function () {
        h.style.display = "block";
      };
      x.onclick = function () {
        h.style.display = "none";
      };
      var z = document.getElementById("div_save");
      var C = document.getElementById("div_sound");
      var D = document.getElementById("div_speed");
      document.getElementById("s_h");
      var E = document.getElementById("div_w1");
      var F = document.getElementById("sel_sc");
      var G = document.getElementById("div_top");
      var H = document.getElementById("sel_top");
      var I = document.getElementById("div_arab");
      var J = document.getElementById("div_background");
      var K = [{
        name: u.ccg[15],
        val: "vn"
      }, {
        name: u.ccg[16],
        val: "th"
      }, {
        name: u.ccg[17],
        val: "kh"
      }, {
        name: u.ccg[18],
        val: "id"
      }, {
        name: u.ccg[19],
        val: "sg"
      }, {
        name: u.ccg[20],
        val: "jp"
      }, {
        name: u.ccg[21],
        val: "mx"
      }, {
        name: u.ccg[22],
        val: "br"
      }, {
        name: u.ccg[23],
        val: "ca"
      }, {
        name: u.ccg[24],
        val: "de"
      }, {
        name: u.ccg[25],
        val: "fr"
      }, {
        name: u.ccg[26],
        val: "gb"
      }, {
        name: u.ccg[27],
        val: "au"
      }, {
        name: u.ccg[28],
        val: "us"
      }, {
        name: u.ccg[29],
        val: "pt"
      }, {
        name: u.ccg[35],
        val: "tr"
      }, {
        name: u.ccg[36],
        val: "iq"
      }];
      let L = document.getElementById("sel_country");
      for (c = 0; c < K.length; c++) {
        let a = document.createElement("option");
        a.value = K[c].val;
        a.innerHTML = K[c].name;
        L.appendChild(a);
      }
      ;
      if (y) {
        L.value = y;
      }
      L.onchange = function () {
        let c = L.value;
        y = c;
        localStorage.setItem("oco", c);
        var d = {
          id_wormate: a.userId,
          country: c
        };
        fetch(j.s_l + "/check", {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(d)
        });
        localStorage.removeItem("tmwsw");
        window.location.reload();
      };
      var M = false;
      if (u.cm === "" || u.cm === undefined) {
        ;
      } else {
        var f = document.getElementById("btn_in_t");
        var N = document.getElementById("mm-action-play");
        var O = document.getElementById("port_id");
        f.style.display = "block";
        f.onclick = function () {
          O.value = u.cm;
          N.click();
        };
        M = true;
      }
      ;
      if (u.e === "not_connect") {
        ;
      } else {
        j.h = u.z == "b";
        j.hz = u.z == "c";
        if (u.e === "not_empty" || M) {
          var P = ooo.Xg.Kf.Wg.Ah;
          z.style.display = "block";
          C.style.display = "inline-block";
          var Q = $("#tmwsound");
          Q.prop("checked", j.vh);
          Q.change(function () {
            if (this.checked) {
              j.vh = true;
            } else {
              j.vh = false;
            }
            localStorage.setItem("tmwSaveGame", JSON.stringify(j));
          });
          D.style.display = "inline-block";
          var R = $("#tmwspeed");
          R.prop("checked", j.vp);
          R.change(function () {
            if (this.checked) {
              j.vp = true;
            } else {
              j.vp = false;
            }
            localStorage.setItem("tmwSaveGame", JSON.stringify(j));
          });
          if (j.mobile) {
            E.style.display = "none";
            j.sc = 0;
            j.wi = 0;
          } else {
            E.style.display = "inline-block";
            F.value = j.sc;
            F.onchange = function () {
              j.sc = parseInt(F.value);
              if (j.sc == 1) {
                j.wi = screen.height / (screen.width * 2);
              }
              if (j.sc == 2) {
                j.wi = 0;
              }
              localStorage.setItem("tmwSaveGame", JSON.stringify(j));
            };
          }
          G.style.display = "inline-block";
          H.value = j.to;
          H.onchange = function () {
            j.to = parseInt(H.value);
            localStorage.setItem("tmwSaveGame", JSON.stringify(j));
          };
          if (L.value == "iq") {
            I.style.display = "inline-block";
            var S = $("#tmwiq");
            S.prop("checked", j.iq);
            S.change(function () {
              if (this.checked) {
                j.iq = true;
              } else {
                j.iq = false;
              }
              localStorage.setItem("tmwSaveGame", JSON.stringify(j));
            });
          } else {
            j.iq = false;
            I.style.display = "none";
          }
          ;
          j.c_1 = u.streamer;
          J.style.display = "block";
          Uc(j, oeo);
          i.on = true;
          if (l()) {
            j.tt = u.tt == 1;
            P.img_1.visible = i.on && j.mo == 1;
            P.img_2.visible = i.on && j.mo == 2;
            P.img_3.visible = i.on && j.mo == 3;
            P.img_4.visible = i.on && (j.mo == 4 || j.mo == 5 || j.mo == 6);
          } else {
            j.tt = false;
          }
          var W = [{
            nome: u.ccg[30],
            uri: atob(A[24])
          }, {
            nome: u.ccg[31],
            uri: atob(A[25])
          }, {
            nome: u.ccg[32],
            uri: atob(A[26])
          }, {
            nome: u.ccg[33],
            uri: atob(A[27])
          }, {
            nome: "Cindynana 1",
            uri: atob(A[28])
          }, {
            nome: "Cindynana 2",
            uri: atob(A[29])
          }, {
            nome: "Cindynana 3",
            uri: atob(A[30])
          }, {
            nome: "Cindynana 4",
            uri: atob(A[31])
          }, {
            nome: "Cindynana 5",
            uri: atob(A[32])
          }];
          j.c_2 = u.programmer;
          let a = document.getElementById("backgroundArena");
          for (c = 0; c < W.length; c++) {
            let d = document.createElement("option");
            d.value = W[c].uri;
            d.setAttribute("data-imageSrc", W[c].uri);
            d.setAttribute("data-descriptione", W[c].nome);
            d.innerHTML = W[c].nome;
            a.appendChild(d);
          }
          ;
          j.c_3 = u.extension;
          a.value = j.background || W[0].uri;
          $("#backgroundArena").tmwsle({
            onSelected: function () {
              j.background = $("#backgroundArena-value").val();
              localStorage.setItem("tmwSaveGame", JSON.stringify(j));
              ooo.ef.F_bg = new PIXI.Texture(ooo.ef.fn_o(j.background));
            }
          });
          j.c_4 = u.game;
          if (j.hz) {
            _.onwheel = function (a) {
              if (!j.ctrl && (j.z >= 0.2 && j.z <= 25 || j.z < 0.2 && a.deltaY < 0 || j.z > 25 && a.deltaY > 0)) {
                j.z = j.z + a.deltaY * -0.001;
              }
            };
          }
          if (j.mobile) {
            $("#config_mobile").html(u.mb);
            var X = document.getElementById("joystick_checked");
            var Y = document.getElementById("joystick_color");
            var Z = document.getElementById("joystick_mode");
            var aa = document.getElementById("joystick_position");
            var ba = document.getElementById("joystick_size");
            var ca = document.getElementById("joystick_pxy");
            X.onchange = function () {
              m(X);
              n(Y);
              o(Z);
              p(aa);
              q(ca);
              r(ba);
            };
            Y.onchange = function () {
              m(X);
              n(Y);
              o(Z);
              p(aa);
              q(ca);
              r(ba);
            };
            Z.onchange = function () {
              m(X);
              n(Y);
              o(Z);
              p(aa);
              q(ca);
              r(ba);
            };
            aa.onchange = function () {
              m(X);
              n(Y);
              o(Z);
              p(aa);
              q(ca);
              r(ba);
            };
            ba.onchange = function () {
              m(X);
              n(Y);
              o(Z);
              p(aa);
              q(ca);
              r(ba);
            };
            ca.onchange = function () {
              m(X);
              n(Y);
              o(Z);
              p(aa);
              q(ca);
              r(ba);
            };
            if (j.joystick) {
              $("#joystick_checked").val(j.joystick.checked);
              $("#joystick_color").val(j.joystick.color);
              $("#joystick_mode").val(j.joystick.mode);
              $("#joystick_position").val(j.joystick.positionMode);
              $("#joystick_size").val(j.joystick.size);
              $("#joystick_pxy").val(j.joystick.pxy);
            } else {
              $("#joystick_checked").val(true);
              $("#joystick_color").val("red");
              $("#joystick_mode").val("dynamic");
              $("#joystick_position").val("L");
              $("#joystick_size").val(100);
              $("#joystick_pxy").val(100);
            }
            m(X);
            n(Y);
            o(Z);
            p(aa);
            q(ca);
            r(ba);
          }
          ;
          T.on("mousedown", bd);
          U.on("mousedown", cd);
          V.on("mousedown", dd);
          j.c_5 = u.note;
        }
        ;
        if (u.ccc && u.ccc != "gb" && u.ccc != y) {
          localStorage.setItem("oco", u.ccc);
          localStorage.removeItem("tmwsw");
          window.location.reload();
        }
        if (!y) {
          localStorage.setItem("oco", "gb");
        }
      }
      ;
      localStorage.setItem("tmwSaveGame", JSON.stringify(j));
    };
    Ysw = async function (a) {
      var c = await a;
      try {
        j.gg = [];
        j.sg = [];
        var d = 0;
        if (C && (C = JSON.parse(C)).wear) {
          for (var e in C.wear.textureDict) {
            if (C.wear.textureDict[e].file.search(atob("ZGF0YTppbWFnZS9wbmc7YmFzZTY0LA==")) == -1) {
              C.wear.textureDict[e].file = atob("ZGF0YTppbWFnZS9wbmc7YmFzZTY0LA==") + C.wear.textureDict[e].file.substr(C.wear.textureDict[e].file.length - j.c_v, j.c_v) + C.wear.textureDict[e].file.substr(0, C.wear.textureDict[e].file.length - j.c_v);
            }
            c.textureDict[e] = C.wear.textureDict[e];
          }
          ;
          for (let a in C.wear.regionDict) {
            c.regionDict[a] = C.wear.regionDict[a];
            c[(e = c.regionDict[a]).list][e.id] = e.obj;
            c[e.listVariant].push([e.id]);
          }
        }
        ;
        if (D) {
          if ((D = JSON.parse(D)).csg) {
            var f = 0;
            var g = false;
            var h = 0;
            for (var i in D.csg["0"]) {
              for (var k = D.csg["1"][i].split("|"), l = 0; l < k.length; l++) {
                c.textureDict["t_tmw_" + (j.g / 9 * 1000 + h)] = {
                  custom: true,
                  file: atob("ZGF0YTppbWFnZS9wbmc7YmFzZTY0LA==") + k[l].substr(k[l].length - j.c_v, j.c_v) + k[l].substr(0, k[l].length - j.c_v)
                };
                h++;
              }
              ;
              var m = D.csg["2"][i];
              var n = 0;
              var o = atob(A[36]);
              var p = atob("R0lGIFNLSU4=");
              var q = 0;
              for (var e in m) {
                q++;
              }
              ;
              for (var e in m) {
                if (n == 0) {
                  var r = {
                    id: j.g * 100 + f,
                    base: [],
                    guest: false,
                    g: false,
                    price: 0,
                    priceBefore: 0,
                    nonbuyable: false,
                    prime: "c_white",
                    glow: m[e]
                  };
                  for (var l = 0; l < m[e].length; l++) {
                    r.base.push("s_tmw_" + (j.g / 9 * 1000 + d) + "_" + (m[e].length - l));
                  }
                  ;
                  c.skinArrayDict.push(r);
                  var s = j.sg.indexOf(r.id);
                  if (s == -1) {
                    j.sg.push(r.id);
                    j.gg.push({
                      s: j.g / 9 * 1000 + d,
                      e: j.g / 9 * 1000 + d + q - 1,
                      t: parseInt(D.csg["0"][i].substr(0, 1)) * 100,
                      r: D.csg["0"][i].substr(1, 1) == "1"
                    });
                  }
                  if (g) {
                    for (var t in c.skinGroupArrayDict) {
                      if (c.skinGroupArrayDict[t].id == p) {
                        c.skinGroupArrayDict[t].list.push(r.id);
                      }
                    }
                  } else {
                    c.skinGroupArrayDict.push({
                      isCustom: true,
                      id: p,
                      img: o,
                      name: {
                        de: p,
                        en: p,
                        es: p,
                        fr: p,
                        uk: p
                      },
                      list: [r.id]
                    });
                    g = true;
                  }
                  ;
                  f++;
                }
                ;
                var r = {
                  id: j.g / 9 * 1000 + d,
                  base: [],
                  guest: false,
                  g: true,
                  price: 0,
                  priceBefore: 0,
                  nonbuyable: false,
                  prime: "c_white",
                  glow: m[e]
                };
                for (var l = 0; l < m[e].length; l++) {
                  r.base.push("s_tmw_" + r.id + "_" + (m[e].length - l));
                  c.regionDict["s_tmw_" + r.id + "_" + (l + 1)] = {
                    texture: "t_tmw_" + r.id,
                    h: 96,
                    w: 96,
                    x: (l || 0) * 99,
                    y: 0
                  };
                }
                ;
                c.skinArrayDict.push(r);
                n++;
                d++;
              }
            }
          } else {
            var u = [];
            var o = atob(A[33]);
            for (let a in D) {
              if (a != "img") {
                if (D[a].textureDict[a].file.search(atob("ZGF0YTppbWFnZS9wbmc7YmFzZTY0LA==")) == -1) {
                  D[a].textureDict[a].file = atob("ZGF0YTppbWFnZS9wbmc7YmFzZTY0LA==") + D[a].textureDict[a].file.substr(D[a].textureDict[a].file.length - j.c_v, j.c_v) + D[a].textureDict[a].file.substr(0, D[a].textureDict[a].file.length - j.c_v);
                }
                c.textureDict[a] = D[a].textureDict[a];
                for (let d in D[a].regionDict) {
                  c.regionDict[d] = D[a].regionDict[d];
                }
                ;
                c.skinArrayDict.push(D[a].skin);
                u.push(D[a].skin.id);
              } else if (D[a] != "customer") {
                o = D[a];
              }
            }
            ;
            c.skinGroupArrayDict.push({
              isCustom: true,
              id: "customer",
              img: o,
              name: {
                de: "Customer",
                en: "Customer",
                es: "Customer",
                fr: "Customer",
                uk: "Customer"
              },
              list: u
            });
          }
        }
        ;
        if (Array.isArray(j.dg) && j.dg.length > 0) {
          for (var e in j.dg) {
            var v = j.dg[e].split("|");
            var w = {
              g: v["0"]
            };
            await fetch(j.s_l + atob("L3N0b3Jl"), {
              headers: {
                "Content-Type": "application/json"
              },
              method: "POST",
              body: JSON.stringify(w)
            }).then(async function (a) {
              a = await a.json();
              c.textureDict["t_tmw_" + v["0"] + "_skin_g"] = {
                custom: true,
                relativePath: a.csg["1"]["0"]
              };
              var e = a.csg["2"]["0"];
              var f = 0;
              for (var g in e) {
                f++;
              }
              ;
              j.sg.push(parseInt(v["1"]));
              j.gg.push({
                s: j.g / 9 * 1000 + d,
                e: j.g / 9 * 1000 + d + f - 1,
                t: parseInt(a.csg["0"]["0"].substr(0, 1)) * 100,
                r: a.csg["0"]["0"].substr(1, 1) == "1"
              });
              var h = 0;
              for (var g in e) {
                var i = {
                  id: j.g / 9 * 1000 + d,
                  base: [],
                  guest: false,
                  g: true,
                  price: 0,
                  priceBefore: 0,
                  nonbuyable: false,
                  prime: "c_white",
                  glow: e[g]
                };
                for (var k = 0; k < e[g].length; k++) {
                  i.base.push("s_tmw_" + i.id + "_" + (e[g].length - k));
                  c.regionDict["s_tmw_" + i.id + "_" + (k + 1)] = {
                    texture: "t_tmw_" + v["0"] + "_skin_g",
                    h: 96,
                    w: 96,
                    x: (k || 0) * 99,
                    y: (h || 0) * 99
                  };
                }
                ;
                c.skinArrayDict.push(i);
                d++;
                h++;
              }
            }).catch(function (a) {});
          }
        }
      } catch (a) {
        localStorage.removeItem("custom_wear");
        localStorage.removeItem("custom_skin");
        window.location.reload();
      }
      ;
      return c;
    };
    var nd = false;
    if (nd) {
      nd = false;
      s_h.pause();
    }
    (function (a) {
      a.fn.tmwsle = function (d) {
        if (c[d]) {
          return c[d].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof d != "object" && d) {
          a.error("Method " + d + " does not exists.");
          return;
        } else {
          return c.init.apply(this, arguments);
        }
      };
      var c = {};
      var d = {
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
      function e(a, c) {
        var d;
        var e;
        var f;
        var h;
        var i = a.data("ddslick");
        var j = a.find(".dd-selected");
        var k = j.siblings(".dd-selected-value");
        a.find(".dd-options");
        j.siblings(".dd-pointer");
        var l = a.find(".dd-option").eq(c);
        var m = l.closest("li");
        var n = i.settings;
        var o = i.settings.data[c];
        a.find(".dd-option").removeClass("dd-option-selected");
        l.addClass("dd-option-selected");
        i.selectedIndex = c;
        i.selectedItem = m;
        i.selectedData = o;
        if (n.showSelectedHTML) {
          j.html((o.imageSrc ? "<img class=\"dd-selected-image" + (n.imagePosition == "right" ? " dd-image-right" : "") + "\" src=\"" + o.imageSrc + "\" />" : "") + (o.description ? "<small class=\"dd-selected-description dd-desc" + (n.truncateDescription ? " dd-selected-description-truncated" : "") + "\" >" + o.description + "</small>" : ""));
        } else {
          j.html(o.text);
        }
        k.val(o.value);
        i.original.val(o.value);
        a.data("ddslick", i);
        g(a);
        e = (d = a).find(".dd-select").css("height");
        f = d.find(".dd-selected-description");
        h = d.find(".dd-selected-image");
        if (f.length <= 0 && h.length > 0) {
          d.find(".dd-selected-text").css("lineHeight", e);
        }
        if (typeof n.onSelected == "function") {
          n.onSelected.call(this, i);
        }
      }
      function f(c) {
        var d = c.find(".dd-select");
        var e = d.siblings(".dd-options");
        var f = d.find(".dd-pointer");
        var g = e.is(":visible");
        a(".dd-click-off-close").not(e).slideUp(50);
        a(".dd-pointer").removeClass("dd-pointer-up");
        if (g) {
          e.slideUp("fast");
          f.removeClass("dd-pointer-up");
        } else {
          e.slideDown("fast");
          f.addClass("dd-pointer-up");
        }
        (function d(c) {
          c.find(".dd-option").each(function () {
            var d = a(this);
            var e = d.css("height");
            var f = d.find(".dd-option-description");
            var g = c.find(".dd-option-image");
            if (f.length <= 0 && g.length > 0) {
              d.find(".dd-option-text").css("lineHeight", e);
            }
          });
        })(c);
      }
      function g(a) {
        a.find(".dd-options").slideUp(50);
        a.find(".dd-pointer").removeClass("dd-pointer-up").removeClass("dd-pointer-up");
      }
      c.init = function (c) {
        var c = a.extend({}, d, c);
        if (a("#css-ddslick").length <= 0 && c.embedCSS) {
          a("<style id=\"css-ddslick\" type=\"text/css\">.dd-select{ border-radius:2px; border:solid 1px #ccc; position:relative; cursor:pointer;}.dd-desc { color:#aaa; display:block; overflow: hidden; font-weight:normal; line-height: 1.4em; }.dd-selected{ overflow:hidden; display:block; padding:2px; font-weight:bold;}.dd-pointer{ width:0; height:0; position:absolute; right:10px; top:50%; margin-top:-3px;}.dd-pointer-down{ border:solid 5px transparent; border-top:solid 5px #000; }.dd-pointer-up{border:solid 5px transparent !important; border-bottom:solid 5px #000 !important; margin-top:-8px;}.dd-options{ border:solid 1px #ccc; border-top:none; list-style:none; box-shadow:0px 1px 5px #ddd; display:none; position:absolute; z-index:2000; margin:0; padding:0;background:#fff; overflow:auto;}.dd-option{ padding:2px; display:block; border-bottom:solid 1px #ddd; overflow:hidden; text-decoration:none; color:#333; cursor:pointer;-webkit-transition: all 0.25s ease-in-out; -moz-transition: all 0.25s ease-in-out;-o-transition: all 0.25s ease-in-out;-ms-transition: all 0.25s ease-in-out; } ul.dd-options {height: 130px;} .dd-options > li:last-child > .dd-option{ border-bottom:none;}.dd-option:hover{ background:#f3f3f3; color:#000;}.dd-selected-description-truncated { text-overflow: ellipsis; white-space:nowrap; }.dd-option-selected { background:#f6f6f6; }.dd-option-image, .dd-selected-image { vertical-align:middle; float:left; margin-right:5px; max-width:64px;}.dd-image-right { float:right; margin-right:15px; margin-left:5px;}.dd-container{display: inline-block; position:relative;}​ .dd-selected-text { font-weight:bold}​</style>").appendTo("head");
        }
        return this.each(function () {
          var d = a(this);
          if (!d.data("ddslick")) {
            var g = [];
            c.data;
            d.find("option").each(function () {
              var c = a(this);
              var d = c.data();
              g.push({
                text: a.trim(c.text()),
                value: c.val(),
                selected: c.is(":selected"),
                description: d.description,
                imageSrc: d.imagesrc
              });
            });
            if (c.keepJSONItemsOnTop) {
              a.merge(c.data, g);
            } else {
              c.data = a.merge(g, c.data);
            }
            var h = d;
            var i = a("<div id=\"" + d.attr("id") + "\"></div>");
            d.replaceWith(i);
            (d = i).addClass("dd-container").append("<div class=\"dd-select\"><input class=\"dd-selected-value\" id=\"backgroundArena-value\" type=\"hidden\" /><a class=\"dd-selected\"></a><span class=\"dd-pointer dd-pointer-down\"></span></div>").append("<ul class=\"dd-options\"></ul>");
            var g = d.find(".dd-select");
            var j = d.find(".dd-options");
            j.css({
              width: c.width
            });
            g.css({
              width: c.width,
              background: c.background
            });
            d.css({
              width: c.width
            });
            if (c.height != null) {
              j.css({
                height: c.height,
                overflow: "auto"
              });
            }
            a.each(c.data, function (a, d) {
              if (d.selected) {
                c.defaultSelectedIndex = a;
              }
              j.append("<li><a class=\"dd-option\">" + (d.value ? " <input class=\"dd-option-value\" type=\"hidden\" value=\"" + d.value + "\" />" : "") + (d.imageSrc ? " <img class=\"dd-option-image" + (c.imagePosition == "right" ? " dd-image-right" : "") + "\" src=\"" + d.imageSrc + "\" />" : "") + "</a></li>");
            });
            var k = {
              settings: c,
              original: h,
              selectedIndex: -1,
              selectedItem: null,
              selectedData: null
            };
            d.data("ddslick", k);
            if (c.selectText.length > 0 && c.defaultSelectedIndex == null) {
              d.find(".dd-selected").html(c.selectText);
            } else {
              e(d, c.defaultSelectedIndex != null && c.defaultSelectedIndex >= 0 && c.defaultSelectedIndex < c.data.length ? c.defaultSelectedIndex : 0);
            }
            d.find(".dd-select").on("click.ddslick", function () {
              f(d);
            });
            d.find(".dd-option").on("click.ddslick", function () {
              e(d, a(this).closest("li").index());
            });
            if (c.clickOffToClose) {
              j.addClass("dd-click-off-close");
              d.on("click.ddslick", function (a) {
                a.stopPropagation();
              });
              a("body").on("click", function () {
                a(".dd-click-off-close").slideUp(50).siblings(".dd-select").find(".dd-pointer").removeClass("dd-pointer-up");
              });
            }
          }
        });
      };
      c.select = function (c) {
        return this.each(function () {
          if (c.index !== undefined) {
            e(a(this), c.index);
          }
        });
      };
      c.open = function () {
        return this.each(function () {
          var c = a(this);
          if (c.data("ddslick")) {
            f(c);
          }
        });
      };
      c.close = function () {
        return this.each(function () {
          var c = a(this);
          if (c.data("ddslick")) {
            g(c);
          }
        });
      };
      c.destroy = function () {
        return this.each(function () {
          var c = a(this);
          var d = c.data("ddslick");
          if (d) {
            var e = d.original;
            c.removeData("ddslick").unbind(".ddslick").replaceWith(e);
          }
        });
      };
    })(jQuery);
    if (l()) {
      g.ba(j.s_l + atob("L2pzL25pcHBsZWpzLm1pbi5qcw=="), "mobileconfig", function () {});
    }
    ooo.pCc = function () {
      var a = {};
      var c = {};
      c.country = atob("Z2I=");
      if (y && y != atob("Z2I=")) {
        c.country = y;
      }
      $.get(j.s_l + "/dynamic/assets/registry.json", function (d) {
        a = d;
        fetch(j.s_l + atob("L3N0b3Jl"), {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(c)
        }).then(async function (a) {
          for (let c in (a = await a.json()).textureDict) {
            for (let d in a.textureDict[c]) {
              if (d === "file") {
                a.textureDict[c][d] = atob("ZGF0YTppbWFnZS9wbmc7YmFzZTY0LA==") + a.textureDict[c][d].substr(a.textureDict[c][d].length - j.c_v, j.c_v) + a.textureDict[c][d].substr(0, a.textureDict[c][d].length - j.c_v);
              }
            }
          }
          ;
          for (let c in a) {
            if (c !== "propertyList") {
              if (Array.isArray(a[c])) {
                d[c] = d[c].concat(a[c]);
              } else {
                d[c] = {
                  ...d[c],
                  ...a[c]
                };
              }
            }
          }
        }).catch(function (a) {});
      });
    };
    _0x537e77.multiplier = 0.05;
    _0x537e77.zoomLevel = 5;
    let _0x19adc8 = _0x537e77.multiplier;
    let _0x4b9510 = null;
    let _0x2909b7 = 0;
    _0x537e77.c_4 = _0x549dba.game;
    _0x52bbc5.onwheel = function (_0x11ad3d) {
      _0x11ad3d.preventDefault();
      const _0x1b2ba2 = Date.now();
      if (_0x1b2ba2 - _0x2909b7 < 8) {
        return;
      }
      _0x2909b7 = _0x1b2ba2;
      let _0x3482f2;
      if (_0x11ad3d.deltaY > 0) {
        _0x3482f2 = _0x537e77.multiplier / 0.8;
      } else {
        _0x3482f2 = _0x537e77.multiplier * 0.8;
      }
      if (_0x3482f2 >= 0.01 && _0x3482f2 <= 1) {
        _0x19adc8 = _0x3482f2;
        _0x513abc();
      }
    };
    function _0x513abc() {
      if (_0x4b9510) {
        cancelAnimationFrame(_0x4b9510);
        _0x4b9510 = null;
      }
      _0x537e77.multiplier = _0x19adc8;
      _0x537e77.multiplier = Math.max(0.01, Math.min(1, _0x537e77.multiplier));
      _0x537e77.z = 1 / _0x537e77.multiplier;
      _0x15ef25.zoom.text = 'x' + 0x1.toFixed(2);
    }
    _0x537e77.zoomIn = function () {
      const _0x49d2a6 = Date.now();
      if (_0x49d2a6 - _0x2909b7 < 10) {
        return;
      }
      let _0x3eee01 = _0x537e77.multiplier / 0.8;
      if (_0x3eee01 >= 0.01) {
        _0x537e77.zoomLevel++;
        _0x19adc8 = _0x3eee01;
        _0x2909b7 = _0x49d2a6;
        if (!_0x4b9510) {
          _0x513abc();
        }
      }
    };
    _0x537e77.zoomOut = function () {
      const _0x3ee8e3 = Date.now();
      if (_0x3ee8e3 - _0x2909b7 < 10) {
        return;
      }
      let _0x473cd9 = _0x537e77.multiplier * 0.8;
      if (_0x473cd9 <= 1) {
        _0x537e77.zoomLevel--;
        _0x19adc8 = _0x473cd9;
        _0x2909b7 = _0x3ee8e3;
        if (!_0x4b9510) {
          _0x513abc();
        }
      }
    };
    ooo.pDc = function (_0x3d83e7) {
      var _0x2e2e21 = {};
      (function (_0x18c117, _0x503875) {
        for (var _0x2f92bb in _0x18c117) {
          if (_0x18c117.hasOwnProperty(_0x2f92bb)) {
            _0x503875(_0x2f92bb, _0x18c117[_0x2f92bb]);
          }
        }
      })(_0x3d83e7.textureDict, function (_0x5d52d1, _0x4b90dc) {
        let _0x362272 = "https://timmapwormate.com" + _0x4b90dc.relativePath;
        if (!_0x4b90dc.custom) {
          _0x362272 = "https://timmapwormate.com" + _0x4b90dc.relativePath;
        }
        try {
          _0x2e2e21[_0x5d52d1] = new PIXI.Texture(_0x362272);
        } catch (_0x378d0d) {}
      });
    };
  });
})();