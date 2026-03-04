import { useState } from "react";
import "./App.css";

function Counter() {
  // ประกาศตัวแปร State สำหรับเก็บตัวแปร count
  // และฟังก์ชัน setCount สำหรับอัปเดตค่าตัวแปร count
  // ตั้งค่าเริ่มต้นของตัวแปร count เป็น 0
  // ถ้าค่าตัวแปรของ State เปลี่ยน UI เปลี่ยนอัตโนมัติ
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
        maxWidth: "500px",
        margin: "0 auto",
      }}
    >
      <h1>⏱️ ตัวนับ</h1>
      <p
        style={{
          fontSize: "48px",
          color: "#007bff",
          fontWeight: "bold",
          margin: "20px 0",
        }}
      >
        {count}
      </p>

      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button
          onClick={decrement}
          style={{
            padding: "10px 24px",
            fontSize: "16px",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          ➖ ลด
        </button>

        <button
          onClick={reset}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            backgroundColor: "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          🔄 รีเซ็ต
        </button>

        <button
          onClick={increment}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          ➕ เพิ่ม
        </button>
      </div>
    </div>
  );
}

function ToggleMenu() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div style={{ padding: "20px", marginTop: "40px" }}>
      <button
        onClick={() => setisOpen(!isOpen)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#0066cc",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {isOpen ? "ปิดเมนู ▼" : "เปิดเมนู ▶"}
      </button>

      {isOpen && (
        <div
          style={{
            backgroundColor: "#f0f0f0",
            padding: "20px",
            marginTop: "10px",
            borderRadius: "4px",
            border: "1px solid #ddd",
          }}
        >
          <p style={{ margin: "8px 0" }}>
            <a href="#home">หน้าแรก</a>
          </p>
          <p style={{ margin: "8px 0" }}>
            <a href="#about">เกี่ยวกับ</a>
          </p>
          <p style={{ margin: "8px 0" }}>
            <a href="#contact">ติดต่อ</a>
          </p>
        </div>
      )}
    </div>
  );
}

function UserInfo() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });

  // ...user คือ การคัดลอกค่าทั้งหมดของ object user มาไว้ใน object ใหม่
  // จากนั้นเราสามารถแก้ไขเฉพาะฟิลด์ที่ต้องการได้โดยไม่กระทบกับฟิลด์อื่นๆ
  function upDateFirstName(value) {
    setUser({ ...user, firstName: value });
  }
  //ถ้าต้องการให้ใส่คั่นระหว่างกลางคือ + " . " ไปได้เลย
  // setUser({ ...user, firstName: value + "." });

  function updateLastName(value) {
    setUser({ ...user, lastName: value });
  }

  function upDateAge(value) {
    setUser({ ...user, age: value });
  }

  return (
    <div style={{ padding: "20px", marginTop: "40px", maxWidth: "400px" }}>
      <h2>👤 ข้อมูลส่วนตัว</h2>

      <div style={{ marginBottom: "15px" }}>
        <label>ชื่อ: </label>
        <input
          type="text"
          value={user.firstName}
          //target คือ input ตัวนี้
          onChange={(e) => upDateFirstName(e.target.value)}
          placeholder="กรอกชื่อ"
          style={{
            display: "block",
            padding: "8px",
            marginTop: "5px",
            width: "100%",
            fontSize: "14px",
          }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>นามสกุล: </label>
        <input
          type="text"
          value={user.lastName}
          onChange={(e) => updateLastName(e.target.value)}
          placeholder="กรอกนามสกุล"
          style={{
            display: "block",
            padding: "8px",
            marginTop: "5px",
            width: "100%",
            fontSize: "14px",
          }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>อายุ:</label>
        <input
          type="number"
          value={user.age}
          onChange={(e) => upDateAge(e.target.value)}
          placeholder="กรอกอายุ"
          style={{
            display: "block",
            padding: "8px",
            marginTop: "5px",
            width: "100%",
            fontSize: "14px",
          }}
        />
      </div>

      <div
        style={{
          backgroundColor: "#f9f9f9",
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ddd",
        }}
      >
        <h3>ข้อมูลที่บันทึก:</h3>
        <p>
          <strong>ชื่อ:</strong> {user.firstName || "ยังไม่กรอก"}
        </p>
        <p>
          <strong>นามสกุล:</strong> {user.lastName || "ยังไม่กรอก"}
        </p>
        <p>
          <strong>อายุ:</strong> {user.age || "ยังไม่กรอก"}
        </p>
      </div>
    </div>
  );
}

function InputExample() {
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "20px", marginTop: "40px", maxWidth: "400px" }}>
      <h2>📝 กรอกข้อความ</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="พิมพ์อะไรสักอย่าง..."
        style={{
          display: "block",
          padding: "10px",
          fontSize: "16px",
          width: "100%",
          borderRadius: "4px",
          border: "1px solid #ddd",
        }}
      />

      <p style={{ marginTop: "10px" }}>
        คุณพิมพ์: <strong>{text}</strong>
      </p>

      <p style={{ marginTop: "20px", color: "#666" }}>
        จำนวนตัวอักษร: <strong>{text.length}</strong>
      </p>
    </div>
  );
}

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDafault(); //เมื่อกดปุ่ม Summit จะไม่มีการรีเฟรชหน้า เพื่อกันข้อมูลที่กรอกหาย

    if (username.trim() && password.trim()) {
      setSubmitted(true);
      console.log("ข้อมูลที่ส่ง:", { username, password });

      //รีเซ็ตหลังจากส่งไปแล้วประมาณ 2 วินาที
      setTimeout(() => {
        setUsername("");
        setPassword("");
        setSubmitted(false);
      }, 2000);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        padding: "30px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ textAlign: "center" }}>🔐 เข้าสู่ระบบ</h2>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          ชื่อผู้ใช้:
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="สมชาย"
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "14px",
            borderRadius: "4px",
            border: "1px solid #ddd",
          }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          รหัสผ่าน:
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••"
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "14px",
            borderRadius: "4px",
            border: "1px solid #ddd",
          }}
        />
      </div>

      <button
        type="submit"
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "4px",
          fontSize: "16px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        เข้าสู่ระบบ
      </button>

      {submitted && (
        <p style={{ marginTop: "20px", color: "#28a745", textAlign: "center" }}>
          เข้าสู่ระบบสำเร็จเป็น {username}
        </p>
      )}
    </form>
  );
}

