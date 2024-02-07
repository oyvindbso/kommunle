            >
              📈
            </button>
            <button
              className="ml-3 text-xl"
              type="button"
              onClick={() => setSettingsOpen(true)}
            >
              ⚙️
            </button>
          </header>
          <Game settingsData={settingsData} />
          <footer className="flex justify-center text-sm mt-8 mb-1">
            ❤️ <Worldle />? -
            <a
              className="underline pl-1"
              href="https://www.buymeacoffee.com/oyvindbs"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"Kjøp oss en kaffe!"}
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;