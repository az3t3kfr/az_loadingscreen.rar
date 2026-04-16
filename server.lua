-- ========================================================================
--        MD STUDIO - CHARGEMENT INTERACTIF PREMIUM
--        Créé et développé par : MD STUDIO
--        Copyright © 2026 MD Studio. Tous droits réservés.
-- ========================================================================

AddEventHandler('onResourceStart', function(resourceName)
    if (GetCurrentResourceName() ~= resourceName) then
        return
    end

    -- Message de signature MD STUDIO corrigé à la main - Indéformable
    print([[
^0
^4  ███╗   ███╗██████╗     ███████╗████████╗██╗   ██╗██████╗ ██╗ ██████╗ 
^4  ████╗ ████║██╔══██╗    ██╔════╝╚══██╔══╝██║   ██║██╔══██╗██║██╔═══██╗
^4  ██╔████╔██║██║  ██║    ███████╗   ██║   ██║   ██║██║  ██║██║██║   ██║
^4  ██║╚██╔╝██║██║  ██║    ╚════██║   ██║   ██║   ██║██║  ██║██║██║   ██║
^4  ██║ ╚═╝ ██║██████╔╝    ███████║   ██║   ╚██████╔╝██████╔╝██║╚██████╔╝
^4  ╚═╝     ╚═╝╚═════╝     ╚══════╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝ ╚═════╝ 
^0
^2    [MD STUDIO] ^0L'ecran de chargement interactif est operationnel !
^2    [CREE PAR ] ^0Développeur : ^5MD STUDIO^0
^2    [ETAT     ] ^0Système validé ^2[✔]^0
^0]])
end)