function LoginStatus() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div style={{ padding: "20px", marginTop: "40px", textAlign: "center" }}>
      {isLoggedIn ? (
        <div
          style={{
            backgroundColor: "#d4edda",
            padding: "20px",
            borderRadius: "4px",
            border: "1px solid #c3e6cb",
          }}
        >
          <h2>🎉 ยินดีต้อนรับ!</h2>
          <p>คุณได้เข้าสู่ระบบแล้ว</p>
          <button
            onClick={() => setLoggedIn(false)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            ออกจากระบบ
          </button>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "#f8d7da",
            padding: "20px",
            borderRadius: "4px",
            border: "1px solid #f5c6cb",
          }}
        >
          <h2>🔒 กรุณาเข้าสู่ระบบ</h2>
          <button
            onClick={() => setLoggedIn(true)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            เข้าสู่ระบบ
          </button>
        </div>
      )}
    </div>
  );
}

function Notification() {
  const [hasMessage, setHasMessage] = useState(false);

  return (
    <div style={{ padding: "20px", marginTop: "40px", maxWidth: "400px" }}>
      {hasMessage && (
        <div
          style={{
            backgroundColor: "#d4edda",
            border: "1px solid #c3e6cb",
            padding: "15px",
            borderRadius: "4px",
            marginBottom: "15px",
            color: "#155724",
          }}
        >
          📩 คุณมีข้อความใหม่!
        </div>
      )}

      <button
        onClick={() => setHasMessage(!hasMessage)}
        style={{
          padding: "10px 20px",
          backgroundColor: hasMessage ? "#dc3545" : "#28a745",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {hasMessage ? "ลบการแจ้งเตือน" : "เพิ่มการแจ้งเตือน"}
      </button>
    </div>
  );
}

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function addTodo() {
    if (input.trim()) {
      const newTodo = {
        id: Date.now(),
        text: input,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInput("");
    }
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      addTodo();
    }
  }

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "30px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h1 style={{ textAlign: "center" }}>📝 รายการที่ต้องทำ</h1>

      {/* Input Section */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="เพิ่มสิ่งที่ต้องทำ..."
          style={{
            flex: 1,
            padding: "12px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ddd",
          }}
        />
        <button
          onClick={addTodo}
          style={{
            padding: "12px 24px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          เพิ่ม
        </button>
      </div>

      {/* Todo List */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              backgroundColor: "#fff",
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid #ddd",
              textDecoration: todo.completed ? "line-through" : "none",
              opacity: todo.completed ? 0.6 : 1,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                style={{ cursor: "pointer", width: "18px", height: "18px" }}
              />
              <span>{todo.text}</span>
            </div>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{
                padding: "8px 12px",
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              ลบ
            </button>
          </li>
        ))}
      </ul>

      {/* Empty State */}
      {todos.length === 0 && (
        <p style={{ textAlign: "center", color: "#999", marginTop: "20px" }}>
          ยังไม่มีรายการ เพิ่มเลย! 🎯
        </p>
      )}

      {/* Stats */}
      {todos.length > 0 && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            backgroundColor: "#e7f3ff",
            borderRadius: "4px",
            textAlign: "center",
            color: "#0066cc",
          }}
        >
          <strong>
            {todos.filter((t) => t.completed).length} / {todos.length}{" "}
            สำเร็จแล้ว
          </strong>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Counter />
      <ToggleMenu />
      <UserInfo />
      <InputExample />
      <LoginForm />
      <LoginStatus />
      <Notification />
      <TodoApp />
    </div>
  );
}
