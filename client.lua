Citizen.CreateThread(function()
    print("^5[MD STUDIO]^0 L'ecran de chargement interactif a ete initialise avec succes. Copyright MD Studio.")
    -- On attend que le joueur soit "spawned"
    while not NetworkIsPlayerActive(PlayerId()) do
        Citizen.Wait(100)
    end

    -- On laisse 1 seconde de sécurité pour que les textures du sol chargent
    Citizen.Wait(1000)

    -- On éteint l'écran de chargement proprement
    ShutdownLoadingScreen()
    ShutdownLoadingScreenNui()
    
    print("^2[MD Studio] Chargement terminé, le joueur est en ville.^0")
end)