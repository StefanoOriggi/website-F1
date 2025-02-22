namespace Progetto.Data;

using Microsoft.EntityFrameworkCore;
using Progetto.Models;
public class FormulaContext : DbContext
{
    public FormulaContext(DbContextOptions<FormulaContext> options) : base(options) { }
    public DbSet<Team>? Teams { get; set; }
    public DbSet<Event>? Events { get; set; }
    public DbSet<Season>? Seasons { get; set; }
}