using Progetto.Data;
using Progetto.Models;
using Progetto.ModelsDTO;
using Microsoft.EntityFrameworkCore;
namespace FormulaApi.Endpoints;
public static class PlayerEndPoints
{
    public static WebApplication MapPlayerEndpoints(this WebApplication app)
    {
        app.MapPost("/players", async (FormulaContext dbContext, PlayerDTO playerDTO) =>
        {
            Player player = new()
            {
                strPlayer = playerDTO.StrPlayer,
                strNationality = playerDTO.StrNationality,
                strTeam = playerDTO.StrTeam,
                strNumber = playerDTO.StrNumber,
                strDescriptionEN = playerDTO.StrDescriptionEN
            };
            dbContext.Players.Add(player);
            await dbContext.SaveChangesAsync();
            return Results.Created($"/players/{player.idPlayer}", player);
        });
        app.MapGet("/players", async (FormulaContext dbContext) =>
        {
            var players = await dbContext.Players.ToListAsync();
            return Results.Ok(players);
        });
    
        return app;
    }
}