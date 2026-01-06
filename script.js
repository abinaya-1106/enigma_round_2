document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");

    if (username === "upside_down" && password === "demogorgon") {
        showCode();
    } else {
        error.textContent = "Access denied. Think again.";
    }
});

function showCode() {
    const container = document.querySelector(".container");

    container.innerHTML = `
        <h2>Language Unknown</h2>

        <p class="hint">
            Machines understand this.<br>
            Humans must learn.
        </p>

        <div style="
            border:1px solid #1abc9c;
            padding:10px;
            background:#000;
            color:#0f0;
            font-family:monospace;
            max-height:200px;
            overflow-x:auto;
            overflow-y:auto;
            margin-bottom:15px;
            white-space:pre;
        ">
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.
[-]
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.
[-]
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.
[-]
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.
[-]
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.
[-]
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.
[-]
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.
[-]
++++++++++++++++++++++++++++++++.
[-]
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.
[-]
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.
[-]
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.
[-]
+++++++++++++++++++++++++++++++++++++++.
[-]
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.
[-]
++++++++++++++++++++++++++++++++.
[-]
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.
[-]
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.
[-]
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.
        </div>

        <p class="note">
            Decode the output above.<br>
            Use <b>_</b> instead of spaces.<br>
            Flag format: <b>flag{...}</b>
        </p>

        <input type="text" id="flagInput" placeholder="flag{...}" required>
        <button onclick="checkFlag()">Submit Flag</button>

        <p id="flagResult" class="error"></p>
    `;
}

function checkFlag() {
    const input = document.getElementById("flagInput").value.trim();
    const result = document.getElementById("flagResult");

    if (input === "flag{friends_don't_lie}") {
        result.style.color = "#1abc9c";
        result.textContent = "Correct! You escaped the Hawkins Lab.";
    } else {
        result.style.color = "#ff6b6b";
        result.textContent = "Wrong flag. Try again.";
    }
}
