using Progetto.Data;
using Progetto.Models;
using Progetto.ModelsDTO;
using Microsoft.EntityFrameworkCore;
namespace FormulaApi.Endpoints;
public static class TeamsEndPoints
{
    public static WebApplication MapTeamsEndpoints(this WebApplication app)
    {
        app.MapPost("/teams", async (FormulaContext dbContext, TeamDTO teamDTODTO) =>
        {
            Console.WriteLine("entrato nel post");
            Team team = new()
            {
                strTeam = teamDTODTO.StrTeam,
                strLeague = teamDTODTO.StrLeague,
                strCountry = teamDTODTO.StrCountry,
                strDescriptionEN = teamDTODTO.StrDescriptionEN,
            };
            Console.WriteLine("creata squadra");
            dbContext.Teams.Add(team);
            await dbContext.SaveChangesAsync();
            Console.WriteLine("salvata squadra");
            return Results.Created($"/teams/{team.idTeam}", team);

        });
        app.MapGet("/teams", async (FormulaContext dbContext) =>
        {
            var teams = await dbContext.Teams.ToListAsync();
            return Results.Ok(teams);
        });
        return app;
    }
}