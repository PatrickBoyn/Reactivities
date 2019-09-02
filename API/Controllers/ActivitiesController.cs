using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Activities;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActivitiesController : ControllerBase
    {
        private readonly IMediator _mediator;
        public ActivitiesController(IMediator mediator)
        {
            _mediator = mediator;

        }

        [HttpGet]
        public async Task<ActionResult<List<Activity>>> List()
        {
            List<Domain.Activity> activityList = await _mediator.Send(new List.Query());

            return activityList;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> Details(Guid id)
        {
            Activity detail = await _mediator.Send(new Details.Query { Id = id });

            return detail;
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Create()
        {

        }
    }
}