use serde::Serialize;
// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[derive(Serialize)]
struct User {
    name: String,
    age: u32,
}

#[tauri::command]
fn hello(name: &str, age: u32, enabled: bool, arr: Vec<i32>, obj: serde_json::Value) -> User {
    println!(
        "Hello from Rust!, {}! {}! {}! {:#?}! {}!",
        name, age, enabled, arr, obj
    );
    User {
        name: "Alice".to_string(),
        age: 30,
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    // println!("Hello from Tauri!");
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![greet, hello])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
