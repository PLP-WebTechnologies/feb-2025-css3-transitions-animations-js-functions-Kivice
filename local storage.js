function savePreference(key, value) {
  localStorage.setItem(key, value);
}

function getPreference(key) {
  return localStorage.getItem(key);
}

// Example usage:
savePreference("theme", "dark");
console.log(getPreference("theme")); // Outputs "dark"